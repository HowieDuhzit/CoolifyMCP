#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import axios, { AxiosInstance } from 'axios';
import { z } from 'zod';

// Configuration schema
const ConfigSchema = z.object({
  baseUrl: z.string().default('https://app.coolify.io/api/v1'),
  token: z.string(),
});

type Config = z.infer<typeof ConfigSchema>;

class CoolifyMCPServer {
  private server: Server;
  private config?: Config;
  private axiosInstance?: AxiosInstance;

  constructor() {
    this.server = new Server(
      {
        name: 'coolify-mcp-server',
        version: '1.0.0',
      }
    );

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  private setupErrorHandling() {
    this.server.onerror = (error) => {
      console.error('[MCP Error]', error);
    };

    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  private setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: this.getTools(),
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        this.initializeConfig(args);
        this.initializeAxios();
        return await this.handleToolCall(name, args);
      } catch (error) {
        throw new Error(`Tool execution failed: ${error instanceof Error ? error.message : String(error)}`);
      }
    });
  }

  private initializeConfig(args: any) {
    const baseUrl = args?.baseUrl || process.env.COOLIFY_BASE_URL || 'https://app.coolify.io/api/v1';
    const token = args?.token || process.env.COOLIFY_API_TOKEN;
    
    if (!token) {
      throw new Error('Coolify API token is required. Set COOLIFY_API_TOKEN environment variable or pass token in arguments.');
    }

    this.config = ConfigSchema.parse({ baseUrl, token });
  }

  private initializeAxios() {
    if (!this.config) throw new Error('Config not initialized');
    
    this.axiosInstance = axios.create({
      baseURL: this.config.baseUrl,
      headers: {
        'Authorization': `Bearer ${this.config.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      timeout: 30000,
    });
  }

  private getTools(): Tool[] {
    return [
      // Health & System
      {
        name: 'coolify_health_check',
        description: 'Check Coolify system health',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'coolify_version',
        description: 'Get Coolify API version information',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },

      // Team Management
      {
        name: 'coolify_list_teams',
        description: 'List all teams',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'coolify_get_current_team',
        description: 'Get current team information',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },

      // Project Management
      {
        name: 'coolify_list_projects',
        description: 'List all projects',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Page number' },
            per_page: { type: 'number', description: 'Items per page' },
          },
        },
      },
      {
        name: 'coolify_create_project',
        description: 'Create a new project',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Project name' },
            description: { type: 'string', description: 'Project description' },
          },
          required: ['name'],
        },
      },
      {
        name: 'coolify_get_project',
        description: 'Get project by UUID',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Project UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_delete_project',
        description: 'Delete project',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Project UUID' },
          },
          required: ['uuid'],
        },
      },

      // Application Management
      {
        name: 'coolify_list_applications',
        description: 'List all applications',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Page number' },
            per_page: { type: 'number', description: 'Items per page' },
          },
        },
      },
      {
        name: 'coolify_create_public_application',
        description: 'Create a public application',
        inputSchema: {
          type: 'object',
          properties: {
            project_uuid: { type: 'string', description: 'Project UUID' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            environment_name: { type: 'string', description: 'Environment name' },
            git_repository: { type: 'string', description: 'Git repository URL' },
            git_branch: { type: 'string', description: 'Git branch', default: 'main' },
            build_pack: { 
              type: 'string', 
              enum: ['nixpacks', 'static', 'dockerfile', 'dockercompose'],
              description: 'Build pack type' 
            },
            ports_exposes: { type: 'string', description: 'Port configuration' },
            name: { type: 'string', description: 'Application name' },
          },
          required: ['project_uuid', 'server_uuid', 'environment_name', 'git_repository', 'build_pack', 'ports_exposes'],
        },
      },
      {
        name: 'coolify_get_application',
        description: 'Get application by UUID',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_delete_application',
        description: 'Delete application',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
          },
          required: ['uuid'],
        },
      },

      // Application Actions
      {
        name: 'coolify_start_application',
        description: 'Start application',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_stop_application',
        description: 'Stop application',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_restart_application',
        description: 'Restart application',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_get_application_logs',
        description: 'Get application logs',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
          },
          required: ['uuid'],
        },
      },

      // Database Management
      {
        name: 'coolify_list_databases',
        description: 'List all databases',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Page number' },
            per_page: { type: 'number', description: 'Items per page' },
          },
        },
      },
      {
        name: 'coolify_create_database',
        description: 'Create a new database',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Database name' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            project_uuid: { type: 'string', description: 'Project UUID' },
            environment_name: { type: 'string', description: 'Environment name' },
            type: { 
              type: 'string', 
              enum: ['postgresql', 'mysql', 'mongodb', 'redis', 'mariadb', 'clickhouse', 'dragonfly', 'keydb'],
              description: 'Database type' 
            },
          },
          required: ['name', 'server_uuid', 'project_uuid', 'environment_name', 'type'],
        },
      },

      // Server Management
      {
        name: 'coolify_list_servers',
        description: 'List all servers',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Page number' },
            per_page: { type: 'number', description: 'Items per page' },
          },
        },
      },

      // Deployment Management
      {
        name: 'coolify_list_deployments',
        description: 'List all deployments',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Page number' },
            per_page: { type: 'number', description: 'Items per page' },
          },
        },
      },
      {
        name: 'coolify_trigger_deployment',
        description: 'Trigger a deployment',
        inputSchema: {
          type: 'object',
          properties: {
            application_uuid: { type: 'string', description: 'Application UUID' },
            force_rebuild: { type: 'boolean', description: 'Force rebuild', default: false },
          },
          required: ['application_uuid'],
        },
      },
    ];
  }

  private async handleToolCall(name: string, args: any) {
    if (!this.axiosInstance) throw new Error('Axios instance not initialized');

    switch (name) {
      case 'coolify_health_check':
        return await this.healthCheck();
      case 'coolify_version':
        return await this.getVersion();
      case 'coolify_list_teams':
        return await this.listTeams();
      case 'coolify_get_current_team':
        return await this.getCurrentTeam();
      case 'coolify_list_projects':
        return await this.listProjects(args);
      case 'coolify_create_project':
        return await this.createProject(args);
      case 'coolify_get_project':
        return await this.getProject(args.uuid);
      case 'coolify_delete_project':
        return await this.deleteProject(args.uuid);
      case 'coolify_list_applications':
        return await this.listApplications(args);
      case 'coolify_create_public_application':
        return await this.createPublicApplication(args);
      case 'coolify_get_application':
        return await this.getApplication(args.uuid);
      case 'coolify_delete_application':
        return await this.deleteApplication(args.uuid);
      case 'coolify_start_application':
        return await this.startApplication(args.uuid);
      case 'coolify_stop_application':
        return await this.stopApplication(args.uuid);
      case 'coolify_restart_application':
        return await this.restartApplication(args.uuid);
      case 'coolify_get_application_logs':
        return await this.getApplicationLogs(args.uuid);
      case 'coolify_list_databases':
        return await this.listDatabases(args);
      case 'coolify_create_database':
        return await this.createDatabase(args);
      case 'coolify_list_servers':
        return await this.listServers(args);
      case 'coolify_list_deployments':
        return await this.listDeployments(args);
      case 'coolify_trigger_deployment':
        return await this.triggerDeployment(args);
      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  }

  // API Methods
  private async healthCheck() {
    const response = await this.axiosInstance!.get('/health');
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getVersion() {
    const response = await this.axiosInstance!.get('/version');
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async listTeams() {
    const response = await this.axiosInstance!.get('/teams');
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getCurrentTeam() {
    const response = await this.axiosInstance!.get('/teams/current');
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async listProjects(args: any) {
    const params = new URLSearchParams();
    if (args.page) params.append('page', args.page.toString());
    if (args.per_page) params.append('per_page', args.per_page.toString());
    
    const response = await this.axiosInstance!.get(`/projects?${params.toString()}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createProject(args: any) {
    const response = await this.axiosInstance!.post('/projects', { name: args.name, description: args.description });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getProject(uuid: string) {
    const response = await this.axiosInstance!.get(`/projects/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async deleteProject(uuid: string) {
    await this.axiosInstance!.delete(`/projects/${uuid}`);
    return { content: [{ type: 'text', text: 'Project deleted successfully' }] };
  }

  private async listApplications(args: any) {
    const params = new URLSearchParams();
    if (args.page) params.append('page', args.page.toString());
    if (args.per_page) params.append('per_page', args.per_page.toString());
    
    const response = await this.axiosInstance!.get(`/applications?${params.toString()}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createPublicApplication(args: any) {
    const response = await this.axiosInstance!.post('/applications/public', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getApplication(uuid: string) {
    const response = await this.axiosInstance!.get(`/applications/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async deleteApplication(uuid: string) {
    await this.axiosInstance!.delete(`/applications/${uuid}`);
    return { content: [{ type: 'text', text: 'Application deleted successfully' }] };
  }

  private async startApplication(uuid: string) {
    const response = await this.axiosInstance!.post(`/applications/${uuid}/start`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async stopApplication(uuid: string) {
    const response = await this.axiosInstance!.post(`/applications/${uuid}/stop`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async restartApplication(uuid: string) {
    const response = await this.axiosInstance!.post(`/applications/${uuid}/restart`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getApplicationLogs(uuid: string) {
    const response = await this.axiosInstance!.get(`/applications/${uuid}/logs`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async listDatabases(args: any) {
    const params = new URLSearchParams();
    if (args.page) params.append('page', args.page.toString());
    if (args.per_page) params.append('per_page', args.per_page.toString());
    
    const response = await this.axiosInstance!.get(`/databases?${params.toString()}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createDatabase(args: any) {
    const endpoint = `/databases/${args.type}`;
    const response = await this.axiosInstance!.post(endpoint, args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async listServers(args: any) {
    const params = new URLSearchParams();
    if (args.page) params.append('page', args.page.toString());
    if (args.per_page) params.append('per_page', args.per_page.toString());
    
    const response = await this.axiosInstance!.get(`/servers?${params.toString()}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async listDeployments(args: any) {
    const params = new URLSearchParams();
    if (args.page) params.append('page', args.page.toString());
    if (args.per_page) params.append('per_page', args.per_page.toString());
    
    const response = await this.axiosInstance!.get(`/deployments?${params.toString()}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async triggerDeployment(args: any) {
    const response = await this.axiosInstance!.post('/deploy', {
      application_uuid: args.application_uuid,
      force_rebuild: args.force_rebuild || false,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Coolify MCP server running on stdio');
    
    // Start HTTP server for health checks if running in container
    if (process.env.NODE_ENV === 'production') {
      this.startHealthServer();
    }
  }

  private startHealthServer() {
    const http = require('http');
    const server = http.createServer((req: any, res: any) => {
      if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'healthy', timestamp: new Date().toISOString() }));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
      }
    });

    const port = process.env.PORT || 3000;
    server.listen(port, () => {
      console.error(`Health server running on port ${port}`);
    });
  }
}

async function main() {
  const server = new CoolifyMCPServer();
  await server.run();
}

// Start the server
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});

#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import { ConfigManager } from './config.js';
import { CoolifyAPIClient } from './api-client.js';
import { CoolifyHandlers } from './handlers.js';
import { HealthServer } from './health-server.js';
import { getTools } from './tools.js';
import { CoolifyError } from './types.js';

class CoolifyMCPServer {
  private server: Server;
  private configManager: ConfigManager;
  private apiClient: CoolifyAPIClient;
  private handlers: CoolifyHandlers;
  private healthServer: HealthServer;

  constructor() {
    this.server = new Server(
      {
        name: 'coolify-mcp-server',
        version: '1.0.0',
      }
    );

    this.configManager = new ConfigManager();
    this.apiClient = new CoolifyAPIClient(this.configManager);
    this.handlers = new CoolifyHandlers(this.apiClient);
    this.healthServer = new HealthServer();

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  private setupErrorHandling() {
    this.server.onerror = (error) => {
      console.error('[MCP Error]', error);
    };

    process.on('SIGINT', async () => {
      await this.server.close();
      this.healthServer.stop();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      await this.server.close();
      this.healthServer.stop();
      process.exit(0);
    });
  }

  private setupToolHandlers() {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: getTools(),
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        this.configManager.initialize(args);
        this.apiClient.initialize();
        return await this.handleToolCall(name, args);
      } catch (error) {
        const errorMessage = error instanceof CoolifyError 
          ? error.message 
          : error instanceof Error 
            ? error.message 
            : String(error);
        
        throw new Error(`Tool execution failed: ${errorMessage}`);
      }
    });
  }

  private async handleToolCall(name: string, args: any) {
    switch (name) {
      // System Management
      case 'coolify_system':
        return await this.handlers.system(args.action);
      
      // Team Management
      case 'coolify_teams':
        return await this.handlers.teams(args.action, args.team_id);
      
      // Project Management
      case 'coolify_projects':
        return await this.handlers.projects(args.action, args);
      case 'coolify_project_environments':
        return await this.handlers.projectEnvironments(args.action, args);
      
      // Application Management
      case 'coolify_applications':
        return await this.handlers.applications(args.action, args);
      case 'coolify_application_lifecycle':
        return await this.handlers.applicationLifecycle(args.action, args.uuid);
      case 'coolify_application_envs':
        return await this.handlers.applicationEnvs(args.action, args);
      case 'coolify_logs':
        return await this.handlers.logs(args.action, args.uuid, args.lines);
      case 'coolify_application_deployments':
        return await this.handlers.applicationDeployments(args.action, args);
      
      // Database Management
      case 'coolify_databases':
        return await this.handlers.databases(args.action, args);
      case 'coolify_database_lifecycle':
        return await this.handlers.databaseLifecycle(args.action, args.uuid);
      case 'coolify_database_types':
        return await this.handlers.databaseTypes(args.action, args);
      
      // Server Management
      case 'coolify_servers':
        return await this.handlers.servers(args.action, args);
      case 'coolify_server_management':
        return await this.handlers.serverManagement(args.action, args.uuid);
      
      // Service Management
      case 'coolify_services':
        return await this.handlers.services(args.action, args);
      case 'coolify_service_lifecycle':
        return await this.handlers.serviceLifecycle(args.action, args.uuid);
      case 'coolify_service_envs':
        return await this.handlers.serviceEnvs(args.action, args);
      
      // Security Keys Management
      case 'coolify_security_keys':
        return await this.handlers.securityKeys(args.action, args);
      
      default:
        throw new CoolifyError(`Unknown tool: ${name}`, 400);
    }
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Coolify MCP server running on stdio');
    
    // Start HTTP server for health checks if running in container
    if (process.env.NODE_ENV === 'production') {
      const port = parseInt(process.env.PORT || '3000', 10);
      this.healthServer.start(port);
    }
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
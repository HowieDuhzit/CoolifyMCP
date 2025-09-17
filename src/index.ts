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
      {
        name: 'coolify_get_team',
        description: 'Get team by ID',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string', description: 'Team ID' },
          },
          required: ['id'],
        },
      },
      {
        name: 'coolify_list_team_members',
        description: 'List team members',
        inputSchema: {
          type: 'object',
          properties: {
            team_id: { type: 'string', description: 'Team ID (optional, defaults to current team)' },
          },
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
      {
        name: 'coolify_get_project_environment',
        description: 'Get project environment details',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Project UUID' },
            environment_name_or_uuid: { type: 'string', description: 'Environment name or UUID' },
          },
          required: ['uuid', 'environment_name_or_uuid'],
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
        name: 'coolify_create_private_github_application',
        description: 'Create a private GitHub application',
        inputSchema: {
          type: 'object',
          properties: {
            project_uuid: { type: 'string', description: 'Project UUID' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            github_app_uuid: { type: 'string', description: 'GitHub App UUID' },
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
          required: ['project_uuid', 'server_uuid', 'github_app_uuid', 'environment_name', 'git_repository', 'build_pack', 'ports_exposes'],
        },
      },
      {
        name: 'coolify_create_dockerfile_application',
        description: 'Create a Dockerfile application',
        inputSchema: {
          type: 'object',
          properties: {
            project_uuid: { type: 'string', description: 'Project UUID' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            environment_name: { type: 'string', description: 'Environment name' },
            git_repository: { type: 'string', description: 'Git repository URL' },
            git_branch: { type: 'string', description: 'Git branch', default: 'main' },
            ports_exposes: { type: 'string', description: 'Port configuration' },
            name: { type: 'string', description: 'Application name' },
            dockerfile_location: { type: 'string', description: 'Dockerfile location', default: '/Dockerfile' },
          },
          required: ['project_uuid', 'server_uuid', 'environment_name', 'git_repository', 'ports_exposes'],
        },
      },
      {
        name: 'coolify_create_dockerimage_application',
        description: 'Create a Docker image application',
        inputSchema: {
          type: 'object',
          properties: {
            project_uuid: { type: 'string', description: 'Project UUID' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            environment_name: { type: 'string', description: 'Environment name' },
            docker_registry_image_name: { type: 'string', description: 'Docker registry image name' },
            docker_registry_image_tag: { type: 'string', description: 'Docker registry image tag', default: 'latest' },
            ports_exposes: { type: 'string', description: 'Port configuration' },
            name: { type: 'string', description: 'Application name' },
          },
          required: ['project_uuid', 'server_uuid', 'environment_name', 'docker_registry_image_name', 'ports_exposes'],
        },
      },
      {
        name: 'coolify_update_application',
        description: 'Update application',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
            name: { type: 'string', description: 'Application name' },
            description: { type: 'string', description: 'Application description' },
          },
          required: ['uuid'],
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

      // Environment Variables Management
      {
        name: 'coolify_list_application_envs',
        description: 'List application environment variables',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_create_application_env',
        description: 'Create application environment variable',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
            key: { type: 'string', description: 'Environment variable key' },
            value: { type: 'string', description: 'Environment variable value' },
            is_secret: { type: 'boolean', description: 'Whether the variable is secret', default: false },
          },
          required: ['uuid', 'key', 'value'],
        },
      },
      {
        name: 'coolify_bulk_update_application_envs',
        description: 'Bulk update application environment variables',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
            envs: { 
              type: 'array', 
              description: 'Array of environment variables',
              items: {
                type: 'object',
                properties: {
                  key: { type: 'string' },
                  value: { type: 'string' },
                  is_secret: { type: 'boolean', default: false },
                },
                required: ['key', 'value'],
              },
            },
          },
          required: ['uuid', 'envs'],
        },
      },
      {
        name: 'coolify_delete_application_env',
        description: 'Delete application environment variable',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
            env_uuid: { type: 'string', description: 'Environment variable UUID' },
          },
          required: ['uuid', 'env_uuid'],
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
      {
        name: 'coolify_create_postgresql_database',
        description: 'Create a PostgreSQL database',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Database name' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            project_uuid: { type: 'string', description: 'Project UUID' },
            environment_name: { type: 'string', description: 'Environment name' },
            postgresql_user: { type: 'string', description: 'PostgreSQL user' },
            postgresql_password: { type: 'string', description: 'PostgreSQL password' },
            postgresql_db: { type: 'string', description: 'PostgreSQL database name' },
          },
          required: ['name', 'server_uuid', 'project_uuid', 'environment_name'],
        },
      },
      {
        name: 'coolify_create_mysql_database',
        description: 'Create a MySQL database',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Database name' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            project_uuid: { type: 'string', description: 'Project UUID' },
            environment_name: { type: 'string', description: 'Environment name' },
            mysql_user: { type: 'string', description: 'MySQL user' },
            mysql_password: { type: 'string', description: 'MySQL password' },
            mysql_database: { type: 'string', description: 'MySQL database name' },
            mysql_root_password: { type: 'string', description: 'MySQL root password' },
          },
          required: ['name', 'server_uuid', 'project_uuid', 'environment_name'],
        },
      },
      {
        name: 'coolify_create_mongodb_database',
        description: 'Create a MongoDB database',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Database name' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            project_uuid: { type: 'string', description: 'Project UUID' },
            environment_name: { type: 'string', description: 'Environment name' },
            mongodb_root_username: { type: 'string', description: 'MongoDB root username' },
            mongodb_root_password: { type: 'string', description: 'MongoDB root password' },
            mongodb_database: { type: 'string', description: 'MongoDB database name' },
            mongodb_username: { type: 'string', description: 'MongoDB username' },
            mongodb_password: { type: 'string', description: 'MongoDB password' },
          },
          required: ['name', 'server_uuid', 'project_uuid', 'environment_name'],
        },
      },
      {
        name: 'coolify_create_redis_database',
        description: 'Create a Redis database',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Database name' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            project_uuid: { type: 'string', description: 'Project UUID' },
            environment_name: { type: 'string', description: 'Environment name' },
            redis_password: { type: 'string', description: 'Redis password' },
          },
          required: ['name', 'server_uuid', 'project_uuid', 'environment_name'],
        },
      },
      {
        name: 'coolify_get_database',
        description: 'Get database by UUID',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Database UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_update_database',
        description: 'Update database',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Database UUID' },
            name: { type: 'string', description: 'Database name' },
            description: { type: 'string', description: 'Database description' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_delete_database',
        description: 'Delete database',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Database UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_start_database',
        description: 'Start database',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Database UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_stop_database',
        description: 'Stop database',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Database UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_restart_database',
        description: 'Restart database',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Database UUID' },
          },
          required: ['uuid'],
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
      {
        name: 'coolify_create_server',
        description: 'Create a new server',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Server name' },
            description: { type: 'string', description: 'Server description' },
            ip: { type: 'string', description: 'Server IP address' },
            port: { type: 'number', description: 'SSH port', default: 22 },
            user: { type: 'string', description: 'SSH user', default: 'root' },
            private_key_id: { type: 'string', description: 'Private key ID' },
          },
          required: ['name', 'ip'],
        },
      },
      {
        name: 'coolify_get_server',
        description: 'Get server by UUID',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Server UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_update_server',
        description: 'Update server',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Server UUID' },
            name: { type: 'string', description: 'Server name' },
            description: { type: 'string', description: 'Server description' },
            ip: { type: 'string', description: 'Server IP address' },
            port: { type: 'number', description: 'SSH port' },
            user: { type: 'string', description: 'SSH user' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_delete_server',
        description: 'Delete server',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Server UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_validate_server',
        description: 'Validate server connection',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Server UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_list_server_domains',
        description: 'List server domains',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Server UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_list_server_resources',
        description: 'List server resources',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Server UUID' },
          },
          required: ['uuid'],
        },
      },

      // Service Management
      {
        name: 'coolify_list_services',
        description: 'List all services',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Page number' },
            per_page: { type: 'number', description: 'Items per page' },
          },
        },
      },
      {
        name: 'coolify_create_service',
        description: 'Create a new service',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Service name' },
            description: { type: 'string', description: 'Service description' },
            server_uuid: { type: 'string', description: 'Server UUID' },
            project_uuid: { type: 'string', description: 'Project UUID' },
            environment_name: { type: 'string', description: 'Environment name' },
            docker_compose_raw: { type: 'string', description: 'Docker Compose configuration' },
          },
          required: ['name', 'server_uuid', 'project_uuid', 'environment_name', 'docker_compose_raw'],
        },
      },
      {
        name: 'coolify_get_service',
        description: 'Get service by UUID',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Service UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_update_service',
        description: 'Update service',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Service UUID' },
            name: { type: 'string', description: 'Service name' },
            description: { type: 'string', description: 'Service description' },
            docker_compose_raw: { type: 'string', description: 'Docker Compose configuration' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_delete_service',
        description: 'Delete service',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Service UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_start_service',
        description: 'Start service',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Service UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_stop_service',
        description: 'Stop service',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Service UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_restart_service',
        description: 'Restart service',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Service UUID' },
          },
          required: ['uuid'],
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
        name: 'coolify_get_deployment',
        description: 'Get deployment by UUID',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Deployment UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_get_application_deployments',
        description: 'Get deployments for an application',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Application UUID' },
          },
          required: ['uuid'],
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

      // Security & Keys Management
      {
        name: 'coolify_list_security_keys',
        description: 'List all security keys',
        inputSchema: {
          type: 'object',
          properties: {
            page: { type: 'number', description: 'Page number' },
            per_page: { type: 'number', description: 'Items per page' },
          },
        },
      },
      {
        name: 'coolify_create_security_key',
        description: 'Create a new security key',
        inputSchema: {
          type: 'object',
          properties: {
            name: { type: 'string', description: 'Key name' },
            description: { type: 'string', description: 'Key description' },
            key: { type: 'string', description: 'SSH private key content' },
          },
          required: ['name', 'key'],
        },
      },
      {
        name: 'coolify_get_security_key',
        description: 'Get security key by UUID',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Security key UUID' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_update_security_key',
        description: 'Update security key',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Security key UUID' },
            name: { type: 'string', description: 'Key name' },
            description: { type: 'string', description: 'Key description' },
            key: { type: 'string', description: 'SSH private key content' },
          },
          required: ['uuid'],
        },
      },
      {
        name: 'coolify_delete_security_key',
        description: 'Delete security key',
        inputSchema: {
          type: 'object',
          properties: {
            uuid: { type: 'string', description: 'Security key UUID' },
          },
          required: ['uuid'],
        },
      },
    ];
  }

  private async handleToolCall(name: string, args: any) {
    if (!this.axiosInstance) throw new Error('Axios instance not initialized');

    switch (name) {
      // Health & System
      case 'coolify_health_check':
        return await this.healthCheck();
      case 'coolify_version':
        return await this.getVersion();
      
      // Team Management
      case 'coolify_list_teams':
        return await this.listTeams();
      case 'coolify_get_current_team':
        return await this.getCurrentTeam();
      case 'coolify_get_team':
        return await this.getTeam(args.id);
      case 'coolify_list_team_members':
        return await this.listTeamMembers(args.team_id);
      
      // Project Management
      case 'coolify_list_projects':
        return await this.listProjects(args);
      case 'coolify_create_project':
        return await this.createProject(args);
      case 'coolify_get_project':
        return await this.getProject(args.uuid);
      case 'coolify_delete_project':
        return await this.deleteProject(args.uuid);
      case 'coolify_get_project_environment':
        return await this.getProjectEnvironment(args.uuid, args.environment_name_or_uuid);
      
      // Application Management
      case 'coolify_list_applications':
        return await this.listApplications(args);
      case 'coolify_create_public_application':
        return await this.createPublicApplication(args);
      case 'coolify_create_private_github_application':
        return await this.createPrivateGithubApplication(args);
      case 'coolify_create_dockerfile_application':
        return await this.createDockerfileApplication(args);
      case 'coolify_create_dockerimage_application':
        return await this.createDockerimageApplication(args);
      case 'coolify_get_application':
        return await this.getApplication(args.uuid);
      case 'coolify_update_application':
        return await this.updateApplication(args);
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
      
      // Environment Variables Management
      case 'coolify_list_application_envs':
        return await this.listApplicationEnvs(args.uuid);
      case 'coolify_create_application_env':
        return await this.createApplicationEnv(args);
      case 'coolify_bulk_update_application_envs':
        return await this.bulkUpdateApplicationEnvs(args);
      case 'coolify_delete_application_env':
        return await this.deleteApplicationEnv(args.uuid, args.env_uuid);
      
      // Database Management
      case 'coolify_list_databases':
        return await this.listDatabases(args);
      case 'coolify_create_database':
        return await this.createDatabase(args);
      case 'coolify_create_postgresql_database':
        return await this.createPostgresqlDatabase(args);
      case 'coolify_create_mysql_database':
        return await this.createMysqlDatabase(args);
      case 'coolify_create_mongodb_database':
        return await this.createMongodbDatabase(args);
      case 'coolify_create_redis_database':
        return await this.createRedisDatabase(args);
      case 'coolify_get_database':
        return await this.getDatabase(args.uuid);
      case 'coolify_update_database':
        return await this.updateDatabase(args);
      case 'coolify_delete_database':
        return await this.deleteDatabase(args.uuid);
      case 'coolify_start_database':
        return await this.startDatabase(args.uuid);
      case 'coolify_stop_database':
        return await this.stopDatabase(args.uuid);
      case 'coolify_restart_database':
        return await this.restartDatabase(args.uuid);
      
      // Server Management
      case 'coolify_list_servers':
        return await this.listServers(args);
      case 'coolify_create_server':
        return await this.createServer(args);
      case 'coolify_get_server':
        return await this.getServer(args.uuid);
      case 'coolify_update_server':
        return await this.updateServer(args);
      case 'coolify_delete_server':
        return await this.deleteServer(args.uuid);
      case 'coolify_validate_server':
        return await this.validateServer(args.uuid);
      case 'coolify_list_server_domains':
        return await this.listServerDomains(args.uuid);
      case 'coolify_list_server_resources':
        return await this.listServerResources(args.uuid);
      
      // Service Management
      case 'coolify_list_services':
        return await this.listServices(args);
      case 'coolify_create_service':
        return await this.createService(args);
      case 'coolify_get_service':
        return await this.getService(args.uuid);
      case 'coolify_update_service':
        return await this.updateService(args);
      case 'coolify_delete_service':
        return await this.deleteService(args.uuid);
      case 'coolify_start_service':
        return await this.startService(args.uuid);
      case 'coolify_stop_service':
        return await this.stopService(args.uuid);
      case 'coolify_restart_service':
        return await this.restartService(args.uuid);
      
      // Deployment Management
      case 'coolify_list_deployments':
        return await this.listDeployments(args);
      case 'coolify_get_deployment':
        return await this.getDeployment(args.uuid);
      case 'coolify_get_application_deployments':
        return await this.getApplicationDeployments(args.uuid);
      case 'coolify_trigger_deployment':
        return await this.triggerDeployment(args);
      
      // Security & Keys Management
      case 'coolify_list_security_keys':
        return await this.listSecurityKeys(args);
      case 'coolify_create_security_key':
        return await this.createSecurityKey(args);
      case 'coolify_get_security_key':
        return await this.getSecurityKey(args.uuid);
      case 'coolify_update_security_key':
        return await this.updateSecurityKey(args);
      case 'coolify_delete_security_key':
        return await this.deleteSecurityKey(args.uuid);
      
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

  private async getTeam(id: string) {
    const response = await this.axiosInstance!.get(`/teams/${id}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async listTeamMembers(teamId?: string) {
    const endpoint = teamId ? `/teams/${teamId}/members` : '/teams/current/members';
    const response = await this.axiosInstance!.get(endpoint);
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

  private async getProjectEnvironment(uuid: string, environmentNameOrUuid: string) {
    const response = await this.axiosInstance!.get(`/projects/${uuid}/${environmentNameOrUuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
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

  private async createPrivateGithubApplication(args: any) {
    const response = await this.axiosInstance!.post('/applications/private-github-app', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createDockerfileApplication(args: any) {
    const response = await this.axiosInstance!.post('/applications/dockerfile', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createDockerimageApplication(args: any) {
    const response = await this.axiosInstance!.post('/applications/dockerimage', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async updateApplication(args: any) {
    const response = await this.axiosInstance!.patch(`/applications/${args.uuid}`, {
      name: args.name,
      description: args.description,
    });
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

  // Environment Variables Management
  private async listApplicationEnvs(uuid: string) {
    const response = await this.axiosInstance!.get(`/applications/${uuid}/envs`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createApplicationEnv(args: any) {
    const response = await this.axiosInstance!.post(`/applications/${args.uuid}/envs`, {
      key: args.key,
      value: args.value,
      is_secret: args.is_secret || false,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async bulkUpdateApplicationEnvs(args: any) {
    const response = await this.axiosInstance!.patch(`/applications/${args.uuid}/envs/bulk`, {
      envs: args.envs,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async deleteApplicationEnv(uuid: string, envUuid: string) {
    await this.axiosInstance!.delete(`/applications/${uuid}/envs/${envUuid}`);
    return { content: [{ type: 'text', text: 'Environment variable deleted successfully' }] };
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

  private async createPostgresqlDatabase(args: any) {
    const response = await this.axiosInstance!.post('/databases/postgresql', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createMysqlDatabase(args: any) {
    const response = await this.axiosInstance!.post('/databases/mysql', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createMongodbDatabase(args: any) {
    const response = await this.axiosInstance!.post('/databases/mongodb', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createRedisDatabase(args: any) {
    const response = await this.axiosInstance!.post('/databases/redis', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getDatabase(uuid: string) {
    const response = await this.axiosInstance!.get(`/databases/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async updateDatabase(args: any) {
    const response = await this.axiosInstance!.patch(`/databases/${args.uuid}`, {
      name: args.name,
      description: args.description,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async deleteDatabase(uuid: string) {
    await this.axiosInstance!.delete(`/databases/${uuid}`);
    return { content: [{ type: 'text', text: 'Database deleted successfully' }] };
  }

  private async startDatabase(uuid: string) {
    const response = await this.axiosInstance!.post(`/databases/${uuid}/start`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async stopDatabase(uuid: string) {
    const response = await this.axiosInstance!.post(`/databases/${uuid}/stop`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async restartDatabase(uuid: string) {
    const response = await this.axiosInstance!.post(`/databases/${uuid}/restart`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async listServers(args: any) {
    const params = new URLSearchParams();
    if (args.page) params.append('page', args.page.toString());
    if (args.per_page) params.append('per_page', args.per_page.toString());
    
    const response = await this.axiosInstance!.get(`/servers?${params.toString()}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createServer(args: any) {
    const response = await this.axiosInstance!.post('/servers', {
      name: args.name,
      description: args.description,
      ip: args.ip,
      port: args.port || 22,
      user: args.user || 'root',
      private_key_id: args.private_key_id,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getServer(uuid: string) {
    const response = await this.axiosInstance!.get(`/servers/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async updateServer(args: any) {
    const response = await this.axiosInstance!.patch(`/servers/${args.uuid}`, {
      name: args.name,
      description: args.description,
      ip: args.ip,
      port: args.port,
      user: args.user,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async deleteServer(uuid: string) {
    await this.axiosInstance!.delete(`/servers/${uuid}`);
    return { content: [{ type: 'text', text: 'Server deleted successfully' }] };
  }

  private async validateServer(uuid: string) {
    const response = await this.axiosInstance!.get(`/servers/${uuid}/validate`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async listServerDomains(uuid: string) {
    const response = await this.axiosInstance!.get(`/servers/${uuid}/domains`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async listServerResources(uuid: string) {
    const response = await this.axiosInstance!.get(`/servers/${uuid}/resources`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Service Management
  private async listServices(args: any) {
    const params = new URLSearchParams();
    if (args.page) params.append('page', args.page.toString());
    if (args.per_page) params.append('per_page', args.per_page.toString());
    
    const response = await this.axiosInstance!.get(`/services?${params.toString()}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createService(args: any) {
    const response = await this.axiosInstance!.post('/services', {
      name: args.name,
      description: args.description,
      server_uuid: args.server_uuid,
      project_uuid: args.project_uuid,
      environment_name: args.environment_name,
      docker_compose_raw: args.docker_compose_raw,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getService(uuid: string) {
    const response = await this.axiosInstance!.get(`/services/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async updateService(args: any) {
    const response = await this.axiosInstance!.patch(`/services/${args.uuid}`, {
      name: args.name,
      description: args.description,
      docker_compose_raw: args.docker_compose_raw,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async deleteService(uuid: string) {
    await this.axiosInstance!.delete(`/services/${uuid}`);
    return { content: [{ type: 'text', text: 'Service deleted successfully' }] };
  }

  private async startService(uuid: string) {
    const response = await this.axiosInstance!.post(`/services/${uuid}/start`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async stopService(uuid: string) {
    const response = await this.axiosInstance!.post(`/services/${uuid}/stop`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async restartService(uuid: string) {
    const response = await this.axiosInstance!.post(`/services/${uuid}/restart`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Deployment Management
  private async listDeployments(args: any) {
    const params = new URLSearchParams();
    if (args.page) params.append('page', args.page.toString());
    if (args.per_page) params.append('per_page', args.per_page.toString());
    
    const response = await this.axiosInstance!.get(`/deployments?${params.toString()}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getDeployment(uuid: string) {
    const response = await this.axiosInstance!.get(`/deployments/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getApplicationDeployments(uuid: string) {
    const response = await this.axiosInstance!.get(`/deployments/applications/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async triggerDeployment(args: any) {
    const response = await this.axiosInstance!.post('/deploy', {
      application_uuid: args.application_uuid,
      force_rebuild: args.force_rebuild || false,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Security & Keys Management
  private async listSecurityKeys(args: any) {
    const params = new URLSearchParams();
    if (args.page) params.append('page', args.page.toString());
    if (args.per_page) params.append('per_page', args.per_page.toString());
    
    const response = await this.axiosInstance!.get(`/security/keys?${params.toString()}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async createSecurityKey(args: any) {
    const response = await this.axiosInstance!.post('/security/keys', {
      name: args.name,
      description: args.description,
      key: args.key,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async getSecurityKey(uuid: string) {
    const response = await this.axiosInstance!.get(`/security/keys/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async updateSecurityKey(args: any) {
    const response = await this.axiosInstance!.patch(`/security/keys/${args.uuid}`, {
      name: args.name,
      description: args.description,
      key: args.key,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  private async deleteSecurityKey(uuid: string) {
    await this.axiosInstance!.delete(`/security/keys/${uuid}`);
    return { content: [{ type: 'text', text: 'Security key deleted successfully' }] };
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

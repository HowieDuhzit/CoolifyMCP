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
      // Health & System
      case 'coolify_health_check':
        return await this.handlers.healthCheck();
      case 'coolify_version':
        return await this.handlers.getVersion();
      
      // Team Management
      case 'coolify_list_teams':
        return await this.handlers.listTeams();
      case 'coolify_get_current_team':
        return await this.handlers.getCurrentTeam();
      case 'coolify_get_team':
        return await this.handlers.getTeam(args.id);
      case 'coolify_list_team_members':
        return await this.handlers.listTeamMembers(args.team_id);
      
      // Project Management
      case 'coolify_list_projects':
        return await this.handlers.listProjects(args);
      case 'coolify_create_project':
        return await this.handlers.createProject(args);
      case 'coolify_get_project':
        return await this.handlers.getProject(args.uuid);
      case 'coolify_update_project':
        return await this.handlers.updateProject(args);
      case 'coolify_delete_project':
        return await this.handlers.deleteProject(args.uuid);
      case 'coolify_get_project_environment':
        return await this.handlers.getProjectEnvironment(args.uuid, args.environment_name_or_uuid);
      case 'coolify_list_project_environments':
        return await this.handlers.listProjectEnvironments(args.uuid);
      case 'coolify_create_project_environment':
        return await this.handlers.createProjectEnvironment(args);
      case 'coolify_delete_project_environment':
        return await this.handlers.deleteProjectEnvironment(args.uuid, args.environment_name_or_uuid);
      
      // Application Management
      case 'coolify_list_applications':
        return await this.handlers.listApplications(args);
      case 'coolify_create_public_application':
        return await this.handlers.createPublicApplication(args);
      case 'coolify_create_private_github_application':
        return await this.handlers.createPrivateGithubApplication(args);
      case 'coolify_create_private_deploy_key_application':
        return await this.handlers.createPrivateDeployKeyApplication(args);
      case 'coolify_create_dockerfile_application':
        return await this.handlers.createDockerfileApplication(args);
      case 'coolify_create_dockerimage_application':
        return await this.handlers.createDockerimageApplication(args);
      case 'coolify_create_dockercompose_application':
        return await this.handlers.createDockercomposeApplication(args);
      case 'coolify_get_application':
        return await this.handlers.getApplication(args.uuid);
      case 'coolify_update_application':
        return await this.handlers.updateApplication(args);
      case 'coolify_delete_application':
        return await this.handlers.deleteApplication(args.uuid);
      case 'coolify_start_application':
        return await this.handlers.startApplication(args.uuid);
      case 'coolify_stop_application':
        return await this.handlers.stopApplication(args.uuid);
      case 'coolify_restart_application':
        return await this.handlers.restartApplication(args.uuid);
      case 'coolify_get_application_logs':
        return await this.handlers.getApplicationLogs(args.uuid);
      
      // Environment Variables Management
      case 'coolify_list_application_envs':
        return await this.handlers.listApplicationEnvs(args.uuid);
      case 'coolify_create_application_env':
        return await this.handlers.createApplicationEnv(args);
      case 'coolify_bulk_update_application_envs':
        return await this.handlers.bulkUpdateApplicationEnvs(args);
      case 'coolify_delete_application_env':
        return await this.handlers.deleteApplicationEnv(args.uuid, args.env_uuid);
      
      // Database Management
      case 'coolify_list_databases':
        return await this.handlers.listDatabases(args);
      case 'coolify_create_database':
        return await this.handlers.createDatabase(args);
      case 'coolify_create_postgresql_database':
        return await this.handlers.createPostgresqlDatabase(args);
      case 'coolify_create_mysql_database':
        return await this.handlers.createMysqlDatabase(args);
      case 'coolify_create_mongodb_database':
        return await this.handlers.createMongodbDatabase(args);
      case 'coolify_create_redis_database':
        return await this.handlers.createRedisDatabase(args);
      case 'coolify_get_database':
        return await this.handlers.getDatabase(args.uuid);
      case 'coolify_update_database':
        return await this.handlers.updateDatabase(args);
      case 'coolify_delete_database':
        return await this.handlers.deleteDatabase(args.uuid);
      case 'coolify_start_database':
        return await this.handlers.startDatabase(args.uuid);
      case 'coolify_stop_database':
        return await this.handlers.stopDatabase(args.uuid);
      case 'coolify_restart_database':
        return await this.handlers.restartDatabase(args.uuid);
      
      // Server Management
      case 'coolify_list_servers':
        return await this.handlers.listServers(args);
      case 'coolify_create_server':
        return await this.handlers.createServer(args);
      case 'coolify_get_server':
        return await this.handlers.getServer(args.uuid);
      case 'coolify_update_server':
        return await this.handlers.updateServer(args);
      case 'coolify_delete_server':
        return await this.handlers.deleteServer(args.uuid);
      case 'coolify_validate_server':
        return await this.handlers.validateServer(args.uuid);
      case 'coolify_list_server_domains':
        return await this.handlers.listServerDomains(args.uuid);
      case 'coolify_list_server_resources':
        return await this.handlers.listServerResources(args.uuid);
      
      // Service Management
      case 'coolify_list_services':
        return await this.handlers.listServices(args);
      case 'coolify_create_service':
        return await this.handlers.createService(args);
      case 'coolify_get_service':
        return await this.handlers.getService(args.uuid);
      case 'coolify_update_service':
        return await this.handlers.updateService(args);
      case 'coolify_delete_service':
        return await this.handlers.deleteService(args.uuid);
      case 'coolify_start_service':
        return await this.handlers.startService(args.uuid);
      case 'coolify_stop_service':
        return await this.handlers.stopService(args.uuid);
      case 'coolify_restart_service':
        return await this.handlers.restartService(args.uuid);
      
      // Service Environment Variables Management
      case 'coolify_list_service_envs':
        return await this.handlers.listServiceEnvs(args.uuid);
      case 'coolify_create_service_env':
        return await this.handlers.createServiceEnv(args);
      case 'coolify_update_service_env':
        return await this.handlers.updateServiceEnv(args);
      case 'coolify_bulk_update_service_envs':
        return await this.handlers.bulkUpdateServiceEnvs(args);
      case 'coolify_delete_service_env':
        return await this.handlers.deleteServiceEnv(args.uuid, args.env_uuid);
      
      // Deployment Management
      case 'coolify_list_deployments':
        return await this.handlers.listDeployments(args);
      case 'coolify_get_deployment':
        return await this.handlers.getDeployment(args.uuid);
      case 'coolify_get_application_deployments':
        return await this.handlers.getApplicationDeployments(args.uuid);
      case 'coolify_trigger_deployment':
        return await this.handlers.triggerDeployment(args);
      
      // Security & Keys Management
      case 'coolify_list_security_keys':
        return await this.handlers.listSecurityKeys(args);
      case 'coolify_create_security_key':
        return await this.handlers.createSecurityKey(args);
      case 'coolify_get_security_key':
        return await this.handlers.getSecurityKey(args.uuid);
      case 'coolify_update_security_key':
        return await this.handlers.updateSecurityKey(args);
      case 'coolify_delete_security_key':
        return await this.handlers.deleteSecurityKey(args.uuid);
      
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
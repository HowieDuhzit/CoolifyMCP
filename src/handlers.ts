import { CoolifyAPIClient } from './api-client.js';
import { 
  PaginationArgs, 
  ProjectArgs, 
  ApplicationArgs, 
  DatabaseArgs, 
  ServerArgs, 
  ServiceArgs, 
  DeploymentArgs, 
  SecurityKeyArgs,
  EnvironmentVariableArgs,
  BulkEnvironmentVariablesArgs
} from './types.js';

export class CoolifyHandlers {
  constructor(private apiClient: CoolifyAPIClient) {}

  // Health & System
  async healthCheck() {
    const response = await this.apiClient.get('/health');
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getVersion() {
    const response = await this.apiClient.get('/version');
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Team Management
  async listTeams() {
    const response = await this.apiClient.get('/teams');
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getCurrentTeam() {
    const response = await this.apiClient.get('/teams/current');
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getTeam(id: string) {
    const response = await this.apiClient.get(`/teams/${id}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async listTeamMembers(teamId?: string) {
    const endpoint = teamId ? `/teams/${teamId}/members` : '/teams/current/members';
    const response = await this.apiClient.get(endpoint);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Project Management
  async listProjects(args: PaginationArgs) {
    const queryString = this.apiClient.buildQueryString(args);
    const response = await this.apiClient.get(`/projects?${queryString}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createProject(args: ProjectArgs) {
    const response = await this.apiClient.post('/projects', { 
      name: args.name, 
      description: args.description 
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getProject(uuid: string) {
    const response = await this.apiClient.get(`/projects/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async deleteProject(uuid: string) {
    await this.apiClient.delete(`/projects/${uuid}`);
    return { content: [{ type: 'text', text: 'Project deleted successfully' }] };
  }

  async getProjectEnvironment(uuid: string, environmentNameOrUuid: string) {
    const response = await this.apiClient.get(`/projects/${uuid}/${environmentNameOrUuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Application Management
  async listApplications(args: PaginationArgs) {
    const queryString = this.apiClient.buildQueryString(args);
    const response = await this.apiClient.get(`/applications?${queryString}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createPublicApplication(args: ApplicationArgs) {
    const response = await this.apiClient.post('/applications/public', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createPrivateGithubApplication(args: ApplicationArgs) {
    const response = await this.apiClient.post('/applications/private-github-app', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createDockerfileApplication(args: ApplicationArgs) {
    const response = await this.apiClient.post('/applications/dockerfile', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createDockerimageApplication(args: ApplicationArgs) {
    const response = await this.apiClient.post('/applications/dockerimage', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async updateApplication(args: ApplicationArgs) {
    const response = await this.apiClient.patch(`/applications/${args.uuid}`, {
      name: args.name,
      description: args.description,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getApplication(uuid: string) {
    const response = await this.apiClient.get(`/applications/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async deleteApplication(uuid: string) {
    await this.apiClient.delete(`/applications/${uuid}`);
    return { content: [{ type: 'text', text: 'Application deleted successfully' }] };
  }

  async startApplication(uuid: string) {
    const response = await this.apiClient.post(`/applications/${uuid}/start`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async stopApplication(uuid: string) {
    const response = await this.apiClient.post(`/applications/${uuid}/stop`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async restartApplication(uuid: string) {
    const response = await this.apiClient.post(`/applications/${uuid}/restart`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getApplicationLogs(uuid: string) {
    const response = await this.apiClient.get(`/applications/${uuid}/logs`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Environment Variables Management
  async listApplicationEnvs(uuid: string) {
    const response = await this.apiClient.get(`/applications/${uuid}/envs`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createApplicationEnv(args: EnvironmentVariableArgs) {
    const response = await this.apiClient.post(`/applications/${args.uuid}/envs`, {
      key: args.key,
      value: args.value,
      is_secret: args.is_secret || false,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async bulkUpdateApplicationEnvs(args: BulkEnvironmentVariablesArgs) {
    const response = await this.apiClient.patch(`/applications/${args.uuid}/envs/bulk`, {
      envs: args.envs,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async deleteApplicationEnv(uuid: string, envUuid: string) {
    await this.apiClient.delete(`/applications/${uuid}/envs/${envUuid}`);
    return { content: [{ type: 'text', text: 'Environment variable deleted successfully' }] };
  }

  // Database Management
  async listDatabases(args: PaginationArgs) {
    const queryString = this.apiClient.buildQueryString(args);
    const response = await this.apiClient.get(`/databases?${queryString}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createDatabase(args: DatabaseArgs) {
    const endpoint = `/databases/${args.type}`;
    const response = await this.apiClient.post(endpoint, args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createPostgresqlDatabase(args: DatabaseArgs) {
    const response = await this.apiClient.post('/databases/postgresql', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createMysqlDatabase(args: DatabaseArgs) {
    const response = await this.apiClient.post('/databases/mysql', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createMongodbDatabase(args: DatabaseArgs) {
    const response = await this.apiClient.post('/databases/mongodb', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createRedisDatabase(args: DatabaseArgs) {
    const response = await this.apiClient.post('/databases/redis', args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getDatabase(uuid: string) {
    const response = await this.apiClient.get(`/databases/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async updateDatabase(args: DatabaseArgs) {
    const response = await this.apiClient.patch(`/databases/${args.uuid}`, {
      name: args.name,
      description: args.description,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async deleteDatabase(uuid: string) {
    await this.apiClient.delete(`/databases/${uuid}`);
    return { content: [{ type: 'text', text: 'Database deleted successfully' }] };
  }

  async startDatabase(uuid: string) {
    const response = await this.apiClient.post(`/databases/${uuid}/start`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async stopDatabase(uuid: string) {
    const response = await this.apiClient.post(`/databases/${uuid}/stop`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async restartDatabase(uuid: string) {
    const response = await this.apiClient.post(`/databases/${uuid}/restart`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Server Management
  async listServers(args: PaginationArgs) {
    const queryString = this.apiClient.buildQueryString(args);
    const response = await this.apiClient.get(`/servers?${queryString}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createServer(args: ServerArgs) {
    const response = await this.apiClient.post('/servers', {
      name: args.name,
      description: args.description,
      ip: args.ip,
      port: args.port || 22,
      user: args.user || 'root',
      private_key_id: args.private_key_id,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getServer(uuid: string) {
    const response = await this.apiClient.get(`/servers/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async updateServer(args: ServerArgs) {
    const response = await this.apiClient.patch(`/servers/${args.uuid}`, {
      name: args.name,
      description: args.description,
      ip: args.ip,
      port: args.port,
      user: args.user,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async deleteServer(uuid: string) {
    await this.apiClient.delete(`/servers/${uuid}`);
    return { content: [{ type: 'text', text: 'Server deleted successfully' }] };
  }

  async validateServer(uuid: string) {
    const response = await this.apiClient.get(`/servers/${uuid}/validate`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async listServerDomains(uuid: string) {
    const response = await this.apiClient.get(`/servers/${uuid}/domains`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async listServerResources(uuid: string) {
    const response = await this.apiClient.get(`/servers/${uuid}/resources`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Service Management
  async listServices(args: PaginationArgs) {
    const queryString = this.apiClient.buildQueryString(args);
    const response = await this.apiClient.get(`/services?${queryString}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createService(args: ServiceArgs) {
    const response = await this.apiClient.post('/services', {
      name: args.name,
      description: args.description,
      server_uuid: args.server_uuid,
      project_uuid: args.project_uuid,
      environment_name: args.environment_name,
      docker_compose_raw: args.docker_compose_raw,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getService(uuid: string) {
    const response = await this.apiClient.get(`/services/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async updateService(args: ServiceArgs) {
    const response = await this.apiClient.patch(`/services/${args.uuid}`, {
      name: args.name,
      description: args.description,
      docker_compose_raw: args.docker_compose_raw,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async deleteService(uuid: string) {
    await this.apiClient.delete(`/services/${uuid}`);
    return { content: [{ type: 'text', text: 'Service deleted successfully' }] };
  }

  async startService(uuid: string) {
    const response = await this.apiClient.post(`/services/${uuid}/start`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async stopService(uuid: string) {
    const response = await this.apiClient.post(`/services/${uuid}/stop`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async restartService(uuid: string) {
    const response = await this.apiClient.post(`/services/${uuid}/restart`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Deployment Management
  async listDeployments(args: PaginationArgs) {
    const queryString = this.apiClient.buildQueryString(args);
    const response = await this.apiClient.get(`/deployments?${queryString}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getDeployment(uuid: string) {
    const response = await this.apiClient.get(`/deployments/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getApplicationDeployments(uuid: string) {
    const response = await this.apiClient.get(`/deployments/applications/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async triggerDeployment(args: DeploymentArgs) {
    const response = await this.apiClient.post('/deploy', {
      application_uuid: args.application_uuid,
      force_rebuild: args.force_rebuild || false,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Security & Keys Management
  async listSecurityKeys(args: PaginationArgs) {
    const queryString = this.apiClient.buildQueryString(args);
    const response = await this.apiClient.get(`/security/keys?${queryString}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async createSecurityKey(args: SecurityKeyArgs) {
    const response = await this.apiClient.post('/security/keys', {
      name: args.name,
      description: args.description,
      key: args.key,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async getSecurityKey(uuid: string) {
    const response = await this.apiClient.get(`/security/keys/${uuid}`);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async updateSecurityKey(args: SecurityKeyArgs) {
    const response = await this.apiClient.patch(`/security/keys/${args.uuid}`, {
      name: args.name,
      description: args.description,
      key: args.key,
    });
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  async deleteSecurityKey(uuid: string) {
    await this.apiClient.delete(`/security/keys/${uuid}`);
    return { content: [{ type: 'text', text: 'Security key deleted successfully' }] };
  }
}

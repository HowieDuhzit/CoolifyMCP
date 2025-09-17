import { CoolifyAPIClient } from './api-client.js';

export class CoolifyHandlers {
  constructor(private apiClient: CoolifyAPIClient) {}

  // System Management
  async system(action: string) {
    switch (action) {
      case 'health':
        const healthResponse = await this.apiClient.get('/health');
        return { content: [{ type: 'text', text: JSON.stringify(healthResponse.data, null, 2) }] };
      case 'version':
        const versionResponse = await this.apiClient.get('/version');
        return { content: [{ type: 'text', text: JSON.stringify(versionResponse.data, null, 2) }] };
      case 'info':
        const [health, version] = await Promise.all([
          this.apiClient.get('/health'),
          this.apiClient.get('/version')
        ]);
        const systemInfo = {
          health: health.data,
          version: version.data,
          timestamp: new Date().toISOString()
        };
        return { content: [{ type: 'text', text: JSON.stringify(systemInfo, null, 2) }] };
      default:
        throw new Error(`Unknown system action: ${action}`);
    }
  }

  // Team Management
  async teams(action: string, teamId?: string) {
    switch (action) {
      case 'list':
        const response = await this.apiClient.get('/teams');
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'current':
        const currentResponse = await this.apiClient.get('/teams/current');
        return { content: [{ type: 'text', text: JSON.stringify(currentResponse.data, null, 2) }] };
      case 'get':
        if (!teamId) throw new Error('Team ID is required for get action');
        const getResponse = await this.apiClient.get(`/teams/${teamId}`);
        return { content: [{ type: 'text', text: JSON.stringify(getResponse.data, null, 2) }] };
      case 'members':
        const endpoint = teamId ? `/teams/${teamId}/members` : '/teams/current/members';
        const membersResponse = await this.apiClient.get(endpoint);
        return { content: [{ type: 'text', text: JSON.stringify(membersResponse.data, null, 2) }] };
      default:
        throw new Error(`Unknown teams action: ${action}`);
    }
  }

  // Project Management
  async projects(action: string, args: any) {
    switch (action) {
      case 'list':
        const queryString = this.apiClient.buildQueryString(args);
        const response = await this.apiClient.get(`/projects?${queryString}`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'create':
        const createResponse = await this.apiClient.post('/projects', { 
          name: args.name, 
          description: args.description 
        });
        return { content: [{ type: 'text', text: JSON.stringify(createResponse.data, null, 2) }] };
      case 'get':
        if (!args.uuid) throw new Error('Project UUID is required for get action');
        const getResponse = await this.apiClient.get(`/projects/${args.uuid}`);
        return { content: [{ type: 'text', text: JSON.stringify(getResponse.data, null, 2) }] };
      case 'update':
        if (!args.uuid) throw new Error('Project UUID is required for update action');
        const updateResponse = await this.apiClient.patch(`/projects/${args.uuid}`, {
          name: args.name,
          description: args.description,
        });
        return { content: [{ type: 'text', text: JSON.stringify(updateResponse.data, null, 2) }] };
      case 'delete':
        if (!args.uuid) throw new Error('Project UUID is required for delete action');
        await this.apiClient.delete(`/projects/${args.uuid}`);
        return { content: [{ type: 'text', text: 'Project deleted successfully' }] };
      default:
        throw new Error(`Unknown projects action: ${action}`);
    }
  }

  // Project Environment Management
  async projectEnvironments(action: string, args: any) {
    if (!args.project_uuid) throw new Error('Project UUID is required for all project environment actions');
    
    switch (action) {
      case 'list':
        const response = await this.apiClient.get(`/projects/${args.project_uuid}/environments`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'create':
        if (!args.name) throw new Error('Environment name is required for create action');
        const createResponse = await this.apiClient.post(`/projects/${args.project_uuid}/environments`, {
          name: args.name,
        });
        return { content: [{ type: 'text', text: JSON.stringify(createResponse.data, null, 2) }] };
      case 'get':
        if (!args.environment_name_or_uuid) throw new Error('Environment name or UUID is required for get action');
        const getResponse = await this.apiClient.get(`/projects/${args.project_uuid}/${args.environment_name_or_uuid}`);
        return { content: [{ type: 'text', text: JSON.stringify(getResponse.data, null, 2) }] };
      case 'delete':
        if (!args.environment_name_or_uuid) throw new Error('Environment name or UUID is required for delete action');
        const deleteResponse = await this.apiClient.delete(`/projects/${args.project_uuid}/environments/${args.environment_name_or_uuid}`);
        return { content: [{ type: 'text', text: JSON.stringify(deleteResponse.data, null, 2) }] };
      default:
        throw new Error(`Unknown project environments action: ${action}`);
    }
  }

  // Application Management
  async applications(action: string, args: any) {
    switch (action) {
      case 'list':
        const queryString = this.apiClient.buildQueryString(args);
        const response = await this.apiClient.get(`/applications?${queryString}`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'create':
        if (!args.type) throw new Error('Application type is required for create action');
        const endpoint = this.getApplicationCreateEndpoint(args.type);
        const createResponse = await this.apiClient.post(endpoint, args);
        return { content: [{ type: 'text', text: JSON.stringify(createResponse.data, null, 2) }] };
      case 'get':
        if (!args.uuid) throw new Error('Application UUID is required for get action');
        const getResponse = await this.apiClient.get(`/applications/${args.uuid}`);
        return { content: [{ type: 'text', text: JSON.stringify(getResponse.data, null, 2) }] };
      case 'update':
        if (!args.uuid) throw new Error('Application UUID is required for update action');
        const updateResponse = await this.apiClient.patch(`/applications/${args.uuid}`, {
          name: args.name,
          description: args.description,
        });
        return { content: [{ type: 'text', text: JSON.stringify(updateResponse.data, null, 2) }] };
      case 'delete':
        if (!args.uuid) throw new Error('Application UUID is required for delete action');
        await this.apiClient.delete(`/applications/${args.uuid}`);
        return { content: [{ type: 'text', text: 'Application deleted successfully' }] };
      default:
        throw new Error(`Unknown applications action: ${action}`);
    }
  }

  private getApplicationCreateEndpoint(type: string): string {
    switch (type) {
      case 'public': return '/applications/public';
      case 'private_github': return '/applications/private-github-app';
      case 'private_deploy_key': return '/applications/private-deploy-key';
      case 'dockerfile': return '/applications/dockerfile';
      case 'dockerimage': return '/applications/dockerimage';
      case 'dockercompose': return '/applications/dockercompose';
      default: throw new Error(`Unknown application type: ${type}`);
    }
  }

  // Application Lifecycle Management
  async applicationLifecycle(action: string, uuid: string) {
    if (!uuid) throw new Error('Application UUID is required for all lifecycle actions');
    
    switch (action) {
      case 'start':
        const startResponse = await this.apiClient.post(`/applications/${uuid}/start`);
        return { content: [{ type: 'text', text: JSON.stringify(startResponse.data, null, 2) }] };
      case 'stop':
        const stopResponse = await this.apiClient.post(`/applications/${uuid}/stop`);
        return { content: [{ type: 'text', text: JSON.stringify(stopResponse.data, null, 2) }] };
      case 'restart':
        const restartResponse = await this.apiClient.post(`/applications/${uuid}/restart`);
        return { content: [{ type: 'text', text: JSON.stringify(restartResponse.data, null, 2) }] };
      default:
        throw new Error(`Unknown application lifecycle action: ${action}`);
    }
  }

  // Application Environment Variables Management
  async applicationEnvs(action: string, args: any) {
    if (!args.uuid) throw new Error('Application UUID is required for all environment variable actions');
    
    switch (action) {
      case 'list':
        const response = await this.apiClient.get(`/applications/${args.uuid}/envs`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'create':
        if (!args.key || !args.value) throw new Error('Key and value are required for create action');
        const createResponse = await this.apiClient.post(`/applications/${args.uuid}/envs`, {
          key: args.key,
          value: args.value,
        });
        return { content: [{ type: 'text', text: JSON.stringify(createResponse.data, null, 2) }] };
      case 'bulk_update':
        if (!args.envs) throw new Error('Environment variables array is required for bulk_update action');
        const bulkResponse = await this.apiClient.patch(`/applications/${args.uuid}/envs/bulk`, {
          envs: args.envs,
        });
        return { content: [{ type: 'text', text: JSON.stringify(bulkResponse.data, null, 2) }] };
      case 'delete':
        if (!args.env_uuid) throw new Error('Environment variable UUID is required for delete action');
        await this.apiClient.delete(`/applications/${args.uuid}/envs/${args.env_uuid}`);
        return { content: [{ type: 'text', text: 'Environment variable deleted successfully' }] };
      default:
        throw new Error(`Unknown application environment variables action: ${action}`);
    }
  }

  // Application Logs and Monitoring
  async logs(action: string, uuid: string, lines?: number) {
    if (!uuid) throw new Error('Application UUID is required for logs action');
    
    switch (action) {
      case 'get':
        const endpoint = lines ? `/applications/${uuid}/logs?lines=${lines}` : `/applications/${uuid}/logs`;
        const response = await this.apiClient.get(endpoint);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      default:
        throw new Error(`Unknown logs action: ${action}`);
    }
  }

  // Application Deployments Management
  async applicationDeployments(action: string, args: any) {
    switch (action) {
      case 'list':
        const queryString = this.apiClient.buildQueryString(args);
        const response = await this.apiClient.get(`/deployments?${queryString}`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'get':
        if (!args.deployment_uuid) throw new Error('Deployment UUID is required for get action');
        const getResponse = await this.apiClient.get(`/deployments/${args.deployment_uuid}`);
        return { content: [{ type: 'text', text: JSON.stringify(getResponse.data, null, 2) }] };
      case 'trigger':
        if (!args.uuid) throw new Error('Application UUID is required for trigger action');
        const triggerResponse = await this.apiClient.post('/deploy', {
          uuid: args.uuid,
          force_rebuild: args.force_rebuild || false,
        });
        return { content: [{ type: 'text', text: JSON.stringify(triggerResponse.data, null, 2) }] };
      default:
        throw new Error(`Unknown application deployments action: ${action}`);
    }
  }

  // Database Management
  async databases(action: string, args: any) {
    switch (action) {
      case 'list':
        const queryString = this.apiClient.buildQueryString(args);
        const response = await this.apiClient.get(`/databases?${queryString}`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'create':
        if (!args.type) throw new Error('Database type is required for create action');
        const endpoint = `/databases/${args.type}`;
        const createResponse = await this.apiClient.post(endpoint, args);
        return { content: [{ type: 'text', text: JSON.stringify(createResponse.data, null, 2) }] };
      case 'get':
        if (!args.uuid) throw new Error('Database UUID is required for get action');
        const getResponse = await this.apiClient.get(`/databases/${args.uuid}`);
        return { content: [{ type: 'text', text: JSON.stringify(getResponse.data, null, 2) }] };
      case 'update':
        if (!args.uuid) throw new Error('Database UUID is required for update action');
        const updateResponse = await this.apiClient.patch(`/databases/${args.uuid}`, {
          name: args.name,
          description: args.description,
        });
        return { content: [{ type: 'text', text: JSON.stringify(updateResponse.data, null, 2) }] };
      case 'delete':
        if (!args.uuid) throw new Error('Database UUID is required for delete action');
        await this.apiClient.delete(`/databases/${args.uuid}`);
        return { content: [{ type: 'text', text: 'Database deleted successfully' }] };
      default:
        throw new Error(`Unknown databases action: ${action}`);
    }
  }

  // Database Lifecycle Management
  async databaseLifecycle(action: string, uuid: string) {
    if (!uuid) throw new Error('Database UUID is required for all lifecycle actions');
    
    switch (action) {
      case 'start':
        const startResponse = await this.apiClient.post(`/databases/${uuid}/start`);
        return { content: [{ type: 'text', text: JSON.stringify(startResponse.data, null, 2) }] };
      case 'stop':
        const stopResponse = await this.apiClient.post(`/databases/${uuid}/stop`);
        return { content: [{ type: 'text', text: JSON.stringify(stopResponse.data, null, 2) }] };
      case 'restart':
        const restartResponse = await this.apiClient.post(`/databases/${uuid}/restart`);
        return { content: [{ type: 'text', text: JSON.stringify(restartResponse.data, null, 2) }] };
      default:
        throw new Error(`Unknown database lifecycle action: ${action}`);
    }
  }

  // Database Types Management
  async databaseTypes(action: string, args: any) {
    if (action !== 'create') throw new Error('Only create action is supported for database types');
    if (!args.type) throw new Error('Database type is required for create action');
    
    const endpoint = `/databases/${args.type}`;
    const response = await this.apiClient.post(endpoint, args);
    return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
  }

  // Server Management
  async servers(action: string, args: any) {
    switch (action) {
      case 'list':
        const queryString = this.apiClient.buildQueryString(args);
        const response = await this.apiClient.get(`/servers?${queryString}`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'create':
        const createResponse = await this.apiClient.post('/servers', {
          name: args.name,
          description: args.description,
          ip: args.ip,
          port: args.port || 22,
          user: args.user || 'root',
          private_key_id: args.private_key_id,
        });
        return { content: [{ type: 'text', text: JSON.stringify(createResponse.data, null, 2) }] };
      case 'get':
        if (!args.uuid) throw new Error('Server UUID is required for get action');
        const getResponse = await this.apiClient.get(`/servers/${args.uuid}`);
        return { content: [{ type: 'text', text: JSON.stringify(getResponse.data, null, 2) }] };
      case 'update':
        if (!args.uuid) throw new Error('Server UUID is required for update action');
        const updateResponse = await this.apiClient.patch(`/servers/${args.uuid}`, {
          name: args.name,
          description: args.description,
          ip: args.ip,
          port: args.port,
          user: args.user,
        });
        return { content: [{ type: 'text', text: JSON.stringify(updateResponse.data, null, 2) }] };
      case 'delete':
        if (!args.uuid) throw new Error('Server UUID is required for delete action');
        await this.apiClient.delete(`/servers/${args.uuid}`);
        return { content: [{ type: 'text', text: 'Server deleted successfully' }] };
      default:
        throw new Error(`Unknown servers action: ${action}`);
    }
  }

  // Server Operations Management
  async serverManagement(action: string, uuid: string) {
    if (!uuid) throw new Error('Server UUID is required for all server management actions');
    
    switch (action) {
      case 'validate':
        const validateResponse = await this.apiClient.get(`/servers/${uuid}/validate`);
        return { content: [{ type: 'text', text: JSON.stringify(validateResponse.data, null, 2) }] };
      case 'domains':
        const domainsResponse = await this.apiClient.get(`/servers/${uuid}/domains`);
        return { content: [{ type: 'text', text: JSON.stringify(domainsResponse.data, null, 2) }] };
      case 'resources':
        const resourcesResponse = await this.apiClient.get(`/servers/${uuid}/resources`);
        return { content: [{ type: 'text', text: JSON.stringify(resourcesResponse.data, null, 2) }] };
      default:
        throw new Error(`Unknown server management action: ${action}`);
    }
  }

  // Service Management
  async services(action: string, args: any) {
    switch (action) {
      case 'list':
        const queryString = this.apiClient.buildQueryString(args);
        const response = await this.apiClient.get(`/services?${queryString}`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'create':
        const createResponse = await this.apiClient.post('/services', {
          name: args.name,
          description: args.description,
          server_uuid: args.server_uuid,
          project_uuid: args.project_uuid,
          environment_name: args.environment_name,
          docker_compose_raw: args.docker_compose_raw,
        });
        return { content: [{ type: 'text', text: JSON.stringify(createResponse.data, null, 2) }] };
      case 'get':
        if (!args.uuid) throw new Error('Service UUID is required for get action');
        const getResponse = await this.apiClient.get(`/services/${args.uuid}`);
        return { content: [{ type: 'text', text: JSON.stringify(getResponse.data, null, 2) }] };
      case 'update':
        if (!args.uuid) throw new Error('Service UUID is required for update action');
        const updateResponse = await this.apiClient.patch(`/services/${args.uuid}`, {
          name: args.name,
          description: args.description,
          docker_compose_raw: args.docker_compose_raw,
        });
        return { content: [{ type: 'text', text: JSON.stringify(updateResponse.data, null, 2) }] };
      case 'delete':
        if (!args.uuid) throw new Error('Service UUID is required for delete action');
        await this.apiClient.delete(`/services/${args.uuid}`);
        return { content: [{ type: 'text', text: 'Service deleted successfully' }] };
      default:
        throw new Error(`Unknown services action: ${action}`);
    }
  }

  // Service Lifecycle Management
  async serviceLifecycle(action: string, uuid: string) {
    if (!uuid) throw new Error('Service UUID is required for all lifecycle actions');
    
    switch (action) {
      case 'start':
        const startResponse = await this.apiClient.post(`/services/${uuid}/start`);
        return { content: [{ type: 'text', text: JSON.stringify(startResponse.data, null, 2) }] };
      case 'stop':
        const stopResponse = await this.apiClient.post(`/services/${uuid}/stop`);
        return { content: [{ type: 'text', text: JSON.stringify(stopResponse.data, null, 2) }] };
      case 'restart':
        const restartResponse = await this.apiClient.post(`/services/${uuid}/restart`);
        return { content: [{ type: 'text', text: JSON.stringify(restartResponse.data, null, 2) }] };
      default:
        throw new Error(`Unknown service lifecycle action: ${action}`);
    }
  }

  // Service Environment Variables Management
  async serviceEnvs(action: string, args: any) {
    if (!args.uuid) throw new Error('Service UUID is required for all environment variable actions');
    
    switch (action) {
      case 'list':
        const response = await this.apiClient.get(`/services/${args.uuid}/envs`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'create':
        if (!args.key || !args.value) throw new Error('Key and value are required for create action');
        const createResponse = await this.apiClient.post(`/services/${args.uuid}/envs`, {
          key: args.key,
          value: args.value,
        });
        return { content: [{ type: 'text', text: JSON.stringify(createResponse.data, null, 2) }] };
      case 'update':
        if (!args.key || !args.value) throw new Error('Key and value are required for update action');
        const updateResponse = await this.apiClient.patch(`/services/${args.uuid}/envs`, {
          key: args.key,
          value: args.value,
          is_preview: args.is_preview || false,
          is_build_time: args.is_build_time || false,
          is_literal: args.is_literal || false,
          is_multiline: args.is_multiline || false,
          is_shown_once: args.is_shown_once || false,
        });
        return { content: [{ type: 'text', text: JSON.stringify(updateResponse.data, null, 2) }] };
      case 'bulk_update':
        if (!args.envs) throw new Error('Environment variables array is required for bulk_update action');
        const bulkResponse = await this.apiClient.patch(`/services/${args.uuid}/envs/bulk`, {
          envs: args.envs,
        });
        return { content: [{ type: 'text', text: JSON.stringify(bulkResponse.data, null, 2) }] };
      case 'delete':
        if (!args.env_uuid) throw new Error('Environment variable UUID is required for delete action');
        await this.apiClient.delete(`/services/${args.uuid}/envs/${args.env_uuid}`);
        return { content: [{ type: 'text', text: 'Service environment variable deleted successfully' }] };
      default:
        throw new Error(`Unknown service environment variables action: ${action}`);
    }
  }

  // Security Keys Management
  async securityKeys(action: string, args: any) {
    switch (action) {
      case 'list':
        const queryString = this.apiClient.buildQueryString(args);
        const response = await this.apiClient.get(`/security/keys?${queryString}`);
        return { content: [{ type: 'text', text: JSON.stringify(response.data, null, 2) }] };
      case 'create':
        const createResponse = await this.apiClient.post('/security/keys', {
          name: args.name,
          description: args.description,
          private_key: args.key,
        });
        return { content: [{ type: 'text', text: JSON.stringify(createResponse.data, null, 2) }] };
      case 'get':
        if (!args.uuid) throw new Error('Security key UUID is required for get action');
        const getResponse = await this.apiClient.get(`/security/keys/${args.uuid}`);
        return { content: [{ type: 'text', text: JSON.stringify(getResponse.data, null, 2) }] };
      case 'update':
        if (!args.uuid) throw new Error('Security key UUID is required for update action');
        const updateResponse = await this.apiClient.patch(`/security/keys/${args.uuid}`, {
          name: args.name,
          description: args.description,
          private_key: args.key,
        });
        return { content: [{ type: 'text', text: JSON.stringify(updateResponse.data, null, 2) }] };
      case 'delete':
        if (!args.uuid) throw new Error('Security key UUID is required for delete action');
        await this.apiClient.delete(`/security/keys/${args.uuid}`);
        return { content: [{ type: 'text', text: 'Security key deleted successfully' }] };
      default:
        throw new Error(`Unknown security keys action: ${action}`);
    }
  }
}

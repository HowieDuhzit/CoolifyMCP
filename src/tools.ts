import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const getTools = (): Tool[] => [
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

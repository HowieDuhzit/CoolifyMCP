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
    name: 'coolify_update_project',
    description: 'Update project',
    inputSchema: {
      type: 'object',
      properties: {
        uuid: { type: 'string', description: 'Project UUID' },
        name: { type: 'string', description: 'Project name' },
        description: { type: 'string', description: 'Project description' },
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
  {
    name: 'coolify_list_project_environments',
    description: 'List all environments in a project',
    inputSchema: {
      type: 'object',
      properties: {
        uuid: { type: 'string', description: 'Project UUID' },
      },
      required: ['uuid'],
    },
  },
  {
    name: 'coolify_create_project_environment',
    description: 'Create environment in project',
    inputSchema: {
      type: 'object',
      properties: {
        uuid: { type: 'string', description: 'Project UUID' },
        name: { type: 'string', description: 'Environment name' },
      },
      required: ['uuid', 'name'],
    },
  },
  {
    name: 'coolify_delete_project_environment',
    description: 'Delete environment by name or UUID (environment must be empty)',
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
    name: 'coolify_create_private_deploy_key_application',
    description: 'Create a private application using deploy key',
    inputSchema: {
      type: 'object',
      properties: {
        project_uuid: { type: 'string', description: 'Project UUID' },
        server_uuid: { type: 'string', description: 'Server UUID' },
        environment_name: { type: 'string', description: 'Environment name' },
        private_key_uuid: { type: 'string', description: 'Private key UUID' },
        git_repository: { type: 'string', description: 'Git repository URL' },
        git_branch: { type: 'string', description: 'Git branch', default: 'main' },
        build_pack: { 
          type: 'string', 
          enum: ['nixpacks', 'static', 'dockerfile', 'dockercompose'],
          description: 'Build pack type' 
        },
        ports_exposes: { type: 'string', description: 'Port configuration' },
        name: { type: 'string', description: 'Application name' },
        description: { type: 'string', description: 'Application description' },
        destination_uuid: { type: 'string', description: 'Destination UUID' },
        domains: { type: 'string', description: 'Domains configuration' },
        git_commit_sha: { type: 'string', description: 'Git commit SHA' },
        docker_registry_image_name: { type: 'string', description: 'Docker registry image name' },
        docker_registry_image_tag: { type: 'string', description: 'Docker registry image tag' },
        is_static: { type: 'boolean', description: 'Is static application' },
        static_image: { type: 'string', description: 'Static image' },
        install_command: { type: 'string', description: 'Install command' },
        build_command: { type: 'string', description: 'Build command' },
        start_command: { type: 'string', description: 'Start command' },
        ports_mappings: { type: 'string', description: 'Port mappings' },
        base_directory: { type: 'string', description: 'Base directory' },
        publish_directory: { type: 'string', description: 'Publish directory' },
        health_check_enabled: { type: 'boolean', description: 'Enable health checks' },
        health_check_path: { type: 'string', description: 'Health check path' },
        health_check_port: { type: 'string', description: 'Health check port' },
        health_check_host: { type: 'string', description: 'Health check host' },
        health_check_method: { type: 'string', description: 'Health check method' },
        health_check_return_code: { type: 'number', description: 'Health check return code' },
        health_check_scheme: { type: 'string', description: 'Health check scheme' },
        health_check_response_text: { type: 'string', description: 'Health check response text' },
        health_check_interval: { type: 'number', description: 'Health check interval' },
        health_check_timeout: { type: 'number', description: 'Health check timeout' },
        health_check_retries: { type: 'number', description: 'Health check retries' },
        health_check_start_period: { type: 'number', description: 'Health check start period' },
        limits_memory: { type: 'string', description: 'Memory limits' },
        limits_memory_swap: { type: 'string', description: 'Memory swap limits' },
        limits_memory_swappiness: { type: 'number', description: 'Memory swappiness' },
        limits_memory_reservation: { type: 'string', description: 'Memory reservation' },
        limits_cpus: { type: 'string', description: 'CPU limits' },
        limits_cpuset: { type: 'string', description: 'CPU set limits' },
        limits_cpu_shares: { type: 'number', description: 'CPU shares' },
        custom_labels: { type: 'string', description: 'Custom labels' },
        custom_docker_run_options: { type: 'string', description: 'Custom Docker run options' },
        post_deployment_command: { type: 'string', description: 'Post deployment command' },
        post_deployment_command_container: { type: 'string', description: 'Post deployment command container' },
        pre_deployment_command: { type: 'string', description: 'Pre deployment command' },
        pre_deployment_command_container: { type: 'string', description: 'Pre deployment command container' },
        manual_webhook_secret_github: { type: 'string', description: 'GitHub webhook secret' },
        manual_webhook_secret_gitlab: { type: 'string', description: 'GitLab webhook secret' },
        manual_webhook_secret_bitbucket: { type: 'string', description: 'Bitbucket webhook secret' },
        manual_webhook_secret_gitea: { type: 'string', description: 'Gitea webhook secret' },
        redirect: { type: 'string', description: 'Redirect configuration' },
        instant_deploy: { type: 'boolean', description: 'Instant deploy' },
        dockerfile: { type: 'string', description: 'Dockerfile content' },
        docker_compose_location: { type: 'string', description: 'Docker Compose location' },
        docker_compose_raw: { type: 'string', description: 'Docker Compose raw content' },
        docker_compose_custom_start_command: { type: 'string', description: 'Docker Compose custom start command' },
        docker_compose_custom_build_command: { type: 'string', description: 'Docker Compose custom build command' },
        docker_compose_domains: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Docker Compose domains' 
        },
        watch_paths: { type: 'string', description: 'Watch paths' },
        use_build_server: { type: 'boolean', description: 'Use build server' },
        is_http_basic_auth_enabled: { type: 'boolean', description: 'Enable HTTP basic auth' },
        http_basic_auth_username: { type: 'string', description: 'HTTP basic auth username' },
        http_basic_auth_password: { type: 'string', description: 'HTTP basic auth password' },
        connect_to_docker_network: { type: 'boolean', description: 'Connect to Docker network' },
        force_domain_override: { type: 'boolean', description: 'Force domain override' },
      },
      required: ['project_uuid', 'server_uuid', 'environment_name', 'private_key_uuid', 'git_repository', 'build_pack', 'ports_exposes'],
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
    name: 'coolify_create_dockercompose_application',
    description: 'Create a Docker Compose application',
    inputSchema: {
      type: 'object',
      properties: {
        project_uuid: { type: 'string', description: 'Project UUID' },
        server_uuid: { type: 'string', description: 'Server UUID' },
        environment_name: { type: 'string', description: 'Environment name' },
        docker_compose_raw: { type: 'string', description: 'Docker Compose configuration (base64 encoded)' },
        name: { type: 'string', description: 'Application name' },
      },
      required: ['project_uuid', 'server_uuid', 'environment_name', 'docker_compose_raw'],
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

  // Service Environment Variables Management
  {
    name: 'coolify_list_service_envs',
    description: 'List all environment variables for a service',
    inputSchema: {
      type: 'object',
      properties: {
        uuid: { type: 'string', description: 'Service UUID' },
      },
      required: ['uuid'],
    },
  },
  {
    name: 'coolify_create_service_env',
    description: 'Create environment variable for a service',
    inputSchema: {
      type: 'object',
      properties: {
        uuid: { type: 'string', description: 'Service UUID' },
        key: { type: 'string', description: 'Environment variable key' },
        value: { type: 'string', description: 'Environment variable value' },
      },
      required: ['uuid', 'key', 'value'],
    },
  },
  {
    name: 'coolify_update_service_env',
    description: 'Update environment variable for a service',
    inputSchema: {
      type: 'object',
      properties: {
        uuid: { type: 'string', description: 'Service UUID' },
        key: { type: 'string', description: 'Environment variable key' },
        value: { type: 'string', description: 'Environment variable value' },
        is_preview: { type: 'boolean', description: 'Is preview variable', default: false },
        is_build_time: { type: 'boolean', description: 'Is build time variable', default: false },
        is_literal: { type: 'boolean', description: 'Is literal variable', default: false },
        is_multiline: { type: 'boolean', description: 'Is multiline variable', default: false },
        is_shown_once: { type: 'boolean', description: 'Is shown once variable', default: false },
      },
      required: ['uuid', 'key', 'value'],
    },
  },
  {
    name: 'coolify_bulk_update_service_envs',
    description: 'Bulk update environment variables for a service',
    inputSchema: {
      type: 'object',
      properties: {
        uuid: { type: 'string', description: 'Service UUID' },
        envs: { 
          type: 'array', 
          description: 'Array of environment variables',
          items: {
            type: 'object',
            properties: {
              key: { type: 'string' },
              value: { type: 'string' },
              is_preview: { type: 'boolean', default: false },
              is_build_time: { type: 'boolean', default: false },
              is_literal: { type: 'boolean', default: false },
              is_multiline: { type: 'boolean', default: false },
              is_shown_once: { type: 'boolean', default: false },
            },
            required: ['key', 'value'],
          },
        },
      },
      required: ['uuid', 'envs'],
    },
  },
  {
    name: 'coolify_delete_service_env',
    description: 'Delete environment variable from a service',
    inputSchema: {
      type: 'object',
      properties: {
        uuid: { type: 'string', description: 'Service UUID' },
        env_uuid: { type: 'string', description: 'Environment variable UUID' },
      },
      required: ['uuid', 'env_uuid'],
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

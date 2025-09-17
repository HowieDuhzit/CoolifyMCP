import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { getExpandedTools } from './expanded-tools.js';

export const getTools = (): Tool[] => [
  // Original Coolify API Tools
  // System Management
  {
    name: 'coolify_system',
    description: 'System management operations - health check, version, and system information',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['health', 'version', 'info'],
          description: 'Action to perform: health (check system health), version (get API version), info (get system information)'
        },
      },
      required: ['action'],
    },
  },

  // Team Management
  {
    name: 'coolify_teams',
    description: 'Complete team management - list teams, get current team, get team details, and list team members',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'current', 'get', 'members'],
          description: 'Action to perform: list (list all teams), current (get current team), get (get specific team), members (list team members)'
        },
        team_id: { 
          type: 'string', 
          description: 'Team ID (required for get and members actions, optional for others)' 
        },
      },
      required: ['action'],
    },
  },

  // Project Management
  {
    name: 'coolify_projects',
    description: 'Project CRUD operations - list, create, get, update, and delete projects',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'create', 'get', 'update', 'delete'],
          description: 'Action to perform: list (list all projects), create (create new project), get (get project by UUID), update (update project), delete (delete project)'
        },
        uuid: { 
          type: 'string', 
          description: 'Project UUID (required for get, update, delete actions)' 
        },
        name: { 
          type: 'string', 
          description: 'Project name (required for create, optional for update)' 
        },
        description: { 
          type: 'string', 
          description: 'Project description (optional for create and update)' 
        },
        page: { 
          type: 'number', 
          description: 'Page number (optional for list action)' 
        },
        per_page: { 
          type: 'number', 
          description: 'Items per page (optional for list action)' 
        },
      },
      required: ['action'],
    },
  },
  {
    name: 'coolify_project_environments',
    description: 'Project environment management - list, create, get, and delete project environments',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'create', 'get', 'delete'],
          description: 'Action to perform: list (list all environments in project), create (create new environment), get (get environment details), delete (delete environment)'
        },
        project_uuid: { 
          type: 'string', 
          description: 'Project UUID (required for all actions)' 
        },
        environment_name_or_uuid: { 
          type: 'string', 
          description: 'Environment name or UUID (required for get and delete actions)' 
        },
        name: { 
          type: 'string', 
          description: 'Environment name (required for create action)' 
        },
      },
      required: ['action', 'project_uuid'],
    },
  },

  // Application Management
  {
    name: 'coolify_applications',
    description: 'Application CRUD operations - list, create, update, get, and delete applications of all types',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'create', 'update', 'get', 'delete'],
          description: 'Action to perform: list (list all applications), create (create new application), update (update application), get (get application by UUID), delete (delete application)'
        },
        type: { 
          type: 'string', 
          enum: ['public', 'private_github', 'private_deploy_key', 'dockerfile', 'dockerimage', 'dockercompose'],
          description: 'Application type (required for create action): public, private_github, private_deploy_key, dockerfile, dockerimage, dockercompose'
        },
        uuid: { 
          type: 'string', 
          description: 'Application UUID (required for update, get, delete actions)' 
        },
        name: { 
          type: 'string', 
          description: 'Application name (required for create, optional for update)' 
        },
        description: { 
          type: 'string', 
          description: 'Application description (optional for create and update)' 
        },
        page: { 
          type: 'number', 
          description: 'Page number (optional for list action)' 
        },
        per_page: { 
          type: 'number', 
          description: 'Items per page (optional for list action)' 
        },
        // Common application creation parameters
        project_uuid: { type: 'string', description: 'Project UUID (required for create)' },
        server_uuid: { type: 'string', description: 'Server UUID (required for create)' },
        environment_name: { type: 'string', description: 'Environment name (required for create)' },
        git_repository: { type: 'string', description: 'Git repository URL (required for create)' },
        git_branch: { type: 'string', description: 'Git branch (optional for create, default: main)' },
        build_pack: { 
          type: 'string', 
          enum: ['nixpacks', 'static', 'dockerfile', 'dockercompose'],
          description: 'Build pack type (required for create)' 
        },
        ports_exposes: { type: 'string', description: 'Port configuration (required for create)' },
        // Type-specific parameters
        github_app_uuid: { type: 'string', description: 'GitHub App UUID (required for private_github type)' },
        private_key_uuid: { type: 'string', description: 'Private key UUID (required for private_deploy_key type)' },
        docker_registry_image_name: { type: 'string', description: 'Docker registry image name (required for dockerimage type)' },
        docker_registry_image_tag: { type: 'string', description: 'Docker registry image tag (optional for dockerimage type, default: latest)' },
        docker_compose_raw: { type: 'string', description: 'Docker Compose configuration (required for dockercompose type)' },
        dockerfile_location: { type: 'string', description: 'Dockerfile location (optional for dockerfile type, default: /Dockerfile)' },
        // Additional optional parameters for private_deploy_key type
        destination_uuid: { type: 'string', description: 'Destination UUID (optional for private_deploy_key type)' },
        domains: { type: 'string', description: 'Domains configuration (optional for private_deploy_key type)' },
        git_commit_sha: { type: 'string', description: 'Git commit SHA (optional for private_deploy_key type)' },
        is_static: { type: 'boolean', description: 'Is static application (optional for private_deploy_key type)' },
        static_image: { type: 'string', description: 'Static image (optional for private_deploy_key type)' },
        install_command: { type: 'string', description: 'Install command (optional for private_deploy_key type)' },
        build_command: { type: 'string', description: 'Build command (optional for private_deploy_key type)' },
        start_command: { type: 'string', description: 'Start command (optional for private_deploy_key type)' },
        ports_mappings: { type: 'string', description: 'Port mappings (optional for private_deploy_key type)' },
        base_directory: { type: 'string', description: 'Base directory (optional for private_deploy_key type)' },
        publish_directory: { type: 'string', description: 'Publish directory (optional for private_deploy_key type)' },
        health_check_enabled: { type: 'boolean', description: 'Enable health checks (optional for private_deploy_key type)' },
        health_check_path: { type: 'string', description: 'Health check path (optional for private_deploy_key type)' },
        health_check_port: { type: 'string', description: 'Health check port (optional for private_deploy_key type)' },
        health_check_host: { type: 'string', description: 'Health check host (optional for private_deploy_key type)' },
        health_check_method: { type: 'string', description: 'Health check method (optional for private_deploy_key type)' },
        health_check_return_code: { type: 'number', description: 'Health check return code (optional for private_deploy_key type)' },
        health_check_scheme: { type: 'string', description: 'Health check scheme (optional for private_deploy_key type)' },
        health_check_response_text: { type: 'string', description: 'Health check response text (optional for private_deploy_key type)' },
        health_check_interval: { type: 'number', description: 'Health check interval (optional for private_deploy_key type)' },
        health_check_timeout: { type: 'number', description: 'Health check timeout (optional for private_deploy_key type)' },
        health_check_retries: { type: 'number', description: 'Health check retries (optional for private_deploy_key type)' },
        health_check_start_period: { type: 'number', description: 'Health check start period (optional for private_deploy_key type)' },
        limits_memory: { type: 'string', description: 'Memory limits (optional for private_deploy_key type)' },
        limits_memory_swap: { type: 'string', description: 'Memory swap limits (optional for private_deploy_key type)' },
        limits_memory_swappiness: { type: 'number', description: 'Memory swappiness (optional for private_deploy_key type)' },
        limits_memory_reservation: { type: 'string', description: 'Memory reservation (optional for private_deploy_key type)' },
        limits_cpus: { type: 'string', description: 'CPU limits (optional for private_deploy_key type)' },
        limits_cpuset: { type: 'string', description: 'CPU set limits (optional for private_deploy_key type)' },
        limits_cpu_shares: { type: 'number', description: 'CPU shares (optional for private_deploy_key type)' },
        custom_labels: { type: 'string', description: 'Custom labels (optional for private_deploy_key type)' },
        custom_docker_run_options: { type: 'string', description: 'Custom Docker run options (optional for private_deploy_key type)' },
        post_deployment_command: { type: 'string', description: 'Post deployment command (optional for private_deploy_key type)' },
        post_deployment_command_container: { type: 'string', description: 'Post deployment command container (optional for private_deploy_key type)' },
        pre_deployment_command: { type: 'string', description: 'Pre deployment command (optional for private_deploy_key type)' },
        pre_deployment_command_container: { type: 'string', description: 'Pre deployment command container (optional for private_deploy_key type)' },
        manual_webhook_secret_github: { type: 'string', description: 'GitHub webhook secret (optional for private_deploy_key type)' },
        manual_webhook_secret_gitlab: { type: 'string', description: 'GitLab webhook secret (optional for private_deploy_key type)' },
        manual_webhook_secret_bitbucket: { type: 'string', description: 'Bitbucket webhook secret (optional for private_deploy_key type)' },
        manual_webhook_secret_gitea: { type: 'string', description: 'Gitea webhook secret (optional for private_deploy_key type)' },
        redirect: { type: 'string', description: 'Redirect configuration (optional for private_deploy_key type)' },
        instant_deploy: { type: 'boolean', description: 'Instant deploy (optional for private_deploy_key type)' },
        dockerfile: { type: 'string', description: 'Dockerfile content (optional for private_deploy_key type)' },
        docker_compose_location: { type: 'string', description: 'Docker Compose location (optional for private_deploy_key type)' },
        docker_compose_custom_start_command: { type: 'string', description: 'Docker Compose custom start command (optional for private_deploy_key type)' },
        docker_compose_custom_build_command: { type: 'string', description: 'Docker Compose custom build command (optional for private_deploy_key type)' },
        docker_compose_domains: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Docker Compose domains (optional for private_deploy_key type)' 
        },
        watch_paths: { type: 'string', description: 'Watch paths (optional for private_deploy_key type)' },
        use_build_server: { type: 'boolean', description: 'Use build server (optional for private_deploy_key type)' },
        is_http_basic_auth_enabled: { type: 'boolean', description: 'Enable HTTP basic auth (optional for private_deploy_key type)' },
        http_basic_auth_username: { type: 'string', description: 'HTTP basic auth username (optional for private_deploy_key type)' },
        http_basic_auth_password: { type: 'string', description: 'HTTP basic auth password (optional for private_deploy_key type)' },
        connect_to_docker_network: { type: 'boolean', description: 'Connect to Docker network (optional for private_deploy_key type)' },
        force_domain_override: { type: 'boolean', description: 'Force domain override (optional for private_deploy_key type)' },
      },
      required: ['action'],
    },
  },

  // Application Lifecycle Management
  {
    name: 'coolify_application_lifecycle',
    description: 'Application lifecycle management - start, stop, and restart applications',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['start', 'stop', 'restart'],
          description: 'Action to perform: start (start application), stop (stop application), restart (restart application)'
        },
        uuid: { 
          type: 'string', 
          description: 'Application UUID (required for all actions)' 
        },
      },
      required: ['action', 'uuid'],
    },
  },
  // Application Environment Variables Management
  {
    name: 'coolify_application_envs',
    description: 'Application environment variables management - list, create, bulk update, and delete environment variables',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'create', 'bulk_update', 'delete'],
          description: 'Action to perform: list (list environment variables), create (create environment variable), bulk_update (bulk update environment variables), delete (delete environment variable)'
        },
        uuid: { 
          type: 'string', 
          description: 'Application UUID (required for all actions)' 
        },
        key: { 
          type: 'string', 
          description: 'Environment variable key (required for create action)' 
        },
        value: { 
          type: 'string', 
          description: 'Environment variable value (required for create action)' 
        },
        env_uuid: { 
          type: 'string', 
          description: 'Environment variable UUID (required for delete action)' 
        },
        envs: { 
          type: 'array', 
          description: 'Array of environment variables (required for bulk_update action)',
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
      required: ['action', 'uuid'],
    },
  },

  // Application Logs and Monitoring
  {
    name: 'coolify_logs',
    description: 'Application logs and monitoring - get application logs',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['get'],
          description: 'Action to perform: get (get application logs)'
        },
        uuid: { 
          type: 'string', 
          description: 'Application UUID (required for get action)' 
        },
        lines: { 
          type: 'number', 
          description: 'Number of log lines to retrieve (optional for get action)' 
        },
      },
      required: ['action', 'uuid'],
    },
  },

  // Application Deployments Management
  {
    name: 'coolify_application_deployments',
    description: 'Application deployment management - list, get, and trigger deployments',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'get', 'trigger'],
          description: 'Action to perform: list (list all deployments), get (get deployment by UUID), trigger (trigger deployment)'
        },
        uuid: { 
          type: 'string', 
          description: 'Application UUID (required for trigger action)' 
        },
        deployment_uuid: { 
          type: 'string', 
          description: 'Deployment UUID (required for get action)' 
        },
        force_rebuild: { 
          type: 'boolean', 
          description: 'Force rebuild (optional for trigger action, default: false)' 
        },
        page: { 
          type: 'number', 
          description: 'Page number (optional for list action)' 
        },
        per_page: { 
          type: 'number', 
          description: 'Items per page (optional for list action)' 
        },
      },
      required: ['action'],
    },
  },

  // Database Management
  {
    name: 'coolify_databases',
    description: 'Database CRUD operations - list, create, get, update, and delete databases',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'create', 'get', 'update', 'delete'],
          description: 'Action to perform: list (list all databases), create (create new database), get (get database by UUID), update (update database), delete (delete database)'
        },
        uuid: { 
          type: 'string', 
          description: 'Database UUID (required for get, update, delete actions)' 
        },
        name: { 
          type: 'string', 
          description: 'Database name (required for create, optional for update)' 
        },
        description: { 
          type: 'string', 
          description: 'Database description (optional for create and update)' 
        },
        type: { 
          type: 'string', 
          enum: ['postgresql', 'mysql', 'mongodb', 'redis', 'mariadb', 'clickhouse', 'dragonfly', 'keydb'],
          description: 'Database type (required for create action)' 
        },
        server_uuid: { 
          type: 'string', 
          description: 'Server UUID (required for create action)' 
        },
        project_uuid: { 
          type: 'string', 
          description: 'Project UUID (required for create action)' 
        },
        environment_name: { 
          type: 'string', 
          description: 'Environment name (required for create action)' 
        },
        page: { 
          type: 'number', 
          description: 'Page number (optional for list action)' 
        },
        per_page: { 
          type: 'number', 
          description: 'Items per page (optional for list action)' 
        },
      },
      required: ['action'],
    },
  },

  // Database Lifecycle Management
  {
    name: 'coolify_database_lifecycle',
    description: 'Database lifecycle management - start, stop, and restart databases',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['start', 'stop', 'restart'],
          description: 'Action to perform: start (start database), stop (stop database), restart (restart database)'
        },
        uuid: { 
          type: 'string', 
          description: 'Database UUID (required for all actions)' 
        },
      },
      required: ['action', 'uuid'],
    },
  },

  // Database Types Management
  {
    name: 'coolify_database_types',
    description: 'Specific database type creation - create PostgreSQL, MySQL, MongoDB, and Redis databases with type-specific parameters',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['create'],
          description: 'Action to perform: create (create database of specific type)'
        },
        type: { 
          type: 'string', 
          enum: ['postgresql', 'mysql', 'mongodb', 'redis'],
          description: 'Database type (required for create action)' 
        },
        name: { 
          type: 'string', 
          description: 'Database name (required for create action)' 
        },
        server_uuid: { 
          type: 'string', 
          description: 'Server UUID (required for create action)' 
        },
        project_uuid: { 
          type: 'string', 
          description: 'Project UUID (required for create action)' 
        },
        environment_name: { 
          type: 'string', 
          description: 'Environment name (required for create action)' 
        },
        // PostgreSQL specific parameters
        postgresql_user: { type: 'string', description: 'PostgreSQL user (optional for postgresql type)' },
        postgresql_password: { type: 'string', description: 'PostgreSQL password (optional for postgresql type)' },
        postgresql_db: { type: 'string', description: 'PostgreSQL database name (optional for postgresql type)' },
        // MySQL specific parameters
        mysql_user: { type: 'string', description: 'MySQL user (optional for mysql type)' },
        mysql_password: { type: 'string', description: 'MySQL password (optional for mysql type)' },
        mysql_database: { type: 'string', description: 'MySQL database name (optional for mysql type)' },
        mysql_root_password: { type: 'string', description: 'MySQL root password (optional for mysql type)' },
        // MongoDB specific parameters
        mongodb_root_username: { type: 'string', description: 'MongoDB root username (optional for mongodb type)' },
        mongodb_root_password: { type: 'string', description: 'MongoDB root password (optional for mongodb type)' },
        mongodb_database: { type: 'string', description: 'MongoDB database name (optional for mongodb type)' },
        mongodb_username: { type: 'string', description: 'MongoDB username (optional for mongodb type)' },
        mongodb_password: { type: 'string', description: 'MongoDB password (optional for mongodb type)' },
        // Redis specific parameters
        redis_password: { type: 'string', description: 'Redis password (optional for redis type)' },
      },
      required: ['action', 'type', 'name', 'server_uuid', 'project_uuid', 'environment_name'],
    },
  },

  // Server Management
  {
    name: 'coolify_servers',
    description: 'Server CRUD operations - list, create, get, update, and delete servers',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'create', 'get', 'update', 'delete'],
          description: 'Action to perform: list (list all servers), create (create new server), get (get server by UUID), update (update server), delete (delete server)'
        },
        uuid: { 
          type: 'string', 
          description: 'Server UUID (required for get, update, delete actions)' 
        },
        name: { 
          type: 'string', 
          description: 'Server name (required for create, optional for update)' 
        },
        description: { 
          type: 'string', 
          description: 'Server description (optional for create and update)' 
        },
        ip: { 
          type: 'string', 
          description: 'Server IP address (required for create, optional for update)' 
        },
        port: { 
          type: 'number', 
          description: 'SSH port (optional for create and update, default: 22)' 
        },
        user: { 
          type: 'string', 
          description: 'SSH user (optional for create and update, default: root)' 
        },
        private_key_id: { 
          type: 'string', 
          description: 'Private key ID (optional for create action)' 
        },
        page: { 
          type: 'number', 
          description: 'Page number (optional for list action)' 
        },
        per_page: { 
          type: 'number', 
          description: 'Items per page (optional for list action)' 
        },
      },
      required: ['action'],
    },
  },

  // Server Operations Management
  {
    name: 'coolify_server_management',
    description: 'Server operations and resources - validate server connection, list domains, and list resources',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['validate', 'domains', 'resources'],
          description: 'Action to perform: validate (validate server connection), domains (list server domains), resources (list server resources)'
        },
        uuid: { 
          type: 'string', 
          description: 'Server UUID (required for all actions)' 
        },
      },
      required: ['action', 'uuid'],
    },
  },

  // Service Management
  {
    name: 'coolify_services',
    description: 'Service CRUD operations - list, create, get, update, and delete services',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'create', 'get', 'update', 'delete'],
          description: 'Action to perform: list (list all services), create (create new service), get (get service by UUID), update (update service), delete (delete service)'
        },
        uuid: { 
          type: 'string', 
          description: 'Service UUID (required for get, update, delete actions)' 
        },
        name: { 
          type: 'string', 
          description: 'Service name (required for create, optional for update)' 
        },
        description: { 
          type: 'string', 
          description: 'Service description (optional for create and update)' 
        },
        server_uuid: { 
          type: 'string', 
          description: 'Server UUID (required for create action)' 
        },
        project_uuid: { 
          type: 'string', 
          description: 'Project UUID (required for create action)' 
        },
        environment_name: { 
          type: 'string', 
          description: 'Environment name (required for create action)' 
        },
        docker_compose_raw: { 
          type: 'string', 
          description: 'Docker Compose configuration (required for create, optional for update)' 
        },
        page: { 
          type: 'number', 
          description: 'Page number (optional for list action)' 
        },
        per_page: { 
          type: 'number', 
          description: 'Items per page (optional for list action)' 
        },
      },
      required: ['action'],
    },
  },

  // Service Lifecycle Management
  {
    name: 'coolify_service_lifecycle',
    description: 'Service lifecycle management - start, stop, and restart services',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['start', 'stop', 'restart'],
          description: 'Action to perform: start (start service), stop (stop service), restart (restart service)'
        },
        uuid: { 
          type: 'string', 
          description: 'Service UUID (required for all actions)' 
        },
      },
      required: ['action', 'uuid'],
    },
  },

  // Service Environment Variables Management
  {
    name: 'coolify_service_envs',
    description: 'Service environment variables management - list, create, update, bulk update, and delete environment variables',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'create', 'update', 'bulk_update', 'delete'],
          description: 'Action to perform: list (list environment variables), create (create environment variable), update (update environment variable), bulk_update (bulk update environment variables), delete (delete environment variable)'
        },
        uuid: { 
          type: 'string', 
          description: 'Service UUID (required for all actions)' 
        },
        key: { 
          type: 'string', 
          description: 'Environment variable key (required for create and update actions)' 
        },
        value: { 
          type: 'string', 
          description: 'Environment variable value (required for create and update actions)' 
        },
        env_uuid: { 
          type: 'string', 
          description: 'Environment variable UUID (required for delete action)' 
        },
        envs: { 
          type: 'array', 
          description: 'Array of environment variables (required for bulk_update action)',
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
        is_preview: { type: 'boolean', description: 'Is preview variable (optional for update action, default: false)' },
        is_build_time: { type: 'boolean', description: 'Is build time variable (optional for update action, default: false)' },
        is_literal: { type: 'boolean', description: 'Is literal variable (optional for update action, default: false)' },
        is_multiline: { type: 'boolean', description: 'Is multiline variable (optional for update action, default: false)' },
        is_shown_once: { type: 'boolean', description: 'Is shown once variable (optional for update action, default: false)' },
      },
      required: ['action', 'uuid'],
    },
  },

  // Security Keys Management
  {
    name: 'coolify_security_keys',
    description: 'Security keys management - list, create, get, update, and delete security keys',
    inputSchema: {
      type: 'object',
      properties: {
        action: { 
          type: 'string', 
          enum: ['list', 'create', 'get', 'update', 'delete'],
          description: 'Action to perform: list (list all security keys), create (create new security key), get (get security key by UUID), update (update security key), delete (delete security key)'
        },
        uuid: { 
          type: 'string', 
          description: 'Security key UUID (required for get, update, delete actions)' 
        },
        name: { 
          type: 'string', 
          description: 'Key name (required for create, optional for update)' 
        },
        description: { 
          type: 'string', 
          description: 'Key description (optional for create and update)' 
        },
        key: { 
          type: 'string', 
          description: 'SSH private key content (required for create, optional for update)' 
        },
        page: { 
          type: 'number', 
          description: 'Page number (optional for list action)' 
        },
        per_page: { 
          type: 'number', 
          description: 'Items per page (optional for list action)' 
        },
      },
      required: ['action'],
    },
  },

  // Expanded Knowledge Base and Advanced Tools
  ...getExpandedTools(),
];

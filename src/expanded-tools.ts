import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const getExpandedTools = (): Tool[] => [
  // Knowledge Base Tools
  {
    name: 'coolify_knowledge_search',
    description: 'Search through Coolify documentation, examples, and knowledge base',
    inputSchema: {
      type: 'object',
      properties: {
        query: { 
          type: 'string', 
          description: 'Search query to find relevant documentation and examples' 
        },
        category: { 
          type: 'string', 
          description: 'Filter by category: overview, deployment, services, api, configuration, monitoring' 
        },
        source: { 
          type: 'string', 
          enum: ['docs', 'examples', 'github', 'templates', 'all'],
          description: 'Filter by source: docs (documentation), examples (example apps), github (GitHub repos), templates (one-click services), all (all sources)',
          default: 'all'
        },
        limit: { 
          type: 'number', 
          description: 'Maximum number of results to return (1-50)',
          default: 10
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'coolify_knowledge_get_document',
    description: 'Get a specific document from the Coolify knowledge base by ID',
    inputSchema: {
      type: 'object',
      properties: {
        document_id: { 
          type: 'string', 
          description: 'Document ID to retrieve (e.g., coolify-overview, docker-compose-deployment)' 
        },
      },
      required: ['document_id'],
    },
  },
  {
    name: 'coolify_knowledge_list_categories',
    description: 'List all available knowledge base categories and their descriptions',
    inputSchema: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'coolify_knowledge_get_category',
    description: 'Get all documents in a specific knowledge base category',
    inputSchema: {
      type: 'object',
      properties: {
        category: { 
          type: 'string', 
          description: 'Category name: overview, deployment, services, api, configuration, monitoring' 
        },
      },
      required: ['category'],
    },
  },

  // Template Management Tools
  {
    name: 'coolify_templates_list',
    description: 'List available one-click service templates and Docker Compose examples',
    inputSchema: {
      type: 'object',
      properties: {
        category: { 
          type: 'string', 
          description: 'Filter by template category: database, monitoring, cms, development, security' 
        },
        type: { 
          type: 'string', 
          enum: ['one-click', 'docker-compose', 'all'],
          description: 'Filter by template type',
          default: 'all'
        },
      },
    },
  },
  {
    name: 'coolify_templates_get',
    description: 'Get a specific template configuration by name or ID',
    inputSchema: {
      type: 'object',
      properties: {
        template_name: { 
          type: 'string', 
          description: 'Template name or ID to retrieve' 
        },
        format: { 
          type: 'string', 
          enum: ['yaml', 'json', 'raw'],
          description: 'Output format for the template',
          default: 'yaml'
        },
      },
      required: ['template_name'],
    },
  },
  {
    name: 'coolify_templates_validate',
    description: 'Validate a Docker Compose template or configuration',
    inputSchema: {
      type: 'object',
      properties: {
        template_content: { 
          type: 'string', 
          description: 'Docker Compose template content to validate' 
        },
        template_format: { 
          type: 'string', 
          enum: ['yaml', 'json'],
          description: 'Format of the template content',
          default: 'yaml'
        },
      },
      required: ['template_content'],
    },
  },

  // Docker Compose Tools
  {
    name: 'coolify_docker_compose_generate',
    description: 'Generate Docker Compose configuration for common application stacks',
    inputSchema: {
      type: 'object',
      properties: {
        stack_type: { 
          type: 'string', 
          enum: ['web-app', 'api-backend', 'full-stack', 'microservices', 'database-cluster', 'monitoring-stack'],
          description: 'Type of application stack to generate' 
        },
        services: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'List of services to include (e.g., nginx, postgres, redis, app)' 
        },
        environment: { 
          type: 'string', 
          enum: ['development', 'staging', 'production'],
          description: 'Target environment for the configuration',
          default: 'development'
        },
        include_volumes: { 
          type: 'boolean', 
          description: 'Include persistent volume configurations',
          default: true
        },
        include_networks: { 
          type: 'boolean', 
          description: 'Include custom network configurations',
          default: true
        },
      },
      required: ['stack_type'],
    },
  },
  {
    name: 'coolify_docker_compose_optimize',
    description: 'Optimize Docker Compose configuration for Coolify deployment',
    inputSchema: {
      type: 'object',
      properties: {
        compose_content: { 
          type: 'string', 
          description: 'Docker Compose content to optimize' 
        },
        optimization_level: { 
          type: 'string', 
          enum: ['basic', 'advanced', 'production'],
          description: 'Level of optimization to apply',
          default: 'basic'
        },
        add_health_checks: { 
          type: 'boolean', 
          description: 'Add health check configurations',
          default: true
        },
        add_coolify_vars: { 
          type: 'boolean', 
          description: 'Add Coolify-specific environment variables',
          default: true
        },
      },
      required: ['compose_content'],
    },
  },

  // Monitoring and Analytics Tools
  {
    name: 'coolify_monitoring_setup',
    description: 'Set up monitoring stack with Prometheus, Grafana, and alerting',
    inputSchema: {
      type: 'object',
      properties: {
        project_uuid: { 
          type: 'string', 
          description: 'Project UUID to set up monitoring for' 
        },
        server_uuid: { 
          type: 'string', 
          description: 'Server UUID to deploy monitoring stack' 
        },
        environment_name: { 
          type: 'string', 
          description: 'Environment name for monitoring deployment' 
        },
        include_grafana: { 
          type: 'boolean', 
          description: 'Include Grafana for visualization',
          default: true
        },
        include_alertmanager: { 
          type: 'boolean', 
          description: 'Include AlertManager for alerting',
          default: true
        },
        notification_channels: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Notification channels: discord, telegram, email, webhook' 
        },
      },
      required: ['project_uuid', 'server_uuid', 'environment_name'],
    },
  },
  {
    name: 'coolify_health_check_generator',
    description: 'Generate health check configurations for applications',
    inputSchema: {
      type: 'object',
      properties: {
        application_type: { 
          type: 'string', 
          enum: ['web', 'api', 'database', 'queue', 'cache', 'custom'],
          description: 'Type of application to generate health checks for' 
        },
        port: { 
          type: 'number', 
          description: 'Application port number' 
        },
        health_endpoint: { 
          type: 'string', 
          description: 'Health check endpoint path (e.g., /health, /status)' 
        },
        check_type: { 
          type: 'string', 
          enum: ['http', 'tcp', 'command'],
          description: 'Type of health check',
          default: 'http'
        },
        interval: { 
          type: 'number', 
          description: 'Health check interval in seconds',
          default: 30
        },
        timeout: { 
          type: 'number', 
          description: 'Health check timeout in seconds',
          default: 10
        },
        retries: { 
          type: 'number', 
          description: 'Number of retries before marking as unhealthy',
          default: 3
        },
      },
      required: ['application_type', 'port'],
    },
  },

  // CI/CD and Automation Tools
  {
    name: 'coolify_webhook_setup',
    description: 'Set up webhooks for CI/CD integration and automation',
    inputSchema: {
      type: 'object',
      properties: {
        application_uuid: { 
          type: 'string', 
          description: 'Application UUID to set up webhooks for' 
        },
        webhook_type: { 
          type: 'string', 
          enum: ['github', 'gitlab', 'bitbucket', 'gitea', 'generic'],
          description: 'Type of webhook to configure' 
        },
        events: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Events to trigger webhooks: push, pull_request, tag, manual' 
        },
        secret: { 
          type: 'string', 
          description: 'Webhook secret for security' 
        },
        auto_deploy: { 
          type: 'boolean', 
          description: 'Enable automatic deployment on webhook trigger',
          default: true
        },
      },
      required: ['application_uuid', 'webhook_type'],
    },
  },
  {
    name: 'coolify_backup_setup',
    description: 'Set up automated backup configuration for databases and applications',
    inputSchema: {
      type: 'object',
      properties: {
        resource_uuid: { 
          type: 'string', 
          description: 'Database or application UUID to backup' 
        },
        resource_type: { 
          type: 'string', 
          enum: ['database', 'application', 'service'],
          description: 'Type of resource to backup' 
        },
        backup_frequency: { 
          type: 'string', 
          enum: ['hourly', 'daily', 'weekly', 'monthly'],
          description: 'Backup frequency',
          default: 'daily'
        },
        retention_days: { 
          type: 'number', 
          description: 'Number of days to retain backups',
          default: 30
        },
        s3_bucket: { 
          type: 'string', 
          description: 'S3-compatible bucket for backup storage' 
        },
        encryption: { 
          type: 'boolean', 
          description: 'Enable backup encryption',
          default: true
        },
      },
      required: ['resource_uuid', 'resource_type'],
    },
  },

  // Security and Compliance Tools
  {
    name: 'coolify_security_audit',
    description: 'Perform security audit of Coolify deployment and configurations',
    inputSchema: {
      type: 'object',
      properties: {
        project_uuid: { 
          type: 'string', 
          description: 'Project UUID to audit' 
        },
        audit_type: { 
          type: 'string', 
          enum: ['basic', 'comprehensive', 'compliance'],
          description: 'Type of security audit to perform',
          default: 'basic'
        },
        check_ssl: { 
          type: 'boolean', 
          description: 'Check SSL/TLS configurations',
          default: true
        },
        check_secrets: { 
          type: 'boolean', 
          description: 'Check for exposed secrets and credentials',
          default: true
        },
        check_permissions: { 
          type: 'boolean', 
          description: 'Check file and service permissions',
          default: true
        },
        generate_report: { 
          type: 'boolean', 
          description: 'Generate detailed security report',
          default: true
        },
      },
      required: ['project_uuid'],
    },
  },
  {
    name: 'coolify_ssl_setup',
    description: 'Set up SSL certificates and HTTPS configuration',
    inputSchema: {
      type: 'object',
      properties: {
        application_uuid: { 
          type: 'string', 
          description: 'Application UUID to set up SSL for' 
        },
        domain: { 
          type: 'string', 
          description: 'Domain name for SSL certificate' 
        },
        certificate_type: { 
          type: 'string', 
          enum: ['letsencrypt', 'custom', 'wildcard'],
          description: 'Type of SSL certificate',
          default: 'letsencrypt'
        },
        force_https: { 
          type: 'boolean', 
          description: 'Force HTTPS redirect',
          default: true
        },
        hsts: { 
          type: 'boolean', 
          description: 'Enable HTTP Strict Transport Security',
          default: true
        },
        auto_renewal: { 
          type: 'boolean', 
          description: 'Enable automatic certificate renewal',
          default: true
        },
      },
      required: ['application_uuid', 'domain'],
    },
  },

  // Performance and Optimization Tools
  {
    name: 'coolify_performance_analyze',
    description: 'Analyze application performance and provide optimization recommendations',
    inputSchema: {
      type: 'object',
      properties: {
        application_uuid: { 
          type: 'string', 
          description: 'Application UUID to analyze' 
        },
        analysis_duration: { 
          type: 'number', 
          description: 'Duration of analysis in hours',
          default: 24
        },
        check_resources: { 
          type: 'boolean', 
          description: 'Check CPU, memory, and disk usage',
          default: true
        },
        check_network: { 
          type: 'boolean', 
          description: 'Check network performance and latency',
          default: true
        },
        check_database: { 
          type: 'boolean', 
          description: 'Check database performance if applicable',
          default: true
        },
        generate_recommendations: { 
          type: 'boolean', 
          description: 'Generate optimization recommendations',
          default: true
        },
      },
      required: ['application_uuid'],
    },
  },
  {
    name: 'coolify_scaling_recommendations',
    description: 'Get scaling recommendations based on current usage patterns',
    inputSchema: {
      type: 'object',
      properties: {
        application_uuid: { 
          type: 'string', 
          description: 'Application UUID to analyze for scaling' 
        },
        scaling_type: { 
          type: 'string', 
          enum: ['horizontal', 'vertical', 'both'],
          description: 'Type of scaling to recommend',
          default: 'both'
        },
        target_performance: { 
          type: 'string', 
          enum: ['cost-optimized', 'performance-optimized', 'balanced'],
          description: 'Target performance profile',
          default: 'balanced'
        },
        include_cost_analysis: { 
          type: 'boolean', 
          description: 'Include cost analysis in recommendations',
          default: true
        },
      },
      required: ['application_uuid'],
    },
  },

  // Development and Testing Tools
  {
    name: 'coolify_development_environment',
    description: 'Set up development environment with hot reload and debugging',
    inputSchema: {
      type: 'object',
      properties: {
        project_uuid: { 
          type: 'string', 
          description: 'Project UUID for development environment' 
        },
        server_uuid: { 
          type: 'string', 
          description: 'Server UUID for development deployment' 
        },
        environment_name: { 
          type: 'string', 
          description: 'Environment name (e.g., development, dev, local)',
          default: 'development'
        },
        enable_hot_reload: { 
          type: 'boolean', 
          description: 'Enable hot reload for development',
          default: true
        },
        enable_debugging: { 
          type: 'boolean', 
          description: 'Enable debugging tools and ports',
          default: true
        },
        include_dev_tools: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Development tools to include: redis, postgres, mongodb, elasticsearch' 
        },
        port_mapping: { 
          type: 'object', 
          description: 'Custom port mappings for development services' 
        },
      },
      required: ['project_uuid', 'server_uuid'],
    },
  },
  {
    name: 'coolify_testing_setup',
    description: 'Set up testing environment with automated testing tools',
    inputSchema: {
      type: 'object',
      properties: {
        application_uuid: { 
          type: 'string', 
          description: 'Application UUID to set up testing for' 
        },
        test_types: { 
          type: 'array', 
          items: { type: 'string' },
          description: 'Types of tests to set up: unit, integration, e2e, performance, security' 
        },
        ci_integration: { 
          type: 'boolean', 
          description: 'Set up CI/CD integration for automated testing',
          default: true
        },
        test_database: { 
          type: 'boolean', 
          description: 'Set up isolated test database',
          default: true
        },
        coverage_reporting: { 
          type: 'boolean', 
          description: 'Enable test coverage reporting',
          default: true
        },
        notification_on_failure: { 
          type: 'boolean', 
          description: 'Send notifications on test failures',
          default: true
        },
      },
      required: ['application_uuid'],
    },
  }
];

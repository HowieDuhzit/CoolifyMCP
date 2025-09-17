import { z } from 'zod';

// Knowledge Base Types
export interface KnowledgeDocument {
  id: string;
  title: string;
  content: string;
  source: 'docs' | 'examples' | 'github' | 'templates';
  category: string;
  tags: string[];
  url?: string;
  lastUpdated: string;
}

export interface KnowledgeSearchResult {
  document: KnowledgeDocument;
  relevanceScore: number;
  matchedSections: string[];
}

export interface KnowledgeCategory {
  name: string;
  description: string;
  documents: KnowledgeDocument[];
}

// Knowledge Base Schema
export const KnowledgeSearchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
  category: z.string().optional(),
  source: z.enum(['docs', 'examples', 'github', 'templates', 'all']).default('all'),
  limit: z.number().min(1).max(50).default(10),
});

export const KnowledgeDocumentSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  source: z.enum(['docs', 'examples', 'github', 'templates']),
  category: z.string(),
  tags: z.array(z.string()),
  url: z.string().optional(),
  lastUpdated: z.string(),
});

export type KnowledgeSearchArgs = z.infer<typeof KnowledgeSearchSchema>;
export type KnowledgeDocumentType = z.infer<typeof KnowledgeDocumentSchema>;

// Coolify Knowledge Base Data
export class CoolifyKnowledgeBase {
  private documents: KnowledgeDocument[] = [];
  private categories: Map<string, KnowledgeCategory> = new Map();

  constructor() {
    this.initializeKnowledgeBase();
  }

  private initializeKnowledgeBase() {
    // Initialize with comprehensive Coolify knowledge
    this.documents = [
      // Core Documentation
      {
        id: 'coolify-overview',
        title: 'Coolify Overview - Self-hosting with superpowers',
        content: `Coolify is an open-source & self-hostable Heroku / Netlify / Vercel alternative. It provides:

Key Features:
- Any Language: Compatible with wide range of programming languages and frameworks
- Any Server: Deploy to any server including VPS, Raspberry Pi, EC2, DigitalOcean, Linode, Hetzner
- Any Use-Case: Deploy to single server, multiple servers, or Docker Swarm clusters
- Any Service: Deploy any Docker-compatible service with one-click services available
- Push to Deploy: Git integration with GitHub, GitLab, Bitbucket, Gitea
- Free SSL Certificates: Automatic Let's Encrypt SSL certificate setup and renewal
- No Vendor Lock-in: Complete control over your data on your own servers
- Automatic DB Backups: Automatic backups to S3 compatible solutions
- Webhooks: CI/CD pipeline integration
- Powerful API: Robust API for automation
- Real-time Terminal: Browser-based server management
- Collaborative: Team sharing with permission controls
- Pull Request Deployments: Automatic PR deployments
- Server Automations: Automatic server task handling
- Monitoring: Deployment and server monitoring
- Notifications: Discord, Telegram, email notifications`,
        source: 'docs',
        category: 'overview',
        tags: ['overview', 'features', 'self-hosting', 'deployment'],
        url: 'https://coolify.io/',
        lastUpdated: '2025-01-15'
      },
      {
        id: 'docker-compose-deployment',
        title: 'Docker Compose Deployment Guide',
        content: `Docker Compose deployment in Coolify operates through a dedicated API endpoint that handles creation and deployment of applications based on Docker Compose files.

Key Requirements:
- API Endpoint: POST /applications/dockercompose
- Mandatory Fields: project_uuid, server_uuid, environment_name, docker_compose_raw
- Base64 Encoding: docker_compose_raw field must be base64 encoded
- Validation: Comprehensive validation using validateComposeFile function
- Processing: Uses LoadComposeFile action to process compose files

Recommended Docker Compose Structure:
- Basic Service Structure with proper environment variable handling
- Special Environment Variables: SERVICE_FQDN_*, SERVICE_PASSWORD_*, SERVICE_USER_*, SERVICE_BASE64_*
- Health Check Configuration with appropriate test commands, intervals, and retry configurations
- Volume and Bind Mount Syntax with special content injection capabilities
- Service Dependencies using depends_on with appropriate conditions

Deployment Workflow:
1. API Request Processing through create_application method
2. Instant Deployment Option with instant_deploy parameter
3. Background Job Processing through ApplicationDeploymentJob`,
        source: 'docs',
        category: 'deployment',
        tags: ['docker-compose', 'deployment', 'api', 'validation'],
        url: 'https://coolify.io/docs/deployment/docker-compose',
        lastUpdated: '2025-01-15'
      },
      {
        id: 'one-click-services',
        title: 'One-Click Services and Templates',
        content: `Coolify provides numerous one-click services for easy deployment:

Documentation Platforms:
- BookStack: Self-hosted wiki-style documentation platform
- DokuWiki: Simple and versatile open-source wiki software
- MediaWiki: Free and open-source wiki software package
- Wiki.js: Modern and powerful wiki software built on Node.js

File Management:
- Filebrowser: Web-based file manager
- Syncthing: Open-source continuous file synchronization

Education:
- Moodle: Open-source learning platform

Database Services:
- PostgreSQL: Powerful, open-source relational database
- MySQL: Widely-used relational database management system
- MongoDB: NoSQL database for scalability and flexibility
- Redis: In-memory data structure store

Monitoring and Logging:
- Prometheus: Open-source monitoring system
- Grafana: Visualization tool for monitoring metrics
- ELK Stack: Elasticsearch, Logstash, Kibana for logging

CI/CD Tools:
- Jenkins: Open-source automation server
- GitLab CI/CD: Built-in CI/CD tool within GitLab

Container Orchestration:
- Kubernetes: Open-source container orchestration system
- Docker Swarm: Native clustering tool for Docker

Security Tools:
- Let's Encrypt: Free SSL/TLS certificates
- Fail2Ban: Protection against brute-force attacks`,
        source: 'templates',
        category: 'services',
        tags: ['one-click', 'templates', 'services', 'deployment'],
        url: 'https://coolify.io/docs/services/overview',
        lastUpdated: '2025-01-15'
      },
      {
        id: 'api-endpoints',
        title: 'Coolify API Endpoints Reference',
        content: `Coolify provides a comprehensive REST API for automation and integration:

System Management:
- GET /health - System health check
- GET /version - API version information

Team Management:
- GET /teams - List all teams
- GET /teams/current - Get current team
- GET /teams/{id} - Get specific team
- GET /teams/{id}/members - List team members

Project Management:
- GET /projects - List projects
- POST /projects - Create project
- GET /projects/{uuid} - Get project
- PATCH /projects/{uuid} - Update project
- DELETE /projects/{uuid} - Delete project
- GET /projects/{uuid}/environments - List environments

Application Management:
- GET /applications - List applications
- POST /applications/{type} - Create application (public, private_github, private_deploy_key, dockerfile, dockerimage, dockercompose)
- GET /applications/{uuid} - Get application
- PATCH /applications/{uuid} - Update application
- DELETE /applications/{uuid} - Delete application
- POST /applications/{uuid}/start - Start application
- POST /applications/{uuid}/stop - Stop application
- POST /applications/{uuid}/restart - Restart application

Database Management:
- GET /databases - List databases
- POST /databases/{type} - Create database (postgresql, mysql, mongodb, redis, etc.)
- GET /databases/{uuid} - Get database
- PATCH /databases/{uuid} - Update database
- DELETE /databases/{uuid} - Delete database

Server Management:
- GET /servers - List servers
- POST /servers - Create server
- GET /servers/{uuid} - Get server
- PATCH /servers/{uuid} - Update server
- DELETE /servers/{uuid} - Delete server
- GET /servers/{uuid}/validate - Validate server connection
- GET /servers/{uuid}/domains - List server domains
- GET /servers/{uuid}/resources - List server resources

Service Management:
- GET /services - List services
- POST /services - Create service
- GET /services/{uuid} - Get service
- PATCH /services/{uuid} - Update service
- DELETE /services/{uuid} - Delete service

Security:
- GET /security/keys - List security keys
- POST /security/keys - Create security key
- GET /security/keys/{uuid} - Get security key
- PATCH /security/keys/{uuid} - Update security key
- DELETE /security/keys/{uuid} - Delete security key`,
        source: 'docs',
        category: 'api',
        tags: ['api', 'endpoints', 'reference', 'automation'],
        url: 'https://coolify.io/docs/api',
        lastUpdated: '2025-01-15'
      },
      {
        id: 'environment-variables',
        title: 'Environment Variables Management',
        content: `Coolify provides comprehensive environment variable management for applications and services:

Special Environment Variables:
- SERVICE_FQDN_*: Domain configuration for services
- SERVICE_PASSWORD_*: Automatic password generation
- SERVICE_USER_*: User credentials for services
- SERVICE_BASE64_*: Base64-encoded secrets

Environment Variable Types:
- is_preview: Preview environment variables
- is_build_time: Build-time environment variables
- is_literal: Literal environment variables
- is_multiline: Multiline environment variables
- is_shown_once: Variables shown only once

Management Operations:
- List environment variables for applications/services
- Create individual environment variables
- Bulk update multiple environment variables
- Update existing environment variables
- Delete environment variables

API Endpoints:
- GET /applications/{uuid}/envs - List application environment variables
- POST /applications/{uuid}/envs - Create application environment variable
- PATCH /applications/{uuid}/envs/bulk - Bulk update application environment variables
- DELETE /applications/{uuid}/envs/{env_uuid} - Delete application environment variable
- GET /services/{uuid}/envs - List service environment variables
- POST /services/{uuid}/envs - Create service environment variable
- PATCH /services/{uuid}/envs/bulk - Bulk update service environment variables
- DELETE /services/{uuid}/envs/{env_uuid} - Delete service environment variable

Best Practices:
- Use descriptive names for environment variables
- Group related variables with consistent naming
- Use build-time variables for compilation settings
- Use preview variables for staging environments
- Secure sensitive data with appropriate variable types`,
        source: 'docs',
        category: 'configuration',
        tags: ['environment-variables', 'configuration', 'secrets', 'management'],
        url: 'https://coolify.io/docs/configuration/environment-variables',
        lastUpdated: '2025-01-15'
      },
      {
        id: 'monitoring-logging',
        title: 'Monitoring and Logging in Coolify',
        content: `Coolify provides comprehensive monitoring and logging capabilities:

Application Monitoring:
- Real-time application status monitoring
- Health check monitoring with configurable intervals
- Resource usage monitoring (CPU, memory, disk)
- Network connectivity monitoring
- Custom health check endpoints

Logging Features:
- Real-time log streaming
- Log aggregation and storage
- Log filtering and search
- Log retention policies
- Structured logging support

Monitoring Tools Integration:
- Prometheus: Metrics collection and monitoring
- Grafana: Visualization and dashboards
- ELK Stack: Log aggregation and analysis
- Custom monitoring solutions

Health Checks:
- HTTP health checks with configurable endpoints
- TCP health checks for port availability
- Custom health check commands
- Health check intervals and timeouts
- Retry policies and failure handling

Notifications:
- Discord webhook notifications
- Telegram bot notifications
- Email notifications
- Custom webhook notifications
- Event-based notifications (deployment success/failure, health check failures)

API Endpoints:
- GET /applications/{uuid}/logs - Retrieve application logs
- GET /applications/{uuid}/logs?lines={n} - Retrieve last N log lines
- WebSocket connections for real-time log streaming

Best Practices:
- Configure appropriate health check intervals
- Set up monitoring alerts for critical metrics
- Use structured logging for better analysis
- Implement log rotation to manage storage
- Set up notification channels for important events`,
        source: 'docs',
        category: 'monitoring',
        tags: ['monitoring', 'logging', 'health-checks', 'notifications'],
        url: 'https://coolify.io/docs/monitoring',
        lastUpdated: '2025-01-15'
      },
      {
        id: 'deployment-strategies',
        title: 'Deployment Strategies and Best Practices',
        content: `Coolify supports various deployment strategies and best practices:

Deployment Types:
- Git-based deployments with automatic builds
- Docker image deployments
- Docker Compose multi-service deployments
- Static site deployments
- Database deployments

Deployment Workflow:
1. Code push to Git repository
2. Webhook triggers deployment
3. Build process execution
4. Container creation and configuration
5. Health check validation
6. Traffic routing and DNS updates
7. Deployment completion notification

Pull Request Deployments:
- Automatic deployment of pull requests
- Separate environments for PR testing
- Automatic cleanup after PR merge/close
- Preview URLs for PR deployments

Rollback Strategies:
- Automatic rollback on deployment failure
- Manual rollback to previous versions
- Blue-green deployment support
- Canary deployment capabilities

Build Packs:
- Nixpacks: Automatic build pack detection
- Static: Static site generation
- Dockerfile: Custom Docker builds
- Docker Compose: Multi-service deployments

Environment Management:
- Production, staging, and development environments
- Environment-specific configurations
- Environment variable management
- Resource isolation between environments

Best Practices:
- Use semantic versioning for releases
- Implement proper health checks
- Set up monitoring and alerting
- Use environment-specific configurations
- Implement proper backup strategies
- Test deployments in staging first
- Use infrastructure as code principles`,
        source: 'docs',
        category: 'deployment',
        tags: ['deployment', 'strategies', 'best-practices', 'workflow'],
        url: 'https://coolify.io/docs/deployment/strategies',
        lastUpdated: '2025-01-15'
      }
    ];

    // Initialize categories
    this.initializeCategories();
  }

  private initializeCategories() {
    const categoryMap = new Map<string, KnowledgeDocument[]>();
    
    // Group documents by category
    this.documents.forEach(doc => {
      if (!categoryMap.has(doc.category)) {
        categoryMap.set(doc.category, []);
      }
      categoryMap.get(doc.category)!.push(doc);
    });

    // Create category objects
    const categoryDescriptions: Record<string, string> = {
      overview: 'General information about Coolify features and capabilities',
      deployment: 'Deployment strategies, Docker Compose, and deployment workflows',
      services: 'One-click services, templates, and service management',
      api: 'API endpoints, authentication, and integration guides',
      configuration: 'Environment variables, settings, and configuration management',
      monitoring: 'Monitoring, logging, health checks, and notifications'
    };

    categoryMap.forEach((docs, categoryName) => {
      this.categories.set(categoryName, {
        name: categoryName,
        description: categoryDescriptions[categoryName] || 'General documentation',
        documents: docs
      });
    });
  }

  // Search functionality
  search(query: string, options: Partial<KnowledgeSearchArgs> = {}): KnowledgeSearchResult[] {
    const searchQuery = query.toLowerCase();
    const results: KnowledgeSearchResult[] = [];

    this.documents.forEach(doc => {
      // Filter by source if specified
      if (options.source && options.source !== 'all' && doc.source !== options.source) {
        return;
      }

      // Filter by category if specified
      if (options.category && doc.category !== options.category) {
        return;
      }

      // Calculate relevance score
      let score = 0;
      const matchedSections: string[] = [];

      // Title match (highest weight)
      if (doc.title.toLowerCase().includes(searchQuery)) {
        score += 10;
        matchedSections.push('title');
      }

      // Content match
      const contentLower = doc.content.toLowerCase();
      if (contentLower.includes(searchQuery)) {
        score += 5;
        matchedSections.push('content');
      }

      // Tag match
      if (doc.tags.some(tag => tag.toLowerCase().includes(searchQuery))) {
        score += 3;
        matchedSections.push('tags');
      }

      // Category match
      if (doc.category.toLowerCase().includes(searchQuery)) {
        score += 2;
        matchedSections.push('category');
      }

      if (score > 0) {
        results.push({
          document: doc,
          relevanceScore: score,
          matchedSections
        });
      }
    });

    // Sort by relevance score (highest first)
    results.sort((a, b) => b.relevanceScore - a.relevanceScore);

    // Apply limit
    const limit = options.limit || 10;
    return results.slice(0, limit);
  }

  // Get document by ID
  getDocument(id: string): KnowledgeDocument | undefined {
    return this.documents.find(doc => doc.id === id);
  }

  // Get all categories
  getCategories(): KnowledgeCategory[] {
    return Array.from(this.categories.values());
  }

  // Get documents by category
  getDocumentsByCategory(category: string): KnowledgeDocument[] {
    const categoryData = this.categories.get(category);
    return categoryData ? categoryData.documents : [];
  }

  // Get documents by source
  getDocumentsBySource(source: 'docs' | 'examples' | 'github' | 'templates'): KnowledgeDocument[] {
    return this.documents.filter(doc => doc.source === source);
  }

  // Add new document
  addDocument(document: KnowledgeDocument): void {
    this.documents.push(document);
    this.initializeCategories(); // Rebuild categories
  }

  // Update document
  updateDocument(id: string, updates: Partial<KnowledgeDocument>): boolean {
    const index = this.documents.findIndex(doc => doc.id === id);
    if (index !== -1) {
      this.documents[index] = { ...this.documents[index], ...updates } as KnowledgeDocument;
      this.initializeCategories(); // Rebuild categories
      return true;
    }
    return false;
  }

  // Remove document
  removeDocument(id: string): boolean {
    const index = this.documents.findIndex(doc => doc.id === id);
    if (index !== -1) {
      this.documents.splice(index, 1);
      this.initializeCategories(); // Rebuild categories
      return true;
    }
    return false;
  }
}

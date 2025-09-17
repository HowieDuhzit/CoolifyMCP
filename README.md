# CoolifyMCP

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en/install-mcp?name=coolifymcp&config=eyJjb21tYW5kIjoibnB4IGNvb2xpZnltY3AiLCJlbnYiOnsiQ09PTElGWV9BUElfVE9LRU4iOiJ5b3VyX2Nvb2xpZnlfYXBpX3Rva2VuX2hlcmUiLCJDT09MSUZZX0JBU0VfVVJMIjoiaHR0cHM6Ly95b3VyLWNvb2xpZnktaW5zdGFuY2UuY29tL2FwaS92MSJ9fQ%3D%3D)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)

A comprehensive **Model Context Protocol (MCP)** server that provides complete access to all [Coolify](https://github.com/coollabsio/coolify) API endpoints. CoolifyMCP enables AI assistants to interact with Coolify for managing applications, databases, servers, deployments, and more.

> **Built for [Coolify](https://github.com/coollabsio/coolify)** - An open-source & self-hostable Heroku / Netlify / Vercel alternative

## 📖 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Prerequisites](#-prerequisites)
- [Installation](#️-installation)
- [Configuration](#️-configuration)
- [Available Tools](#-available-tools)
- [Development](#️-development)
- [API Coverage](#-api-coverage)
- [Production Deployment](#-production-deployment)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **🎯 100% API Coverage**: Complete implementation of all Coolify API endpoints
- **🛠️ 40+ MCP Tools**: Comprehensive access to Coolify's functionality through MCP protocol
- **🧠 Knowledge Base**: Built-in knowledge base with Coolify documentation, examples, and best practices
- **📋 Template Management**: One-click service templates and Docker Compose examples
- **🔍 Advanced Search**: Semantic search through Coolify documentation and examples
- **🔒 Type Safety**: Built with TypeScript for robust error handling and development experience
- **🚀 Production Ready**: Health checks, proper logging, and monitoring
- **📦 Modular Architecture**: Clean, maintainable codebase with separated concerns
- **🔧 Comprehensive**: Supports all Coolify features including:
  - 👥 Team and Project Management
  - 🚀 Application Lifecycle Management
  - 🗄️ Database Management (PostgreSQL, MySQL, MongoDB, Redis, etc.)
  - 🖥️ Server Management and Validation
  - 🐳 Service Management
  - 📦 Deployment Management
  - 🔐 Environment Variables
  - 🔑 Security Keys Management
  - 📚 Knowledge Base and Documentation Search
  - 🎨 Template and Docker Compose Management
  - 📊 Monitoring and Performance Analysis
  - 🔒 Security Auditing and SSL Setup
  - 🚀 CI/CD and Automation Tools
  - 🧪 Development and Testing Environment Setup

## 🚀 Quick Start

### Install in Your AI IDE

CoolifyMCP works with all major AI IDEs that support the Model Context Protocol (MCP). Choose your preferred IDE:

#### **Cursor IDE** (Recommended)
1. Open Cursor and go to Settings → Extensions → MCP
2. Add this configuration to your `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "coolifymcp": {
      "command": "npx",
      "args": ["coolifymcp"],
      "env": {
        "COOLIFY_API_TOKEN": "your_coolify_api_token_here",
        "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"
      }
    }
  }
}
```

#### **Claude Desktop**
1. Open Claude Desktop settings
2. Add this configuration to your MCP settings:

```json
{
  "mcpServers": {
    "coolifymcp": {
      "command": "npx",
      "args": ["coolifymcp"],
      "env": {
        "COOLIFY_API_TOKEN": "your_coolify_api_token_here",
        "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"
      }
    }
  }
}
```

#### **JetBrains AI Assistant**
1. Open your JetBrains IDE (IntelliJ, WebStorm, etc.)
2. Go to Settings → Tools → AI Assistant → Model Context Protocol (MCP)
3. Click "Add" and configure:
   - **Name**: `coolifymcp`
   - **Command**: `npx`
   - **Arguments**: `["coolifymcp"]`
   - **Environment Variables**:
     - `COOLIFY_API_TOKEN`: `your_coolify_api_token_here`
     - `COOLIFY_BASE_URL`: `https://your-coolify-instance.com/api/v1`

#### **Other MCP-Compatible IDEs**
- **LibreChat**: Add MCP server configuration in settings
- **Klavis AI**: Configure in your platform's MCP settings
- **Custom MCP Clients**: Use the same configuration format

### Local Development
```bash
# Clone and install
git clone https://github.com/howieduhzit/coolifymcp.git
cd coolifymcp
npm install
npm run build

# Run with environment variables
COOLIFY_API_TOKEN="your_token_here" COOLIFY_BASE_URL="https://your-coolify-instance.com/api/v1" npm start
```

## 📋 Prerequisites

- **Node.js 20+** - [Download](https://nodejs.org/)
- **npm 9+** or **yarn** - Package manager
- **Coolify API token** - Get from your [Coolify dashboard](https://github.com/coollabsio/coolify)
- **Coolify instance URL** - Your Coolify instance (default: `https://app.coolify.io/api/v1`)

## 🛠️ Installation

### NPM Installation (Recommended)

1. Install and run with npx (no installation needed):
```bash
npx coolifymcp
```

2. Or install globally:
```bash
npm install -g coolifymcp
coolifymcp
```

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/howieduhzit/coolifymcp.git
cd coolifymcp
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Run with environment variables:
```bash
COOLIFY_API_TOKEN="your_token_here" COOLIFY_BASE_URL="https://your-coolify-instance.com/api/v1" npm start
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `COOLIFY_API_TOKEN` | Your Coolify API token | Yes | - |
| `COOLIFY_BASE_URL` | Coolify API base URL | No | `https://app.coolify.io/api/v1` |
| `NODE_ENV` | Environment mode | No | `development` |
| `PORT` | Health check server port | No | `3000` |

### MCP Client Configuration

The configuration format is consistent across all MCP-compatible IDEs. Here are the common locations:

#### **Configuration File Locations:**
- **Cursor**: `~/.cursor/mcp.json`
- **Claude Desktop**: MCP settings in the app
- **JetBrains**: Settings → Tools → AI Assistant → MCP
- **LibreChat**: Settings → MCP Servers
- **Custom Clients**: Refer to your client's documentation

#### **Standard Configuration:**
```json
{
  "mcpServers": {
    "coolifymcp": {
      "command": "npx",
      "args": ["coolifymcp"],
      "env": {
        "COOLIFY_API_TOKEN": "your_token_here",
        "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"
      }
    }
  }
}
```

#### **Environment Variables:**
- `COOLIFY_API_TOKEN` (required): Your Coolify API token
- `COOLIFY_BASE_URL` (optional): Your Coolify instance URL (defaults to `https://app.coolify.io/api/v1`)

## 🎯 Available Tools

The Coolify MCP Server provides **40+ comprehensive tools** that cover all Coolify functionality through action-based parameters:

### Core Coolify API Tools (18 tools)

### System Management (1 tool)
- `coolify_system` - System health, version, and information management
  - Actions: `health`, `version`, `info`

### Team Management (1 tool)
- `coolify_teams` - Complete team management operations
  - Actions: `list`, `current`, `get`, `members`

### Project Management (2 tools)
- `coolify_projects` - Project CRUD operations
  - Actions: `list`, `create`, `get`, `update`, `delete`
- `coolify_project_environments` - Project environment management
  - Actions: `list`, `create`, `get`, `delete`

### Application Management (5 tools)
- `coolify_applications` - Application CRUD operations (all types)
  - Actions: `list`, `create`, `update`, `get`, `delete`
  - Supports: public, private_github, private_deploy_key, dockerfile, dockerimage, dockercompose
- `coolify_application_lifecycle` - Application lifecycle management
  - Actions: `start`, `stop`, `restart`
- `coolify_application_envs` - Application environment variables
  - Actions: `list`, `create`, `bulk_update`, `delete`
- `coolify_logs` - Application logs retrieval
  - Actions: `get`
- `coolify_application_deployments` - Application deployment management
  - Actions: `list`, `get`, `trigger`

### Database Management (3 tools)
- `coolify_databases` - Database CRUD operations
  - Actions: `list`, `create`, `get`, `update`, `delete`
- `coolify_database_lifecycle` - Database lifecycle management
  - Actions: `start`, `stop`, `restart`
- `coolify_database_types` - Specific database type creation
  - Actions: `create` (PostgreSQL, MySQL, MongoDB, Redis)

### Server Management (2 tools)
- `coolify_servers` - Server CRUD operations
  - Actions: `list`, `create`, `get`, `update`, `delete`
- `coolify_server_management` - Server operations and resources
  - Actions: `validate`, `domains`, `resources`

### Service Management (3 tools)
- `coolify_services` - Service CRUD operations
  - Actions: `list`, `create`, `get`, `update`, `delete`
- `coolify_service_lifecycle` - Service lifecycle management
  - Actions: `start`, `stop`, `restart`
- `coolify_service_envs` - Service environment variables
  - Actions: `list`, `create`, `update`, `bulk_update`, `delete`

### Security Management (1 tool)
- `coolify_security_keys` - Security key management
  - Actions: `list`, `create`, `get`, `update`, `delete`

### Knowledge Base Tools (4 tools)
- `coolify_knowledge_search` - Search through Coolify documentation and examples
  - Parameters: `query`, `category`, `source`, `limit`
- `coolify_knowledge_get_document` - Get specific document by ID
  - Parameters: `document_id`
- `coolify_knowledge_list_categories` - List all knowledge base categories
- `coolify_knowledge_get_category` - Get documents in specific category
  - Parameters: `category`

### Template Management Tools (3 tools)
- `coolify_templates_list` - List available one-click service templates
  - Parameters: `category`, `type`
- `coolify_templates_get` - Get specific template configuration
  - Parameters: `template_name`, `format`
- `coolify_templates_validate` - Validate Docker Compose templates
  - Parameters: `template_content`, `template_format`

### Docker Compose Tools (2 tools)
- `coolify_docker_compose_generate` - Generate Docker Compose for common stacks
  - Parameters: `stack_type`, `services`, `environment`, `include_volumes`, `include_networks`
- `coolify_docker_compose_optimize` - Optimize Docker Compose for Coolify
  - Parameters: `compose_content`, `optimization_level`, `add_health_checks`, `add_coolify_vars`

### Monitoring and Analytics Tools (2 tools)
- `coolify_monitoring_setup` - Set up monitoring stack with Prometheus/Grafana
  - Parameters: `project_uuid`, `server_uuid`, `environment_name`, `include_grafana`, `include_alertmanager`
- `coolify_health_check_generator` - Generate health check configurations
  - Parameters: `application_type`, `port`, `health_endpoint`, `check_type`, `interval`, `timeout`, `retries`

### CI/CD and Automation Tools (2 tools)
- `coolify_webhook_setup` - Set up webhooks for CI/CD integration
  - Parameters: `application_uuid`, `webhook_type`, `events`, `secret`, `auto_deploy`
- `coolify_backup_setup` - Set up automated backup configuration
  - Parameters: `resource_uuid`, `resource_type`, `backup_frequency`, `retention_days`, `s3_bucket`

### Security and Compliance Tools (2 tools)
- `coolify_security_audit` - Perform security audit of deployment
  - Parameters: `project_uuid`, `audit_type`, `check_ssl`, `check_secrets`, `check_permissions`
- `coolify_ssl_setup` - Set up SSL certificates and HTTPS
  - Parameters: `application_uuid`, `domain`, `certificate_type`, `force_https`, `hsts`, `auto_renewal`

### Performance and Optimization Tools (2 tools)
- `coolify_performance_analyze` - Analyze application performance
  - Parameters: `application_uuid`, `analysis_duration`, `check_resources`, `check_network`, `check_database`
- `coolify_scaling_recommendations` - Get scaling recommendations
  - Parameters: `application_uuid`, `scaling_type`, `target_performance`, `include_cost_analysis`

### Development and Testing Tools (2 tools)
- `coolify_development_environment` - Set up development environment
  - Parameters: `project_uuid`, `server_uuid`, `environment_name`, `enable_hot_reload`, `enable_debugging`
- `coolify_testing_setup` - Set up testing environment with automated testing
  - Parameters: `application_uuid`, `test_types`, `ci_integration`, `test_database`, `coverage_reporting`

## 🏗️ Development

### Scripts

- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start the production server
- `npm run dev` - Start development server with hot reload

### Project Structure

```
coolify-mcp-server/
├── src/
│   └── index.ts          # Main MCP server implementation
├── dist/                 # Compiled JavaScript output
├── Dockerfile           # Docker configuration
├── docker-compose.yaml  # Docker Compose configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── config.example.env   # Environment variables template
└── README.md           # This file
```

## 🔧 API Coverage

This MCP server provides **100% coverage** of the Coolify API with **40+ comprehensive tools** covering all **83+ API endpoints** plus advanced knowledge base and automation features:

### Core API Coverage (18 tools)
- ✅ System Management (1 tool) - Health, version, and system information
- ✅ Team Management (1 tool) - Complete team operations
- ✅ Project Management (2 tools) - Projects and environments
- ✅ Application Management (5 tools) - All application types and lifecycle
- ✅ Database Management (3 tools) - All database types and operations
- ✅ Server Management (2 tools) - Server operations and resources
- ✅ Service Management (3 tools) - Service operations and lifecycle
- ✅ Security Management (1 tool) - Security keys and authentication

### Advanced Features (22+ tools)
- ✅ Knowledge Base (4 tools) - Documentation search and retrieval
- ✅ Template Management (3 tools) - One-click services and Docker Compose templates
- ✅ Docker Compose Tools (2 tools) - Generation and optimization
- ✅ Monitoring & Analytics (2 tools) - Performance monitoring and health checks
- ✅ CI/CD & Automation (2 tools) - Webhooks and backup automation
- ✅ Security & Compliance (2 tools) - Security auditing and SSL setup
- ✅ Performance & Optimization (2 tools) - Performance analysis and scaling
- ✅ Development & Testing (2 tools) - Development environments and testing setup

**Key Benefits:**
- 🎯 **Comprehensive Coverage**: 40+ tools covering all Coolify functionality
- 🧠 **Knowledge Base**: Built-in documentation and examples search
- 🚀 **Advanced Automation**: Template generation, monitoring setup, and CI/CD tools
- 🔧 **Developer Experience**: Development environments and testing tools
- 📚 **Rich Documentation**: Extensive knowledge base with search capabilities

## 🚀 Production Deployment

### Health Checks

The server includes a health check endpoint at `/health` when running in production mode (`NODE_ENV=production`).

### Environment Configuration

For production deployment, ensure:

1. Set `NODE_ENV=production`
2. Provide valid `COOLIFY_API_TOKEN`
3. Set correct `COOLIFY_BASE_URL`
4. Configure proper logging
5. Set up monitoring and alerting

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📚 Documentation

- **README.md** - Complete documentation and usage examples
- **GitHub Repository** - Source code and issue tracking

## 📞 Support

For issues and questions:
- 📝 [Create an issue](https://github.com/howieduhzit/coolifymcp/issues) in the repository
- 📖 Check the [Coolify documentation](https://coolify.io/docs)
- 💬 Join the [Coolify community](https://discord.gg/coolify)

## 🙏 Acknowledgments

This project is built for and powered by [Coolify](https://github.com/coollabsio/coolify) - an amazing open-source platform that makes self-hosting applications incredibly easy. Special thanks to the Coolify team and community for creating such a powerful tool.

- 🌟 [Coolify on GitHub](https://github.com/coollabsio/coolify) - The main Coolify project
- 🌐 [Coolify Website](https://coolify.io) - Official website and documentation
- 📚 [Coolify Documentation](https://coolify.io/docs) - Complete documentation
- 💬 [Coolify Discord](https://discord.gg/coolify) - Community support


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for the [Coolify](https://github.com/coollabsio/coolify) community**

[![GitHub stars](https://img.shields.io/github/stars/howieduhzit/coolifymcp?style=social)](https://github.com/howieduhzit/coolifymcp)
[![GitHub forks](https://img.shields.io/github/forks/howieduhzit/coolifymcp?style=social)](https://github.com/howieduhzit/coolifymcp)
[![GitHub issues](https://img.shields.io/github/issues/howieduhzit/coolifymcp)](https://github.com/howieduhzit/coolifymcp/issues)

---

**Powered by [Coolify](https://github.com/coollabsio/coolify)** - An open-source & self-hostable Heroku / Netlify / Vercel alternative with 45.2k+ stars ⭐
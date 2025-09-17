# Coolify MCP Server

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)

A comprehensive **Model Context Protocol (MCP)** server that provides complete access to all Coolify API endpoints. This server enables AI assistants to interact with Coolify for managing applications, databases, servers, deployments, and more.

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

- **🎯 100% API Coverage**: Complete implementation of all 66 Coolify API endpoints
- **🛠️ 64 MCP Tools**: Full access to Coolify's functionality through MCP protocol
- **🔒 Type Safety**: Built with TypeScript for robust error handling and development experience
- **🚀 Production Ready**: Docker support, health checks, proper logging, and monitoring
- **📦 Modular Architecture**: Clean, maintainable codebase with separated concerns
- **🔧 Comprehensive**: Supports all Coolify features including:
  - 👥 Team and Project Management
  - 🚀 Application Lifecycle Management
  - 🗄️ Database Management (PostgreSQL, MySQL, MongoDB, Redis, etc.)
  - 🖥️ Server Management and Validation
  - 🐳 Service Management (Docker Compose)
  - 📦 Deployment Management
  - 🔐 Environment Variables
  - 🔑 Security Keys Management

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/HowieDuhzit/CoolifyMCP.git
cd CoolifyMCP
npm install

# Configure
cp config.example.env .env
# Edit .env with your Coolify API token

# Build and run
npm run build
npm start
```

## 📋 Prerequisites

- **Node.js 20+** - [Download](https://nodejs.org/)
- **npm 9+** or **yarn** - Package manager
- **Coolify API token** - Get from your Coolify dashboard
- **Coolify instance URL** - Your Coolify instance (default: `https://app.coolify.io/api/v1`)

## 🛠️ Installation

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd coolify-mcp-server
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Set up environment variables:
```bash
cp config.example.env .env
# Edit .env with your Coolify credentials
```

5. Run the server:
```bash
npm start
```

### Docker Deployment

1. Build the Docker image:
```bash
docker build -t coolify-mcp-server .
```

2. Run with environment variables:
```bash
docker run -d \
  -e COOLIFY_API_TOKEN="your_token_here" \
  -e COOLIFY_BASE_URL="https://your-coolify-instance.com/api/v1" \
  -p 3000:3000 \
  coolify-mcp-server
```

### Docker Compose

```bash
docker-compose up -d
```

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `COOLIFY_API_TOKEN` | Your Coolify API token | Yes | - |
| `COOLIFY_BASE_URL` | Coolify API base URL | Yes | `https://app.coolify.io/api/v1` |
| `NODE_ENV` | Environment mode | No | `development` |
| `PORT` | Health check server port | No | `3000` |

### MCP Client Configuration

Add to your MCP client configuration (e.g., `~/.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "coolify": {
      "command": "node",
      "args": ["/path/to/coolify-mcp-server/dist/index.js"],
      "env": {
        "COOLIFY_API_TOKEN": "your_token_here",
        "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"
      }
    }
  }
}
```

## 🎯 Available Tools

### Health & System (2 tools)
- `coolify_health_check` - Check Coolify system health
- `coolify_version` - Get Coolify API version information

### Team Management (4 tools)
- `coolify_list_teams` - List all teams
- `coolify_get_current_team` - Get current team information
- `coolify_get_team` - Get team by ID
- `coolify_list_team_members` - List team members

### Project Management (5 tools)
- `coolify_list_projects` - List all projects
- `coolify_create_project` - Create a new project
- `coolify_get_project` - Get project by UUID
- `coolify_delete_project` - Delete project
- `coolify_get_project_environment` - Get project environment details

### Application Management (13 tools)
- `coolify_list_applications` - List all applications
- `coolify_create_public_application` - Create a public application
- `coolify_create_private_github_application` - Create a private GitHub application
- `coolify_create_dockerfile_application` - Create a Dockerfile application
- `coolify_create_dockerimage_application` - Create a Docker image application
- `coolify_get_application` - Get application by UUID
- `coolify_update_application` - Update application
- `coolify_delete_application` - Delete application
- `coolify_start_application` - Start application
- `coolify_stop_application` - Stop application
- `coolify_restart_application` - Restart application
- `coolify_get_application_logs` - Get application logs
- `coolify_get_application_deployments` - Get deployments for an application

### Environment Variables (5 tools)
- `coolify_list_application_envs` - List application environment variables
- `coolify_create_application_env` - Create application environment variable
- `coolify_bulk_update_application_envs` - Bulk update application environment variables
- `coolify_delete_application_env` - Delete application environment variable

### Database Management (12 tools)
- `coolify_list_databases` - List all databases
- `coolify_create_database` - Create a new database (generic)
- `coolify_create_postgresql_database` - Create a PostgreSQL database
- `coolify_create_mysql_database` - Create a MySQL database
- `coolify_create_mongodb_database` - Create a MongoDB database
- `coolify_create_redis_database` - Create a Redis database
- `coolify_get_database` - Get database by UUID
- `coolify_update_database` - Update database
- `coolify_delete_database` - Delete database
- `coolify_start_database` - Start database
- `coolify_stop_database` - Stop database
- `coolify_restart_database` - Restart database

### Server Management (8 tools)
- `coolify_list_servers` - List all servers
- `coolify_create_server` - Create a new server
- `coolify_get_server` - Get server by UUID
- `coolify_update_server` - Update server
- `coolify_delete_server` - Delete server
- `coolify_validate_server` - Validate server connection
- `coolify_list_server_domains` - List server domains
- `coolify_list_server_resources` - List server resources

### Service Management (8 tools)
- `coolify_list_services` - List all services
- `coolify_create_service` - Create a new service
- `coolify_get_service` - Get service by UUID
- `coolify_update_service` - Update service
- `coolify_delete_service` - Delete service
- `coolify_start_service` - Start service
- `coolify_stop_service` - Stop service
- `coolify_restart_service` - Restart service

### Deployment Management (4 tools)
- `coolify_list_deployments` - List all deployments
- `coolify_get_deployment` - Get deployment by UUID
- `coolify_get_application_deployments` - Get deployments for an application
- `coolify_trigger_deployment` - Trigger a deployment

### Security & Keys (5 tools)
- `coolify_list_security_keys` - List all security keys
- `coolify_create_security_key` - Create a new security key
- `coolify_get_security_key` - Get security key by UUID
- `coolify_update_security_key` - Update security key
- `coolify_delete_security_key` - Delete security key

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

This MCP server provides **100% coverage** of the Coolify API with **64 tools** covering all **66 API endpoints**:

- ✅ Health & System endpoints
- ✅ Team Management endpoints  
- ✅ Project Management endpoints
- ✅ Application Management endpoints
- ✅ Environment Variables endpoints
- ✅ Database Management endpoints
- ✅ Server Management endpoints
- ✅ Service Management endpoints
- ✅ Deployment Management endpoints
- ✅ Security & Keys endpoints

## 🚀 Production Deployment

### Health Checks

The server includes a health check endpoint at `/health` when running in production mode (`NODE_ENV=production`).

### Docker Deployment

The included `Dockerfile` and `docker-compose.yaml` provide production-ready containerization with:

- Multi-stage build for optimized image size
- Health checks
- Proper signal handling
- Environment variable configuration
- Port exposure for health checks

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

- **[API Reference](API_REFERENCE.md)** - Complete reference for all 64 MCP tools
- **[Troubleshooting Guide](TROUBLESHOOTING.md)** - Common issues and solutions
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute to the project
- **[Changelog](CHANGELOG.md)** - Version history and changes
- **[Production Checklist](PRODUCTION_CHECKLIST.md)** - Production deployment guide

## 📞 Support

For issues and questions:
- 📝 [Create an issue](https://github.com/HowieDuhzit/CoolifyMCP/issues) in the repository
- 📖 Check the [Coolify documentation](https://coolify.io/docs)
- 🔍 Review the [API cheat sheet](apiCheetSheet.md)
- 💬 Join the [Coolify community](https://discord.gg/coolify)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for the Coolify community**

[![GitHub stars](https://img.shields.io/github/stars/HowieDuhzit/CoolifyMCP?style=social)](https://github.com/HowieDuhzit/CoolifyMCP)
[![GitHub forks](https://img.shields.io/github/forks/HowieDuhzit/CoolifyMCP?style=social)](https://github.com/HowieDuhzit/CoolifyMCP)
[![GitHub issues](https://img.shields.io/github/issues/HowieDuhzit/CoolifyMCP)](https://github.com/HowieDuhzit/CoolifyMCP/issues)
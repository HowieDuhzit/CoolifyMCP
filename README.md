# CoolifyMCP

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED)](https://www.docker.com/)

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
- **🛠️ 18 Consolidated MCP Tools**: Streamlined access to Coolify's functionality through MCP protocol
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

## 🚀 Quick Start

### NPM Installation (Recommended)
```bash
# Install and run with npx (no installation needed)
npx coolifymcp

# Or install globally
npm install -g coolifymcp
coolifymcp
```

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

Add to your MCP client configuration (e.g., `~/.cursor/mcp.json`):

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

## 🎯 Available Tools

The Coolify MCP Server provides **18 consolidated tools** that cover all Coolify functionality through action-based parameters:

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

This MCP server provides **100% coverage** of the Coolify API with **18 consolidated tools** covering all **83+ API endpoints**:

- ✅ System Management (1 tool) - Health, version, and system information
- ✅ Team Management (1 tool) - Complete team operations
- ✅ Project Management (2 tools) - Projects and environments
- ✅ Application Management (5 tools) - All application types and lifecycle
- ✅ Database Management (3 tools) - All database types and operations
- ✅ Server Management (2 tools) - Server operations and resources
- ✅ Service Management (3 tools) - Service operations and lifecycle
- ✅ Security Management (1 tool) - Security keys and authentication

**Key Benefits of Consolidation:**
- 🎯 **Reduced Complexity**: 18 tools instead of 83+ individual tools
- 🚀 **Better Performance**: Fewer tool definitions and cleaner API
- 🔧 **Easier Maintenance**: Action-based parameters for better organization
- 📚 **Simplified Documentation**: Clear tool categories and actions

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
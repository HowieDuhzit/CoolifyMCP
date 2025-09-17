# Coolify MCP Server Distribution Guide

## 🚀 Distribution Methods

### 1. Docker Hub MCP Catalog (Primary)
- **Target**: Docker Desktop users, enterprise users
- **Installation**: `docker mcp server enable coolify`
- **Benefits**: Official Docker ecosystem, easy discovery

### 2. GitHub Container Registry (Current)
- **Target**: Developers, CI/CD, custom deployments
- **Installation**: Docker pull from `ghcr.io/howieduhzit/coolifymcp`
- **Benefits**: Already set up, version control, GitHub integration

### 3. NPM Package (Developer-Friendly)
- **Target**: Node.js developers, local development
- **Installation**: `npm install -g @howieduhzit/coolify-mcp-server`
- **Benefits**: Easy updates, familiar to developers

### 4. Docker Compose Template
- **Target**: Self-hosted deployments, production
- **Installation**: Copy `docker-compose.mcp.yml` and run
- **Benefits**: Production-ready, customizable

## 📦 Quick Start Templates

### For Cursor/VS Code Users
```json
{
  "mcpServers": {
    "coolify": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "ghcr.io/howieduhzit/coolifymcp:latest"
      ],
      "env": {
        "COOLIFY_API_TOKEN": "your_coolify_api_token",
        "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"
      }
    }
  }
}
```

### For Docker Compose Users
```yaml
version: '3.8'
services:
  coolify-mcp:
    image: ghcr.io/howieduhzit/coolifymcp:latest
    environment:
      - COOLIFY_API_TOKEN=${COOLIFY_API_TOKEN}
      - COOLIFY_BASE_URL=${COOLIFY_BASE_URL}
    restart: unless-stopped
```

### For NPM Users
```bash
npm install -g @howieduhzit/coolify-mcp-server
```

## 🔧 Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `COOLIFY_API_TOKEN` | Yes | - | Your Coolify API token |
| `COOLIFY_BASE_URL` | No | `https://app.coolify.io/api/v1` | Your Coolify instance URL |
| `LOG_LEVEL` | No | `info` | Logging level (debug, info, warn, error) |

## 🛠️ Development Setup

For local development:
```bash
git clone https://github.com/howieduhzit/CoolifyMCP.git
cd CoolifyMCP
npm install
npm run build
./start-coolify-mcp.sh
```

## 📋 Available Tools

The MCP server provides 18 consolidated Coolify tools:
- System management
- Team management  
- Project management
- Application management
- Database management
- Server management
- Service management
- Security key management

See [TOOLS_REFERENCE.md](./TOOLS_REFERENCE.md) for complete documentation.

# CoolifyMCP - Installation Guide

## 🚀 Quick Installation

### NPM Installation (Recommended)
```bash
# Install and run with npx (no installation needed)
npx coolifymcp

# Or install globally
npm install -g coolifymcp
coolifymcp
```

### Docker Installation
```bash
# Pull and run with Docker
docker run --rm -i \
  -e COOLIFY_API_TOKEN="your_coolify_api_token_here" \
  -e COOLIFY_BASE_URL="https://app.coolify.io/api/v1" \
  howieduhzit/coolifymcp:latest
```

### Cursor/VS Code Configuration
Add to your MCP configuration:

```json
{
  "mcpServers": {
    "coolifymcp": {
      "command": "npx",
      "args": [
        "coolifymcp"
      ],
      "env": {
        "COOLIFY_API_TOKEN": "your_coolify_api_token_here",
        "COOLIFY_BASE_URL": "https://app.coolify.io/api/v1"
      }
    }
  }
}
```

## 📋 Configuration

### Required Environment Variables
- `COOLIFY_API_TOKEN`: Your Coolify API token (required)

### Optional Environment Variables
- `COOLIFY_BASE_URL`: Your Coolify instance URL (default: `https://app.coolify.io/api/v1`)
- `LOG_LEVEL`: Logging level (default: `info`)

## 🛠️ Available Tools

CoolifyMCP provides 18 consolidated tools covering 100% of Coolify's API:

### System Management
- `coolify_system` - Health check, version, and system information

### Team Management
- `coolify_teams` - Complete team management operations

### Project Management
- `coolify_projects` - Project CRUD operations
- `coolify_project_environments` - Environment management

### Application Management
- `coolify_applications` - Application CRUD operations
- `coolify_application_lifecycle` - Start/stop/restart applications
- `coolify_application_envs` - Environment variables management
- `coolify_logs` - Application logs and monitoring
- `coolify_application_deployments` - Deployment management

### Database Management
- `coolify_databases` - Database CRUD operations
- `coolify_database_lifecycle` - Database lifecycle management
- `coolify_database_types` - Specific database creation

### Server Management
- `coolify_servers` - Server CRUD operations
- `coolify_server_management` - Server operations and resources

### Service Management
- `coolify_services` - Service CRUD operations
- `coolify_service_lifecycle` - Service lifecycle management
- `coolify_service_envs` - Service environment variables

### Security
- `coolify_security_keys` - Security key management

## 🔧 Examples

### Check Coolify Health
```json
{
  "tool": "coolify_system",
  "args": {
    "action": "health"
  }
}
```

### List Projects
```json
{
  "tool": "coolify_projects",
  "args": {
    "action": "list"
  }
}
```

### List Applications
```json
{
  "tool": "coolify_applications",
  "args": {
    "action": "list"
  }
}
```

## 📚 Documentation

- **GitHub Repository**: https://github.com/howieduhzit/coolifymcp
- **Docker Hub**: https://hub.docker.com/r/howieduhzit/coolifymcp
- **GitHub Container Registry**: https://github.com/howieduhzit/coolifymcp/pkgs/container/coolifymcp

## 🆘 Support

- **Issues**: https://github.com/howieduhzit/coolifymcp/issues
- **Discussions**: https://github.com/howieduhzit/coolifymcp/discussions
- **Documentation**: https://github.com/howieduhzit/coolifymcp#readme

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

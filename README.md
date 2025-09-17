# Coolify MCP Server

A comprehensive Model Context Protocol (MCP) server that provides access to all Coolify API endpoints for deployment and infrastructure management.

## Features

- **Complete API Coverage**: Access to all Coolify API endpoints including:
  - Health & System monitoring
  - Team management
  - Project management
  - Application lifecycle management
  - Database management
  - Server management
  - Deployment management
  - Environment variable management

- **Authentication**: Secure Bearer token authentication
- **Type Safety**: Full TypeScript implementation with Zod validation
- **Error Handling**: Comprehensive error handling and validation
- **Flexible Configuration**: Support for both environment variables and runtime configuration

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

## Configuration

### Environment Variables

Set the following environment variables:

```bash
# Required: Your Coolify API token
export COOLIFY_API_TOKEN="your_api_token_here"

# Optional: Custom Coolify instance URL (defaults to https://app.coolify.io/api/v1)
export COOLIFY_BASE_URL="https://your-coolify-instance.com/api/v1"
```

### Getting Your API Token

1. Go to your Coolify dashboard
2. Navigate to `Keys & Tokens` → `API tokens`
3. Create a new token with appropriate permissions
4. Copy the token (you'll only see it once!)

## Usage

### Running the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

### MCP Client Configuration

Add this server to your MCP client configuration:

```json
{
  "mcpServers": {
    "coolify": {
      "command": "node",
      "args": ["dist/index.js"],
      "env": {
        "COOLIFY_API_TOKEN": "your_api_token_here"
      }
    }
  }
}
```

## Available Tools

### Health & System
- `coolify_health_check` - Check system health
- `coolify_version` - Get API version info

### Team Management
- `coolify_list_teams` - List all teams
- `coolify_get_current_team` - Get current team info

### Project Management
- `coolify_list_projects` - List projects
- `coolify_create_project` - Create new project
- `coolify_get_project` - Get project details
- `coolify_delete_project` - Delete project

### Application Management
- `coolify_list_applications` - List applications
- `coolify_create_public_application` - Create public app
- `coolify_get_application` - Get application details
- `coolify_delete_application` - Delete application

### Application Actions
- `coolify_start_application` - Start application
- `coolify_stop_application` - Stop application
- `coolify_restart_application` - Restart application
- `coolify_get_application_logs` - Get application logs

### Database Management
- `coolify_list_databases` - List databases
- `coolify_create_database` - Create database

### Server Management
- `coolify_list_servers` - List servers

### Deployment Management
- `coolify_list_deployments` - List deployments
- `coolify_trigger_deployment` - Trigger deployment

## Example Usage

### Create a New Project
```json
{
  "name": "coolify_create_project",
  "arguments": {
    "name": "My New Project",
    "description": "A project for my application"
  }
}
```

### Deploy a Public Application
```json
{
  "name": "coolify_create_public_application",
  "arguments": {
    "project_uuid": "project-uuid-here",
    "server_uuid": "server-uuid-here",
    "environment_name": "production",
    "git_repository": "https://github.com/user/repo.git",
    "git_branch": "main",
    "build_pack": "nixpacks",
    "ports_exposes": "3000",
    "name": "My App"
  }
}
```

### Create a Database
```json
{
  "name": "coolify_create_database",
  "arguments": {
    "name": "my-database",
    "server_uuid": "server-uuid-here",
    "project_uuid": "project-uuid-here",
    "environment_name": "production",
    "type": "postgresql"
  }
}
```

## API Permissions

The server respects Coolify's permission system:

- **read-only**: Read data only, no sensitive data access
- **read:sensitive**: Read data + access to sensitive information
- **view:sensitive**: Required to see passwords, API keys, and other sensitive data
- **\***: Full access to all resources and sensitive data

## Error Handling

The server provides detailed error messages for:
- Authentication failures
- Invalid parameters
- API errors
- Network issues

## Development

### Project Structure
```
src/
├── index.ts          # Main server implementation
package.json          # Dependencies and scripts
tsconfig.json         # TypeScript configuration
README.md            # This file
```

### Building
```bash
npm run build
```

### Development Mode
```bash
npm run dev
```

## License

MIT

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For issues and questions:
- Check the [Coolify API documentation](https://coolify.io/docs/api-reference/authorization)
- Review the error messages for troubleshooting
- Ensure your API token has the correct permissions

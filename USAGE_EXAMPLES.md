# Coolify MCP Server - Usage Examples

## Getting Started

### 1. Get Your API Token

1. Go to your Coolify dashboard
2. Navigate to `Keys & Tokens` → `API tokens`
3. Create a new token with appropriate permissions
4. Copy the token (you'll only see it once!)

### 2. Configure the Server

#### Option A: Environment Variables
```bash
# Set your token
export COOLIFY_API_TOKEN="3|WaobqX9tJQshKPuQFHsyAmpuOOggg4wOfvGc9xa233c376d7"

# Optional: Set custom endpoint
export COOLIFY_BASE_URL="https://your-coolify-instance.com/api/v1"

# Run the server
npm start
```

#### Option B: MCP Client Configuration
```json
{
  "mcpServers": {
    "coolify": {
      "command": "node",
      "args": ["dist/index.js"],
      "env": {
        "COOLIFY_API_TOKEN": "3|WaobqX9tJQshKPuQFHsyAmpuOOggg4wOfvGc9xa233c376d7",
        "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"
      }
    }
  }
}
```

## Example Tool Calls

### Check System Health
```json
{
  "name": "coolify_health_check",
  "arguments": {}
}
```

### List All Projects
```json
{
  "name": "coolify_list_projects",
  "arguments": {
    "page": 1,
    "per_page": 10
  }
}
```

### Create a New Project
```json
{
  "name": "coolify_create_project",
  "arguments": {
    "name": "My Awesome Project",
    "description": "A project for my web application"
  }
}
```

### Deploy a Public Application
```json
{
  "name": "coolify_create_public_application",
  "arguments": {
    "project_uuid": "123e4567-e89b-12d3-a456-426614174000",
    "server_uuid": "123e4567-e89b-12d3-a456-426614174001",
    "environment_name": "production",
    "git_repository": "https://github.com/username/my-app.git",
    "git_branch": "main",
    "build_pack": "nixpacks",
    "ports_exposes": "3000",
    "name": "My Web App"
  }
}
```

### Create a PostgreSQL Database
```json
{
  "name": "coolify_create_database",
  "arguments": {
    "name": "my-app-db",
    "server_uuid": "123e4567-e89b-12d3-a456-426614174001",
    "project_uuid": "123e4567-e89b-12d3-a456-426614174000",
    "environment_name": "production",
    "type": "postgresql"
  }
}
```

### Start an Application
```json
{
  "name": "coolify_start_application",
  "arguments": {
    "uuid": "123e4567-e89b-12d3-a456-426614174002"
  }
}
```

### Get Application Logs
```json
{
  "name": "coolify_get_application_logs",
  "arguments": {
    "uuid": "123e4567-e89b-12d3-a456-426614174002"
  }
}
```

### Trigger a Deployment
```json
{
  "name": "coolify_trigger_deployment",
  "arguments": {
    "application_uuid": "123e4567-e89b-12d3-a456-426614174002",
    "force_rebuild": true
  }
}
```

## Runtime Configuration

You can also pass credentials with each tool call:

```json
{
  "name": "coolify_list_projects",
  "arguments": {
    "token": "3|WaobqX9tJQshKPuQFHsyAmpuOOggg4wOfvGc9xa233c376d7",
    "baseUrl": "https://your-coolify-instance.com/api/v1",
    "page": 1
  }
}
```

## Permission Levels

Your API token can have different permission levels:

- **`read-only`** (default): Read data only, no sensitive data access
- **`read:sensitive`**: Read data + access to sensitive information  
- **`view:sensitive`**: Required to see passwords, API keys, and other sensitive data
- **`*`**: Full access to all resources and sensitive data

## Self-Hosted Coolify

If you're using a self-hosted Coolify instance:

```bash
# For self-hosted instances
export COOLIFY_BASE_URL="http://your-server-ip:8000/api/v1"
export COOLIFY_API_TOKEN="your_token_here"
```

## Troubleshooting

### Common Issues

1. **"API token is required" error**
   - Make sure you've set the `COOLIFY_API_TOKEN` environment variable
   - Or pass the token in the tool arguments

2. **"Unauthorized" error**
   - Check that your API token is valid and not expired
   - Verify the token has the correct permissions for the operation

3. **"Connection refused" error**
   - Check that your `COOLIFY_BASE_URL` is correct
   - For self-hosted instances, ensure the server is running and accessible

4. **"Invalid UUID" error**
   - Make sure you're using valid UUIDs for project_uuid, server_uuid, etc.
   - You can get these by listing projects/servers first

# Coolify MCP Server API Reference

This document provides a comprehensive reference for all available MCP tools in the Coolify MCP Server.

## Table of Contents

- [Health & System](#health--system)
- [Team Management](#team-management)
- [Project Management](#project-management)
- [Application Management](#application-management)
- [Environment Variables](#environment-variables)
- [Database Management](#database-management)
- [Server Management](#server-management)
- [Service Management](#service-management)
- [Deployment Management](#deployment-management)
- [Security & Keys](#security--keys)

## Health & System

### `coolify_health_check`

Check Coolify system health.

**Parameters:** None

**Returns:** Health status information

**Example:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00Z",
  "uptime": 3600
}
```

### `coolify_version`

Get Coolify API version information.

**Parameters:** None

**Returns:** Version information

**Example:**
```json
{
  "version": "4.0.0",
  "build": "abc123",
  "environment": "production"
}
```

## Team Management

### `coolify_list_teams`

List all teams accessible to the API token.

**Parameters:** None

**Returns:** Array of team objects

**Example:**
```json
[
  {
    "id": "1",
    "name": "Personal",
    "description": "Personal team",
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

### `coolify_get_current_team`

Get current team information based on API token.

**Parameters:** None

**Returns:** Current team object

### `coolify_get_team`

Get team by ID.

**Parameters:**
- `id` (string, required): Team ID

**Returns:** Team object

### `coolify_list_team_members`

List team members.

**Parameters:**
- `team_id` (string, optional): Team ID (defaults to current team)

**Returns:** Array of team member objects

## Project Management

### `coolify_list_projects`

List all projects.

**Parameters:**
- `page` (number, optional): Page number
- `per_page` (number, optional): Items per page

**Returns:** Paginated list of projects

### `coolify_create_project`

Create a new project.

**Parameters:**
- `name` (string, required): Project name
- `description` (string, optional): Project description

**Returns:** Created project object

### `coolify_get_project`

Get project by UUID.

**Parameters:**
- `uuid` (string, required): Project UUID

**Returns:** Project object

### `coolify_delete_project`

Delete project.

**Parameters:**
- `uuid` (string, required): Project UUID

**Returns:** Success message

### `coolify_get_project_environment`

Get project environment details.

**Parameters:**
- `uuid` (string, required): Project UUID
- `environment_name_or_uuid` (string, required): Environment name or UUID

**Returns:** Environment object

## Application Management

### `coolify_list_applications`

List all applications.

**Parameters:**
- `page` (number, optional): Page number
- `per_page` (number, optional): Items per page

**Returns:** Paginated list of applications

### `coolify_create_public_application`

Create a public application from a Git repository.

**Parameters:**
- `project_uuid` (string, required): Project UUID
- `server_uuid` (string, required): Server UUID
- `environment_name` (string, required): Environment name
- `git_repository` (string, required): Git repository URL
- `git_branch` (string, optional): Git branch (default: "main")
- `build_pack` (string, required): Build pack type ("nixpacks", "static", "dockerfile", "dockercompose")
- `ports_exposes` (string, required): Port configuration
- `name` (string, optional): Application name

**Returns:** Created application object

### `coolify_create_private_github_application`

Create a private GitHub application.

**Parameters:**
- `project_uuid` (string, required): Project UUID
- `server_uuid` (string, required): Server UUID
- `github_app_uuid` (string, required): GitHub App UUID
- `environment_name` (string, required): Environment name
- `git_repository` (string, required): Git repository URL
- `git_branch` (string, optional): Git branch (default: "main")
- `build_pack` (string, required): Build pack type
- `ports_exposes` (string, required): Port configuration
- `name` (string, optional): Application name

**Returns:** Created application object

### `coolify_create_dockerfile_application`

Create a Dockerfile application.

**Parameters:**
- `project_uuid` (string, required): Project UUID
- `server_uuid` (string, required): Server UUID
- `environment_name` (string, required): Environment name
- `git_repository` (string, required): Git repository URL
- `git_branch` (string, optional): Git branch (default: "main")
- `ports_exposes` (string, required): Port configuration
- `name` (string, optional): Application name
- `dockerfile_location` (string, optional): Dockerfile location (default: "/Dockerfile")

**Returns:** Created application object

### `coolify_create_dockerimage_application`

Create a Docker image application.

**Parameters:**
- `project_uuid` (string, required): Project UUID
- `server_uuid` (string, required): Server UUID
- `environment_name` (string, required): Environment name
- `docker_registry_image_name` (string, required): Docker registry image name
- `docker_registry_image_tag` (string, optional): Docker registry image tag (default: "latest")
- `ports_exposes` (string, required): Port configuration
- `name` (string, optional): Application name

**Returns:** Created application object

### `coolify_get_application`

Get application by UUID.

**Parameters:**
- `uuid` (string, required): Application UUID

**Returns:** Application object

### `coolify_update_application`

Update application.

**Parameters:**
- `uuid` (string, required): Application UUID
- `name` (string, optional): Application name
- `description` (string, optional): Application description

**Returns:** Updated application object

### `coolify_delete_application`

Delete application.

**Parameters:**
- `uuid` (string, required): Application UUID

**Returns:** Success message

### `coolify_start_application`

Start application.

**Parameters:**
- `uuid` (string, required): Application UUID

**Returns:** Operation result

### `coolify_stop_application`

Stop application.

**Parameters:**
- `uuid` (string, required): Application UUID

**Returns:** Operation result

### `coolify_restart_application`

Restart application.

**Parameters:**
- `uuid` (string, required): Application UUID

**Returns:** Operation result

### `coolify_get_application_logs`

Get application logs.

**Parameters:**
- `uuid` (string, required): Application UUID

**Returns:** Application logs

## Environment Variables

### `coolify_list_application_envs`

List application environment variables.

**Parameters:**
- `uuid` (string, required): Application UUID

**Returns:** Array of environment variables

### `coolify_create_application_env`

Create application environment variable.

**Parameters:**
- `uuid` (string, required): Application UUID
- `key` (string, required): Environment variable key
- `value` (string, required): Environment variable value
- `is_secret` (boolean, optional): Whether the variable is secret (default: false)

**Returns:** Created environment variable object

### `coolify_bulk_update_application_envs`

Bulk update application environment variables.

**Parameters:**
- `uuid` (string, required): Application UUID
- `envs` (array, required): Array of environment variables
  - `key` (string, required): Environment variable key
  - `value` (string, required): Environment variable value
  - `is_secret` (boolean, optional): Whether the variable is secret

**Returns:** Updated environment variables

### `coolify_delete_application_env`

Delete application environment variable.

**Parameters:**
- `uuid` (string, required): Application UUID
- `env_uuid` (string, required): Environment variable UUID

**Returns:** Success message

## Database Management

### `coolify_list_databases`

List all databases.

**Parameters:**
- `page` (number, optional): Page number
- `per_page` (number, optional): Items per page

**Returns:** Paginated list of databases

### `coolify_create_database`

Create a new database (generic).

**Parameters:**
- `name` (string, required): Database name
- `server_uuid` (string, required): Server UUID
- `project_uuid` (string, required): Project UUID
- `environment_name` (string, required): Environment name
- `type` (string, required): Database type ("postgresql", "mysql", "mongodb", "redis", "mariadb", "clickhouse", "dragonfly", "keydb")

**Returns:** Created database object

### `coolify_create_postgresql_database`

Create a PostgreSQL database.

**Parameters:**
- `name` (string, required): Database name
- `server_uuid` (string, required): Server UUID
- `project_uuid` (string, required): Project UUID
- `environment_name` (string, required): Environment name
- `postgresql_user` (string, optional): PostgreSQL user
- `postgresql_password` (string, optional): PostgreSQL password
- `postgresql_db` (string, optional): PostgreSQL database name

**Returns:** Created PostgreSQL database object

### `coolify_create_mysql_database`

Create a MySQL database.

**Parameters:**
- `name` (string, required): Database name
- `server_uuid` (string, required): Server UUID
- `project_uuid` (string, required): Project UUID
- `environment_name` (string, required): Environment name
- `mysql_user` (string, optional): MySQL user
- `mysql_password` (string, optional): MySQL password
- `mysql_database` (string, optional): MySQL database name
- `mysql_root_password` (string, optional): MySQL root password

**Returns:** Created MySQL database object

### `coolify_create_mongodb_database`

Create a MongoDB database.

**Parameters:**
- `name` (string, required): Database name
- `server_uuid` (string, required): Server UUID
- `project_uuid` (string, required): Project UUID
- `environment_name` (string, required): Environment name
- `mongodb_root_username` (string, optional): MongoDB root username
- `mongodb_root_password` (string, optional): MongoDB root password
- `mongodb_database` (string, optional): MongoDB database name
- `mongodb_username` (string, optional): MongoDB username
- `mongodb_password` (string, optional): MongoDB password

**Returns:** Created MongoDB database object

### `coolify_create_redis_database`

Create a Redis database.

**Parameters:**
- `name` (string, required): Database name
- `server_uuid` (string, required): Server UUID
- `project_uuid` (string, required): Project UUID
- `environment_name` (string, required): Environment name
- `redis_password` (string, optional): Redis password

**Returns:** Created Redis database object

### `coolify_get_database`

Get database by UUID.

**Parameters:**
- `uuid` (string, required): Database UUID

**Returns:** Database object

### `coolify_update_database`

Update database.

**Parameters:**
- `uuid` (string, required): Database UUID
- `name` (string, optional): Database name
- `description` (string, optional): Database description

**Returns:** Updated database object

### `coolify_delete_database`

Delete database.

**Parameters:**
- `uuid` (string, required): Database UUID

**Returns:** Success message

### `coolify_start_database`

Start database.

**Parameters:**
- `uuid` (string, required): Database UUID

**Returns:** Operation result

### `coolify_stop_database`

Stop database.

**Parameters:**
- `uuid` (string, required): Database UUID

**Returns:** Operation result

### `coolify_restart_database`

Restart database.

**Parameters:**
- `uuid` (string, required): Database UUID

**Returns:** Operation result

## Server Management

### `coolify_list_servers`

List all servers.

**Parameters:**
- `page` (number, optional): Page number
- `per_page` (number, optional): Items per page

**Returns:** Paginated list of servers

### `coolify_create_server`

Create a new server.

**Parameters:**
- `name` (string, required): Server name
- `ip` (string, required): Server IP address
- `description` (string, optional): Server description
- `port` (number, optional): SSH port (default: 22)
- `user` (string, optional): SSH user (default: "root")
- `private_key_id` (string, optional): Private key ID

**Returns:** Created server object

### `coolify_get_server`

Get server by UUID.

**Parameters:**
- `uuid` (string, required): Server UUID

**Returns:** Server object

### `coolify_update_server`

Update server.

**Parameters:**
- `uuid` (string, required): Server UUID
- `name` (string, optional): Server name
- `description` (string, optional): Server description
- `ip` (string, optional): Server IP address
- `port` (number, optional): SSH port
- `user` (string, optional): SSH user

**Returns:** Updated server object

### `coolify_delete_server`

Delete server.

**Parameters:**
- `uuid` (string, required): Server UUID

**Returns:** Success message

### `coolify_validate_server`

Validate server connection.

**Parameters:**
- `uuid` (string, required): Server UUID

**Returns:** Validation result

### `coolify_list_server_domains`

List server domains.

**Parameters:**
- `uuid` (string, required): Server UUID

**Returns:** Array of domains

### `coolify_list_server_resources`

List server resources.

**Parameters:**
- `uuid` (string, required): Server UUID

**Returns:** Server resource information

## Service Management

### `coolify_list_services`

List all services.

**Parameters:**
- `page` (number, optional): Page number
- `per_page` (number, optional): Items per page

**Returns:** Paginated list of services

### `coolify_create_service`

Create a new service.

**Parameters:**
- `name` (string, required): Service name
- `server_uuid` (string, required): Server UUID
- `project_uuid` (string, required): Project UUID
- `environment_name` (string, required): Environment name
- `docker_compose_raw` (string, required): Docker Compose configuration
- `description` (string, optional): Service description

**Returns:** Created service object

### `coolify_get_service`

Get service by UUID.

**Parameters:**
- `uuid` (string, required): Service UUID

**Returns:** Service object

### `coolify_update_service`

Update service.

**Parameters:**
- `uuid` (string, required): Service UUID
- `name` (string, optional): Service name
- `description` (string, optional): Service description
- `docker_compose_raw` (string, optional): Docker Compose configuration

**Returns:** Updated service object

### `coolify_delete_service`

Delete service.

**Parameters:**
- `uuid` (string, required): Service UUID

**Returns:** Success message

### `coolify_start_service`

Start service.

**Parameters:**
- `uuid` (string, required): Service UUID

**Returns:** Operation result

### `coolify_stop_service`

Stop service.

**Parameters:**
- `uuid` (string, required): Service UUID

**Returns:** Operation result

### `coolify_restart_service`

Restart service.

**Parameters:**
- `uuid` (string, required): Service UUID

**Returns:** Operation result

## Deployment Management

### `coolify_list_deployments`

List all deployments.

**Parameters:**
- `page` (number, optional): Page number
- `per_page` (number, optional): Items per page

**Returns:** Paginated list of deployments

### `coolify_get_deployment`

Get deployment by UUID.

**Parameters:**
- `uuid` (string, required): Deployment UUID

**Returns:** Deployment object

### `coolify_get_application_deployments`

Get deployments for an application.

**Parameters:**
- `uuid` (string, required): Application UUID

**Returns:** Array of deployments

### `coolify_trigger_deployment`

Trigger a deployment.

**Parameters:**
- `application_uuid` (string, required): Application UUID
- `force_rebuild` (boolean, optional): Force rebuild (default: false)

**Returns:** Deployment trigger result

## Security & Keys

### `coolify_list_security_keys`

List all security keys.

**Parameters:**
- `page` (number, optional): Page number
- `per_page` (number, optional): Items per page

**Returns:** Paginated list of security keys

### `coolify_create_security_key`

Create a new security key.

**Parameters:**
- `name` (string, required): Key name
- `key` (string, required): SSH private key content
- `description` (string, optional): Key description

**Returns:** Created security key object

### `coolify_get_security_key`

Get security key by UUID.

**Parameters:**
- `uuid` (string, required): Security key UUID

**Returns:** Security key object

### `coolify_update_security_key`

Update security key.

**Parameters:**
- `uuid` (string, required): Security key UUID
- `name` (string, optional): Key name
- `description` (string, optional): Key description
- `key` (string, optional): SSH private key content

**Returns:** Updated security key object

### `coolify_delete_security_key`

Delete security key.

**Parameters:**
- `uuid` (string, required): Security key UUID

**Returns:** Success message

## Error Handling

All tools return standardized error responses:

```json
{
  "error": "Error message",
  "statusCode": 400,
  "details": "Additional error details"
}
```

Common error codes:
- `400`: Bad Request - Invalid parameters
- `401`: Unauthorized - Invalid API token
- `403`: Forbidden - Insufficient permissions
- `404`: Not Found - Resource not found
- `422`: Unprocessable Entity - Validation error
- `500`: Internal Server Error - Server error

## Rate Limiting

The Coolify API may implement rate limiting. The MCP server handles this gracefully with:
- Automatic retry with exponential backoff
- Clear error messages for rate limit exceeded
- Configurable retry attempts and delays

## Best Practices

1. **Always handle errors** - Check for error responses
2. **Use pagination** - For list operations, use page and per_page parameters
3. **Validate inputs** - Ensure required parameters are provided
4. **Handle timeouts** - API calls may take time, especially for deployments
5. **Monitor resources** - Check server resources before creating new services
6. **Use appropriate build packs** - Choose the right build pack for your application type

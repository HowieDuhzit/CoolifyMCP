Coolify API Documentation 
This comprehensive documentation covers all available endpoints in the Coolify API based on the official OpenAPI specification.

Base Information 
Base URL: https://app.coolify.io/api/v1 openapi.yaml:6-8

Authentication: Bearer Token (API Key) openapi.yaml:5574-5578

API Version: v0.1 openapi.yaml:3-4

Authentication 
All API endpoints require Bearer authentication using an API token. Get your token from Keys & Tokens / API tokens in the Coolify dashboard. openapi.yaml:5574-5578

Applications 
List Applications 
GET /applications
Description: List all applications
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:10-32
Create Application (Public Repository) 
POST /applications/public
Description: Create new application based on a public git repository
Required Parameters: project_uuid, server_uuid, environment_name/environment_uuid, git_repository, git_branch, build_pack, ports_exposes
Build Packs: nixpacks, static, dockerfile, dockercompose
Responses: 201 (created), 400 (bad request), 401 (unauthorized) openapi.yaml:33-281
Create Application (Private - Github App) 
POST /applications/private-github-app
Description: Create new application based on a private repository through a Github App
Additional Required: github_app_uuid
Responses: 201 (created), 400 (bad request), 401 (unauthorized) openapi.yaml:282-534
Create Application (Private - Deploy Key) 
POST /applications/private-deploy-key
Description: Create new application based on a private repository through a Deploy Key
Additional Required: private_key_uuid
Responses: 201 (created), 400 (bad request), 401 (unauthorized) openapi.yaml:535-787
Create Application (Dockerfile) 
POST /applications/dockerfile
Description: Create new application based on a simple Dockerfile
Required Parameters: project_uuid, server_uuid, environment_name/environment_uuid, dockerfile
Responses: 201 (created), 400 (bad request), 401 (unauthorized) openapi.yaml:788-987
Create Application (Docker Image) 
POST /applications/dockerimage
Description: Create new application based on a prebuilt docker image
Required Parameters: project_uuid, server_uuid, environment_name/environment_uuid, docker_registry_image_name, ports_exposes
Responses: 201 (created), 400 (bad request), 401 (unauthorized) openapi.yaml:988-1178
Create Application (Docker Compose) 
POST /applications/dockercompose
Description: Create new application based on a docker-compose file
Required Parameters: project_uuid, server_uuid, environment_name/environment_uuid, docker_compose_raw
Responses: 201 (created), 400 (bad request), 401 (unauthorized) openapi.yaml:1179-1249
Get Application by UUID 
GET /applications/{uuid}
Description: Get application by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:1250-1281
Update Application 
PATCH /applications/{uuid}
Description: Update application by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:1347-1581
Delete Application 
DELETE /applications/{uuid}
Description: Delete application by UUID
Parameters: uuid (required), delete_configurations (optional), delete_volumes (optional), docker_cleanup (optional), delete_connected_networks (optional)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:1282-1346
Application Management 
GET /applications/{uuid}/start - Start application
GET /applications/{uuid}/stop - Stop application
GET /applications/{uuid}/restart - Restart application
Parameters: uuid (required), force (optional for start), instant_deploy (optional for start) openapi.yaml:1875-1992
Application Logs 
GET /applications/{uuid}/logs
Description: Get application logs by UUID
Parameters: uuid (required), lines (optional, default 100)
Responses: 200 (success with logs), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:1582-1624
Application Environment Variables 
GET /applications/{uuid}/envs - List all environment variables
POST /applications/{uuid}/envs - Create environment variable
PATCH /applications/{uuid}/envs - Update environment variable
PATCH /applications/{uuid}/envs/bulk - Update multiple environment variables
DELETE /applications/{uuid}/envs/{env_uuid} - Delete environment variable openapi.yaml:1625-1874
Databases 
List Databases 
GET /databases
Description: List all databases
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:1993-2014
Get Database by UUID 
GET /databases/{uuid}
Description: Get database by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:2015-2047
Update Database 
PATCH /databases/{uuid}
Description: Update database by UUID
Parameters: uuid (required)
Supported Database Configs: PostgreSQL, ClickHouse, DragonFly, Redis, KeyDB, MariaDB, MongoDB, MySQL
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:2113-2264
Delete Database 
DELETE /databases/{uuid}
Description: Delete database by UUID
Parameters: uuid (required), delete_configurations (optional), delete_volumes (optional), docker_cleanup (optional), delete_connected_networks (optional)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:2048-2112
Create Database Endpoints 
POST /databases/postgresql - Create PostgreSQL database
POST /databases/clickhouse - Create ClickHouse database
POST /databases/dragonfly - Create DragonFly database
POST /databases/redis - Create Redis database
POST /databases/keydb - Create KeyDB database
POST /databases/mariadb - Create MariaDB database
POST /databases/mysql - Create MySQL database
POST /databases/mongodb - Create MongoDB database
Required Parameters: server_uuid, project_uuid, environment_name/environment_uuid openapi.yaml:2265-3011
Database Management 
GET /databases/{uuid}/start - Start database
GET /databases/{uuid}/stop - Stop database
GET /databases/{uuid}/restart - Restart database
Parameters: uuid (required) openapi.yaml:3012-3113
Deployments 
List Deployments 
GET /deployments
Description: List currently running deployments
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:3114-3136
Get Deployment by UUID 
GET /deployments/{uuid}
Description: Get deployment by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3137-3167
Deploy by Tag or UUID 
GET/POST /deploy
Description: Deploy by tag or uuid
Parameters: tag (optional), uuid (optional), force (optional), pr (optional)
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:3168-3215
List Application Deployments 
GET /deployments/applications/{uuid}
Description: List application deployments by using the app uuid
Parameters: uuid (required), skip (optional), take (optional)
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:3216-3265
Projects 
List Projects 
GET /projects
Description: List projects
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:3361-3383
Create Project 
POST /projects
Description: Create Project
Required Parameters: name, description
Responses: 201 (created), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3384-3421
Get Project by UUID 
GET /projects/{uuid}
Description: Get project by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3422-3452
Update Project 
PATCH /projects/{uuid}
Description: Update Project
Parameters: uuid (required), name, description
Responses: 201 (updated), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3486-3534
Delete Project 
DELETE /projects/{uuid}
Description: Delete project by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3453-3485
Get Environment 
GET /projects/{uuid}/{environment_name_or_uuid}
Description: Get environment by name or UUID
Parameters: uuid (required), environment_name_or_uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3535-3572
Resources 
List Resources 
GET /resources
Description: Get all resources
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:3573-3594
Private Keys 
List Private Keys 
GET /security/keys
Description: List all private keys
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:3595-3617
Create Private Key 
POST /security/keys
Description: Create a new private key
Required Parameters: private_key
Optional Parameters: name, description
Responses: 201 (created), 400 (bad request), 401 (unauthorized) openapi.yaml:3618-3655
Update Private Key 
PATCH /security/keys
Description: Update a private key
Required Parameters: private_key
Optional Parameters: name, description
Responses: 201 (updated), 400 (bad request), 401 (unauthorized) openapi.yaml:3656-3693
Get Private Key by UUID 
GET /security/keys/{uuid}
Description: Get key by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3694-3724
Delete Private Key 
DELETE /security/keys/{uuid}
Description: Delete a private key
Parameters: uuid (required)
Responses: 200 (deleted), 400 (bad request), 401 (unauthorized), 404 (not found), 422 (in use) openapi.yaml:3725-3764
Servers 
List Servers 
GET /servers
Description: List all servers
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:3765-3787
Create Server 
POST /servers
Description: Create Server
Required Parameters: name, description, ip, port, user, private_key_uuid
Optional Parameters: is_build_server, instant_validate, proxy_type
Proxy Types: traefik, caddy, none
Responses: 201 (created), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3788-3856
Get Server by UUID 
GET /servers/{uuid}
Description: Get server by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3857-3887
Update Server 
PATCH /servers/{uuid}
Description: Update Server
Parameters: uuid (required), name, description, ip, port, user, private_key_uuid, is_build_server, instant_validate, proxy_type
Responses: 201 (updated), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3921-3986
Delete Server 
DELETE /servers/{uuid}
Description: Delete server by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:3888-3920
Server Resources 
GET /servers/{uuid}/resources
Description: Get resources by server
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:3987-4018
Server Domains 
GET /servers/{uuid}/domains
Description: Get domains by server
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:4019-4050
Validate Server 
GET /servers/{uuid}/validate
Description: Validate server by UUID
Parameters: uuid (required)
Responses: 201 (validation started), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:4051-4083
Services 
List Services 
GET /services
Description: List all services
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:4084-4106
Create Service 
POST /services
Description: Create a one-click / custom service
Required Parameters: server_uuid, project_uuid, environment_name/environment_uuid
Optional Parameters: type, name, description, destination_uuid, instant_deploy, docker_compose_raw
Service Types: Many one-click services available (activepieces, appsmith, appwrite, authentik, etc.)
Responses: 201 (created), 400 (bad request), 401 (unauthorized) openapi.yaml:4107-4175
Get Service by UUID 
GET /services/{uuid}
Description: Get service by UUID
Parameters: uuid (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:4176-4206
Update Service 
PATCH /services/{uuid}
Description: Update service by UUID
Parameters: uuid (required)
Required Parameters: server_uuid, project_uuid, environment_name/environment_uuid, docker_compose_raw
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:4271-4349
Delete Service 
DELETE /services/{uuid}
Description: Delete service by UUID
Parameters: uuid (required), delete_configurations (optional), delete_volumes (optional), docker_cleanup (optional), delete_connected_networks (optional)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:4207-4270
Service Environment Variables 
GET /services/{uuid}/envs - List all environment variables
POST /services/{uuid}/envs - Create environment variable
PATCH /services/{uuid}/envs - Update environment variable
PATCH /services/{uuid}/envs/bulk - Update multiple environment variables
DELETE /services/{uuid}/envs/{env_uuid} - Delete environment variable openapi.yaml:4350-4599
Service Management 
GET /services/{uuid}/start - Start service
GET /services/{uuid}/stop - Stop service
GET /services/{uuid}/restart - Restart service (with optional latest parameter)
Parameters: uuid (required), latest (optional for restart) openapi.yaml:4600-4708
Teams 
List Teams 
GET /teams
Description: Get all teams
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:4709-4731
Get Team by ID 
GET /teams/{id}
Description: Get team by TeamId
Parameters: id (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:4732-4762
Get Team Members 
GET /teams/{id}/members
Description: Get members by TeamId
Parameters: id (required)
Responses: 200 (success), 400 (bad request), 401 (unauthorized), 404 (not found) openapi.yaml:4763-4795
Get Current Team 
GET /teams/current
Description: Get currently authenticated team
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:4796-4816
Get Current Team Members 
GET /teams/current/members
Description: Get currently authenticated team members
Responses: 200 (success), 400 (bad request), 401 (unauthorized) openapi.yaml:4817-4839
System Endpoints 
Get Version 
GET /version
Description: Get Coolify version
Responses: 200 (success with version), 400 (bad request), 401 (unauthorized) openapi.yaml:3266-3285
Health Check 
GET /health
Description: Healthcheck endpoint
Responses: 200 (OK) openapi.yaml:3344-3360
Enable API 
GET /enable
Description: Enable API (only with root permissions)
Responses: 200 (success), 403 (forbidden), 400 (bad request), 401 (unauthorized) openapi.yaml:3286-3314
Disable API 
GET /disable
Description: Disable API (only with root permissions)
Responses: 200 (success), 403 (forbidden), 400 (bad request), 401 (unauthorized) openapi.yaml:3315-3343
Response Codes 
200: Success
201: Created
400: Invalid token/Bad request
401: Unauthenticated
403: Forbidden (for admin-only endpoints)
404: Resource not found
422: Unprocessable entity (e.g., resource in use) openapi.yaml:5543-5573
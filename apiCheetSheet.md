Coolify API Endpoints Cheat Sheet 
Based on the implementation protocol, here's a concise cheat sheet of Coolify's API endpoints:

Base Configuration 
Base URL: https://app.coolify.io/api/v1 (or your self-hosted instance)
Authentication: Bearer Token (Sanctum)
API Version: v1 openapi.yaml:6-8
Core Endpoint Categories 
1. Health & System 
Method	Endpoint	Description	Auth Required
GET	/health	System health check	No
GET	/v1/health	Versioned health check	No
GET	/v1/version	API version info	Yes (read)
2. Team Management 
Method	Endpoint	Description	Required Params
GET	/v1/teams	List all teams	-
GET	/v1/teams/current	Get current team	-
GET	/v1/teams/current/members	List current team members	-
GET	/v1/teams/{id}	Get team by ID	id (path)
GET	/v1/teams/{id}/members	List team members by ID	id (path)
3. Project Management 
Method	Endpoint	Description	Required Params
GET	/v1/projects	List projects	-
POST	/v1/projects	Create project	Project details
GET	/v1/projects/{uuid}	Get project by UUID	uuid (path)
PATCH	/v1/projects/{uuid}	Update project	uuid (path)
DELETE	/v1/projects/{uuid}	Delete project	uuid (path)
GET	/v1/projects/{uuid}/{environment_name_or_uuid}	Environment details	uuid, environment_name_or_uuid (path)
4. Application Management 
Method	Endpoint	Description	Required Params
GET	/v1/applications	List applications	-
POST	/v1/applications/public	Create public app	project_uuid, server_uuid, environment_name, git_repository, git_branch, build_pack, ports_exposes
POST	/v1/applications/private-github-app	Create private GitHub app	project_uuid, server_uuid, github_app_uuid, git_repository, git_branch, build_pack, ports_exposes
POST	/v1/applications/dockerfile	Create Dockerfile app	Application details
POST	/v1/applications/dockerimage	Create Docker image app	Application details
GET	/v1/applications/{uuid}	Get application	uuid (path)
PATCH	/v1/applications/{uuid}	Update application	uuid (path)
DELETE	/v1/applications/{uuid}	Delete application	uuid (path)
5. Application Actions & Environment 
Method	Endpoint	Description	Required Params
GET/POST	/v1/applications/{uuid}/start	Start application	uuid (path)
GET/POST	/v1/applications/{uuid}/restart	Restart application	uuid (path)
GET/POST	/v1/applications/{uuid}/stop	Stop application	uuid (path)
GET	/v1/applications/{uuid}/envs	List environment variables	uuid (path)
POST	/v1/applications/{uuid}/envs	Create environment variable	uuid (path), env details
PATCH	/v1/applications/{uuid}/envs/bulk	Bulk update env vars	uuid (path), env array
DELETE	/v1/applications/{uuid}/envs/{env_uuid}	Delete env variable	uuid, env_uuid (path)
GET	/v1/applications/{uuid}/logs	Get application logs	uuid (path)
6. Database Management 
Method	Endpoint	Description	Required Params
GET	/v1/databases	List databases	-
POST	/v1/databases/postgresql	Create PostgreSQL	Database config
POST	/v1/databases/mysql	Create MySQL	Database config
POST	/v1/databases/mongodb	Create MongoDB	Database config
POST	/v1/databases/redis	Create Redis	Database config
GET	/v1/databases/{uuid}	Get database	uuid (path)
PATCH	/v1/databases/{uuid}	Update database	uuid (path)
DELETE	/v1/databases/{uuid}	Delete database	uuid (path)
GET/POST	/v1/databases/{uuid}/start	Start database	uuid (path)
GET/POST	/v1/databases/{uuid}/restart	Restart database	uuid (path)
GET/POST	/v1/databases/{uuid}/stop	Stop database	uuid (path)
7. Server Management 
Method	Endpoint	Description	Required Params
GET	/v1/servers	List servers	-
POST	/v1/servers	Create server	Server details
GET	/v1/servers/{uuid}	Get server	uuid (path)
PATCH	/v1/servers/{uuid}	Update server	uuid (path)
DELETE	/v1/servers/{uuid}	Delete server	uuid (path)
GET	/v1/servers/{uuid}/validate	Validate server	uuid (path)
GET	/v1/servers/{uuid}/domains	List server domains	uuid (path)
GET	/v1/servers/{uuid}/resources	List server resources	uuid (path)
8. Service Management 
Method	Endpoint	Description	Required Params
GET	/v1/services	List services	-
POST	/v1/services	Create service	Service details
GET	/v1/services/{uuid}	Get service	uuid (path)
PATCH	/v1/services/{uuid}	Update service	uuid (path)
DELETE	/v1/services/{uuid}	Delete service	uuid (path)
GET/POST	/v1/services/{uuid}/start	Start service	uuid (path)
GET/POST	/v1/services/{uuid}/restart	Restart service	uuid (path)
GET/POST	/v1/services/{uuid}/stop	Stop service	uuid (path)
9. Deployment 
Method	Endpoint	Description	Required Params
GET/POST	/v1/deploy	Trigger deployment	Deployment details
GET	/v1/deployments	List deployments	-
GET	/v1/deployments/{uuid}	Get deployment	uuid (path)
GET	/v1/deployments/applications/{uuid}	Get app deployments	uuid (path)
10. Security & Keys 
Method	Endpoint	Description	Required Params
GET	/v1/security/keys	List security keys	-
POST	/v1/security/keys	Create security key	Key details
GET	/v1/security/keys/{uuid}	Get key by UUID	uuid (path)
PATCH	/v1/security/keys/{uuid}	Update key	uuid (path)
DELETE	/v1/security/keys/{uuid}	Delete key	uuid (path)
Permission Levels 
read: Read-only access to resources
write: Read and write access to resources
deploy: Deployment capabilities api.php:27-35
Common Required Parameters for Application Creation 
project_uuid: Target project identifier
server_uuid: Target server identifier
environment_name or environment_uuid: Environment specification
git_repository: Repository URL
git_branch: Source branch
build_pack: Build type (nixpacks, static, dockerfile, dockercompose)
ports_exposes: Port configuration openapi.json:64-73
Notes 
All authenticated endpoints require Bearer token authentication with appropriate permissions
UUIDs are used as primary identifiers for resources
The API supports both GET and POST methods for action endpoints (start/stop/restart)
Sensitive data is automatically filtered based on user permissions
The API includes comprehensive OpenAPI documentation for detailed parameter specifications
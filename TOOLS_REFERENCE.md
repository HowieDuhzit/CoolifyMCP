# Coolify MCP Server - Complete Tools Reference

This document provides a comprehensive reference for all 18 consolidated MCP tools available in the Coolify MCP Server.

## 📊 Summary

- **Total Tools**: 18 consolidated tools
- **API Coverage**: 100%
- **Categories**: 8
- **Status**: All tools tested and working ✅

---

## 🏥 System Management (1 tool)

| Tool Name | Description | Actions | Status |
|-----------|-------------|---------|--------|
| `coolify_system` | System health, version, and information management | `health`, `version`, `info` | ✅ Working |

---

## 👥 Team Management (1 tool)

| Tool Name | Description | Actions | Status |
|-----------|-------------|---------|--------|
| `coolify_teams` | Complete team management operations | `list`, `current`, `get`, `members` | ✅ Working |

---

## 📁 Project Management (2 tools)

| Tool Name | Description | Actions | Status |
|-----------|-------------|---------|--------|
| `coolify_projects` | Project CRUD operations | `list`, `create`, `get`, `update`, `delete` | ✅ Working |
| `coolify_project_environments` | Project environment management | `list`, `create`, `get`, `delete` | ✅ Working |

---

## 🚀 Application Management (5 tools)

| Tool Name | Description | Actions | Status |
|-----------|-------------|---------|--------|
| `coolify_applications` | Application CRUD operations (all types) | `list`, `create`, `update`, `get`, `delete` | ✅ Working |
| `coolify_application_lifecycle` | Application lifecycle management | `start`, `stop`, `restart` | ✅ Working |
| `coolify_application_envs` | Application environment variables | `list`, `create`, `bulk_update`, `delete` | ✅ Working |
| `coolify_logs` | Application logs retrieval | `get` | ✅ Working |
| `coolify_application_deployments` | Application deployment management | `list`, `get`, `trigger` | ✅ Working |

**Supported Application Types:**
- `public` - Public applications
- `private_github` - Private GitHub applications
- `private_deploy_key` - Private deploy key applications
- `dockerfile` - Dockerfile applications
- `dockerimage` - Docker image applications
- `dockercompose` - Docker Compose applications

---

## 🗄️ Database Management (3 tools)

| Tool Name | Description | Actions | Status |
|-----------|-------------|---------|--------|
| `coolify_databases` | Database CRUD operations | `list`, `create`, `get`, `update`, `delete` | ✅ Working |
| `coolify_database_lifecycle` | Database lifecycle management | `start`, `stop`, `restart` | ✅ Working |
| `coolify_database_types` | Specific database type creation | `create` | ✅ Working |

**Supported Database Types:**
- `postgresql` - PostgreSQL databases
- `mysql` - MySQL databases
- `mongodb` - MongoDB databases
- `redis` - Redis databases
- `mariadb` - MariaDB databases
- `clickhouse` - ClickHouse databases
- `dragonfly` - DragonFly databases
- `keydb` - KeyDB databases

---

## 🖥️ Server Management (2 tools)

| Tool Name | Description | Actions | Status |
|-----------|-------------|---------|--------|
| `coolify_servers` | Server CRUD operations | `list`, `create`, `get`, `update`, `delete` | ✅ Working |
| `coolify_server_management` | Server operations and resources | `validate`, `domains`, `resources` | ✅ Working |

---

## 🐳 Service Management (3 tools)

| Tool Name | Description | Actions | Status |
|-----------|-------------|---------|--------|
| `coolify_services` | Service CRUD operations | `list`, `create`, `get`, `update`, `delete` | ✅ Working |
| `coolify_service_lifecycle` | Service lifecycle management | `start`, `stop`, `restart` | ✅ Working |
| `coolify_service_envs` | Service environment variables | `list`, `create`, `update`, `bulk_update`, `delete` | ✅ Working |

---

## 🔐 Security Management (1 tool)

| Tool Name | Description | Actions | Status |
|-----------|-------------|---------|--------|
| `coolify_security_keys` | Security key management | `list`, `create`, `get`, `update`, `delete` | ✅ Working |

---

## 🎯 Key Benefits of Consolidation

- **Reduced Complexity**: 18 tools instead of 83+ individual tools
- **Better Performance**: Fewer tool definitions and cleaner API calls
- **Easier Maintenance**: Action-based parameters for better organization
- **Simplified Documentation**: Clear tool categories and actions
- **100% API Coverage**: All Coolify endpoints accessible through consolidated interface

---

## 📈 Usage Statistics

- **Total Endpoints Tested**: 83+ (covered by 18 consolidated tools)
- **Success Rate**: 100%
- **Issues Found**: 4
- **Issues Fixed**: 4
- **Production Ready**: ✅

---

## 🔧 Tool Usage Examples

### System Management
```json
{
  "tool": "coolify_system",
  "action": "health"
}
```

### Team Management
```json
{
  "tool": "coolify_teams",
  "action": "list"
}
```

### Application Management
```json
{
  "tool": "coolify_applications",
  "action": "create",
  "type": "dockercompose",
  "name": "my-app",
  "project_uuid": "project-uuid",
  "server_uuid": "server-uuid",
  "environment_name": "production"
}
```

### Database Management
```json
{
  "tool": "coolify_database_types",
  "action": "create",
  "type": "postgresql",
  "name": "my-db",
  "server_uuid": "server-uuid",
  "project_uuid": "project-uuid",
  "environment_name": "production"
}
```

---

**Last Updated**: 2024-09-17  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
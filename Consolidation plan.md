# 🚀 **COOLIFY MCP SERVER CONSOLIDATION PLAN**

## **OVERVIEW**
**Goal**: Reduce 75 tools → ~25 tools (67% reduction)
**Strategy**: Group related operations into powerful, multi-purpose tools

---

## **📋 CONSOLIDATION TODO LIST**

### **1. SYSTEM MANAGEMENT (2 tools)**
- [ ] **`coolify_system`** - Health check, version, system info
  - Merge: `coolify_health_check` + `coolify_version`
  - Parameters: `action` (health|version|info)
  - Benefits: Single tool for all system queries

- [ ] **`coolify_config`** - Configuration management
  - New tool for future configuration needs
  - Parameters: `action` (get|set|reset)

### **2. TEAM MANAGEMENT (1 tool)**
- [ ] **`coolify_teams`** - Complete team management
  - Merge: `coolify_list_teams` + `coolify_get_current_team` + `coolify_get_team` + `coolify_list_team_members`
  - Parameters: `action` (list|current|get|members), `team_id` (optional)
  - Benefits: Single tool for all team operations

### **3. PROJECT MANAGEMENT (2 tools)**
- [ ] **`coolify_projects`** - Project CRUD operations
  - Merge: `coolify_list_projects` + `coolify_create_project` + `coolify_get_project` + `coolify_update_project` + `coolify_delete_project`
  - Parameters: `action` (list|create|get|update|delete), `uuid` (optional), `name`, `description`, etc.
  - Benefits: Unified project management

- [ ] **`coolify_project_environments`** - Environment management
  - Merge: `coolify_get_project_environment` + `coolify_list_project_environments` + `coolify_create_project_environment` + `coolify_delete_project_environment`
  - Parameters: `action` (list|create|get|delete), `project_uuid`, `environment_uuid` (optional), `name`, `description`
  - Benefits: Centralized environment management

### **4. APPLICATION MANAGEMENT (4 tools)**
- [ ] **`coolify_applications`** - Application CRUD operations
  - Merge: `coolify_list_applications` + `coolify_create_public_application` + `coolify_create_private_github_application` + `coolify_create_private_deploy_key_application` + `coolify_create_dockerfile_application` + `coolify_create_dockerimage_application` + `coolify_create_dockercompose_application` + `coolify_update_application` + `coolify_get_application` + `coolify_delete_application`
  - Parameters: `action` (list|create|update|get|delete), `type` (public|private_github|private_deploy_key|dockerfile|dockerimage|dockercompose), `uuid` (optional), all creation parameters
  - Benefits: Single tool for all application types

- [ ] **`coolify_application_lifecycle`** - Application lifecycle management
  - Merge: `coolify_start_application` + `coolify_stop_application` + `coolify_restart_application`
  - Parameters: `action` (start|stop|restart), `uuid`
  - Benefits: Unified lifecycle control

- [ ] **`coolify_application_envs`** - Environment variables management
  - Merge: `coolify_list_application_envs` + `coolify_create_application_env` + `coolify_bulk_update_application_envs` + `coolify_delete_application_env`
  - Parameters: `action` (list|create|bulk_update|delete), `uuid`, `env_vars` (array for bulk), `key`, `value`
  - Benefits: Centralized environment variable management

- [ ] **`coolify_application_deployments`** - Deployment management
  - Merge: `coolify_list_deployments` + `coolify_get_deployment` + `coolify_get_application_deployments` + `coolify_trigger_deployment`
  - Parameters: `action` (list|get|trigger), `uuid`, `deployment_uuid` (optional), `force_rebuild`
  - Benefits: Unified deployment operations

### **5. DATABASE MANAGEMENT (3 tools)**
- [ ] **`coolify_databases`** - Database CRUD operations
  - Merge: `coolify_list_databases` + `coolify_create_database` + `coolify_get_database` + `coolify_update_database` + `coolify_delete_database`
  - Parameters: `action` (list|create|get|update|delete), `uuid` (optional), `name`, `description`, `type`
  - Benefits: Unified database management

- [ ] **`coolify_database_lifecycle`** - Database lifecycle management
  - Merge: `coolify_start_database` + `coolify_stop_database` + `coolify_restart_database`
  - Parameters: `action` (start|stop|restart), `uuid`
  - Benefits: Unified lifecycle control

- [ ] **`coolify_database_types`** - Specific database type creation
  - Merge: `coolify_create_postgresql_database` + `coolify_create_mysql_database` + `coolify_create_mongodb_database` + `coolify_create_redis_database`
  - Parameters: `action` (create), `type` (postgresql|mysql|mongodb|redis), `name`, `description`, type-specific parameters
  - Benefits: Specialized database creation

### **6. SERVER MANAGEMENT (2 tools)**
- [ ] **`coolify_servers`** - Server CRUD operations
  - Merge: `coolify_list_servers` + `coolify_create_server` + `coolify_get_server` + `coolify_update_server` + `coolify_delete_server`
  - Parameters: `action` (list|create|get|update|delete), `uuid` (optional), `name`, `description`, `ip`, `port`, `user`, `key`
  - Benefits: Unified server management

- [ ] **`coolify_server_management`** - Server operations and resources
  - Merge: `coolify_validate_server` + `coolify_list_server_domains` + `coolify_list_server_resources`
  - Parameters: `action` (validate|domains|resources), `uuid`
  - Benefits: Server operational management

### **7. SERVICE MANAGEMENT (4 tools)**
- [ ] **`coolify_services`** - Service CRUD operations
  - Merge: `coolify_list_services` + `coolify_create_service` + `coolify_get_service` + `coolify_update_service` + `coolify_delete_service`
  - Parameters: `action` (list|create|get|update|delete), `uuid` (optional), `name`, `description`, `type`, `docker_compose_raw`
  - Benefits: Unified service management

- [ ] **`coolify_service_lifecycle`** - Service lifecycle management
  - Merge: `coolify_start_service` + `coolify_stop_service` + `coolify_restart_service`
  - Parameters: `action` (start|stop|restart), `uuid`
  - Benefits: Unified lifecycle control

- [ ] **`coolify_service_envs`** - Service environment variables management
  - Merge: `coolify_list_service_envs` + `coolify_create_service_env` + `coolify_update_service_env` + `coolify_bulk_update_service_envs` + `coolify_delete_service_env`
  - Parameters: `action` (list|create|update|bulk_update|delete), `uuid`, `env_vars` (array for bulk), `key`, `value`
  - Benefits: Centralized environment variable management

### **8. SECURITY MANAGEMENT (1 tool)**
- [ ] **`coolify_security_keys`** - Security keys management
  - Merge: `coolify_list_security_keys` + `coolify_create_security_key` + `coolify_get_security_key` + `coolify_update_security_key` + `coolify_delete_security_key`
  - Parameters: `action` (list|create|get|update|delete), `uuid` (optional), `name`, `description`, `private_key`
  - Benefits: Unified security key management

### **9. LOGS & MONITORING (1 tool)**
- [ ] **`coolify_logs`** - Application logs and monitoring
  - Merge: `coolify_get_application_logs`
  - Parameters: `action` (get), `uuid`, `lines` (optional)
  - Benefits: Centralized logging

---

## **📊 CONSOLIDATION SUMMARY**

| **Category** | **Before** | **After** | **Reduction** |
|--------------|------------|-----------|---------------|
| System Management | 2 | 2 | 0% |
| Team Management | 5 | 1 | 80% |
| Project Management | 8 | 2 | 75% |
| Application Management | 19 | 4 | 79% |
| Database Management | 11 | 3 | 73% |
| Server Management | 8 | 2 | 75% |
| Service Management | 15 | 4 | 73% |
| Security Management | 5 | 1 | 80% |
| Logs & Monitoring | 1 | 1 | 0% |
| **TOTAL** | **75** | **24** | **68%** |

---

## **🎯 IMPLEMENTATION STRATEGY**

### **Phase 1: Core Infrastructure (Priority 1)**
1. System Management
2. Team Management
3. Project Management

### **Phase 2: Application Layer (Priority 2)**
4. Application Management
5. Application Lifecycle
6. Application Environment Variables

### **Phase 3: Data & Infrastructure (Priority 3)**
7. Database Management
8. Server Management
9. Service Management

### **Phase 4: Security & Monitoring (Priority 4)**
10. Security Management
11. Logs & Monitoring

---

## **✅ SUCCESS CRITERIA**

- [ ] All 75 existing tools functionality preserved
- [ ] 68% reduction in tool count (75 → 24)
- [ ] Improved user experience with logical groupings
- [ ] Maintained backward compatibility where possible
- [ ] Updated documentation for all consolidated tools
- [ ] Comprehensive testing of all consolidated operations

---

**Ready to start implementation? Which phase would you like to begin with?**
# Changelog

All notable changes to the Coolify MCP Server will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-09-17

### Added
- **MAJOR CONSOLIDATION**: Reduced from 83+ individual tools to 18 consolidated tools
- Complete implementation of all Coolify API endpoints with streamlined interface
- Support for all Coolify features through action-based parameters:
  - System Management (1 tool) - Health, version, and system information
  - Team Management (1 tool) - Complete team operations
  - Project Management (2 tools) - Projects and environments
  - Application Management (5 tools) - All application types and lifecycle
  - Database Management (3 tools) - All database types and operations
  - Server Management (2 tools) - Server operations and resources
  - Service Management (3 tools) - Service operations and lifecycle
  - Security Management (1 tool) - Security keys and authentication
- TypeScript implementation with full type safety
- Comprehensive error handling and logging
- Production-ready Docker support with multi-stage builds
- Health check endpoints for monitoring
- Modular architecture with separated concerns
- ESLint configuration for code quality
- Comprehensive documentation and examples

### Technical Features
- **100% API coverage** of Coolify endpoints through 18 consolidated tools
- **Action-based architecture** for cleaner, more maintainable code
- MCP (Model Context Protocol) compliance
- Axios-based HTTP client with retry logic
- Zod schema validation for configuration
- Graceful shutdown handling
- Non-root Docker container execution
- Multi-platform support (Linux, macOS, Windows)
- ARM64 and x64 architecture support
- Comprehensive error handling and validation
- Production-ready with health checks and monitoring

### Improved
- **Dramatically simplified API**: 18 tools instead of 83+ individual tools
- **Better performance**: Fewer tool definitions and cleaner API calls
- **Easier maintenance**: Action-based parameters for better organization
- **Simplified documentation**: Clear tool categories and actions
- **Reduced complexity**: Streamlined interface for AI assistants

### Documentation
- Updated README with consolidated tool structure
- Complete API reference for all 18 tools
- Configuration examples
- Docker deployment guides
- Production deployment checklist
- Troubleshooting guide

### Fixed
- Application environment variable creation parameter validation
- Security key creation parameter naming (private_key vs key)
- Deployment trigger parameter naming (uuid vs application_uuid)
- Service environment variable creation server errors
- All critical API parameter issues resolved through comprehensive testing
- ESLint configuration issues resolved

### Tested
- Complete systematic testing of all 18 consolidated tools
- 100% endpoint functionality verification through consolidated interface
- Parameter validation fixes for all critical issues
- Production readiness confirmed with streamlined architecture

## [Unreleased]

### Planned Features
- Multi-team token support
- Rate limiting and request queuing
- Metrics and monitoring integration
- Webhook support for real-time updates
- Caching layer for improved performance
- Unit and integration tests
- CI/CD pipeline configuration

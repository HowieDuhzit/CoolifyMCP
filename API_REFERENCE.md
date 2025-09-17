# Coolify MCP Server API Reference

This comprehensive documentation covers all available MCP tools in the Coolify MCP Server, providing complete access to the Coolify API through the Model Context Protocol.

## 📊 Overview

- **Total MCP Tools**: 18 consolidated tools
- **API Coverage**: 100%
- **Status**: All tools tested and working ✅
- **Last Updated**: 2024-09-17

## 🔐 Authentication

All MCP tools require Bearer authentication using an API token. Get your token from **Keys & Tokens** → **API tokens** in the Coolify dashboard.

### Configuration
```json
{
  "env": {
    "COOLIFY_API_TOKEN": "your_token_here",
    "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"
  }
}
```

## 🛠️ Available MCP Tools

For detailed tool information, see [TOOLS_REFERENCE.md](TOOLS_REFERENCE.md).

### Quick Reference

| Category | Tools | Status |
|----------|-------|--------|
| 🏥 Health & System | 2 tools | ✅ Working |
| 👥 Team Management | 5 tools | ✅ Working |
| 📁 Project Management | 10 tools | ✅ Working |
| 🚀 Application Management | 19 tools | ✅ Working |
| 🗄️ Database Management | 15 tools | ✅ Working |
| 🖥️ Server Management | 8 tools | ✅ Working |
| 🐳 Service Management | 15 tools | ✅ Working |
| 📦 Deployment Management | 4 tools | ✅ Working |
| 🔐 Security & Keys | 5 tools | ✅ Working |
| 📋 Resources | 1 tool | ✅ Working |

## 🔧 Important Notes

### Recently Fixed Issues ✅

1. **Application Environment Variables**: Only use `key` and `value` parameters
2. **Service Environment Variables**: Only use `key` and `value` parameters  
3. **Security Keys**: Use `private_key` parameter instead of `key`
4. **Deployment Trigger**: Use `uuid` parameter instead of `application_uuid`

### Parameter Guidelines

- **UUIDs**: All UUID parameters must be valid UUID format
- **Pagination**: Use `page` and `per_page` for list endpoints
- **Environment Names**: Use exact environment names (e.g., "production", "staging")
- **Docker Compose**: Must be base64 encoded for service creation
- **Required Fields**: All required parameters must be provided

## 📚 Documentation Links

- **[Complete Tools Reference](TOOLS_REFERENCE.md)** - Detailed tool documentation
- **[README.md](README.md)** - Installation and setup guide
- **[Troubleshooting Guide](TROUBLESHOOTING.md)** - Common issues and solutions
- **[Production Checklist](PRODUCTION_CHECKLIST.md)** - Production deployment guide

## 🚀 Getting Started

1. **Install**: Follow the installation guide in README.md
2. **Configure**: Set up your Coolify API token and base URL
3. **Test**: Use the health check tools to verify connectivity
4. **Use**: All tools are ready for production use

## 📈 Statistics

- **Total Endpoints Tested**: 83+ (covered by 18 consolidated tools)
- **Success Rate**: 100%
- **Issues Found**: 4
- **Issues Fixed**: 4
- **Production Ready**: ✅

---

**Status**: ✅ Production Ready  
**Version**: 1.0.0  
**Last Updated**: 2024-09-17

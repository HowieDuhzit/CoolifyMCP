# 🚀 CoolifyMCP Deployment Guide

## Prerequisites

- Coolify server running and accessible
- Coolify API token
- Domain configured for your Coolify server
- Docker image published to `ghcr.io/howieduhzit/coolify-mcp-server:latest` (or update the image reference in docker-compose.yaml)

## Building and Publishing the Docker Image

Before deploying, you need to build and publish the Docker image:

1. **Build the image:**
   ```bash
   docker build -t ghcr.io/howieduhzit/coolify-mcp-server:latest .
   ```

2. **Tag for GitHub Container Registry:**
   ```bash
   docker tag ghcr.io/howieduhzit/coolify-mcp-server:latest ghcr.io/howieduhzit/coolify-mcp-server:latest
   ```

3. **Login to GitHub Container Registry:**
   ```bash
   echo $GITHUB_TOKEN | docker login ghcr.io -u howieduhzit --password-stdin
   ```

4. **Push the image:**
   ```bash
   docker push ghcr.io/howieduhzit/coolify-mcp-server:latest
   ```

## Deployment Methods

### Method 1: Docker Image (Recommended)

1. **In Coolify dashboard, create new application**
2. **Choose "Docker Image" as the source**
3. **Enter image name:** `ghcr.io/howieduhzit/coolify-mcp-server:latest`
4. **Choose "Docker Compose" as the build pack**
5. **Upload the `docker-compose.yaml` file**
6. **Configure environment variables:**
   - `COOLIFY_API_TOKEN`: Your Coolify API token
   - `COOLIFY_BASE_URL`: Your Coolify instance URL (e.g., `https://app.coolify.io/api/v1`)
   - `LOG_LEVEL`: `info` (optional)
7. **Set the domain** (e.g., `mcp.yourdomain.com`)
8. **Deploy the application**

### Method 2: Git Repository (Alternative)

1. **Push this code to a Git repository** (GitHub, GitLab, etc.)
2. **In Coolify dashboard, create new application**
3. **Choose "Git Repository" as the source**
4. **Connect your repository**
5. **Choose "Docker Compose" as the build pack**
6. **Coolify will automatically detect the `docker-compose.yaml` file**
7. **Configure environment variables:**
   - `COOLIFY_API_TOKEN`: Your Coolify API token
   - `COOLIFY_BASE_URL`: Your Coolify instance URL (e.g., `https://app.coolify.io/api/v1`)
   - `LOG_LEVEL`: `info` (optional)
8. **Set the domain** (e.g., `mcp.yourdomain.com`)
9. **Deploy the application**

### Method 3: Direct Docker Compose

1. **Update your `.env` file with:**
   ```bash
   COOLIFY_API_TOKEN=your_actual_api_token_here
   COOLIFY_BASE_URL=https://your-coolify-instance.com/api/v1
   ```

2. **Deploy with docker-compose:**
   ```bash
   # Deploy using the pre-built image
   docker-compose up -d
   ```

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `COOLIFY_API_TOKEN` | Your Coolify API token | Yes | - |
| `COOLIFY_BASE_URL` | Coolify instance URL | No | `https://app.coolify.io/api/v1` |
| `LOG_LEVEL` | Logging level | No | `info` |
| `SERVICE_FQDN_COOLIFY_MCP_SERVER_3000` | Domain for the service | Yes | Set by Coolify |

## Post-Deployment

1. **Verify deployment:**
   - Check `https://your-domain.com/health`
   - Should return JSON with status information:
     ```json
     {
       "status": "healthy",
       "timestamp": "2025-09-17T03:37:50.289Z",
       "uptime": 8,
       "client_ip": "your-ip",
       "host": "your-domain.com"
     }
     ```

2. **Test additional endpoints:**
   - `/status` - Service status and version
   - `/ready` - Readiness probe
   - `/live` - Liveness probe

3. **Test MCP connection:**
   - Use the health endpoint to verify the service is running
   - Check logs in Coolify dashboard

4. **Configure MCP client:**
   ```json
   {
     "mcpServers": {
       "coolify": {
         "command": "node",
         "args": ["/path/to/coolify-mcp-server/dist/index.js"],
         "env": {
           "COOLIFY_API_TOKEN": "your_token_here",
           "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"
         }
       }
     }
   }
   ```

## Health Check Endpoints

- `GET /health` - Detailed health information
- `GET /ready` - Readiness probe
- `GET /live` - Liveness probe
- `GET /status` - Service status

## Troubleshooting

1. **Check logs** in Coolify dashboard
2. **Verify environment variables** are set correctly
3. **Check domain configuration** and DNS
4. **Verify API token** has correct permissions
5. **Check resource limits** if experiencing issues

## Security Features

- ✅ Automatic HTTPS with Let's Encrypt
- ✅ Security headers (HSTS, XSS protection, etc.)
- ✅ CORS configuration
- ✅ Rate limiting
- ✅ Non-root user execution
- ✅ Read-only filesystem

## Support

If you encounter issues:
1. Check the logs in Coolify dashboard
2. Verify all environment variables
3. Test the health endpoints
4. Check Coolify documentation

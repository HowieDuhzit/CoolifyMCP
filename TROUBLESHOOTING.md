# Troubleshooting Guide

This guide helps you resolve common issues when using the Coolify MCP Server.

## Table of Contents

- [Installation Issues](#installation-issues)
- [Configuration Issues](#configuration-issues)
- [Connection Issues](#connection-issues)
- [API Issues](#api-issues)
- [Docker Issues](#docker-issues)
- [Performance Issues](#performance-issues)
- [Error Messages](#error-messages)

## Installation Issues

### Node.js Version Issues

**Problem:** `Error: Node.js version not supported`

**Solution:**
- Ensure you're using Node.js 20 or higher
- Check version: `node --version`
- Update Node.js if needed

### Package Installation Fails

**Problem:** `npm install` fails with errors

**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install

# If using yarn
yarn install --frozen-lockfile
```

### TypeScript Build Errors

**Problem:** `tsc` compilation fails

**Solutions:**
```bash
# Check TypeScript version
npx tsc --version

# Clean and rebuild
npm run clean
npm run build

# Check for syntax errors
npm run lint
```

## Configuration Issues

### Missing API Token

**Problem:** `Coolify API token is required`

**Solutions:**
1. **Check environment variables:**
   ```bash
   echo $COOLIFY_API_TOKEN
   ```

2. **Set environment variable:**
   ```bash
   export COOLIFY_API_TOKEN="your_token_here"
   ```

3. **Create .env file:**
   ```bash
   cp config.example.env .env
   # Edit .env with your token
   ```

4. **Get API token from Coolify:**
   - Go to Coolify dashboard
   - Navigate to "Keys & Tokens" → "API tokens"
   - Create a new token
   - Copy the token value

### Invalid Base URL

**Problem:** `Invalid configuration: baseUrl`

**Solutions:**
1. **Check URL format:**
   ```bash
   # Correct format
   COOLIFY_BASE_URL=https://app.coolify.io/api/v1
   
   # For self-hosted
   COOLIFY_BASE_URL=http://your-ip:8000/api/v1
   ```

2. **Verify URL accessibility:**
   ```bash
   curl -I $COOLIFY_BASE_URL/health
   ```

### Environment Variable Not Loading

**Problem:** Environment variables not being read

**Solutions:**
1. **Check .env file location:**
   - Ensure .env is in the project root
   - Check file permissions

2. **Restart the server:**
   ```bash
   # Stop and restart
   npm start
   ```

3. **Use explicit environment loading:**
   ```bash
   # Load .env explicitly
   node -r dotenv/config dist/index.js
   ```

## Connection Issues

### Cannot Connect to Coolify API

**Problem:** `Network Error: Unable to reach Coolify API`

**Solutions:**
1. **Check network connectivity:**
   ```bash
   ping app.coolify.io
   curl -I https://app.coolify.io/api/v1/health
   ```

2. **Check firewall/proxy settings:**
   - Ensure outbound HTTPS (443) is allowed
   - Configure proxy if needed

3. **Verify API URL:**
   - Check COOLIFY_BASE_URL is correct
   - Ensure no trailing slashes

### SSL/TLS Certificate Issues

**Problem:** `SSL certificate verification failed`

**Solutions:**
1. **Update certificates:**
   ```bash
   # Ubuntu/Debian
   sudo apt-get update && sudo apt-get install ca-certificates
   
   # macOS
   brew install ca-certificates
   ```

2. **Check system time:**
   ```bash
   date
   # Ensure system time is correct
   ```

### Authentication Failures

**Problem:** `401 Unauthorized` or `403 Forbidden`

**Solutions:**
1. **Verify API token:**
   ```bash
   # Test token manually
   curl -H "Authorization: Bearer $COOLIFY_API_TOKEN" \
        $COOLIFY_BASE_URL/teams/current
   ```

2. **Check token permissions:**
   - Ensure token has required permissions
   - Create new token if needed

3. **Verify team access:**
   - Check if token has access to the team
   - Try with a different team token

## API Issues

### Rate Limiting

**Problem:** `429 Too Many Requests`

**Solutions:**
1. **Implement backoff:**
   - The server automatically retries with exponential backoff
   - Wait before making more requests

2. **Reduce request frequency:**
   - Batch operations when possible
   - Use pagination for large lists

### Invalid Parameters

**Problem:** `400 Bad Request` or `422 Unprocessable Entity`

**Solutions:**
1. **Check parameter types:**
   ```json
   // Correct
   {"page": 1, "per_page": 10}
   
   // Incorrect
   {"page": "1", "per_page": "10"}
   ```

2. **Validate required fields:**
   - Ensure all required parameters are provided
   - Check parameter names match exactly

3. **Check parameter values:**
   - UUIDs must be valid format
   - Enums must match allowed values

### Resource Not Found

**Problem:** `404 Not Found`

**Solutions:**
1. **Verify resource exists:**
   - Check if the resource was deleted
   - Verify UUID is correct

2. **Check permissions:**
   - Ensure you have access to the resource
   - Try with a different API token

## Docker Issues

### Container Won't Start

**Problem:** Docker container exits immediately

**Solutions:**
1. **Check logs:**
   ```bash
   docker logs <container_id>
   ```

2. **Verify environment variables:**
   ```bash
   docker run -e COOLIFY_API_TOKEN="your_token" \
              -e COOLIFY_BASE_URL="https://app.coolify.io/api/v1" \
              coolify-mcp-server
   ```

3. **Check Dockerfile:**
   - Ensure all required files are copied
   - Verify build process completed

### Health Check Failures

**Problem:** `Health check failed`

**Solutions:**
1. **Check health endpoint:**
   ```bash
   curl http://localhost:3000/health
   ```

2. **Verify port mapping:**
   ```bash
   docker run -p 3000:3000 coolify-mcp-server
   ```

3. **Check container logs:**
   ```bash
   docker logs <container_id>
   ```

### Build Failures

**Problem:** Docker build fails

**Solutions:**
1. **Check Docker version:**
   ```bash
   docker --version
   # Ensure Docker 20.10+
   ```

2. **Clear Docker cache:**
   ```bash
   docker builder prune
   ```

3. **Check available disk space:**
   ```bash
   df -h
   ```

## Performance Issues

### Slow Response Times

**Problem:** API calls are slow

**Solutions:**
1. **Check network latency:**
   ```bash
   ping app.coolify.io
   ```

2. **Optimize requests:**
   - Use pagination for large lists
   - Batch operations when possible
   - Cache frequently accessed data

3. **Check server resources:**
   - Monitor CPU and memory usage
   - Ensure adequate resources

### Memory Issues

**Problem:** High memory usage or out of memory

**Solutions:**
1. **Monitor memory usage:**
   ```bash
   # Check Node.js memory usage
   node --max-old-space-size=4096 dist/index.js
   ```

2. **Optimize data handling:**
   - Process large responses in chunks
   - Avoid loading entire datasets into memory

3. **Check for memory leaks:**
   - Monitor memory usage over time
   - Restart server periodically if needed

## Error Messages

### Common Error Messages and Solutions

#### `Tool execution failed: Configuration not initialized`
- **Cause:** Server not properly initialized
- **Solution:** Restart the server and check configuration

#### `Tool execution failed: API client not initialized`
- **Cause:** API client setup failed
- **Solution:** Check API token and base URL configuration

#### `Tool execution failed: Unknown tool`
- **Cause:** Tool name not recognized
- **Solution:** Check tool name spelling and availability

#### `Tool execution failed: Network Error`
- **Cause:** Cannot reach Coolify API
- **Solution:** Check network connectivity and API URL

#### `Tool execution failed: API Error: 401 Unauthorized`
- **Cause:** Invalid or expired API token
- **Solution:** Generate new API token in Coolify dashboard

#### `Tool execution failed: API Error: 403 Forbidden`
- **Cause:** Insufficient permissions
- **Solution:** Check token permissions and team access

#### `Tool execution failed: API Error: 404 Not Found`
- **Cause:** Resource doesn't exist
- **Solution:** Verify resource UUID and existence

#### `Tool execution failed: API Error: 422 Unprocessable Entity`
- **Cause:** Invalid request parameters
- **Solution:** Check parameter format and required fields

#### `Tool execution failed: API Error: 429 Too Many Requests`
- **Cause:** Rate limit exceeded
- **Solution:** Wait and retry, reduce request frequency

#### `Tool execution failed: API Error: 500 Internal Server Error`
- **Cause:** Coolify server error
- **Solution:** Check Coolify status, retry later

## Getting Help

If you're still experiencing issues:

1. **Check the logs:**
   ```bash
   # Enable debug logging
   LOG_LEVEL=debug npm start
   ```

2. **Create an issue:**
   - Include error messages
   - Provide configuration (without secrets)
   - Include relevant logs

3. **Join the community:**
   - Discord server
   - GitHub discussions
   - Coolify community forums

4. **Check Coolify status:**
   - Visit Coolify status page
   - Check for known issues

## Debug Mode

Enable debug mode for detailed logging:

```bash
# Set debug environment variable
export LOG_LEVEL=debug

# Or in .env file
LOG_LEVEL=debug

# Start server
npm start
```

This will provide detailed information about:
- API requests and responses
- Configuration loading
- Error stack traces
- Performance metrics

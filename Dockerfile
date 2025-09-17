# Multi-stage build for production optimization
FROM node:20-alpine AS builder

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci --only=production=false

# Copy source code and configuration
COPY src/ ./src/
COPY tsconfig.json ./
COPY .eslintrc.json ./

# Build the TypeScript code
RUN npm run build

# Production stage
FROM node:20-alpine AS production

# Install runtime dependencies and security tools
RUN apk add --no-cache \
    dumb-init \
    curl \
    ca-certificates \
    tzdata \
    && rm -rf /var/cache/apk/*

# Create app user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S coolify -u 1001

# Set working directory
WORKDIR /app

# Copy built application from builder stage
COPY --from=builder --chown=coolify:nodejs /app/dist ./dist
COPY --from=builder --chown=coolify:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=coolify:nodejs /app/package*.json ./

# Create necessary directories with proper permissions
RUN mkdir -p /app/logs /app/tmp && \
    chown -R coolify:nodejs /app/logs /app/tmp && \
    chmod 755 /app/logs /app/tmp

# Switch to non-root user
USER coolify

# Expose port for health checks and Traefik
EXPOSE 3000

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV TZ=UTC
ENV NODE_OPTIONS="--max-old-space-size=256"

# Health check optimized for HTTPS and Traefik
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
  CMD curl -f -s http://localhost:3000/health || exit 1

# Use dumb-init for proper signal handling
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["node", "dist/index.js"]

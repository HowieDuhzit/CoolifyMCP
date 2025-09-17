#!/bin/bash

# Coolify MCP Server Startup Script
# This script ensures the MCP server is built and running

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting Coolify MCP Server...${NC}"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Please run this script from the CoolifyMCP directory.${NC}"
    exit 1
fi

# Load NVM if available
if [ -s "$HOME/.nvm/nvm.sh" ]; then
    source "$HOME/.nvm/nvm.sh"
    echo -e "${GREEN}✅ NVM loaded${NC}"
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Error: Node.js not found. Please install Node.js or load NVM.${NC}"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
fi

# Build the project if needed
if [ ! -d "dist" ]; then
    echo -e "${YELLOW}🔨 Building project...${NC}"
    npm run build
fi

# Check if dist/index.js exists
if [ ! -f "dist/index.js" ]; then
    echo -e "${RED}❌ Error: dist/index.js not found. Build failed.${NC}"
    exit 1
fi

# Set environment variables
export NODE_ENV=development
export COOLIFY_API_TOKEN=${COOLIFY_API_TOKEN:-"4|nWWDSleofXPm4UGVIlxe4dWOiQ3IQmB41TPbEv0idfa04176"}
export COOLIFY_BASE_URL=${COOLIFY_BASE_URL:-"https://cool.howieduhzit.best/api/v1"}

echo -e "${GREEN}✅ Environment configured${NC}"
echo -e "${GREEN}✅ Starting MCP server...${NC}"

# Start the MCP server
exec node dist/index.js

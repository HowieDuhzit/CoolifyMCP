#!/bin/bash

# Coolify MCP Server Installation Script
# This script helps users install the Coolify MCP server in various ways

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Coolify MCP Server Installation${NC}"
echo -e "${BLUE}===================================${NC}"
echo ""

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  docker      Install via Docker (recommended)"
    echo "  npm         Install via NPM (for developers)"
    echo "  compose     Install via Docker Compose (for production)"
    echo "  local       Install locally from source"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 docker"
    echo "  $0 npm"
    echo "  $0 compose"
}

# Function to install via Docker
install_docker() {
    echo -e "${YELLOW}🐳 Installing via Docker...${NC}"
    
    # Check if Docker is installed
    if ! command -v docker &> /dev/null; then
        echo -e "${RED}❌ Docker is not installed. Please install Docker first.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Docker found${NC}"
    
    # Pull the image
    echo -e "${YELLOW}📦 Pulling Coolify MCP Server image...${NC}"
    docker pull ghcr.io/howieduhzit/coolifymcp:latest
    
    echo -e "${GREEN}✅ Installation complete!${NC}"
    echo ""
    echo -e "${BLUE}📋 Next steps:${NC}"
    echo "1. Add this to your Cursor MCP configuration:"
    echo ""
    echo '{'
    echo '  "mcpServers": {'
    echo '    "coolify": {'
    echo '      "command": "docker",'
    echo '      "args": ['
    echo '        "run",'
    echo '        "--rm",'
    echo '        "-i",'
    echo '        "ghcr.io/howieduhzit/coolifymcp:latest"'
    echo '      ],'
    echo '      "env": {'
    echo '        "COOLIFY_API_TOKEN": "your_coolify_api_token",'
    echo '        "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"'
    echo '      }'
    echo '    }'
    echo '  }'
    echo '}'
    echo ""
    echo "2. Replace 'your_coolify_api_token' with your actual token"
    echo "3. Restart Cursor"
}

# Function to install via NPM
install_npm() {
    echo -e "${YELLOW}📦 Installing via NPM...${NC}"
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Node.js found${NC}"
    
    # Install globally
    echo -e "${YELLOW}📦 Installing Coolify MCP Server...${NC}"
    npm install -g @howieduhzit/coolify-mcp-server
    
    echo -e "${GREEN}✅ Installation complete!${NC}"
    echo ""
    echo -e "${BLUE}📋 Next steps:${NC}"
    echo "1. Add this to your Cursor MCP configuration:"
    echo ""
    echo '{'
    echo '  "mcpServers": {'
    echo '    "coolify": {'
    echo '      "command": "coolify-mcp-server",'
    echo '      "env": {'
    echo '        "COOLIFY_API_TOKEN": "your_coolify_api_token",'
    echo '        "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"'
    echo '      }'
    echo '    }'
    echo '  }'
    echo '}'
    echo ""
    echo "2. Replace 'your_coolify_api_token' with your actual token"
    echo "3. Restart Cursor"
}

# Function to install via Docker Compose
install_compose() {
    echo -e "${YELLOW}🐳 Installing via Docker Compose...${NC}"
    
    # Check if Docker Compose is installed
    if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
        echo -e "${RED}❌ Docker Compose is not installed. Please install Docker Compose first.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Docker Compose found${NC}"
    
    # Create .env file if it doesn't exist
    if [ ! -f ".env" ]; then
        echo -e "${YELLOW}📝 Creating .env file...${NC}"
        cat > .env << EOF
# Coolify MCP Server Environment Variables
COOLIFY_API_TOKEN=your_coolify_api_token_here
COOLIFY_BASE_URL=https://app.coolify.io/api/v1
LOG_LEVEL=info
EOF
        echo -e "${YELLOW}⚠️  Please edit .env file and add your COOLIFY_API_TOKEN${NC}"
    fi
    
    # Start the service
    echo -e "${YELLOW}🚀 Starting Coolify MCP Server...${NC}"
    docker-compose -f docker-compose.mcp.yml up -d
    
    echo -e "${GREEN}✅ Installation complete!${NC}"
    echo ""
    echo -e "${BLUE}📋 Next steps:${NC}"
    echo "1. Edit .env file with your COOLIFY_API_TOKEN"
    echo "2. Restart the service: docker-compose -f docker-compose.mcp.yml restart"
    echo "3. Check logs: docker-compose -f docker-compose.mcp.yml logs -f"
}

# Function to install locally
install_local() {
    echo -e "${YELLOW}🔧 Installing locally from source...${NC}"
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Node.js found${NC}"
    
    # Install dependencies
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    
    # Build the project
    echo -e "${YELLOW}🔨 Building project...${NC}"
    npm run build
    
    # Make startup script executable
    chmod +x start-coolify-mcp.sh
    
    echo -e "${GREEN}✅ Installation complete!${NC}"
    echo ""
    echo -e "${BLUE}📋 Next steps:${NC}"
    echo "1. Add this to your Cursor MCP configuration:"
    echo ""
    echo '{'
    echo '  "mcpServers": {'
    echo '    "coolify": {'
    echo '      "command": "node",'
    echo '      "args": ["'$(pwd)'/dist/index.js"],'
    echo '      "env": {'
    echo '        "COOLIFY_API_TOKEN": "your_coolify_api_token",'
    echo '        "COOLIFY_BASE_URL": "https://your-coolify-instance.com/api/v1"'
    echo '      }'
    echo '    }'
    echo '  }'
    echo '}'
    echo ""
    echo "2. Replace 'your_coolify_api_token' with your actual token"
    echo "3. Restart Cursor"
}

# Main script logic
case "${1:-help}" in
    docker)
        install_docker
        ;;
    npm)
        install_npm
        ;;
    compose)
        install_compose
        ;;
    local)
        install_local
        ;;
    help|--help|-h)
        show_usage
        ;;
    *)
        echo -e "${RED}❌ Unknown option: $1${NC}"
        echo ""
        show_usage
        exit 1
        ;;
esac

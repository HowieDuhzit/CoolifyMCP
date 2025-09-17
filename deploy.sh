#!/bin/bash

# ===========================================
# Coolify MCP Server - Production Deployment Script
# ===========================================

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    print_success "All dependencies are installed."
}

# Check if environment file exists
check_environment() {
    print_status "Checking environment configuration..."
    
    if [ ! -f ".env" ]; then
        print_warning ".env file not found. Creating from template..."
        if [ -f "env.production.template" ]; then
            cp env.production.template .env
            print_warning "Please edit .env file with your actual values before continuing."
            print_warning "Required: COOLIFY_API_TOKEN and COOLIFY_BASE_URL"
            exit 1
        else
            print_error "No environment template found. Please create .env file manually."
            exit 1
        fi
    fi
    
    # Check if required environment variables are set
    source .env
    
    if [ -z "$COOLIFY_API_TOKEN" ] || [ "$COOLIFY_API_TOKEN" = "your_coolify_api_token_here" ]; then
        print_error "COOLIFY_API_TOKEN is not set in .env file."
        exit 1
    fi
    
    if [ -z "$COOLIFY_BASE_URL" ] || [ "$COOLIFY_BASE_URL" = "https://app.coolify.io/api/v1" ]; then
        print_warning "COOLIFY_BASE_URL is using default value. Make sure this is correct."
    fi
    
    print_success "Environment configuration is valid."
}

# Build the Docker image
build_image() {
    print_status "Building Docker image..."
    
    docker-compose build --no-cache
    
    if [ $? -eq 0 ]; then
        print_success "Docker image built successfully."
    else
        print_error "Failed to build Docker image."
        exit 1
    fi
}

# Deploy the application
deploy() {
    print_status "Deploying Coolify MCP Server..."
    
    # Stop existing containers
    docker-compose down --remove-orphans
    
    # Start the application
    docker-compose up -d
    
    if [ $? -eq 0 ]; then
        print_success "Application deployed successfully."
    else
        print_error "Failed to deploy application."
        exit 1
    fi
}

# Check application health
check_health() {
    print_status "Checking application health..."
    
    # Wait for the application to start
    sleep 10
    
    # Check if container is running
    if docker-compose ps | grep -q "Up"; then
        print_success "Container is running."
    else
        print_error "Container is not running."
        docker-compose logs
        exit 1
    fi
    
    # Check health endpoint
    local port=${PORT:-3000}
    if curl -f -s "http://localhost:$port/health" > /dev/null; then
        print_success "Health check passed."
    else
        print_warning "Health check failed. Application may still be starting up."
    fi
}

# Show deployment information
show_info() {
    print_status "Deployment Information:"
    echo "  - Container: coolify-mcp-server"
    echo "  - Port: ${PORT:-3000}"
    echo "  - Health Check: http://localhost:${PORT:-3000}/health"
    echo "  - Logs: docker-compose logs -f coolify-mcp-server"
    echo "  - Stop: docker-compose down"
    echo "  - Restart: docker-compose restart coolify-mcp-server"
}

# Main deployment function
main() {
    echo "==========================================="
    echo "Coolify MCP Server - Production Deployment"
    echo "==========================================="
    echo
    
    check_dependencies
    check_environment
    build_image
    deploy
    check_health
    show_info
    
    echo
    print_success "Deployment completed successfully!"
    print_status "Your Coolify MCP Server is now running in production mode."
}

# Run main function
main "$@"

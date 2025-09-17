import { HealthCheckResponse } from './types.js';
import * as http from 'http';

export class HealthServer {
  private server?: http.Server;
  private startTime: Date;

  constructor() {
    this.startTime = new Date();
  }

  start(port: number = 3000): void {
    
    this.server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
      // Handle CORS preflight requests
      if (req.method === 'OPTIONS') {
        res.writeHead(200, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          'Access-Control-Max-Age': '86400',
          'Content-Length': '0'
        });
        res.end();
        return;
      }

      // Get client IP from proxy headers
      const clientIP = Array.isArray(req.headers['x-forwarded-for']) 
        ? req.headers['x-forwarded-for'][0] 
        : req.headers['x-forwarded-for'] || 
          (Array.isArray(req.headers['x-real-ip']) 
            ? req.headers['x-real-ip'][0] 
            : req.headers['x-real-ip']) || 
          req.connection.remoteAddress || 
          'unknown';

      if (req.url === '/health') {
        const response: HealthCheckResponse = {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          uptime: Math.floor((Date.now() - this.startTime.getTime()) / 1000),
          ...(clientIP && { client_ip: clientIP }),
          ...(req.headers['x-forwarded-proto'] && { 
            protocol: Array.isArray(req.headers['x-forwarded-proto']) 
              ? req.headers['x-forwarded-proto'][0] 
              : req.headers['x-forwarded-proto'] 
          }),
          ...(req.headers.host && { 
            host: Array.isArray(req.headers.host) 
              ? req.headers.host[0] 
              : req.headers.host 
          })
        };

        res.writeHead(200, { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify(response, null, 2));
      } else if (req.url === '/ready') {
        // Kubernetes readiness probe
        res.writeHead(200, { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ status: 'ready' }));
      } else if (req.url === '/live') {
        // Kubernetes liveness probe
        res.writeHead(200, { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ status: 'alive' }));
      } else if (req.url === '/status') {
        // Additional status endpoint for monitoring
        res.writeHead(200, { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ 
          status: 'running',
          service: 'coolify-mcp-server',
          version: '1.0.0',
          uptime: Math.floor((Date.now() - this.startTime.getTime()) / 1000)
        }));
      } else {
        res.writeHead(404, { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(JSON.stringify({ 
          error: 'Not found',
          available_endpoints: ['/health', '/ready', '/live', '/status']
        }));
      }
    });

    this.server.listen(port, () => {
      console.error(`Health server running on port ${port}`);
      console.error(`Health check available at: http://localhost:${port}/health`);
    });

    // Graceful shutdown
    process.on('SIGTERM', () => this.stop());
    process.on('SIGINT', () => this.stop());
  }

  stop(): void {
    if (this.server) {
      this.server.close(() => {
        console.error('Health server stopped');
      });
    }
  }
}

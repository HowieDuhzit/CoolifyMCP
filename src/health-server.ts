import { HealthCheckResponse } from './types.js';

export class HealthServer {
  private server?: any;
  private startTime: Date;

  constructor() {
    this.startTime = new Date();
  }

  start(port: number = 3000): void {
    const http = require('http');
    
    this.server = http.createServer((req: any, res: any) => {
      if (req.url === '/health') {
        const response: HealthCheckResponse = {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          uptime: Math.floor((Date.now() - this.startTime.getTime()) / 1000),
        };

        res.writeHead(200, { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        });
        res.end(JSON.stringify(response, null, 2));
      } else if (req.url === '/ready') {
        // Kubernetes readiness probe
        res.writeHead(200, { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        });
        res.end(JSON.stringify({ status: 'ready' }));
      } else if (req.url === '/live') {
        // Kubernetes liveness probe
        res.writeHead(200, { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        });
        res.end(JSON.stringify({ status: 'alive' }));
      } else {
        res.writeHead(404, { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        });
        res.end(JSON.stringify({ 
          error: 'Not found',
          available_endpoints: ['/health', '/ready', '/live']
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

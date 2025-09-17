import { Config, ConfigSchema, CoolifyError } from './types.js';

export class ConfigManager {
  private config?: Config;

  initialize(args: any): void {
    const baseUrl = args?.baseUrl || process.env.COOLIFY_BASE_URL || 'https://app.coolify.io/api/v1';
    const token = args?.token || process.env.COOLIFY_API_TOKEN;
    
    if (!token) {
      throw new CoolifyError(
        'Coolify API token is required. Set COOLIFY_API_TOKEN environment variable or pass token in arguments.',
        400
      );
    }

    try {
      this.config = ConfigSchema.parse({ baseUrl, token });
    } catch (error) {
      throw new CoolifyError(
        `Invalid configuration: ${error instanceof Error ? error.message : 'Unknown error'}`,
        400
      );
    }
  }

  getConfig(): Config {
    if (!this.config) {
      throw new CoolifyError('Configuration not initialized', 500);
    }
    return this.config;
  }

  getBaseUrl(): string {
    return this.getConfig().baseUrl;
  }

  getToken(): string {
    return this.getConfig().token;
  }

  isInitialized(): boolean {
    return this.config !== undefined;
  }
}

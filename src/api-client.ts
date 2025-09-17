import axios, { AxiosInstance, AxiosError } from 'axios';
import { ConfigManager } from './config.js';
import { CoolifyError, CoolifyResponse } from './types.js';

export class CoolifyAPIClient {
  private axiosInstance?: AxiosInstance;
  private configManager: ConfigManager;

  constructor(configManager: ConfigManager) {
    this.configManager = configManager;
  }

  initialize(): void {
    if (!this.configManager.isInitialized()) {
      throw new CoolifyError('Configuration not initialized', 500);
    }

    const config = this.configManager.getConfig();
    
    this.axiosInstance = axios.create({
      baseURL: config.baseUrl,
      headers: {
        'Authorization': `Bearer ${config.token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Coolify-MCP-Server/1.0.0',
      },
      timeout: 30000,
      validateStatus: (status) => status < 500, // Don't throw on 4xx errors
    });

    // Add response interceptor for error handling
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response) {
          const responseData = error.response.data as any;
          const message = responseData?.message || error.message;
          throw new CoolifyError(
            `API Error: ${message}`,
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          throw new CoolifyError(
            'Network Error: Unable to reach Coolify API',
            0,
            error.request
          );
        } else {
          throw new CoolifyError(
            `Request Error: ${error.message}`,
            0
          );
        }
      }
    );
  }

  getInstance(): AxiosInstance {
    if (!this.axiosInstance) {
      throw new CoolifyError('API client not initialized', 500);
    }
    return this.axiosInstance;
  }

  async get<T = any>(endpoint: string, params?: Record<string, any>): Promise<CoolifyResponse<T>> {
    const response = await this.getInstance().get(endpoint, { params });
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  async post<T = any>(endpoint: string, data?: any): Promise<CoolifyResponse<T>> {
    const response = await this.getInstance().post(endpoint, data);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  async patch<T = any>(endpoint: string, data?: any): Promise<CoolifyResponse<T>> {
    const response = await this.getInstance().patch(endpoint, data);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  async delete<T = any>(endpoint: string): Promise<CoolifyResponse<T>> {
    const response = await this.getInstance().delete(endpoint);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  }

  buildQueryString(params: Record<string, any>): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, value.toString());
      }
    });
    
    return searchParams.toString();
  }
}

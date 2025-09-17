import { z } from 'zod';

// Configuration schema
export const ConfigSchema = z.object({
  baseUrl: z.string().default('https://app.coolify.io/api/v1'),
  token: z.string(),
});

export type Config = z.infer<typeof ConfigSchema>;

// API Response types
export interface CoolifyResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
}

// Tool argument types
export interface PaginationArgs {
  page?: number;
  per_page?: number;
}

export interface ProjectArgs extends PaginationArgs {
  uuid?: string;
  name?: string;
  description?: string;
}

export interface ApplicationArgs extends PaginationArgs {
  uuid?: string;
  project_uuid?: string;
  server_uuid?: string;
  environment_name?: string;
  git_repository?: string;
  git_branch?: string;
  build_pack?: 'nixpacks' | 'static' | 'dockerfile' | 'dockercompose';
  ports_exposes?: string;
  name?: string;
  description?: string;
  docker_compose_raw?: string;
}

export interface DatabaseArgs extends PaginationArgs {
  uuid?: string;
  name?: string;
  description?: string;
  server_uuid?: string;
  project_uuid?: string;
  environment_name?: string;
  type?: 'postgresql' | 'mysql' | 'mongodb' | 'redis' | 'mariadb' | 'clickhouse' | 'dragonfly' | 'keydb';
}

export interface ServerArgs extends PaginationArgs {
  uuid?: string;
  name?: string;
  description?: string;
  ip?: string;
  port?: number;
  user?: string;
  private_key_id?: string;
}

export interface ServiceArgs extends PaginationArgs {
  uuid?: string;
  name?: string;
  description?: string;
  server_uuid?: string;
  project_uuid?: string;
  environment_name?: string;
  docker_compose_raw?: string;
}

export interface DeploymentArgs extends PaginationArgs {
  application_uuid?: string;
  force_rebuild?: boolean;
}

export interface SecurityKeyArgs extends PaginationArgs {
  uuid?: string;
  name?: string;
  description?: string;
  key?: string;
}

export interface EnvironmentVariableArgs {
  uuid?: string;
  key?: string;
  value?: string;
  env_uuid?: string;
  is_preview?: boolean;
  is_build_time?: boolean;
  is_literal?: boolean;
  is_multiline?: boolean;
  is_shown_once?: boolean;
}

export interface BulkEnvironmentVariablesArgs {
  uuid: string;
  envs: Array<{
    key: string;
    value: string;
    is_preview?: boolean;
    is_build_time?: boolean;
    is_literal?: boolean;
    is_multiline?: boolean;
    is_shown_once?: boolean;
  }>;
}

// Error types
export class CoolifyError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: any
  ) {
    super(message);
    this.name = 'CoolifyError';
  }
}

// Health check response
export interface HealthCheckResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime?: number;
}

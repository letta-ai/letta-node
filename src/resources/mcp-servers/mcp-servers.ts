// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ToolsAPI from './tools';
import { ToolListResponse, ToolRetrieveParams, ToolRunParams, Tools } from './tools';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class McpServers extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);

  /**
   * Add a new MCP server to the Letta MCP server config
   */
  create(body: McpServerCreateParams, options?: RequestOptions): APIPromise<McpServerCreateResponse> {
    return this._client.post('/v1/mcp-servers/', { body, ...options });
  }

  /**
   * Get a specific MCP server
   */
  retrieve(mcpServerID: string, options?: RequestOptions): APIPromise<McpServerRetrieveResponse> {
    return this._client.get(path`/v1/mcp-servers/${mcpServerID}`, options);
  }

  /**
   * Update an existing MCP server configuration
   */
  update(
    mcpServerID: string,
    body: McpServerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<McpServerUpdateResponse> {
    return this._client.patch(path`/v1/mcp-servers/${mcpServerID}`, { body, ...options });
  }

  /**
   * Get a list of all configured MCP servers
   */
  list(options?: RequestOptions): APIPromise<McpServerListResponse> {
    return this._client.get('/v1/mcp-servers/', options);
  }

  /**
   * Delete an MCP server by its ID
   */
  delete(mcpServerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/mcp-servers/${mcpServerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Refresh tools for an MCP server by:
   *
   * 1. Fetching current tools from the MCP server
   * 2. Deleting tools that no longer exist on the server
   * 3. Updating schemas for existing tools
   * 4. Adding new tools from the server
   *
   * Returns a summary of changes made.
   */
  refresh(
    mcpServerID: string,
    params: McpServerRefreshParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { agent_id } = params ?? {};
    return this._client.patch(path`/v1/mcp-servers/${mcpServerID}/refresh`, {
      query: { agent_id },
      ...options,
    });
  }
}

/**
 * Create a new SSE MCP server
 */
export interface CreateSseMcpServer {
  /**
   * The URL of the server
   */
  server_url: string;

  /**
   * The name of the authentication header (e.g., 'Authorization')
   */
  auth_header?: string | null;

  /**
   * The authentication token or API key value
   */
  auth_token?: string | null;

  /**
   * Custom HTTP headers to include with requests
   */
  custom_headers?: { [key: string]: string } | null;

  mcp_server_type?: 'sse';
}

/**
 * Create a new Stdio MCP server
 */
export interface CreateStdioMcpServer {
  /**
   * The arguments to pass to the command
   */
  args: Array<string>;

  /**
   * The command to run (MCP 'local' client will run this command)
   */
  command: string;

  /**
   * Environment variables to set
   */
  env?: { [key: string]: string } | null;

  mcp_server_type?: 'stdio';
}

/**
 * Create a new Streamable HTTP MCP server
 */
export interface CreateStreamableHTTPMcpServer {
  /**
   * The URL of the server
   */
  server_url: string;

  /**
   * The name of the authentication header (e.g., 'Authorization')
   */
  auth_header?: string | null;

  /**
   * The authentication token or API key value
   */
  auth_token?: string | null;

  /**
   * Custom HTTP headers to include with requests
   */
  custom_headers?: { [key: string]: string } | null;

  mcp_server_type?: 'streamable_http';
}

/**
 * An SSE MCP server
 */
export interface SseMcpServer {
  /**
   * The name of the MCP server
   */
  server_name: string;

  /**
   * The URL of the server
   */
  server_url: string;

  /**
   * The human-friendly ID of the Mcp_server
   */
  id?: string;

  /**
   * The name of the authentication header (e.g., 'Authorization')
   */
  auth_header?: string | null;

  /**
   * The authentication token or API key value
   */
  auth_token?: string | null;

  /**
   * Custom HTTP headers to include with requests
   */
  custom_headers?: { [key: string]: string } | null;

  mcp_server_type?: 'sse';
}

/**
 * A Stdio MCP server
 */
export interface StdioMcpServer {
  /**
   * The arguments to pass to the command
   */
  args: Array<string>;

  /**
   * The command to run (MCP 'local' client will run this command)
   */
  command: string;

  /**
   * The name of the MCP server
   */
  server_name: string;

  /**
   * The human-friendly ID of the Mcp_server
   */
  id?: string;

  /**
   * Environment variables to set
   */
  env?: { [key: string]: string } | null;

  mcp_server_type?: 'stdio';
}

/**
 * A Streamable HTTP MCP server
 */
export interface StreamableHTTPMcpServer {
  /**
   * The name of the MCP server
   */
  server_name: string;

  /**
   * The URL of the server
   */
  server_url: string;

  /**
   * The human-friendly ID of the Mcp_server
   */
  id?: string;

  /**
   * The name of the authentication header (e.g., 'Authorization')
   */
  auth_header?: string | null;

  /**
   * The authentication token or API key value
   */
  auth_token?: string | null;

  /**
   * Custom HTTP headers to include with requests
   */
  custom_headers?: { [key: string]: string } | null;

  mcp_server_type?: 'streamable_http';
}

/**
 * Update schema for SSE MCP server - all fields optional
 */
export interface UpdateSseMcpServer {
  /**
   * The URL of the server
   */
  server_url: string | null;

  /**
   * The name of the authentication header (e.g., 'Authorization')
   */
  auth_header?: string | null;

  /**
   * The authentication token or API key value
   */
  auth_token?: string | null;

  /**
   * Custom HTTP headers to include with requests
   */
  custom_headers?: { [key: string]: string } | null;

  mcp_server_type?: 'sse';
}

/**
 * Update schema for Stdio MCP server - all fields optional
 */
export interface UpdateStdioMcpServer {
  /**
   * The arguments to pass to the command
   */
  args: Array<string> | null;

  /**
   * The command to run (MCP 'local' client will run this command)
   */
  command: string | null;

  /**
   * Environment variables to set
   */
  env?: { [key: string]: string } | null;

  mcp_server_type?: 'stdio';
}

/**
 * Update schema for Streamable HTTP MCP server - all fields optional
 */
export interface UpdateStreamableHTTPMcpServer {
  /**
   * The URL of the server
   */
  server_url: string | null;

  /**
   * The name of the authentication header (e.g., 'Authorization')
   */
  auth_header?: string | null;

  /**
   * The authentication token or API key value
   */
  auth_token?: string | null;

  /**
   * Custom HTTP headers to include with requests
   */
  custom_headers?: { [key: string]: string } | null;

  mcp_server_type?: 'streamable_http';
}

/**
 * A Stdio MCP server
 */
export type McpServerCreateResponse = StdioMcpServer | SseMcpServer | StreamableHTTPMcpServer;

/**
 * A Stdio MCP server
 */
export type McpServerRetrieveResponse = StdioMcpServer | SseMcpServer | StreamableHTTPMcpServer;

/**
 * A Stdio MCP server
 */
export type McpServerUpdateResponse = StdioMcpServer | SseMcpServer | StreamableHTTPMcpServer;

export type McpServerListResponse = Array<StdioMcpServer | SseMcpServer | StreamableHTTPMcpServer>;

export type McpServerRefreshResponse = unknown;

export interface McpServerCreateParams {
  /**
   * The MCP server configuration (Stdio, SSE, or Streamable HTTP)
   */
  config: CreateStdioMcpServer | CreateSseMcpServer | CreateStreamableHTTPMcpServer;

  /**
   * The name of the MCP server
   */
  server_name: string;
}

export interface McpServerUpdateParams {
  /**
   * The MCP server configuration updates (Stdio, SSE, or Streamable HTTP)
   */
  config: UpdateStdioMcpServer | UpdateSseMcpServer | UpdateStreamableHTTPMcpServer;

  /**
   * The name of the MCP server
   */
  server_name?: string | null;
}

export interface McpServerRefreshParams {
  agent_id?: string | null;
}

McpServers.Tools = Tools;

export declare namespace McpServers {
  export {
    type CreateSseMcpServer as CreateSseMcpServer,
    type CreateStdioMcpServer as CreateStdioMcpServer,
    type CreateStreamableHTTPMcpServer as CreateStreamableHTTPMcpServer,
    type SseMcpServer as SseMcpServer,
    type StdioMcpServer as StdioMcpServer,
    type StreamableHTTPMcpServer as StreamableHTTPMcpServer,
    type UpdateSseMcpServer as UpdateSseMcpServer,
    type UpdateStdioMcpServer as UpdateStdioMcpServer,
    type UpdateStreamableHTTPMcpServer as UpdateStreamableHTTPMcpServer,
    type McpServerCreateResponse as McpServerCreateResponse,
    type McpServerRetrieveResponse as McpServerRetrieveResponse,
    type McpServerUpdateResponse as McpServerUpdateResponse,
    type McpServerListResponse as McpServerListResponse,
    type McpServerRefreshResponse as McpServerRefreshResponse,
    type McpServerCreateParams as McpServerCreateParams,
    type McpServerUpdateParams as McpServerUpdateParams,
    type McpServerRefreshParams as McpServerRefreshParams,
  };

  export {
    Tools as Tools,
    type ToolListResponse as ToolListResponse,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolRunParams as ToolRunParams,
  };
}

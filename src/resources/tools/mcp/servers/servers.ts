// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ToolsAPI from '../../tools';
import * as ServersToolsAPI from './tools';
import { ToolExecuteParams, ToolExecuteResponse, ToolListResponse, Tools } from './tools';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Servers extends APIResource {
  tools: ServersToolsAPI.Tools = new ServersToolsAPI.Tools(this._client);

  /**
   * Update an existing MCP server configuration
   */
  update(
    mcpServerName: string,
    body: ServerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ServerUpdateResponse> {
    return this._client.patch(path`/v1/tools/mcp/servers/${mcpServerName}`, { body, ...options });
  }

  /**
   * Get a list of all configured MCP servers
   */
  list(options?: RequestOptions): APIPromise<ServerListResponse> {
    return this._client.get('/v1/tools/mcp/servers', options);
  }

  /**
   * Delete a MCP server configuration
   */
  delete(mcpServerName: string, options?: RequestOptions): APIPromise<ServerDeleteResponse> {
    return this._client.delete(path`/v1/tools/mcp/servers/${mcpServerName}`, options);
  }

  /**
   * Add a new MCP server to the Letta MCP server config
   */
  add(body: ServerAddParams, options?: RequestOptions): APIPromise<ServerAddResponse> {
    return this._client.put('/v1/tools/mcp/servers', { body, ...options });
  }

  /**
   * Connect to an MCP server with support for OAuth via SSE. Returns a stream of
   * events handling authorization state and exchange if OAuth is required.
   */
  connect(body: ServerConnectParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/tools/mcp/servers/connect', { body, ...options });
  }

  /**
   * Register a new MCP tool as a Letta server by MCP server + tool name
   */
  registerTool(
    mcpToolName: string,
    params: ServerRegisterToolParams,
    options?: RequestOptions,
  ): APIPromise<ToolsAPI.Tool> {
    const { mcp_server_name } = params;
    return this._client.post(path`/v1/tools/mcp/servers/${mcp_server_name}/${mcpToolName}`, options);
  }

  /**
   * Resync tools for an MCP server by:
   *
   * 1. Fetching current tools from the MCP server
   * 2. Deleting tools that no longer exist on the server
   * 3. Updating schemas for existing tools
   * 4. Adding new tools from the server
   *
   * Returns a summary of changes made.
   */
  resync(
    mcpServerName: string,
    params: ServerResyncParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { agent_id } = params ?? {};
    return this._client.post(path`/v1/tools/mcp/servers/${mcpServerName}/resync`, {
      query: { agent_id },
      ...options,
    });
  }

  /**
   * Test connection to an MCP server without adding it. Returns the list of
   * available tools if successful.
   */
  test(body: ServerTestParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/tools/mcp/servers/test', { body, ...options });
  }
}

export type McpServerType = 'sse' | 'stdio' | 'streamable_http';

/**
 * Configuration for an MCP server using SSE
 *
 * Authentication can be provided in multiple ways:
 *
 * 1. Using auth_header + auth_token: Will add a specific header with the token
 *    Example: auth_header="Authorization", auth_token="Bearer abc123"
 *
 * 2. Using the custom_headers dict: For more complex authentication scenarios
 *    Example: custom_headers={"X-API-Key": "abc123", "X-Custom-Header": "value"}
 */
export interface SseServerConfig {
  /**
   * The name of the server
   */
  server_name: string;

  /**
   * The URL of the server (MCP SSE client will connect to this URL)
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
   * Custom HTTP headers to include with SSE requests
   */
  custom_headers?: { [key: string]: string } | null;

  type?: McpServerType;
}

export interface StdioServerConfig {
  /**
   * The arguments to pass to the command
   */
  args: Array<string>;

  /**
   * The command to run (MCP 'local' client will run this command)
   */
  command: string;

  /**
   * The name of the server
   */
  server_name: string;

  /**
   * Environment variables to set
   */
  env?: { [key: string]: string } | null;

  type?: McpServerType;
}

/**
 * Configuration for an MCP server using Streamable HTTP
 *
 * Authentication can be provided in multiple ways:
 *
 * 1. Using auth_header + auth_token: Will add a specific header with the token
 *    Example: auth_header="Authorization", auth_token="Bearer abc123"
 *
 * 2. Using the custom_headers dict: For more complex authentication scenarios
 *    Example: custom_headers={"X-API-Key": "abc123", "X-Custom-Header": "value"}
 */
export interface StreamableHTTPServerConfig {
  /**
   * The name of the server
   */
  server_name: string;

  /**
   * The URL path for the streamable HTTP server (e.g., 'example/mcp')
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
   * Custom HTTP headers to include with streamable HTTP requests
   */
  custom_headers?: { [key: string]: string } | null;

  type?: McpServerType;
}

/**
 * Configuration for an MCP server using SSE
 *
 * Authentication can be provided in multiple ways:
 *
 * 1. Using auth_header + auth_token: Will add a specific header with the token
 *    Example: auth_header="Authorization", auth_token="Bearer abc123"
 *
 * 2. Using the custom_headers dict: For more complex authentication scenarios
 *    Example: custom_headers={"X-API-Key": "abc123", "X-Custom-Header": "value"}
 */
export type ServerUpdateResponse = StdioServerConfig | SseServerConfig | StreamableHTTPServerConfig;

export type ServerListResponse = {
  [key: string]: SseServerConfig | StdioServerConfig | StreamableHTTPServerConfig;
};

export type ServerDeleteResponse = Array<StdioServerConfig | SseServerConfig | StreamableHTTPServerConfig>;

export type ServerAddResponse = Array<StdioServerConfig | SseServerConfig | StreamableHTTPServerConfig>;

export type ServerConnectResponse = unknown;

export type ServerResyncResponse = unknown;

export type ServerTestResponse = unknown;

export type ServerUpdateParams =
  | ServerUpdateParams.UpdateStdioMcpServer
  | ServerUpdateParams.UpdateSsemcpServer
  | ServerUpdateParams.UpdateStreamableHttpmcpServer;

export declare namespace ServerUpdateParams {
  export interface UpdateStdioMcpServer {
    /**
     * The configuration for the server (MCP 'local' client will run this command)
     */
    stdio_config?: StdioServerConfig | null;
  }

  export interface UpdateSsemcpServer {
    /**
     * The access token or API key for the MCP server (used for SSE authentication)
     */
    token?: string | null;

    /**
     * Custom authentication headers as key-value pairs
     */
    custom_headers?: { [key: string]: string } | null;

    /**
     * The URL of the server (MCP SSE client will connect to this URL)
     */
    server_url?: string | null;
  }

  export interface UpdateStreamableHttpmcpServer {
    /**
     * The name of the authentication header (e.g., 'Authorization')
     */
    auth_header?: string | null;

    /**
     * The authentication token or API key value
     */
    auth_token?: string | null;

    /**
     * Custom authentication headers as key-value pairs
     */
    custom_headers?: { [key: string]: string } | null;

    /**
     * The URL path for the streamable HTTP server (e.g., 'example/mcp')
     */
    server_url?: string | null;
  }
}

export type ServerAddParams =
  | ServerAddParams.StdioServerConfig
  | ServerAddParams.SseServerConfig
  | ServerAddParams.StreamableHTTPServerConfig;

export declare namespace ServerAddParams {
  export interface StdioServerConfig {
    /**
     * The arguments to pass to the command
     */
    args: Array<string>;

    /**
     * The command to run (MCP 'local' client will run this command)
     */
    command: string;

    /**
     * The name of the server
     */
    server_name: string;

    /**
     * Environment variables to set
     */
    env?: { [key: string]: string } | null;

    type?: McpServerType;
  }

  export interface SseServerConfig {
    /**
     * The name of the server
     */
    server_name: string;

    /**
     * The URL of the server (MCP SSE client will connect to this URL)
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
     * Custom HTTP headers to include with SSE requests
     */
    custom_headers?: { [key: string]: string } | null;

    type?: McpServerType;
  }

  export interface StreamableHTTPServerConfig {
    /**
     * The name of the server
     */
    server_name: string;

    /**
     * The URL path for the streamable HTTP server (e.g., 'example/mcp')
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
     * Custom HTTP headers to include with streamable HTTP requests
     */
    custom_headers?: { [key: string]: string } | null;

    type?: McpServerType;
  }
}

export type ServerConnectParams =
  | ServerConnectParams.StdioServerConfig
  | ServerConnectParams.SseServerConfig
  | ServerConnectParams.StreamableHTTPServerConfig;

export declare namespace ServerConnectParams {
  export interface StdioServerConfig {
    /**
     * The arguments to pass to the command
     */
    args: Array<string>;

    /**
     * The command to run (MCP 'local' client will run this command)
     */
    command: string;

    /**
     * The name of the server
     */
    server_name: string;

    /**
     * Environment variables to set
     */
    env?: { [key: string]: string } | null;

    type?: McpServerType;
  }

  export interface SseServerConfig {
    /**
     * The name of the server
     */
    server_name: string;

    /**
     * The URL of the server (MCP SSE client will connect to this URL)
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
     * Custom HTTP headers to include with SSE requests
     */
    custom_headers?: { [key: string]: string } | null;

    type?: McpServerType;
  }

  export interface StreamableHTTPServerConfig {
    /**
     * The name of the server
     */
    server_name: string;

    /**
     * The URL path for the streamable HTTP server (e.g., 'example/mcp')
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
     * Custom HTTP headers to include with streamable HTTP requests
     */
    custom_headers?: { [key: string]: string } | null;

    type?: McpServerType;
  }
}

export interface ServerRegisterToolParams {
  mcp_server_name: string;
}

export interface ServerResyncParams {
  agent_id?: string | null;
}

export type ServerTestParams =
  | ServerTestParams.StdioServerConfig
  | ServerTestParams.SseServerConfig
  | ServerTestParams.StreamableHTTPServerConfig;

export declare namespace ServerTestParams {
  export interface StdioServerConfig {
    /**
     * The arguments to pass to the command
     */
    args: Array<string>;

    /**
     * The command to run (MCP 'local' client will run this command)
     */
    command: string;

    /**
     * The name of the server
     */
    server_name: string;

    /**
     * Environment variables to set
     */
    env?: { [key: string]: string } | null;

    type?: McpServerType;
  }

  export interface SseServerConfig {
    /**
     * The name of the server
     */
    server_name: string;

    /**
     * The URL of the server (MCP SSE client will connect to this URL)
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
     * Custom HTTP headers to include with SSE requests
     */
    custom_headers?: { [key: string]: string } | null;

    type?: McpServerType;
  }

  export interface StreamableHTTPServerConfig {
    /**
     * The name of the server
     */
    server_name: string;

    /**
     * The URL path for the streamable HTTP server (e.g., 'example/mcp')
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
     * Custom HTTP headers to include with streamable HTTP requests
     */
    custom_headers?: { [key: string]: string } | null;

    type?: McpServerType;
  }
}

Servers.Tools = Tools;

export declare namespace Servers {
  export {
    type McpServerType as McpServerType,
    type SseServerConfig as SseServerConfig,
    type StdioServerConfig as StdioServerConfig,
    type StreamableHTTPServerConfig as StreamableHTTPServerConfig,
    type ServerUpdateResponse as ServerUpdateResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerAddResponse as ServerAddResponse,
    type ServerConnectResponse as ServerConnectResponse,
    type ServerResyncResponse as ServerResyncResponse,
    type ServerTestResponse as ServerTestResponse,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerAddParams as ServerAddParams,
    type ServerConnectParams as ServerConnectParams,
    type ServerRegisterToolParams as ServerRegisterToolParams,
    type ServerResyncParams as ServerResyncParams,
    type ServerTestParams as ServerTestParams,
  };

  export {
    Tools as Tools,
    type ToolListResponse as ToolListResponse,
    type ToolExecuteResponse as ToolExecuteResponse,
    type ToolExecuteParams as ToolExecuteParams,
  };
}

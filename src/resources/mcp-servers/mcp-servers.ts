// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RefreshAPI from './refresh';
import { Refresh, RefreshTriggerParams, RefreshTriggerResponse } from './refresh';
import * as ToolsAPI from './tools';
import { ToolListResponse, ToolRetrieveParams, ToolRunParams, ToolRunResponse, Tools } from './tools';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class McpServers extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  refresh: RefreshAPI.Refresh = new RefreshAPI.Refresh(this._client);

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
   * Connect to an MCP server with support for OAuth via SSE. Returns a stream of
   * events handling authorization state and exchange if OAuth is required.
   */
  connect(mcpServerID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/v1/mcp-servers/connect/${mcpServerID}`, options);
  }

  /**
   * Update an existing MCP server configuration
   */
  modify(
    mcpServerID: string,
    body: McpServerModifyParams,
    options?: RequestOptions,
  ): APIPromise<McpServerModifyResponse> {
    return this._client.patch(path`/v1/mcp-servers/${mcpServerID}`, { body, ...options });
  }
}

/**
 * MCP server schema for agent files with remapped ID.
 */
export interface McpServerSchema {
  /**
   * Human-readable MCP server ID
   */
  id: string;

  server_name: string;

  server_type: string;

  metadata_?: { [key: string]: unknown } | null;

  server_url?: string | null;

  stdio_config?: { [key: string]: unknown } | null;
}

/**
 * A Stdio MCP server
 */
export type McpServerCreateResponse =
  | McpServerCreateResponse.StdioMcpServer
  | McpServerCreateResponse.SsemcpServer
  | McpServerCreateResponse.StreamableHttpmcpServer;

export namespace McpServerCreateResponse {
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
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  /**
   * An SSE MCP server
   */
  export interface SsemcpServer {
    /**
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  /**
   * A Streamable HTTP MCP server
   */
  export interface StreamableHttpmcpServer {
    /**
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }
}

/**
 * A Stdio MCP server
 */
export type McpServerRetrieveResponse =
  | McpServerRetrieveResponse.StdioMcpServer
  | McpServerRetrieveResponse.SsemcpServer
  | McpServerRetrieveResponse.StreamableHttpmcpServer;

export namespace McpServerRetrieveResponse {
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
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  /**
   * An SSE MCP server
   */
  export interface SsemcpServer {
    /**
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  /**
   * A Streamable HTTP MCP server
   */
  export interface StreamableHttpmcpServer {
    /**
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }
}

export type McpServerListResponse = Array<
  | McpServerListResponse.StdioMcpServer
  | McpServerListResponse.SsemcpServer
  | McpServerListResponse.StreamableHttpmcpServer
>;

export namespace McpServerListResponse {
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
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  /**
   * An SSE MCP server
   */
  export interface SsemcpServer {
    /**
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  /**
   * A Streamable HTTP MCP server
   */
  export interface StreamableHttpmcpServer {
    /**
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }
}

export type McpServerConnectResponse = unknown;

/**
 * A Stdio MCP server
 */
export type McpServerModifyResponse =
  | McpServerModifyResponse.StdioMcpServer
  | McpServerModifyResponse.SsemcpServer
  | McpServerModifyResponse.StreamableHttpmcpServer;

export namespace McpServerModifyResponse {
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
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  /**
   * An SSE MCP server
   */
  export interface SsemcpServer {
    /**
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  /**
   * A Streamable HTTP MCP server
   */
  export interface StreamableHttpmcpServer {
    /**
     * The name of the server
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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }
}

export type McpServerCreateParams =
  | McpServerCreateParams.CreateStdioMcpServer
  | McpServerCreateParams.CreateSsemcpServer
  | McpServerCreateParams.CreateStreamableHttpmcpServer;

export declare namespace McpServerCreateParams {
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
     * The name of the server
     */
    server_name: string;

    /**
     * Environment variables to set
     */
    env?: { [key: string]: string } | null;

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  export interface CreateSsemcpServer {
    /**
     * The name of the server
     */
    server_name: string;

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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }

  export interface CreateStreamableHttpmcpServer {
    /**
     * The name of the server
     */
    server_name: string;

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

    type?: 'sse' | 'stdio' | 'streamable_http';
  }
}

export type McpServerModifyParams =
  | McpServerModifyParams.LettaSchemasMcpServerUpdateStdioMcpServer
  | McpServerModifyParams.LettaSchemasMcpServerUpdateSsemcpServer
  | McpServerModifyParams.LettaSchemasMcpServerUpdateStreamableHttpmcpServer;

export declare namespace McpServerModifyParams {
  export interface LettaSchemasMcpServerUpdateStdioMcpServer {
    /**
     * The arguments to pass to the command
     */
    args?: Array<string> | null;

    /**
     * The command to run the MCP server
     */
    command?: string | null;

    /**
     * Environment variables to set
     */
    env?: { [key: string]: string } | null;

    /**
     * The name of the MCP server
     */
    server_name?: string | null;
  }

  export interface LettaSchemasMcpServerUpdateSsemcpServer {
    /**
     * The authentication token (internal)
     */
    token?: string | null;

    /**
     * The name of the authentication header (e.g., 'Authorization')
     */
    auth_header?: string | null;

    /**
     * The authentication token or API key value
     */
    auth_token?: string | null;

    /**
     * Custom headers to send with requests
     */
    custom_headers?: { [key: string]: string } | null;

    /**
     * The name of the MCP server
     */
    server_name?: string | null;

    /**
     * The URL of the SSE MCP server
     */
    server_url?: string | null;
  }

  export interface LettaSchemasMcpServerUpdateStreamableHttpmcpServer {
    /**
     * The authentication token (internal)
     */
    token?: string | null;

    /**
     * The name of the authentication header (e.g., 'Authorization')
     */
    auth_header?: string | null;

    /**
     * The authentication token or API key value
     */
    auth_token?: string | null;

    /**
     * Custom headers to send with requests
     */
    custom_headers?: { [key: string]: string } | null;

    /**
     * The name of the MCP server
     */
    server_name?: string | null;

    /**
     * The URL of the Streamable HTTP MCP server
     */
    server_url?: string | null;
  }
}

McpServers.Tools = Tools;
McpServers.Refresh = Refresh;

export declare namespace McpServers {
  export {
    type McpServerSchema as McpServerSchema,
    type McpServerCreateResponse as McpServerCreateResponse,
    type McpServerRetrieveResponse as McpServerRetrieveResponse,
    type McpServerListResponse as McpServerListResponse,
    type McpServerConnectResponse as McpServerConnectResponse,
    type McpServerModifyResponse as McpServerModifyResponse,
    type McpServerCreateParams as McpServerCreateParams,
    type McpServerModifyParams as McpServerModifyParams,
  };

  export {
    Tools as Tools,
    type ToolListResponse as ToolListResponse,
    type ToolRunResponse as ToolRunResponse,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolRunParams as ToolRunParams,
  };

  export {
    Refresh as Refresh,
    type RefreshTriggerResponse as RefreshTriggerResponse,
    type RefreshTriggerParams as RefreshTriggerParams,
  };
}

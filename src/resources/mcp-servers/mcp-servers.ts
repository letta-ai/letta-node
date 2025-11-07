// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../agents/agents';
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
   * The name of the server
   */
  server_name: string;

  /**
   * Environment variables to set
   */
  env?: { [key: string]: string } | null;

  type?: 'sse' | 'stdio' | 'streamable_http';
}

/**
 * Create a new Streamable HTTP MCP server
 */
export interface CreateStreamableHTTPMcpServer {
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

/**
 * Request to execute an MCP tool by IDs.
 */
export interface McpToolExecuteRequest {
  /**
   * Arguments to pass to the MCP tool
   */
  args?: { [key: string]: unknown };
}

/**
 * An SSE MCP server
 */
export interface SseMcpServer {
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
 * A Streamable HTTP MCP server
 */
export interface StreamableHTTPMcpServer {
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

export interface ToolExecutionResult {
  /**
   * The status of the tool execution and return object
   */
  status: 'success' | 'error';

  /**
   * Representation of an agent's state. This is the state of the agent at a given
   * time, and is persisted in the DB backend. The state has all the information
   * needed to recreate a persisted agent.
   *
   * Parameters: id (str): The unique identifier of the agent. name (str): The name
   * of the agent (must be unique to the user). created_at (datetime): The datetime
   * the agent was created. message_ids (List[str]): The ids of the messages in the
   * agent's in-context memory. memory (Memory): The in-context memory of the agent.
   * tools (List[str]): The tools used by the agent. This includes any memory editing
   * functions specified in `memory`. system (str): The system prompt used by the
   * agent. llm_config (LLMConfig): The LLM configuration used by the agent.
   * embedding_config (EmbeddingConfig): The embedding configuration used by the
   * agent.
   */
  agent_state?: AgentsAPI.AgentState | null;

  /**
   * The function return object
   */
  func_return?: unknown;

  /**
   * The fingerprint of the config for the sandbox
   */
  sandbox_config_fingerprint?: string | null;

  /**
   * Captured stderr from the function invocation
   */
  stderr?: Array<string> | null;

  /**
   * Captured stdout (prints, logs) from function invocation
   */
  stdout?: Array<string> | null;
}

/**
 * Update schema for SSE MCP server - all fields optional
 */
export interface UpdateSseMcpServer {
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

/**
 * Update schema for Stdio MCP server - all fields optional
 */
export interface UpdateStdioMcpServer {
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

/**
 * Update schema for Streamable HTTP MCP server - all fields optional
 */
export interface UpdateStreamableHTTPMcpServer {
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

/**
 * A Stdio MCP server
 */
export type McpServerCreateResponse = StdioMcpServer | SseMcpServer | StreamableHTTPMcpServer;

/**
 * A Stdio MCP server
 */
export type McpServerRetrieveResponse = StdioMcpServer | SseMcpServer | StreamableHTTPMcpServer;

export type McpServerListResponse = Array<StdioMcpServer | SseMcpServer | StreamableHTTPMcpServer>;

export type McpServerConnectResponse = unknown;

/**
 * A Stdio MCP server
 */
export type McpServerModifyResponse = StdioMcpServer | SseMcpServer | StreamableHTTPMcpServer;

export type McpServerRefreshResponse = unknown;

export type McpServerCreateParams =
  | McpServerCreateParams.CreateStdioMcpServer
  | McpServerCreateParams.CreateSseMcpServer
  | McpServerCreateParams.CreateStreamableHTTPMcpServer;

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

  export interface CreateSseMcpServer {
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

  export interface CreateStreamableHTTPMcpServer {
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
  | McpServerModifyParams.UpdateStdioMcpServer
  | McpServerModifyParams.UpdateSseMcpServer
  | McpServerModifyParams.UpdateStreamableHTTPMcpServer;

export declare namespace McpServerModifyParams {
  export interface UpdateStdioMcpServer {
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

  export interface UpdateSseMcpServer {
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

  export interface UpdateStreamableHTTPMcpServer {
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

export interface McpServerRefreshParams {
  agent_id?: string | null;
}

McpServers.Tools = Tools;

export declare namespace McpServers {
  export {
    type CreateSseMcpServer as CreateSseMcpServer,
    type CreateStdioMcpServer as CreateStdioMcpServer,
    type CreateStreamableHTTPMcpServer as CreateStreamableHTTPMcpServer,
    type McpToolExecuteRequest as McpToolExecuteRequest,
    type SseMcpServer as SseMcpServer,
    type StdioMcpServer as StdioMcpServer,
    type StreamableHTTPMcpServer as StreamableHTTPMcpServer,
    type ToolExecutionResult as ToolExecutionResult,
    type UpdateSseMcpServer as UpdateSseMcpServer,
    type UpdateStdioMcpServer as UpdateStdioMcpServer,
    type UpdateStreamableHTTPMcpServer as UpdateStreamableHTTPMcpServer,
    type McpServerCreateResponse as McpServerCreateResponse,
    type McpServerRetrieveResponse as McpServerRetrieveResponse,
    type McpServerListResponse as McpServerListResponse,
    type McpServerConnectResponse as McpServerConnectResponse,
    type McpServerModifyResponse as McpServerModifyResponse,
    type McpServerRefreshResponse as McpServerRefreshResponse,
    type McpServerCreateParams as McpServerCreateParams,
    type McpServerModifyParams as McpServerModifyParams,
    type McpServerRefreshParams as McpServerRefreshParams,
  };

  export {
    Tools as Tools,
    type ToolListResponse as ToolListResponse,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolRunParams as ToolRunParams,
  };
}

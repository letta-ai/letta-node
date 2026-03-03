// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ToolsAPI from './tools';
import { ToolListParams, ToolListResponse, ToolRetrieveParams, ToolRunParams, Tools } from './tools';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class McpServers extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);

  /**
   * Add a new MCP server to the Letta MCP server config
   */
  create(params: McpServerCreateParams, options?: RequestOptions): APIPromise<McpServerCreateResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post('/v1/mcp-servers/', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Get a specific MCP server
   */
  retrieve(
    mcpServerID: string,
    params: McpServerRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<McpServerRetrieveResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.get(path`/v1/mcp-servers/${mcpServerID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Update an existing MCP server configuration
   */
  update(
    mcpServerID: string,
    params: McpServerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<McpServerUpdateResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.patch(path`/v1/mcp-servers/${mcpServerID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Get a list of all configured MCP servers
   */
  list(
    params: McpServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<McpServerListResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.get('/v1/mcp-servers/', {
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete an MCP server by its ID
   */
  delete(
    mcpServerID: string,
    params: McpServerDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.delete(path`/v1/mcp-servers/${mcpServerID}`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: '*/*',
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
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
    const {
      agent_id,
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.patch(path`/v1/mcp-servers/${mcpServerID}/refresh`, {
      query: { agent_id },
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
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
   * Body param: The MCP server configuration (Stdio, SSE, or Streamable HTTP)
   */
  config: CreateStdioMcpServer | CreateSseMcpServer | CreateStreamableHTTPMcpServer;

  /**
   * Body param: The name of the MCP server
   */
  server_name: string;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export interface McpServerRetrieveParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export interface McpServerUpdateParams {
  /**
   * Body param: The MCP server configuration updates (Stdio, SSE, or Streamable
   * HTTP)
   */
  config: UpdateStdioMcpServer | UpdateSseMcpServer | UpdateStreamableHTTPMcpServer;

  /**
   * Body param: The name of the MCP server
   */
  server_name?: string | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export interface McpServerListParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export interface McpServerDeleteParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export interface McpServerRefreshParams {
  /**
   * Query param
   */
  agent_id?: string | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
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
    type McpServerRetrieveParams as McpServerRetrieveParams,
    type McpServerUpdateParams as McpServerUpdateParams,
    type McpServerListParams as McpServerListParams,
    type McpServerDeleteParams as McpServerDeleteParams,
    type McpServerRefreshParams as McpServerRefreshParams,
  };

  export {
    Tools as Tools,
    type ToolListResponse as ToolListResponse,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolListParams as ToolListParams,
    type ToolRunParams as ToolRunParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Get a list of all tools for a specific MCP server
   */
  list(mcpServerName: string, options?: RequestOptions): APIPromise<ToolListResponse> {
    return this._client.get(path`/v1/tools/mcp/servers/${mcpServerName}/tools`, options);
  }

  /**
   * Execute a specific MCP tool from a configured server. Returns the tool execution
   * result.
   */
  execute(toolName: string, params: ToolExecuteParams, options?: RequestOptions): APIPromise<unknown> {
    const { mcp_server_name, ...body } = params;
    return this._client.post(path`/v1/tools/mcp/servers/${mcp_server_name}/tools/${toolName}/execute`, {
      body,
      ...options,
    });
  }
}

export type ToolListResponse = Array<ToolListResponse.ToolListResponseItem>;

export namespace ToolListResponse {
  /**
   * A simple wrapper around MCP's tool definition (to avoid conflict with our own)
   */
  export interface ToolListResponseItem {
    inputSchema: { [key: string]: unknown };

    name: string;

    _meta?: { [key: string]: unknown } | null;

    /**
     * Additional properties describing a Tool to clients.
     *
     * NOTE: all properties in ToolAnnotations are **hints**. They are not guaranteed
     * to provide a faithful description of tool behavior (including descriptive
     * properties like `title`).
     *
     * Clients should never make tool use decisions based on ToolAnnotations received
     * from untrusted servers.
     */
    annotations?: ToolListResponseItem.Annotations | null;

    description?: string | null;

    /**
     * Health status for an MCP tool's schema.
     */
    health?: ToolListResponseItem.Health | null;

    outputSchema?: { [key: string]: unknown } | null;

    title?: string | null;

    [k: string]: unknown;
  }

  export namespace ToolListResponseItem {
    /**
     * Additional properties describing a Tool to clients.
     *
     * NOTE: all properties in ToolAnnotations are **hints**. They are not guaranteed
     * to provide a faithful description of tool behavior (including descriptive
     * properties like `title`).
     *
     * Clients should never make tool use decisions based on ToolAnnotations received
     * from untrusted servers.
     */
    export interface Annotations {
      destructiveHint?: boolean | null;

      idempotentHint?: boolean | null;

      openWorldHint?: boolean | null;

      readOnlyHint?: boolean | null;

      title?: string | null;

      [k: string]: unknown;
    }

    /**
     * Health status for an MCP tool's schema.
     */
    export interface Health {
      /**
       * Schema health status: STRICT_COMPLIANT, NON_STRICT_ONLY, or INVALID
       */
      status: string;

      /**
       * List of reasons for the health status
       */
      reasons?: Array<string>;
    }
  }
}

export type ToolExecuteResponse = unknown;

export interface ToolExecuteParams {
  /**
   * Path param:
   */
  mcp_server_name: string;

  /**
   * Body param: Arguments to pass to the MCP tool
   */
  args?: { [key: string]: unknown };
}

export declare namespace Tools {
  export {
    type ToolListResponse as ToolListResponse,
    type ToolExecuteResponse as ToolExecuteResponse,
    type ToolExecuteParams as ToolExecuteParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ToolsAPI from '../tools';
import * as AgentsToolsAPI from '../agents/tools';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Get a specific MCP tool by its ID
   */
  retrieve(toolID: string, params: ToolRetrieveParams, options?: RequestOptions): APIPromise<ToolsAPI.Tool> {
    const { mcp_server_id } = params;
    return this._client.get(path`/v1/mcp-servers/${mcp_server_id}/tools/${toolID}`, options);
  }

  /**
   * Get a list of all tools for a specific MCP server
   */
  list(mcpServerID: string, options?: RequestOptions): APIPromise<ToolListResponse> {
    return this._client.get(path`/v1/mcp-servers/${mcpServerID}/tools`, options);
  }

  /**
   * Execute a specific MCP tool
   *
   * The request body should contain the tool arguments in the ToolExecuteRequest
   * format.
   */
  run(
    toolID: string,
    params: ToolRunParams,
    options?: RequestOptions,
  ): APIPromise<AgentsToolsAPI.ToolExecutionResult> {
    const { mcp_server_id, ...body } = params;
    return this._client.post(path`/v1/mcp-servers/${mcp_server_id}/tools/${toolID}/run`, {
      body,
      ...options,
    });
  }
}

export type ToolListResponse = Array<ToolsAPI.Tool>;

export interface ToolRetrieveParams {
  mcp_server_id: string;
}

export interface ToolRunParams {
  /**
   * Path param:
   */
  mcp_server_id: string;

  /**
   * Body param: Arguments to pass to the tool
   */
  args?: { [key: string]: unknown };
}

export declare namespace Tools {
  export {
    type ToolListResponse as ToolListResponse,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolRunParams as ToolRunParams,
  };
}

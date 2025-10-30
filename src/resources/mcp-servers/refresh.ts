// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Refresh extends APIResource {
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
  trigger(
    mcpServerID: string,
    params: RefreshTriggerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { agent_id } = params ?? {};
    return this._client.patch(path`/v1/mcp-servers/${mcpServerID}/refresh`, {
      query: { agent_id },
      ...options,
    });
  }
}

export type RefreshTriggerResponse = unknown;

export interface RefreshTriggerParams {
  agent_id?: string | null;
}

export declare namespace Refresh {
  export {
    type RefreshTriggerResponse as RefreshTriggerResponse,
    type RefreshTriggerParams as RefreshTriggerParams,
  };
}

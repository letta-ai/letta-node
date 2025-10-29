// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Get all agent IDs that have the specified folder attached.
   */
  list(
    folderID: string,
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get(path`/v1/folders/${folderID}/agents`, { query, ...options });
  }
}

export type AgentListResponse = Array<string>;

export interface AgentListParams {
  /**
   * Agent ID cursor for pagination. Returns agents that come after this agent ID in
   * the specified sort order
   */
  after?: string | null;

  /**
   * Agent ID cursor for pagination. Returns agents that come before this agent ID in
   * the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of agents to return
   */
  limit?: number | null;

  /**
   * Sort order for agents by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export declare namespace Agents {
  export { type AgentListResponse as AgentListResponse, type AgentListParams as AgentListParams };
}

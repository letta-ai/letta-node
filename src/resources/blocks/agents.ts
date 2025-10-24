// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../agents/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Retrieves all agents associated with the specified block. Raises a 404 if the
   * block does not exist.
   */
  list(
    blockID: string,
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get(path`/v1/blocks/${blockID}/agents`, { query, ...options });
  }
}

export type AgentListResponse = Array<AgentsAPI.AgentState>;

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
   * Specify which relational fields to include in the response. No relationships are
   * included by default.
   */
  include?: Array<
    | 'agent.blocks'
    | 'agent.identities'
    | 'agent.managed_group'
    | 'agent.secrets'
    | 'agent.sources'
    | 'agent.tags'
    | 'agent.tools'
  >;

  /**
   * Specify which relational fields (e.g., 'tools', 'sources', 'memory') to include
   * in the response. If not provided, all relationships are loaded by default. Using
   * this can optimize performance by reducing unnecessary joins.This is a legacy
   * parameter, and no longer supported after 1.0.0 SDK versions.
   */
  include_relationships?: Array<string> | null;

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

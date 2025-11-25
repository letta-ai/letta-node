// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../agents/agents';
import { AgentStatesArrayPage } from '../agents/agents';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<AgentStatesArrayPage, AgentsAPI.AgentState> {
    return this._client.getAPIList(path`/v1/blocks/${blockID}/agents`, ArrayPage<AgentsAPI.AgentState>, {
      query,
      ...options,
    });
  }
}

export interface AgentListParams extends ArrayPageParams {
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
   * @deprecated Specify which relational fields (e.g., 'tools', 'sources', 'memory')
   * to include in the response. If not provided, all relationships are loaded by
   * default. Using this can optimize performance by reducing unnecessary joins.This
   * is a legacy parameter, and no longer supported after 1.0.0 SDK versions.
   */
  include_relationships?: Array<string> | null;
}

export declare namespace Agents {
  export { type AgentListParams as AgentListParams };
}

export { type AgentStatesArrayPage };

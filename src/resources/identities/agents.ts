// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from '../agents/agents';
import { AgentStatesArrayPage } from '../agents/agents';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Get all agents associated with the specified identity.
   */
  list(
    identityID: string,
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AgentStatesArrayPage, AgentsAPI.AgentState> {
    return this._client.getAPIList(
      path`/v1/identities/${identityID}/agents`,
      ArrayPage<AgentsAPI.AgentState>,
      { query, ...options },
    );
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
}

export declare namespace Agents {
  export { type AgentListParams as AgentListParams };
}

export { type AgentStatesArrayPage };

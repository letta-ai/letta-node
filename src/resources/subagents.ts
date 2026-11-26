// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Subagents extends APIResource {
  /**
   * Create a subagent record
   */
  create(body: SubagentCreateParams, options?: RequestOptions): APIPromise<Subagent> {
    return this._client.post('/v1/subagents', { body, ...options });
  }

  /**
   * Update a subagent record
   */
  update(
    subagentID: string,
    body: SubagentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Subagent> {
    return this._client.patch(path`/v1/subagents/${subagentID}`, { body, ...options });
  }

  /**
   * Returns subagents ordered by most recently updated, with descending subagent ID
   * breaking ties.
   */
  list(
    query: SubagentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubagentListResponse> {
    return this._client.get('/v1/subagents', { query, ...options });
  }
}

export interface Subagent {
  agent_id: string | null;

  archived: boolean;

  computer: string | null;

  conversation_id: string | null;

  created_at: string;

  description: string;

  fork_context: boolean;

  harness: string;

  mcp_config: { [key: string]: unknown } | null;

  model_config: { [key: string]: unknown } | null;

  parent_agent_id: string;

  parent_conversation_id: string;

  prompt: string | null;

  repositories: Array<string> | null;

  sandbox_size: string | null;

  status: 'running' | 'idle' | 'completed' | 'failed' | 'stopped';

  subagent_id: string;

  subagent_type: string | null;

  updated_at: string;

  worker_session_id: string | null;
}

export type SubagentListResponse = Array<Subagent>;

export interface SubagentCreateParams {
  description: string;

  harness: string;

  parent_conversation_id: string;

  agent_id?: string | null;

  archived?: boolean;

  computer?: string | null;

  conversation_id?: string | null;

  fork_context?: boolean;

  mcp_config?: { [key: string]: unknown } | null;

  model_config?: { [key: string]: unknown } | null;

  parent_agent_id?: string;

  prompt?: string | null;

  repositories?: Array<string> | null;

  sandbox_size?: string | null;

  status?: 'running' | 'idle' | 'completed' | 'failed' | 'stopped';

  subagent_type?: string | null;

  worker_session_id?: string | null;
}

export interface SubagentUpdateParams {
  agent_id?: string | null;

  archived?: boolean;

  conversation_id?: string | null;

  status?: 'running' | 'idle' | 'completed' | 'failed' | 'stopped';

  worker_session_id?: string | null;
}

export interface SubagentListParams {
  after?: string;

  archived?: 'true' | 'false';

  limit?: number;

  parent_agent_id?: string;

  parent_conversation_id?: string;

  status?: 'running' | 'idle' | 'completed' | 'failed' | 'stopped';
}

export declare namespace Subagents {
  export {
    type Subagent as Subagent,
    type SubagentListResponse as SubagentListResponse,
    type SubagentCreateParams as SubagentCreateParams,
    type SubagentUpdateParams as SubagentUpdateParams,
    type SubagentListParams as SubagentListParams,
  };
}

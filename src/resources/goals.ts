// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Goals extends APIResource {
  /**
   * Supply agent_id for agent-wide records or conversation_id for
   * conversation-scoped records. With both, the conversation must belong to the
   * agent. Use agent_id with conversation_id=default for the virtual default
   * conversation.
   */
  create(body: GoalCreateParams, options?: RequestOptions): APIPromise<Goal> {
    return this._client.post('/v1/goals', { body, ...options });
  }

  /**
   * Get a goal
   */
  retrieve(goalID: string, options?: RequestOptions): APIPromise<Goal> {
    return this._client.get(path`/v1/goals/${goalID}`, options);
  }

  /**
   * Update a goal
   */
  update(
    goalID: string,
    body: GoalUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Goal> {
    return this._client.patch(path`/v1/goals/${goalID}`, { body, ...options });
  }

  /**
   * Supply agent_id for agent-wide records or conversation_id for
   * conversation-scoped records. With both, the conversation must belong to the
   * agent. Use agent_id with conversation_id=default for the virtual default
   * conversation.
   */
  list(
    query: GoalListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GoalListResponse> {
    return this._client.get('/v1/goals', { query, ...options });
  }

  /**
   * Delete a goal
   */
  delete(goalID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/goals/${goalID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Goal {
  agent_id: string | null;

  conversation_id: string | null;

  created_at: string;

  description: string;

  goal_id: string;

  status: 'active' | 'completed' | 'cancelled';

  updated_at: string;
}

export type GoalListResponse = Array<Goal>;

export interface GoalCreateParams {
  description: string;

  agent_id?: string | null;

  conversation_id?: string | null;

  status?: 'active' | 'completed' | 'cancelled';
}

export interface GoalUpdateParams {
  description?: string;

  status?: 'active' | 'completed' | 'cancelled';
}

export interface GoalListParams {
  after?: string;

  agent_id?: string | null;

  conversation_id?: string | null;

  limit?: number;

  status?: 'active' | 'completed' | 'cancelled';
}

export declare namespace Goals {
  export {
    type Goal as Goal,
    type GoalListResponse as GoalListResponse,
    type GoalCreateParams as GoalCreateParams,
    type GoalUpdateParams as GoalUpdateParams,
    type GoalListParams as GoalListParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as AgentsAPI from './agents';

export class Tools extends APIResource {
  /**
   * Get tools from an existing agent
   */
  list(
    agentId: string,
    params?: ToolListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolListResponse>;
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ToolListResponse>;
  list(
    agentId: string,
    params: ToolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolListResponse> {
    if (isRequestOptions(params)) {
      return this.list(agentId, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/agents/${agentId}/tools`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Add tools to an exsiting agent
   */
  add(
    agentId: string,
    toolId: string,
    params?: ToolAddParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Agentstate>;
  add(agentId: string, toolId: string, options?: Core.RequestOptions): Core.APIPromise<AgentsAPI.Agentstate>;
  add(
    agentId: string,
    toolId: string,
    params: ToolAddParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Agentstate> {
    if (isRequestOptions(params)) {
      return this.add(agentId, toolId, {}, params);
    }
    const { user_id } = params;
    return this._client.patch(`/v1/agents/${agentId}/add-tool/${toolId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Add tools to an exsiting agent
   */
  remove(
    agentId: string,
    toolId: string,
    params?: ToolRemoveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Agentstate>;
  remove(
    agentId: string,
    toolId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Agentstate>;
  remove(
    agentId: string,
    toolId: string,
    params: ToolRemoveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentsAPI.Agentstate> {
    if (isRequestOptions(params)) {
      return this.remove(agentId, toolId, {}, params);
    }
    const { user_id } = params;
    return this._client.patch(`/v1/agents/${agentId}/remove-tool/${toolId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export type ToolListResponse = Array<Shared.Tool>;

export interface ToolListParams {
  user_id?: string;
}

export interface ToolAddParams {
  user_id?: string;
}

export interface ToolRemoveParams {
  user_id?: string;
}

export declare namespace Tools {
  export {
    type ToolListResponse as ToolListResponse,
    type ToolListParams as ToolListParams,
    type ToolAddParams as ToolAddParams,
    type ToolRemoveParams as ToolRemoveParams,
  };
}

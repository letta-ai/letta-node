// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SourcesAPI from '../sources/sources';

export class Archival extends APIResource {
  /**
   * Insert a memory into an agent's archival memory store.
   */
  create(
    agentId: string,
    params: ArchivalCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArchivalCreateResponse> {
    const { user_id, ...body } = params;
    return this._client.post(`/v1/agents/${agentId}/archival`, {
      body,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Retrieve the memories in an agent's archival memory store (paginated query).
   */
  list(
    agentId: string,
    params?: ArchivalListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArchivalListResponse>;
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ArchivalListResponse>;
  list(
    agentId: string,
    params: ArchivalListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArchivalListResponse> {
    if (isRequestOptions(params)) {
      return this.list(agentId, {}, params);
    }
    const { user_id, ...query } = params;
    return this._client.get(`/v1/agents/${agentId}/archival`, {
      query,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Delete a memory from an agent's archival memory store.
   */
  delete(
    agentId: string,
    memoryId: string,
    params?: ArchivalDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  delete(agentId: string, memoryId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  delete(
    agentId: string,
    memoryId: string,
    params: ArchivalDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(params)) {
      return this.delete(agentId, memoryId, {}, params);
    }
    const { user_id } = params;
    return this._client.delete(`/v1/agents/${agentId}/archival/${memoryId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export type ArchivalCreateResponse = Array<SourcesAPI.Passage>;

export type ArchivalListResponse = Array<SourcesAPI.Passage>;

export type ArchivalDeleteResponse = unknown;

export interface ArchivalCreateParams {
  /**
   * Body param: Text to write to archival memory.
   */
  text: string;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface ArchivalListParams {
  /**
   * Query param: Unique ID of the memory to start the query range at.
   */
  after?: number | null;

  /**
   * Query param: Unique ID of the memory to end the query range at.
   */
  before?: number | null;

  /**
   * Query param: How many results to include in the response.
   */
  limit?: number | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface ArchivalDeleteParams {
  user_id?: string;
}

export declare namespace Archival {
  export {
    type ArchivalCreateResponse as ArchivalCreateResponse,
    type ArchivalListResponse as ArchivalListResponse,
    type ArchivalDeleteResponse as ArchivalDeleteResponse,
    type ArchivalCreateParams as ArchivalCreateParams,
    type ArchivalListParams as ArchivalListParams,
    type ArchivalDeleteParams as ArchivalDeleteParams,
  };
}

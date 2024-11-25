// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as PassagesAPI from '../sources/passages';

export class Archival extends APIResource {
  /**
   * Insert a memory into an agent's archival memory store.
   */
  create(
    agentId: string,
    body: ArchivalCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArchivalCreateResponse> {
    return this._client.post(`/v1/agents/${agentId}/archival`, { body, ...options });
  }

  /**
   * Retrieve the memories in an agent's archival memory store (paginated query).
   */
  retrieve(
    agentId: string,
    query?: ArchivalRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArchivalRetrieveResponse>;
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ArchivalRetrieveResponse>;
  retrieve(
    agentId: string,
    query: ArchivalRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArchivalRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(agentId, {}, query);
    }
    return this._client.get(`/v1/agents/${agentId}/archival`, { query, ...options });
  }

  /**
   * Delete a memory from an agent's archival memory store.
   */
  delete(agentId: string, memoryId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/agents/${agentId}/archival/${memoryId}`, options);
  }
}

export type ArchivalCreateResponse = Array<PassagesAPI.Passage>;

export type ArchivalRetrieveResponse = Array<PassagesAPI.Passage>;

export type ArchivalDeleteResponse = unknown;

export interface ArchivalCreateParams {
  /**
   * Text to write to archival memory.
   */
  text: string;
}

export interface ArchivalRetrieveParams {
  /**
   * Unique ID of the memory to start the query range at.
   */
  after?: number | null;

  /**
   * Unique ID of the memory to end the query range at.
   */
  before?: number | null;

  /**
   * How many results to include in the response.
   */
  limit?: number | null;
}

export declare namespace Archival {
  export {
    type ArchivalCreateResponse as ArchivalCreateResponse,
    type ArchivalRetrieveResponse as ArchivalRetrieveResponse,
    type ArchivalDeleteResponse as ArchivalDeleteResponse,
    type ArchivalCreateParams as ArchivalCreateParams,
    type ArchivalRetrieveParams as ArchivalRetrieveParams,
  };
}

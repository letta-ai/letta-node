// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Keys extends APIResource {
  /**
   * Create a new API key for a user
   */
  create(body: KeyCreateParams, options?: Core.RequestOptions): Core.APIPromise<APIKey> {
    return this._client.post('/v1/admin/users/keys', { body, ...options });
  }

  /**
   * Get a list of all API keys for a user
   */
  list(query: KeyListParams, options?: Core.RequestOptions): Core.APIPromise<KeyListResponse> {
    return this._client.get('/v1/admin/users/keys', { query, ...options });
  }

  /**
   * Delete Api Key
   */
  delete(params: KeyDeleteParams, options?: Core.RequestOptions): Core.APIPromise<APIKey> {
    const { api_key } = params;
    return this._client.delete('/v1/admin/users/keys', { query: { api_key }, ...options });
  }
}

export interface APIKey {
  /**
   * The key value.
   */
  key: string;

  /**
   * Name of the token.
   */
  name: string;

  /**
   * The unique identifier of the user associated with the token.
   */
  user_id: string;

  /**
   * The human-friendly ID of the Sk
   */
  id?: string;
}

export type KeyListResponse = Array<APIKey>;

export interface KeyCreateParams {
  /**
   * The unique identifier of the user associated with the token.
   */
  user_id: string;

  /**
   * Name of the token.
   */
  name?: string | null;
}

export interface KeyListParams {
  /**
   * The unique identifier of the user.
   */
  user_id: string;
}

export interface KeyDeleteParams {
  /**
   * The API key to be deleted.
   */
  api_key: string;
}

export declare namespace Keys {
  export {
    type APIKey as APIKey,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
    type KeyListParams as KeyListParams,
    type KeyDeleteParams as KeyDeleteParams,
  };
}

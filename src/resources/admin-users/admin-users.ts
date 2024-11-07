// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as KeysAPI from './keys';
import { APIKey, KeyCreateParams, KeyDeleteParams, KeyListParams, KeyListResponse, Keys } from './keys';

export class AdminUsers extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);

  /**
   * Create a new user in the database
   */
  create(body: AdminUserCreateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.post('/v1/admin/users/', { body, ...options });
  }

  /**
   * Update a user in the database
   */
  update(body: AdminUserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.put('/v1/admin/users/', { body, ...options });
  }

  /**
   * Get a list of all users in the database
   */
  list(query?: AdminUserListParams, options?: Core.RequestOptions): Core.APIPromise<AdminUserListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AdminUserListResponse>;
  list(
    query: AdminUserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminUserListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/admin/users/', { query, ...options });
  }

  /**
   * Delete User
   */
  delete(params: AdminUserDeleteParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    const { user_id } = params;
    return this._client.delete('/v1/admin/users/', { query: { user_id }, ...options });
  }
}

/**
 * Representation of a user.
 *
 * Parameters: id (str): The unique identifier of the user. name (str): The name of
 * the user. created_at (datetime): The creation date of the user.
 */
export interface User {
  /**
   * The name of the user.
   */
  name: string;

  /**
   * The human-friendly ID of the User
   */
  id?: string;

  /**
   * The creation date of the user.
   */
  created_at?: string | null;

  /**
   * Whether this user is deleted or not.
   */
  is_deleted?: boolean;

  /**
   * The organization id of the user
   */
  organization_id?: string | null;

  /**
   * The update date of the user.
   */
  updated_at?: string | null;
}

export type AdminUserListResponse = Array<User>;

export interface AdminUserCreateParams {
  /**
   * The name of the user.
   */
  name: string;

  /**
   * The organization id of the user.
   */
  organization_id: string;
}

export interface AdminUserUpdateParams {
  /**
   * The id of the user to update.
   */
  id: string;

  /**
   * The new name of the user.
   */
  name?: string | null;

  /**
   * The new organization id of the user.
   */
  organization_id?: string | null;
}

export interface AdminUserListParams {
  cursor?: string | null;

  limit?: number | null;
}

export interface AdminUserDeleteParams {
  /**
   * The user_id key to be deleted.
   */
  user_id: string;
}

AdminUsers.Keys = Keys;

export declare namespace AdminUsers {
  export {
    type User as User,
    type AdminUserListResponse as AdminUserListResponse,
    type AdminUserCreateParams as AdminUserCreateParams,
    type AdminUserUpdateParams as AdminUserUpdateParams,
    type AdminUserListParams as AdminUserListParams,
    type AdminUserDeleteParams as AdminUserDeleteParams,
  };

  export {
    Keys as Keys,
    type APIKey as APIKey,
    type KeyListResponse as KeyListResponse,
    type KeyCreateParams as KeyCreateParams,
    type KeyListParams as KeyListParams,
    type KeyDeleteParams as KeyDeleteParams,
  };
}

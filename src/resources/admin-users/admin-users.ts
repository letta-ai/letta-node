// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as KeysAPI from './keys';
import { APIKey, Keys } from './keys';

export class AdminUsers extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
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

AdminUsers.Keys = Keys;

export declare namespace AdminUsers {
  export { type User as User };

  export { Keys as Keys, type APIKey as APIKey };
}

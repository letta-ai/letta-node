// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Auth extends APIResource {
  /**
   * Authenticates the user and sends response with User related data.
   *
   * Currently, this is a placeholder that simply returns a UUID placeholder
   */
  authenticate(body: AuthAuthenticateParams, options?: Core.RequestOptions): Core.APIPromise<AuthResponse> {
    return this._client.post('/v1/auth', { body, ...options });
  }
}

export interface AuthResponse {
  /**
   * UUID of the user
   */
  uuid: string;

  /**
   * Whether the user is an admin
   */
  is_admin?: boolean | null;
}

export interface AuthAuthenticateParams {
  /**
   * Admin password provided when starting the Letta server
   */
  password?: string;
}

export declare namespace Auth {
  export { type AuthResponse as AuthResponse, type AuthAuthenticateParams as AuthAuthenticateParams };
}

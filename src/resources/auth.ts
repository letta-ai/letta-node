// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Auth extends APIResource {}

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

export declare namespace Auth {
  export { type AuthResponse as AuthResponse };
}

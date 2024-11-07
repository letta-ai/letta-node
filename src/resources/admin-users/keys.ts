// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class Keys extends APIResource {}

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

export declare namespace Keys {
  export { type APIKey as APIKey };
}

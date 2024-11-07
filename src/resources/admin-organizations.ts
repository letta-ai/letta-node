// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class AdminOrganizations extends APIResource {}

export interface Organization {
  /**
   * The human-friendly ID of the Org
   */
  id?: string;

  /**
   * The creation date of the organization.
   */
  created_at?: string | null;

  /**
   * The name of the organization.
   */
  name?: string;
}

export declare namespace AdminOrganizations {
  export { type Organization as Organization };
}

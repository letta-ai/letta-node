// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AdminOrganizations extends APIResource {
  /**
   * Create a new org in the database
   */
  create(body: AdminOrganizationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Organization> {
    return this._client.post('/v1/admin/orgs/', { body, ...options });
  }

  /**
   * Delete Org
   */
  delete(
    params: AdminOrganizationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Organization> {
    const { org_id } = params;
    return this._client.delete('/v1/admin/orgs/', { query: { org_id }, ...options });
  }
}

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

export interface AdminOrganizationCreateParams {
  /**
   * The name of the organization.
   */
  name?: string | null;
}

export interface AdminOrganizationDeleteParams {
  /**
   * The org_id key to be deleted.
   */
  org_id: string;
}

export declare namespace AdminOrganizations {
  export {
    type Organization as Organization,
    type AdminOrganizationCreateParams as AdminOrganizationCreateParams,
    type AdminOrganizationDeleteParams as AdminOrganizationDeleteParams,
  };
}

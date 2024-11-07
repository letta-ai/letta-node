// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as AdminOrganizationsAPI from './admin-organizations';

export class AdminOrgs extends APIResource {
  /**
   * Get a list of all orgs in the database
   */
  list(query?: AdminOrgListParams, options?: Core.RequestOptions): Core.APIPromise<AdminOrgListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AdminOrgListResponse>;
  list(
    query: AdminOrgListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdminOrgListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/admin/orgs/', { query, ...options });
  }
}

export type AdminOrgListResponse = Array<AdminOrganizationsAPI.Organization>;

export interface AdminOrgListParams {
  cursor?: string | null;

  limit?: number | null;
}

export declare namespace AdminOrgs {
  export { type AdminOrgListResponse as AdminOrgListResponse, type AdminOrgListParams as AdminOrgListParams };
}

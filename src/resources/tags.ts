// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Tags extends APIResource {
  /**
   * Get the list of all tags (from agents and blocks) that have been created.
   */
  list(params: TagListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TagListResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.get('/v1/tags/', {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type TagListResponse = Array<string>;

export interface TagListParams {
  /**
   * Query param: Tag cursor for pagination. Returns tags that come after this tag in
   * the specified sort order
   */
  after?: string | null;

  /**
   * Query param: Tag cursor for pagination. Returns tags that come before this tag
   * in the specified sort order
   */
  before?: string | null;

  /**
   * Query param: Maximum number of tags to return
   */
  limit?: number | null;

  /**
   * Query param: Filter tags by name
   */
  name?: string | null;

  /**
   * Query param: Sort order for tags. 'asc' for alphabetical order, 'desc' for
   * reverse alphabetical order
   */
  order?: 'asc' | 'desc';

  /**
   * Query param: Field to sort by
   */
  order_by?: 'name';

  /**
   * @deprecated Query param: Filter tags by text search. Deprecated, please use name
   * field instead
   */
  query_text?: string | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export declare namespace Tags {
  export { type TagListResponse as TagListResponse, type TagListParams as TagListParams };
}

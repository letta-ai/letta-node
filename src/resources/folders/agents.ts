// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Get all agent IDs that have the specified folder attached.
   */
  list(
    folderID: string,
    params: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.get(path`/v1/folders/${folderID}/agents`, {
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

export type AgentListResponse = Array<string>;

export interface AgentListParams {
  /**
   * Query param: Agent ID cursor for pagination. Returns agents that come after this
   * agent ID in the specified sort order
   */
  after?: string | null;

  /**
   * Query param: Agent ID cursor for pagination. Returns agents that come before
   * this agent ID in the specified sort order
   */
  before?: string | null;

  /**
   * Query param: Maximum number of agents to return
   */
  limit?: number | null;

  /**
   * Query param: Sort order for agents by creation time. 'asc' for oldest first,
   * 'desc' for newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Query param: Field to sort by
   */
  order_by?: 'created_at';

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

export declare namespace Agents {
  export { type AgentListResponse as AgentListResponse, type AgentListParams as AgentListParams };
}

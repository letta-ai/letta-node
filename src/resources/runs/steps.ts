// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StepsStepsAPI from '../steps/steps';
import { StepsArrayPage } from '../steps/steps';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Steps extends APIResource {
  /**
   * Get steps associated with a run with filtering options.
   */
  list(
    runID: string,
    params: StepListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StepsArrayPage, StepsStepsAPI.Step> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.getAPIList(path`/v1/runs/${runID}/steps`, ArrayPage<StepsStepsAPI.Step>, {
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

export interface StepListParams extends ArrayPageParams {
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

export declare namespace Steps {
  export { type StepListParams as StepListParams };
}

export { type StepsArrayPage };

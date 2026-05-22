// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResourcesStepsAPI from '../steps/steps';
import { StepsArrayPage } from '../steps/steps';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Steps extends APIResource {
  /**
   * Get steps associated with a run with filtering options.
   */
  list(
    runID: string,
    query: StepListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StepsArrayPage, ResourcesStepsAPI.Step> {
    return this._client.getAPIList(path`/v1/runs/${runID}/steps`, ArrayPage<ResourcesStepsAPI.Step>, {
      query,
      ...options,
    });
  }
}

export interface StepListParams extends ArrayPageParams {}

export declare namespace Steps {
  export { type StepListParams as StepListParams };
}

export { type StepsArrayPage };

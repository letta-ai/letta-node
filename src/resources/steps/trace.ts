// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StepsAPI from './steps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Trace extends APIResource {
  /**
   * Retrieve Trace For Step
   */
  retrieve(stepID: string, options?: RequestOptions): APIPromise<StepsAPI.ProviderTrace | null> {
    return this._client.get(path`/v1/steps/${stepID}/trace`, options);
  }
}

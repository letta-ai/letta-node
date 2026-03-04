// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as StepsAPI from './steps';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Feedback extends APIResource {
  /**
   * Modify feedback for a given step.
   */
  create(stepID: string, body: FeedbackCreateParams, options?: RequestOptions): APIPromise<StepsAPI.Step> {
    return this._client.patch(path`/v1/steps/${stepID}/feedback`, { body, ...options });
  }
}

export interface FeedbackCreateParams {
  /**
   * Whether this feedback is positive or negative
   */
  feedback?: 'positive' | 'negative' | null;

  /**
   * Feedback tags to add to the step
   */
  tags?: Array<string> | null;
}

export declare namespace Feedback {
  export { type FeedbackCreateParams as FeedbackCreateParams };
}

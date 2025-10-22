// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as StepsAPI from './steps';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Telemetry extends APIResource {
  /**
   * **DEPRECATED**: Use `GET /steps/{step_id}/trace` instead.
   *
   * Retrieve provider trace by step ID.
   *
   * @deprecated
   */
  retrieve(stepID: string, options?: RequestOptions): APIPromise<StepsAPI.ProviderTrace | null> {
    return this._client.get(path`/v1/telemetry/${stepID}`, options);
  }
}

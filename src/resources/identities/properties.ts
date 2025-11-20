// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IdentitiesAPI from './identities';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Properties extends APIResource {
  /**
   * Upsert Properties For Identity
   */
  upsert(identityID: string, params: PropertyUpsertParams, options?: RequestOptions): APIPromise<unknown> {
    const { body } = params;
    return this._client.put(path`/v1/identities/${identityID}/properties`, { body: body, ...options });
  }
}

export type PropertyUpsertResponse = unknown;

export interface PropertyUpsertParams {
  body: Array<IdentitiesAPI.IdentityProperty>;
}

export declare namespace Properties {
  export {
    type PropertyUpsertResponse as PropertyUpsertResponse,
    type PropertyUpsertParams as PropertyUpsertParams,
  };
}

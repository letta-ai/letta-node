// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ModelsAPI from './models';

export class Embedding extends APIResource {
  /**
   * List Embedding Backends
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<EmbeddingRetrieveResponse> {
    return this._client.get('/v1/models/embedding', options);
  }
}

export type EmbeddingRetrieveResponse = Array<ModelsAPI.EmbeddingConfig>;

export declare namespace Embedding {
  export { type EmbeddingRetrieveResponse as EmbeddingRetrieveResponse };
}

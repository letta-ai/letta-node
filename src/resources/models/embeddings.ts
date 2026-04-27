// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ModelsAPI from './models';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Embeddings extends APIResource {
  /**
   * List available embedding models using the asynchronous implementation for
   * improved performance.
   *
   * Returns EmbeddingModel format which extends EmbeddingConfig with additional
   * metadata fields. Legacy EmbeddingConfig fields are marked as deprecated but
   * still available for backward compatibility.
   */
  list(options?: RequestOptions): APIPromise<EmbeddingListResponse> {
    return this._client.get('/v1/models/embedding', options);
  }
}

export type EmbeddingListResponse = Array<ModelsAPI.EmbeddingModel>;

export declare namespace Embeddings {
  export { type EmbeddingListResponse as EmbeddingListResponse };
}

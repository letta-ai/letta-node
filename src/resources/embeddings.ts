// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Embeddings extends APIResource {
  /**
   * Get the total size of all embeddings in the database for a user in the storage
   * unit given.
   */
  getTotalStorageSize(
    params: EmbeddingGetTotalStorageSizeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmbeddingGetTotalStorageSizeResponse> {
    const { 'storage-unit': storageUnit } = params ?? {};
    return this._client.get('/v1/embeddings/total_storage_size', {
      ...options,
      headers: buildHeaders([
        { ...(storageUnit != null ? { 'storage-unit': storageUnit } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type EmbeddingGetTotalStorageSizeResponse = number;

export interface EmbeddingGetTotalStorageSizeParams {
  'storage-unit'?: string;
}

export declare namespace Embeddings {
  export {
    type EmbeddingGetTotalStorageSizeResponse as EmbeddingGetTotalStorageSizeResponse,
    type EmbeddingGetTotalStorageSizeParams as EmbeddingGetTotalStorageSizeParams,
  };
}

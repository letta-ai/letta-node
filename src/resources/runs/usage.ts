// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Usage extends APIResource {
  /**
   * Get usage statistics for a run.
   */
  retrieve(runID: string, options?: RequestOptions): APIPromise<UsageRetrieveResponse> {
    return this._client.get(path`/v1/runs/${runID}/usage`, options);
  }
}

export interface UsageRetrieveResponse {
  completion_tokens?: number;

  completion_tokens_details?: UsageRetrieveResponse.CompletionTokensDetails | null;

  prompt_tokens?: number;

  prompt_tokens_details?: UsageRetrieveResponse.PromptTokensDetails | null;

  total_tokens?: number;
}

export namespace UsageRetrieveResponse {
  export interface CompletionTokensDetails {
    reasoning_tokens?: number | null;
  }

  export interface PromptTokensDetails {
    cache_creation_tokens?: number | null;

    cache_read_tokens?: number | null;

    cached_tokens?: number | null;
  }
}

export declare namespace Usage {
  export { type UsageRetrieveResponse as UsageRetrieveResponse };
}

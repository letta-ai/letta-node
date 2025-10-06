// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Chat extends APIResource {
  /**
   * Create Voice Chat Completions
   */
  createCompletion(
    agentID: string,
    params: ChatCreateCompletionParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body } = params;
    return this._client.post(path`/v1/voice-beta/${agentID}/chat/completions`, { body: body, ...options });
  }
}

export type ChatCreateCompletionResponse = unknown;

export interface ChatCreateCompletionParams {
  body: { [key: string]: unknown };
}

export declare namespace Chat {
  export {
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../agents/messages';
import { InternalMessagesObjectPage } from '../agents/messages';
import { ObjectPage, type ObjectPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Get response messages for a specific batch job.
   */
  list(
    batchID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InternalMessagesObjectPage, MessagesAPI.InternalMessage> {
    return this._client.getAPIList(
      path`/v1/messages/batches/${batchID}/messages`,
      ObjectPage<MessagesAPI.InternalMessage>,
      { query, ...options },
    );
  }
}

export interface MessageListParams extends ObjectPageParams {
  /**
   * Filter messages by agent ID
   */
  agent_id?: string | null;
}

export declare namespace Messages {
  export { type MessageListParams as MessageListParams };
}

export { type InternalMessagesObjectPage };

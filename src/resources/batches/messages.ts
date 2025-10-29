// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../agents/messages';
import { APIPromise } from '../../core/api-promise';
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
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/v1/messages/batches/${batchID}/messages`, { query, ...options });
  }
}

export interface MessageListResponse {
  messages: Array<MessagesAPI.Message>;
}

export interface MessageListParams {
  /**
   * Message ID cursor for pagination. Returns messages that come after this message
   * ID in the specified sort order
   */
  after?: string | null;

  /**
   * Filter messages by agent ID
   */
  agent_id?: string | null;

  /**
   * Message ID cursor for pagination. Returns messages that come before this message
   * ID in the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of messages to return
   */
  limit?: number | null;

  /**
   * Sort order for messages by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export declare namespace Messages {
  export { type MessageListResponse as MessageListResponse, type MessageListParams as MessageListParams };
}

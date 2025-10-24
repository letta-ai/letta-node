// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../agents/messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Get response messages associated with a run.
   */
  list(
    runID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/v1/runs/${runID}/messages`, { query, ...options });
  }

  /**
   * Retrieve Stream
   */
  stream(
    runID: string,
    body: MessageStreamParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/v1/runs/${runID}/stream`, { body, ...options });
  }
}

export type MessageListResponse = Array<MessagesAPI.LettaMessageUnion>;

export type MessageStreamResponse = unknown;

export interface MessageListParams {
  /**
   * Message ID cursor for pagination. Returns messages that come after this message
   * ID in the specified sort order
   */
  after?: string | null;

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

export interface MessageStreamParams {
  /**
   * Number of entries to read per batch.
   */
  batch_size?: number | null;

  /**
   * Whether to include periodic keepalive ping messages in the stream to prevent
   * connection timeouts.
   */
  include_pings?: boolean | null;

  /**
   * Seconds to wait between polls when no new data.
   */
  poll_interval?: number | null;

  /**
   * Sequence id to use as a cursor for pagination. Response will start streaming
   * after this chunk sequence id
   */
  starting_after?: number;
}

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageStreamResponse as MessageStreamResponse,
    type MessageListParams as MessageListParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

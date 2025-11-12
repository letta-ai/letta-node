// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../agents/messages';
import { MessagesArrayPage } from '../agents/messages';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { Stream } from '../../core/streaming';
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
  ): PagePromise<MessagesArrayPage, MessagesAPI.Message> {
    return this._client.getAPIList(path`/v1/runs/${runID}/messages`, ArrayPage<MessagesAPI.Message>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve Stream
   */
  stream(
    runID: string,
    body: MessageStreamParams | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Stream<MessagesAPI.LettaStreamingResponse>> {
    return this._client.post(path`/v1/runs/${runID}/stream`, {
      body,
      ...options,
      stream: true,
    }) as APIPromise<Stream<MessagesAPI.LettaStreamingResponse>>;
  }
}

export type MessageStreamResponse = unknown;

export interface MessageListParams extends ArrayPageParams {}

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
    type MessageStreamResponse as MessageStreamResponse,
    type MessageListParams as MessageListParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

export { type MessagesArrayPage };

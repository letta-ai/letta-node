// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../agents/messages';
import { LettaMessageUnionsArrayPage } from '../agents/messages';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<LettaMessageUnionsArrayPage, MessagesAPI.LettaMessageUnion> {
    return this._client.getAPIList(
      path`/v1/runs/${runID}/messages`,
      ArrayPage<MessagesAPI.LettaMessageUnion>,
      { query, ...options },
    );
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

export { type LettaMessageUnionsArrayPage };

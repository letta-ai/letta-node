// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as StepsAPI from './steps';
import * as MessagesAPI from './agents/messages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Get the status of a run.
   */
  retrieve(runID: string, options?: RequestOptions): APIPromise<MessagesAPI.Run> {
    return this._client.get(path`/v1/runs/${runID}`, options);
  }

  /**
   * List all runs.
   */
  list(query: RunListParams | null | undefined = {}, options?: RequestOptions): APIPromise<RunListResponse> {
    return this._client.get('/v1/runs/', { query, ...options });
  }

  /**
   * Delete a run by its run_id.
   */
  delete(runID: string, options?: RequestOptions): APIPromise<MessagesAPI.Run> {
    return this._client.delete(path`/v1/runs/${runID}`, options);
  }

  /**
   * List all active runs.
   *
   * @deprecated
   */
  listActive(
    query: RunListActiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListActiveResponse> {
    return this._client.get('/v1/runs/active', { query, ...options });
  }

  /**
   * Get response messages associated with a run.
   */
  listMessages(
    runID: string,
    query: RunListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListMessagesResponse> {
    return this._client.get(path`/v1/runs/${runID}/messages`, { query, ...options });
  }

  /**
   * Get messages associated with a run with filtering options.
   *
   * Args: run_id: ID of the run before: A cursor for use in pagination. `before` is
   * an object ID that defines your place in the list. For instance, if you make a
   * list request and receive 100 objects, starting with obj_foo, your subsequent
   * call can include before=obj_foo in order to fetch the previous page of the list.
   * after: A cursor for use in pagination. `after` is an object ID that defines your
   * place in the list. For instance, if you make a list request and receive 100
   * objects, ending with obj_foo, your subsequent call can include after=obj_foo in
   * order to fetch the next page of the list. limit: Maximum number of steps to
   * return order: Sort order by the created_at timestamp of the objects. asc for
   * ascending order and desc for descending order.
   *
   * Returns: A list of steps associated with the run.
   */
  listSteps(
    runID: string,
    query: RunListStepsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunListStepsResponse> {
    return this._client.get(path`/v1/runs/${runID}/steps`, { query, ...options });
  }

  /**
   * Retrieve Stream
   */
  retrieveStream(
    runID: string,
    body: RunRetrieveStreamParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/v1/runs/${runID}/stream`, { body, ...options });
  }

  /**
   * Get usage statistics for a run.
   */
  retrieveUsage(runID: string, options?: RequestOptions): APIPromise<RunRetrieveUsageResponse> {
    return this._client.get(path`/v1/runs/${runID}/usage`, options);
  }
}

export type StopReasonType =
  | 'end_turn'
  | 'error'
  | 'llm_api_error'
  | 'invalid_llm_response'
  | 'invalid_tool_call'
  | 'max_steps'
  | 'no_tool_call'
  | 'tool_rule'
  | 'cancelled'
  | 'requires_approval';

export type RunListResponse = Array<MessagesAPI.Run>;

export type RunListActiveResponse = Array<MessagesAPI.Run>;

export type RunListMessagesResponse = Array<MessagesAPI.LettaMessageUnion>;

export type RunListStepsResponse = Array<StepsAPI.Step>;

export type RunRetrieveStreamResponse = unknown;

export interface RunRetrieveUsageResponse {
  completion_tokens?: number;

  completion_tokens_details?: RunRetrieveUsageResponse.CompletionTokensDetails | null;

  prompt_tokens?: number;

  prompt_tokens_details?: RunRetrieveUsageResponse.PromptTokensDetails | null;

  total_tokens?: number;
}

export namespace RunRetrieveUsageResponse {
  export interface CompletionTokensDetails {
    reasoning_tokens?: number;
  }

  export interface PromptTokensDetails {
    cached_tokens?: number;
  }
}

export interface RunListParams {
  /**
   * Filter for active runs.
   */
  active?: boolean;

  /**
   * Cursor for pagination
   */
  after?: string | null;

  /**
   * The unique identifier of the agent associated with the run.
   */
  agent_ids?: Array<string> | null;

  /**
   * Whether to sort agents oldest to newest (True) or newest to oldest (False,
   * default)
   */
  ascending?: boolean;

  /**
   * If True, filters for runs that were created in background mode.
   */
  background?: boolean | null;

  /**
   * Cursor for pagination
   */
  before?: string | null;

  /**
   * Maximum number of runs to return
   */
  limit?: number | null;

  /**
   * Filter runs by stop reason.
   */
  stop_reason?: StopReasonType | null;
}

export interface RunListActiveParams {
  /**
   * The unique identifier of the agent associated with the run.
   */
  agent_ids?: Array<string> | null;

  /**
   * If True, filters for runs that were created in background mode.
   */
  background?: boolean | null;
}

export interface RunListMessagesParams {
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
}

export interface RunListStepsParams {
  /**
   * Cursor for pagination
   */
  after?: string | null;

  /**
   * Cursor for pagination
   */
  before?: string | null;

  /**
   * Maximum number of messages to return
   */
  limit?: number | null;

  /**
   * Sort order by the created_at timestamp of the objects. asc for ascending order
   * and desc for descending order.
   */
  order?: string;
}

export interface RunRetrieveStreamParams {
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

export declare namespace Runs {
  export {
    type StopReasonType as StopReasonType,
    type RunListResponse as RunListResponse,
    type RunListActiveResponse as RunListActiveResponse,
    type RunListMessagesResponse as RunListMessagesResponse,
    type RunListStepsResponse as RunListStepsResponse,
    type RunRetrieveStreamResponse as RunRetrieveStreamResponse,
    type RunRetrieveUsageResponse as RunRetrieveUsageResponse,
    type RunListParams as RunListParams,
    type RunListActiveParams as RunListActiveParams,
    type RunListMessagesParams as RunListMessagesParams,
    type RunListStepsParams as RunListStepsParams,
    type RunRetrieveStreamParams as RunRetrieveStreamParams,
  };
}

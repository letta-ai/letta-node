// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RunsAPI from '../runs';
import * as AgentsAPI from '../agents/agents';
import * as MessagesAPI from '../agents/messages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Batches extends APIResource {
  /**
   * Submit a batch of agent runs for asynchronous processing.
   *
   * Creates a job that will fan out messages to all listed agents and process them
   * in parallel. The request will be rejected if it exceeds 256MB.
   */
  create(body: BatchCreateParams, options?: RequestOptions): APIPromise<BatchJob> {
    return this._client.post('/v1/messages/batches', { body, ...options });
  }

  /**
   * Retrieve the status and details of a batch run.
   */
  retrieve(batchID: string, options?: RequestOptions): APIPromise<BatchJob> {
    return this._client.get(path`/v1/messages/batches/${batchID}`, options);
  }

  /**
   * List all batch runs.
   */
  list(
    query: BatchListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchListResponse> {
    return this._client.get('/v1/messages/batches', { query, ...options });
  }

  /**
   * Cancel a batch run.
   */
  cancel(batchID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.patch(path`/v1/messages/batches/${batchID}/cancel`, options);
  }

  /**
   * Get response messages for a specific batch job.
   */
  listMessages(
    batchID: string,
    query: BatchListMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BatchListMessagesResponse> {
    return this._client.get(path`/v1/messages/batches/${batchID}/messages`, { query, ...options });
  }
}

export interface BatchJob {
  /**
   * The human-friendly ID of the Job
   */
  id?: string;

  /**
   * Optional error message from attempting to POST the callback endpoint.
   */
  callback_error?: string | null;

  /**
   * Timestamp when the callback was last attempted.
   */
  callback_sent_at?: string | null;

  /**
   * HTTP status code returned by the callback endpoint.
   */
  callback_status_code?: number | null;

  /**
   * If set, POST to this URL when the job completes.
   */
  callback_url?: string | null;

  /**
   * The unix timestamp of when the job was completed.
   */
  completed_at?: string | null;

  /**
   * The unix timestamp of when the job was created.
   */
  created_at?: string;

  /**
   * The id of the user that made this object.
   */
  created_by_id?: string | null;

  job_type?: MessagesAPI.JobType;

  /**
   * The id of the user that made this object.
   */
  last_updated_by_id?: string | null;

  /**
   * The metadata of the job.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The status of the job.
   */
  status?: MessagesAPI.JobStatus;

  /**
   * The reason why the job was stopped.
   */
  stop_reason?: RunsAPI.StopReasonType | null;

  /**
   * Total run duration in nanoseconds
   */
  total_duration_ns?: number | null;

  /**
   * Time to first token for a run in nanoseconds
   */
  ttft_ns?: number | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;
}

export type BatchListResponse = Array<BatchJob>;

export type BatchCancelResponse = unknown;

export interface BatchListMessagesResponse {
  messages: Array<MessagesAPI.Message>;
}

export interface BatchCreateParams {
  /**
   * List of requests to be processed in batch.
   */
  requests: Array<BatchCreateParams.Request>;

  /**
   * Optional URL to call via POST when the batch completes. The callback payload
   * will be a JSON object with the following fields: {'job_id': string, 'status':
   * string, 'completed_at': string}. Where 'job_id' is the unique batch job
   * identifier, 'status' is the final batch status (e.g., 'completed', 'failed'),
   * and 'completed_at' is an ISO 8601 timestamp indicating when the batch job
   * completed.
   */
  callback_url?: string | null;
}

export namespace BatchCreateParams {
  export interface Request {
    /**
     * The ID of the agent to send this batch request for
     */
    agent_id: string;

    /**
     * The messages to be sent to the agent.
     */
    messages: Array<AgentsAPI.MessageCreate | MessagesAPI.ApprovalCreate>;

    /**
     * The name of the message argument in the designated message tool.
     */
    assistant_message_tool_kwarg?: string;

    /**
     * The name of the designated message tool.
     */
    assistant_message_tool_name?: string;

    /**
     * If set to True, enables reasoning before responses or tool calls from the agent.
     */
    enable_thinking?: string;

    /**
     * Only return specified message types in the response. If `None` (default) returns
     * all messages.
     */
    include_return_message_types?: Array<MessagesAPI.MessageType> | null;

    /**
     * Maximum number of steps the agent should take to process the request.
     */
    max_steps?: number;

    /**
     * Whether the server should parse specific tool call arguments (default
     * `send_message`) as `AssistantMessage` objects.
     */
    use_assistant_message?: boolean;
  }
}

export interface BatchListParams {
  /**
   * Job ID cursor for pagination. Returns jobs that come after this job ID in the
   * specified sort order
   */
  after?: string | null;

  /**
   * Job ID cursor for pagination. Returns jobs that come before this job ID in the
   * specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of jobs to return
   */
  limit?: number | null;

  /**
   * Sort order for jobs by creation time. 'asc' for oldest first, 'desc' for newest
   * first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export interface BatchListMessagesParams {
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

export declare namespace Batches {
  export {
    type BatchJob as BatchJob,
    type BatchListResponse as BatchListResponse,
    type BatchCancelResponse as BatchCancelResponse,
    type BatchListMessagesResponse as BatchListMessagesResponse,
    type BatchCreateParams as BatchCreateParams,
    type BatchListParams as BatchListParams,
    type BatchListMessagesParams as BatchListMessagesParams,
  };
}

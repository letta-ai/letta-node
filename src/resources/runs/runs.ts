// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from '../agents/messages';
import * as RunsMessagesAPI from './messages';
import { MessageListParams, MessageStreamParams, MessageStreamResponse, Messages } from './messages';
import * as StepsAPI from './steps';
import { StepListParams, Steps } from './steps';
import * as UsageAPI from './usage';
import { Usage, UsageRetrieveResponse } from './usage';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Runs extends APIResource {
  messages: RunsMessagesAPI.Messages = new RunsMessagesAPI.Messages(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  steps: StepsAPI.Steps = new StepsAPI.Steps(this._client);

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
}

/**
 * Representation of offline jobs, used for tracking status of data loading tasks
 * (involving parsing and embedding files).
 *
 * Parameters: id (str): The unique identifier of the job. status (JobStatus): The
 * status of the job. created_at (datetime): The unix timestamp of when the job was
 * created. completed_at (datetime): The unix timestamp of when the job was
 * completed. user_id (str): The unique identifier of the user associated with the.
 */
export interface Job {
  /**
   * The human-friendly ID of the Job
   */
  id?: string;

  /**
   * The agent associated with this job/run.
   */
  agent_id?: string | null;

  /**
   * Whether the job was created in background mode.
   */
  background?: boolean | null;

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

  /**
   * The type of the job.
   */
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
  stop_reason?: StopReasonType | null;

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

export interface RunListParams {
  /**
   * Filter for active runs.
   */
  active?: boolean;

  /**
   * Run ID cursor for pagination. Returns runs that come after this run ID in the
   * specified sort order
   */
  after?: string | null;

  /**
   * The unique identifier of the agent associated with the run.
   */
  agent_id?: string | null;

  /**
   * @deprecated The unique identifiers of the agents associated with the run.
   * Deprecated in favor of agent_id field.
   */
  agent_ids?: Array<string> | null;

  /**
   * @deprecated Whether to sort agents oldest to newest (True) or newest to oldest
   * (False, default). Deprecated in favor of order field.
   */
  ascending?: boolean;

  /**
   * If True, filters for runs that were created in background mode.
   */
  background?: boolean | null;

  /**
   * Run ID cursor for pagination. Returns runs that come before this run ID in the
   * specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of runs to return
   */
  limit?: number | null;

  /**
   * Sort order for runs by creation time. 'asc' for oldest first, 'desc' for newest
   * first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';

  /**
   * Filter runs by status. Can specify multiple statuses.
   */
  statuses?: Array<string> | null;

  /**
   * Filter runs by stop reason.
   */
  stop_reason?: StopReasonType | null;
}

Runs.Messages = Messages;
Runs.Usage = Usage;
Runs.Steps = Steps;

export declare namespace Runs {
  export {
    type Job as Job,
    type StopReasonType as StopReasonType,
    type RunListResponse as RunListResponse,
    type RunListParams as RunListParams,
  };

  export {
    Messages as Messages,
    type MessageStreamResponse as MessageStreamResponse,
    type MessageListParams as MessageListParams,
    type MessageStreamParams as MessageStreamParams,
  };

  export { Usage as Usage, type UsageRetrieveResponse as UsageRetrieveResponse };

  export { Steps as Steps, type StepListParams as StepListParams };
}

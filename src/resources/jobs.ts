// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RunsAPI from './runs';
import * as MessagesAPI from './agents/messages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Get the status of a job.
   */
  retrieve(jobID: string, options?: RequestOptions): APIPromise<Job> {
    return this._client.get(path`/v1/jobs/${jobID}`, options);
  }

  /**
   * List all jobs.
   */
  list(query: JobListParams | null | undefined = {}, options?: RequestOptions): APIPromise<JobListResponse> {
    return this._client.get('/v1/jobs/', { query, ...options });
  }

  /**
   * Delete a job by its job_id.
   */
  delete(jobID: string, options?: RequestOptions): APIPromise<Job> {
    return this._client.delete(path`/v1/jobs/${jobID}`, options);
  }

  /**
   * Cancel a job by its job_id.
   *
   * This endpoint marks a job as cancelled, which will cause any associated agent
   * execution to terminate as soon as possible.
   */
  cancel(jobID: string, options?: RequestOptions): APIPromise<Job> {
    return this._client.patch(path`/v1/jobs/${jobID}/cancel`, options);
  }

  /**
   * List all active jobs.
   *
   * @deprecated
   */
  listActive(
    query: JobListActiveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<JobListActiveResponse> {
    return this._client.get('/v1/jobs/active', { query, ...options });
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

export type JobListResponse = Array<Job>;

export type JobListActiveResponse = Array<Job>;

export interface JobListParams {
  /**
   * Filter for active jobs.
   */
  active?: boolean;

  /**
   * Cursor for pagination
   */
  after?: string | null;

  /**
   * Whether to sort jobs oldest to newest (True, default) or newest to oldest
   * (False)
   */
  ascending?: boolean;

  /**
   * Cursor for pagination
   */
  before?: string | null;

  /**
   * Limit for pagination
   */
  limit?: number | null;

  /**
   * Only list jobs associated with the source.
   */
  source_id?: string | null;
}

export interface JobListActiveParams {
  /**
   * Cursor for pagination
   */
  after?: string | null;

  /**
   * Whether to sort jobs oldest to newest (True, default) or newest to oldest
   * (False)
   */
  ascending?: boolean;

  /**
   * Cursor for pagination
   */
  before?: string | null;

  /**
   * Limit for pagination
   */
  limit?: number | null;

  /**
   * Only list jobs associated with the source.
   */
  source_id?: string | null;
}

export declare namespace Jobs {
  export {
    type Job as Job,
    type JobListResponse as JobListResponse,
    type JobListActiveResponse as JobListActiveResponse,
    type JobListParams as JobListParams,
    type JobListActiveParams as JobListActiveParams,
  };
}

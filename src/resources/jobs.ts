// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class Jobs extends APIResource {
  /**
   * Get the status of a job.
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Job> {
    return this._client.get(`/v1/jobs/${jobId}`, options);
  }

  /**
   * List all jobs.
   */
  list(params?: JobListParams, options?: Core.RequestOptions): Core.APIPromise<JobListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<JobListResponse>;
  list(
    params: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { user_id, ...query } = params;
    return this._client.get('/v1/jobs/', {
      query,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Delete a job by its job_id.
   */
  delete(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Job> {
    return this._client.delete(`/v1/jobs/${jobId}`, options);
  }

  /**
   * List all active jobs.
   */
  active(params?: JobActiveParams, options?: Core.RequestOptions): Core.APIPromise<JobActiveResponse>;
  active(options?: Core.RequestOptions): Core.APIPromise<JobActiveResponse>;
  active(
    params: JobActiveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobActiveResponse> {
    if (isRequestOptions(params)) {
      return this.active({}, params);
    }
    const { user_id } = params;
    return this._client.get('/v1/jobs/active', {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

export type JobListResponse = Array<Shared.Job>;

export type JobActiveResponse = Array<Shared.Job>;

export interface JobListParams {
  /**
   * Query param: Only list jobs associated with the source.
   */
  source_id?: string | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface JobActiveParams {
  user_id?: string;
}

export declare namespace Jobs {
  export {
    type JobListResponse as JobListResponse,
    type JobActiveResponse as JobActiveResponse,
    type JobListParams as JobListParams,
    type JobActiveParams as JobActiveParams,
  };
}

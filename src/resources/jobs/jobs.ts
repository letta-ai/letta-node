// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ActiveAPI from './active';
import { Active, ActiveListResponse } from './active';

export class Jobs extends APIResource {
  active: ActiveAPI.Active = new ActiveAPI.Active(this._client);

  /**
   * Get the status of a job.
   */
  retrieve(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Job> {
    return this._client.get(`/v1/jobs/${jobId}`, options);
  }

  /**
   * List all jobs.
   */
  list(query?: JobListParams, options?: Core.RequestOptions): Core.APIPromise<JobListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<JobListResponse>;
  list(
    query: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/jobs/', { query, ...options });
  }

  /**
   * Delete a job by its job_id.
   */
  delete(jobId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.Job> {
    return this._client.delete(`/v1/jobs/${jobId}`, options);
  }
}

export type JobListResponse = Array<Shared.Job>;

export interface JobListParams {
  /**
   * Only list jobs associated with the source.
   */
  source_id?: string | null;
}

Jobs.Active = Active;

export declare namespace Jobs {
  export { type JobListResponse as JobListResponse, type JobListParams as JobListParams };

  export { Active as Active, type ActiveListResponse as ActiveListResponse };
}

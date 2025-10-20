// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Projects extends APIResource {
  /**
   * List all projects
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/v1/projects', { query, ...options });
  }
}

export interface ProjectListResponse {
  hasNextPage: boolean;

  projects: Array<ProjectListResponse.Project>;
}

export namespace ProjectListResponse {
  export interface Project {
    id: string;

    name: string;

    slug: string;
  }
}

export interface ProjectListParams {
  limit?: string;

  name?: string;

  offset?: string | number;
}

export declare namespace Projects {
  export { type ProjectListResponse as ProjectListResponse, type ProjectListParams as ProjectListParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Get all agent IDs that have the specified folder attached.
   */
  list(
    folderID: string,
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AgentListResponsesArrayPage, AgentListResponse> {
    return this._client.getAPIList(path`/v1/folders/${folderID}/agents`, ArrayPage<AgentListResponse>, {
      query,
      ...options,
    });
  }
}

export type AgentListResponsesArrayPage = ArrayPage<AgentListResponse>;

export type AgentListResponse = string;

export interface AgentListParams extends ArrayPageParams {}

export declare namespace Agents {
  export {
    type AgentListResponse as AgentListResponse,
    type AgentListResponsesArrayPage as AgentListResponsesArrayPage,
    type AgentListParams as AgentListParams,
  };
}

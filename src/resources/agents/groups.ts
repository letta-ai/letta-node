// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GroupsGroupsAPI from '../groups/groups';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Lists the groups for an agent.
   */
  list(
    agentID: string,
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get(path`/v1/agents/${agentID}/groups`, { query, ...options });
  }
}

export type GroupListResponse = Array<GroupsGroupsAPI.Group>;

export interface GroupListParams {
  /**
   * Group ID cursor for pagination. Returns groups that come after this group ID in
   * the specified sort order
   */
  after?: string | null;

  /**
   * Group ID cursor for pagination. Returns groups that come before this group ID in
   * the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of groups to return
   */
  limit?: number | null;

  /**
   * Manager type to filter groups by
   */
  manager_type?: string | null;

  /**
   * Sort order for groups by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export declare namespace Groups {
  export { type GroupListResponse as GroupListResponse, type GroupListParams as GroupListParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GroupsGroupsAPI from '../groups/groups';
import { GroupsArrayPage } from '../groups/groups';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
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
  ): PagePromise<GroupsArrayPage, GroupsGroupsAPI.Group> {
    return this._client.getAPIList(path`/v1/agents/${agentID}/groups`, ArrayPage<GroupsGroupsAPI.Group>, {
      query,
      ...options,
    });
  }
}

export interface GroupListParams extends ArrayPageParams {
  /**
   * Manager type to filter groups by
   */
  manager_type?: string | null;
}

export declare namespace Groups {
  export { type GroupListParams as GroupListParams };
}

export { type GroupsArrayPage };

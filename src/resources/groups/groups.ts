// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import {
  MessageListParams,
  MessageResetResponse,
  MessageSendParams,
  MessageStreamParams,
  MessageStreamResponse,
  MessageUpdateParams,
  MessageUpdateResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Groups extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a new multi-agent group with the specified configuration.
   */
  create(params: GroupCreateParams, options?: RequestOptions): APIPromise<Group> {
    const { 'X-Project': xProject, ...body } = params;
    return this._client.post('/v1/groups/', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xProject != null ? { 'X-Project': xProject } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve the group by id.
   */
  retrieve(groupID: string, options?: RequestOptions): APIPromise<Group> {
    return this._client.get(path`/v1/groups/${groupID}`, options);
  }

  /**
   * Create a new multi-agent group with the specified configuration.
   */
  update(groupID: string, params: GroupUpdateParams, options?: RequestOptions): APIPromise<Group> {
    const { 'X-Project': xProject, ...body } = params;
    return this._client.patch(path`/v1/groups/${groupID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xProject != null ? { 'X-Project': xProject } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Fetch all multi-agent groups matching query.
   */
  list(
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<GroupsArrayPage, Group> {
    return this._client.getAPIList('/v1/groups/', ArrayPage<Group>, { query, ...options });
  }

  /**
   * Delete a multi-agent group.
   */
  delete(groupID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/groups/${groupID}`, options);
  }

  /**
   * Get the count of all groups associated with a given user.
   */
  count(options?: RequestOptions): APIPromise<GroupCountResponse> {
    return this._client.get('/v1/groups/count', options);
  }
}

export type GroupsArrayPage = ArrayPage<Group>;

export interface DynamicManager {
  manager_agent_id: string;

  manager_type?: 'dynamic';

  max_turns?: number | null;

  termination_token?: string | null;
}

export interface Group {
  /**
   * The id of the group. Assigned by the database.
   */
  id: string;

  agent_ids: Array<string>;

  description: string;

  manager_type: ManagerType;

  /**
   * The base template id.
   */
  base_template_id?: string | null;

  /**
   * The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * If set to True, the group will be hidden.
   */
  hidden?: boolean | null;

  last_processed_message_id?: string | null;

  manager_agent_id?: string | null;

  /**
   * The desired maximum length of messages in the context window of the convo agent.
   * This is a best effort, and may be off slightly due to user/assistant
   * interleaving.
   */
  max_message_buffer_length?: number | null;

  max_turns?: number | null;

  /**
   * The desired minimum length of messages in the context window of the convo agent.
   * This is a best effort, and may be off-by-one due to user/assistant interleaving.
   */
  min_message_buffer_length?: number | null;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  shared_block_ids?: Array<string>;

  sleeptime_agent_frequency?: number | null;

  /**
   * The id of the template.
   */
  template_id?: string | null;

  termination_token?: string | null;

  turns_counter?: number | null;
}

export type ManagerType =
  | 'round_robin'
  | 'supervisor'
  | 'dynamic'
  | 'sleeptime'
  | 'voice_sleeptime'
  | 'swarm';

export interface RoundRobinManager {
  manager_type?: 'round_robin';

  max_turns?: number | null;
}

export interface SleeptimeManager {
  manager_agent_id: string;

  manager_type?: 'sleeptime';

  sleeptime_agent_frequency?: number | null;
}

export interface SupervisorManager {
  manager_agent_id: string;

  manager_type?: 'supervisor';
}

export interface VoiceSleeptimeManager {
  manager_agent_id: string;

  manager_type?: 'voice_sleeptime';

  /**
   * The desired maximum length of messages in the context window of the convo agent.
   * This is a best effort, and may be off slightly due to user/assistant
   * interleaving.
   */
  max_message_buffer_length?: number | null;

  /**
   * The desired minimum length of messages in the context window of the convo agent.
   * This is a best effort, and may be off-by-one due to user/assistant interleaving.
   */
  min_message_buffer_length?: number | null;
}

export type GroupDeleteResponse = unknown;

export type GroupCountResponse = number;

export interface GroupCreateParams {
  /**
   * Body param:
   */
  agent_ids: Array<string>;

  /**
   * Body param:
   */
  description: string;

  /**
   * Body param: If set to True, the group will be hidden.
   */
  hidden?: boolean | null;

  /**
   * Body param:
   */
  manager_config?:
    | RoundRobinManager
    | SupervisorManager
    | DynamicManager
    | SleeptimeManager
    | VoiceSleeptimeManager;

  /**
   * Body param: The associated project id.
   */
  project_id?: string | null;

  /**
   * Body param:
   */
  shared_block_ids?: Array<string>;

  /**
   * Header param: The project slug to associate with the group (cloud only).
   */
  'X-Project'?: string;
}

export interface GroupUpdateParams {
  /**
   * Body param:
   */
  agent_ids?: Array<string> | null;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  manager_config?:
    | GroupUpdateParams.RoundRobinManagerUpdate
    | GroupUpdateParams.SupervisorManagerUpdate
    | GroupUpdateParams.DynamicManagerUpdate
    | GroupUpdateParams.SleeptimeManagerUpdate
    | GroupUpdateParams.VoiceSleeptimeManagerUpdate
    | null;

  /**
   * Body param: The associated project id.
   */
  project_id?: string | null;

  /**
   * Body param:
   */
  shared_block_ids?: Array<string> | null;

  /**
   * Header param: The project slug to associate with the group (cloud only).
   */
  'X-Project'?: string;
}

export namespace GroupUpdateParams {
  export interface RoundRobinManagerUpdate {
    manager_type?: 'round_robin';

    max_turns?: number | null;
  }

  export interface SupervisorManagerUpdate {
    manager_agent_id: string | null;

    manager_type?: 'supervisor';
  }

  export interface DynamicManagerUpdate {
    manager_agent_id?: string | null;

    manager_type?: 'dynamic';

    max_turns?: number | null;

    termination_token?: string | null;
  }

  export interface SleeptimeManagerUpdate {
    manager_agent_id?: string | null;

    manager_type?: 'sleeptime';

    sleeptime_agent_frequency?: number | null;
  }

  export interface VoiceSleeptimeManagerUpdate {
    manager_agent_id?: string | null;

    manager_type?: 'voice_sleeptime';

    /**
     * The desired maximum length of messages in the context window of the convo agent.
     * This is a best effort, and may be off slightly due to user/assistant
     * interleaving.
     */
    max_message_buffer_length?: number | null;

    /**
     * The desired minimum length of messages in the context window of the convo agent.
     * This is a best effort, and may be off-by-one due to user/assistant interleaving.
     */
    min_message_buffer_length?: number | null;
  }
}

export interface GroupListParams extends ArrayPageParams {
  /**
   * Search groups by manager type
   */
  manager_type?: ManagerType | null;

  /**
   * Search groups by project id
   */
  project_id?: string | null;
}

Groups.Messages = Messages;

export declare namespace Groups {
  export {
    type DynamicManager as DynamicManager,
    type Group as Group,
    type ManagerType as ManagerType,
    type RoundRobinManager as RoundRobinManager,
    type SleeptimeManager as SleeptimeManager,
    type SupervisorManager as SupervisorManager,
    type VoiceSleeptimeManager as VoiceSleeptimeManager,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCountResponse as GroupCountResponse,
    type GroupsArrayPage as GroupsArrayPage,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };

  export {
    Messages as Messages,
    type MessageUpdateResponse as MessageUpdateResponse,
    type MessageResetResponse as MessageResetResponse,
    type MessageStreamResponse as MessageStreamResponse,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageSendParams as MessageSendParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

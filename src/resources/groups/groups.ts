// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import {
  MessageCreateParams,
  MessageListParams,
  MessageModifyParams,
  MessageModifyResponse,
  MessageResetResponse,
  MessageStreamParams,
  MessageStreamResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Groups extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a new multi-agent group with the specified configuration.
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<Group> {
    return this._client.post('/v1/groups/', { body, ...options });
  }

  /**
   * Retrieve the group by id.
   */
  retrieve(groupID: string, options?: RequestOptions): APIPromise<Group> {
    return this._client.get(path`/v1/groups/${groupID}`, options);
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
   * Create a new multi-agent group with the specified configuration.
   */
  modify(groupID: string, body: GroupModifyParams, options?: RequestOptions): APIPromise<Group> {
    return this._client.patch(path`/v1/groups/${groupID}`, { body, ...options });
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

  /**
   * @deprecated
   */
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

export interface GroupCreateParams {
  agent_ids: Array<string>;

  description: string;

  /**
   * If set to True, the group will be hidden.
   */
  hidden?: boolean | null;

  manager_config?:
    | RoundRobinManager
    | SupervisorManager
    | DynamicManager
    | SleeptimeManager
    | VoiceSleeptimeManager;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  /**
   * @deprecated
   */
  shared_block_ids?: Array<string>;
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

export interface GroupModifyParams {
  agent_ids?: Array<string> | null;

  description?: string | null;

  manager_config?:
    | GroupModifyParams.RoundRobinManagerUpdate
    | GroupModifyParams.SupervisorManagerUpdate
    | GroupModifyParams.DynamicManagerUpdate
    | GroupModifyParams.SleeptimeManagerUpdate
    | GroupModifyParams.VoiceSleeptimeManagerUpdate
    | null;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  /**
   * @deprecated
   */
  shared_block_ids?: Array<string> | null;
}

export namespace GroupModifyParams {
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
    type GroupsArrayPage as GroupsArrayPage,
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
    type GroupModifyParams as GroupModifyParams,
  };

  export {
    Messages as Messages,
    type MessageModifyResponse as MessageModifyResponse,
    type MessageResetResponse as MessageResetResponse,
    type MessageStreamResponse as MessageStreamResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
    type MessageModifyParams as MessageModifyParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Creates an Agent or multiple Agents from a template
   */
  create(templateVersion: string, params: AgentCreateParams, options?: RequestOptions): APIPromise<void> {
    const { project_id, ...body } = params;
    return this._client.post(path`/v1/templates/${project_id}/${templateVersion}/agents`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AgentCreateParams {
  /**
   * Path param: The project id
   */
  project_id: string;

  /**
   * Body param: The name of the agent, optional otherwise a random one will be
   * assigned
   */
  agent_name?: string;

  /**
   * Body param: The identity ids to assign to the agent
   */
  identity_ids?: Array<string>;

  /**
   * Body param: Set an initial sequence of messages, if not provided, the agent will
   * start with the default message sequence, if an empty array is provided, the
   * agent will start with no messages
   */
  initial_message_sequence?: Array<AgentCreateParams.InitialMessageSequence>;

  /**
   * Body param: The memory variables to assign to the agent
   */
  memory_variables?: { [key: string]: string };

  /**
   * Body param: The tags to assign to the agent
   */
  tags?: Array<string>;

  /**
   * Body param: The tool variables to assign to the agent
   */
  tool_variables?: { [key: string]: string };
}

export namespace AgentCreateParams {
  export interface InitialMessageSequence {
    content: string;

    role: 'user' | 'system' | 'assistant';

    batch_item_id?: string | null;

    group_id?: string | null;

    name?: string | null;

    otid?: string | null;

    sender_id?: string | null;
  }
}

export declare namespace Agents {
  export { type AgentCreateParams as AgentCreateParams };
}

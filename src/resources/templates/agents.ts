// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Creates an Agent or multiple Agents from a template
   */
  create(
    templateVersion: string,
    body: AgentCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentCreateResponse> {
    return this._client.post(path`/v1/templates/${templateVersion}/agents`, { body, ...options });
  }
}

/**
 * Response containing created agent IDs and associated metadata
 */
export interface AgentCreateResponse {
  /**
   * Array of created agent IDs
   */
  agent_ids: Array<string>;

  /**
   * The deployment ID for the created agents
   */
  deployment_id: string;

  /**
   * Optional group ID if agents were created in a group
   */
  group_id: string | null;
}

export interface AgentCreateParams {
  /**
   * The name of the agent, optional otherwise a random one will be assigned
   */
  agent_name?: string;

  /**
   * The identity ids to assign to the agent
   */
  identity_ids?: Array<string>;

  /**
   * Set an initial sequence of messages, if not provided, the agent will start with
   * the default message sequence, if an empty array is provided, the agent will
   * start with no messages
   */
  initial_message_sequence?: Array<AgentCreateParams.InitialMessageSequence>;

  /**
   * The memory variables to assign to the agent
   */
  memory_variables?: { [key: string]: string };

  /**
   * The tags to assign to the agent
   */
  tags?: Array<string>;

  /**
   * The tool variables to assign to the agent
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
  export { type AgentCreateResponse as AgentCreateResponse, type AgentCreateParams as AgentCreateParams };
}

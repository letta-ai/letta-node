// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Context extends APIResource {
  /**
   * Retrieve the context window of a specific agent.
   */
  retrieve(
    agentId: string,
    params?: ContextRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContextWindowOverview>;
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ContextWindowOverview>;
  retrieve(
    agentId: string,
    params: ContextRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContextWindowOverview> {
    if (isRequestOptions(params)) {
      return this.retrieve(agentId, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/agents/${agentId}/context`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

/**
 * Overview of the context window, including the number of messages and tokens.
 */
export interface ContextWindowOverview {
  /**
   * The current number of tokens in the context window.
   */
  context_window_size_current: number;

  /**
   * The maximum amount of tokens the context window can hold.
   */
  context_window_size_max: number;

  /**
   * The content of the core memory.
   */
  core_memory: string;

  /**
   * The messages in the context window.
   */
  messages: Array<ContextWindowOverview.Message>;

  /**
   * The number of messages in the archival memory.
   */
  num_archival_memory: number;

  /**
   * The number of messages in the context window.
   */
  num_messages: number;

  /**
   * The number of messages in the recall memory.
   */
  num_recall_memory: number;

  /**
   * The number of tokens in the core memory.
   */
  num_tokens_core_memory: number;

  /**
   * The number of tokens in the external memory summary (archival + recall
   * metadata).
   */
  num_tokens_external_memory_summary: number;

  /**
   * The number of tokens in the messages list.
   */
  num_tokens_messages: number;

  /**
   * The number of tokens in the summary memory.
   */
  num_tokens_summary_memory: number;

  /**
   * The number of tokens in the system prompt.
   */
  num_tokens_system: number;

  /**
   * The content of the system prompt.
   */
  system_prompt: string;

  /**
   * The content of the summary memory.
   */
  summary_memory?: string | null;
}

export namespace ContextWindowOverview {
  /**
   * Letta's internal representation of a message. Includes methods to convert
   * to/from LLM provider formats.
   *
   * Attributes: id (str): The unique identifier of the message. role (MessageRole):
   * The role of the participant. text (str): The text of the message. user_id (str):
   * The unique identifier of the user. agent_id (str): The unique identifier of the
   * agent. model (str): The model used to make the function call. name (str): The
   * name of the participant. created_at (datetime): The time the message was
   * created. tool_calls (List[ToolCall]): The list of tool calls requested.
   * tool_call_id (str): The id of the tool call.
   */
  export interface Message {
    /**
     * The role of the participant.
     */
    role: 'assistant' | 'user' | 'tool' | 'function' | 'system';

    /**
     * The human-friendly ID of the Message
     */
    id?: string;

    /**
     * The unique identifier of the agent.
     */
    agent_id?: string | null;

    /**
     * The time the message was created.
     */
    created_at?: string;

    /**
     * The model used to make the function call.
     */
    model?: string | null;

    /**
     * The name of the participant.
     */
    name?: string | null;

    /**
     * The text of the message.
     */
    text?: string | null;

    /**
     * The id of the tool call.
     */
    tool_call_id?: string | null;

    /**
     * The list of tool calls requested.
     */
    tool_calls?: Array<Message.ToolCall> | null;

    /**
     * The unique identifier of the user.
     */
    user_id?: string | null;
  }

  export namespace Message {
    export interface ToolCall {
      /**
       * The ID of the tool call
       */
      id: string;

      /**
       * The arguments and name for the function
       */
      function: ToolCall.Function;

      type?: string;
    }

    export namespace ToolCall {
      /**
       * The arguments and name for the function
       */
      export interface Function {
        /**
         * The arguments to pass to the function (JSON dump)
         */
        arguments: string;

        /**
         * The name of the function to call
         */
        name: string;
      }
    }
  }
}

export interface ContextRetrieveParams {
  user_id?: string;
}

export declare namespace Context {
  export {
    type ContextWindowOverview as ContextWindowOverview,
    type ContextRetrieveParams as ContextRetrieveParams,
  };
}

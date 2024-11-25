// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MemoryMessagesAPI from './memory/messages';

export class Messages extends APIResource {
  /**
   * Process a user message and return the agent's response. This endpoint accepts a
   * message from a user and processes it through the agent. It can optionally stream
   * the response if 'stream_steps' or 'stream_tokens' is set to True.
   */
  create(
    agentId: string,
    body: MessageCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageCreateResponse> {
    return this._client.post(`/v1/agents/${agentId}/messages`, { body, ...options });
  }

  /**
   * Update the details of a message associated with an agent.
   */
  update(
    agentId: string,
    messageId: string,
    body: MessageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemoryMessagesAPI.Messageoutput> {
    return this._client.patch(`/v1/agents/${agentId}/messages/${messageId}`, { body, ...options });
  }

  /**
   * Retrieve message history for an agent.
   */
  list(
    agentId: string,
    query?: MessageListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListResponse>;
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<MessageListResponse>;
  list(
    agentId: string,
    query: MessageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MessageListResponse> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.get(`/v1/agents/${agentId}/messages`, { query, ...options });
  }
}

export interface MessageCreateResponse {
  AssistantMessage?: MessageCreateResponse.AssistantMessage;

  FunctionCall?: MessageCreateResponse.FunctionCall;

  FunctionCallDelta?: MessageCreateResponse.FunctionCallDelta;

  /**
   * A message representing a request to call a function (generated by the LLM to
   * trigger function execution).
   *
   * Attributes: function_call (Union[FunctionCall, FunctionCallDelta]): The function
   * call id (str): The ID of the message date (datetime): The date the message was
   * created in ISO format
   */
  FunctionCallMessage?: MessageCreateResponse.FunctionCallMessage;

  /**
   * A message representing the return value of a function call (generated by Letta
   * executing the requested function).
   *
   * Attributes: function_return (str): The return value of the function status
   * (Literal["success", "error"]): The status of the function call id (str): The ID
   * of the message date (datetime): The date the message was created in ISO format
   * function_call_id (str): A unique identifier for the function call that generated
   * this message
   */
  FunctionReturn?: MessageCreateResponse.FunctionReturn;

  /**
   * Representation of an agent's internal monologue.
   *
   * Attributes: internal_monologue (str): The internal monologue of the agent id
   * (str): The ID of the message date (datetime): The date the message was created
   * in ISO format
   */
  InternalMonologue?: MessageCreateResponse.InternalMonologue;

  /**
   * Usage statistics for the agent interaction.
   *
   * Attributes: completion_tokens (int): The number of tokens generated by the
   * agent. prompt_tokens (int): The number of tokens in the prompt. total_tokens
   * (int): The total number of tokens processed by the agent. step_count (int): The
   * number of steps taken by the agent.
   */
  LettaUsageStatistics?: MessageCreateResponse.LettaUsageStatistics;

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
  Message?: MessageCreateResponse.Message;

  MessageRole?: 'assistant' | 'user' | 'tool' | 'function' | 'system';

  /**
   * A message generated by the system. Never streamed back on a response, only used
   * for cursor pagination.
   *
   * Attributes: message (str): The message sent by the system id (str): The ID of
   * the message date (datetime): The date the message was created in ISO format
   */
  SystemMessage?: MessageCreateResponse.SystemMessage;

  ToolCall?: MessageCreateResponse.ToolCall;

  ToolCallFunction?: MessageCreateResponse.ToolCallFunction;

  /**
   * A message sent by the user. Never streamed back on a response, only used for
   * cursor pagination.
   *
   * Attributes: message (str): The message sent by the user id (str): The ID of the
   * message date (datetime): The date the message was created in ISO format
   */
  UserMessage?: MessageCreateResponse.UserMessage;
}

export namespace MessageCreateResponse {
  export interface AssistantMessage {
    id: string;

    assistant_message: string;

    date: string;

    message_type?: 'assistant_message';
  }

  export interface FunctionCall {
    arguments: string;

    function_call_id: string;

    name: string;
  }

  export interface FunctionCallDelta {
    arguments: string | null;

    function_call_id: string | null;

    name: string | null;
  }

  /**
   * A message representing a request to call a function (generated by the LLM to
   * trigger function execution).
   *
   * Attributes: function_call (Union[FunctionCall, FunctionCallDelta]): The function
   * call id (str): The ID of the message date (datetime): The date the message was
   * created in ISO format
   */
  export interface FunctionCallMessage {
    id: string;

    date: string;

    function_call: FunctionCallMessage.FunctionCall | FunctionCallMessage.FunctionCallDelta;

    message_type?: 'function_call';
  }

  export namespace FunctionCallMessage {
    export interface FunctionCall {
      arguments: string;

      function_call_id: string;

      name: string;
    }

    export interface FunctionCallDelta {
      arguments: string | null;

      function_call_id: string | null;

      name: string | null;
    }
  }

  /**
   * A message representing the return value of a function call (generated by Letta
   * executing the requested function).
   *
   * Attributes: function_return (str): The return value of the function status
   * (Literal["success", "error"]): The status of the function call id (str): The ID
   * of the message date (datetime): The date the message was created in ISO format
   * function_call_id (str): A unique identifier for the function call that generated
   * this message
   */
  export interface FunctionReturn {
    id: string;

    date: string;

    function_call_id: string;

    function_return: string;

    status: 'success' | 'error';

    message_type?: 'function_return';
  }

  /**
   * Representation of an agent's internal monologue.
   *
   * Attributes: internal_monologue (str): The internal monologue of the agent id
   * (str): The ID of the message date (datetime): The date the message was created
   * in ISO format
   */
  export interface InternalMonologue {
    id: string;

    date: string;

    internal_monologue: string;

    message_type?: 'internal_monologue';
  }

  /**
   * Usage statistics for the agent interaction.
   *
   * Attributes: completion_tokens (int): The number of tokens generated by the
   * agent. prompt_tokens (int): The number of tokens in the prompt. total_tokens
   * (int): The total number of tokens processed by the agent. step_count (int): The
   * number of steps taken by the agent.
   */
  export interface LettaUsageStatistics {
    /**
     * The number of tokens generated by the agent.
     */
    completion_tokens?: number;

    /**
     * The number of tokens in the prompt.
     */
    prompt_tokens?: number;

    /**
     * The number of steps taken by the agent.
     */
    step_count?: number;

    /**
     * The total number of tokens processed by the agent.
     */
    total_tokens?: number;
  }

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

  /**
   * A message generated by the system. Never streamed back on a response, only used
   * for cursor pagination.
   *
   * Attributes: message (str): The message sent by the system id (str): The ID of
   * the message date (datetime): The date the message was created in ISO format
   */
  export interface SystemMessage {
    id: string;

    date: string;

    message: string;

    message_type?: 'system_message';
  }

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

  export interface ToolCallFunction {
    /**
     * The arguments to pass to the function (JSON dump)
     */
    arguments: string;

    /**
     * The name of the function to call
     */
    name: string;
  }

  /**
   * A message sent by the user. Never streamed back on a response, only used for
   * cursor pagination.
   *
   * Attributes: message (str): The message sent by the user id (str): The ID of the
   * message date (datetime): The date the message was created in ISO format
   */
  export interface UserMessage {
    id: string;

    date: string;

    message: string;

    message_type?: 'user_message';
  }
}

export type MessageListResponse =
  | Array<MemoryMessagesAPI.Messageoutput>
  | Array<
      | MessageListResponse.SystemMessageOutput
      | MessageListResponse.UserMessageOutput
      | MessageListResponse.InternalMonologue
      | MessageListResponse.FunctionCallMessage
      | MessageListResponse.FunctionReturn
      | MessageListResponse.AssistantMessageOutput
    >;

export namespace MessageListResponse {
  /**
   * A message generated by the system. Never streamed back on a response, only used
   * for cursor pagination.
   *
   * Attributes: message (str): The message sent by the system id (str): The ID of
   * the message date (datetime): The date the message was created in ISO format
   */
  export interface SystemMessageOutput {
    id: string;

    date: string;

    message: string;

    message_type?: 'system_message';
  }

  /**
   * A message sent by the user. Never streamed back on a response, only used for
   * cursor pagination.
   *
   * Attributes: message (str): The message sent by the user id (str): The ID of the
   * message date (datetime): The date the message was created in ISO format
   */
  export interface UserMessageOutput {
    id: string;

    date: string;

    message: string;

    message_type?: 'user_message';
  }

  /**
   * Representation of an agent's internal monologue.
   *
   * Attributes: internal_monologue (str): The internal monologue of the agent id
   * (str): The ID of the message date (datetime): The date the message was created
   * in ISO format
   */
  export interface InternalMonologue {
    id: string;

    date: string;

    internal_monologue: string;

    message_type?: 'internal_monologue';
  }

  /**
   * A message representing a request to call a function (generated by the LLM to
   * trigger function execution).
   *
   * Attributes: function_call (Union[FunctionCall, FunctionCallDelta]): The function
   * call id (str): The ID of the message date (datetime): The date the message was
   * created in ISO format
   */
  export interface FunctionCallMessage {
    id: string;

    date: string;

    function_call:
      | FunctionCallMessage.LettaSchemasLettaMessageFunctionCall
      | FunctionCallMessage.FunctionCallDelta;

    message_type?: 'function_call';
  }

  export namespace FunctionCallMessage {
    export interface LettaSchemasLettaMessageFunctionCall {
      arguments: string;

      function_call_id: string;

      name: string;
    }

    export interface FunctionCallDelta {
      arguments: string | null;

      function_call_id: string | null;

      name: string | null;
    }
  }

  /**
   * A message representing the return value of a function call (generated by Letta
   * executing the requested function).
   *
   * Attributes: function_return (str): The return value of the function status
   * (Literal["success", "error"]): The status of the function call id (str): The ID
   * of the message date (datetime): The date the message was created in ISO format
   * function_call_id (str): A unique identifier for the function call that generated
   * this message
   */
  export interface FunctionReturn {
    id: string;

    date: string;

    function_call_id: string;

    function_return: string;

    status: 'success' | 'error';

    message_type?: 'function_return';
  }

  export interface AssistantMessageOutput {
    id: string;

    assistant_message: string;

    date: string;

    message_type?: 'assistant_message';
  }
}

export interface MessageCreateParams {
  /**
   * The messages to be sent to the agent.
   */
  messages: Array<MessageCreateParams.UnionMember0> | Array<MessageCreateParams.UnionMember1>;

  /**
   * [Only applicable if use_assistant_message is True] The name of the message
   * argument in the designated message tool.
   */
  assistant_message_function_kwarg?: string;

  /**
   * [Only applicable if use_assistant_message is True] The name of the designated
   * message tool.
   */
  assistant_message_function_name?: string;

  /**
   * Set True to return the raw Message object. Set False to return the Message in
   * the format of the Letta API.
   */
  return_message_object?: boolean;

  /**
   * Whether to asynchronously send the messages to the agent.
   */
  run_async?: boolean;

  /**
   * Flag to determine if the response should be streamed. Set to True for streaming
   * agent steps.
   */
  stream_steps?: boolean;

  /**
   * Flag to determine if individual tokens should be streamed. Set to True for token
   * streaming (requires stream_steps = True).
   */
  stream_tokens?: boolean;

  /**
   * [Only applicable if return_message_object is False] If true, returns
   * AssistantMessage objects when the agent calls a designated message tool. If
   * false, return FunctionCallMessage objects for all tool calls.
   */
  use_assistant_message?: boolean;
}

export namespace MessageCreateParams {
  /**
   * Request to create a message
   */
  export interface UnionMember0 {
    /**
     * The role of the participant.
     */
    role: 'user' | 'system';

    /**
     * The text of the message.
     */
    text: string;

    /**
     * The name of the participant.
     */
    name?: string | null;
  }

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
  export interface UnionMember1 {
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
    tool_calls?: Array<UnionMember1.ToolCall> | null;

    /**
     * The unique identifier of the user.
     */
    user_id?: string | null;
  }

  export namespace UnionMember1 {
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

export interface MessageUpdateParams {
  /**
   * The id of the message.
   */
  id: string;

  /**
   * The name of the participant.
   */
  name?: string | null;

  /**
   * The role of the participant.
   */
  role?: 'assistant' | 'user' | 'tool' | 'function' | 'system' | null;

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
  tool_calls?: Array<MessageUpdateParams.ToolCall> | null;
}

export namespace MessageUpdateParams {
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

export interface MessageListParams {
  /**
   * [Only applicable if use_assistant_message is True] The name of the message
   * argument in the designated message tool.
   */
  assistant_message_function_kwarg?: string;

  /**
   * [Only applicable if use_assistant_message is True] The name of the designated
   * message tool.
   */
  assistant_message_function_name?: string;

  /**
   * Message before which to retrieve the returned messages.
   */
  before?: string | null;

  /**
   * Maximum number of messages to retrieve.
   */
  limit?: number;

  /**
   * If true, returns Message objects. If false, return LettaMessage objects.
   */
  msg_object?: boolean;

  /**
   * [Only applicable if msg_object is False] If true, returns AssistantMessage
   * objects when the agent calls a designated message tool. If false, return
   * FunctionCallMessage objects for all tool calls.
   */
  use_assistant_message?: boolean;
}

export declare namespace Messages {
  export {
    type MessageCreateResponse as MessageCreateResponse,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
  };
}

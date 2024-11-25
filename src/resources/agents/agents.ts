// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as ArchivalAPI from './archival';
import {
  Archival,
  ArchivalCreateParams,
  ArchivalCreateResponse,
  ArchivalDeleteParams,
  ArchivalDeleteResponse,
  ArchivalListParams,
  ArchivalListResponse,
} from './archival';
import * as ContextAPI from './context';
import { Context, ContextRetrieveParams, ContextWindowOverview } from './context';
import * as MessagesAPI from './messages';
import {
  MessageListParams,
  MessageListResponse,
  MessageProcessParams,
  MessageUpdateParams,
  Messages,
} from './messages';
import * as SourcesAPI from './sources';
import { SourceRetrieveResponse, Sources } from './sources';
import * as ToolsAPI from './tools';
import { ToolRetrieveParams, ToolRetrieveResponse, Tools } from './tools';
import * as VersionTemplateAPI from './version-template';
import {
  VersionTemplate,
  VersionTemplateCreateParams,
  VersionTemplateCreateResponse,
} from './version-template';
import * as ModelsAPI from '../models/models';
import * as MemoryAPI from './memory/memory';
import { Memory as MemoryAPIMemory, MemoryUpdateParams } from './memory/memory';

export class Agents extends APIResource {
  context: ContextAPI.Context = new ContextAPI.Context(this._client);
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);
  memory: MemoryAPI.Memory = new MemoryAPI.Memory(this._client);
  archival: ArchivalAPI.Archival = new ArchivalAPI.Archival(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  versionTemplate: VersionTemplateAPI.VersionTemplate = new VersionTemplateAPI.VersionTemplate(this._client);

  /**
   * Create a new agent with the specified configuration.
   */
  create(params: AgentCreateParams, options?: Core.RequestOptions): Core.APIPromise<AgentState> {
    const { body_user_id, header_user_id, ...body } = params;
    return this._client.post('/v1/agents/', {
      body: { user_id: body_user_id, ...body },
      ...options,
      headers: { ...(header_user_id != null ? { user_id: header_user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Get the state of the agent.
   */
  retrieve(
    agentId: string,
    params?: AgentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentState>;
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<AgentState>;
  retrieve(
    agentId: string,
    params: AgentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentState> {
    if (isRequestOptions(params)) {
      return this.retrieve(agentId, {}, params);
    }
    const { user_id } = params;
    return this._client.get(`/v1/agents/${agentId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Update an exsiting agent
   */
  update(
    agentId: string,
    params: AgentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentState> {
    const { body_user_id, header_user_id, ...body } = params;
    return this._client.patch(`/v1/agents/${agentId}`, {
      body: { user_id: body_user_id, ...body },
      ...options,
      headers: { ...(header_user_id != null ? { user_id: header_user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * List all agents associated with a given user. This endpoint retrieves a list of
   * all agents and their configurations associated with the specified user ID.
   */
  list(params?: AgentListParams, options?: Core.RequestOptions): Core.APIPromise<AgentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AgentListResponse>;
  list(
    params: AgentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { user_id, ...query } = params;
    return this._client.get('/v1/agents/', {
      query,
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Delete an agent.
   */
  delete(
    agentId: string,
    params?: AgentDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  delete(agentId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  delete(
    agentId: string,
    params: AgentDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(params)) {
      return this.delete(agentId, {}, params);
    }
    const { user_id } = params;
    return this._client.delete(`/v1/agents/${agentId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Add tools to an existing agent
   */
  addTool(
    agentId: string,
    toolId: string,
    params?: AgentAddToolParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentState>;
  addTool(agentId: string, toolId: string, options?: Core.RequestOptions): Core.APIPromise<AgentState>;
  addTool(
    agentId: string,
    toolId: string,
    params: AgentAddToolParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentState> {
    if (isRequestOptions(params)) {
      return this.addTool(agentId, toolId, {}, params);
    }
    const { user_id } = params;
    return this._client.patch(`/v1/agents/${agentId}/add-tool/${toolId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }

  /**
   * Migrate an agent to a new versioned agent template
   */
  migrate(
    agentId: string,
    body: AgentMigrateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentMigrateResponse> {
    return this._client.post(`/v1/agents/${agentId}/migrate`, { body, ...options });
  }

  /**
   * Add tools to an existing agent
   */
  removeTool(
    agentId: string,
    toolId: string,
    params?: AgentRemoveToolParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentState>;
  removeTool(agentId: string, toolId: string, options?: Core.RequestOptions): Core.APIPromise<AgentState>;
  removeTool(
    agentId: string,
    toolId: string,
    params: AgentRemoveToolParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentState> {
    if (isRequestOptions(params)) {
      return this.removeTool(agentId, toolId, {}, params);
    }
    const { user_id } = params;
    return this._client.patch(`/v1/agents/${agentId}/remove-tool/${toolId}`, {
      ...options,
      headers: { ...(user_id != null ? { user_id: user_id } : undefined), ...options?.headers },
    });
  }
}

/**
 * Representation of an agent's state. This is the state of the agent at a given
 * time, and is persisted in the DB backend. The state has all the information
 * needed to recreate a persisted agent.
 *
 * Parameters: id (str): The unique identifier of the agent. name (str): The name
 * of the agent (must be unique to the user). created_at (datetime): The datetime
 * the agent was created. message_ids (List[str]): The ids of the messages in the
 * agent's in-context memory. memory (Memory): The in-context memory of the agent.
 * tools (List[str]): The tools used by the agent. This includes any memory editing
 * functions specified in `memory`. system (str): The system prompt used by the
 * agent. llm_config (LLMConfig): The LLM configuration used by the agent.
 * embedding_config (EmbeddingConfig): The embedding configuration used by the
 * agent.
 */
export interface AgentState {
  /**
   * The type of agent.
   */
  agent_type: 'memgpt_agent' | 'split_thread_agent' | 'o1_agent';

  /**
   * The embedding configuration used by the agent.
   */
  embedding_config: ModelsAPI.EmbeddingConfig;

  /**
   * The LLM configuration used by the agent.
   */
  llm_config: ModelsAPI.LlmConfig;

  /**
   * The name of the agent.
   */
  name: string;

  /**
   * The system prompt used by the agent.
   */
  system: string;

  /**
   * The tools used by the agent.
   */
  tools: Array<string>;

  /**
   * The human-friendly ID of the Agent
   */
  id?: string;

  /**
   * The datetime the agent was created.
   */
  created_at?: string;

  /**
   * The description of the agent.
   */
  description?: string | null;

  /**
   * Represents the in-context memory of the agent. This includes both the `Block`
   * objects (labelled by sections), as well as tools to edit the blocks.
   *
   * Attributes: memory (Dict[str, Block]): Mapping from memory block section to
   * memory block.
   */
  memory?: Memory;

  /**
   * The ids of the messages in the agent's in-context memory.
   */
  message_ids?: Array<string> | null;

  /**
   * The metadata of the agent.
   */
  metadata_?: unknown | null;

  /**
   * The tags associated with the agent.
   */
  tags?: Array<string> | null;

  /**
   * The list of tool rules.
   */
  tool_rules?: Array<AgentState.ToolRule> | null;

  /**
   * The user id of the agent.
   */
  user_id?: string | null;
}

export namespace AgentState {
  export interface ToolRule {
    /**
     * The name of the tool. Must exist in the database for the user's organization.
     */
    tool_name: string;
  }
}

export interface ArchivalMemorySummary {
  /**
   * Number of rows in archival memory
   */
  size: number;
}

export interface LettaResponse {
  AssistantMessage?: LettaResponse.AssistantMessage;

  FunctionCall?: LettaResponse.FunctionCall;

  FunctionCallDelta?: LettaResponse.FunctionCallDelta;

  /**
   * A message representing a request to call a function (generated by the LLM to
   * trigger function execution).
   *
   * Attributes: function_call (Union[FunctionCall, FunctionCallDelta]): The function
   * call id (str): The ID of the message date (datetime): The date the message was
   * created in ISO format
   */
  FunctionCallMessage?: LettaResponse.FunctionCallMessage;

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
  FunctionReturn?: LettaResponse.FunctionReturn;

  /**
   * Representation of an agent's internal monologue.
   *
   * Attributes: internal_monologue (str): The internal monologue of the agent id
   * (str): The ID of the message date (datetime): The date the message was created
   * in ISO format
   */
  InternalMonologue?: LettaResponse.InternalMonologue;

  /**
   * Usage statistics for the agent interaction.
   *
   * Attributes: completion_tokens (int): The number of tokens generated by the
   * agent. prompt_tokens (int): The number of tokens in the prompt. total_tokens
   * (int): The total number of tokens processed by the agent. step_count (int): The
   * number of steps taken by the agent.
   */
  LettaUsageStatistics?: LettaResponse.LettaUsageStatistics;

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
  Message?: LettaResponse.Message;

  MessageRole?: 'assistant' | 'user' | 'tool' | 'function' | 'system';

  /**
   * A message generated by the system. Never streamed back on a response, only used
   * for cursor pagination.
   *
   * Attributes: message (str): The message sent by the system id (str): The ID of
   * the message date (datetime): The date the message was created in ISO format
   */
  SystemMessage?: LettaResponse.SystemMessage;

  ToolCall?: LettaResponse.ToolCall;

  ToolCallFunction?: LettaResponse.ToolCallFunction;

  /**
   * A message sent by the user. Never streamed back on a response, only used for
   * cursor pagination.
   *
   * Attributes: message (str): The message sent by the user id (str): The ID of the
   * message date (datetime): The date the message was created in ISO format
   */
  UserMessage?: LettaResponse.UserMessage;
}

export namespace LettaResponse {
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

/**
 * Represents the in-context memory of the agent. This includes both the `Block`
 * objects (labelled by sections), as well as tools to edit the blocks.
 *
 * Attributes: memory (Dict[str, Block]): Mapping from memory block section to
 * memory block.
 */
export interface Memory {
  /**
   * Mapping from memory block section to memory block.
   */
  memory?: Record<string, Shared.Block>;

  /**
   * Jinja2 template for compiling memory blocks into a prompt string
   */
  prompt_template?: string;
}

export interface RecallMemorySummary {
  /**
   * Number of rows in recall memory
   */
  size: number;
}

export type AgentListResponse = Array<AgentState>;

export type AgentDeleteResponse = unknown;

export interface AgentMigrateResponse {
  success: true;
}

export interface AgentCreateParams {
  /**
   * Body param: Enum to represent the type of agent.
   */
  agent_type?: 'memgpt_agent' | 'split_thread_agent' | 'o1_agent' | null;

  /**
   * Body param: The description of the agent.
   */
  description?: string | null;

  /**
   * Body param: Embedding model configuration. This object specifies all the
   * information necessary to access an embedding model to usage with Letta, except
   * for secret keys.
   *
   * Attributes: embedding_endpoint_type (str): The endpoint type for the model.
   * embedding_endpoint (str): The endpoint for the model. embedding_model (str): The
   * model for the embedding. embedding_dim (int): The dimension of the embedding.
   * embedding_chunk_size (int): The chunk size of the embedding. azure_endpoint
   * (:obj:`str`, optional): The Azure endpoint for the model (Azure only).
   * azure_version (str): The Azure version for the model (Azure only).
   * azure_deployment (str): The Azure deployment for the model (Azure only).
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * Body param: The initial set of messages to put in the agent's in-context memory.
   */
  initial_message_sequence?: Array<AgentCreateParams.InitialMessageSequence> | null;

  /**
   * Body param: Configuration for a Language Model (LLM) model. This object
   * specifies all the information necessary to access an LLM model to usage with
   * Letta, except for secret keys.
   *
   * Attributes: model (str): The name of the LLM model. model_endpoint_type (str):
   * The endpoint type for the model. model_endpoint (str): The endpoint for the
   * model. model_wrapper (str): The wrapper for the model. This is used to wrap
   * additional text around the input/output of the model. This is useful for
   * text-to-text completions, such as the Completions API in OpenAI. context_window
   * (int): The context window size for the model. put_inner_thoughts_in_kwargs
   * (bool): Puts `inner_thoughts` as a kwarg in the function call if this is set to
   * True. This helps with function calling performance and also the generation of
   * inner thoughts.
   */
  llm_config?: ModelsAPI.LlmConfig | null;

  /**
   * Body param: Represents the in-context memory of the agent. This includes both
   * the `Block` objects (labelled by sections), as well as tools to edit the blocks.
   *
   * Attributes: memory (Dict[str, Block]): Mapping from memory block section to
   * memory block.
   */
  memory?: Memory | null;

  /**
   * Body param: The ids of the messages in the agent's in-context memory.
   */
  message_ids?: Array<string> | null;

  /**
   * Body param: The metadata of the agent.
   */
  metadata_?: unknown | null;

  /**
   * Body param: The name of the agent.
   */
  name?: string | null;

  /**
   * Body param: The system prompt used by the agent.
   */
  system?: string | null;

  /**
   * Body param: The tags associated with the agent.
   */
  tags?: Array<string> | null;

  /**
   * Body param: The tool rules governing the agent.
   */
  tool_rules?: Array<AgentCreateParams.ToolRule> | null;

  /**
   * Body param: The tools used by the agent.
   */
  tools?: Array<string> | null;

  /**
   * Body param: The user id of the agent.
   */
  body_user_id?: string | null;

  /**
   * Header param:
   */
  header_user_id?: string;
}

export namespace AgentCreateParams {
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
  export interface InitialMessageSequence {
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
    tool_calls?: Array<InitialMessageSequence.ToolCall> | null;

    /**
     * The unique identifier of the user.
     */
    user_id?: string | null;
  }

  export namespace InitialMessageSequence {
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

  export interface ToolRule {
    /**
     * The name of the tool. Must exist in the database for the user's organization.
     */
    tool_name: string;
  }
}

export interface AgentRetrieveParams {
  user_id?: string;
}

export interface AgentUpdateParams {
  /**
   * Body param: The id of the agent.
   */
  id: string;

  /**
   * Body param: The description of the agent.
   */
  description?: string | null;

  /**
   * Body param: Embedding model configuration. This object specifies all the
   * information necessary to access an embedding model to usage with Letta, except
   * for secret keys.
   *
   * Attributes: embedding_endpoint_type (str): The endpoint type for the model.
   * embedding_endpoint (str): The endpoint for the model. embedding_model (str): The
   * model for the embedding. embedding_dim (int): The dimension of the embedding.
   * embedding_chunk_size (int): The chunk size of the embedding. azure_endpoint
   * (:obj:`str`, optional): The Azure endpoint for the model (Azure only).
   * azure_version (str): The Azure version for the model (Azure only).
   * azure_deployment (str): The Azure deployment for the model (Azure only).
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * Body param: Configuration for a Language Model (LLM) model. This object
   * specifies all the information necessary to access an LLM model to usage with
   * Letta, except for secret keys.
   *
   * Attributes: model (str): The name of the LLM model. model_endpoint_type (str):
   * The endpoint type for the model. model_endpoint (str): The endpoint for the
   * model. model_wrapper (str): The wrapper for the model. This is used to wrap
   * additional text around the input/output of the model. This is useful for
   * text-to-text completions, such as the Completions API in OpenAI. context_window
   * (int): The context window size for the model. put_inner_thoughts_in_kwargs
   * (bool): Puts `inner_thoughts` as a kwarg in the function call if this is set to
   * True. This helps with function calling performance and also the generation of
   * inner thoughts.
   */
  llm_config?: ModelsAPI.LlmConfig | null;

  /**
   * Body param: Represents the in-context memory of the agent. This includes both
   * the `Block` objects (labelled by sections), as well as tools to edit the blocks.
   *
   * Attributes: memory (Dict[str, Block]): Mapping from memory block section to
   * memory block.
   */
  memory?: Memory | null;

  /**
   * Body param: The ids of the messages in the agent's in-context memory.
   */
  message_ids?: Array<string> | null;

  /**
   * Body param: The metadata of the agent.
   */
  metadata_?: unknown | null;

  /**
   * Body param: The name of the agent.
   */
  name?: string | null;

  /**
   * Body param: The system prompt used by the agent.
   */
  system?: string | null;

  /**
   * Body param: The tags associated with the agent.
   */
  tags?: Array<string> | null;

  /**
   * Body param: The tools used by the agent.
   */
  tools?: Array<string> | null;

  /**
   * Body param: The user id of the agent.
   */
  body_user_id?: string | null;

  /**
   * Header param:
   */
  header_user_id?: string;
}

export interface AgentListParams {
  /**
   * Query param: Name of the agent
   */
  name?: string | null;

  /**
   * Query param: List of tags to filter agents by
   */
  tags?: Array<string> | null;

  /**
   * Header param:
   */
  user_id?: string;
}

export interface AgentDeleteParams {
  user_id?: string;
}

export interface AgentAddToolParams {
  user_id?: string;
}

export interface AgentMigrateParams {
  preserve_core_memories: boolean;

  to_template: string;

  /**
   * If you chose to not preserve core memories, you should provide the new variables
   * for the core memories
   */
  variables?: Record<string, string>;
}

export interface AgentRemoveToolParams {
  user_id?: string;
}

Agents.Context = Context;
Agents.Tools = Tools;
Agents.Sources = Sources;
Agents.Memory = MemoryAPIMemory;
Agents.Archival = Archival;
Agents.Messages = Messages;
Agents.VersionTemplate = VersionTemplate;

export declare namespace Agents {
  export {
    type AgentState as AgentState,
    type ArchivalMemorySummary as ArchivalMemorySummary,
    type LettaResponse as LettaResponse,
    type Memory as Memory,
    type RecallMemorySummary as RecallMemorySummary,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentMigrateResponse as AgentMigrateResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentDeleteParams as AgentDeleteParams,
    type AgentAddToolParams as AgentAddToolParams,
    type AgentMigrateParams as AgentMigrateParams,
    type AgentRemoveToolParams as AgentRemoveToolParams,
  };

  export {
    Context as Context,
    type ContextWindowOverview as ContextWindowOverview,
    type ContextRetrieveParams as ContextRetrieveParams,
  };

  export {
    Tools as Tools,
    type ToolRetrieveResponse as ToolRetrieveResponse,
    type ToolRetrieveParams as ToolRetrieveParams,
  };

  export { Sources as Sources, type SourceRetrieveResponse as SourceRetrieveResponse };

  export { MemoryAPIMemory as Memory, type MemoryUpdateParams as MemoryUpdateParams };

  export {
    Archival as Archival,
    type ArchivalCreateResponse as ArchivalCreateResponse,
    type ArchivalListResponse as ArchivalListResponse,
    type ArchivalDeleteResponse as ArchivalDeleteResponse,
    type ArchivalCreateParams as ArchivalCreateParams,
    type ArchivalListParams as ArchivalListParams,
    type ArchivalDeleteParams as ArchivalDeleteParams,
  };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageProcessParams as MessageProcessParams,
  };

  export {
    VersionTemplate as VersionTemplate,
    type VersionTemplateCreateResponse as VersionTemplateCreateResponse,
    type VersionTemplateCreateParams as VersionTemplateCreateParams,
  };
}

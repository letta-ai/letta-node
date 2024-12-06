// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MessagesAPI from './messages';
import {
  MessageCreateParams,
  MessageCreateResponse,
  MessageListParams,
  MessageListResponse,
  MessageUpdateParams,
  MessageUpdateResponse,
  Messages,
} from './messages';

export class Agents extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a new agent with the specified configuration.
   */
  create(body: AgentCreateParams, options?: Core.RequestOptions): Core.APIPromise<AgentState> {
    return this._client.post('/v1/agents/', { body, ...options });
  }

  /**
   * Get the state of the agent.
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<AgentState> {
    return this._client.get(`/v1/agents/${agentId}`, options);
  }

  /**
   * Update an exsiting agent
   */
  update(
    agentId: string,
    body: AgentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentState> {
    return this._client.patch(`/v1/agents/${agentId}`, { body, ...options });
  }

  /**
   * List all agents associated with a given user. This endpoint retrieves a list of
   * all agents and their configurations associated with the specified user ID.
   */
  list(query?: AgentListParams, options?: Core.RequestOptions): Core.APIPromise<AgentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AgentListResponse>;
  list(
    query: AgentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/agents/', { query, ...options });
  }

  /**
   * Delete an agent.
   */
  delete(agentId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/agents/${agentId}`, options);
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
  embedding_config: AgentState.EmbeddingConfig;

  /**
   * The LLM configuration used by the agent.
   */
  llm_config: AgentState.LlmConfig;

  /**
   * The in-context memory of the agent.
   */
  memory: AgentState.Memory;

  /**
   * The name of the agent.
   */
  name: string;

  /**
   * The sources used by the agent.
   */
  sources: Array<AgentState.Source>;

  /**
   * The system prompt used by the agent.
   */
  system: string;

  /**
   * The tags associated with the agent.
   */
  tags: Array<string>;

  /**
   * The tools used by the agent.
   */
  tool_names: Array<string>;

  /**
   * The tools used by the agent.
   */
  tools: Array<AgentState.Tool>;

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
   * The ids of the messages in the agent's in-context memory.
   */
  message_ids?: Array<string> | null;

  /**
   * The metadata of the agent.
   */
  metadata_?: unknown | null;

  /**
   * The list of tool rules.
   */
  tool_rules?: Array<AgentState.ChildToolRule | AgentState.InitToolRule | AgentState.TerminalToolRule> | null;

  /**
   * The user id of the agent.
   */
  user_id?: string | null;
}

export namespace AgentState {
  /**
   * The embedding configuration used by the agent.
   */
  export interface EmbeddingConfig {
    /**
     * The dimension of the embedding.
     */
    embedding_dim: number;

    /**
     * The endpoint type for the model.
     */
    embedding_endpoint_type: string;

    /**
     * The model for the embedding.
     */
    embedding_model: string;

    /**
     * The Azure deployment for the model.
     */
    azure_deployment?: string | null;

    /**
     * The Azure endpoint for the model.
     */
    azure_endpoint?: string | null;

    /**
     * The Azure version for the model.
     */
    azure_version?: string | null;

    /**
     * The chunk size of the embedding.
     */
    embedding_chunk_size?: number | null;

    /**
     * The endpoint for the model (`None` if local).
     */
    embedding_endpoint?: string | null;
  }

  /**
   * The LLM configuration used by the agent.
   */
  export interface LlmConfig {
    /**
     * The context window size for the model.
     */
    context_window: number;

    /**
     * LLM model name.
     */
    model: string;

    /**
     * The endpoint type for the model.
     */
    model_endpoint_type:
      | 'openai'
      | 'anthropic'
      | 'cohere'
      | 'google_ai'
      | 'azure'
      | 'groq'
      | 'ollama'
      | 'webui'
      | 'webui-legacy'
      | 'lmstudio'
      | 'lmstudio-legacy'
      | 'llamacpp'
      | 'koboldcpp'
      | 'vllm'
      | 'hugging-face'
      | 'mistral'
      | 'together';

    /**
     * The endpoint for the model.
     */
    model_endpoint?: string | null;

    /**
     * The wrapper for the model.
     */
    model_wrapper?: string | null;

    /**
     * Puts 'inner_thoughts' as a kwarg in the function call if this is set to True.
     * This helps with function calling performance and also the generation of inner
     * thoughts.
     */
    put_inner_thoughts_in_kwargs?: boolean | null;
  }

  /**
   * The in-context memory of the agent.
   */
  export interface Memory {
    /**
     * Memory blocks contained in the agent's in-context memory
     */
    blocks: Array<Memory.Block>;

    /**
     * Jinja2 template for compiling memory blocks into a prompt string
     */
    prompt_template?: string;
  }

  export namespace Memory {
    /**
     * A Block represents a reserved section of the LLM's context window which is
     * editable. `Block` objects contained in the `Memory` object, which is able to
     * edit the Block values.
     *
     * Parameters: label (str): The label of the block (e.g. 'human', 'persona'). This
     * defines a category for the block. value (str): The value of the block. This is
     * the string that is represented in the context window. limit (int): The character
     * limit of the block. is*template (bool): Whether the block is a template (e.g.
     * saved human/persona options). Non-template blocks are not stored in the database
     * and are ephemeral, while templated blocks are stored in the database. label
     * (str): The label of the block (e.g. 'human', 'persona'). This defines a category
     * for the block. template_name (str): The name of the block template (if it is a
     * template). description (str): Description of the block. metadata* (Dict):
     * Metadata of the block. user_id (str): The unique identifier of the user
     * associated with the block.
     */
    export interface Block {
      /**
       * Value of the block.
       */
      value: string;

      /**
       * The human-friendly ID of the Block
       */
      id?: string;

      /**
       * The id of the user that made this Block.
       */
      created_by_id?: string | null;

      /**
       * Description of the block.
       */
      description?: string | null;

      /**
       * Whether the block is a template (e.g. saved human/persona options).
       */
      is_template?: boolean;

      /**
       * Label of the block (e.g. 'human', 'persona') in the context window.
       */
      label?: string | null;

      /**
       * The id of the user that last updated this Block.
       */
      last_updated_by_id?: string | null;

      /**
       * Character limit of the block.
       */
      limit?: number;

      /**
       * Metadata of the block.
       */
      metadata_?: unknown | null;

      /**
       * Name of the block if it is a template.
       */
      name?: string | null;

      /**
       * The unique identifier of the organization associated with the block.
       */
      organization_id?: string | null;
    }
  }

  /**
   * Representation of a source, which is a collection of files and passages.
   *
   * Parameters: id (str): The ID of the source name (str): The name of the source.
   * embedding*config (EmbeddingConfig): The embedding configuration used by the
   * source. user_id (str): The ID of the user that created the source. metadata*
   * (dict): Metadata associated with the source. description (str): The description
   * of the source.
   */
  export interface Source {
    /**
     * The embedding configuration used by the source.
     */
    embedding_config: Source.EmbeddingConfig;

    /**
     * The name of the source.
     */
    name: string;

    /**
     * The human-friendly ID of the Source
     */
    id?: string;

    /**
     * The timestamp when the source was created.
     */
    created_at?: string | null;

    /**
     * The id of the user that made this Tool.
     */
    created_by_id?: string | null;

    /**
     * The description of the source.
     */
    description?: string | null;

    /**
     * The id of the user that made this Tool.
     */
    last_updated_by_id?: string | null;

    /**
     * Metadata associated with the source.
     */
    metadata_?: unknown | null;

    /**
     * The ID of the organization that created the source.
     */
    organization_id?: string | null;

    /**
     * The timestamp when the source was last updated.
     */
    updated_at?: string | null;
  }

  export namespace Source {
    /**
     * The embedding configuration used by the source.
     */
    export interface EmbeddingConfig {
      /**
       * The dimension of the embedding.
       */
      embedding_dim: number;

      /**
       * The endpoint type for the model.
       */
      embedding_endpoint_type: string;

      /**
       * The model for the embedding.
       */
      embedding_model: string;

      /**
       * The Azure deployment for the model.
       */
      azure_deployment?: string | null;

      /**
       * The Azure endpoint for the model.
       */
      azure_endpoint?: string | null;

      /**
       * The Azure version for the model.
       */
      azure_version?: string | null;

      /**
       * The chunk size of the embedding.
       */
      embedding_chunk_size?: number | null;

      /**
       * The endpoint for the model (`None` if local).
       */
      embedding_endpoint?: string | null;
    }
  }

  /**
   * Representation of a tool, which is a function that can be called by the agent.
   *
   * Parameters: id (str): The unique identifier of the tool. name (str): The name of
   * the function. tags (List[str]): Metadata tags. source_code (str): The source
   * code of the function. json_schema (Dict): The JSON schema of the function.
   */
  export interface Tool {
    /**
     * The source code of the function.
     */
    source_code: string;

    /**
     * The human-friendly ID of the Tool
     */
    id?: string;

    /**
     * The id of the user that made this Tool.
     */
    created_by_id?: string | null;

    /**
     * The description of the tool.
     */
    description?: string | null;

    /**
     * The JSON schema of the function.
     */
    json_schema?: unknown | null;

    /**
     * The id of the user that made this Tool.
     */
    last_updated_by_id?: string | null;

    /**
     * The module of the function.
     */
    module?: string | null;

    /**
     * The name of the function.
     */
    name?: string | null;

    /**
     * The unique identifier of the organization associated with the tool.
     */
    organization_id?: string | null;

    /**
     * The type of the source code.
     */
    source_type?: string | null;

    /**
     * Metadata tags.
     */
    tags?: Array<string>;
  }

  /**
   * A ToolRule represents a tool that can be invoked by the agent.
   */
  export interface ChildToolRule {
    /**
     * The children tools that can be invoked.
     */
    children: Array<string>;

    /**
     * The name of the tool. Must exist in the database for the user's organization.
     */
    tool_name: string;

    /**
     * Type of tool rule.
     */
    type?: 'InitToolRule' | 'TerminalToolRule' | 'continue_loop' | 'ToolRule' | 'require_parent_tools';
  }

  /**
   * Represents the initial tool rule configuration.
   */
  export interface InitToolRule {
    /**
     * The name of the tool. Must exist in the database for the user's organization.
     */
    tool_name: string;

    /**
     * Type of tool rule.
     */
    type?: 'InitToolRule' | 'TerminalToolRule' | 'continue_loop' | 'ToolRule' | 'require_parent_tools';
  }

  /**
   * Represents a terminal tool rule configuration where if this tool gets called, it
   * must end the agent loop.
   */
  export interface TerminalToolRule {
    /**
     * The name of the tool. Must exist in the database for the user's organization.
     */
    tool_name: string;

    /**
     * Type of tool rule.
     */
    type?: 'InitToolRule' | 'TerminalToolRule' | 'continue_loop' | 'ToolRule' | 'require_parent_tools';
  }
}

export type AgentListResponse = Array<AgentState>;

export type AgentDeleteResponse = unknown;

export interface AgentMigrateResponse {
  success: true;
}

export interface AgentCreateParams {
  /**
   * The blocks to create in the agent's in-context memory.
   */
  memory_blocks: Array<AgentCreateParams.MemoryBlock>;

  /**
   * Enum to represent the type of agent.
   */
  agent_type?: 'memgpt_agent' | 'split_thread_agent' | 'o1_agent' | null;

  /**
   * The description of the agent.
   */
  description?: string | null;

  /**
   * Embedding model configuration. This object specifies all the information
   * necessary to access an embedding model to usage with Letta, except for secret
   * keys.
   *
   * Attributes: embedding_endpoint_type (str): The endpoint type for the model.
   * embedding_endpoint (str): The endpoint for the model. embedding_model (str): The
   * model for the embedding. embedding_dim (int): The dimension of the embedding.
   * embedding_chunk_size (int): The chunk size of the embedding. azure_endpoint
   * (:obj:`str`, optional): The Azure endpoint for the model (Azure only).
   * azure_version (str): The Azure version for the model (Azure only).
   * azure_deployment (str): The Azure deployment for the model (Azure only).
   */
  embedding_config?: AgentCreateParams.EmbeddingConfig | null;

  /**
   * The initial set of messages to put in the agent's in-context memory.
   */
  initial_message_sequence?: Array<AgentCreateParams.InitialMessageSequence> | null;

  /**
   * Configuration for a Language Model (LLM) model. This object specifies all the
   * information necessary to access an LLM model to usage with Letta, except for
   * secret keys.
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
  llm_config?: AgentCreateParams.LlmConfig | null;

  /**
   * The ids of the messages in the agent's in-context memory.
   */
  message_ids?: Array<string> | null;

  /**
   * The metadata of the agent.
   */
  metadata_?: unknown | null;

  /**
   * The name of the agent.
   */
  name?: string | null;

  /**
   * The system prompt used by the agent.
   */
  system?: string | null;

  /**
   * The tags associated with the agent.
   */
  tags?: Array<string> | null;

  /**
   * The tool rules governing the agent.
   */
  tool_rules?: Array<
    AgentCreateParams.ChildToolRule | AgentCreateParams.InitToolRule | AgentCreateParams.TerminalToolRule
  > | null;

  /**
   * The tools used by the agent.
   */
  tools?: Array<string> | null;

  /**
   * The user id of the agent.
   */
  user_id?: string | null;
}

export namespace AgentCreateParams {
  /**
   * Create a block
   */
  export interface MemoryBlock {
    /**
     * Label of the block.
     */
    label: string;

    /**
     * Value of the block.
     */
    value: string;

    /**
     * Description of the block.
     */
    description?: string | null;

    is_template?: boolean;

    /**
     * Character limit of the block.
     */
    limit?: number;

    /**
     * Metadata of the block.
     */
    metadata_?: unknown | null;

    /**
     * Name of the block if it is a template.
     */
    name?: string | null;
  }

  /**
   * Embedding model configuration. This object specifies all the information
   * necessary to access an embedding model to usage with Letta, except for secret
   * keys.
   *
   * Attributes: embedding_endpoint_type (str): The endpoint type for the model.
   * embedding_endpoint (str): The endpoint for the model. embedding_model (str): The
   * model for the embedding. embedding_dim (int): The dimension of the embedding.
   * embedding_chunk_size (int): The chunk size of the embedding. azure_endpoint
   * (:obj:`str`, optional): The Azure endpoint for the model (Azure only).
   * azure_version (str): The Azure version for the model (Azure only).
   * azure_deployment (str): The Azure deployment for the model (Azure only).
   */
  export interface EmbeddingConfig {
    /**
     * The dimension of the embedding.
     */
    embedding_dim: number;

    /**
     * The endpoint type for the model.
     */
    embedding_endpoint_type: string;

    /**
     * The model for the embedding.
     */
    embedding_model: string;

    /**
     * The Azure deployment for the model.
     */
    azure_deployment?: string | null;

    /**
     * The Azure endpoint for the model.
     */
    azure_endpoint?: string | null;

    /**
     * The Azure version for the model.
     */
    azure_version?: string | null;

    /**
     * The chunk size of the embedding.
     */
    embedding_chunk_size?: number | null;

    /**
     * The endpoint for the model (`None` if local).
     */
    embedding_endpoint?: string | null;
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

  /**
   * Configuration for a Language Model (LLM) model. This object specifies all the
   * information necessary to access an LLM model to usage with Letta, except for
   * secret keys.
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
  export interface LlmConfig {
    /**
     * The context window size for the model.
     */
    context_window: number;

    /**
     * LLM model name.
     */
    model: string;

    /**
     * The endpoint type for the model.
     */
    model_endpoint_type:
      | 'openai'
      | 'anthropic'
      | 'cohere'
      | 'google_ai'
      | 'azure'
      | 'groq'
      | 'ollama'
      | 'webui'
      | 'webui-legacy'
      | 'lmstudio'
      | 'lmstudio-legacy'
      | 'llamacpp'
      | 'koboldcpp'
      | 'vllm'
      | 'hugging-face'
      | 'mistral'
      | 'together';

    /**
     * The endpoint for the model.
     */
    model_endpoint?: string | null;

    /**
     * The wrapper for the model.
     */
    model_wrapper?: string | null;

    /**
     * Puts 'inner_thoughts' as a kwarg in the function call if this is set to True.
     * This helps with function calling performance and also the generation of inner
     * thoughts.
     */
    put_inner_thoughts_in_kwargs?: boolean | null;
  }

  /**
   * A ToolRule represents a tool that can be invoked by the agent.
   */
  export interface ChildToolRule {
    /**
     * The children tools that can be invoked.
     */
    children: Array<string>;

    /**
     * The name of the tool. Must exist in the database for the user's organization.
     */
    tool_name: string;

    /**
     * Type of tool rule.
     */
    type?: 'InitToolRule' | 'TerminalToolRule' | 'continue_loop' | 'ToolRule' | 'require_parent_tools';
  }

  /**
   * Represents the initial tool rule configuration.
   */
  export interface InitToolRule {
    /**
     * The name of the tool. Must exist in the database for the user's organization.
     */
    tool_name: string;

    /**
     * Type of tool rule.
     */
    type?: 'InitToolRule' | 'TerminalToolRule' | 'continue_loop' | 'ToolRule' | 'require_parent_tools';
  }

  /**
   * Represents a terminal tool rule configuration where if this tool gets called, it
   * must end the agent loop.
   */
  export interface TerminalToolRule {
    /**
     * The name of the tool. Must exist in the database for the user's organization.
     */
    tool_name: string;

    /**
     * Type of tool rule.
     */
    type?: 'InitToolRule' | 'TerminalToolRule' | 'continue_loop' | 'ToolRule' | 'require_parent_tools';
  }
}

export interface AgentUpdateParams {
  /**
   * The id of the agent.
   */
  id: string;

  /**
   * The description of the agent.
   */
  description?: string | null;

  /**
   * Embedding model configuration. This object specifies all the information
   * necessary to access an embedding model to usage with Letta, except for secret
   * keys.
   *
   * Attributes: embedding_endpoint_type (str): The endpoint type for the model.
   * embedding_endpoint (str): The endpoint for the model. embedding_model (str): The
   * model for the embedding. embedding_dim (int): The dimension of the embedding.
   * embedding_chunk_size (int): The chunk size of the embedding. azure_endpoint
   * (:obj:`str`, optional): The Azure endpoint for the model (Azure only).
   * azure_version (str): The Azure version for the model (Azure only).
   * azure_deployment (str): The Azure deployment for the model (Azure only).
   */
  embedding_config?: AgentUpdateParams.EmbeddingConfig | null;

  /**
   * Configuration for a Language Model (LLM) model. This object specifies all the
   * information necessary to access an LLM model to usage with Letta, except for
   * secret keys.
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
  llm_config?: AgentUpdateParams.LlmConfig | null;

  /**
   * The ids of the messages in the agent's in-context memory.
   */
  message_ids?: Array<string> | null;

  /**
   * The metadata of the agent.
   */
  metadata_?: unknown | null;

  /**
   * The name of the agent.
   */
  name?: string | null;

  /**
   * The system prompt used by the agent.
   */
  system?: string | null;

  /**
   * The tags associated with the agent.
   */
  tags?: Array<string> | null;

  /**
   * The tools used by the agent.
   */
  tool_names?: Array<string> | null;

  /**
   * The user id of the agent.
   */
  user_id?: string | null;
}

export namespace AgentUpdateParams {
  /**
   * Embedding model configuration. This object specifies all the information
   * necessary to access an embedding model to usage with Letta, except for secret
   * keys.
   *
   * Attributes: embedding_endpoint_type (str): The endpoint type for the model.
   * embedding_endpoint (str): The endpoint for the model. embedding_model (str): The
   * model for the embedding. embedding_dim (int): The dimension of the embedding.
   * embedding_chunk_size (int): The chunk size of the embedding. azure_endpoint
   * (:obj:`str`, optional): The Azure endpoint for the model (Azure only).
   * azure_version (str): The Azure version for the model (Azure only).
   * azure_deployment (str): The Azure deployment for the model (Azure only).
   */
  export interface EmbeddingConfig {
    /**
     * The dimension of the embedding.
     */
    embedding_dim: number;

    /**
     * The endpoint type for the model.
     */
    embedding_endpoint_type: string;

    /**
     * The model for the embedding.
     */
    embedding_model: string;

    /**
     * The Azure deployment for the model.
     */
    azure_deployment?: string | null;

    /**
     * The Azure endpoint for the model.
     */
    azure_endpoint?: string | null;

    /**
     * The Azure version for the model.
     */
    azure_version?: string | null;

    /**
     * The chunk size of the embedding.
     */
    embedding_chunk_size?: number | null;

    /**
     * The endpoint for the model (`None` if local).
     */
    embedding_endpoint?: string | null;
  }

  /**
   * Configuration for a Language Model (LLM) model. This object specifies all the
   * information necessary to access an LLM model to usage with Letta, except for
   * secret keys.
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
  export interface LlmConfig {
    /**
     * The context window size for the model.
     */
    context_window: number;

    /**
     * LLM model name.
     */
    model: string;

    /**
     * The endpoint type for the model.
     */
    model_endpoint_type:
      | 'openai'
      | 'anthropic'
      | 'cohere'
      | 'google_ai'
      | 'azure'
      | 'groq'
      | 'ollama'
      | 'webui'
      | 'webui-legacy'
      | 'lmstudio'
      | 'lmstudio-legacy'
      | 'llamacpp'
      | 'koboldcpp'
      | 'vllm'
      | 'hugging-face'
      | 'mistral'
      | 'together';

    /**
     * The endpoint for the model.
     */
    model_endpoint?: string | null;

    /**
     * The wrapper for the model.
     */
    model_wrapper?: string | null;

    /**
     * Puts 'inner_thoughts' as a kwarg in the function call if this is set to True.
     * This helps with function calling performance and also the generation of inner
     * thoughts.
     */
    put_inner_thoughts_in_kwargs?: boolean | null;
  }
}

export interface AgentListParams {
  /**
   * Name of the agent
   */
  name?: string | null;

  /**
   * List of tags to filter agents by
   */
  tags?: Array<string> | null;
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

Agents.Messages = Messages;

export declare namespace Agents {
  export {
    type AgentState as AgentState,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentMigrateResponse as AgentMigrateResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentMigrateParams as AgentMigrateParams,
  };

  export {
    Messages as Messages,
    type MessageCreateResponse as MessageCreateResponse,
    type MessageUpdateResponse as MessageUpdateResponse,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
  };
}

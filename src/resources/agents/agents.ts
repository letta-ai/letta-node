// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
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
  memory?: AgentState.Memory;

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

  export interface ToolRule {
    /**
     * The name of the tool. Must exist in the database for the user's organization.
     */
    tool_name: string;
  }
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
  embedding_config?: AgentCreateParams.EmbeddingConfig | null;

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
  llm_config?: AgentCreateParams.LlmConfig | null;

  /**
   * Body param: Represents the in-context memory of the agent. This includes both
   * the `Block` objects (labelled by sections), as well as tools to edit the blocks.
   *
   * Attributes: memory (Dict[str, Block]): Mapping from memory block section to
   * memory block.
   */
  memory?: AgentCreateParams.Memory | null;

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
  embedding_config?: AgentUpdateParams.EmbeddingConfig | null;

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
  llm_config?: AgentUpdateParams.LlmConfig | null;

  /**
   * Body param: Represents the in-context memory of the agent. This includes both
   * the `Block` objects (labelled by sections), as well as tools to edit the blocks.
   *
   * Attributes: memory (Dict[str, Block]): Mapping from memory block section to
   * memory block.
   */
  memory?: AgentUpdateParams.Memory | null;

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
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentDeleteParams as AgentDeleteParams,
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

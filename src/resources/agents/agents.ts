// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as BlocksAPI from '../blocks';
import * as ModelsAPI from '../models';
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
  MessageCreateParams,
  MessageCreateResponse,
  MessageRetrieveParams,
  MessageRetrieveResponse,
  MessageUpdateParams,
  MessageUpdateResponse,
  Messages,
} from './messages';
import * as SourcesAPI from './sources';
import { SourceListResponse, Sources } from './sources';
import * as ToolsAPI from './tools';
import { ToolAddParams, ToolRemoveParams, Tools } from './tools';
import * as VersionTemplateAPI from './version-template';
import {
  VersionTemplate,
  VersionTemplateCreateParams,
  VersionTemplateCreateResponse,
} from './version-template';
import * as MemoryAPI from './memory/memory';
import {
  ArchivalMemorySummary,
  Memory as MemoryAPIMemory,
  MemoryUpdateParams,
  RecallMemorySummary,
} from './memory/memory';

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
    const { user_id } = params;
    return this._client.get('/v1/agents/', {
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
  agent_type: 'memgpt_agent' | 'split_thread_agent';

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
   * The in-context memory of the agent.
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
   * The user id of the agent.
   */
  user_id?: string | null;
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
  memory?: Record<string, BlocksAPI.Block>;

  /**
   * Jinja2 template for compiling memory blocks into a prompt string
   */
  prompt_template?: string;
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
  agent_type?: 'memgpt_agent' | 'split_thread_agent' | null;

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
   * (int): The context window size for the model.
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
   * (int): The context window size for the model.
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
    type Memory as Memory,
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
    Context as Context,
    type ContextWindowOverview as ContextWindowOverview,
    type ContextRetrieveParams as ContextRetrieveParams,
  };

  export { Tools as Tools, type ToolAddParams as ToolAddParams, type ToolRemoveParams as ToolRemoveParams };

  export { Sources as Sources, type SourceListResponse as SourceListResponse };

  export {
    MemoryAPIMemory as Memory,
    type ArchivalMemorySummary as ArchivalMemorySummary,
    type RecallMemorySummary as RecallMemorySummary,
    type MemoryUpdateParams as MemoryUpdateParams,
  };

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
    type MessageCreateResponse as MessageCreateResponse,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageUpdateResponse as MessageUpdateResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageUpdateParams as MessageUpdateParams,
  };

  export {
    VersionTemplate as VersionTemplate,
    type VersionTemplateCreateResponse as VersionTemplateCreateResponse,
    type VersionTemplateCreateParams as VersionTemplateCreateParams,
  };
}

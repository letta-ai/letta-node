// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as ArchivesAPI from '../archives';
import * as ToolsAPI from '../tools';
import * as BlocksAPI from './blocks';
import {
  Block,
  BlockAttachParams,
  BlockDetachParams,
  BlockListParams,
  BlockModify,
  BlockModifyParams,
  BlockRetrieveParams,
  Blocks,
} from './blocks';
import * as FilesAPI from './files';
import {
  FileCloseAllResponse,
  FileCloseParams,
  FileCloseResponse,
  FileListParams,
  FileListResponse,
  FileOpenParams,
  FileOpenResponse,
  Files,
} from './files';
import * as FoldersAPI from './folders';
import {
  FolderAttachParams,
  FolderDetachParams,
  FolderListParams,
  FolderListResponse,
  Folders,
} from './folders';
import * as GroupsAPI from './groups';
import { GroupListParams, Groups } from './groups';
import * as MessagesAPI from './messages';
import {
  ApprovalCreate,
  ApprovalRequestMessage,
  ApprovalResponseMessage,
  AssistantMessage,
  HiddenReasoningMessage,
  ImageContent,
  JobStatus,
  JobType,
  LettaAssistantMessageContentUnion,
  LettaMessageUnion,
  LettaMessageUnionsArrayPage,
  LettaRequest,
  LettaResponse,
  LettaStreamingRequest,
  LettaStreamingResponse,
  LettaUserMessageContentUnion,
  Message,
  MessageCancelParams,
  MessageCancelResponse,
  MessageListParams,
  MessageModifyParams,
  MessageModifyResponse,
  MessageResetParams,
  MessageRole,
  MessageSendAsyncParams,
  MessageSendParams,
  MessageStreamParams,
  MessageType,
  Messages,
  OmittedReasoningContent,
  ReasoningContent,
  ReasoningMessage,
  RedactedReasoningContent,
  Run,
  SystemMessage,
  TextContent,
  ToolCall,
  ToolCallContent,
  ToolCallDelta,
  ToolCallMessage,
  ToolReturn,
  ToolReturnContent,
  UpdateAssistantMessage,
  UpdateReasoningMessage,
  UpdateSystemMessage,
  UpdateUserMessage,
  UserMessage,
} from './messages';
import * as AgentsToolsAPI from './tools';
import {
  ToolAttachParams,
  ToolDetachParams,
  ToolListParams,
  ToolListResponse,
  ToolUpdateApprovalParams,
  Tools,
} from './tools';
import * as BlocksBlocksAPI from '../blocks/blocks';
import * as GroupsGroupsAPI from '../groups/groups';
import * as IdentitiesAPI from '../identities/identities';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  tools: AgentsToolsAPI.Tools = new AgentsToolsAPI.Tools(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create an agent.
   */
  create(params: AgentCreateParams, options?: RequestOptions): APIPromise<AgentState> {
    const { 'X-Project': xProject, ...body } = params;
    return this._client.post('/v1/agents/', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xProject != null ? { 'X-Project': xProject } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get the state of the agent.
   */
  retrieve(
    agentID: string,
    query: AgentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentState> {
    return this._client.get(path`/v1/agents/${agentID}`, { query, ...options });
  }

  /**
   * Get a list of all agents.
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AgentStatesArrayPage, AgentState> {
    return this._client.getAPIList('/v1/agents/', ArrayPage<AgentState>, { query, ...options });
  }

  /**
   * Delete an agent.
   */
  delete(agentID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/agents/${agentID}`, options);
  }

  /**
   * Get the total number of agents.
   */
  count(options?: RequestOptions): APIPromise<AgentCountResponse> {
    return this._client.get('/v1/agents/count', options);
  }

  /**
   * Export the serialized JSON representation of an agent, formatted with
   * indentation.
   */
  exportFile(
    agentID: string,
    query: AgentExportFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/v1/agents/${agentID}/export`, { query, ...options });
  }

  /**
   * Import a serialized agent file and recreate the agent(s) in the system. Returns
   * the IDs of all imported agents.
   */
  importFile(params: AgentImportFileParams, options?: RequestOptions): APIPromise<AgentImportFileResponse> {
    const { 'x-override-embedding-model': xOverrideEmbeddingModel, ...body } = params;
    return this._client.post(
      '/v1/agents/import',
      multipartFormRequestOptions(
        {
          body,
          ...options,
          headers: buildHeaders([
            {
              ...(xOverrideEmbeddingModel != null ?
                { 'x-override-embedding-model': xOverrideEmbeddingModel }
              : undefined),
            },
            options?.headers,
          ]),
        },
        this._client,
      ),
    );
  }

  /**
   * Update an existing agent.
   */
  modify(agentID: string, body: AgentModifyParams, options?: RequestOptions): APIPromise<AgentState> {
    return this._client.patch(path`/v1/agents/${agentID}`, { body, ...options });
  }
}

export type AgentStatesArrayPage = ArrayPage<AgentState>;

export interface AgentEnvironmentVariable {
  /**
   * The ID of the agent this environment variable belongs to.
   */
  agent_id: string;

  /**
   * The name of the environment variable.
   */
  key: string;

  /**
   * The value of the environment variable.
   */
  value: string;

  /**
   * The human-friendly ID of the Agent-env
   */
  id?: string;

  /**
   * The timestamp when the object was created.
   */
  created_at?: string | null;

  /**
   * The id of the user that made this object.
   */
  created_by_id?: string | null;

  /**
   * An optional description of the environment variable.
   */
  description?: string | null;

  /**
   * The id of the user that made this object.
   */
  last_updated_by_id?: string | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;

  /**
   * Encrypted secret value (stored as encrypted string)
   */
  value_enc?: string | null;
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
   * The id of the agent. Assigned by the database.
   */
  id: string;

  /**
   * The type of agent.
   */
  agent_type: AgentType;

  /**
   * The memory blocks used by the agent.
   */
  blocks: Array<BlocksAPI.Block>;

  /**
   * @deprecated Deprecated: Use `embedding` field instead. The embedding
   * configuration used by the agent.
   */
  embedding_config: ModelsAPI.EmbeddingConfig;

  /**
   * @deprecated Deprecated: Use `model` field instead. The LLM configuration used by
   * the agent.
   */
  llm_config: ModelsAPI.LlmConfig;

  /**
   * @deprecated Deprecated: Use `blocks` field instead. The in-context memory of the
   * agent.
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
  tools: Array<ToolsAPI.Tool>;

  /**
   * The base template id of the agent.
   */
  base_template_id?: string | null;

  /**
   * The timestamp when the object was created.
   */
  created_at?: string | null;

  /**
   * The id of the user that made this object.
   */
  created_by_id?: string | null;

  /**
   * The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * The description of the agent.
   */
  description?: string | null;

  /**
   * The embedding model used by the agent.
   */
  embedding?: AgentState.Embedding | null;

  /**
   * If set to True, memory management will move to a background agent thread.
   */
  enable_sleeptime?: boolean | null;

  /**
   * The id of the entity within the template.
   */
  entity_id?: string | null;

  /**
   * If set to True, the agent will be hidden.
   */
  hidden?: boolean | null;

  /**
   * The identities associated with this agent.
   */
  identities?: Array<IdentitiesAPI.Identity>;

  /**
   * @deprecated Deprecated: Use `identities` field instead. The ids of the
   * identities associated with this agent.
   */
  identity_ids?: Array<string>;

  /**
   * The timestamp when the agent last completed a run.
   */
  last_run_completion?: string | null;

  /**
   * The duration in milliseconds of the agent's last run.
   */
  last_run_duration_ms?: number | null;

  /**
   * The id of the user that made this object.
   */
  last_updated_by_id?: string | null;

  /**
   * The multi-agent group that this agent manages
   */
  managed_group?: GroupsGroupsAPI.Group | null;

  /**
   * Maximum number of files that can be open at once for this agent. Setting this
   * too high may exceed the context window, which will break the agent.
   */
  max_files_open?: number | null;

  /**
   * If set to True, the agent will not remember previous messages (though the agent
   * will still retain state via core memory blocks and archival/recall memory). Not
   * recommended unless you have an advanced use case.
   */
  message_buffer_autoclear?: boolean;

  /**
   * The ids of the messages in the agent's in-context memory.
   */
  message_ids?: Array<string> | null;

  /**
   * The metadata of the agent.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The model used by the agent.
   */
  model?:
    | AgentState.OpenAIModel
    | AgentState.AnthropicModel
    | AgentState.GoogleAIModel
    | AgentState.GoogleVertexModel
    | AgentState.AzureModel
    | AgentState.XaiModel
    | AgentState.GroqModel
    | AgentState.DeepseekModel
    | AgentState.TogetherModel
    | AgentState.BedrockModel
    | null;

  /**
   * @deprecated Deprecated: Use `managed_group` field instead. The multi-agent group
   * that this agent manages.
   */
  multi_agent_group?: GroupsGroupsAPI.Group | null;

  /**
   * The per-file view window character limit for this agent. Setting this too high
   * may exceed the context window, which will break the agent.
   */
  per_file_view_window_char_limit?: number | null;

  /**
   * The id of the project the agent belongs to.
   */
  project_id?: string | null;

  /**
   * The response format used by the agent
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The environment variables for tool execution specific to this agent.
   */
  secrets?: Array<AgentEnvironmentVariable>;

  /**
   * The id of the template the agent belongs to.
   */
  template_id?: string | null;

  /**
   * The timezone of the agent (IANA format).
   */
  timezone?: string | null;

  /**
   * @deprecated Deprecated: use `secrets` field instead.
   */
  tool_exec_environment_variables?: Array<AgentEnvironmentVariable>;

  /**
   * The list of tool rules.
   */
  tool_rules?: Array<
    | ChildToolRule
    | InitToolRule
    | TerminalToolRule
    | ConditionalToolRule
    | ContinueToolRule
    | RequiredBeforeExitToolRule
    | MaxCountPerStepToolRule
    | ParentToolRule
    | RequiresApprovalToolRule
  > | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;
}

export namespace AgentState {
  /**
   * @deprecated Deprecated: Use `blocks` field instead. The in-context memory of the
   * agent.
   */
  export interface Memory {
    /**
     * Memory blocks contained in the agent's in-context memory
     */
    blocks: Array<BlocksAPI.Block>;

    /**
     * Agent type controlling prompt rendering.
     */
    agent_type?: AgentsAPI.AgentType | (string & {}) | null;

    /**
     * Special blocks representing the agent's in-context memory of an attached file
     */
    file_blocks?: Array<Memory.FileBlock>;

    /**
     * Deprecated. Ignored for performance.
     */
    prompt_template?: string;
  }

  export namespace Memory {
    export interface FileBlock {
      /**
       * Unique identifier of the file.
       */
      file_id: string;

      /**
       * True if the agent currently has the file open.
       */
      is_open: boolean;

      /**
       * Unique identifier of the source.
       */
      source_id: string;

      /**
       * Value of the block.
       */
      value: string;

      /**
       * The human-friendly ID of the Block
       */
      id?: string;

      /**
       * The base template id of the block.
       */
      base_template_id?: string | null;

      /**
       * The id of the user that made this Block.
       */
      created_by_id?: string | null;

      /**
       * The id of the deployment.
       */
      deployment_id?: string | null;

      /**
       * Description of the block.
       */
      description?: string | null;

      /**
       * The id of the entity within the template.
       */
      entity_id?: string | null;

      /**
       * If set to True, the block will be hidden.
       */
      hidden?: boolean | null;

      /**
       * Whether the block is a template (e.g. saved human/persona options).
       */
      is_template?: boolean;

      /**
       * Label of the block (e.g. 'human', 'persona') in the context window.
       */
      label?: string | null;

      /**
       * UTC timestamp of the agent’s most recent access to this file. Any operations
       * from the open, close, or search tools will update this field.
       */
      last_accessed_at?: string | null;

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
      metadata?: { [key: string]: unknown } | null;

      /**
       * Preserve the block on template migration.
       */
      preserve_on_migration?: boolean | null;

      /**
       * The associated project id.
       */
      project_id?: string | null;

      /**
       * Whether the agent has read-only access to the block.
       */
      read_only?: boolean;

      /**
       * The id of the template.
       */
      template_id?: string | null;

      /**
       * Name of the block if it is a template.
       */
      template_name?: string | null;
    }
  }

  /**
   * Representation of a source, which is a collection of files and passages.
   *
   * Parameters: id (str): The ID of the source name (str): The name of the source.
   * embedding_config (EmbeddingConfig): The embedding configuration used by the
   * source. user_id (str): The ID of the user that created the source. metadata
   * (dict): Metadata associated with the source. description (str): The description
   * of the source.
   */
  export interface Source {
    /**
     * The embedding configuration used by the source.
     */
    embedding_config: ModelsAPI.EmbeddingConfig;

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
     * Instructions for how to use the source.
     */
    instructions?: string | null;

    /**
     * The id of the user that made this Tool.
     */
    last_updated_by_id?: string | null;

    /**
     * Metadata associated with the source.
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * The timestamp when the source was last updated.
     */
    updated_at?: string | null;

    /**
     * The vector database provider used for this source's passages
     */
    vector_db_provider?: ArchivesAPI.VectorDBProvider;
  }

  /**
   * The embedding model used by the agent.
   */
  export interface Embedding {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The provider of the model.
     */
    provider: 'openai' | 'ollama';
  }

  export interface OpenAIModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'openai';

    /**
     * The reasoning configuration for the model.
     */
    reasoning?: OpenAIModel.Reasoning;

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  export namespace OpenAIModel {
    /**
     * The reasoning configuration for the model.
     */
    export interface Reasoning {
      /**
       * The reasoning effort to use when generating text reasoning models
       */
      reasoning_effort?: 'minimal' | 'low' | 'medium' | 'high';
    }
  }

  export interface AnthropicModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'anthropic';

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for the model.
     */
    thinking?: AnthropicModel.Thinking;

    /**
     * Soft control for how verbose model output should be, used for GPT-5 models.
     */
    verbosity?: 'low' | 'medium' | 'high' | null;
  }

  export namespace AnthropicModel {
    /**
     * The thinking configuration for the model.
     */
    export interface Thinking {
      /**
       * The maximum number of tokens the model can use for extended thinking.
       */
      budget_tokens?: number;

      /**
       * The type of thinking to use.
       */
      type?: 'enabled' | 'disabled';
    }
  }

  export interface GoogleAIModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'google_ai';

    /**
     * The response schema for the model.
     */
    response_schema?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for the model.
     */
    thinking_config?: GoogleAIModel.ThinkingConfig;
  }

  export namespace GoogleAIModel {
    /**
     * The thinking configuration for the model.
     */
    export interface ThinkingConfig {
      /**
       * Whether to include thoughts in the model's response.
       */
      include_thoughts?: boolean;

      /**
       * The thinking budget for the model.
       */
      thinking_budget?: number;
    }
  }

  export interface GoogleVertexModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'google_vertex';

    /**
     * The response schema for the model.
     */
    response_schema?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for the model.
     */
    thinking_config?: GoogleVertexModel.ThinkingConfig;
  }

  export namespace GoogleVertexModel {
    /**
     * The thinking configuration for the model.
     */
    export interface ThinkingConfig {
      /**
       * Whether to include thoughts in the model's response.
       */
      include_thoughts?: boolean;

      /**
       * The thinking budget for the model.
       */
      thinking_budget?: number;
    }
  }

  /**
   * Azure OpenAI model configuration (OpenAI-compatible).
   */
  export interface AzureModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'azure';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * xAI model configuration (OpenAI-compatible).
   */
  export interface XaiModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'xai';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * Groq model configuration (OpenAI-compatible).
   */
  export interface GroqModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'groq';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * Deepseek model configuration (OpenAI-compatible).
   */
  export interface DeepseekModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'deepseek';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * Together AI model configuration (OpenAI-compatible).
   */
  export interface TogetherModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'together';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * AWS Bedrock model configuration.
   */
  export interface BedrockModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'bedrock';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }
}

/**
 * Enum to represent the type of agent.
 */
export type AgentType =
  | 'memgpt_agent'
  | 'memgpt_v2_agent'
  | 'letta_v1_agent'
  | 'react_agent'
  | 'workflow_agent'
  | 'split_thread_agent'
  | 'sleeptime_agent'
  | 'voice_convo_agent'
  | 'voice_sleeptime_agent';

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
   * Optional list of typed child argument overrides. Each node must reference a
   * child in 'children'.
   */
  child_arg_nodes?: Array<ChildToolRule.ChildArgNode> | null;

  /**
   * Optional template string (ignored).
   */
  prompt_template?: string | null;

  type?: 'constrain_child_tools';
}

export namespace ChildToolRule {
  /**
   * Typed child override for prefilled arguments.
   *
   * When used in a ChildToolRule, if this child is selected next, its `args` will be
   * applied as prefilled arguments (overriding overlapping LLM-provided values).
   */
  export interface ChildArgNode {
    /**
     * The name of the child tool to invoke next.
     */
    name: string;

    /**
     * Optional prefilled arguments for this child tool. Keys must match the tool's
     * parameter names and values must satisfy the tool's JSON schema. Supports partial
     * prefill; non-overlapping parameters are left to the model.
     */
    args?: { [key: string]: unknown } | null;
  }
}

/**
 * A ToolRule that conditionally maps to different child tools based on the output.
 */
export interface ConditionalToolRule {
  /**
   * The output case to check for mapping
   */
  child_output_mapping: { [key: string]: string };

  /**
   * The name of the tool. Must exist in the database for the user's organization.
   */
  tool_name: string;

  /**
   * The default child tool to be called. If None, any tool can be called.
   */
  default_child?: string | null;

  /**
   * Optional template string (ignored).
   */
  prompt_template?: string | null;

  /**
   * Whether to throw an error when output doesn't match any case
   */
  require_output_mapping?: boolean;

  type?: 'conditional';
}

/**
 * Represents a tool rule configuration where if this tool gets called, it must
 * continue the agent loop.
 */
export interface ContinueToolRule {
  /**
   * The name of the tool. Must exist in the database for the user's organization.
   */
  tool_name: string;

  /**
   * Optional template string (ignored).
   */
  prompt_template?: string | null;

  type?: 'continue_loop';
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
   * Optional prefilled arguments for this tool. When present, these values will
   * override any LLM-provided arguments with the same keys during invocation. Keys
   * must match the tool's parameter names and values must satisfy the tool's JSON
   * schema. Supports partial prefill; non-overlapping parameters are left to the
   * model.
   */
  args?: { [key: string]: unknown } | null;

  /**
   * Optional template string (ignored). Rendering uses fast built-in formatting for
   * performance.
   */
  prompt_template?: string | null;

  type?: 'run_first';
}

/**
 * Response format for JSON object responses.
 */
export interface JsonObjectResponseFormat {
  /**
   * The type of the response format.
   */
  type?: 'json_object';
}

/**
 * Response format for JSON schema-based responses.
 */
export interface JsonSchemaResponseFormat {
  /**
   * The JSON schema of the response.
   */
  json_schema: { [key: string]: unknown };

  /**
   * The type of the response format.
   */
  type?: 'json_schema';
}

/**
 * Sent via the Anthropic Messages API
 */
export type LettaMessageContentUnion =
  | MessagesAPI.TextContent
  | MessagesAPI.ImageContent
  | MessagesAPI.ToolCallContent
  | MessagesAPI.ToolReturnContent
  | MessagesAPI.ReasoningContent
  | MessagesAPI.RedactedReasoningContent
  | MessagesAPI.OmittedReasoningContent;

/**
 * Represents a tool rule configuration which constrains the total number of times
 * this tool can be invoked in a single step.
 */
export interface MaxCountPerStepToolRule {
  /**
   * The max limit for the total number of times this tool can be invoked in a single
   * step.
   */
  max_count_limit: number;

  /**
   * The name of the tool. Must exist in the database for the user's organization.
   */
  tool_name: string;

  /**
   * Optional template string (ignored).
   */
  prompt_template?: string | null;

  type?: 'max_count_per_step';
}

/**
 * Request to create a message
 */
export interface MessageCreate {
  /**
   * The content of the message.
   */
  content: Array<LettaMessageContentUnion> | string;

  /**
   * The role of the participant.
   */
  role: 'user' | 'system' | 'assistant';

  /**
   * The id of the LLMBatchItem that this message is associated with
   */
  batch_item_id?: string | null;

  /**
   * The multi-agent group that the message was sent in
   */
  group_id?: string | null;

  /**
   * The name of the participant.
   */
  name?: string | null;

  /**
   * The offline threading id associated with this message
   */
  otid?: string | null;

  /**
   * The id of the sender of the message, can be an identity id or agent id
   */
  sender_id?: string | null;

  /**
   * The message type to be created.
   */
  type?: 'message' | null;
}

/**
 * A ToolRule that only allows a child tool to be called if the parent has been
 * called.
 */
export interface ParentToolRule {
  /**
   * The children tools that can be invoked.
   */
  children: Array<string>;

  /**
   * The name of the tool. Must exist in the database for the user's organization.
   */
  tool_name: string;

  /**
   * Optional template string (ignored).
   */
  prompt_template?: string | null;

  type?: 'parent_last_tool';
}

/**
 * Represents a tool rule configuration where this tool must be called before the
 * agent loop can exit.
 */
export interface RequiredBeforeExitToolRule {
  /**
   * The name of the tool. Must exist in the database for the user's organization.
   */
  tool_name: string;

  /**
   * Optional template string (ignored).
   */
  prompt_template?: string | null;

  type?: 'required_before_exit';
}

/**
 * Represents a tool rule configuration which requires approval before the tool can
 * be invoked.
 */
export interface RequiresApprovalToolRule {
  /**
   * The name of the tool. Must exist in the database for the user's organization.
   */
  tool_name: string;

  /**
   * Optional template string (ignored). Rendering uses fast built-in formatting for
   * performance.
   */
  prompt_template?: string | null;

  type?: 'requires_approval';
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
   * Optional template string (ignored).
   */
  prompt_template?: string | null;

  type?: 'exit_loop';
}

/**
 * Response format for plain text responses.
 */
export interface TextResponseFormat {
  /**
   * The type of the response format.
   */
  type?: 'text';
}

export type AgentDeleteResponse = unknown;

export type AgentCountResponse = number;

export type AgentExportFileResponse = string;

/**
 * Response model for imported agents
 */
export interface AgentImportFileResponse {
  /**
   * List of IDs of the imported agents
   */
  agent_ids: Array<string>;
}

export interface AgentCreateParams {
  /**
   * Body param: The type of agent.
   */
  agent_type?: AgentType;

  /**
   * @deprecated Body param: Deprecated: No longer used. The base template id of the
   * agent.
   */
  base_template_id?: string | null;

  /**
   * Body param: The ids of the blocks used by the agent.
   */
  block_ids?: Array<string> | null;

  /**
   * Body param: The context window limit used by the agent.
   */
  context_window_limit?: number | null;

  /**
   * Body param: The description of the agent.
   */
  description?: string | null;

  /**
   * Body param: The embedding configuration handle used by the agent, specified in
   * the format provider/model-name.
   */
  embedding?: string | AgentCreateParams.EmbeddingModelSettings | null;

  /**
   * @deprecated Body param: Deprecated: No longer used. The embedding chunk size
   * used by the agent.
   */
  embedding_chunk_size?: number | null;

  /**
   * Body param: Configuration for embedding model connection and processing
   * parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * @deprecated Body param: Deprecated: Use `model` field to configure reasoning
   * instead. Whether to enable internal extended thinking step for a reasoner model.
   */
  enable_reasoner?: boolean | null;

  /**
   * Body param: If set to True, memory management will move to a background agent
   * thread.
   */
  enable_sleeptime?: boolean | null;

  /**
   * @deprecated Body param: Deprecated: please use the 'create agents from a
   * template' endpoint instead.
   */
  from_template?: string | null;

  /**
   * @deprecated Body param: Deprecated: No longer used. If set to True, the agent
   * will be hidden.
   */
  hidden?: boolean | null;

  /**
   * Body param: The ids of the identities associated with this agent.
   */
  identity_ids?: Array<string> | null;

  /**
   * Body param: If true, attaches the Letta base tool rules (e.g. deny all tools not
   * explicitly allowed).
   */
  include_base_tool_rules?: boolean | null;

  /**
   * Body param: If true, attaches the Letta core tools (e.g. core_memory related
   * functions).
   */
  include_base_tools?: boolean;

  /**
   * @deprecated Body param: If true, automatically creates and attaches a default
   * data source for this agent.
   */
  include_default_source?: boolean;

  /**
   * Body param: If true, attaches the Letta multi-agent tools (e.g. sending a
   * message to another agent).
   */
  include_multi_agent_tools?: boolean;

  /**
   * Body param: The initial set of messages to put in the agent's in-context memory.
   */
  initial_message_sequence?: Array<MessageCreate> | null;

  /**
   * Body param: Configuration for Language Model (LLM) connection and generation
   * parameters.
   */
  llm_config?: ModelsAPI.LlmConfig | null;

  /**
   * Body param: Maximum number of files that can be open at once for this agent.
   * Setting this too high may exceed the context window, which will break the agent.
   */
  max_files_open?: number | null;

  /**
   * @deprecated Body param: Deprecated: Use `model` field to configure reasoning
   * tokens instead. The maximum number of tokens to generate for reasoning step.
   */
  max_reasoning_tokens?: number | null;

  /**
   * @deprecated Body param: Deprecated: Use `model` field to configure max output
   * tokens instead. The maximum number of tokens to generate, including reasoning
   * step.
   */
  max_tokens?: number | null;

  /**
   * Body param: The blocks to create in the agent's in-context memory.
   */
  memory_blocks?: Array<BlocksBlocksAPI.CreateBlock> | null;

  /**
   * @deprecated Body param: Deprecated: Only relevant for creating agents from a
   * template. Use the 'create agents from a template' endpoint instead.
   */
  memory_variables?: { [key: string]: string } | null;

  /**
   * Body param: If set to True, the agent will not remember previous messages
   * (though the agent will still retain state via core memory blocks and
   * archival/recall memory). Not recommended unless you have an advanced use case.
   */
  message_buffer_autoclear?: boolean;

  /**
   * Body param: The metadata of the agent.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Body param: The model handle or model settings for the agent to use, specified
   * either by a handle or an object. See the model schema for more information.
   */
  model?:
    | string
    | AgentCreateParams.OpenAIModel
    | AgentCreateParams.AnthropicModel
    | AgentCreateParams.GoogleAIModel
    | AgentCreateParams.GoogleVertexModel
    | AgentCreateParams.AzureModel
    | AgentCreateParams.XaiModel
    | AgentCreateParams.GroqModel
    | AgentCreateParams.DeepseekModel
    | AgentCreateParams.TogetherModel
    | AgentCreateParams.BedrockModel
    | null;

  /**
   * Body param: The name of the agent.
   */
  name?: string;

  /**
   * @deprecated Body param: Deprecated: Use `model` field to configure parallel tool
   * calls instead. If set to True, enables parallel tool calling.
   */
  parallel_tool_calls?: boolean | null;

  /**
   * Body param: The per-file view window character limit for this agent. Setting
   * this too high may exceed the context window, which will break the agent.
   */
  per_file_view_window_char_limit?: number | null;

  /**
   * @deprecated Body param: Deprecated: Project should now be passed via the
   * X-Project header instead of in the request body. If using the SDK, this can be
   * done via the x_project parameter.
   */
  project?: string | null;

  /**
   * @deprecated Body param: Deprecated: No longer used. The id of the project the
   * agent belongs to.
   */
  project_id?: string | null;

  /**
   * @deprecated Body param: Deprecated: Use `model` field to configure reasoning
   * instead. Whether to enable reasoning for this agent.
   */
  reasoning?: boolean | null;

  /**
   * Body param: The response format for the agent.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * Body param: The environment variables for tool execution specific to this agent.
   */
  secrets?: { [key: string]: string } | null;

  /**
   * Body param: The ids of the sources used by the agent.
   */
  source_ids?: Array<string> | null;

  /**
   * Body param: The system prompt used by the agent.
   */
  system?: string | null;

  /**
   * Body param: The tags associated with the agent.
   */
  tags?: Array<string> | null;

  /**
   * @deprecated Body param: Deprecated: No longer used.
   */
  template?: boolean;

  /**
   * @deprecated Body param: Deprecated: No longer used. The id of the template the
   * agent belongs to.
   */
  template_id?: string | null;

  /**
   * Body param: The timezone of the agent (IANA format).
   */
  timezone?: string | null;

  /**
   * @deprecated Body param: Deprecated: Use `secrets` field instead. Environment
   * variables for tool execution.
   */
  tool_exec_environment_variables?: { [key: string]: string } | null;

  /**
   * Body param: The ids of the tools used by the agent.
   */
  tool_ids?: Array<string> | null;

  /**
   * Body param: The tool rules governing the agent.
   */
  tool_rules?: Array<
    | ChildToolRule
    | InitToolRule
    | TerminalToolRule
    | ConditionalToolRule
    | ContinueToolRule
    | RequiredBeforeExitToolRule
    | MaxCountPerStepToolRule
    | ParentToolRule
    | RequiresApprovalToolRule
  > | null;

  /**
   * Body param: The tools used by the agent.
   */
  tools?: Array<string> | null;

  /**
   * Header param: The project slug to associate with the agent (cloud only).
   */
  'X-Project'?: string;
}

export namespace AgentCreateParams {
  export interface EmbeddingModelSettings {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The provider of the model.
     */
    provider: 'openai' | 'ollama';
  }

  export interface OpenAIModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'openai';

    /**
     * The reasoning configuration for the model.
     */
    reasoning?: OpenAIModel.Reasoning;

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  export namespace OpenAIModel {
    /**
     * The reasoning configuration for the model.
     */
    export interface Reasoning {
      /**
       * The reasoning effort to use when generating text reasoning models
       */
      reasoning_effort?: 'minimal' | 'low' | 'medium' | 'high';
    }
  }

  export interface AnthropicModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'anthropic';

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for the model.
     */
    thinking?: AnthropicModel.Thinking;

    /**
     * Soft control for how verbose model output should be, used for GPT-5 models.
     */
    verbosity?: 'low' | 'medium' | 'high' | null;
  }

  export namespace AnthropicModel {
    /**
     * The thinking configuration for the model.
     */
    export interface Thinking {
      /**
       * The maximum number of tokens the model can use for extended thinking.
       */
      budget_tokens?: number;

      /**
       * The type of thinking to use.
       */
      type?: 'enabled' | 'disabled';
    }
  }

  export interface GoogleAIModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'google_ai';

    /**
     * The response schema for the model.
     */
    response_schema?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for the model.
     */
    thinking_config?: GoogleAIModel.ThinkingConfig;
  }

  export namespace GoogleAIModel {
    /**
     * The thinking configuration for the model.
     */
    export interface ThinkingConfig {
      /**
       * Whether to include thoughts in the model's response.
       */
      include_thoughts?: boolean;

      /**
       * The thinking budget for the model.
       */
      thinking_budget?: number;
    }
  }

  export interface GoogleVertexModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'google_vertex';

    /**
     * The response schema for the model.
     */
    response_schema?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for the model.
     */
    thinking_config?: GoogleVertexModel.ThinkingConfig;
  }

  export namespace GoogleVertexModel {
    /**
     * The thinking configuration for the model.
     */
    export interface ThinkingConfig {
      /**
       * Whether to include thoughts in the model's response.
       */
      include_thoughts?: boolean;

      /**
       * The thinking budget for the model.
       */
      thinking_budget?: number;
    }
  }

  /**
   * Azure OpenAI model configuration (OpenAI-compatible).
   */
  export interface AzureModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'azure';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * xAI model configuration (OpenAI-compatible).
   */
  export interface XaiModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'xai';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * Groq model configuration (OpenAI-compatible).
   */
  export interface GroqModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'groq';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * Deepseek model configuration (OpenAI-compatible).
   */
  export interface DeepseekModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'deepseek';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * Together AI model configuration (OpenAI-compatible).
   */
  export interface TogetherModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'together';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * AWS Bedrock model configuration.
   */
  export interface BedrockModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'bedrock';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }
}

export interface AgentRetrieveParams {
  /**
   * Specify which relational fields to include in the response. No relationships are
   * included by default.
   */
  include?: Array<
    | 'agent.blocks'
    | 'agent.identities'
    | 'agent.managed_group'
    | 'agent.secrets'
    | 'agent.sources'
    | 'agent.tags'
    | 'agent.tools'
  >;

  /**
   * Specify which relational fields (e.g., 'tools', 'sources', 'memory') to include
   * in the response. If not provided, all relationships are loaded by default. Using
   * this can optimize performance by reducing unnecessary joins.This is a legacy
   * parameter, and no longer supported after 1.0.0 SDK versions.
   */
  include_relationships?: Array<string> | null;
}

export interface AgentListParams extends ArrayPageParams {
  /**
   * @deprecated Whether to sort agents oldest to newest (True) or newest to oldest
   * (False, default)
   */
  ascending?: boolean;

  /**
   * Search agents by base template ID
   */
  base_template_id?: string | null;

  /**
   * Search agents by identifier keys
   */
  identifier_keys?: Array<string> | null;

  /**
   * Search agents by identity ID
   */
  identity_id?: string | null;

  /**
   * Specify which relational fields to include in the response. No relationships are
   * included by default.
   */
  include?: Array<
    | 'agent.blocks'
    | 'agent.identities'
    | 'agent.managed_group'
    | 'agent.secrets'
    | 'agent.sources'
    | 'agent.tags'
    | 'agent.tools'
  >;

  /**
   * Specify which relational fields (e.g., 'tools', 'sources', 'memory') to include
   * in the response. If not provided, all relationships are loaded by default. Using
   * this can optimize performance by reducing unnecessary joins.This is a legacy
   * parameter, and no longer supported after 1.0.0 SDK versions.
   */
  include_relationships?: Array<string> | null;

  /**
   * If True, only returns agents that match ALL given tags. Otherwise, return agents
   * that have ANY of the passed-in tags.
   */
  match_all_tags?: boolean;

  /**
   * Name of the agent
   */
  name?: string | null;

  /**
   * Search agents by project ID - this will default to your default project on cloud
   */
  project_id?: string | null;

  /**
   * Search agents by name
   */
  query_text?: string | null;

  /**
   * @deprecated Field to sort by. Options: 'created_at' (default),
   * 'last_run_completion'
   */
  sort_by?: string | null;

  /**
   * List of tags to filter agents by
   */
  tags?: Array<string> | null;

  /**
   * Search agents by template ID
   */
  template_id?: string | null;
}

export interface AgentExportFileParams {
  /**
   * @deprecated
   */
  max_steps?: number;

  /**
   * @deprecated If True, exports using the legacy single-agent 'v1' format with
   * inline tools/blocks. If False, exports using the new multi-entity 'v2' format,
   * with separate agents, tools, blocks, files, etc.
   */
  use_legacy_format?: boolean;
}

export interface AgentImportFileParams {
  /**
   * Body param:
   */
  file: Uploadable;

  /**
   * @deprecated Body param: If set to True, appends "\_copy" to the end of the agent
   * name.
   */
  append_copy_suffix?: boolean;

  /**
   * Body param: Environment variables as a JSON string to pass to the agent for tool
   * execution.
   */
  env_vars_json?: string | null;

  /**
   * Body param: Override import with specific embedding handle.
   */
  override_embedding_handle?: string | null;

  /**
   * Body param: If set to True, existing tools can get their source code overwritten
   * by the uploaded tool definitions. Note that Letta core tools can never be
   * updated externally.
   */
  override_existing_tools?: boolean;

  /**
   * Body param: If provided, overrides the agent name with this value.
   */
  override_name?: string | null;

  /**
   * Body param: The project ID to associate the uploaded agent with.
   */
  project_id?: string | null;

  /**
   * Body param: If set to True, strips all messages from the agent before importing.
   */
  strip_messages?: boolean;

  /**
   * Header param:
   */
  'x-override-embedding-model'?: string;
}

export interface AgentModifyParams {
  /**
   * The base template id of the agent.
   */
  base_template_id?: string | null;

  /**
   * The ids of the blocks used by the agent.
   */
  block_ids?: Array<string> | null;

  /**
   * The context window limit used by the agent.
   */
  context_window_limit?: number | null;

  /**
   * The description of the agent.
   */
  description?: string | null;

  /**
   * The embedding configuration handle used by the agent, specified in the format
   * provider/model-name.
   */
  embedding?: string | AgentModifyParams.EmbeddingModelSettings | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * If set to True, memory management will move to a background agent thread.
   */
  enable_sleeptime?: boolean | null;

  /**
   * If set to True, the agent will be hidden.
   */
  hidden?: boolean | null;

  /**
   * The ids of the identities associated with this agent.
   */
  identity_ids?: Array<string> | null;

  /**
   * The timestamp when the agent last completed a run.
   */
  last_run_completion?: string | null;

  /**
   * The duration in milliseconds of the agent's last run.
   */
  last_run_duration_ms?: number | null;

  /**
   * Configuration for Language Model (LLM) connection and generation parameters.
   */
  llm_config?: ModelsAPI.LlmConfig | null;

  /**
   * Maximum number of files that can be open at once for this agent. Setting this
   * too high may exceed the context window, which will break the agent.
   */
  max_files_open?: number | null;

  /**
   * @deprecated Deprecated: Use `model` field to configure max output tokens
   * instead. The maximum number of tokens to generate, including reasoning step.
   */
  max_tokens?: number | null;

  /**
   * If set to True, the agent will not remember previous messages (though the agent
   * will still retain state via core memory blocks and archival/recall memory). Not
   * recommended unless you have an advanced use case.
   */
  message_buffer_autoclear?: boolean | null;

  /**
   * The ids of the messages in the agent's in-context memory.
   */
  message_ids?: Array<string> | null;

  /**
   * The metadata of the agent.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The model used by the agent, specified either by a handle or an object. See the
   * model schema for more information.
   */
  model?:
    | string
    | AgentModifyParams.OpenAIModel
    | AgentModifyParams.AnthropicModel
    | AgentModifyParams.GoogleAIModel
    | AgentModifyParams.GoogleVertexModel
    | AgentModifyParams.AzureModel
    | AgentModifyParams.XaiModel
    | AgentModifyParams.GroqModel
    | AgentModifyParams.DeepseekModel
    | AgentModifyParams.TogetherModel
    | AgentModifyParams.BedrockModel
    | null;

  /**
   * The name of the agent.
   */
  name?: string | null;

  /**
   * @deprecated Deprecated: Use `model` field to configure parallel tool calls
   * instead. If set to True, enables parallel tool calling.
   */
  parallel_tool_calls?: boolean | null;

  /**
   * The per-file view window character limit for this agent. Setting this too high
   * may exceed the context window, which will break the agent.
   */
  per_file_view_window_char_limit?: number | null;

  /**
   * The id of the project the agent belongs to.
   */
  project_id?: string | null;

  /**
   * @deprecated Deprecated: Use `model` field to configure reasoning instead.
   * Whether to enable reasoning for this agent.
   */
  reasoning?: boolean | null;

  /**
   * @deprecated Deprecated: Use `model` field to configure response format instead.
   * The response format for the agent.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The environment variables for tool execution specific to this agent.
   */
  secrets?: { [key: string]: string } | null;

  /**
   * The ids of the sources used by the agent.
   */
  source_ids?: Array<string> | null;

  /**
   * The system prompt used by the agent.
   */
  system?: string | null;

  /**
   * The tags associated with the agent.
   */
  tags?: Array<string> | null;

  /**
   * The id of the template the agent belongs to.
   */
  template_id?: string | null;

  /**
   * The timezone of the agent (IANA format).
   */
  timezone?: string | null;

  /**
   * Deprecated: use `secrets` field instead
   */
  tool_exec_environment_variables?: { [key: string]: string } | null;

  /**
   * The ids of the tools used by the agent.
   */
  tool_ids?: Array<string> | null;

  /**
   * The tool rules governing the agent.
   */
  tool_rules?: Array<
    | ChildToolRule
    | InitToolRule
    | TerminalToolRule
    | ConditionalToolRule
    | ContinueToolRule
    | RequiredBeforeExitToolRule
    | MaxCountPerStepToolRule
    | ParentToolRule
    | RequiresApprovalToolRule
  > | null;
}

export namespace AgentModifyParams {
  export interface EmbeddingModelSettings {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The provider of the model.
     */
    provider: 'openai' | 'ollama';
  }

  export interface OpenAIModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'openai';

    /**
     * The reasoning configuration for the model.
     */
    reasoning?: OpenAIModel.Reasoning;

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  export namespace OpenAIModel {
    /**
     * The reasoning configuration for the model.
     */
    export interface Reasoning {
      /**
       * The reasoning effort to use when generating text reasoning models
       */
      reasoning_effort?: 'minimal' | 'low' | 'medium' | 'high';
    }
  }

  export interface AnthropicModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'anthropic';

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for the model.
     */
    thinking?: AnthropicModel.Thinking;

    /**
     * Soft control for how verbose model output should be, used for GPT-5 models.
     */
    verbosity?: 'low' | 'medium' | 'high' | null;
  }

  export namespace AnthropicModel {
    /**
     * The thinking configuration for the model.
     */
    export interface Thinking {
      /**
       * The maximum number of tokens the model can use for extended thinking.
       */
      budget_tokens?: number;

      /**
       * The type of thinking to use.
       */
      type?: 'enabled' | 'disabled';
    }
  }

  export interface GoogleAIModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'google_ai';

    /**
     * The response schema for the model.
     */
    response_schema?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for the model.
     */
    thinking_config?: GoogleAIModel.ThinkingConfig;
  }

  export namespace GoogleAIModel {
    /**
     * The thinking configuration for the model.
     */
    export interface ThinkingConfig {
      /**
       * Whether to include thoughts in the model's response.
       */
      include_thoughts?: boolean;

      /**
       * The thinking budget for the model.
       */
      thinking_budget?: number;
    }
  }

  export interface GoogleVertexModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'google_vertex';

    /**
     * The response schema for the model.
     */
    response_schema?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;

    /**
     * The thinking configuration for the model.
     */
    thinking_config?: GoogleVertexModel.ThinkingConfig;
  }

  export namespace GoogleVertexModel {
    /**
     * The thinking configuration for the model.
     */
    export interface ThinkingConfig {
      /**
       * Whether to include thoughts in the model's response.
       */
      include_thoughts?: boolean;

      /**
       * The thinking budget for the model.
       */
      thinking_budget?: number;
    }
  }

  /**
   * Azure OpenAI model configuration (OpenAI-compatible).
   */
  export interface AzureModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'azure';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * xAI model configuration (OpenAI-compatible).
   */
  export interface XaiModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'xai';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * Groq model configuration (OpenAI-compatible).
   */
  export interface GroqModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'groq';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * Deepseek model configuration (OpenAI-compatible).
   */
  export interface DeepseekModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'deepseek';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * Together AI model configuration (OpenAI-compatible).
   */
  export interface TogetherModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'together';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }

  /**
   * AWS Bedrock model configuration.
   */
  export interface BedrockModel {
    /**
     * The name of the model.
     */
    model: string;

    /**
     * The maximum number of tokens the model can generate.
     */
    max_output_tokens?: number;

    /**
     * The provider of the model.
     */
    provider?: 'bedrock';

    /**
     * The response format for the model.
     */
    response_format?:
      | AgentsAPI.TextResponseFormat
      | AgentsAPI.JsonSchemaResponseFormat
      | AgentsAPI.JsonObjectResponseFormat
      | null;

    /**
     * The temperature of the model.
     */
    temperature?: number;
  }
}

Agents.Tools = Tools;
Agents.Folders = Folders;
Agents.Files = Files;
Agents.Blocks = Blocks;
Agents.Groups = Groups;
Agents.Messages = Messages;

export declare namespace Agents {
  export {
    type AgentEnvironmentVariable as AgentEnvironmentVariable,
    type AgentState as AgentState,
    type AgentType as AgentType,
    type ChildToolRule as ChildToolRule,
    type ConditionalToolRule as ConditionalToolRule,
    type ContinueToolRule as ContinueToolRule,
    type InitToolRule as InitToolRule,
    type JsonObjectResponseFormat as JsonObjectResponseFormat,
    type JsonSchemaResponseFormat as JsonSchemaResponseFormat,
    type LettaMessageContentUnion as LettaMessageContentUnion,
    type MaxCountPerStepToolRule as MaxCountPerStepToolRule,
    type MessageCreate as MessageCreate,
    type ParentToolRule as ParentToolRule,
    type RequiredBeforeExitToolRule as RequiredBeforeExitToolRule,
    type RequiresApprovalToolRule as RequiresApprovalToolRule,
    type TerminalToolRule as TerminalToolRule,
    type TextResponseFormat as TextResponseFormat,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCountResponse as AgentCountResponse,
    type AgentExportFileResponse as AgentExportFileResponse,
    type AgentImportFileResponse as AgentImportFileResponse,
    type AgentStatesArrayPage as AgentStatesArrayPage,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentListParams as AgentListParams,
    type AgentExportFileParams as AgentExportFileParams,
    type AgentImportFileParams as AgentImportFileParams,
    type AgentModifyParams as AgentModifyParams,
  };

  export {
    Tools as Tools,
    type ToolListResponse as ToolListResponse,
    type ToolListParams as ToolListParams,
    type ToolAttachParams as ToolAttachParams,
    type ToolDetachParams as ToolDetachParams,
    type ToolUpdateApprovalParams as ToolUpdateApprovalParams,
  };

  export {
    Folders as Folders,
    type FolderListResponse as FolderListResponse,
    type FolderListParams as FolderListParams,
    type FolderAttachParams as FolderAttachParams,
    type FolderDetachParams as FolderDetachParams,
  };

  export {
    Files as Files,
    type FileListResponse as FileListResponse,
    type FileCloseResponse as FileCloseResponse,
    type FileCloseAllResponse as FileCloseAllResponse,
    type FileOpenResponse as FileOpenResponse,
    type FileListParams as FileListParams,
    type FileCloseParams as FileCloseParams,
    type FileOpenParams as FileOpenParams,
  };

  export {
    Blocks as Blocks,
    type Block as Block,
    type BlockModify as BlockModify,
    type BlockRetrieveParams as BlockRetrieveParams,
    type BlockListParams as BlockListParams,
    type BlockAttachParams as BlockAttachParams,
    type BlockDetachParams as BlockDetachParams,
    type BlockModifyParams as BlockModifyParams,
  };

  export { Groups as Groups, type GroupListParams as GroupListParams };

  export {
    Messages as Messages,
    type ApprovalCreate as ApprovalCreate,
    type ApprovalRequestMessage as ApprovalRequestMessage,
    type ApprovalResponseMessage as ApprovalResponseMessage,
    type AssistantMessage as AssistantMessage,
    type HiddenReasoningMessage as HiddenReasoningMessage,
    type ImageContent as ImageContent,
    type JobStatus as JobStatus,
    type JobType as JobType,
    type LettaAssistantMessageContentUnion as LettaAssistantMessageContentUnion,
    type LettaMessageUnion as LettaMessageUnion,
    type LettaRequest as LettaRequest,
    type LettaResponse as LettaResponse,
    type LettaStreamingRequest as LettaStreamingRequest,
    type LettaStreamingResponse as LettaStreamingResponse,
    type LettaUserMessageContentUnion as LettaUserMessageContentUnion,
    type Message as Message,
    type MessageRole as MessageRole,
    type MessageType as MessageType,
    type OmittedReasoningContent as OmittedReasoningContent,
    type ReasoningContent as ReasoningContent,
    type ReasoningMessage as ReasoningMessage,
    type RedactedReasoningContent as RedactedReasoningContent,
    type Run as Run,
    type SystemMessage as SystemMessage,
    type TextContent as TextContent,
    type ToolCall as ToolCall,
    type ToolCallContent as ToolCallContent,
    type ToolCallDelta as ToolCallDelta,
    type ToolCallMessage as ToolCallMessage,
    type ToolReturn as ToolReturn,
    type ToolReturnContent as ToolReturnContent,
    type UpdateAssistantMessage as UpdateAssistantMessage,
    type UpdateReasoningMessage as UpdateReasoningMessage,
    type UpdateSystemMessage as UpdateSystemMessage,
    type UpdateUserMessage as UpdateUserMessage,
    type UserMessage as UserMessage,
    type MessageCancelResponse as MessageCancelResponse,
    type MessageModifyResponse as MessageModifyResponse,
    type LettaMessageUnionsArrayPage as LettaMessageUnionsArrayPage,
    type MessageListParams as MessageListParams,
    type MessageCancelParams as MessageCancelParams,
    type MessageModifyParams as MessageModifyParams,
    type MessageResetParams as MessageResetParams,
    type MessageSendParams as MessageSendParams,
    type MessageSendAsyncParams as MessageSendAsyncParams,
    type MessageStreamParams as MessageStreamParams,
  };
}

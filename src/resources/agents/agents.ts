// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import * as ToolsAPI from '../tools';
import * as ArchivesAPI from './archives';
import {
  ArchiveAttachParams,
  ArchiveAttachResponse,
  ArchiveDetachParams,
  ArchiveDetachResponse,
  Archives,
} from './archives';
import * as BlocksAPI from './blocks';
import {
  Block,
  BlockAttachParams,
  BlockDetachParams,
  BlockListParams,
  BlockRetrieveParams,
  BlockUpdate,
  BlockUpdateParams,
  Blocks,
} from './blocks';
import * as FilesAPI from './files';
import {
  FileCloseAllResponse,
  FileCloseParams,
  FileCloseResponse,
  FileListParams,
  FileListResponse,
  FileListResponsesNextFilesPage,
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
  FolderListResponsesArrayPage,
  Folders,
} from './folders';
import * as GroupsAPI from './groups';
import { GroupListParams, Groups } from './groups';
import * as IdentitiesAPI from './identities';
import {
  Identities,
  IdentityAttachParams,
  IdentityAttachResponse,
  IdentityDetachParams,
  IdentityDetachResponse,
} from './identities';
import * as MessagesAPI from './messages';
import {
  ApprovalCreate,
  ApprovalRequestMessage,
  ApprovalResponseMessage,
  ApprovalReturn,
  AssistantMessage,
  EventMessage,
  HiddenReasoningMessage,
  ImageContent,
  InternalMessage,
  JobStatus,
  JobType,
  LettaAssistantMessageContentUnion,
  LettaRequest,
  LettaResponse,
  LettaStreamingRequest,
  LettaStreamingResponse,
  LettaUserMessageContentUnion,
  Message,
  MessageCancelParams,
  MessageCancelResponse,
  MessageCreateAsyncParams,
  MessageCreateParams,
  MessageCreateParamsNonStreaming,
  MessageCreateParamsStreaming,
  MessageListParams,
  MessageResetParams,
  MessageRole,
  MessageStreamParams,
  MessageType,
  Messages,
  MessagesArrayPage,
  OmittedReasoningContent,
  ReasoningContent,
  ReasoningMessage,
  RedactedReasoningContent,
  Run,
  SummaryMessage,
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
import * as PassagesAPI from './passages';
import {
  PassageCreateParams,
  PassageCreateResponse,
  PassageDeleteParams,
  PassageDeleteResponse,
  PassageListParams,
  PassageListResponse,
  PassageSearchParams,
  PassageSearchResponse,
  Passages,
} from './passages';
import * as AgentsToolsAPI from './tools';
import {
  ToolAttachParams,
  ToolDetachParams,
  ToolExecuteRequest,
  ToolExecutionResult,
  ToolListParams,
  ToolRunParams,
  ToolUpdateApprovalParams,
  Tools,
} from './tools';
import * as ArchivesArchivesAPI from '../archives/archives';
import * as BlocksBlocksAPI from '../blocks/blocks';
import * as GroupsGroupsAPI from '../groups/groups';
import * as IdentitiesIdentitiesAPI from '../identities/identities';
import * as ModelsAPI from '../models/models';
import * as RunsAPI from '../runs/runs';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  blocks: BlocksAPI.Blocks = new BlocksAPI.Blocks(this._client);
  tools: AgentsToolsAPI.Tools = new AgentsToolsAPI.Tools(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  archives: ArchivesAPI.Archives = new ArchivesAPI.Archives(this._client);
  passages: PassagesAPI.Passages = new PassagesAPI.Passages(this._client);
  identities: IdentitiesAPI.Identities = new IdentitiesAPI.Identities(this._client);

  /**
   * Create an agent.
   */
  create(body: AgentCreateParams, options?: RequestOptions): APIPromise<AgentState> {
    return this._client.post('/v1/agents/', { body, ...options });
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
   * Update an existing agent.
   */
  update(agentID: string, body: AgentUpdateParams, options?: RequestOptions): APIPromise<AgentState> {
    return this._client.patch(path`/v1/agents/${agentID}`, { body, ...options });
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
   * @deprecated Deprecated: Use `folders` field instead. The sources used by the
   * agent.
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
   * The compaction settings configuration used for compaction.
   */
  compaction_settings?: AgentState.CompactionSettings | null;

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
   * The embedding model handle used by the agent (format: provider/model-name).
   */
  embedding?: string | null;

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
  identities?: Array<IdentitiesIdentitiesAPI.Identity>;

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
   * The stop reason from the agent's last run.
   */
  last_stop_reason?: RunsAPI.StopReasonType | null;

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
   * The model handle used by the agent (format: provider/model-name).
   */
  model?: string | null;

  /**
   * The model settings used by the agent.
   */
  model_settings?:
    | OpenAIModelSettings
    | AnthropicModelSettings
    | GoogleAIModelSettings
    | GoogleVertexModelSettings
    | AzureModelSettings
    | XaiModelSettings
    | GroqModelSettings
    | DeepseekModelSettings
    | TogetherModelSettings
    | BedrockModelSettings
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
       * @deprecated Deprecated: Use `folder_id` field instead. Unique identifier of the
       * source.
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
   * (Deprecated: Use Folder) Representation of a source, which is a collection of
   * files and passages.
   */
  export interface Source {
    /**
     * The human-friendly ID of the Source
     */
    id: string;

    /**
     * The embedding configuration used by the source.
     */
    embedding_config: ModelsAPI.EmbeddingConfig;

    /**
     * The name of the source.
     */
    name: string;

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
    vector_db_provider?: ArchivesArchivesAPI.VectorDBProvider;
  }

  /**
   * The compaction settings configuration used for compaction.
   */
  export interface CompactionSettings {
    /**
     * The model settings to use for summarization.
     */
    model_settings: CompactionSettings.ModelSettings;

    /**
     * The prompt to use for summarization.
     */
    prompt: string;

    /**
     * Whether to include an acknowledgement post-prompt (helps prevent non-summary
     * outputs).
     */
    prompt_acknowledgement: string;

    /**
     * The maximum length of the summary in characters. If none, no clipping is
     * performed.
     */
    clip_chars?: number | null;

    /**
     * The type of summarization technique use.
     */
    mode?: 'all' | 'sliding_window';

    /**
     * The percentage of the context window to keep post-summarization (only used in
     * sliding window mode).
     */
    sliding_window_percentage?: number;
  }

  export namespace CompactionSettings {
    /**
     * The model settings to use for summarization.
     */
    export interface ModelSettings {
      /**
       * The maximum number of tokens the model can generate.
       */
      max_output_tokens?: number;

      /**
       * Whether to enable parallel tool calling.
       */
      parallel_tool_calls?: boolean;
    }
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

export interface AnthropicModelSettings {
  /**
   * Effort level for Opus 4.5 model (controls token conservation). Not setting this
   * gives similar performance to 'high'.
   */
  effort?: 'low' | 'medium' | 'high' | null;

  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'anthropic';

  /**
   * The response format for the model.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;

  /**
   * The thinking configuration for the model.
   */
  thinking?: AnthropicModelSettings.Thinking;

  /**
   * Soft control for how verbose model output should be, used for GPT-5 models.
   */
  verbosity?: 'low' | 'medium' | 'high' | null;
}

export namespace AnthropicModelSettings {
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

/**
 * Azure OpenAI model configuration (OpenAI-compatible).
 */
export interface AzureModelSettings {
  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'azure';

  /**
   * The response format for the model.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;
}

/**
 * AWS Bedrock model configuration.
 */
export interface BedrockModelSettings {
  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'bedrock';

  /**
   * The response format for the model.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;
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
 * Deepseek model configuration (OpenAI-compatible).
 */
export interface DeepseekModelSettings {
  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'deepseek';

  /**
   * The response format for the model.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;
}

export interface GoogleAIModelSettings {
  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'google_ai';

  /**
   * The response schema for the model.
   */
  response_schema?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;

  /**
   * The thinking configuration for the model.
   */
  thinking_config?: GoogleAIModelSettings.ThinkingConfig;
}

export namespace GoogleAIModelSettings {
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

export interface GoogleVertexModelSettings {
  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'google_vertex';

  /**
   * The response schema for the model.
   */
  response_schema?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;

  /**
   * The thinking configuration for the model.
   */
  thinking_config?: GoogleVertexModelSettings.ThinkingConfig;
}

export namespace GoogleVertexModelSettings {
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
 * Groq model configuration (OpenAI-compatible).
 */
export interface GroqModelSettings {
  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'groq';

  /**
   * The response format for the model.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;
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

export interface OpenAIModelSettings {
  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'openai';

  /**
   * The reasoning configuration for the model.
   */
  reasoning?: OpenAIModelSettings.Reasoning;

  /**
   * The response format for the model.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;
}

export namespace OpenAIModelSettings {
  /**
   * The reasoning configuration for the model.
   */
  export interface Reasoning {
    /**
     * The reasoning effort to use when generating text reasoning models
     */
    reasoning_effort?: 'none' | 'minimal' | 'low' | 'medium' | 'high' | 'xhigh';
  }
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

/**
 * Together AI model configuration (OpenAI-compatible).
 */
export interface TogetherModelSettings {
  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'together';

  /**
   * The response format for the model.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;
}

/**
 * xAI model configuration (OpenAI-compatible).
 */
export interface XaiModelSettings {
  /**
   * The maximum number of tokens the model can generate.
   */
  max_output_tokens?: number;

  /**
   * Whether to enable parallel tool calling.
   */
  parallel_tool_calls?: boolean;

  /**
   * The type of the provider.
   */
  provider_type?: 'xai';

  /**
   * The response format for the model.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The temperature of the model.
   */
  temperature?: number;
}

export type AgentDeleteResponse = unknown;

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
   * The type of agent.
   */
  agent_type?: AgentType;

  /**
   * @deprecated Deprecated: No longer used. The base template id of the agent.
   */
  base_template_id?: string | null;

  /**
   * The ids of the blocks used by the agent.
   */
  block_ids?: Array<string> | null;

  /**
   * The compaction settings configuration used for compaction.
   */
  compaction_settings?: AgentCreateParams.CompactionSettings | null;

  /**
   * The context window limit used by the agent.
   */
  context_window_limit?: number | null;

  /**
   * The description of the agent.
   */
  description?: string | null;

  /**
   * The embedding model handle used by the agent (format: provider/model-name).
   */
  embedding?: string | null;

  /**
   * @deprecated Deprecated: No longer used. The embedding chunk size used by the
   * agent.
   */
  embedding_chunk_size?: number | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * @deprecated Deprecated: Use `model` field to configure reasoning instead.
   * Whether to enable internal extended thinking step for a reasoner model.
   */
  enable_reasoner?: boolean | null;

  /**
   * If set to True, memory management will move to a background agent thread.
   */
  enable_sleeptime?: boolean | null;

  /**
   * The ids of the folders used by the agent.
   */
  folder_ids?: Array<string> | null;

  /**
   * @deprecated Deprecated: please use the 'create agents from a template' endpoint
   * instead.
   */
  from_template?: string | null;

  /**
   * @deprecated Deprecated: No longer used. If set to True, the agent will be
   * hidden.
   */
  hidden?: boolean | null;

  /**
   * The ids of the identities associated with this agent.
   */
  identity_ids?: Array<string> | null;

  /**
   * If true, attaches the Letta base tool rules (e.g. deny all tools not explicitly
   * allowed).
   */
  include_base_tool_rules?: boolean | null;

  /**
   * If true, attaches the Letta core tools (e.g. core_memory related functions).
   */
  include_base_tools?: boolean;

  /**
   * @deprecated If true, automatically creates and attaches a default data source
   * for this agent.
   */
  include_default_source?: boolean;

  /**
   * If true, attaches the Letta multi-agent tools (e.g. sending a message to another
   * agent).
   */
  include_multi_agent_tools?: boolean;

  /**
   * The initial set of messages to put in the agent's in-context memory.
   */
  initial_message_sequence?: Array<MessageCreate> | null;

  /**
   * Configuration for Language Model (LLM) connection and generation parameters.
   *
   * .. deprecated:: LLMConfig is deprecated and should not be used as an input or
   * return type in API calls. Use the schemas in letta.schemas.model (ModelSettings,
   * OpenAIModelSettings, etc.) instead. For conversion, use the \_to_model() method
   * or Model.\_from_llm_config() method.
   */
  llm_config?: ModelsAPI.LlmConfig | null;

  /**
   * Maximum number of files that can be open at once for this agent. Setting this
   * too high may exceed the context window, which will break the agent.
   */
  max_files_open?: number | null;

  /**
   * @deprecated Deprecated: Use `model` field to configure reasoning tokens instead.
   * The maximum number of tokens to generate for reasoning step.
   */
  max_reasoning_tokens?: number | null;

  /**
   * @deprecated Deprecated: Use `model` field to configure max output tokens
   * instead. The maximum number of tokens to generate, including reasoning step.
   */
  max_tokens?: number | null;

  /**
   * The blocks to create in the agent's in-context memory.
   */
  memory_blocks?: Array<BlocksBlocksAPI.CreateBlock> | null;

  /**
   * @deprecated Deprecated: Only relevant for creating agents from a template. Use
   * the 'create agents from a template' endpoint instead.
   */
  memory_variables?: { [key: string]: string } | null;

  /**
   * If set to True, the agent will not remember previous messages (though the agent
   * will still retain state via core memory blocks and archival/recall memory). Not
   * recommended unless you have an advanced use case.
   */
  message_buffer_autoclear?: boolean;

  /**
   * The metadata of the agent.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The model handle for the agent to use (format: provider/model-name).
   */
  model?: string | null;

  /**
   * The model settings for the agent.
   */
  model_settings?:
    | OpenAIModelSettings
    | AnthropicModelSettings
    | GoogleAIModelSettings
    | GoogleVertexModelSettings
    | AzureModelSettings
    | XaiModelSettings
    | GroqModelSettings
    | DeepseekModelSettings
    | TogetherModelSettings
    | BedrockModelSettings
    | null;

  /**
   * The name of the agent.
   */
  name?: string;

  /**
   * @deprecated Deprecated: Use `model_settings` to configure parallel tool calls
   * instead. If set to True, enables parallel tool calling.
   */
  parallel_tool_calls?: boolean | null;

  /**
   * The per-file view window character limit for this agent. Setting this too high
   * may exceed the context window, which will break the agent.
   */
  per_file_view_window_char_limit?: number | null;

  /**
   * @deprecated Deprecated: Project should now be passed via the X-Project header
   * instead of in the request body. If using the SDK, this can be done via the
   * x_project parameter.
   */
  project?: string | null;

  /**
   * @deprecated Deprecated: No longer used. The id of the project the agent belongs
   * to.
   */
  project_id?: string | null;

  /**
   * @deprecated Deprecated: Use `model` field to configure reasoning instead.
   * Whether to enable reasoning for this agent.
   */
  reasoning?: boolean | null;

  /**
   * @deprecated Deprecated: Use `model_settings` field to configure response format
   * instead. The response format for the agent.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The environment variables for tool execution specific to this agent.
   */
  secrets?: { [key: string]: string } | null;

  /**
   * @deprecated Deprecated: Use `folder_ids` field instead. The ids of the sources
   * used by the agent.
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
   * @deprecated Deprecated: No longer used.
   */
  template?: boolean;

  /**
   * @deprecated Deprecated: No longer used. The id of the template the agent belongs
   * to.
   */
  template_id?: string | null;

  /**
   * The timezone of the agent (IANA format).
   */
  timezone?: string | null;

  /**
   * @deprecated Deprecated: Use `secrets` field instead. Environment variables for
   * tool execution.
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

  /**
   * The tools used by the agent.
   */
  tools?: Array<string> | null;
}

export namespace AgentCreateParams {
  /**
   * The compaction settings configuration used for compaction.
   */
  export interface CompactionSettings {
    /**
     * The model settings to use for summarization.
     */
    model_settings: CompactionSettings.ModelSettings;

    /**
     * The prompt to use for summarization.
     */
    prompt: string;

    /**
     * Whether to include an acknowledgement post-prompt (helps prevent non-summary
     * outputs).
     */
    prompt_acknowledgement: string;

    /**
     * The maximum length of the summary in characters. If none, no clipping is
     * performed.
     */
    clip_chars?: number | null;

    /**
     * The type of summarization technique use.
     */
    mode?: 'all' | 'sliding_window';

    /**
     * The percentage of the context window to keep post-summarization (only used in
     * sliding window mode).
     */
    sliding_window_percentage?: number;
  }

  export namespace CompactionSettings {
    /**
     * The model settings to use for summarization.
     */
    export interface ModelSettings {
      /**
       * The maximum number of tokens the model can generate.
       */
      max_output_tokens?: number;

      /**
       * Whether to enable parallel tool calling.
       */
      parallel_tool_calls?: boolean;
    }
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
   * @deprecated Specify which relational fields (e.g., 'tools', 'sources', 'memory')
   * to include in the response. If not provided, all relationships are loaded by
   * default. Using this can optimize performance by reducing unnecessary joins.This
   * is a legacy parameter, and no longer supported after 1.0.0 SDK versions.
   */
  include_relationships?: Array<string> | null;
}

export interface AgentUpdateParams {
  /**
   * The base template id of the agent.
   */
  base_template_id?: string | null;

  /**
   * The ids of the blocks used by the agent.
   */
  block_ids?: Array<string> | null;

  /**
   * The compaction settings configuration used for compaction.
   */
  compaction_settings?: AgentUpdateParams.CompactionSettings | null;

  /**
   * The context window limit used by the agent.
   */
  context_window_limit?: number | null;

  /**
   * The description of the agent.
   */
  description?: string | null;

  /**
   * The embedding model handle used by the agent (format: provider/model-name).
   */
  embedding?: string | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * If set to True, memory management will move to a background agent thread.
   */
  enable_sleeptime?: boolean | null;

  /**
   * The ids of the folders used by the agent.
   */
  folder_ids?: Array<string> | null;

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
   * The stop reason from the agent's last run.
   */
  last_stop_reason?: RunsAPI.StopReasonType | null;

  /**
   * Configuration for Language Model (LLM) connection and generation parameters.
   *
   * .. deprecated:: LLMConfig is deprecated and should not be used as an input or
   * return type in API calls. Use the schemas in letta.schemas.model (ModelSettings,
   * OpenAIModelSettings, etc.) instead. For conversion, use the \_to_model() method
   * or Model.\_from_llm_config() method.
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
   * The model handle used by the agent (format: provider/model-name).
   */
  model?: string | null;

  /**
   * The model settings for the agent.
   */
  model_settings?:
    | OpenAIModelSettings
    | AnthropicModelSettings
    | GoogleAIModelSettings
    | GoogleVertexModelSettings
    | AzureModelSettings
    | XaiModelSettings
    | GroqModelSettings
    | DeepseekModelSettings
    | TogetherModelSettings
    | BedrockModelSettings
    | null;

  /**
   * The name of the agent.
   */
  name?: string | null;

  /**
   * @deprecated Deprecated: Use `model_settings` to configure parallel tool calls
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
   * @deprecated Deprecated: Use `model_settings` field to configure response format
   * instead. The response format for the agent.
   */
  response_format?: TextResponseFormat | JsonSchemaResponseFormat | JsonObjectResponseFormat | null;

  /**
   * The environment variables for tool execution specific to this agent.
   */
  secrets?: { [key: string]: string } | null;

  /**
   * @deprecated Deprecated: Use `folder_ids` field instead. The ids of the sources
   * used by the agent.
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

export namespace AgentUpdateParams {
  /**
   * The compaction settings configuration used for compaction.
   */
  export interface CompactionSettings {
    /**
     * The model settings to use for summarization.
     */
    model_settings: CompactionSettings.ModelSettings;

    /**
     * The prompt to use for summarization.
     */
    prompt: string;

    /**
     * Whether to include an acknowledgement post-prompt (helps prevent non-summary
     * outputs).
     */
    prompt_acknowledgement: string;

    /**
     * The maximum length of the summary in characters. If none, no clipping is
     * performed.
     */
    clip_chars?: number | null;

    /**
     * The type of summarization technique use.
     */
    mode?: 'all' | 'sliding_window';

    /**
     * The percentage of the context window to keep post-summarization (only used in
     * sliding window mode).
     */
    sliding_window_percentage?: number;
  }

  export namespace CompactionSettings {
    /**
     * The model settings to use for summarization.
     */
    export interface ModelSettings {
      /**
       * The maximum number of tokens the model can generate.
       */
      max_output_tokens?: number;

      /**
       * Whether to enable parallel tool calling.
       */
      parallel_tool_calls?: boolean;
    }
  }
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
   * @deprecated Specify which relational fields (e.g., 'tools', 'sources', 'memory')
   * to include in the response. If not provided, all relationships are loaded by
   * default. Using this can optimize performance by reducing unnecessary joins.This
   * is a legacy parameter, and no longer supported after 1.0.0 SDK versions.
   */
  include_relationships?: Array<string> | null;

  /**
   * Filter agents by their last stop reason.
   */
  last_stop_reason?: RunsAPI.StopReasonType | null;

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
   * Body param: Embedding handle to override with.
   */
  embedding?: string | null;

  /**
   * @deprecated Body param: Environment variables as a JSON string to pass to the
   * agent for tool execution. Use 'secrets' instead.
   */
  env_vars_json?: string | null;

  /**
   * Body param: If provided, overrides the agent name with this value.
   */
  name?: string | null;

  /**
   * @deprecated Body param: Override import with specific embedding handle. Use
   * 'embedding' instead.
   */
  override_embedding_handle?: string | null;

  /**
   * Body param: If set to True, existing tools can get their source code overwritten
   * by the uploaded tool definitions. Note that Letta core tools can never be
   * updated externally.
   */
  override_existing_tools?: boolean;

  /**
   * @deprecated Body param: If provided, overrides the agent name with this value.
   * Use 'name' instead.
   */
  override_name?: string | null;

  /**
   * @deprecated Body param: The project ID to associate the uploaded agent with.
   * This is now passed via headers.
   */
  project_id?: string | null;

  /**
   * Body param: Secrets as a JSON string to pass to the agent for tool execution.
   */
  secrets?: string | null;

  /**
   * Body param: If set to True, strips all messages from the agent before importing.
   */
  strip_messages?: boolean;

  /**
   * Header param:
   */
  'x-override-embedding-model'?: string;
}

Agents.Messages = Messages;
Agents.Blocks = Blocks;
Agents.Tools = Tools;
Agents.Folders = Folders;
Agents.Files = Files;
Agents.Groups = Groups;
Agents.Archives = Archives;
Agents.Passages = Passages;
Agents.Identities = Identities;

export declare namespace Agents {
  export {
    type AgentEnvironmentVariable as AgentEnvironmentVariable,
    type AgentState as AgentState,
    type AgentType as AgentType,
    type AnthropicModelSettings as AnthropicModelSettings,
    type AzureModelSettings as AzureModelSettings,
    type BedrockModelSettings as BedrockModelSettings,
    type ChildToolRule as ChildToolRule,
    type ConditionalToolRule as ConditionalToolRule,
    type ContinueToolRule as ContinueToolRule,
    type DeepseekModelSettings as DeepseekModelSettings,
    type GoogleAIModelSettings as GoogleAIModelSettings,
    type GoogleVertexModelSettings as GoogleVertexModelSettings,
    type GroqModelSettings as GroqModelSettings,
    type InitToolRule as InitToolRule,
    type JsonObjectResponseFormat as JsonObjectResponseFormat,
    type JsonSchemaResponseFormat as JsonSchemaResponseFormat,
    type LettaMessageContentUnion as LettaMessageContentUnion,
    type MaxCountPerStepToolRule as MaxCountPerStepToolRule,
    type MessageCreate as MessageCreate,
    type OpenAIModelSettings as OpenAIModelSettings,
    type ParentToolRule as ParentToolRule,
    type RequiredBeforeExitToolRule as RequiredBeforeExitToolRule,
    type RequiresApprovalToolRule as RequiresApprovalToolRule,
    type TerminalToolRule as TerminalToolRule,
    type TextResponseFormat as TextResponseFormat,
    type TogetherModelSettings as TogetherModelSettings,
    type XaiModelSettings as XaiModelSettings,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentExportFileResponse as AgentExportFileResponse,
    type AgentImportFileResponse as AgentImportFileResponse,
    type AgentStatesArrayPage as AgentStatesArrayPage,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentExportFileParams as AgentExportFileParams,
    type AgentImportFileParams as AgentImportFileParams,
  };

  export {
    Messages as Messages,
    type ApprovalCreate as ApprovalCreate,
    type ApprovalRequestMessage as ApprovalRequestMessage,
    type ApprovalResponseMessage as ApprovalResponseMessage,
    type ApprovalReturn as ApprovalReturn,
    type AssistantMessage as AssistantMessage,
    type EventMessage as EventMessage,
    type HiddenReasoningMessage as HiddenReasoningMessage,
    type ImageContent as ImageContent,
    type InternalMessage as InternalMessage,
    type JobStatus as JobStatus,
    type JobType as JobType,
    type LettaAssistantMessageContentUnion as LettaAssistantMessageContentUnion,
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
    type SummaryMessage as SummaryMessage,
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
    type MessagesArrayPage as MessagesArrayPage,
    type MessageCreateParams as MessageCreateParams,
    type MessageCreateParamsNonStreaming as MessageCreateParamsNonStreaming,
    type MessageCreateParamsStreaming as MessageCreateParamsStreaming,
    type MessageListParams as MessageListParams,
    type MessageCancelParams as MessageCancelParams,
    type MessageCreateAsyncParams as MessageCreateAsyncParams,
    type MessageResetParams as MessageResetParams,
    type MessageStreamParams as MessageStreamParams,
  };

  export {
    Blocks as Blocks,
    type Block as Block,
    type BlockUpdate as BlockUpdate,
    type BlockRetrieveParams as BlockRetrieveParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockListParams as BlockListParams,
    type BlockAttachParams as BlockAttachParams,
    type BlockDetachParams as BlockDetachParams,
  };

  export {
    Tools as Tools,
    type ToolExecuteRequest as ToolExecuteRequest,
    type ToolExecutionResult as ToolExecutionResult,
    type ToolListParams as ToolListParams,
    type ToolAttachParams as ToolAttachParams,
    type ToolDetachParams as ToolDetachParams,
    type ToolRunParams as ToolRunParams,
    type ToolUpdateApprovalParams as ToolUpdateApprovalParams,
  };

  export {
    Folders as Folders,
    type FolderListResponse as FolderListResponse,
    type FolderListResponsesArrayPage as FolderListResponsesArrayPage,
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
    type FileListResponsesNextFilesPage as FileListResponsesNextFilesPage,
    type FileListParams as FileListParams,
    type FileCloseParams as FileCloseParams,
    type FileOpenParams as FileOpenParams,
  };

  export { Groups as Groups, type GroupListParams as GroupListParams };

  export {
    Archives as Archives,
    type ArchiveAttachResponse as ArchiveAttachResponse,
    type ArchiveDetachResponse as ArchiveDetachResponse,
    type ArchiveAttachParams as ArchiveAttachParams,
    type ArchiveDetachParams as ArchiveDetachParams,
  };

  export {
    Passages as Passages,
    type PassageCreateResponse as PassageCreateResponse,
    type PassageListResponse as PassageListResponse,
    type PassageDeleteResponse as PassageDeleteResponse,
    type PassageSearchResponse as PassageSearchResponse,
    type PassageCreateParams as PassageCreateParams,
    type PassageListParams as PassageListParams,
    type PassageDeleteParams as PassageDeleteParams,
    type PassageSearchParams as PassageSearchParams,
  };

  export {
    Identities as Identities,
    type IdentityAttachResponse as IdentityAttachResponse,
    type IdentityDetachResponse as IdentityDetachResponse,
    type IdentityAttachParams as IdentityAttachParams,
    type IdentityDetachParams as IdentityDetachParams,
  };
}

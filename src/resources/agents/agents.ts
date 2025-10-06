// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlocksAPI from '../blocks';
import * as ModelsAPI from '../models';
import * as ArchivalMemoryAPI from './archival-memory';
import {
  ArchivalMemory,
  ArchivalMemoryCreateParams,
  ArchivalMemoryCreateResponse,
  ArchivalMemoryDeleteParams,
  ArchivalMemoryDeleteResponse,
  ArchivalMemoryListParams,
  ArchivalMemoryListResponse,
  ArchivalMemorySearchParams,
  ArchivalMemorySearchResponse,
} from './archival-memory';
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
import { FolderAttachParams, FolderDetachParams, FolderListResponse, Folders } from './folders';
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
  LettaRequest,
  LettaResponse,
  LettaStreamingRequest,
  LettaUserMessageContentUnion,
  Message,
  MessageCancelParams,
  MessageCancelResponse,
  MessageListParams,
  MessageListResponse,
  MessagePreviewRawPayloadParams,
  MessagePreviewRawPayloadResponse,
  MessageRole,
  MessageSearchParams,
  MessageSearchResponse,
  MessageSendAsyncParams,
  MessageSendParams,
  MessageSendStreamParams,
  MessageSendStreamResponse,
  MessageType,
  MessageUpdateParams,
  MessageUpdateResponse,
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
import * as SourcesAPI from './sources';
import { SourceAttachParams, SourceDetachParams, SourceListResponse, Sources } from './sources';
import * as ToolsAPI from './tools';
import {
  ToolAttachParams,
  ToolDetachParams,
  ToolListResponse,
  ToolModifyApprovalParams,
  Tools,
} from './tools';
import * as GroupsAPI from '../groups/groups';
import * as SourcesSourcesAPI from '../sources/sources';
import * as ToolsToolsAPI from '../tools/tools';
import * as CoreMemoryAPI from './core-memory/core-memory';
import { CoreMemory, CoreMemoryRetrieveVariablesResponse, Memory } from './core-memory/core-memory';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Agents extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  sources: SourcesAPI.Sources = new SourcesAPI.Sources(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
  files: FilesAPI.Files = new FilesAPI.Files(this._client);
  coreMemory: CoreMemoryAPI.CoreMemory = new CoreMemoryAPI.CoreMemory(this._client);
  archivalMemory: ArchivalMemoryAPI.ArchivalMemory = new ArchivalMemoryAPI.ArchivalMemory(this._client);
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
  ): APIPromise<AgentListResponse> {
    return this._client.get('/v1/agents/', { query, ...options });
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
   *
   * Supports two export formats:
   *
   * - Legacy format (use_legacy_format=true): Single agent with inline tools/blocks
   * - New format (default): Multi-entity format with separate agents, tools, blocks,
   *   files, etc.
   */
  export(
    agentID: string,
    query: AgentExportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get(path`/v1/agents/${agentID}/export`, { query, ...options });
  }

  /**
   * Import a serialized agent file and recreate the agent(s) in the system. Returns
   * the IDs of all imported agents.
   */
  import(params: AgentImportParams, options?: RequestOptions): APIPromise<AgentImportResponse> {
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
   * Lists the groups for an agent
   */
  listGroups(
    agentID: string,
    query: AgentListGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListGroupsResponse> {
    return this._client.get(path`/v1/agents/${agentID}/groups`, { query, ...options });
  }

  /**
   * Migrate an agent to a new versioned agent template. This will only work for
   * "classic" and non-multiagent agent templates.
   */
  migrate(
    agentID: string,
    body: AgentMigrateParams,
    options?: RequestOptions,
  ): APIPromise<AgentMigrateResponse> {
    return this._client.post(path`/v1/agents/${agentID}/migrate`, { body, ...options });
  }

  /**
   * Resets the messages for an agent
   */
  resetMessages(
    agentID: string,
    params: AgentResetMessagesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentState> {
    const { add_default_initial_messages } = params ?? {};
    return this._client.patch(path`/v1/agents/${agentID}/reset-messages`, {
      query: { add_default_initial_messages },
      ...options,
    });
  }

  /**
   * Retrieve the context window of a specific agent.
   */
  retrieveContext(agentID: string, options?: RequestOptions): APIPromise<AgentRetrieveContextResponse> {
    return this._client.get(path`/v1/agents/${agentID}/context`, options);
  }

  /**
   * Search deployed agents
   */
  search(
    body: AgentSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentSearchResponse> {
    return this._client.post('/v1/agents/search', { body, ...options });
  }

  /**
   * Summarize an agent's conversation history to a target message length.
   *
   * This endpoint summarizes the current message history for a given agent,
   * truncating and compressing it down to the specified `max_message_length`.
   */
  summarize(agentID: string, params: AgentSummarizeParams, options?: RequestOptions): APIPromise<void> {
    const { max_message_length } = params;
    return this._client.post(path`/v1/agents/${agentID}/summarize`, {
      query: { max_message_length },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

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
   * The embedding configuration used by the agent.
   */
  embedding_config: ModelsAPI.EmbeddingConfig;

  /**
   * The LLM configuration used by the agent.
   */
  llm_config: ModelsAPI.LlmConfig;

  /**
   * The in-context memory of the agent.
   */
  memory: CoreMemoryAPI.Memory;

  /**
   * The name of the agent.
   */
  name: string;

  /**
   * The sources used by the agent.
   */
  sources: Array<SourcesSourcesAPI.Source>;

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
  tools: Array<ToolsToolsAPI.Tool>;

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
   * The ids of the identities associated with this agent.
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
   * The multi-agent group that this agent manages
   */
  multi_agent_group?: GroupsAPI.Group | null;

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
   * The response format used by the agent when returning from `send_message`.
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

/**
 * Enum to represent the type of agent.
 */
export type AgentType =
  | 'memgpt_agent'
  | 'memgpt_v2_agent'
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
   * Optional template string (ignored).
   */
  prompt_template?: string | null;

  type?: 'constrain_child_tools';
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

export type AgentListResponse = Array<AgentState>;

export type AgentDeleteResponse = unknown;

export type AgentCountResponse = number;

export type AgentExportResponse = string;

/**
 * Response model for imported agents
 */
export interface AgentImportResponse {
  /**
   * List of IDs of the imported agents
   */
  agent_ids: Array<string>;
}

export type AgentListGroupsResponse = Array<GroupsAPI.Group>;

export interface AgentMigrateResponse {
  success: true;
}

/**
 * Overview of the context window, including the number of messages and tokens.
 */
export interface AgentRetrieveContextResponse {
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
   * The metadata summary of the external memory sources (archival + recall
   * metadata).
   */
  external_memory_summary: string;

  /**
   * The content of the functions definitions.
   */
  functions_definitions: Array<AgentRetrieveContextResponse.FunctionsDefinition> | null;

  /**
   * The messages in the context window.
   */
  messages: Array<MessagesAPI.Message>;

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
   * The number of tokens in the functions definitions.
   */
  num_tokens_functions_definitions: number;

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

export namespace AgentRetrieveContextResponse {
  export interface FunctionsDefinition {
    function: FunctionsDefinition.Function;

    type: 'function';

    [k: string]: unknown;
  }

  export namespace FunctionsDefinition {
    export interface Function {
      name: string;

      description?: string | null;

      parameters?: { [key: string]: unknown } | null;

      strict?: boolean | null;

      [k: string]: unknown;
    }
  }
}

export interface AgentSearchResponse {
  agents: Array<AgentState>;

  nextCursor?: string | null;
}

export interface AgentCreateParams {
  /**
   * Body param: The type of agent.
   */
  agent_type?: AgentType;

  /**
   * Body param: The base template id of the agent.
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
  embedding?: string | null;

  /**
   * Body param: The embedding chunk size used by the agent.
   */
  embedding_chunk_size?: number | null;

  /**
   * Body param: Configuration for embedding model connection and processing
   * parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * Body param: Whether to enable internal extended thinking step for a reasoner
   * model.
   */
  enable_reasoner?: boolean | null;

  /**
   * Body param: If set to True, memory management will move to a background agent
   * thread.
   */
  enable_sleeptime?: boolean | null;

  /**
   * Body param: The template id used to configure the agent
   */
  from_template?: string | null;

  /**
   * Body param: If set to True, the agent will be hidden.
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
   * Body param: If true, automatically creates and attaches a default data source
   * for this agent.
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
   * Body param: The maximum number of tokens to generate for reasoning step. If not
   * set, the model will use its default value.
   */
  max_reasoning_tokens?: number | null;

  /**
   * Body param: The maximum number of tokens to generate, including reasoning step.
   * If not set, the model will use its default value.
   */
  max_tokens?: number | null;

  /**
   * Body param: The blocks to create in the agent's in-context memory.
   */
  memory_blocks?: Array<BlocksAPI.CreateBlock> | null;

  /**
   * Body param: The variables that should be set for the agent.
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
   * Body param: The LLM configuration handle used by the agent, specified in the
   * format provider/model-name, as an alternative to specifying llm_config.
   */
  model?: string | null;

  /**
   * Body param: The name of the agent.
   */
  name?: string;

  /**
   * Body param: The per-file view window character limit for this agent. Setting
   * this too high may exceed the context window, which will break the agent.
   */
  per_file_view_window_char_limit?: number | null;

  /**
   * @deprecated Body param: Deprecated: Project should now be passed via the
   * X-Project header instead of in the request body. If using the sdk, this can be
   * done via the new x_project field below.
   */
  project?: string | null;

  /**
   * Body param: The id of the project the agent belongs to.
   */
  project_id?: string | null;

  /**
   * Body param: Whether to enable reasoning for this agent.
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
   * Body param: Whether the agent is a template
   */
  template?: boolean;

  /**
   * Body param: The id of the template the agent belongs to.
   */
  template_id?: string | null;

  /**
   * Body param: The timezone of the agent (IANA format).
   */
  timezone?: string | null;

  /**
   * Body param: Deprecated: use `secrets` field instead.
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

export interface AgentRetrieveParams {
  /**
   * Specify which relational fields (e.g., 'tools', 'sources', 'memory') to include
   * in the response. If not provided, all relationships are loaded by default. Using
   * this can optimize performance by reducing unnecessary joins.
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
   * The description of the agent.
   */
  description?: string | null;

  /**
   * The embedding configuration handle used by the agent, specified in the format
   * provider/model-name.
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
   * The LLM configuration handle used by the agent, specified in the format
   * provider/model-name, as an alternative to specifying llm_config.
   */
  model?: string | null;

  /**
   * The name of the agent.
   */
  name?: string | null;

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
   * Whether to enable reasoning for this agent.
   */
  reasoning?: boolean | null;

  /**
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

export interface AgentListParams {
  /**
   * Cursor for pagination
   */
  after?: string | null;

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
   * Cursor for pagination
   */
  before?: string | null;

  /**
   * Search agents by identifier keys
   */
  identifier_keys?: Array<string> | null;

  /**
   * Search agents by identity ID
   */
  identity_id?: string | null;

  /**
   * Specify which relational fields (e.g., 'tools', 'sources', 'memory') to include
   * in the response. If not provided, all relationships are loaded by default. Using
   * this can optimize performance by reducing unnecessary joins.
   */
  include_relationships?: Array<string> | null;

  /**
   * Limit for pagination
   */
  limit?: number | null;

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
   * Sort order for agents by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at' | 'last_run_completion';

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

export interface AgentExportParams {
  max_steps?: number;

  /**
   * If true, exports using the legacy single-agent format (v1). If false, exports
   * using the new multi-entity format (v2).
   */
  use_legacy_format?: boolean;
}

export interface AgentImportParams {
  /**
   * Body param:
   */
  file: Uploadable;

  /**
   * Body param: If set to True, appends "\_copy" to the end of the agent name.
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

export interface AgentListGroupsParams {
  /**
   * Manager type to filter groups by
   */
  manager_type?: string | null;
}

export interface AgentMigrateParams {
  preserve_core_memories: boolean;

  to_template: string;

  /**
   * If true, preserves the existing agent's tool environment variables instead of
   * using the template's variables
   */
  preserve_tool_variables?: boolean;
}

export interface AgentResetMessagesParams {
  /**
   * If true, adds the default initial messages after resetting.
   */
  add_default_initial_messages?: boolean;
}

export interface AgentSearchParams {
  after?: string | null;

  ascending?: boolean;

  combinator?: 'AND';

  limit?: number;

  project_id?: string;

  search?: Array<
    | AgentSearchParams.UnionMember0
    | AgentSearchParams.UnionMember1
    | AgentSearchParams.UnionMember2
    | AgentSearchParams.UnionMember3
    | AgentSearchParams.UnionMember4
  >;

  sortBy?: 'created_at' | 'last_run_completion';
}

export namespace AgentSearchParams {
  export interface UnionMember0 {
    field: 'version';

    value: string;
  }

  export interface UnionMember1 {
    field: 'name';

    operator: 'eq' | 'contains';

    value: string;
  }

  export interface UnionMember2 {
    field: 'tags';

    operator: 'contains';

    value: Array<string>;
  }

  export interface UnionMember3 {
    field: 'identity';

    operator: 'eq';

    value: string;
  }

  export interface UnionMember4 {
    field: 'templateName';

    operator: 'eq';

    value: string;
  }
}

export interface AgentSummarizeParams {
  /**
   * Maximum number of messages to retain after summarization.
   */
  max_message_length: number;
}

Agents.Tools = Tools;
Agents.Sources = Sources;
Agents.Folders = Folders;
Agents.Files = Files;
Agents.CoreMemory = CoreMemory;
Agents.ArchivalMemory = ArchivalMemory;
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
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCountResponse as AgentCountResponse,
    type AgentExportResponse as AgentExportResponse,
    type AgentImportResponse as AgentImportResponse,
    type AgentListGroupsResponse as AgentListGroupsResponse,
    type AgentMigrateResponse as AgentMigrateResponse,
    type AgentRetrieveContextResponse as AgentRetrieveContextResponse,
    type AgentSearchResponse as AgentSearchResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentExportParams as AgentExportParams,
    type AgentImportParams as AgentImportParams,
    type AgentListGroupsParams as AgentListGroupsParams,
    type AgentMigrateParams as AgentMigrateParams,
    type AgentResetMessagesParams as AgentResetMessagesParams,
    type AgentSearchParams as AgentSearchParams,
    type AgentSummarizeParams as AgentSummarizeParams,
  };

  export {
    Tools as Tools,
    type ToolListResponse as ToolListResponse,
    type ToolAttachParams as ToolAttachParams,
    type ToolDetachParams as ToolDetachParams,
    type ToolModifyApprovalParams as ToolModifyApprovalParams,
  };

  export {
    Sources as Sources,
    type SourceListResponse as SourceListResponse,
    type SourceAttachParams as SourceAttachParams,
    type SourceDetachParams as SourceDetachParams,
  };

  export {
    Folders as Folders,
    type FolderListResponse as FolderListResponse,
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
    CoreMemory as CoreMemory,
    type Memory as Memory,
    type CoreMemoryRetrieveVariablesResponse as CoreMemoryRetrieveVariablesResponse,
  };

  export {
    ArchivalMemory as ArchivalMemory,
    type ArchivalMemoryCreateResponse as ArchivalMemoryCreateResponse,
    type ArchivalMemoryListResponse as ArchivalMemoryListResponse,
    type ArchivalMemoryDeleteResponse as ArchivalMemoryDeleteResponse,
    type ArchivalMemorySearchResponse as ArchivalMemorySearchResponse,
    type ArchivalMemoryCreateParams as ArchivalMemoryCreateParams,
    type ArchivalMemoryListParams as ArchivalMemoryListParams,
    type ArchivalMemoryDeleteParams as ArchivalMemoryDeleteParams,
    type ArchivalMemorySearchParams as ArchivalMemorySearchParams,
  };

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
    type MessageUpdateResponse as MessageUpdateResponse,
    type MessageListResponse as MessageListResponse,
    type MessageCancelResponse as MessageCancelResponse,
    type MessagePreviewRawPayloadResponse as MessagePreviewRawPayloadResponse,
    type MessageSearchResponse as MessageSearchResponse,
    type MessageSendStreamResponse as MessageSendStreamResponse,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageListParams as MessageListParams,
    type MessageCancelParams as MessageCancelParams,
    type MessagePreviewRawPayloadParams as MessagePreviewRawPayloadParams,
    type MessageSearchParams as MessageSearchParams,
    type MessageSendParams as MessageSendParams,
    type MessageSendAsyncParams as MessageSendAsyncParams,
    type MessageSendStreamParams as MessageSendStreamParams,
  };
}

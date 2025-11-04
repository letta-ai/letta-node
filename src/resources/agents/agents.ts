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
  EventMessage,
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
   * The embedding configuration used by the agent.
   */
  embedding_config: ModelsAPI.EmbeddingConfig;

  /**
   * The LLM configuration used by the agent.
   */
  llm_config: ModelsAPI.LlmConfig;

  /**
   * @deprecated The in-context memory of the agent.
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
   * @deprecated The ids of the identities associated with this agent.
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
   * @deprecated The multi-agent group that this agent manages
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

export namespace AgentState {
  /**
   * @deprecated The in-context memory of the agent.
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
   * The type of agent.
   */
  agent_type?: AgentType;

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
  embedding?: string | null;

  /**
   * The embedding chunk size used by the agent.
   */
  embedding_chunk_size?: number | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;

  /**
   * Whether to enable internal extended thinking step for a reasoner model.
   */
  enable_reasoner?: boolean | null;

  /**
   * If set to True, memory management will move to a background agent thread.
   */
  enable_sleeptime?: boolean | null;

  /**
   * Deprecated: please use the 'create agents from a template' endpoint instead.
   */
  from_template?: string | null;

  /**
   * If set to True, the agent will be hidden.
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
   * If true, automatically creates and attaches a default data source for this
   * agent.
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
   */
  llm_config?: ModelsAPI.LlmConfig | null;

  /**
   * Maximum number of files that can be open at once for this agent. Setting this
   * too high may exceed the context window, which will break the agent.
   */
  max_files_open?: number | null;

  /**
   * The maximum number of tokens to generate for reasoning step. If not set, the
   * model will use its default value.
   */
  max_reasoning_tokens?: number | null;

  /**
   * The maximum number of tokens to generate, including reasoning step. If not set,
   * the model will use its default value.
   */
  max_tokens?: number | null;

  /**
   * The blocks to create in the agent's in-context memory.
   */
  memory_blocks?: Array<BlocksBlocksAPI.CreateBlock> | null;

  /**
   * The variables that should be set for the agent.
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
   * The LLM configuration handle used by the agent, specified in the format
   * provider/model-name, as an alternative to specifying llm_config.
   */
  model?: string | null;

  /**
   * The name of the agent.
   */
  name?: string;

  /**
   * If set to True, enables parallel tool calling. Defaults to False.
   */
  parallel_tool_calls?: boolean | null;

  /**
   * The per-file view window character limit for this agent. Setting this too high
   * may exceed the context window, which will break the agent.
   */
  per_file_view_window_char_limit?: number | null;

  /**
   * @deprecated Deprecated: Project should now be passed via the X-Project header
   * instead of in the request body. If using the sdk, this can be done via the new
   * x_project field below.
   */
  project?: string | null;

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
   * Deprecated: No longer used
   */
  template?: boolean;

  /**
   * The id of the template the agent belongs to.
   */
  template_id?: string | null;

  /**
   * The timezone of the agent (IANA format).
   */
  timezone?: string | null;

  /**
   * Deprecated: use `secrets` field instead.
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
   * The maximum number of tokens to generate, including reasoning step. If not set,
   * the model will use its default value.
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
   * The LLM configuration handle used by the agent, specified in the format
   * provider/model-name, as an alternative to specifying llm_config.
   */
  model?: string | null;

  /**
   * The name of the agent.
   */
  name?: string | null;

  /**
   * If set to True, enables parallel tool calling. Defaults to False.
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
    type FileListResponsesNextFilesPage as FileListResponsesNextFilesPage,
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
    type EventMessage as EventMessage,
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

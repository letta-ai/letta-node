// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BlocksAPI from '../blocks';
import * as ModelsAPI from '../models';
import * as DeploymentAPI from './deployment';
import {
  Deployment,
  DeploymentDeleteResponse,
  DeploymentListEntitiesParams,
  DeploymentListEntitiesResponse,
} from './deployment';
import * as AgentsAPI from '../agents/agents';
import * as GroupsAPI from '../groups/groups';
import * as CoreMemoryBlocksAPI from '../agents/core-memory/blocks';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class _InternalTemplates extends APIResource {
  deployment: DeploymentAPI.Deployment = new DeploymentAPI.Deployment(this._client);

  /**
   * Create a new agent with template-related fields.
   */
  createAgent(
    body: InternalTemplateCreateAgentParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState> {
    return this._client.post('/v1/_internal_templates/agents', { body, ...options });
  }

  /**
   * Create a new block with template-related fields.
   */
  createBlock(
    body: InternalTemplateCreateBlockParams,
    options?: RequestOptions,
  ): APIPromise<CoreMemoryBlocksAPI.Block> {
    return this._client.post('/v1/_internal_templates/blocks', { body, ...options });
  }

  /**
   * Create a new multi-agent group with the specified configuration.
   */
  createGroup(
    body: InternalTemplateCreateGroupParams,
    options?: RequestOptions,
  ): APIPromise<GroupsAPI.Group> {
    return this._client.post('/v1/_internal_templates/groups', { body, ...options });
  }
}

export interface InternalTemplateCreateAgentParams {
  /**
   * The id of the base template.
   */
  base_template_id: string;

  /**
   * The id of the deployment.
   */
  deployment_id: string;

  /**
   * The id of the entity within the template.
   */
  entity_id: string;

  /**
   * The id of the template.
   */
  template_id: string;

  /**
   * The type of agent.
   */
  agent_type?: AgentsAPI.AgentType;

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
   * The template id used to configure the agent
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
  initial_message_sequence?: Array<AgentsAPI.MessageCreate> | null;

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
  memory_blocks?: Array<BlocksAPI.CreateBlock> | null;

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
  response_format?:
    | AgentsAPI.TextResponseFormat
    | AgentsAPI.JsonSchemaResponseFormat
    | AgentsAPI.JsonObjectResponseFormat
    | null;

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
   * Whether the agent is a template
   */
  template?: boolean;

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
    | AgentsAPI.ChildToolRule
    | AgentsAPI.InitToolRule
    | AgentsAPI.TerminalToolRule
    | AgentsAPI.ConditionalToolRule
    | AgentsAPI.ContinueToolRule
    | AgentsAPI.RequiredBeforeExitToolRule
    | AgentsAPI.MaxCountPerStepToolRule
    | AgentsAPI.ParentToolRule
    | AgentsAPI.RequiresApprovalToolRule
  > | null;

  /**
   * The tools used by the agent.
   */
  tools?: Array<string> | null;
}

export interface InternalTemplateCreateBlockParams {
  /**
   * The id of the base template.
   */
  base_template_id: string;

  /**
   * The id of the deployment.
   */
  deployment_id: string;

  /**
   * The id of the entity within the template.
   */
  entity_id: string;

  /**
   * Label of the block.
   */
  label: string;

  /**
   * The id of the template.
   */
  template_id: string;

  /**
   * Value of the block.
   */
  value: string;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * If set to True, the block will be hidden.
   */
  hidden?: boolean | null;

  is_template?: boolean;

  /**
   * Character limit of the block.
   */
  limit?: number;

  /**
   * Metadata of the block.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Name of the block if it is a template.
   */
  name?: string | null;

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
}

export interface InternalTemplateCreateGroupParams {
  agent_ids: Array<string>;

  /**
   * The id of the base template.
   */
  base_template_id: string;

  /**
   * The id of the deployment.
   */
  deployment_id: string;

  description: string;

  /**
   * The id of the template.
   */
  template_id: string;

  /**
   * If set to True, the group will be hidden.
   */
  hidden?: boolean | null;

  manager_config?:
    | GroupsAPI.RoundRobinManager
    | GroupsAPI.SupervisorManager
    | GroupsAPI.DynamicManager
    | GroupsAPI.SleeptimeManager
    | GroupsAPI.VoiceSleeptimeManager;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  shared_block_ids?: Array<string>;
}

_InternalTemplates.Deployment = Deployment;

export declare namespace _InternalTemplates {
  export {
    type InternalTemplateCreateAgentParams as InternalTemplateCreateAgentParams,
    type InternalTemplateCreateBlockParams as InternalTemplateCreateBlockParams,
    type InternalTemplateCreateGroupParams as InternalTemplateCreateGroupParams,
  };

  export {
    Deployment as Deployment,
    type DeploymentDeleteResponse as DeploymentDeleteResponse,
    type DeploymentListEntitiesResponse as DeploymentListEntitiesResponse,
    type DeploymentListEntitiesParams as DeploymentListEntitiesParams,
  };
}

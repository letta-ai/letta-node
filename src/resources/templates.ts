// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AgentsAPI from './agents/agents';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Templates extends APIResource {
  /**
   * Creates a new template from an existing agent or agent file
   */
  create(
    project: string,
    body: TemplateCreateParams,
    options?: RequestOptions,
  ): APIPromise<TemplateCreateResponse> {
    return this._client.post(path`/v1/templates/${project}`, { body, ...options });
  }

  /**
   * List all templates
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get('/v1/templates', { query, ...options });
  }

  /**
   * Deletes all versions of a template with the specified name
   */
  delete(
    templateName: string,
    params: TemplateDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TemplateDeleteResponse> {
    const { project, ...body } = params;
    return this._client.delete(path`/v1/templates/${project}/${templateName}`, { body, ...options });
  }

  /**
   * Creates an Agent or multiple Agents from a template
   */
  createAgents(
    templateVersion: string,
    params: TemplateCreateAgentsParams,
    options?: RequestOptions,
  ): APIPromise<TemplateCreateAgentsResponse> {
    const { project, ...body } = params;
    return this._client.post(path`/v1/templates/${project}/${templateVersion}/agents`, { body, ...options });
  }

  /**
   * Forks a template version into a new template
   */
  fork(
    templateVersion: string,
    params: TemplateForkParams,
    options?: RequestOptions,
  ): APIPromise<TemplateForkResponse> {
    const { project, ...body } = params;
    return this._client.post(path`/v1/templates/${project}/${templateVersion}/fork`, { body, ...options });
  }

  /**
   * Get a snapshot of the template version, this will return the template state at a
   * specific version
   */
  getSnapshot(
    templateVersion: string,
    params: TemplateGetSnapshotParams,
    options?: RequestOptions,
  ): APIPromise<TemplateGetSnapshotResponse> {
    const { project } = params;
    return this._client.get(path`/v1/templates/${project}/${templateVersion}/snapshot`, options);
  }

  /**
   * List all versions of a specific template
   */
  listVersions(
    name: string,
    params: TemplateListVersionsParams,
    options?: RequestOptions,
  ): APIPromise<TemplateListVersionsResponse> {
    const { project_slug, ...query } = params;
    return this._client.get(path`/v1/templates/${project_slug}/${name}/versions`, { query, ...options });
  }

  /**
   * Renames all versions of a template with the specified name. Versions are
   * automatically stripped from the current template name if accidentally included.
   */
  rename(
    templateName: string,
    params: TemplateRenameParams,
    options?: RequestOptions,
  ): APIPromise<TemplateRenameResponse> {
    const { project, ...body } = params;
    return this._client.patch(path`/v1/templates/${project}/${templateName}/name`, { body, ...options });
  }

  /**
   * Saves the current version of the template as a new version
   */
  saveVersion(
    templateName: string,
    params: TemplateSaveVersionParams,
    options?: RequestOptions,
  ): APIPromise<TemplateSaveVersionResponse> {
    const { project, ...body } = params;
    return this._client.post(path`/v1/templates/${project}/${templateName}`, { body, ...options });
  }

  /**
   * Updates the description for all versions of a template with the specified name.
   * Versions are automatically stripped from the current template name if
   * accidentally included.
   */
  updateDescription(
    templateName: string,
    params: TemplateUpdateDescriptionParams,
    options?: RequestOptions,
  ): APIPromise<TemplateUpdateDescriptionResponse> {
    const { project, ...body } = params;
    return this._client.patch(path`/v1/templates/${project}/${templateName}/description`, {
      body,
      ...options,
    });
  }
}

export interface TemplateCreateResponse {
  id: string;

  /**
   * The latest version of the template
   */
  latest_version: string;

  /**
   * The exact name of the template
   */
  name: string;

  project_id: string;

  project_slug: string;

  /**
   * The full name of the template, including version and project slug
   */
  template_deployment_slug: string;

  /**
   * When the template was last updated
   */
  updated_at: string;

  description?: string;
}

export interface TemplateListResponse {
  has_next_page: boolean;

  templates: Array<TemplateListResponse.Template>;
}

export namespace TemplateListResponse {
  export interface Template {
    id: string;

    /**
     * The latest version of the template
     */
    latest_version: string;

    /**
     * The exact name of the template
     */
    name: string;

    project_id: string;

    project_slug: string;

    /**
     * The full name of the template, including version and project slug
     */
    template_deployment_slug: string;

    /**
     * When the template was last updated
     */
    updated_at: string;

    description?: string;
  }
}

export interface TemplateDeleteResponse {
  success: boolean;
}

export interface TemplateCreateAgentsResponse {
  agents: Array<AgentsAPI.AgentState>;
}

export interface TemplateForkResponse {
  id: string;

  /**
   * The latest version of the template
   */
  latest_version: string;

  /**
   * The exact name of the template
   */
  name: string;

  project_id: string;

  project_slug: string;

  /**
   * The full name of the template, including version and project slug
   */
  template_deployment_slug: string;

  /**
   * When the template was last updated
   */
  updated_at: string;

  description?: string;
}

export interface TemplateGetSnapshotResponse {
  agents: Array<TemplateGetSnapshotResponse.Agent>;

  blocks: Array<TemplateGetSnapshotResponse.Block>;

  configuration: TemplateGetSnapshotResponse.Configuration;

  type: 'classic' | 'cluster' | 'sleeptime' | 'round_robin' | 'supervisor' | 'dynamic' | 'voice_sleeptime';

  version: string;
}

export namespace TemplateGetSnapshotResponse {
  export interface Agent {
    agentType:
      | 'memgpt_agent'
      | 'memgpt_v2_agent'
      | 'react_agent'
      | 'workflow_agent'
      | 'split_thread_agent'
      | 'sleeptime_agent'
      | 'voice_convo_agent'
      | 'voice_sleeptime_agent';

    entityId: string;

    identityIds: Array<string> | null;

    memoryVariables: Agent.MemoryVariables | null;

    model: string;

    name: string;

    properties: Agent.Properties | null;

    sourceIds: Array<string> | null;

    systemPrompt: string;

    tags: Array<string> | null;

    toolIds: Array<string> | null;

    toolRules: Array<
      | Agent.UnionMember0
      | Agent.UnionMember1
      | Agent.UnionMember2
      | Agent.UnionMember3
      | Agent.UnionMember4
      | Agent.UnionMember5
      | Agent.UnionMember6
      | Agent.UnionMember7
      | Agent.UnionMember8
    > | null;

    toolVariables: Agent.ToolVariables | null;
  }

  export namespace Agent {
    export interface MemoryVariables {
      data: Array<MemoryVariables.Data>;

      version: string;
    }

    export namespace MemoryVariables {
      export interface Data {
        key: string;

        type: string;

        defaultValue?: string | null;
      }
    }

    export interface Properties {
      context_window_limit: number | null;

      enable_reasoner: boolean | null;

      max_files_open: number | null;

      max_reasoning_tokens: number | null;

      max_tokens: number | null;

      message_buffer_autoclear: boolean | null;

      per_file_view_window_char_limit: number | null;

      put_inner_thoughts_in_kwargs: boolean | null;

      reasoning_effort: 'minimal' | 'low' | 'medium' | 'high' | null;

      temperature: number | null;

      verbosity_level: 'low' | 'medium' | 'high' | null;
    }

    export interface UnionMember0 {
      children: Array<string>;

      tool_name: string;

      prompt_template?: string | null;

      type?: 'constrain_child_tools';
    }

    export interface UnionMember1 {
      tool_name: string;

      prompt_template?: string | null;

      type?: 'run_first';
    }

    export interface UnionMember2 {
      tool_name: string;

      prompt_template?: string | null;

      type?: 'exit_loop';
    }

    export interface UnionMember3 {
      child_output_mapping: { [key: string]: string };

      tool_name: string;

      default_child?: string | null;

      prompt_template?: string | null;

      require_output_mapping?: boolean;

      type?: 'conditional';
    }

    export interface UnionMember4 {
      tool_name: string;

      prompt_template?: string | null;

      type?: 'continue_loop';
    }

    export interface UnionMember5 {
      tool_name: string;

      prompt_template?: string | null;

      type?: 'required_before_exit';
    }

    export interface UnionMember6 {
      max_count_limit: number;

      tool_name: string;

      prompt_template?: string | null;

      type?: 'max_count_per_step';
    }

    export interface UnionMember7 {
      children: Array<string>;

      tool_name: string;

      prompt_template?: string | null;

      type?: 'parent_last_tool';
    }

    export interface UnionMember8 {
      tool_name: string;

      prompt_template?: string | null;

      type?: 'requires_approval';
    }

    export interface ToolVariables {
      data: Array<ToolVariables.Data>;

      version: string;
    }

    export namespace ToolVariables {
      export interface Data {
        key: string;

        type: string;

        defaultValue?: string | null;
      }
    }
  }

  export interface Block {
    description: string;

    label: string;

    limit: number;

    preserveOnMigration: boolean | null;

    readOnly: boolean;

    value: string;
  }

  export interface Configuration {
    managerAgentEntityId?: string;

    managerType?: string;

    maxMessageBufferLength?: number;

    maxTurns?: number;

    minMessageBufferLength?: number;

    sleeptimeAgentFrequency?: number;

    terminationToken?: string;
  }
}

export interface TemplateListVersionsResponse {
  has_next_page: boolean;

  total_count: number;

  versions: Array<TemplateListVersionsResponse.Version>;
}

export namespace TemplateListVersionsResponse {
  export interface Version {
    /**
     * When the version was created
     */
    created_at: string;

    /**
     * Whether this is the latest version
     */
    is_latest: boolean;

    /**
     * The version number
     */
    version: string;

    /**
     * Version description message
     */
    message?: string;
  }
}

export interface TemplateRenameResponse {
  success: boolean;
}

export interface TemplateSaveVersionResponse {
  id: string;

  /**
   * The latest version of the template
   */
  latest_version: string;

  /**
   * The exact name of the template
   */
  name: string;

  project_id: string;

  project_slug: string;

  /**
   * The full name of the template, including version and project slug
   */
  template_deployment_slug: string;

  /**
   * When the template was last updated
   */
  updated_at: string;

  description?: string;
}

export interface TemplateUpdateDescriptionResponse {
  success: boolean;
}

export type TemplateCreateParams = TemplateCreateParams.Variant0 | TemplateCreateParams.Variant1;

export declare namespace TemplateCreateParams {
  export interface Variant0 {
    /**
     * The ID of the agent to use as a template, can be from any project
     */
    agent_id: string;

    type: 'agent';

    /**
     * Optional custom name for the template. If not provided, a random name will be
     * generated.
     */
    name?: string;
  }

  export interface Variant1 {
    /**
     * The agent file to use as a template, this should be a JSON file exported from
     * the platform
     */
    agent_file: { [key: string]: unknown };

    type: 'agent_file';

    /**
     * Optional custom name for the template. If not provided, a random name will be
     * generated.
     */
    name?: string;
  }
}

export interface TemplateListParams {
  /**
   * Whether to search for an exact name match
   */
  exact?: string;

  limit?: string;

  name?: string;

  offset?: string | number;

  project_id?: string;

  project_slug?: string;

  search?: string;

  sort_by?: 'updated_at' | 'created_at';

  template_id?: string;

  /**
   * Specify the version you want to return, otherwise will return the latest version
   */
  version?: string;
}

export interface TemplateDeleteParams {
  /**
   * The project slug
   */
  project: string;
}

export interface TemplateCreateAgentsParams {
  /**
   * Path param: The project slug
   */
  project: string;

  /**
   * Body param: The name of the agent, optional otherwise a random one will be
   * assigned
   */
  agent_name?: string;

  /**
   * Body param: The identity ids to assign to the agent
   */
  identity_ids?: Array<string>;

  /**
   * Body param: Set an initial sequence of messages, if not provided, the agent will
   * start with the default message sequence, if an empty array is provided, the
   * agent will start with no messages
   */
  initial_message_sequence?: Array<TemplateCreateAgentsParams.InitialMessageSequence>;

  /**
   * Body param: The memory variables to assign to the agent
   */
  memory_variables?: { [key: string]: string };

  /**
   * Body param: The tags to assign to the agent
   */
  tags?: Array<string>;

  /**
   * Body param: The tool variables to assign to the agent
   */
  tool_variables?: { [key: string]: string };
}

export namespace TemplateCreateAgentsParams {
  export interface InitialMessageSequence {
    content: string;

    role: 'user' | 'system' | 'assistant';

    batch_item_id?: string | null;

    group_id?: string | null;

    name?: string | null;

    otid?: string | null;

    sender_id?: string | null;
  }
}

export interface TemplateForkParams {
  /**
   * Path param: The project slug
   */
  project: string;

  /**
   * Body param: Optional custom name for the forked template. If not provided, a
   * random name will be generated.
   */
  name?: string;
}

export interface TemplateGetSnapshotParams {
  /**
   * The project slug
   */
  project: string;
}

export interface TemplateListVersionsParams {
  /**
   * Path param: The project slug
   */
  project_slug: string;

  /**
   * Query param:
   */
  limit?: string;

  /**
   * Query param:
   */
  offset?: string | number;
}

export interface TemplateRenameParams {
  /**
   * Path param: The project slug
   */
  project: string;

  /**
   * Body param: The new name for the template
   */
  new_name: string;
}

export interface TemplateSaveVersionParams {
  /**
   * Path param: The project slug
   */
  project: string;

  /**
   * Body param: A message to describe the changes made in this template version
   */
  message?: string;

  /**
   * Body param: If true, existing agents attached to this template will be migrated
   * to the new template version
   */
  migrate_agents?: boolean;

  /**
   * Body param: If true, the core memories will be preserved in the template version
   * when migrating agents
   */
  preserve_core_memories_on_migration?: boolean;

  /**
   * Body param: If true, the environment variables will be preserved in the template
   * version when migrating agents
   */
  preserve_environment_variables_on_migration?: boolean;
}

export interface TemplateUpdateDescriptionParams {
  /**
   * Path param: The project slug
   */
  project: string;

  /**
   * Body param: The new description for the template
   */
  description?: string;
}

export declare namespace Templates {
  export {
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateListResponse as TemplateListResponse,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    type TemplateCreateAgentsResponse as TemplateCreateAgentsResponse,
    type TemplateForkResponse as TemplateForkResponse,
    type TemplateGetSnapshotResponse as TemplateGetSnapshotResponse,
    type TemplateListVersionsResponse as TemplateListVersionsResponse,
    type TemplateRenameResponse as TemplateRenameResponse,
    type TemplateSaveVersionResponse as TemplateSaveVersionResponse,
    type TemplateUpdateDescriptionResponse as TemplateUpdateDescriptionResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateListParams as TemplateListParams,
    type TemplateDeleteParams as TemplateDeleteParams,
    type TemplateCreateAgentsParams as TemplateCreateAgentsParams,
    type TemplateForkParams as TemplateForkParams,
    type TemplateGetSnapshotParams as TemplateGetSnapshotParams,
    type TemplateListVersionsParams as TemplateListVersionsParams,
    type TemplateRenameParams as TemplateRenameParams,
    type TemplateSaveVersionParams as TemplateSaveVersionParams,
    type TemplateUpdateDescriptionParams as TemplateUpdateDescriptionParams,
  };
}

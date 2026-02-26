// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { AgentCreateParams, AgentCreateResponse, Agents } from './agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templates extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);

  /**
   * Creates a new template from an existing agent or agent file
   */
  create(body: TemplateCreateParams, options?: RequestOptions): APIPromise<TemplateCreateResponse> {
    return this._client.post('/v1/templates', { body, ...options });
  }

  /**
   * Updates the current working version of a template from an agent file
   */
  update(
    templateName: string,
    body: TemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TemplateUpdateResponse> {
    return this._client.patch(path`/v1/templates/${templateName}`, { body, ...options });
  }

  /**
   * Deletes all versions of a template with the specified name
   */
  delete(
    templateName: string,
    body?: TemplateDeleteParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<TemplateDeleteResponse> {
    return this._client.delete(path`/v1/templates/${templateName}`, { body, ...options });
  }

  /**
   * Rollback the current working version of a template to a previous saved version.
   * If the current version has unsaved changes, they will be automatically saved as
   * a new version before rollback.
   */
  rollback(
    templateName: string,
    body: TemplateRollbackParams,
    options?: RequestOptions,
  ): APIPromise<TemplateRollbackResponse> {
    return this._client.post(path`/v1/templates/${templateName}/rollback`, { body, ...options });
  }

  /**
   * Saves the current version of the template as a new version
   */
  save(
    templateName: string,
    body: TemplateSaveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateSaveResponse> {
    return this._client.post(path`/v1/templates/${templateName}/save`, { body, ...options });
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

export interface TemplateUpdateResponse {
  success: boolean;

  message?: string;
}

export interface TemplateDeleteResponse {
  success: boolean;
}

export interface TemplateRollbackResponse {
  success: boolean;

  message?: string;
}

export interface TemplateSaveResponse {
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

    /**
     * If true, update existing custom tools source_code and json_schema (source_type
     * cannot be changed)
     */
    update_existing_tools?: boolean;
  }
}

export interface TemplateUpdateParams {
  /**
   * The agent file to update the current template version from
   */
  agent_file_json: { [key: string]: unknown };

  /**
   * If true, Letta will automatically save any changes as a version before updating
   * the template
   */
  save_existing_changes?: boolean;

  /**
   * If true, update existing custom tools source_code and json_schema (source_type
   * cannot be changed)
   */
  update_existing_tools?: boolean;
}

export interface TemplateDeleteParams {}

export interface TemplateRollbackParams {
  /**
   * The target version to rollback to (e.g., "1", "2", "latest"). Cannot be
   * "current" or "dev".
   */
  version: string;
}

export interface TemplateSaveParams {
  /**
   * Strategy for reconciling memory blocks during migration: "reconcile-all" deletes
   * blocks not in the template, "preserve-deleted" keeps them. Defaults to
   * "preserve-deleted".
   */
  block_reconciliation_strategy?: 'reconcile-all' | 'preserve-deleted';

  /**
   * A message to describe the changes made in this template version
   */
  message?: string;

  /**
   * If true, existing agents attached to this template will be migrated to the new
   * template version
   */
  migrate_agents?: boolean;

  /**
   * If true, the core memories will be preserved in the template version when
   * migrating agents
   */
  preserve_core_memories_on_migration?: boolean;

  /**
   * If true, the environment variables will be preserved in the template version
   * when migrating agents
   */
  preserve_environment_variables_on_migration?: boolean;

  /**
   * If true, existing agent folders/sources will be preserved and merged with
   * template sources during migration. If false, agent sources will be replaced with
   * template sources.
   */
  preserve_sources_on_migration?: boolean;
}

Templates.Agents = Agents;

export declare namespace Templates {
  export {
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateUpdateResponse as TemplateUpdateResponse,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    type TemplateRollbackResponse as TemplateRollbackResponse,
    type TemplateSaveResponse as TemplateSaveResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateDeleteParams as TemplateDeleteParams,
    type TemplateRollbackParams as TemplateRollbackParams,
    type TemplateSaveParams as TemplateSaveParams,
  };

  export {
    Agents as Agents,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentCreateParams as AgentCreateParams,
  };
}

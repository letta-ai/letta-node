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
   * Deletes all versions of a template with the specified name
   */
  delete(
    templateName: string,
    body?: TemplateDeleteParams | null | undefined,
    options?: RequestOptions,
  ): APIPromise<TemplateDeleteResponse> {
    return this._client.delete(path`/v1/templates/${templateName}`, { body, ...options });
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

export interface TemplateDeleteResponse {
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

    /**
     * If true, update existing custom tools source_code and json_schema (source_type
     * cannot be changed)
     */
    update_existing_tools?: boolean;
  }
}

export interface TemplateDeleteParams {}

Templates.Agents = Agents;

export declare namespace Templates {
  export {
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateDeleteParams as TemplateDeleteParams,
  };

  export {
    Agents as Agents,
    type AgentCreateResponse as AgentCreateResponse,
    type AgentCreateParams as AgentCreateParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Tools extends APIResource {
  /**
   * Create a new tool
   */
  create(body: ToolCreateParams, options?: Core.RequestOptions): Core.APIPromise<Tool> {
    return this._client.post('/v1/tools/', { body, ...options });
  }

  /**
   * Get a tool by ID
   */
  retrieve(toolId: string, options?: Core.RequestOptions): Core.APIPromise<Tool> {
    return this._client.get(`/v1/tools/${toolId}`, options);
  }

  /**
   * Update an existing tool
   */
  update(toolId: string, body: ToolUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Tool> {
    return this._client.patch(`/v1/tools/${toolId}`, { body, ...options });
  }

  /**
   * Get a list of all tools available to agents belonging to the org of the user
   */
  list(query?: ToolListParams, options?: Core.RequestOptions): Core.APIPromise<ToolListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ToolListResponse>;
  list(
    query: ToolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/tools/', { query, ...options });
  }

  /**
   * Delete a tool by name
   */
  delete(toolId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/v1/tools/${toolId}`, options);
  }

  /**
   * Add base tools
   */
  addBaseTools(options?: Core.RequestOptions): Core.APIPromise<ToolAddBaseToolsResponse> {
    return this._client.post('/v1/tools/add-base-tools', options);
  }
}

/**
 * Representation of a tool, which is a function that can be called by the agent.
 *
 * Parameters: id (str): The unique identifier of the tool. name (str): The name of
 * the function. tags (List[str]): Metadata tags. source_code (str): The source
 * code of the function. json_schema (Dict): The JSON schema of the function.
 */
export interface Tool {
  /**
   * The source code of the function.
   */
  source_code: string;

  /**
   * The human-friendly ID of the Tool
   */
  id?: string;

  /**
   * The id of the user that made this Tool.
   */
  created_by_id?: string | null;

  /**
   * The description of the tool.
   */
  description?: string | null;

  /**
   * The JSON schema of the function.
   */
  json_schema?: unknown | null;

  /**
   * The id of the user that made this Tool.
   */
  last_updated_by_id?: string | null;

  /**
   * The module of the function.
   */
  module?: string | null;

  /**
   * The name of the function.
   */
  name?: string | null;

  /**
   * The unique identifier of the organization associated with the tool.
   */
  organization_id?: string | null;

  /**
   * The type of the source code.
   */
  source_type?: string | null;

  /**
   * Metadata tags.
   */
  tags?: Array<string>;
}

export type ToolListResponse = Array<Tool>;

export type ToolDeleteResponse = unknown;

export type ToolAddBaseToolsResponse = Array<Tool>;

export interface ToolCreateParams {
  /**
   * The source code of the function.
   */
  source_code: string;

  /**
   * The description of the tool.
   */
  description?: string | null;

  /**
   * The JSON schema of the function (auto-generated from source_code if not
   * provided)
   */
  json_schema?: unknown | null;

  /**
   * The source code of the function.
   */
  module?: string | null;

  /**
   * The name of the function (auto-generated from source_code if not provided).
   */
  name?: string | null;

  /**
   * The source type of the function.
   */
  source_type?: string;

  /**
   * Metadata tags.
   */
  tags?: Array<string>;
}

export interface ToolUpdateParams {
  /**
   * The description of the tool.
   */
  description?: string | null;

  /**
   * The JSON schema of the function (auto-generated from source_code if not
   * provided)
   */
  json_schema?: unknown | null;

  /**
   * The source code of the function.
   */
  module?: string | null;

  /**
   * The name of the function.
   */
  name?: string | null;

  /**
   * The source code of the function.
   */
  source_code?: string | null;

  /**
   * The type of the source code.
   */
  source_type?: string | null;

  /**
   * Metadata tags.
   */
  tags?: Array<string> | null;
}

export interface ToolListParams {
  cursor?: string | null;

  limit?: number | null;
}

export declare namespace Tools {
  export {
    type Tool as Tool,
    type ToolListResponse as ToolListResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolAddBaseToolsResponse as ToolAddBaseToolsResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
  };
}

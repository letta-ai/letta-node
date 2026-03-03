// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MessagesAPI from './agents/messages';
import { APIPromise } from '../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Create a new tool
   */
  create(params: ToolCreateParams, options?: RequestOptions): APIPromise<Tool> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post('/v1/tools/', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Get a tool by ID
   */
  retrieve(
    toolID: string,
    params: ToolRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Tool> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.get(path`/v1/tools/${toolID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Update an existing tool
   */
  update(toolID: string, params: ToolUpdateParams, options?: RequestOptions): APIPromise<Tool> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.patch(path`/v1/tools/${toolID}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Get a list of all tools available to agents.
   */
  list(
    params: ToolListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ToolsArrayPage, Tool> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...query
    } = params ?? {};
    return this._client.getAPIList('/v1/tools/', ArrayPage<Tool>, {
      query,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete a tool by name
   */
  delete(
    toolID: string,
    params: ToolDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
    } = params ?? {};
    return this._client.delete(path`/v1/tools/${toolID}`, {
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Search tools using semantic search.
   *
   * Requires tool embedding to be enabled (embed_tools=True). Uses vector search,
   * full-text search, or hybrid mode to find tools matching the query.
   *
   * Returns tools ranked by relevance with their search scores.
   */
  search(params: ToolSearchParams, options?: RequestOptions): APIPromise<ToolSearchResponse> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.post('/v1/tools/search', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Create or update a tool
   */
  upsert(params: ToolUpsertParams, options?: RequestOptions): APIPromise<Tool> {
    const {
      'x-billing-cost-source': xBillingCostSource,
      'x-billing-customer-id': xBillingCustomerID,
      'x-billing-plan-type': xBillingPlanType,
      ...body
    } = params;
    return this._client.put('/v1/tools/', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xBillingCostSource != null ? { 'x-billing-cost-source': xBillingCostSource } : undefined),
          ...(xBillingCustomerID != null ? { 'x-billing-customer-id': xBillingCustomerID } : undefined),
          ...(xBillingPlanType != null ? { 'x-billing-plan-type': xBillingPlanType } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type ToolsArrayPage = ArrayPage<Tool>;

export interface NpmRequirement {
  /**
   * Name of the npm package.
   */
  name: string;

  /**
   * Optional version of the package, following semantic versioning.
   */
  version?: string | null;
}

export interface PipRequirement {
  /**
   * Name of the pip package.
   */
  name: string;

  /**
   * Optional version of the package, following semantic versioning.
   */
  version?: string | null;
}

/**
 * Representation of a tool, which is a function that can be called by the agent.
 */
export interface Tool {
  /**
   * The human-friendly ID of the Tool
   */
  id: string;

  /**
   * The args JSON schema of the function.
   */
  args_json_schema?: { [key: string]: unknown } | null;

  /**
   * The id of the user that made this Tool.
   */
  created_by_id?: string | null;

  /**
   * Default value for whether or not executing this tool requires approval.
   */
  default_requires_approval?: boolean | null;

  /**
   * The description of the tool.
   */
  description?: string | null;

  /**
   * If set to True, then this tool will potentially be executed concurrently with
   * other tools. Default False.
   */
  enable_parallel_execution?: boolean | null;

  /**
   * The JSON schema of the function.
   */
  json_schema?: { [key: string]: unknown } | null;

  /**
   * The id of the user that made this Tool.
   */
  last_updated_by_id?: string | null;

  /**
   * A dictionary of additional metadata for the tool.
   */
  metadata_?: { [key: string]: unknown } | null;

  /**
   * The name of the function.
   */
  name?: string | null;

  /**
   * Optional list of npm packages required by this tool.
   */
  npm_requirements?: Array<NpmRequirement> | null;

  /**
   * Optional list of pip packages required by this tool.
   */
  pip_requirements?: Array<PipRequirement> | null;

  /**
   * The project id of the tool.
   */
  project_id?: string | null;

  /**
   * The maximum number of characters in the response.
   */
  return_char_limit?: number;

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
  tags?: Array<string>;

  /**
   * The type of the tool.
   */
  tool_type?: ToolType;
}

export interface ToolCreate {
  /**
   * The source code of the function.
   */
  source_code: string;

  /**
   * The args JSON schema of the function.
   */
  args_json_schema?: { [key: string]: unknown } | null;

  /**
   * Whether or not to require approval before executing this tool.
   */
  default_requires_approval?: boolean | null;

  /**
   * The description of the tool.
   */
  description?: string | null;

  /**
   * If set to True, then this tool will potentially be executed concurrently with
   * other tools. Default False.
   */
  enable_parallel_execution?: boolean | null;

  /**
   * The JSON schema of the function (auto-generated from source_code if not
   * provided)
   */
  json_schema?: { [key: string]: unknown } | null;

  /**
   * Optional list of npm packages required by this tool.
   */
  npm_requirements?: Array<NpmRequirement> | null;

  /**
   * Optional list of pip packages required by this tool.
   */
  pip_requirements?: Array<PipRequirement> | null;

  /**
   * The maximum number of characters in the response.
   */
  return_char_limit?: number;

  /**
   * The source type of the function.
   */
  source_type?: string;

  /**
   * Metadata tags.
   */
  tags?: Array<string> | null;
}

/**
 * A message representing the return value of a tool call (generated by Letta
 * executing the requested tool).
 *
 * Args: id (str): The ID of the message date (datetime): The date the message was
 * created in ISO format name (Optional[str]): The name of the sender of the
 * message tool_return (str): The return value of the tool (deprecated, use
 * tool_returns) status (Literal["success", "error"]): The status of the tool call
 * (deprecated, use tool_returns) tool_call_id (str): A unique identifier for the
 * tool call that generated this message (deprecated, use tool_returns) stdout
 * (Optional[List(str)]): Captured stdout (e.g. prints, logs) from the tool
 * invocation (deprecated, use tool_returns) stderr (Optional[List(str)]): Captured
 * stderr from the tool invocation (deprecated, use tool_returns) tool_returns
 * (Optional[List[ToolReturn]]): List of tool returns for multi-tool support
 */
export interface ToolReturnMessage {
  id: string;

  date: string;

  /**
   * @deprecated
   */
  status: 'success' | 'error';

  /**
   * @deprecated
   */
  tool_call_id: string;

  /**
   * @deprecated
   */
  tool_return: string;

  is_err?: boolean | null;

  /**
   * The type of the message.
   */
  message_type?: 'tool_return_message';

  name?: string | null;

  otid?: string | null;

  run_id?: string | null;

  sender_id?: string | null;

  seq_id?: number | null;

  /**
   * @deprecated
   */
  stderr?: Array<string> | null;

  /**
   * @deprecated
   */
  stdout?: Array<string> | null;

  step_id?: string | null;

  tool_returns?: Array<MessagesAPI.ToolReturn> | null;
}

/**
 * Request model for searching tools using semantic search.
 */
export interface ToolSearchRequest {
  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Text query for semantic search.
   */
  query?: string | null;

  /**
   * Search mode: vector, fts, or hybrid.
   */
  search_mode?: 'vector' | 'fts' | 'hybrid';

  /**
   * Filter by tags (match any).
   */
  tags?: Array<string> | null;

  /**
   * Filter by tool types (e.g., 'custom', 'letta_core').
   */
  tool_types?: Array<string> | null;
}

/**
 * Result from a tool search operation.
 */
export interface ToolSearchResult {
  /**
   * Combined relevance score (RRF for hybrid mode).
   */
  combined_score: number;

  /**
   * The matched tool.
   */
  tool: Tool;

  /**
   * The embedded text content used for matching.
   */
  embedded_text?: string | null;

  /**
   * Full-text search rank position.
   */
  fts_rank?: number | null;

  /**
   * Vector search rank position.
   */
  vector_rank?: number | null;
}

export type ToolType =
  | 'custom'
  | 'letta_core'
  | 'letta_memory_core'
  | 'letta_multi_agent_core'
  | 'letta_sleeptime_core'
  | 'letta_voice_sleeptime_core'
  | 'letta_builtin'
  | 'letta_files_core'
  | 'external_langchain'
  | 'external_composio'
  | 'external_mcp';

export type ToolDeleteResponse = unknown;

export type ToolSearchResponse = Array<ToolSearchResult>;

export interface ToolCreateParams {
  /**
   * Body param: The source code of the function.
   */
  source_code: string;

  /**
   * Body param: The args JSON schema of the function.
   */
  args_json_schema?: { [key: string]: unknown } | null;

  /**
   * Body param: Whether or not to require approval before executing this tool.
   */
  default_requires_approval?: boolean | null;

  /**
   * Body param: The description of the tool.
   */
  description?: string | null;

  /**
   * Body param: If set to True, then this tool will potentially be executed
   * concurrently with other tools. Default False.
   */
  enable_parallel_execution?: boolean | null;

  /**
   * Body param: The JSON schema of the function (auto-generated from source_code if
   * not provided)
   */
  json_schema?: { [key: string]: unknown } | null;

  /**
   * Body param: Optional list of npm packages required by this tool.
   */
  npm_requirements?: Array<NpmRequirement> | null;

  /**
   * Body param: Optional list of pip packages required by this tool.
   */
  pip_requirements?: Array<PipRequirement> | null;

  /**
   * Body param: The maximum number of characters in the response.
   */
  return_char_limit?: number;

  /**
   * Body param: The source type of the function.
   */
  source_type?: string;

  /**
   * Body param: Metadata tags.
   */
  tags?: Array<string> | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export interface ToolRetrieveParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export interface ToolUpdateParams {
  /**
   * Body param: The args JSON schema of the function.
   */
  args_json_schema?: { [key: string]: unknown } | null;

  /**
   * Body param: Whether or not to require approval before executing this tool.
   */
  default_requires_approval?: boolean | null;

  /**
   * Body param: The description of the tool.
   */
  description?: string | null;

  /**
   * Body param: If set to True, then this tool will potentially be executed
   * concurrently with other tools. Default False.
   */
  enable_parallel_execution?: boolean | null;

  /**
   * Body param: The JSON schema of the function (auto-generated from source_code if
   * not provided)
   */
  json_schema?: { [key: string]: unknown } | null;

  /**
   * Body param: A dictionary of additional metadata for the tool.
   */
  metadata_?: { [key: string]: unknown } | null;

  /**
   * Body param: Optional list of npm packages required by this tool.
   */
  npm_requirements?: Array<NpmRequirement> | null;

  /**
   * Body param: Optional list of pip packages required by this tool.
   */
  pip_requirements?: Array<PipRequirement> | null;

  /**
   * Body param: The maximum number of characters in the response.
   */
  return_char_limit?: number | null;

  /**
   * Body param: The source code of the function.
   */
  source_code?: string | null;

  /**
   * Body param: The type of the source code.
   */
  source_type?: string | null;

  /**
   * Body param: Metadata tags.
   */
  tags?: Array<string> | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export interface ToolListParams extends ArrayPageParams {
  /**
   * Query param: Tool type(s) to exclude - accepts repeated params or
   * comma-separated values
   */
  exclude_tool_types?: Array<string> | null;

  /**
   * Query param: Filter by single tool name
   */
  name?: string | null;

  /**
   * Query param: Filter by specific tool names
   */
  names?: Array<string> | null;

  /**
   * Query param: Return only tools with tool*type starting with 'letta*'
   */
  return_only_letta_tools?: boolean | null;

  /**
   * Query param: Search tool names (case-insensitive partial match)
   */
  search?: string | null;

  /**
   * Query param: Filter by specific tool IDs - accepts repeated params or
   * comma-separated values
   */
  tool_ids?: Array<string> | null;

  /**
   * Query param: Filter by tool type(s) - accepts repeated params or comma-separated
   * values
   */
  tool_types?: Array<string> | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export interface ToolDeleteParams {
  'x-billing-cost-source'?: string;

  'x-billing-customer-id'?: string;

  'x-billing-plan-type'?: string;
}

export interface ToolSearchParams {
  /**
   * Body param: Maximum number of results to return.
   */
  limit?: number;

  /**
   * Body param: Text query for semantic search.
   */
  query?: string | null;

  /**
   * Body param: Search mode: vector, fts, or hybrid.
   */
  search_mode?: 'vector' | 'fts' | 'hybrid';

  /**
   * Body param: Filter by tags (match any).
   */
  tags?: Array<string> | null;

  /**
   * Body param: Filter by tool types (e.g., 'custom', 'letta_core').
   */
  tool_types?: Array<string> | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export interface ToolUpsertParams {
  /**
   * Body param: The source code of the function.
   */
  source_code: string;

  /**
   * Body param: The args JSON schema of the function.
   */
  args_json_schema?: { [key: string]: unknown } | null;

  /**
   * Body param: Whether or not to require approval before executing this tool.
   */
  default_requires_approval?: boolean | null;

  /**
   * Body param: The description of the tool.
   */
  description?: string | null;

  /**
   * Body param: If set to True, then this tool will potentially be executed
   * concurrently with other tools. Default False.
   */
  enable_parallel_execution?: boolean | null;

  /**
   * Body param: The JSON schema of the function (auto-generated from source_code if
   * not provided)
   */
  json_schema?: { [key: string]: unknown } | null;

  /**
   * Body param: Optional list of npm packages required by this tool.
   */
  npm_requirements?: Array<NpmRequirement> | null;

  /**
   * Body param: Optional list of pip packages required by this tool.
   */
  pip_requirements?: Array<PipRequirement> | null;

  /**
   * Body param: The maximum number of characters in the response.
   */
  return_char_limit?: number;

  /**
   * Body param: The source type of the function.
   */
  source_type?: string;

  /**
   * Body param: Metadata tags.
   */
  tags?: Array<string> | null;

  /**
   * Header param
   */
  'x-billing-cost-source'?: string;

  /**
   * Header param
   */
  'x-billing-customer-id'?: string;

  /**
   * Header param
   */
  'x-billing-plan-type'?: string;
}

export declare namespace Tools {
  export {
    type NpmRequirement as NpmRequirement,
    type PipRequirement as PipRequirement,
    type Tool as Tool,
    type ToolCreate as ToolCreate,
    type ToolReturnMessage as ToolReturnMessage,
    type ToolSearchRequest as ToolSearchRequest,
    type ToolSearchResult as ToolSearchResult,
    type ToolType as ToolType,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolSearchResponse as ToolSearchResponse,
    type ToolsArrayPage as ToolsArrayPage,
    type ToolCreateParams as ToolCreateParams,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolDeleteParams as ToolDeleteParams,
    type ToolSearchParams as ToolSearchParams,
    type ToolUpsertParams as ToolUpsertParams,
  };
}

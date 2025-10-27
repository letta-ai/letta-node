// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MessagesAPI from './agents/messages';
import { APIPromise } from '../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Create a new tool
   */
  create(body: ToolCreateParams, options?: RequestOptions): APIPromise<Tool> {
    return this._client.post('/v1/tools/', { body, ...options });
  }

  /**
   * Get a tool by ID
   */
  retrieve(toolID: string, options?: RequestOptions): APIPromise<Tool> {
    return this._client.get(path`/v1/tools/${toolID}`, options);
  }

  /**
   * Get a list of all tools available to agents.
   */
  list(
    query: ToolListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ToolsArrayPage, Tool> {
    return this._client.getAPIList('/v1/tools/', ArrayPage<Tool>, { query, ...options });
  }

  /**
   * Delete a tool by name
   */
  delete(toolID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/tools/${toolID}`, options);
  }

  /**
   * Get a count of all tools available to agents belonging to the org of the user.
   */
  count(
    query: ToolCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ToolCountResponse> {
    return this._client.get('/v1/tools/count', { query, ...options });
  }

  /**
   * Update an existing tool
   */
  modify(toolID: string, body: ToolModifyParams, options?: RequestOptions): APIPromise<Tool> {
    return this._client.patch(path`/v1/tools/${toolID}`, { body, ...options });
  }

  /**
   * Create or update a tool
   */
  upsert(body: ToolUpsertParams, options?: RequestOptions): APIPromise<Tool> {
    return this._client.put('/v1/tools/', { body, ...options });
  }

  /**
   * Upsert base tools
   */
  upsertBaseTools(options?: RequestOptions): APIPromise<ToolUpsertBaseToolsResponse> {
    return this._client.post('/v1/tools/add-base-tools', options);
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
 *
 * Parameters: id (str): The unique identifier of the tool. name (str): The name of
 * the function. tags (List[str]): Metadata tags. source_code (str): The source
 * code of the function. json_schema (Dict): The JSON schema of the function.
 */
export interface Tool {
  /**
   * The human-friendly ID of the Tool
   */
  id?: string;

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

export type ToolCountResponse = number;

export type ToolUpsertBaseToolsResponse = Array<Tool>;

export interface ToolCreateParams {
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

export interface ToolListParams extends ArrayPageParams {
  /**
   * Tool type(s) to exclude - accepts repeated params or comma-separated values
   */
  exclude_tool_types?: Array<string> | null;

  /**
   * Filter by single tool name
   */
  name?: string | null;

  /**
   * Filter by specific tool names
   */
  names?: Array<string> | null;

  /**
   * Return only tools with tool*type starting with 'letta*'
   */
  return_only_letta_tools?: boolean | null;

  /**
   * Search tool names (case-insensitive partial match)
   */
  search?: string | null;

  /**
   * Filter by specific tool IDs - accepts repeated params or comma-separated values
   */
  tool_ids?: Array<string> | null;

  /**
   * Filter by tool type(s) - accepts repeated params or comma-separated values
   */
  tool_types?: Array<string> | null;
}

export interface ToolCountParams {
  /**
   * Exclude built-in Letta tools from the count
   */
  exclude_letta_tools?: boolean | null;

  /**
   * Tool type(s) to exclude - accepts repeated params or comma-separated values
   */
  exclude_tool_types?: Array<string> | null;

  name?: string | null;

  /**
   * Filter by specific tool names
   */
  names?: Array<string> | null;

  /**
   * Count only tools with tool*type starting with 'letta*'
   */
  return_only_letta_tools?: boolean | null;

  /**
   * Search tool names (case-insensitive partial match)
   */
  search?: string | null;

  /**
   * Filter by specific tool IDs - accepts repeated params or comma-separated values
   */
  tool_ids?: Array<string> | null;

  /**
   * Filter by tool type(s) - accepts repeated params or comma-separated values
   */
  tool_types?: Array<string> | null;
}

export interface ToolModifyParams {
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
   * A dictionary of additional metadata for the tool.
   */
  metadata_?: { [key: string]: unknown } | null;

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
  return_char_limit?: number | null;

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

export interface ToolUpsertParams {
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

export declare namespace Tools {
  export {
    type NpmRequirement as NpmRequirement,
    type PipRequirement as PipRequirement,
    type Tool as Tool,
    type ToolCreate as ToolCreate,
    type ToolReturnMessage as ToolReturnMessage,
    type ToolType as ToolType,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolCountResponse as ToolCountResponse,
    type ToolUpsertBaseToolsResponse as ToolUpsertBaseToolsResponse,
    type ToolsArrayPage as ToolsArrayPage,
    type ToolCreateParams as ToolCreateParams,
    type ToolListParams as ToolListParams,
    type ToolCountParams as ToolCountParams,
    type ToolModifyParams as ToolModifyParams,
    type ToolUpsertParams as ToolUpsertParams,
  };
}

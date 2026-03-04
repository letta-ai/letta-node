// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ToolsAPI from '../tools';
import { ToolsArrayPage } from '../tools';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Get tools from an existing agent.
   */
  list(
    agentID: string,
    query: ToolListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ToolsArrayPage, ToolsAPI.Tool> {
    return this._client.getAPIList(path`/v1/agents/${agentID}/tools`, ArrayPage<ToolsAPI.Tool>, {
      query,
      ...options,
    });
  }

  /**
   * Attach a tool to an agent.
   */
  attach(
    toolID: string,
    params: ToolAttachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState | null> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/tools/attach/${toolID}`, options);
  }

  /**
   * Detach a tool from an agent.
   */
  detach(
    toolID: string,
    params: ToolDetachParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState | null> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/tools/detach/${toolID}`, options);
  }

  /**
   * Trigger a tool by name on a specific agent, providing the necessary arguments.
   *
   * This endpoint executes a tool that is attached to the agent, using the agent's
   * state and environment variables for execution context.
   */
  run(toolName: string, params: ToolRunParams, options?: RequestOptions): APIPromise<ToolExecutionResult> {
    const { agent_id, ...body } = params;
    return this._client.post(path`/v1/agents/${agent_id}/tools/${toolName}/run`, { body, ...options });
  }

  /**
   * Modify the approval requirement for a tool attached to an agent.
   *
   * Accepts requires_approval via request body (preferred) or query parameter
   * (deprecated).
   */
  updateApproval(
    toolName: string,
    params: ToolUpdateApprovalParams,
    options?: RequestOptions,
  ): APIPromise<AgentsAPI.AgentState | null> {
    const { agent_id, query_requires_approval, ...body } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/tools/approval/${toolName}`, {
      query: { requires_approval: query_requires_approval },
      body,
      ...options,
    });
  }
}

/**
 * Request to execute a tool.
 */
export interface ToolExecuteRequest {
  /**
   * Arguments to pass to the tool
   */
  args?: { [key: string]: unknown };
}

export interface ToolExecutionResult {
  /**
   * The status of the tool execution and return object
   */
  status: 'success' | 'error';

  /**
   * @deprecated Representation of an agent's state. This is the state of the agent
   * at a given time, and is persisted in the DB backend. The state has all the
   * information needed to recreate a persisted agent.
   */
  agent_state?: AgentsAPI.AgentState | null;

  /**
   * The function return object
   */
  func_return?: unknown;

  /**
   * The fingerprint of the config for the sandbox
   */
  sandbox_config_fingerprint?: string | null;

  /**
   * Captured stderr from the function invocation
   */
  stderr?: Array<string> | null;

  /**
   * Captured stdout (prints, logs) from function invocation
   */
  stdout?: Array<string> | null;
}

export interface ToolListParams extends ArrayPageParams {}

export interface ToolAttachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface ToolDetachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface ToolRunParams {
  /**
   * Path param: The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;

  /**
   * Body param: Arguments to pass to the tool
   */
  args?: { [key: string]: unknown };
}

export interface ToolUpdateApprovalParams {
  /**
   * Path param: The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;

  /**
   * Body param: Whether the tool requires approval before execution
   */
  body_requires_approval: boolean;

  /**
   * @deprecated Query param: Whether the tool requires approval before execution
   */
  query_requires_approval?: boolean | null;
}

export declare namespace Tools {
  export {
    type ToolExecuteRequest as ToolExecuteRequest,
    type ToolExecutionResult as ToolExecutionResult,
    type ToolListParams as ToolListParams,
    type ToolAttachParams as ToolAttachParams,
    type ToolDetachParams as ToolDetachParams,
    type ToolRunParams as ToolRunParams,
    type ToolUpdateApprovalParams as ToolUpdateApprovalParams,
  };
}

export { type ToolsArrayPage };

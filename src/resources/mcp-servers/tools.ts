// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ToolsAPI from '../tools';
import * as AgentsAPI from '../agents/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Get a specific MCP tool by its ID
   */
  retrieve(toolID: string, params: ToolRetrieveParams, options?: RequestOptions): APIPromise<ToolsAPI.Tool> {
    const { mcp_server_id } = params;
    return this._client.get(path`/v1/mcp-servers/${mcp_server_id}/tools/${toolID}`, options);
  }

  /**
   * Get a list of all tools for a specific MCP server
   */
  list(mcpServerID: string, options?: RequestOptions): APIPromise<ToolListResponse> {
    return this._client.get(path`/v1/mcp-servers/${mcpServerID}/tools`, options);
  }

  /**
   * Execute a specific MCP tool
   *
   * The request body should contain the tool arguments in the MCPToolExecuteRequest
   * format.
   */
  run(toolID: string, params: ToolRunParams, options?: RequestOptions): APIPromise<ToolRunResponse> {
    const { mcp_server_id, ...body } = params;
    return this._client.post(path`/v1/mcp-servers/${mcp_server_id}/tools/${toolID}/run`, {
      body,
      ...options,
    });
  }
}

export type ToolListResponse = Array<ToolsAPI.Tool>;

export interface ToolRunResponse {
  /**
   * The status of the tool execution and return object
   */
  status: 'success' | 'error';

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

export interface ToolRetrieveParams {
  mcp_server_id: string;
}

export interface ToolRunParams {
  /**
   * Path param:
   */
  mcp_server_id: string;

  /**
   * Body param: Arguments to pass to the MCP tool
   */
  args?: { [key: string]: unknown };
}

export declare namespace Tools {
  export {
    type ToolListResponse as ToolListResponse,
    type ToolRunResponse as ToolRunResponse,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolRunParams as ToolRunParams,
  };
}

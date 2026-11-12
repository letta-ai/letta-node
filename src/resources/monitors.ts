// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Monitors extends APIResource {
  /**
   * Supply agent_id for agent-wide records or conversation_id for
   * conversation-scoped records. With both, the conversation must belong to the
   * agent. Use agent_id with conversation_id=default for the virtual default
   * conversation.
   */
  create(body: MonitorCreateParams, options?: RequestOptions): APIPromise<Monitor> {
    return this._client.post('/v1/monitors', { body, ...options });
  }

  /**
   * Get a monitor
   */
  retrieve(monitorID: string, options?: RequestOptions): APIPromise<Monitor> {
    return this._client.get(path`/v1/monitors/${monitorID}`, options);
  }

  /**
   * Update a monitor
   */
  update(
    monitorID: string,
    body: MonitorUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Monitor> {
    return this._client.patch(path`/v1/monitors/${monitorID}`, { body, ...options });
  }

  /**
   * Supply agent_id for agent-wide records or conversation_id for
   * conversation-scoped records. With both, the conversation must belong to the
   * agent. Use agent_id with conversation_id=default for the virtual default
   * conversation.
   */
  list(
    query: MonitorListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MonitorListResponse> {
    return this._client.get('/v1/monitors', { query, ...options });
  }

  /**
   * Delete a monitor
   */
  delete(monitorID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/monitors/${monitorID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Monitor {
  agent_id: string | null;

  command: string;

  conversation_id: string | null;

  created_at: string;

  description: string;

  device_id: string | null;

  exit_code: number | null;

  kind: 'command' | 'websocket' | 'script' | 'github_pull_request';

  monitor_id: string;

  output_file: string | null;

  persistent: boolean;

  started_at: string | null;

  status: 'running' | 'completed' | 'failed';

  updated_at: string;
}

export type MonitorListResponse = Array<Monitor>;

export interface MonitorCreateParams {
  command: string;

  description: string;

  kind: 'command' | 'websocket' | 'script' | 'github_pull_request';

  agent_id?: string | null;

  conversation_id?: string | null;

  device_id?: string | null;

  exit_code?: number | null;

  output_file?: string | null;

  persistent?: boolean;

  started_at?: string | null;

  status?: 'running' | 'completed' | 'failed';
}

export interface MonitorUpdateParams {
  command?: string;

  description?: string;

  device_id?: string | null;

  exit_code?: number | null;

  kind?: 'command' | 'websocket' | 'script' | 'github_pull_request';

  output_file?: string | null;

  persistent?: boolean;

  started_at?: string | null;

  status?: 'running' | 'completed' | 'failed';
}

export interface MonitorListParams {
  after?: string;

  agent_id?: string | null;

  conversation_id?: string | null;

  limit?: number;

  status?: 'running' | 'completed' | 'failed';
}

export declare namespace Monitors {
  export {
    type Monitor as Monitor,
    type MonitorListResponse as MonitorListResponse,
    type MonitorCreateParams as MonitorCreateParams,
    type MonitorUpdateParams as MonitorUpdateParams,
    type MonitorListParams as MonitorListParams,
  };
}

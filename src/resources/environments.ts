// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Environments extends APIResource {
  /**
   * Get a specific environment connection by deviceId
   */
  retrieve(deviceID: string, options?: RequestOptions): APIPromise<EnvironmentRetrieveResponse> {
    return this._client.get(path`/v1/environments/${deviceID}`, options);
  }

  /**
   * List all active environment connections for the organization
   */
  list(
    query: EnvironmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EnvironmentListResponse> {
    return this._client.get('/v1/environments', { query, ...options });
  }

  /**
   * Send a message to a specific environment connection
   */
  sendMessage(
    connectionID: string,
    body: EnvironmentSendMessageParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentSendMessageResponse> {
    return this._client.post(path`/v1/environments/${connectionID}/messages`, { body, ...options });
  }
}

export interface EnvironmentRetrieveResponse {
  id: string;

  connectedAt: number | null;

  connectionId: string | null;

  connectionName: string;

  deviceId: string;

  firstSeenAt: number;

  lastHeartbeat: number | null;

  lastSeenAt: number;

  organizationId: string;

  podId: string | null;

  apiKeyOwner?: string;

  currentMode?: 'default' | 'standard' | 'acceptEdits' | 'bypassPermissions' | 'unrestricted';

  listenerInstanceId?: string;

  metadata?: EnvironmentRetrieveResponse.Metadata;

  userId?: string;
}

export namespace EnvironmentRetrieveResponse {
  export interface Metadata {
    gitBranch?: string;

    lettaCodeVersion?: string;

    nodeVersion?: string;

    os?: string;

    self_update?: Metadata.SelfUpdate;

    supported_commands?: Array<string>;

    workingDirectory?: string;

    [k: string]: unknown;
  }

  export namespace Metadata {
    export interface SelfUpdate {
      supported: boolean;

      writable: boolean;

      install_path?: string;

      manual_command?: string;

      reason?: string;
    }
  }
}

export interface EnvironmentListResponse {
  connections: Array<EnvironmentListResponse.Connection>;

  hasNextPage: boolean;
}

export namespace EnvironmentListResponse {
  export interface Connection {
    id: string;

    connectedAt: number | null;

    connectionId: string | null;

    connectionName: string;

    deviceId: string;

    firstSeenAt: number;

    lastHeartbeat: number | null;

    lastSeenAt: number;

    organizationId: string;

    podId: string | null;

    apiKeyOwner?: string;

    currentMode?: 'default' | 'standard' | 'acceptEdits' | 'bypassPermissions' | 'unrestricted';

    listenerInstanceId?: string;

    metadata?: Connection.Metadata;

    userId?: string;
  }

  export namespace Connection {
    export interface Metadata {
      gitBranch?: string;

      lettaCodeVersion?: string;

      nodeVersion?: string;

      os?: string;

      self_update?: Metadata.SelfUpdate;

      supported_commands?: Array<string>;

      workingDirectory?: string;

      [k: string]: unknown;
    }

    export namespace Metadata {
      export interface SelfUpdate {
        supported: boolean;

        writable: boolean;

        install_path?: string;

        manual_command?: string;

        reason?: string;
      }
    }
  }
}

export interface EnvironmentSendMessageResponse {
  message: string;

  success: boolean;
}

export interface EnvironmentListParams {
  after?: string;

  limit?: string;

  onlineOnly?: string;

  source?: 'local' | 'remote';

  userId?: string;
}

export interface EnvironmentSendMessageParams {
  messages: Array<EnvironmentSendMessageParams.UnionMember0 | EnvironmentSendMessageParams.UnionMember1>;

  agentId?: string;

  conversationId?: string | null;
}

export namespace EnvironmentSendMessageParams {
  export interface UnionMember0 {
    client_message_id: string;

    content: string | Array<UnionMember0.UnionMember1>;

    role: 'user';

    otid?: string;
  }

  export namespace UnionMember0 {
    export interface UnionMember1 {
      text: string;

      type: 'text';
    }
  }

  export interface UnionMember1 {
    approvals: Array<UnionMember1.UnionMember0 | UnionMember1.UnionMember1>;

    type: 'approval';
  }

  export namespace UnionMember1 {
    export interface UnionMember0 {
      status: 'success' | 'error';

      tool_call_id: string;

      tool_return: string | Array<UnionMember0.UnionMember1>;

      stderr?: Array<string> | null;

      stdout?: Array<string> | null;

      type?: 'tool';
    }

    export namespace UnionMember0 {
      export interface UnionMember1 {
        text: string;

        type: 'text';
      }
    }

    export interface UnionMember1 {
      approve: boolean;

      tool_call_id: string;

      reason?: string | null;

      type?: 'approval';

      updated_input?: { [key: string]: unknown } | null;
    }
  }
}

export declare namespace Environments {
  export {
    type EnvironmentRetrieveResponse as EnvironmentRetrieveResponse,
    type EnvironmentListResponse as EnvironmentListResponse,
    type EnvironmentSendMessageResponse as EnvironmentSendMessageResponse,
    type EnvironmentListParams as EnvironmentListParams,
    type EnvironmentSendMessageParams as EnvironmentSendMessageParams,
  };
}

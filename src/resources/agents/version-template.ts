// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class VersionTemplate extends APIResource {
  /**
   * Creates a versioned version of an agent
   */
  create(
    agentId: string,
    params: VersionTemplateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionTemplateCreateResponse> {
    const { body, returnAgentId } = params;
    return this._client.post(`/v1/agents/${agentId}/version-template`, {
      query: { returnAgentId },
      body: body,
      ...options,
    });
  }
}

export interface VersionTemplateCreateResponse {
  version: string;

  agentId?: string;
}

export interface VersionTemplateCreateParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param:
   */
  returnAgentId?: boolean;
}

export declare namespace VersionTemplate {
  export {
    type VersionTemplateCreateResponse as VersionTemplateCreateResponse,
    type VersionTemplateCreateParams as VersionTemplateCreateParams,
  };
}

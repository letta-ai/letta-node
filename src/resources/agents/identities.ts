// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Identities extends APIResource {
  /**
   * Attach an identity to an agent.
   */
  attach(identityID: string, params: IdentityAttachParams, options?: RequestOptions): APIPromise<unknown> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/identities/attach/${identityID}`, options);
  }

  /**
   * Detach an identity from an agent.
   */
  detach(identityID: string, params: IdentityDetachParams, options?: RequestOptions): APIPromise<unknown> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/identities/detach/${identityID}`, options);
  }
}

export type IdentityAttachResponse = unknown;

export type IdentityDetachResponse = unknown;

export interface IdentityAttachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface IdentityDetachParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export declare namespace Identities {
  export {
    type IdentityAttachResponse as IdentityAttachResponse,
    type IdentityDetachResponse as IdentityDetachResponse,
    type IdentityAttachParams as IdentityAttachParams,
    type IdentityDetachParams as IdentityDetachParams,
  };
}

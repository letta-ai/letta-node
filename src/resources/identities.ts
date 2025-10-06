// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AgentsAPI from './agents/agents';
import * as BlocksAPI from './agents/core-memory/blocks';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Identities extends APIResource {
  /**
   * Create Identity
   */
  create(params: IdentityCreateParams, options?: RequestOptions): APIPromise<Identity> {
    const { 'X-Project': xProject, ...body } = params;
    return this._client.post('/v1/identities/', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xProject != null ? { 'X-Project': xProject } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve Identity
   */
  retrieve(identityID: string, options?: RequestOptions): APIPromise<Identity> {
    return this._client.get(path`/v1/identities/${identityID}`, options);
  }

  /**
   * Get a list of all identities in the database
   */
  list(
    query: IdentityListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IdentityListResponse> {
    return this._client.get('/v1/identities/', { query, ...options });
  }

  /**
   * Delete an identity by its identifier key
   */
  delete(identityID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/identities/${identityID}`, options);
  }

  /**
   * Get count of all identities for a user
   */
  count(options?: RequestOptions): APIPromise<IdentityCountResponse> {
    return this._client.get('/v1/identities/count', options);
  }

  /**
   * Get all agents associated with the specified identity.
   */
  listAgents(
    identityID: string,
    query: IdentityListAgentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IdentityListAgentsResponse> {
    return this._client.get(path`/v1/identities/${identityID}/agents`, { query, ...options });
  }

  /**
   * Get all blocks associated with the specified identity.
   */
  listBlocks(
    identityID: string,
    query: IdentityListBlocksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IdentityListBlocksResponse> {
    return this._client.get(path`/v1/identities/${identityID}/blocks`, { query, ...options });
  }

  /**
   * Modify Identity
   */
  modify(identityID: string, body: IdentityModifyParams, options?: RequestOptions): APIPromise<Identity> {
    return this._client.patch(path`/v1/identities/${identityID}`, { body, ...options });
  }

  /**
   * Upsert Identity
   */
  upsert(params: IdentityUpsertParams, options?: RequestOptions): APIPromise<Identity> {
    const { 'X-Project': xProject, ...body } = params;
    return this._client.put('/v1/identities/', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xProject != null ? { 'X-Project': xProject } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Upsert Identity Properties
   */
  upsertProperties(
    identityID: string,
    params: IdentityUpsertPropertiesParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body } = params;
    return this._client.put(path`/v1/identities/${identityID}/properties`, { body: body, ...options });
  }
}

export interface Identity {
  /**
   * The IDs of the agents associated with the identity.
   */
  agent_ids: Array<string>;

  /**
   * The IDs of the blocks associated with the identity.
   */
  block_ids: Array<string>;

  /**
   * External, user-generated identifier key of the identity.
   */
  identifier_key: string;

  /**
   * The type of the identity.
   */
  identity_type: IdentityType;

  /**
   * The name of the identity.
   */
  name: string;

  /**
   * The human-friendly ID of the Identity
   */
  id?: string;

  /**
   * The project id of the identity, if applicable.
   */
  project_id?: string | null;

  /**
   * List of properties associated with the identity
   */
  properties?: Array<IdentityProperty>;
}

/**
 * A property of an identity
 */
export interface IdentityProperty {
  /**
   * The key of the property
   */
  key: string;

  /**
   * The type of the property
   */
  type: 'string' | 'number' | 'boolean' | 'json';

  /**
   * The value of the property
   */
  value: string | number | boolean | { [key: string]: unknown };
}

/**
 * Enum to represent the type of the identity.
 */
export type IdentityType = 'org' | 'user' | 'other';

export type IdentityListResponse = Array<Identity>;

export type IdentityDeleteResponse = unknown;

export type IdentityCountResponse = number;

export type IdentityListAgentsResponse = Array<AgentsAPI.AgentState>;

export type IdentityListBlocksResponse = Array<BlocksAPI.Block>;

export type IdentityUpsertPropertiesResponse = unknown;

export interface IdentityCreateParams {
  /**
   * Body param: External, user-generated identifier key of the identity.
   */
  identifier_key: string;

  /**
   * Body param: The type of the identity.
   */
  identity_type: IdentityType;

  /**
   * Body param: The name of the identity.
   */
  name: string;

  /**
   * Body param: The agent ids that are associated with the identity.
   */
  agent_ids?: Array<string> | null;

  /**
   * Body param: The IDs of the blocks associated with the identity.
   */
  block_ids?: Array<string> | null;

  /**
   * Body param: The project id of the identity, if applicable.
   */
  project_id?: string | null;

  /**
   * Body param: List of properties associated with the identity.
   */
  properties?: Array<IdentityProperty> | null;

  /**
   * Header param: The project slug to associate with the identity (cloud only).
   */
  'X-Project'?: string;
}

export interface IdentityListParams {
  /**
   * Identity ID cursor for pagination. Returns identities that come after this
   * identity ID in the specified sort order
   */
  after?: string | null;

  /**
   * Identity ID cursor for pagination. Returns identities that come before this
   * identity ID in the specified sort order
   */
  before?: string | null;

  identifier_key?: string | null;

  /**
   * Enum to represent the type of the identity.
   */
  identity_type?: IdentityType | null;

  /**
   * Maximum number of identities to return
   */
  limit?: number | null;

  name?: string | null;

  /**
   * Sort order for identities by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';

  project_id?: string | null;
}

export interface IdentityListAgentsParams {
  /**
   * Agent ID cursor for pagination. Returns agents that come after this agent ID in
   * the specified sort order
   */
  after?: string | null;

  /**
   * Agent ID cursor for pagination. Returns agents that come before this agent ID in
   * the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of agents to return
   */
  limit?: number | null;

  /**
   * Sort order for agents by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export interface IdentityListBlocksParams {
  /**
   * Block ID cursor for pagination. Returns blocks that come after this block ID in
   * the specified sort order
   */
  after?: string | null;

  /**
   * Block ID cursor for pagination. Returns blocks that come before this block ID in
   * the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of blocks to return
   */
  limit?: number | null;

  /**
   * Sort order for blocks by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';
}

export interface IdentityModifyParams {
  /**
   * The agent ids that are associated with the identity.
   */
  agent_ids?: Array<string> | null;

  /**
   * The IDs of the blocks associated with the identity.
   */
  block_ids?: Array<string> | null;

  /**
   * External, user-generated identifier key of the identity.
   */
  identifier_key?: string | null;

  /**
   * Enum to represent the type of the identity.
   */
  identity_type?: IdentityType | null;

  /**
   * The name of the identity.
   */
  name?: string | null;

  /**
   * List of properties associated with the identity.
   */
  properties?: Array<IdentityProperty> | null;
}

export interface IdentityUpsertParams {
  /**
   * Body param: External, user-generated identifier key of the identity.
   */
  identifier_key: string;

  /**
   * Body param: The type of the identity.
   */
  identity_type: IdentityType;

  /**
   * Body param: The name of the identity.
   */
  name: string;

  /**
   * Body param: The agent ids that are associated with the identity.
   */
  agent_ids?: Array<string> | null;

  /**
   * Body param: The IDs of the blocks associated with the identity.
   */
  block_ids?: Array<string> | null;

  /**
   * Body param: The project id of the identity, if applicable.
   */
  project_id?: string | null;

  /**
   * Body param: List of properties associated with the identity.
   */
  properties?: Array<IdentityProperty> | null;

  /**
   * Header param: The project slug to associate with the identity (cloud only).
   */
  'X-Project'?: string;
}

export interface IdentityUpsertPropertiesParams {
  body: Array<IdentityProperty>;
}

export declare namespace Identities {
  export {
    type Identity as Identity,
    type IdentityProperty as IdentityProperty,
    type IdentityType as IdentityType,
    type IdentityListResponse as IdentityListResponse,
    type IdentityDeleteResponse as IdentityDeleteResponse,
    type IdentityCountResponse as IdentityCountResponse,
    type IdentityListAgentsResponse as IdentityListAgentsResponse,
    type IdentityListBlocksResponse as IdentityListBlocksResponse,
    type IdentityUpsertPropertiesResponse as IdentityUpsertPropertiesResponse,
    type IdentityCreateParams as IdentityCreateParams,
    type IdentityListParams as IdentityListParams,
    type IdentityListAgentsParams as IdentityListAgentsParams,
    type IdentityListBlocksParams as IdentityListBlocksParams,
    type IdentityModifyParams as IdentityModifyParams,
    type IdentityUpsertParams as IdentityUpsertParams,
    type IdentityUpsertPropertiesParams as IdentityUpsertPropertiesParams,
  };
}

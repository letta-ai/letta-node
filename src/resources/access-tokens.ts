// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccessTokens extends APIResource {
  /**
   * Create a new client side access token with the specified configuration.
   */
  create(body: AccessTokenCreateParams, options?: RequestOptions): APIPromise<AccessTokenCreateResponse> {
    return this._client.post('/v1/client-side-access-tokens', { body, ...options });
  }

  /**
   * List all client side access tokens for the current account. This is only
   * available for cloud users.
   */
  list(
    query: AccessTokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccessTokenListResponse> {
    return this._client.get('/v1/client-side-access-tokens', { query, ...options });
  }

  /**
   * Delete a client side access token.
   */
  delete(
    token: string,
    params: AccessTokenDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body } = params ?? {};
    return this._client.delete(path`/v1/client-side-access-tokens/${token}`, { body: body, ...options });
  }
}

export interface AccessTokenCreateResponse {
  token: string;

  expiresAt: string;

  hostname: string;

  policy: AccessTokenCreateResponse.Policy;
}

export namespace AccessTokenCreateResponse {
  export interface Policy {
    data: Array<Policy.Data>;

    version: '1';
  }

  export namespace Policy {
    export interface Data {
      id: string;

      access: Array<'read_messages' | 'write_messages' | 'read_agent' | 'write_agent'>;

      type: 'agent';
    }
  }
}

export interface AccessTokenListResponse {
  hasNextPage: boolean;

  tokens: Array<AccessTokenListResponse.Token>;
}

export namespace AccessTokenListResponse {
  export interface Token {
    token: string;

    expiresAt: string;

    hostname: string;

    policy: Token.Policy;
  }

  export namespace Token {
    export interface Policy {
      data: Array<Policy.Data>;

      version: '1';
    }

    export namespace Policy {
      export interface Data {
        id: string;

        access: Array<'read_messages' | 'write_messages' | 'read_agent' | 'write_agent'>;

        type: 'agent';
      }
    }
  }
}

export type AccessTokenDeleteResponse = unknown;

export interface AccessTokenCreateParams {
  /**
   * The hostname of the client side application. Please specify the full URL
   * including the protocol (http or https).
   */
  hostname: string;

  policy: Array<AccessTokenCreateParams.Policy>;

  /**
   * The expiration date of the token. If not provided, the token will expire in 5
   * minutes
   */
  expires_at?: string;
}

export namespace AccessTokenCreateParams {
  export interface Policy {
    id: string;

    access: Array<'read_messages' | 'write_messages' | 'read_agent' | 'write_agent'>;

    type: 'agent';
  }
}

export interface AccessTokenListParams {
  /**
   * The agent ID to filter tokens by. If provided, only tokens for this agent will
   * be returned.
   */
  agentId?: string;

  /**
   * The number of tokens to return per page. Defaults to 10.
   */
  limit?: number;

  /**
   * The offset for pagination. Defaults to 0.
   */
  offset?: number;
}

export interface AccessTokenDeleteParams {
  body?: unknown;
}

export declare namespace AccessTokens {
  export {
    type AccessTokenCreateResponse as AccessTokenCreateResponse,
    type AccessTokenListResponse as AccessTokenListResponse,
    type AccessTokenDeleteResponse as AccessTokenDeleteResponse,
    type AccessTokenCreateParams as AccessTokenCreateParams,
    type AccessTokenListParams as AccessTokenListParams,
    type AccessTokenDeleteParams as AccessTokenDeleteParams,
  };
}

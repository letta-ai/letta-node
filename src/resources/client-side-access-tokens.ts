// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ClientSideAccessTokens extends APIResource {
  /**
   * Create a new client side access token with the specified configuration.
   */
  create(
    body: ClientSideAccessTokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<ClientSideAccessTokenCreateResponse> {
    return this._client.post('/v1/client-side-access-tokens', { body, ...options });
  }

  /**
   * List all client side access tokens for the current account. This is only
   * available for cloud users.
   */
  list(
    query: ClientSideAccessTokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClientSideAccessTokenListResponse> {
    return this._client.get('/v1/client-side-access-tokens', { query, ...options });
  }

  /**
   * Delete a client side access token.
   */
  delete(
    token: string,
    params: ClientSideAccessTokenDeleteParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body } = params ?? {};
    return this._client.delete(path`/v1/client-side-access-tokens/${token}`, { body: body, ...options });
  }
}

export interface ClientSideAccessTokenCreateResponse {
  token: string;

  expiresAt: string;

  hostname: string;

  policy: ClientSideAccessTokenCreateResponse.Policy;
}

export namespace ClientSideAccessTokenCreateResponse {
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

export interface ClientSideAccessTokenListResponse {
  hasNextPage: boolean;

  tokens: Array<ClientSideAccessTokenListResponse.Token>;
}

export namespace ClientSideAccessTokenListResponse {
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

export type ClientSideAccessTokenDeleteResponse = unknown;

export interface ClientSideAccessTokenCreateParams {
  /**
   * The hostname of the client side application. Please specify the full URL
   * including the protocol (http or https).
   */
  hostname: string;

  policy: Array<ClientSideAccessTokenCreateParams.Policy>;

  /**
   * The expiration date of the token. If not provided, the token will expire in 5
   * minutes
   */
  expires_at?: string;
}

export namespace ClientSideAccessTokenCreateParams {
  export interface Policy {
    id: string;

    access: Array<'read_messages' | 'write_messages' | 'read_agent' | 'write_agent'>;

    type: 'agent';
  }
}

export interface ClientSideAccessTokenListParams {
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

export interface ClientSideAccessTokenDeleteParams {
  body?: unknown;
}

export declare namespace ClientSideAccessTokens {
  export {
    type ClientSideAccessTokenCreateResponse as ClientSideAccessTokenCreateResponse,
    type ClientSideAccessTokenListResponse as ClientSideAccessTokenListResponse,
    type ClientSideAccessTokenDeleteResponse as ClientSideAccessTokenDeleteResponse,
    type ClientSideAccessTokenCreateParams as ClientSideAccessTokenCreateParams,
    type ClientSideAccessTokenListParams as ClientSideAccessTokenListParams,
    type ClientSideAccessTokenDeleteParams as ClientSideAccessTokenDeleteParams,
  };
}

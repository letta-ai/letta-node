// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class OAuth extends APIResource {
  /**
   * Handle OAuth callback for MCP server authentication.
   */
  callback(
    sessionID: string,
    query: OAuthCallbackParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/v1/tools/mcp/oauth/callback/${sessionID}`, { query, ...options });
  }
}

export type OAuthCallbackResponse = unknown;

export interface OAuthCallbackParams {
  /**
   * OAuth authorization code
   */
  code?: string | null;

  /**
   * OAuth error
   */
  error?: string | null;

  /**
   * OAuth error description
   */
  error_description?: string | null;

  /**
   * OAuth state parameter
   */
  state?: string | null;
}

export declare namespace OAuth {
  export {
    type OAuthCallbackResponse as OAuthCallbackResponse,
    type OAuthCallbackParams as OAuthCallbackParams,
  };
}

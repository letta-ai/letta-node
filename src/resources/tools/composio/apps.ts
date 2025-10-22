// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Apps extends APIResource {
  /**
   * Get a list of all Composio apps
   */
  list(options?: RequestOptions): APIPromise<AppListResponse> {
    return this._client.get('/v1/tools/composio/apps', options);
  }

  /**
   * Get a list of all Composio actions for a specific app
   */
  listActions(composioAppName: string, options?: RequestOptions): APIPromise<AppListActionsResponse> {
    return this._client.get(path`/v1/tools/composio/apps/${composioAppName}/actions`, options);
  }
}

export type AppListResponse = Array<AppListResponse.AppListResponseItem>;

export namespace AppListResponse {
  /**
   * App data model.
   */
  export interface AppListResponseItem {
    appId: string;

    categories: Array<string>;

    description: string;

    key: string;

    meta: { [key: string]: unknown };

    name: string;

    auth_schemes?: Array<AppListResponseItem.AuthScheme> | null;

    configuration_docs_text?: string | null;

    docs?: string | null;

    documentation_doc_text?: string | null;

    enabled?: boolean;

    group?: string | null;

    logo?: string | null;

    no_auth?: boolean;

    status?: string | null;

    testConnectors?: Array<{ [key: string]: unknown }> | null;
  }

  export namespace AppListResponseItem {
    /**
     * App authenticatio scheme.
     */
    export interface AuthScheme {
      auth_mode:
        | 'OAUTH2'
        | 'OAUTH1'
        | 'API_KEY'
        | 'BASIC'
        | 'BEARER_TOKEN'
        | 'BASIC_WITH_JWT'
        | 'GOOGLE_SERVICE_ACCOUNT'
        | 'GOOGLEADS_AUTH'
        | 'NO_AUTH'
        | 'CALCOM_AUTH';

      fields: Array<AuthScheme.Field>;

      scheme_name: string;

      authorization_url?: string | null;

      client_id?: string | null;

      client_secret?: string | null;

      default_scopes?: Array<unknown> | null;

      proxy?: { [key: string]: unknown } | null;

      token_response_metadata?: Array<unknown> | null;

      token_url?: string | null;
    }

    export namespace AuthScheme {
      /**
       * Auth scheme field.
       */
      export interface Field {
        description: string;

        name: string;

        type: string;

        default?: string | null;

        display_name?: string | null;

        expected_from_customer?: boolean;

        get_current_user_endpoint?: string | null;

        required?: boolean;
      }
    }
  }
}

export type AppListActionsResponse = Array<AppListActionsResponse.AppListActionsResponseItem>;

export namespace AppListActionsResponse {
  /**
   * Action data model.
   */
  export interface AppListActionsResponseItem {
    appId: string;

    appName: string;

    available_versions: Array<string>;

    description: string;

    name: string;

    /**
     * Action parameter data models.
     */
    parameters: AppListActionsResponseItem.Parameters;

    /**
     * Action response data model.
     */
    response: AppListActionsResponseItem.Response;

    tags: Array<string>;

    version: string;

    display_name?: string | null;

    enabled?: boolean;

    logo?: string | null;
  }

  export namespace AppListActionsResponseItem {
    /**
     * Action parameter data models.
     */
    export interface Parameters {
      properties: { [key: string]: unknown };

      title: string;

      type: string;

      examples?: Array<unknown> | null;

      required?: Array<string> | null;
    }

    /**
     * Action response data model.
     */
    export interface Response {
      properties: { [key: string]: unknown };

      title: string;

      type: string;

      examples?: Array<unknown> | null;

      required?: Array<string> | null;
    }
  }
}

export declare namespace Apps {
  export { type AppListResponse as AppListResponse, type AppListActionsResponse as AppListActionsResponse };
}

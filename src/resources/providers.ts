// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ModelsAPI from './models';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Providers extends APIResource {
  /**
   * Create a new custom provider.
   */
  create(body: ProviderCreateParams, options?: RequestOptions): APIPromise<Provider> {
    return this._client.post('/v1/providers/', { body, ...options });
  }

  /**
   * Get a provider by ID.
   */
  retrieve(providerID: string, options?: RequestOptions): APIPromise<Provider> {
    return this._client.get(path`/v1/providers/${providerID}`, options);
  }

  /**
   * Update an existing custom provider.
   */
  update(providerID: string, body: ProviderUpdateParams, options?: RequestOptions): APIPromise<Provider> {
    return this._client.patch(path`/v1/providers/${providerID}`, { body, ...options });
  }

  /**
   * Get a list of all custom providers.
   */
  list(
    query: ProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProviderListResponse> {
    return this._client.get('/v1/providers/', { query, ...options });
  }

  /**
   * Delete an existing custom provider.
   */
  delete(providerID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/v1/providers/${providerID}`, options);
  }

  /**
   * Verify the API key and additional parameters for a provider.
   */
  check(body: ProviderCheckParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v1/providers/check', { body, ...options });
  }
}

export interface Provider {
  /**
   * The name of the provider
   */
  name: string;

  /**
   * The category of the provider (base or byok)
   */
  provider_category: ModelsAPI.ProviderCategory;

  /**
   * The type of the provider
   */
  provider_type: ModelsAPI.ProviderType;

  /**
   * The id of the provider, lazily created by the database manager.
   */
  id?: string | null;

  /**
   * Access key used for requests to the provider.
   */
  access_key?: string | null;

  /**
   * API key or secret key used for requests to the provider.
   */
  api_key?: string | null;

  /**
   * API version used for requests to the provider.
   */
  api_version?: string | null;

  /**
   * Base URL for the provider.
   */
  base_url?: string | null;

  /**
   * Region used for requests to the provider.
   */
  region?: string | null;

  /**
   * The last update timestamp of the provider.
   */
  updated_at?: string | null;
}

export type ProviderListResponse = Array<Provider>;

export type ProviderDeleteResponse = unknown;

export type ProviderCheckResponse = unknown;

export interface ProviderCreateParams {
  /**
   * API key or secret key used for requests to the provider.
   */
  api_key: string;

  /**
   * The name of the provider.
   */
  name: string;

  /**
   * The type of the provider.
   */
  provider_type: ModelsAPI.ProviderType;

  /**
   * Access key used for requests to the provider.
   */
  access_key?: string | null;

  /**
   * API version used for requests to the provider.
   */
  api_version?: string | null;

  /**
   * Base URL used for requests to the provider.
   */
  base_url?: string | null;

  /**
   * Region used for requests to the provider.
   */
  region?: string | null;
}

export interface ProviderUpdateParams {
  /**
   * API key or secret key used for requests to the provider.
   */
  api_key: string;

  /**
   * Access key used for requests to the provider.
   */
  access_key?: string | null;

  /**
   * API version used for requests to the provider.
   */
  api_version?: string | null;

  /**
   * Base URL used for requests to the provider.
   */
  base_url?: string | null;

  /**
   * Region used for requests to the provider.
   */
  region?: string | null;
}

export interface ProviderListParams {
  /**
   * Provider ID cursor for pagination. Returns providers that come after this
   * provider ID in the specified sort order
   */
  after?: string | null;

  /**
   * Provider ID cursor for pagination. Returns providers that come before this
   * provider ID in the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of providers to return
   */
  limit?: number | null;

  /**
   * Filter providers by name
   */
  name?: string | null;

  /**
   * Sort order for providers by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';

  /**
   * Field to sort by
   */
  order_by?: 'created_at';

  /**
   * Filter providers by type
   */
  provider_type?: ModelsAPI.ProviderType | null;
}

export interface ProviderCheckParams {
  /**
   * API key or secret key used for requests to the provider.
   */
  api_key: string;

  /**
   * The type of the provider.
   */
  provider_type: ModelsAPI.ProviderType;

  /**
   * Access key used for requests to the provider.
   */
  access_key?: string | null;

  /**
   * API version used for requests to the provider.
   */
  api_version?: string | null;

  /**
   * Base URL used for requests to the provider.
   */
  base_url?: string | null;

  /**
   * Region used for requests to the provider.
   */
  region?: string | null;
}

export declare namespace Providers {
  export {
    type Provider as Provider,
    type ProviderListResponse as ProviderListResponse,
    type ProviderDeleteResponse as ProviderDeleteResponse,
    type ProviderCheckResponse as ProviderCheckResponse,
    type ProviderCreateParams as ProviderCreateParams,
    type ProviderUpdateParams as ProviderUpdateParams,
    type ProviderListParams as ProviderListParams,
    type ProviderCheckParams as ProviderCheckParams,
  };
}

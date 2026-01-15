// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PassagesAPI from '../passages';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Passages extends APIResource {
  /**
   * Insert a memory into an agent's archival memory store.
   *
   * @deprecated
   */
  create(
    agentID: string,
    body: PassageCreateParams,
    options?: RequestOptions,
  ): APIPromise<PassageCreateResponse> {
    return this._client.post(path`/v1/agents/${agentID}/archival-memory`, { body, ...options });
  }

  /**
   * Retrieve the memories in an agent's archival memory store (paginated query).
   *
   * @deprecated
   */
  list(
    agentID: string,
    query: PassageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PassageListResponse> {
    return this._client.get(path`/v1/agents/${agentID}/archival-memory`, { query, ...options });
  }

  /**
   * Delete a memory from an agent's archival memory store.
   *
   * @deprecated
   */
  delete(memoryID: string, params: PassageDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { agent_id } = params;
    return this._client.delete(path`/v1/agents/${agent_id}/archival-memory/${memoryID}`, options);
  }

  /**
   * Search archival memory using semantic (embedding-based) search with optional
   * temporal filtering.
   *
   * This endpoint allows manual triggering of archival memory searches, enabling
   * users to query an agent's archival memory store directly via the API. The search
   * uses the same functionality as the agent's archival_memory_search tool but is
   * accessible for external API usage.
   *
   * @deprecated
   */
  search(
    agentID: string,
    query: PassageSearchParams,
    options?: RequestOptions,
  ): APIPromise<PassageSearchResponse> {
    return this._client.get(path`/v1/agents/${agentID}/archival-memory/search`, { query, ...options });
  }
}

export type PassageCreateResponse = Array<PassagesAPI.Passage>;

export type PassageListResponse = Array<PassagesAPI.Passage>;

export type PassageDeleteResponse = unknown;

export interface PassageSearchResponse {
  /**
   * Total number of results returned
   */
  count: number;

  /**
   * List of search results matching the query
   */
  results: Array<PassageSearchResponse.Result>;
}

export namespace PassageSearchResponse {
  export interface Result {
    /**
     * Unique identifier of the archival memory passage
     */
    id: string;

    /**
     * Text content of the archival memory passage
     */
    content: string;

    /**
     * Timestamp of when the memory was created, formatted in agent's timezone
     */
    timestamp: string;

    /**
     * List of tags associated with this memory
     */
    tags?: Array<string>;
  }
}

export interface PassageCreateParams {
  /**
   * Text to write to archival memory.
   */
  text: string;

  /**
   * Optional timestamp for the memory (defaults to current UTC time).
   */
  created_at?: string | null;

  /**
   * Optional list of tags to attach to the memory.
   */
  tags?: Array<string> | null;
}

export interface PassageListParams {
  /**
   * Unique ID of the memory to start the query range at.
   */
  after?: string | null;

  /**
   * Whether to sort passages oldest to newest (True, default) or newest to oldest
   * (False)
   */
  ascending?: boolean | null;

  /**
   * Unique ID of the memory to end the query range at.
   */
  before?: string | null;

  /**
   * How many results to include in the response.
   */
  limit?: number | null;

  /**
   * Search passages by text
   */
  search?: string | null;
}

export interface PassageDeleteParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface PassageSearchParams {
  /**
   * String to search for using semantic similarity
   */
  query: string;

  /**
   * Filter results to passages created before this datetime
   */
  end_datetime?: string | null;

  /**
   * Filter results to passages created after this datetime
   */
  start_datetime?: string | null;

  /**
   * How to match tags - 'any' to match passages with any of the tags, 'all' to match
   * only passages with all tags
   */
  tag_match_mode?: 'any' | 'all';

  /**
   * Optional list of tags to filter search results
   */
  tags?: Array<string> | null;

  /**
   * Maximum number of results to return. Uses system default if not specified
   */
  top_k?: number | null;
}

export declare namespace Passages {
  export {
    type PassageCreateResponse as PassageCreateResponse,
    type PassageListResponse as PassageListResponse,
    type PassageDeleteResponse as PassageDeleteResponse,
    type PassageSearchResponse as PassageSearchResponse,
    type PassageCreateParams as PassageCreateParams,
    type PassageListParams as PassageListParams,
    type PassageDeleteParams as PassageDeleteParams,
    type PassageSearchParams as PassageSearchParams,
  };
}

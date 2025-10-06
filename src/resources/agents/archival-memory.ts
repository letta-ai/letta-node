// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SourcesAPI from '../sources/sources';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ArchivalMemory extends APIResource {
  /**
   * Insert a memory into an agent's archival memory store.
   */
  create(
    agentID: string,
    body: ArchivalMemoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<ArchivalMemoryCreateResponse> {
    return this._client.post(path`/v1/agents/${agentID}/archival-memory`, { body, ...options });
  }

  /**
   * Retrieve the memories in an agent's archival memory store (paginated query).
   */
  list(
    agentID: string,
    query: ArchivalMemoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArchivalMemoryListResponse> {
    return this._client.get(path`/v1/agents/${agentID}/archival-memory`, { query, ...options });
  }

  /**
   * Delete a memory from an agent's archival memory store.
   */
  delete(
    memoryID: string,
    params: ArchivalMemoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
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
   */
  search(
    agentID: string,
    query: ArchivalMemorySearchParams,
    options?: RequestOptions,
  ): APIPromise<ArchivalMemorySearchResponse> {
    return this._client.get(path`/v1/agents/${agentID}/archival-memory/search`, { query, ...options });
  }
}

export type ArchivalMemoryCreateResponse = Array<SourcesAPI.Passage>;

export type ArchivalMemoryListResponse = Array<SourcesAPI.Passage>;

export type ArchivalMemoryDeleteResponse = unknown;

export interface ArchivalMemorySearchResponse {
  /**
   * Total number of results returned
   */
  count: number;

  /**
   * List of search results matching the query
   */
  results: Array<ArchivalMemorySearchResponse.Result>;
}

export namespace ArchivalMemorySearchResponse {
  export interface Result {
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

export interface ArchivalMemoryCreateParams {
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

export interface ArchivalMemoryListParams {
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

export interface ArchivalMemoryDeleteParams {
  agent_id: string;
}

export interface ArchivalMemorySearchParams {
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

export declare namespace ArchivalMemory {
  export {
    type ArchivalMemoryCreateResponse as ArchivalMemoryCreateResponse,
    type ArchivalMemoryListResponse as ArchivalMemoryListResponse,
    type ArchivalMemoryDeleteResponse as ArchivalMemoryDeleteResponse,
    type ArchivalMemorySearchResponse as ArchivalMemorySearchResponse,
    type ArchivalMemoryCreateParams as ArchivalMemoryCreateParams,
    type ArchivalMemoryListParams as ArchivalMemoryListParams,
    type ArchivalMemoryDeleteParams as ArchivalMemoryDeleteParams,
    type ArchivalMemorySearchParams as ArchivalMemorySearchParams,
  };
}

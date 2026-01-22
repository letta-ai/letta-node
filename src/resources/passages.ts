// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PassagesAPI from './passages';
import * as ModelsAPI from './models/models';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Passages extends APIResource {
  /**
   * Search passages across the organization with optional agent and archive
   * filtering. Returns passages with relevance scores.
   *
   * This endpoint supports semantic search through passages:
   *
   * - If neither agent_id nor archive_id is provided, searches ALL passages in the
   *   organization
   * - If agent_id is provided, searches passages across all archives attached to
   *   that agent
   * - If archive_id is provided, searches passages within that specific archive
   * - If both are provided, agent_id takes precedence
   */
  search(body: PassageSearchParams, options?: RequestOptions): APIPromise<PassageSearchResponse> {
    return this._client.post('/v1/passages/search', { body, ...options });
  }
}

/**
 * Representation of a passage, which is stored in archival memory.
 */
export interface Passage {
  /**
   * The embedding of the passage.
   */
  embedding: Array<number> | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config: ModelsAPI.EmbeddingConfig | null;

  /**
   * The text of the passage.
   */
  text: string;

  /**
   * The human-friendly ID of the Passage
   */
  id?: string;

  /**
   * The unique identifier of the archive containing this passage.
   */
  archive_id?: string | null;

  /**
   * The creation date of the passage.
   */
  created_at?: string | null;

  /**
   * The id of the user that made this object.
   */
  created_by_id?: string | null;

  /**
   * The unique identifier of the file associated with the passage.
   */
  file_id?: string | null;

  /**
   * The name of the file (only for source passages).
   */
  file_name?: string | null;

  /**
   * Whether this passage is deleted or not.
   */
  is_deleted?: boolean;

  /**
   * The id of the user that made this object.
   */
  last_updated_by_id?: string | null;

  /**
   * The metadata of the passage.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * @deprecated Deprecated: Use `folder_id` field instead. The data source of the
   * passage.
   */
  source_id?: string | null;

  /**
   * Tags associated with this passage.
   */
  tags?: Array<string> | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;
}

export type PassageSearchResponse = Array<PassageSearchResponse.PassageSearchResponseItem>;

export namespace PassageSearchResponse {
  /**
   * Result from a passage search operation with scoring details.
   */
  export interface PassageSearchResponseItem {
    /**
     * The passage object
     */
    passage: PassagesAPI.Passage;

    /**
     * Relevance score
     */
    score: number;

    /**
     * Additional metadata about the search result
     */
    metadata?: { [key: string]: unknown };
  }
}

export interface PassageSearchParams {
  /**
   * Filter passages by agent ID
   */
  agent_id?: string | null;

  /**
   * Filter passages by archive ID
   */
  archive_id?: string | null;

  /**
   * Filter results to passages created before this datetime
   */
  end_date?: string | null;

  /**
   * Maximum number of results to return
   */
  limit?: number;

  /**
   * Text query for semantic search
   */
  query?: string | null;

  /**
   * Filter results to passages created after this datetime
   */
  start_date?: string | null;

  /**
   * How to match tags - 'any' to match passages with any of the tags, 'all' to match
   * only passages with all tags
   */
  tag_match_mode?: 'any' | 'all';

  /**
   * Optional list of tags to filter search results
   */
  tags?: Array<string> | null;
}

export declare namespace Passages {
  export {
    type Passage as Passage,
    type PassageSearchResponse as PassageSearchResponse,
    type PassageSearchParams as PassageSearchParams,
  };
}

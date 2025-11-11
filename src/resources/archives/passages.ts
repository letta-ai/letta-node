// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Passages extends APIResource {
  /**
   * Create a new passage in an archive.
   *
   * This adds a passage to the archive and creates embeddings for vector storage.
   */
  create(
    archiveID: string,
    body: PassageCreateParams,
    options?: RequestOptions,
  ): APIPromise<PassageCreateResponse> {
    return this._client.post(path`/v1/archives/${archiveID}/passages`, { body, ...options });
  }

  /**
   * Delete a passage from an archive.
   *
   * This permanently removes the passage from both the database and vector storage
   * (if applicable).
   */
  delete(passageID: string, params: PassageDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { archive_id } = params;
    return this._client.delete(path`/v1/archives/${archive_id}/passages/${passageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Representation of a passage, which is stored in archival memory.
 */
export interface PassageCreateResponse {
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
  created_at?: string;

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
   * The data source of the passage.
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

export interface PassageCreateParams {
  /**
   * The text content of the passage
   */
  text: string;

  /**
   * Optional metadata for the passage
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * Optional tags for categorizing the passage
   */
  tags?: Array<string> | null;
}

export interface PassageDeleteParams {
  /**
   * The ID of the archive in the format 'archive-<uuid4>'
   */
  archive_id: string;
}

export declare namespace Passages {
  export {
    type PassageCreateResponse as PassageCreateResponse,
    type PassageCreateParams as PassageCreateParams,
    type PassageDeleteParams as PassageDeleteParams,
  };
}

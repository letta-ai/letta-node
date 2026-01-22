// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PassagesAPI from '../passages';
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
  ): APIPromise<PassagesAPI.Passage> {
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

  /**
   * Create multiple passages in an archive.
   *
   * This adds passages to the archive and creates embeddings for vector storage.
   */
  createMany(
    archiveID: string,
    body: PassageCreateManyParams,
    options?: RequestOptions,
  ): APIPromise<PassageCreateManyResponse> {
    return this._client.post(path`/v1/archives/${archiveID}/passages/batch`, { body, ...options });
  }
}

export type PassageCreateManyResponse = Array<PassagesAPI.Passage>;

export interface PassageCreateParams {
  /**
   * The text content of the passage
   */
  text: string;

  /**
   * Optional creation datetime for the passage (ISO 8601 format)
   */
  created_at?: string | null;

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

export interface PassageCreateManyParams {
  /**
   * Passages to create in the archive
   */
  passages: Array<PassageCreateManyParams.Passage>;
}

export namespace PassageCreateManyParams {
  /**
   * Request model for creating a passage in an archive.
   */
  export interface Passage {
    /**
     * The text content of the passage
     */
    text: string;

    /**
     * Optional creation datetime for the passage (ISO 8601 format)
     */
    created_at?: string | null;

    /**
     * Optional metadata for the passage
     */
    metadata?: { [key: string]: unknown } | null;

    /**
     * Optional tags for categorizing the passage
     */
    tags?: Array<string> | null;
  }
}

export declare namespace Passages {
  export {
    type PassageCreateManyResponse as PassageCreateManyResponse,
    type PassageCreateParams as PassageCreateParams,
    type PassageDeleteParams as PassageDeleteParams,
    type PassageCreateManyParams as PassageCreateManyParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PassagesAPI from './passages';
import { PassageCreateParams, PassageDeleteParams, Passages } from './passages';
import * as ModelsAPI from '../models/models';
import { APIPromise } from '../../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Archives extends APIResource {
  passages: PassagesAPI.Passages = new PassagesAPI.Passages(this._client);

  /**
   * Create a new archive.
   */
  create(body: ArchiveCreateParams, options?: RequestOptions): APIPromise<Archive> {
    return this._client.post('/v1/archives/', { body, ...options });
  }

  /**
   * Get a single archive by its ID.
   */
  retrieve(archiveID: string, options?: RequestOptions): APIPromise<Archive> {
    return this._client.get(path`/v1/archives/${archiveID}`, options);
  }

  /**
   * Update an existing archive's name and/or description.
   */
  update(archiveID: string, body: ArchiveUpdateParams, options?: RequestOptions): APIPromise<Archive> {
    return this._client.patch(path`/v1/archives/${archiveID}`, { body, ...options });
  }

  /**
   * Get a list of all archives for the current organization with optional filters
   * and pagination.
   */
  list(
    query: ArchiveListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ArchivesArrayPage, Archive> {
    return this._client.getAPIList('/v1/archives/', ArrayPage<Archive>, { query, ...options });
  }

  /**
   * Delete an archive by its ID.
   */
  delete(archiveID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/archives/${archiveID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ArchivesArrayPage = ArrayPage<Archive>;

/**
 * Representation of an archive - a collection of archival passages that can be
 * shared between agents.
 */
export interface Archive {
  /**
   * The human-friendly ID of the Archive
   */
  id: string;

  /**
   * The creation date of the archive
   */
  created_at: string;

  /**
   * Embedding configuration for passages in this archive
   */
  embedding_config: ModelsAPI.EmbeddingConfig;

  /**
   * The name of the archive
   */
  name: string;

  /**
   * The id of the user that made this object.
   */
  created_by_id?: string | null;

  /**
   * A description of the archive
   */
  description?: string | null;

  /**
   * The id of the user that made this object.
   */
  last_updated_by_id?: string | null;

  /**
   * Additional metadata
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * The timestamp when the object was last updated.
   */
  updated_at?: string | null;

  /**
   * The vector database provider used for this archive's passages
   */
  vector_db_provider?: VectorDBProvider;
}

/**
 * Supported vector database providers for archival memory
 */
export type VectorDBProvider = 'native' | 'tpuf' | 'pinecone';

export interface ArchiveCreateParams {
  name: string;

  description?: string | null;

  /**
   * Embedding model handle for the archive
   */
  embedding?: string | null;

  /**
   * Configuration for embedding model connection and processing parameters.
   */
  embedding_config?: ModelsAPI.EmbeddingConfig | null;
}

export interface ArchiveUpdateParams {
  description?: string | null;

  name?: string | null;
}

export interface ArchiveListParams extends ArrayPageParams {
  /**
   * Only archives attached to this agent ID
   */
  agent_id?: string | null;

  /**
   * Filter by archive name (exact match)
   */
  name?: string | null;
}

Archives.Passages = Passages;

export declare namespace Archives {
  export {
    type Archive as Archive,
    type VectorDBProvider as VectorDBProvider,
    type ArchivesArrayPage as ArchivesArrayPage,
    type ArchiveCreateParams as ArchiveCreateParams,
    type ArchiveUpdateParams as ArchiveUpdateParams,
    type ArchiveListParams as ArchiveListParams,
  };

  export {
    Passages as Passages,
    type PassageCreateParams as PassageCreateParams,
    type PassageDeleteParams as PassageDeleteParams,
  };
}

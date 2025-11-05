// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ModelsAPI from './models/models';
import { APIPromise } from '../core/api-promise';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Archives extends APIResource {
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
  delete(archiveID: string, options?: RequestOptions): APIPromise<Archive> {
    return this._client.delete(path`/v1/archives/${archiveID}`, options);
  }

  /**
   * Update an existing archive's name and/or description.
   */
  modify(archiveID: string, body: ArchiveModifyParams, options?: RequestOptions): APIPromise<Archive> {
    return this._client.patch(path`/v1/archives/${archiveID}`, { body, ...options });
  }
}

export type ArchivesArrayPage = ArrayPage<Archive>;

/**
 * Representation of an archive - a collection of archival passages that can be
 * shared between agents.
 *
 * Parameters: id (str): The unique identifier of the archive. name (str): The name
 * of the archive. description (str): A description of the archive. organization_id
 * (str): The organization this archive belongs to. created_at (datetime): The
 * creation date of the archive. metadata (dict): Additional metadata for the
 * archive.
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
  /**
   * Embedding configuration for the archive
   */
  embedding_config: ModelsAPI.EmbeddingConfig;

  name: string;

  description?: string | null;
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

export interface ArchiveModifyParams {
  description?: string | null;

  name?: string | null;
}

export declare namespace Archives {
  export {
    type Archive as Archive,
    type VectorDBProvider as VectorDBProvider,
    type ArchivesArrayPage as ArchivesArrayPage,
    type ArchiveCreateParams as ArchiveCreateParams,
    type ArchiveListParams as ArchiveListParams,
    type ArchiveModifyParams as ArchiveModifyParams,
  };
}

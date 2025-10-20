// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Archives extends APIResource {
  /**
   * Create a new archive.
   */
  update(body: ArchiveUpdateParams, options?: RequestOptions): APIPromise<Archive> {
    return this._client.post('/v1/archives/', { body, ...options });
  }

  /**
   * Get a list of all archives for the current organization with optional filters
   * and pagination.
   */
  retrieve(
    query: ArchiveRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ArchiveRetrieveResponse> {
    return this._client.get('/v1/archives/', { query, ...options });
  }
}

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
   * The creation date of the archive
   */
  created_at: string;

  /**
   * The name of the archive
   */
  name: string;

  /**
   * The human-friendly ID of the Archive
   */
  id?: string;

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

export type ArchiveRetrieveResponse = Array<Archive>;

export interface ArchiveUpdateParams {
  name: string;

  description?: string | null;
}

export interface ArchiveRetrieveParams {
  /**
   * Archive ID cursor for pagination. Returns archives that come after this archive
   * ID in the specified sort order
   */
  after?: string | null;

  /**
   * Only archives attached to this agent ID
   */
  agent_id?: string | null;

  /**
   * Archive ID cursor for pagination. Returns archives that come before this archive
   * ID in the specified sort order
   */
  before?: string | null;

  /**
   * Maximum number of archives to return
   */
  limit?: number | null;

  /**
   * Filter by archive name (exact match)
   */
  name?: string | null;

  /**
   * Sort order for archives by creation time. 'asc' for oldest first, 'desc' for
   * newest first
   */
  order?: 'asc' | 'desc';
}

export declare namespace Archives {
  export {
    type Archive as Archive,
    type VectorDBProvider as VectorDBProvider,
    type ArchiveRetrieveResponse as ArchiveRetrieveResponse,
    type ArchiveUpdateParams as ArchiveUpdateParams,
    type ArchiveRetrieveParams as ArchiveRetrieveParams,
  };
}

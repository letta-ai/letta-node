// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Passages extends APIResource {
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

export interface PassageDeleteParams {
  /**
   * The ID of the archive in the format 'archive-<uuid4>'
   */
  archive_id: string;
}

export declare namespace Passages {
  export { type PassageDeleteParams as PassageDeleteParams };
}

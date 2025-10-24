// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { ArrayPage, type ArrayPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Blocks extends APIResource {
  /**
   * Get all blocks associated with the specified identity.
   */
  list(
    identityID: string,
    query: BlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BlockListResponsesArrayPage, BlockListResponse> {
    return this._client.getAPIList(path`/v1/identities/${identityID}/blocks`, ArrayPage<BlockListResponse>, {
      query,
      ...options,
    });
  }
}

export type BlockListResponsesArrayPage = ArrayPage<BlockListResponse>;

export interface BlockListResponse {
  /**
   * Value of the block.
   */
  value: string;

  /**
   * The human-friendly ID of the Block
   */
  id?: string;

  /**
   * @deprecated (Deprecated) The base template id of the block.
   */
  base_template_id?: string | null;

  /**
   * The id of the user that made this Block.
   */
  created_by_id?: string | null;

  /**
   * @deprecated (Deprecated) The id of the deployment.
   */
  deployment_id?: string | null;

  /**
   * Description of the block.
   */
  description?: string | null;

  /**
   * @deprecated (Deprecated) The id of the entity within the template.
   */
  entity_id?: string | null;

  /**
   * @deprecated (Deprecated) If set to True, the block will be hidden.
   */
  hidden?: boolean | null;

  /**
   * Whether the block is a template (e.g. saved human/persona options).
   */
  is_template?: boolean;

  /**
   * Label of the block (e.g. 'human', 'persona') in the context window.
   */
  label?: string | null;

  /**
   * The id of the user that last updated this Block.
   */
  last_updated_by_id?: string | null;

  /**
   * Character limit of the block.
   */
  limit?: number;

  /**
   * Metadata of the block.
   */
  metadata?: { [key: string]: unknown } | null;

  /**
   * @deprecated (Deprecated) Preserve the block on template migration.
   */
  preserve_on_migration?: boolean | null;

  /**
   * The associated project id.
   */
  project_id?: string | null;

  /**
   * @deprecated (Deprecated) Whether the agent has read-only access to the block.
   */
  read_only?: boolean;

  /**
   * @deprecated (Deprecated) The id of the template.
   */
  template_id?: string | null;

  /**
   * @deprecated (Deprecated) The name of the block template (if it is a template).
   */
  template_name?: string | null;
}

export interface BlockListParams extends ArrayPageParams {}

export declare namespace Blocks {
  export {
    type BlockListResponse as BlockListResponse,
    type BlockListResponsesArrayPage as BlockListResponsesArrayPage,
    type BlockListParams as BlockListParams,
  };
}

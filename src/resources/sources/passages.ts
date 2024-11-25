// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ModelsAPI from '../models/models';

export class Passages extends APIResource {
  /**
   * List all passages associated with a data source.
   */
  list(sourceId: string, options?: Core.RequestOptions): Core.APIPromise<PassageListResponse> {
    return this._client.get(`/v1/sources/${sourceId}/passages`, options);
  }
}

/**
 * Representation of a passage, which is stored in archival memory.
 *
 * Parameters: text (str): The text of the passage. embedding (List[float]): The
 * embedding of the passage. embedding_config (EmbeddingConfig): The embedding
 * configuration used by the passage. created_at (datetime): The creation date of
 * the passage. user_id (str): The unique identifier of the user associated with
 * the passage. agent_id (str): The unique identifier of the agent associated with
 * the passage. source_id (str): The data source of the passage. file_id (str): The
 * unique identifier of the file associated with the passage.
 */
export interface Passage {
  /**
   * The embedding of the passage.
   */
  embedding: Array<number> | null;

  /**
   * Embedding model configuration. This object specifies all the information
   * necessary to access an embedding model to usage with Letta, except for secret
   * keys.
   *
   * Attributes: embedding_endpoint_type (str): The endpoint type for the model.
   * embedding_endpoint (str): The endpoint for the model. embedding_model (str): The
   * model for the embedding. embedding_dim (int): The dimension of the embedding.
   * embedding_chunk_size (int): The chunk size of the embedding. azure_endpoint
   * (:obj:`str`, optional): The Azure endpoint for the model (Azure only).
   * azure_version (str): The Azure version for the model (Azure only).
   * azure_deployment (str): The Azure deployment for the model (Azure only).
   */
  embedding_config: ModelsAPI.Embeddingconfig | null;

  /**
   * The text of the passage.
   */
  text: string;

  /**
   * The human-friendly ID of the Passage
   */
  id?: string;

  /**
   * The unique identifier of the agent associated with the passage.
   */
  agent_id?: string | null;

  /**
   * The creation date of the passage.
   */
  created_at?: string;

  /**
   * The unique identifier of the file associated with the passage.
   */
  file_id?: string | null;

  /**
   * The metadata of the passage.
   */
  metadata_?: unknown | null;

  /**
   * The data source of the passage.
   */
  source_id?: string | null;

  /**
   * The unique identifier of the user associated with the passage.
   */
  user_id?: string | null;
}

export type PassageListResponse = Array<Passage>;

export declare namespace Passages {
  export { type Passage as Passage, type PassageListResponse as PassageListResponse };
}

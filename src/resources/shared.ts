// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as BlocksAPI from './blocks';
import * as ModelsAPI from './models';

/**
 * Representation of offline jobs, used for tracking status of data loading tasks
 * (involving parsing and embedding files).
 *
 * Parameters: id (str): The unique identifier of the job. status (JobStatus): The
 * status of the job. created_at (datetime): The unix timestamp of when the job was
 * created. completed_at (datetime): The unix timestamp of when the job was
 * completed. user_id (str): The unique identifier of the user associated with the.
 */
export interface Job {
  /**
   * The unique identifier of the user associated with the job.
   */
  user_id: string;

  /**
   * The human-friendly ID of the Job
   */
  id?: string;

  /**
   * The unix timestamp of when the job was completed.
   */
  completed_at?: string | null;

  /**
   * The unix timestamp of when the job was created.
   */
  created_at?: string;

  /**
   * The metadata of the job.
   */
  metadata_?: unknown | null;

  /**
   * The status of the job.
   */
  status?: 'created' | 'running' | 'completed' | 'failed' | 'pending';
}

/**
 * Represents the in-context memory of the agent. This includes both the `Block`
 * objects (labelled by sections), as well as tools to edit the blocks.
 *
 * Attributes: memory (Dict[str, Block]): Mapping from memory block section to
 * memory block.
 */
export interface Memory {
  /**
   * Mapping from memory block section to memory block.
   */
  memory?: Record<string, BlocksAPI.Block>;

  /**
   * Jinja2 template for compiling memory blocks into a prompt string
   */
  prompt_template?: string;
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

/**
 * Representation of a source, which is a collection of files and passages.
 *
 * Parameters: id (str): The ID of the source name (str): The name of the source.
 * embedding*config (EmbeddingConfig): The embedding configuration used by the
 * source. created_at (datetime): The creation date of the source. user_id (str):
 * The ID of the user that created the source. metadata* (dict): Metadata
 * associated with the source. description (str): The description of the source.
 */
export interface Source {
  /**
   * The embedding configuration used by the source.
   */
  embedding_config: ModelsAPI.Embeddingconfig;

  /**
   * The name of the source.
   */
  name: string;

  /**
   * The ID of the user that created the source.
   */
  user_id: string;

  /**
   * The human-friendly ID of the Source
   */
  id?: string;

  /**
   * The creation date of the source.
   */
  created_at?: string;

  /**
   * The description of the source.
   */
  description?: string | null;

  /**
   * Metadata associated with the source.
   */
  metadata_?: unknown | null;
}

/**
 * Representation of a tool, which is a function that can be called by the agent.
 *
 * Parameters: id (str): The unique identifier of the tool. name (str): The name of
 * the function. tags (List[str]): Metadata tags. source_code (str): The source
 * code of the function. json_schema (Dict): The JSON schema of the function.
 */
export interface Tool {
  /**
   * The source code of the function.
   */
  source_code: string;

  /**
   * The human-friendly ID of the Tool
   */
  id?: string;

  /**
   * The id of the user that made this Tool.
   */
  created_by_id?: string | null;

  /**
   * The description of the tool.
   */
  description?: string | null;

  /**
   * The JSON schema of the function.
   */
  json_schema?: unknown | null;

  /**
   * The id of the user that made this Tool.
   */
  last_updated_by_id?: string | null;

  /**
   * The module of the function.
   */
  module?: string | null;

  /**
   * The name of the function.
   */
  name?: string | null;

  /**
   * The unique identifier of the organization associated with the tool.
   */
  organization_id?: string | null;

  /**
   * The type of the source code.
   */
  source_type?: string | null;

  /**
   * Metadata tags.
   */
  tags?: Array<string>;
}

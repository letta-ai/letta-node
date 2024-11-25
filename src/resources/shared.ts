// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * A Block represents a reserved section of the LLM's context window which is
 * editable. `Block` objects contained in the `Memory` object, which is able to
 * edit the Block values.
 *
 * Parameters: label (str): The label of the block (e.g. 'human', 'persona'). This
 * defines a category for the block. value (str): The value of the block. This is
 * the string that is represented in the context window. limit (int): The character
 * limit of the block. is*template (bool): Whether the block is a template (e.g.
 * saved human/persona options). Non-template blocks are not stored in the database
 * and are ephemeral, while templated blocks are stored in the database. label
 * (str): The label of the block (e.g. 'human', 'persona'). This defines a category
 * for the block. template_name (str): The name of the block template (if it is a
 * template). description (str): Description of the block. metadata* (Dict):
 * Metadata of the block. user_id (str): The unique identifier of the user
 * associated with the block.
 */
export interface Block {
  /**
   * Value of the block.
   */
  value: string;

  /**
   * The human-friendly ID of the Block
   */
  id?: string;

  /**
   * The id of the user that made this Block.
   */
  created_by_id?: string | null;

  /**
   * Description of the block.
   */
  description?: string | null;

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
  metadata_?: unknown | null;

  /**
   * Name of the block if it is a template.
   */
  name?: string | null;

  /**
   * The unique identifier of the organization associated with the block.
   */
  organization_id?: string | null;
}

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

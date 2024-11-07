// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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

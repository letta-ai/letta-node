/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Representation of a passage, which is stored in archival memory.
 *
 * Parameters:
 *     text (str): The text of the passage.
 *     embedding (List[float]): The embedding of the passage.
 *     embedding_config (EmbeddingConfig): The embedding configuration used by the passage.
 *     created_at (datetime): The creation date of the passage.
 *     user_id (str): The unique identifier of the user associated with the passage.
 *     agent_id (str): The unique identifier of the agent associated with the passage.
 *     source_id (str): The data source of the passage.
 *     file_id (str): The unique identifier of the file associated with the passage.
 */
export interface Passage {
    /** The id of the user that made this object. */
    createdById?: string;
    /** The id of the user that made this object. */
    lastUpdatedById?: string;
    /** The creation date of the passage. */
    createdAt?: Date;
    /** The timestamp when the object was last updated. */
    updatedAt?: Date;
    /** Whether this passage is deleted or not. */
    isDeleted?: boolean;
    /** The unique identifier of the agent associated with the passage. */
    agentId?: string;
    /** The data source of the passage. */
    sourceId?: string;
    /** The unique identifier of the file associated with the passage. */
    fileId?: string;
    /** The name of the file (only for source passages). */
    fileName?: string;
    /** The metadata of the passage. */
    metadata?: Record<string, unknown>;
    /** The human-friendly ID of the Passage */
    id?: string;
    /** The text of the passage. */
    text: string;
    /** The embedding of the passage. */
    embedding?: number[];
    /** The embedding configuration used by the passage. */
    embeddingConfig?: Letta.EmbeddingConfig;
}

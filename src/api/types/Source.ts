/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Representation of a source, which is a collection of files and passages.
 *
 * Parameters:
 *     id (str): The ID of the source
 *     name (str): The name of the source.
 *     embedding_config (EmbeddingConfig): The embedding configuration used by the source.
 *     user_id (str): The ID of the user that created the source.
 *     metadata (dict): Metadata associated with the source.
 *     description (str): The description of the source.
 */
export interface Source {
    /** The human-friendly ID of the Source */
    id?: string;
    /** The name of the source. */
    name: string;
    /** The description of the source. */
    description?: string;
    /** Instructions for how to use the source. */
    instructions?: string;
    /** The embedding configuration used by the source. */
    embeddingConfig: Letta.EmbeddingConfig;
    /** Metadata associated with the source. */
    metadata?: Record<string, unknown>;
    /** The id of the user that made this Tool. */
    createdById?: string;
    /** The id of the user that made this Tool. */
    lastUpdatedById?: string;
    /** The timestamp when the source was created. */
    createdAt?: Date;
    /** The timestamp when the source was last updated. */
    updatedAt?: Date;
}

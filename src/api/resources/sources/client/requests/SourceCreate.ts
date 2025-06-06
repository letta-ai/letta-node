/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../../../../index";

/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface SourceCreate {
    /** The name of the source. */
    name: string;
    /** The hande for the embedding config used by the source. */
    embedding?: string;
    /** The chunk size of the embedding. */
    embeddingChunkSize?: number;
    /** (Legacy) The embedding configuration used by the source. */
    embeddingConfig?: Letta.EmbeddingConfig;
    /** The description of the source. */
    description?: string;
    /** Instructions for how to use the source. */
    instructions?: string;
    /** Metadata associated with the source. */
    metadata?: Record<string, unknown>;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Update a block
 */
export interface BlockUpdate {
    /** Value of the block. */
    value?: string;
    /** Character limit of the block. */
    limit?: number;
    /** Name of the block if it is a template. */
    name?: string;
    /** Whether the block is a template (e.g. saved human/persona options). */
    isTemplate?: boolean;
    /** Label of the block (e.g. 'human', 'persona') in the context window. */
    label?: string;
    /** Description of the block. */
    description?: string;
    /** Metadata of the block. */
    metadata?: Record<string, unknown>;
}

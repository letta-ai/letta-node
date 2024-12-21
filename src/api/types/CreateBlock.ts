/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Create a block
 */
export interface CreateBlock {
    /** Value of the block. */
    value: string;
    /** Character limit of the block. */
    limit?: number;
    /** Name of the block if it is a template. */
    name?: string;
    is_template?: boolean;
    /** Label of the block. */
    label: string;
    /** Description of the block. */
    description?: string;
    /** Metadata of the block. */
    metadata_?: Record<string, unknown>;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface BlocksListRequest {
    /**
     * Labels to include (e.g. human, persona)
     */
    label?: string;
    /**
     * Whether to include only templates
     */
    templatesOnly?: boolean;
    /**
     * Name of the block
     */
    name?: string;
}

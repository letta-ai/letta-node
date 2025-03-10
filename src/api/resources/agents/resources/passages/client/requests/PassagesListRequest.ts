/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface PassagesListRequest {
    /**
     * Unique ID of the memory to start the query range at.
     */
    after?: number;
    /**
     * Unique ID of the memory to end the query range at.
     */
    before?: number;
    /**
     * How many results to include in the response.
     */
    limit?: number;
}

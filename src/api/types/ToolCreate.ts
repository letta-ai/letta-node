/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ToolCreate {
    /** The name of the function (auto-generated from source_code if not provided). */
    name?: string;
    /** The description of the tool. */
    description?: string;
    /** Metadata tags. */
    tags?: string[];
    /** The source code of the function. */
    module?: string;
    /** The source code of the function. */
    sourceCode: string;
    /** The source type of the function. */
    sourceType?: string;
    /** The JSON schema of the function (auto-generated from source_code if not provided) */
    jsonSchema?: Record<string, unknown>;
    /** The maximum number of characters in the response. */
    returnCharLimit?: number;
}

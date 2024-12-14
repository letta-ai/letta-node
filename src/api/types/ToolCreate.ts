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
    source_code: string;
    /** The source type of the function. */
    source_type?: string;
    /** The JSON schema of the function (auto-generated from source_code if not provided) */
    json_schema?: Record<string, unknown>;
}

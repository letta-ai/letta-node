/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Response format for JSON schema-based responses.
 */
export interface JsonSchemaResponseFormat {
    type: "json_schema";
    /** The JSON schema of the response. */
    jsonSchema: Record<string, unknown>;
}

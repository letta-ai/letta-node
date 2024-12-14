/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Pydantic model for updating SandboxEnvironmentVariable fields.
 */
export interface SandboxEnvironmentVariableUpdate {
    /** The name of the environment variable. */
    key?: string;
    /** The value of the environment variable. */
    value?: string;
    /** An optional description of the environment variable. */
    description?: string;
}

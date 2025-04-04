/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SandboxEnvironmentVariable {
    /** The id of the user that made this object. */
    createdById?: string;
    /** The id of the user that made this object. */
    lastUpdatedById?: string;
    /** The timestamp when the object was created. */
    createdAt?: Date;
    /** The timestamp when the object was last updated. */
    updatedAt?: Date;
    /** The human-friendly ID of the Sandbox-env */
    id?: string;
    /** The name of the environment variable. */
    key: string;
    /** The value of the environment variable. */
    value: string;
    /** An optional description of the environment variable. */
    description?: string;
    /** The ID of the sandbox config this environment variable belongs to. */
    sandboxConfigId: string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface SandboxConfig {
    /** The id of the user that made this object. */
    createdById?: string;
    /** The id of the user that made this object. */
    lastUpdatedById?: string;
    /** The timestamp when the object was created. */
    createdAt?: Date;
    /** The timestamp when the object was last updated. */
    updatedAt?: Date;
    /** The human-friendly ID of the Sandbox */
    id?: string;
    /** The type of sandbox. */
    type?: Letta.SandboxType;
    /** The JSON sandbox settings data. */
    config?: Record<string, unknown>;
}

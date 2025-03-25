/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const ToolEnvVarSchema: core.serialization.ObjectSchema<
    serializers.ToolEnvVarSchema.Raw,
    Letta.ToolEnvVarSchema
> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    description: core.serialization.string().optional(),
    key: core.serialization.string(),
    updatedAt: core.serialization.property("updated_at", core.serialization.string()),
    value: core.serialization.string(),
});

export declare namespace ToolEnvVarSchema {
    export interface Raw {
        created_at: string;
        description?: string | null;
        key: string;
        updated_at: string;
        value: string;
    }
}

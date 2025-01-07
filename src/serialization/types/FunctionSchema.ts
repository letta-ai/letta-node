/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const FunctionSchema: core.serialization.ObjectSchema<serializers.FunctionSchema.Raw, Letta.FunctionSchema> =
    core.serialization.object({
        name: core.serialization.string(),
        description: core.serialization.string().optional(),
        parameters: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace FunctionSchema {
    interface Raw {
        name: string;
        description?: string | null;
        parameters?: Record<string, unknown> | null;
    }
}

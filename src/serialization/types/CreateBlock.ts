/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const CreateBlock: core.serialization.ObjectSchema<serializers.CreateBlock.Raw, Letta.CreateBlock> =
    core.serialization.object({
        value: core.serialization.string(),
        limit: core.serialization.number().optional(),
        name: core.serialization.string().optional(),
        isTemplate: core.serialization.property("is_template", core.serialization.boolean().optional()),
        label: core.serialization.string(),
        description: core.serialization.string().optional(),
        metadata: core.serialization.property(
            "metadata_",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        ),
    });

export declare namespace CreateBlock {
    export interface Raw {
        value: string;
        limit?: number | null;
        name?: string | null;
        is_template?: boolean | null;
        label: string;
        description?: string | null;
        metadata_?: Record<string, unknown> | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const CoreMemoryBlockSchema: core.serialization.ObjectSchema<
    serializers.CoreMemoryBlockSchema.Raw,
    Letta.CoreMemoryBlockSchema
> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    description: core.serialization.string().optional(),
    isTemplate: core.serialization.property("is_template", core.serialization.boolean()),
    label: core.serialization.string(),
    limit: core.serialization.number(),
    metadata: core.serialization.property(
        "metadata_",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    ),
    templateName: core.serialization.property("template_name", core.serialization.string().optional()),
    updatedAt: core.serialization.property("updated_at", core.serialization.string()),
    value: core.serialization.string(),
});

export declare namespace CoreMemoryBlockSchema {
    export interface Raw {
        created_at: string;
        description?: string | null;
        is_template: boolean;
        label: string;
        limit: number;
        metadata_?: Record<string, unknown> | null;
        template_name?: string | null;
        updated_at: string;
        value: string;
    }
}

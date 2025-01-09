/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const LettaSchemasToolTool: core.serialization.ObjectSchema<
    serializers.LettaSchemasToolTool.Raw,
    Letta.LettaSchemasToolTool
> = core.serialization.object({
    id: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    sourceType: core.serialization.property("source_type", core.serialization.string().optional()),
    module: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    tags: core.serialization.list(core.serialization.string()).optional(),
    sourceCode: core.serialization.property("source_code", core.serialization.string()),
    jsonSchema: core.serialization.property(
        "json_schema",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    returnCharLimit: core.serialization.property("return_char_limit", core.serialization.number().optional()),
    createdById: core.serialization.property("created_by_id", core.serialization.string().optional()),
    lastUpdatedById: core.serialization.property("last_updated_by_id", core.serialization.string().optional()),
});

export declare namespace LettaSchemasToolTool {
    interface Raw {
        id?: string | null;
        description?: string | null;
        source_type?: string | null;
        module?: string | null;
        name?: string | null;
        tags?: string[] | null;
        source_code: string;
        json_schema?: Record<string, unknown> | null;
        return_char_limit?: number | null;
        created_by_id?: string | null;
        last_updated_by_id?: string | null;
    }
}

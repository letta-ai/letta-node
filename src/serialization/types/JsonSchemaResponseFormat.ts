/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const JsonSchemaResponseFormat: core.serialization.ObjectSchema<
    serializers.JsonSchemaResponseFormat.Raw,
    Letta.JsonSchemaResponseFormat
> = core.serialization.object({
    type: core.serialization.stringLiteral("json_schema"),
    jsonSchema: core.serialization.property(
        "json_schema",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    ),
});

export declare namespace JsonSchemaResponseFormat {
    export interface Raw {
        type: "json_schema";
        json_schema: Record<string, unknown>;
    }
}

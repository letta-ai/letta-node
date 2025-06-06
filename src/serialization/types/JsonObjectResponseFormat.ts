/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const JsonObjectResponseFormat: core.serialization.ObjectSchema<
    serializers.JsonObjectResponseFormat.Raw,
    Letta.JsonObjectResponseFormat
> = core.serialization.object({
    type: core.serialization.stringLiteral("json_object"),
});

export declare namespace JsonObjectResponseFormat {
    export interface Raw {
        type: "json_object";
    }
}

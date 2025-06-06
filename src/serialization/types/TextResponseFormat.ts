/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const TextResponseFormat: core.serialization.ObjectSchema<
    serializers.TextResponseFormat.Raw,
    Letta.TextResponseFormat
> = core.serialization.object({
    type: core.serialization.stringLiteral("text"),
});

export declare namespace TextResponseFormat {
    export interface Raw {
        type: "text";
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const CompletionCreateParamsNonStreamingStop: core.serialization.Schema<
    serializers.CompletionCreateParamsNonStreamingStop.Raw,
    Letta.CompletionCreateParamsNonStreamingStop
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.list(core.serialization.string()),
]);

export declare namespace CompletionCreateParamsNonStreamingStop {
    export type Raw = string | string[];
}

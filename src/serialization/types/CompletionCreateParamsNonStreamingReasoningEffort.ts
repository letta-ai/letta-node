/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const CompletionCreateParamsNonStreamingReasoningEffort: core.serialization.Schema<
    serializers.CompletionCreateParamsNonStreamingReasoningEffort.Raw,
    Letta.CompletionCreateParamsNonStreamingReasoningEffort
> = core.serialization.enum_(["low", "medium", "high"]);

export declare namespace CompletionCreateParamsNonStreamingReasoningEffort {
    export type Raw = "low" | "medium" | "high";
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const CompletionCreateParamsNonStreamingServiceTier: core.serialization.Schema<
    serializers.CompletionCreateParamsNonStreamingServiceTier.Raw,
    Letta.CompletionCreateParamsNonStreamingServiceTier
> = core.serialization.enum_(["auto", "default"]);

export declare namespace CompletionCreateParamsNonStreamingServiceTier {
    export type Raw = "auto" | "default";
}

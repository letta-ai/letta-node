/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const LettaUsageStatistics: core.serialization.ObjectSchema<
    serializers.LettaUsageStatistics.Raw,
    Letta.LettaUsageStatistics
> = core.serialization.object({
    completionTokens: core.serialization.property("completion_tokens", core.serialization.number().optional()),
    promptTokens: core.serialization.property("prompt_tokens", core.serialization.number().optional()),
    totalTokens: core.serialization.property("total_tokens", core.serialization.number().optional()),
    stepCount: core.serialization.property("step_count", core.serialization.number().optional()),
});

export declare namespace LettaUsageStatistics {
    interface Raw {
        completion_tokens?: number | null;
        prompt_tokens?: number | null;
        total_tokens?: number | null;
        step_count?: number | null;
    }
}

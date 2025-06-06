/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { UsageStatisticsPromptTokenDetails } from "./UsageStatisticsPromptTokenDetails";
import { UsageStatisticsCompletionTokenDetails } from "./UsageStatisticsCompletionTokenDetails";

export const UsageStatistics: core.serialization.ObjectSchema<serializers.UsageStatistics.Raw, Letta.UsageStatistics> =
    core.serialization.object({
        completionTokens: core.serialization.property("completion_tokens", core.serialization.number().optional()),
        promptTokens: core.serialization.property("prompt_tokens", core.serialization.number().optional()),
        totalTokens: core.serialization.property("total_tokens", core.serialization.number().optional()),
        promptTokensDetails: core.serialization.property(
            "prompt_tokens_details",
            UsageStatisticsPromptTokenDetails.optional(),
        ),
        completionTokensDetails: core.serialization.property(
            "completion_tokens_details",
            UsageStatisticsCompletionTokenDetails.optional(),
        ),
    });

export declare namespace UsageStatistics {
    export interface Raw {
        completion_tokens?: number | null;
        prompt_tokens?: number | null;
        total_tokens?: number | null;
        prompt_tokens_details?: UsageStatisticsPromptTokenDetails.Raw | null;
        completion_tokens_details?: UsageStatisticsCompletionTokenDetails.Raw | null;
    }
}

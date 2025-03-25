/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { LlmConfigModelEndpointType } from "./LlmConfigModelEndpointType";

export const LlmConfig: core.serialization.ObjectSchema<serializers.LlmConfig.Raw, Letta.LlmConfig> =
    core.serialization.object({
        model: core.serialization.string(),
        modelEndpointType: core.serialization.property("model_endpoint_type", LlmConfigModelEndpointType),
        modelEndpoint: core.serialization.property("model_endpoint", core.serialization.string().optional()),
        modelWrapper: core.serialization.property("model_wrapper", core.serialization.string().optional()),
        contextWindow: core.serialization.property("context_window", core.serialization.number()),
        putInnerThoughtsInKwargs: core.serialization.property(
            "put_inner_thoughts_in_kwargs",
            core.serialization.boolean().optional(),
        ),
        handle: core.serialization.string().optional(),
        temperature: core.serialization.number().optional(),
        maxTokens: core.serialization.property("max_tokens", core.serialization.number().optional()),
        enableReasoner: core.serialization.property("enable_reasoner", core.serialization.boolean().optional()),
        maxReasoningTokens: core.serialization.property("max_reasoning_tokens", core.serialization.number().optional()),
    });

export declare namespace LlmConfig {
    export interface Raw {
        model: string;
        model_endpoint_type: LlmConfigModelEndpointType.Raw;
        model_endpoint?: string | null;
        model_wrapper?: string | null;
        context_window: number;
        put_inner_thoughts_in_kwargs?: boolean | null;
        handle?: string | null;
        temperature?: number | null;
        max_tokens?: number | null;
        enable_reasoner?: boolean | null;
        max_reasoning_tokens?: number | null;
    }
}

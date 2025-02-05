/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemLlmConfigModelEndpointType } from "./AgentsSearchResponseAgentsItemLlmConfigModelEndpointType";
import { AgentsSearchResponseAgentsItemLlmConfigModelEndpoint } from "./AgentsSearchResponseAgentsItemLlmConfigModelEndpoint";
import { AgentsSearchResponseAgentsItemLlmConfigModelWrapper } from "./AgentsSearchResponseAgentsItemLlmConfigModelWrapper";
import { AgentsSearchResponseAgentsItemLlmConfigPutInnerThoughtsInKwargs } from "./AgentsSearchResponseAgentsItemLlmConfigPutInnerThoughtsInKwargs";
import { AgentsSearchResponseAgentsItemLlmConfigHandle } from "./AgentsSearchResponseAgentsItemLlmConfigHandle";
import { AgentsSearchResponseAgentsItemLlmConfigTemperature } from "./AgentsSearchResponseAgentsItemLlmConfigTemperature";

export const AgentsSearchResponseAgentsItemLlmConfig: core.serialization.ObjectSchema<
    serializers.AgentsSearchResponseAgentsItemLlmConfig.Raw,
    Letta.AgentsSearchResponseAgentsItemLlmConfig
> = core.serialization.object({
    model: core.serialization.string(),
    modelEndpointType: core.serialization.property(
        "model_endpoint_type",
        AgentsSearchResponseAgentsItemLlmConfigModelEndpointType,
    ),
    modelEndpoint: core.serialization.property(
        "model_endpoint",
        AgentsSearchResponseAgentsItemLlmConfigModelEndpoint.optional(),
    ),
    modelWrapper: core.serialization.property(
        "model_wrapper",
        AgentsSearchResponseAgentsItemLlmConfigModelWrapper.optional(),
    ),
    contextWindow: core.serialization.property("context_window", core.serialization.number()),
    putInnerThoughtsInKwargs: core.serialization.property(
        "put_inner_thoughts_in_kwargs",
        AgentsSearchResponseAgentsItemLlmConfigPutInnerThoughtsInKwargs.optional(),
    ),
    handle: AgentsSearchResponseAgentsItemLlmConfigHandle.optional(),
    temperature: AgentsSearchResponseAgentsItemLlmConfigTemperature.optional(),
});

export declare namespace AgentsSearchResponseAgentsItemLlmConfig {
    export interface Raw {
        model: string;
        model_endpoint_type: AgentsSearchResponseAgentsItemLlmConfigModelEndpointType.Raw;
        model_endpoint?: AgentsSearchResponseAgentsItemLlmConfigModelEndpoint.Raw | null;
        model_wrapper?: AgentsSearchResponseAgentsItemLlmConfigModelWrapper.Raw | null;
        context_window: number;
        put_inner_thoughts_in_kwargs?: AgentsSearchResponseAgentsItemLlmConfigPutInnerThoughtsInKwargs.Raw | null;
        handle?: AgentsSearchResponseAgentsItemLlmConfigHandle.Raw | null;
        temperature?: AgentsSearchResponseAgentsItemLlmConfigTemperature.Raw | null;
    }
}

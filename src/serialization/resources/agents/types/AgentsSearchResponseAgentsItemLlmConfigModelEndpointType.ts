/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const AgentsSearchResponseAgentsItemLlmConfigModelEndpointType: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemLlmConfigModelEndpointType.Raw,
    Letta.AgentsSearchResponseAgentsItemLlmConfigModelEndpointType
> = core.serialization.enum_([
    "openai",
    "anthropic",
    "cohere",
    "google_ai",
    "azure",
    "groq",
    "ollama",
    "webui",
    "webui-legacy",
    "lmstudio",
    "lmstudio-legacy",
    "llamacpp",
    "koboldcpp",
    "vllm",
    "hugging-face",
    "mistral",
    "together",
    "bedrock",
]);

export declare namespace AgentsSearchResponseAgentsItemLlmConfigModelEndpointType {
    export type Raw =
        | "openai"
        | "anthropic"
        | "cohere"
        | "google_ai"
        | "azure"
        | "groq"
        | "ollama"
        | "webui"
        | "webui-legacy"
        | "lmstudio"
        | "lmstudio-legacy"
        | "llamacpp"
        | "koboldcpp"
        | "vllm"
        | "hugging-face"
        | "mistral"
        | "together"
        | "bedrock";
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const LlmConfigModelEndpointType: core.serialization.Schema<
    serializers.LlmConfigModelEndpointType.Raw,
    Letta.LlmConfigModelEndpointType
> = core.serialization.enum_([
    "openai",
    "anthropic",
    "cohere",
    "google_ai",
    "google_vertex",
    "azure",
    "groq",
    "ollama",
    "webui",
    "webui-legacy",
    "lmstudio",
    "lmstudio-legacy",
    "lmstudio-chatcompletions",
    "llamacpp",
    "koboldcpp",
    "vllm",
    "hugging-face",
    "mistral",
    "together",
    "bedrock",
    "deepseek",
    "xai",
]);

export declare namespace LlmConfigModelEndpointType {
    export type Raw =
        | "openai"
        | "anthropic"
        | "cohere"
        | "google_ai"
        | "google_vertex"
        | "azure"
        | "groq"
        | "ollama"
        | "webui"
        | "webui-legacy"
        | "lmstudio"
        | "lmstudio-legacy"
        | "lmstudio-chatcompletions"
        | "llamacpp"
        | "koboldcpp"
        | "vllm"
        | "hugging-face"
        | "mistral"
        | "together"
        | "bedrock"
        | "deepseek"
        | "xai";
}

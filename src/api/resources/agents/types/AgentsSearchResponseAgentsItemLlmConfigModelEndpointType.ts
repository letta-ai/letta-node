/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type AgentsSearchResponseAgentsItemLlmConfigModelEndpointType =
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
    | "llamacpp"
    | "koboldcpp"
    | "vllm"
    | "hugging-face"
    | "mistral"
    | "together"
    | "bedrock";
export const AgentsSearchResponseAgentsItemLlmConfigModelEndpointType = {
    Openai: "openai",
    Anthropic: "anthropic",
    Cohere: "cohere",
    GoogleAi: "google_ai",
    GoogleVertex: "google_vertex",
    Azure: "azure",
    Groq: "groq",
    Ollama: "ollama",
    Webui: "webui",
    WebuiLegacy: "webui-legacy",
    Lmstudio: "lmstudio",
    LmstudioLegacy: "lmstudio-legacy",
    Llamacpp: "llamacpp",
    Koboldcpp: "koboldcpp",
    Vllm: "vllm",
    HuggingFace: "hugging-face",
    Mistral: "mistral",
    Together: "together",
    Bedrock: "bedrock",
} as const;

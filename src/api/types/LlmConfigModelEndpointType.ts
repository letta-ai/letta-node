/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The endpoint type for the model.
 */
export type LlmConfigModelEndpointType =
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
    | "together";
export const LlmConfigModelEndpointType = {
    Openai: "openai",
    Anthropic: "anthropic",
    Cohere: "cohere",
    GoogleAi: "google_ai",
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
} as const;

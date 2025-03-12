/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface CompletionCreateParamsStreaming {
    messages: Letta.CompletionCreateParamsStreamingMessagesItem[];
    model: Letta.CompletionCreateParamsStreamingModel;
    audio?: Letta.ChatCompletionAudioParam;
    frequencyPenalty?: number;
    functionCall?: Letta.CompletionCreateParamsStreamingFunctionCall;
    functions?: Letta.OpenaiTypesChatCompletionCreateParamsFunction[];
    logitBias?: Record<string, number | undefined>;
    logprobs?: boolean;
    maxCompletionTokens?: number;
    maxTokens?: number;
    metadata?: Record<string, string | undefined>;
    modalities?: Letta.CompletionCreateParamsStreamingModalitiesItem[];
    n?: number;
    parallelToolCalls?: boolean;
    prediction?: Letta.ChatCompletionPredictionContentParam;
    presencePenalty?: number;
    reasoningEffort?: Letta.CompletionCreateParamsStreamingReasoningEffort;
    responseFormat?: Letta.CompletionCreateParamsStreamingResponseFormat;
    seed?: number;
    serviceTier?: Letta.CompletionCreateParamsStreamingServiceTier;
    stop?: Letta.CompletionCreateParamsStreamingStop;
    store?: boolean;
    streamOptions?: Letta.ChatCompletionStreamOptionsParam;
    temperature?: number;
    toolChoice?: Letta.CompletionCreateParamsStreamingToolChoice;
    tools?: Letta.ChatCompletionToolParam[];
    topLogprobs?: number;
    topP?: number;
    user?: string;
    webSearchOptions?: Letta.WebSearchOptions;
    stream: boolean;
}

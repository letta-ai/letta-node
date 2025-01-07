/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Overview of the context window, including the number of messages and tokens.
 */
export interface ContextWindowOverview {
    /** The maximum amount of tokens the context window can hold. */
    contextWindowSizeMax: number;
    /** The current number of tokens in the context window. */
    contextWindowSizeCurrent: number;
    /** The number of messages in the context window. */
    numMessages: number;
    /** The number of messages in the archival memory. */
    numArchivalMemory: number;
    /** The number of messages in the recall memory. */
    numRecallMemory: number;
    /** The number of tokens in the external memory summary (archival + recall metadata). */
    numTokensExternalMemorySummary: number;
    /** The metadata summary of the external memory sources (archival + recall metadata). */
    externalMemorySummary: string;
    /** The number of tokens in the system prompt. */
    numTokensSystem: number;
    /** The content of the system prompt. */
    systemPrompt: string;
    /** The number of tokens in the core memory. */
    numTokensCoreMemory: number;
    /** The content of the core memory. */
    coreMemory: string;
    /** The number of tokens in the summary memory. */
    numTokensSummaryMemory: number;
    /** The content of the summary memory. */
    summaryMemory?: string;
    /** The number of tokens in the functions definitions. */
    numTokensFunctionsDefinitions: number;
    /** The content of the functions definitions. */
    functionsDefinitions?: Letta.LettaSchemasOpenaiChatCompletionRequestTool[];
    /** The number of tokens in the messages list. */
    numTokensMessages: number;
    /** The messages in the context window. */
    messages: Letta.LettaSchemasMessageMessage[];
}

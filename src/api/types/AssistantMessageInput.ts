/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export interface AssistantMessageInput {
    content?: string;
    role?: string;
    name?: string;
    tool_calls?: Letta.LettaSchemasOpenaiChatCompletionRequestToolCall[];
}

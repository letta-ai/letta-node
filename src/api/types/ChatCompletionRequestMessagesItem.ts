/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export type ChatCompletionRequestMessagesItem =
    | Letta.SystemMessageInput
    | Letta.UserMessageInput
    | Letta.AssistantMessageInput
    | Letta.ToolMessage;

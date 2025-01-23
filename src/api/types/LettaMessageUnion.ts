/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

export type LettaMessageUnion =
    | Letta.SystemMessage
    | Letta.UserMessage
    | Letta.ReasoningMessage
    | Letta.ToolCallMessage
    | Letta.ToolReturnMessage
    | Letta.AssistantMessage;

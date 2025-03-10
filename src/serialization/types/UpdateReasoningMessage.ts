/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { UpdateReasoningMessageReasoning } from "./UpdateReasoningMessageReasoning";

export const UpdateReasoningMessage: core.serialization.ObjectSchema<
    serializers.UpdateReasoningMessage.Raw,
    Letta.UpdateReasoningMessage
> = core.serialization.object({
    reasoning: UpdateReasoningMessageReasoning,
    messageType: core.serialization.property("message_type", core.serialization.stringLiteral("reasoning_message")),
});

export declare namespace UpdateReasoningMessage {
    export interface Raw {
        reasoning: UpdateReasoningMessageReasoning.Raw;
        message_type: "reasoning_message";
    }
}

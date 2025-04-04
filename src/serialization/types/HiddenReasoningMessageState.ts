/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const HiddenReasoningMessageState: core.serialization.Schema<
    serializers.HiddenReasoningMessageState.Raw,
    Letta.HiddenReasoningMessageState
> = core.serialization.enum_(["redacted", "omitted"]);

export declare namespace HiddenReasoningMessageState {
    export type Raw = "redacted" | "omitted";
}

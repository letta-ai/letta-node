/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const RecallMemorySummary: core.serialization.ObjectSchema<
    serializers.RecallMemorySummary.Raw,
    Letta.RecallMemorySummary
> = core.serialization.object({
    size: core.serialization.number(),
});

export declare namespace RecallMemorySummary {
    export interface Raw {
        size: number;
    }
}

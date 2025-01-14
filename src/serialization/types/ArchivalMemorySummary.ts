/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const ArchivalMemorySummary: core.serialization.ObjectSchema<
    serializers.ArchivalMemorySummary.Raw,
    Letta.ArchivalMemorySummary
> = core.serialization.object({
    size: core.serialization.number(),
});

export declare namespace ArchivalMemorySummary {
    export interface Raw {
        size: number;
    }
}

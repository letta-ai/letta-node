/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const InitToolRule: core.serialization.ObjectSchema<serializers.InitToolRule.Raw, Letta.InitToolRule> =
    core.serialization.object({
        toolName: core.serialization.property("tool_name", core.serialization.string()),
        type: core.serialization.stringLiteral("run_first"),
    });

export declare namespace InitToolRule {
    export interface Raw {
        tool_name: string;
        type: "run_first";
    }
}

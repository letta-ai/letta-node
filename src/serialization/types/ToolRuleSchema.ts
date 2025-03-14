/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const ToolRuleSchema: core.serialization.ObjectSchema<serializers.ToolRuleSchema.Raw, Letta.ToolRuleSchema> =
    core.serialization.object({
        toolName: core.serialization.property("tool_name", core.serialization.string()),
        type: core.serialization.string(),
    });

export declare namespace ToolRuleSchema {
    export interface Raw {
        tool_name: string;
        type: string;
    }
}

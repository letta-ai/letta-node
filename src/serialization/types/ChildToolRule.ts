/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ToolRuleType } from "./ToolRuleType";

export const ChildToolRule: core.serialization.ObjectSchema<serializers.ChildToolRule.Raw, Letta.ChildToolRule> =
    core.serialization.object({
        toolName: core.serialization.property("tool_name", core.serialization.string()),
        type: ToolRuleType.optional(),
        children: core.serialization.list(core.serialization.string()),
    });

export declare namespace ChildToolRule {
    export interface Raw {
        tool_name: string;
        type?: ToolRuleType.Raw | null;
        children: string[];
    }
}

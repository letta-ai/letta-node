/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const ToolType: core.serialization.Schema<serializers.ToolType.Raw, Letta.ToolType> = core.serialization.enum_([
    "custom",
    "letta_core",
    "letta_memory_core",
    "letta_multi_agent_core",
]);

export declare namespace ToolType {
    export type Raw = "custom" | "letta_core" | "letta_memory_core" | "letta_multi_agent_core";
}

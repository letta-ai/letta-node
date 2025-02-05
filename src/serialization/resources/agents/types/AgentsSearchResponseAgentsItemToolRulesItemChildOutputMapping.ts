/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingType } from "./AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingType";
import { AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingDefaultChild } from "./AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingDefaultChild";
import { AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping } from "./AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping";

export const AgentsSearchResponseAgentsItemToolRulesItemChildOutputMapping: core.serialization.ObjectSchema<
    serializers.AgentsSearchResponseAgentsItemToolRulesItemChildOutputMapping.Raw,
    Letta.AgentsSearchResponseAgentsItemToolRulesItemChildOutputMapping
> = core.serialization.object({
    toolName: core.serialization.property("tool_name", core.serialization.string()),
    type: AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingType.optional(),
    defaultChild: core.serialization.property(
        "default_child",
        AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingDefaultChild.optional(),
    ),
    childOutputMapping: core.serialization.property("child_output_mapping", core.serialization.unknown().optional()),
    requireOutputMapping: core.serialization.property(
        "require_output_mapping",
        AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping.optional(),
    ),
});

export declare namespace AgentsSearchResponseAgentsItemToolRulesItemChildOutputMapping {
    export interface Raw {
        tool_name: string;
        type?: AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingType.Raw | null;
        default_child?: AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingDefaultChild.Raw | null;
        child_output_mapping?: unknown | null;
        require_output_mapping?: AgentsSearchResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping.Raw | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingType } from "./TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingType";
import { TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingDefaultChild } from "./TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingDefaultChild";
import { TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingRequireOutputMapping } from "./TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingRequireOutputMapping";

export const TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMapping: core.serialization.ObjectSchema<
    serializers.TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMapping.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMapping
> = core.serialization.object({
    toolName: core.serialization.property("tool_name", core.serialization.string()),
    type: TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingType.optional(),
    defaultChild: core.serialization.property(
        "default_child",
        TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingDefaultChild.optional(),
    ),
    childOutputMapping: core.serialization.property("child_output_mapping", core.serialization.unknown().optional()),
    requireOutputMapping: core.serialization.property(
        "require_output_mapping",
        TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingRequireOutputMapping.optional(),
    ),
});

export declare namespace TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMapping {
    export interface Raw {
        tool_name: string;
        type?: TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingType.Raw | null;
        default_child?: TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingDefaultChild.Raw | null;
        child_output_mapping?: unknown | null;
        require_output_mapping?: TemplatesCreateAgentsResponseAgentsItemToolRulesItemItemChildOutputMappingRequireOutputMapping.Raw | null;
    }
}

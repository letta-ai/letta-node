/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemToolRulesItemFourType } from "./AgentsSearchResponseAgentsItemToolRulesItemFourType";

export const AgentsSearchResponseAgentsItemToolRulesItemFour: core.serialization.ObjectSchema<
    serializers.AgentsSearchResponseAgentsItemToolRulesItemFour.Raw,
    Letta.AgentsSearchResponseAgentsItemToolRulesItemFour
> = core.serialization.object({
    toolName: core.serialization.property("tool_name", core.serialization.string()),
    type: AgentsSearchResponseAgentsItemToolRulesItemFourType.optional(),
});

export declare namespace AgentsSearchResponseAgentsItemToolRulesItemFour {
    export interface Raw {
        tool_name: string;
        type?: AgentsSearchResponseAgentsItemToolRulesItemFourType.Raw | null;
    }
}

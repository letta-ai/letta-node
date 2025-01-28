/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemTwoType } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemTwoType";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemTwo: core.serialization.ObjectSchema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemTwo.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemTwo
> = core.serialization.object({
    toolName: core.serialization.property("tool_name", core.serialization.string()),
    type: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemTwoType.optional(),
});

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemTwo {
    export interface Raw {
        tool_name: string;
        type?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemItemTwoType.Raw | null;
    }
}

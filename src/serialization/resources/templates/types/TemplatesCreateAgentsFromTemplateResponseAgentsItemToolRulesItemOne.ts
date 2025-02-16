/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemOneType } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemOneType";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemOne: core.serialization.ObjectSchema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemOne.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemOne
> = core.serialization.object({
    toolName: core.serialization.property("tool_name", core.serialization.string()),
    type: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemOneType.optional(),
});

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemOne {
    export interface Raw {
        tool_name: string;
        type?: TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemOneType.Raw | null;
    }
}

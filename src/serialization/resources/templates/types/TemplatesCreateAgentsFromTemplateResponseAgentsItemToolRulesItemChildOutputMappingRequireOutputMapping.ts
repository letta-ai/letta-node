/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping
> = core.serialization.undiscriminatedUnion([core.serialization.boolean(), core.serialization.unknown()]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping {
    export type Raw = boolean | unknown;
}

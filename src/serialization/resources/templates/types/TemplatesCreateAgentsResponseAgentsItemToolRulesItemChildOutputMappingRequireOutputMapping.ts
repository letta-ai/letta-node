/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping
> = core.serialization.undiscriminatedUnion([core.serialization.boolean(), core.serialization.unknown()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemToolRulesItemChildOutputMappingRequireOutputMapping {
    export type Raw = boolean | unknown;
}

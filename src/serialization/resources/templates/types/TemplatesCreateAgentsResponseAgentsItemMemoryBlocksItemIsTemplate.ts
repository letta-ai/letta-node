/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemIsTemplate: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemIsTemplate.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemIsTemplate
> = core.serialization.undiscriminatedUnion([core.serialization.boolean(), core.serialization.unknown()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemIsTemplate {
    export type Raw = boolean | unknown;
}

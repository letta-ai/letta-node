/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemId: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemId.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemId
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.unknown()]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemId {
    export type Raw = string | unknown;
}

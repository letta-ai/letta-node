/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemMetadataItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemMetadataItem.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemMetadataItem
> = core.serialization.undiscriminatedUnion([core.serialization.unknown(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemMetadataItem {
    export type Raw = unknown | (string | null | undefined);
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemMetadataItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemMetadataItem.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemMetadataItem
> = core.serialization.undiscriminatedUnion([core.serialization.unknown(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemMetadataItem {
    export type Raw = unknown | (string | null | undefined);
}

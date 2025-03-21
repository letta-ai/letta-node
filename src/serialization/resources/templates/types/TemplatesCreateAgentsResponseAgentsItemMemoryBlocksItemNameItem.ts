/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemNameItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemNameItem.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemNameItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemNameItem {
    export type Raw = string | (string | null | undefined);
}

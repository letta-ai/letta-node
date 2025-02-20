/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemEmbeddingConfigEmbeddingChunkSizeItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemEmbeddingConfigEmbeddingChunkSizeItem.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemEmbeddingConfigEmbeddingChunkSizeItem
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemEmbeddingConfigEmbeddingChunkSizeItem {
    export type Raw = number | (string | null | undefined);
}

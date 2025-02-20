/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemEmbeddingConfigHandleItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemEmbeddingConfigHandleItem.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemEmbeddingConfigHandleItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemEmbeddingConfigHandleItem {
    export type Raw = string | (string | null | undefined);
}

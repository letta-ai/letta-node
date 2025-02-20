/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandleItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandleItem.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandleItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemSourcesItemEmbeddingConfigHandleItem {
    export type Raw = string | (string | null | undefined);
}

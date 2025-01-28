/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureVersionItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureVersionItem.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureVersionItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureVersionItem {
    export type Raw = string | (string | null | undefined);
}

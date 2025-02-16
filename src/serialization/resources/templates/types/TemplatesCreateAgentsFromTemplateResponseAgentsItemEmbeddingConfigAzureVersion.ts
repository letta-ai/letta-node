/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureVersionItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureVersionItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureVersion: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureVersion.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureVersion
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(
        TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureVersionItem.optional(),
    ),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureVersion {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureVersionItem.Raw | null | undefined)[]
        | unknown;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureEndpointItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureEndpointItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureEndpoint: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureEndpoint.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureEndpoint
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(
        TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureEndpointItem.optional(),
    ),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureEndpoint {
    export type Raw =
        | string
        | (string | null | undefined)
        | (
              | TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemEmbeddingConfigAzureEndpointItem.Raw
              | null
              | undefined
          )[]
        | unknown;
}

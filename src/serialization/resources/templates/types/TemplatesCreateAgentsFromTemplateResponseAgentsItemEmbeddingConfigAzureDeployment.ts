/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureDeploymentItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureDeploymentItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureDeployment: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureDeployment.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureDeployment
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(
        TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureDeploymentItem.optional(),
    ),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureDeployment {
    export type Raw =
        | string
        | (string | null | undefined)
        | (
              | TemplatesCreateAgentsFromTemplateResponseAgentsItemEmbeddingConfigAzureDeploymentItem.Raw
              | null
              | undefined
          )[]
        | unknown;
}

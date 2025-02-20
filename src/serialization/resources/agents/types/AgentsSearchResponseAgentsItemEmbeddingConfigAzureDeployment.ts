/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemEmbeddingConfigAzureDeploymentItem } from "./AgentsSearchResponseAgentsItemEmbeddingConfigAzureDeploymentItem";

export const AgentsSearchResponseAgentsItemEmbeddingConfigAzureDeployment: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemEmbeddingConfigAzureDeployment.Raw,
    Letta.AgentsSearchResponseAgentsItemEmbeddingConfigAzureDeployment
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemEmbeddingConfigAzureDeploymentItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemEmbeddingConfigAzureDeployment {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemEmbeddingConfigAzureDeploymentItem.Raw | null | undefined)[]
        | unknown;
}

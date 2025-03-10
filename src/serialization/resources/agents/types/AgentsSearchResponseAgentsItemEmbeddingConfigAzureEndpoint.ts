/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemEmbeddingConfigAzureEndpointItem } from "./AgentsSearchResponseAgentsItemEmbeddingConfigAzureEndpointItem";

export const AgentsSearchResponseAgentsItemEmbeddingConfigAzureEndpoint: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemEmbeddingConfigAzureEndpoint.Raw,
    Letta.AgentsSearchResponseAgentsItemEmbeddingConfigAzureEndpoint
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemEmbeddingConfigAzureEndpointItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemEmbeddingConfigAzureEndpoint {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemEmbeddingConfigAzureEndpointItem.Raw | null | undefined)[]
        | unknown;
}

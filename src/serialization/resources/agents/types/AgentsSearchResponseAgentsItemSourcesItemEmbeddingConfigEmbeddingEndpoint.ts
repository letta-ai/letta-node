/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpointItem } from "./AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpointItem";

export const AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpoint: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpoint.Raw,
    Letta.AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpoint
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpointItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpoint {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemSourcesItemEmbeddingConfigEmbeddingEndpointItem.Raw | null | undefined)[]
        | unknown;
}

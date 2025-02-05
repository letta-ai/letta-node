/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemLlmConfigModelEndpointItem } from "./AgentsSearchResponseAgentsItemLlmConfigModelEndpointItem";

export const AgentsSearchResponseAgentsItemLlmConfigModelEndpoint: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemLlmConfigModelEndpoint.Raw,
    Letta.AgentsSearchResponseAgentsItemLlmConfigModelEndpoint
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemLlmConfigModelEndpointItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemLlmConfigModelEndpoint {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemLlmConfigModelEndpointItem.Raw | null | undefined)[]
        | unknown;
}

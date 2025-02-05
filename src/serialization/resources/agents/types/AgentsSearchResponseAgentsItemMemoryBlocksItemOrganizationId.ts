/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationIdItem } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationIdItem";

export const AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationId: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationId.Raw,
    Letta.AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationIdItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationId {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemMemoryBlocksItemOrganizationIdItem.Raw | null | undefined)[]
        | unknown;
}

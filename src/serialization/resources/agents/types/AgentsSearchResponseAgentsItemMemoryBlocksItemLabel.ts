/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemMemoryBlocksItemLabelItem } from "./AgentsSearchResponseAgentsItemMemoryBlocksItemLabelItem";

export const AgentsSearchResponseAgentsItemMemoryBlocksItemLabel: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemMemoryBlocksItemLabel.Raw,
    Letta.AgentsSearchResponseAgentsItemMemoryBlocksItemLabel
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemMemoryBlocksItemLabelItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemMemoryBlocksItemLabel {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemMemoryBlocksItemLabelItem.Raw | null | undefined)[]
        | unknown;
}

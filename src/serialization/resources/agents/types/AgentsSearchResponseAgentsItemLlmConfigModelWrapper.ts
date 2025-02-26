/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentsSearchResponseAgentsItemLlmConfigModelWrapperItem } from "./AgentsSearchResponseAgentsItemLlmConfigModelWrapperItem";

export const AgentsSearchResponseAgentsItemLlmConfigModelWrapper: core.serialization.Schema<
    serializers.AgentsSearchResponseAgentsItemLlmConfigModelWrapper.Raw,
    Letta.AgentsSearchResponseAgentsItemLlmConfigModelWrapper
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(AgentsSearchResponseAgentsItemLlmConfigModelWrapperItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace AgentsSearchResponseAgentsItemLlmConfigModelWrapper {
    export type Raw =
        | string
        | (string | null | undefined)
        | (AgentsSearchResponseAgentsItemLlmConfigModelWrapperItem.Raw | null | undefined)[]
        | unknown;
}

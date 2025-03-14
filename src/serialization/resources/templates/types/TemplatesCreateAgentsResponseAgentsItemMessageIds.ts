/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemMessageIdsItem } from "./TemplatesCreateAgentsResponseAgentsItemMessageIdsItem";

export const TemplatesCreateAgentsResponseAgentsItemMessageIds: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemMessageIds.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemMessageIds
> = core.serialization.undiscriminatedUnion([
    core.serialization.list(core.serialization.string()),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsResponseAgentsItemMessageIdsItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemMessageIds {
    export type Raw =
        | string[]
        | (string | null | undefined)
        | (TemplatesCreateAgentsResponseAgentsItemMessageIdsItem.Raw | null | undefined)[]
        | unknown;
}

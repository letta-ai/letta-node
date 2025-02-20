/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemSourcesItemCreatedByIdItem } from "./TemplatesCreateAgentsResponseAgentsItemSourcesItemCreatedByIdItem";

export const TemplatesCreateAgentsResponseAgentsItemSourcesItemCreatedById: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemSourcesItemCreatedById.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemCreatedById
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsResponseAgentsItemSourcesItemCreatedByIdItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemSourcesItemCreatedById {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsResponseAgentsItemSourcesItemCreatedByIdItem.Raw | null | undefined)[]
        | unknown;
}

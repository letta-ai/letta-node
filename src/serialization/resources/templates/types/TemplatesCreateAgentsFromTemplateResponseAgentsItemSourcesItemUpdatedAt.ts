/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemUpdatedAtItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemUpdatedAtItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemUpdatedAt: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemUpdatedAt.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemUpdatedAt
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemUpdatedAtItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemUpdatedAt {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsFromTemplateResponseAgentsItemSourcesItemUpdatedAtItem.Raw | null | undefined)[]
        | unknown;
}

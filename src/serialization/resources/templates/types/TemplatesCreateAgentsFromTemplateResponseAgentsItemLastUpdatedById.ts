/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedByIdItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedByIdItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedById: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedById.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedById
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedByIdItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedById {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsFromTemplateResponseAgentsItemLastUpdatedByIdItem.Raw | null | undefined)[]
        | unknown;
}

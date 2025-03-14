/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemBaseTemplateIdItem } from "./TemplatesCreateAgentsResponseAgentsItemBaseTemplateIdItem";

export const TemplatesCreateAgentsResponseAgentsItemBaseTemplateId: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemBaseTemplateId.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemBaseTemplateId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsResponseAgentsItemBaseTemplateIdItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemBaseTemplateId {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsResponseAgentsItemBaseTemplateIdItem.Raw | null | undefined)[]
        | unknown;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItemOrganizationIdItem } from "./TemplatesCreateAgentsResponseAgentsItemOrganizationIdItem";

export const TemplatesCreateAgentsResponseAgentsItemOrganizationId: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemOrganizationId.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemOrganizationId
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(TemplatesCreateAgentsResponseAgentsItemOrganizationIdItem.optional()),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemOrganizationId {
    export type Raw =
        | string
        | (string | null | undefined)
        | (TemplatesCreateAgentsResponseAgentsItemOrganizationIdItem.Raw | null | undefined)[]
        | unknown;
}

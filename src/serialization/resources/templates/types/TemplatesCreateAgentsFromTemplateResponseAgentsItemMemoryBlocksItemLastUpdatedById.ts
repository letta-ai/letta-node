/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedByIdItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedByIdItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedById: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedById.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedById
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(
        TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedByIdItem.optional(),
    ),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedById {
    export type Raw =
        | string
        | (string | null | undefined)
        | (
              | TemplatesCreateAgentsFromTemplateResponseAgentsItemMemoryBlocksItemLastUpdatedByIdItem.Raw
              | null
              | undefined
          )[]
        | unknown;
}

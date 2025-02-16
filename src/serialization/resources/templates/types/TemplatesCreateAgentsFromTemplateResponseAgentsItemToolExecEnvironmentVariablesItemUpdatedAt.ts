/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemUpdatedAtItem } from "./TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemUpdatedAtItem";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemUpdatedAt: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemUpdatedAt.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemUpdatedAt
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.string().optional(),
    core.serialization.list(
        TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemUpdatedAtItem.optional(),
    ),
    core.serialization.unknown(),
]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemUpdatedAt {
    export type Raw =
        | string
        | (string | null | undefined)
        | (
              | TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemUpdatedAtItem.Raw
              | null
              | undefined
          )[]
        | unknown;
}

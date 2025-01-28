/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemOrganizationIdItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemOrganizationIdItem.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemOrganizationIdItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemOrganizationIdItem {
    export type Raw = string | (string | null | undefined);
}

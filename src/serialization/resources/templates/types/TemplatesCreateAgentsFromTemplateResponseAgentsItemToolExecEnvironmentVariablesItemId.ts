/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemId: core.serialization.Schema<
    serializers.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemId.Raw,
    Letta.TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemId
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.unknown()]);

export declare namespace TemplatesCreateAgentsFromTemplateResponseAgentsItemToolExecEnvironmentVariablesItemId {
    export type Raw = string | unknown;
}

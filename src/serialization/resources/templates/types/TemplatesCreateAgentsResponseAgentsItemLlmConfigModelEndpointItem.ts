/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemLlmConfigModelEndpointItem: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemLlmConfigModelEndpointItem.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemLlmConfigModelEndpointItem
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.string().optional()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemLlmConfigModelEndpointItem {
    export type Raw = string | (string | null | undefined);
}

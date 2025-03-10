/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemSourcesItemId: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemSourcesItemId.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemSourcesItemId
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.unknown()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemSourcesItemId {
    export type Raw = string | unknown;
}

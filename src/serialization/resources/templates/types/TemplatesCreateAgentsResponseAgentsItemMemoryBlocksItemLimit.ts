/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";

export const TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemLimit: core.serialization.Schema<
    serializers.TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemLimit.Raw,
    Letta.TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemLimit
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.unknown()]);

export declare namespace TemplatesCreateAgentsResponseAgentsItemMemoryBlocksItemLimit {
    export type Raw = number | unknown;
}

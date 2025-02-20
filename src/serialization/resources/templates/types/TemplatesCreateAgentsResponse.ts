/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { TemplatesCreateAgentsResponseAgentsItem } from "./TemplatesCreateAgentsResponseAgentsItem";

export const TemplatesCreateAgentsResponse: core.serialization.ObjectSchema<
    serializers.TemplatesCreateAgentsResponse.Raw,
    Letta.TemplatesCreateAgentsResponse
> = core.serialization.object({
    agents: core.serialization.list(TemplatesCreateAgentsResponseAgentsItem),
});

export declare namespace TemplatesCreateAgentsResponse {
    export interface Raw {
        agents: TemplatesCreateAgentsResponseAgentsItem.Raw[];
    }
}

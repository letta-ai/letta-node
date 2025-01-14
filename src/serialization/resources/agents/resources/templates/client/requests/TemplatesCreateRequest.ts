/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Letta from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const TemplatesCreateRequest: core.serialization.Schema<
    serializers.agents.TemplatesCreateRequest.Raw,
    Letta.agents.TemplatesCreateRequest
> = core.serialization.object({
    project: core.serialization.string().optional(),
});

export declare namespace TemplatesCreateRequest {
    export interface Raw {
        project?: string | null;
    }
}

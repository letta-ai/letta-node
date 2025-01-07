/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const DeleteAssistantFileResponse: core.serialization.ObjectSchema<
    serializers.DeleteAssistantFileResponse.Raw,
    Letta.DeleteAssistantFileResponse
> = core.serialization.object({
    id: core.serialization.string(),
    object: core.serialization.string().optional(),
    deleted: core.serialization.boolean(),
});

export declare namespace DeleteAssistantFileResponse {
    interface Raw {
        id: string;
        object?: string | null;
        deleted: boolean;
    }
}

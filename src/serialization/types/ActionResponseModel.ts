/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const ActionResponseModel: core.serialization.ObjectSchema<
    serializers.ActionResponseModel.Raw,
    Letta.ActionResponseModel
> = core.serialization.object({
    properties: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
    title: core.serialization.string(),
    type: core.serialization.string(),
    required: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace ActionResponseModel {
    export interface Raw {
        properties: Record<string, unknown>;
        title: string;
        type: string;
        required?: string[] | null;
    }
}

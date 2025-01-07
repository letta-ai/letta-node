/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const ResponseFormat: core.serialization.ObjectSchema<serializers.ResponseFormat.Raw, Letta.ResponseFormat> =
    core.serialization.object({
        type: core.serialization.string().optional(),
    });

export declare namespace ResponseFormat {
    interface Raw {
        type?: string | null;
    }
}

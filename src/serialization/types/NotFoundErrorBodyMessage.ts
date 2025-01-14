/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const NotFoundErrorBodyMessage: core.serialization.Schema<
    serializers.NotFoundErrorBodyMessage.Raw,
    Letta.NotFoundErrorBodyMessage
> = core.serialization.enum_([
    "Agent provided is a template or not found, you can only migrate deployed agents",
    "Template version provided does not exist",
]);

export declare namespace NotFoundErrorBodyMessage {
    export type Raw =
        | "Agent provided is a template or not found, you can only migrate deployed agents"
        | "Template version provided does not exist";
}

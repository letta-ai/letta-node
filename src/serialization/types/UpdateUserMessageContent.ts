/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { TextContent } from "./TextContent";

export const UpdateUserMessageContent: core.serialization.Schema<
    serializers.UpdateUserMessageContent.Raw,
    Letta.UpdateUserMessageContent
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.list(TextContent)]);

export declare namespace UpdateUserMessageContent {
    export type Raw = string | TextContent.Raw[];
}

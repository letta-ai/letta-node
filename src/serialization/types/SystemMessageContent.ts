/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { TextContent } from "./TextContent";

export const SystemMessageContent: core.serialization.Schema<
    serializers.SystemMessageContent.Raw,
    Letta.SystemMessageContent
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.list(TextContent)]);

export declare namespace SystemMessageContent {
    export type Raw = string | TextContent.Raw[];
}

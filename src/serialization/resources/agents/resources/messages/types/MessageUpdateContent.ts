/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Letta from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TextContent } from "../../../../../types/TextContent";

export const MessageUpdateContent: core.serialization.Schema<
    serializers.agents.MessageUpdateContent.Raw,
    Letta.agents.MessageUpdateContent
> = core.serialization.undiscriminatedUnion([core.serialization.string(), core.serialization.list(TextContent)]);

export declare namespace MessageUpdateContent {
    export type Raw = string | TextContent.Raw[];
}

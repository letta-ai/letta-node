/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Letta from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { LettaSchemasMessageMessage } from "../../../../../types/LettaSchemasMessageMessage";
import { MessagesListResponseItem } from "./MessagesListResponseItem";

export const MessagesListResponse: core.serialization.Schema<
    serializers.agents.MessagesListResponse.Raw,
    Letta.agents.MessagesListResponse
> = core.serialization.undiscriminatedUnion([
    core.serialization.list(LettaSchemasMessageMessage),
    core.serialization.list(MessagesListResponseItem),
]);

export declare namespace MessagesListResponse {
    export type Raw = LettaSchemasMessageMessage.Raw[] | MessagesListResponseItem.Raw[];
}

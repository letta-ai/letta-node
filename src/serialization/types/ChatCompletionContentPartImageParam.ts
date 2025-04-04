/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ImageUrl } from "./ImageUrl";

export const ChatCompletionContentPartImageParam: core.serialization.ObjectSchema<
    serializers.ChatCompletionContentPartImageParam.Raw,
    Letta.ChatCompletionContentPartImageParam
> = core.serialization.object({
    imageUrl: core.serialization.property("image_url", ImageUrl),
    type: core.serialization.stringLiteral("image_url"),
});

export declare namespace ChatCompletionContentPartImageParam {
    export interface Raw {
        image_url: ImageUrl.Raw;
        type: "image_url";
    }
}

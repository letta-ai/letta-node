/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ResponseFormatText } from "./ResponseFormatText";
import { ResponseFormatJsonSchema } from "./ResponseFormatJsonSchema";
import { ResponseFormatJsonObject } from "./ResponseFormatJsonObject";

export const CompletionCreateParamsStreamingResponseFormat: core.serialization.Schema<
    serializers.CompletionCreateParamsStreamingResponseFormat.Raw,
    Letta.CompletionCreateParamsStreamingResponseFormat
> = core.serialization.undiscriminatedUnion([ResponseFormatText, ResponseFormatJsonSchema, ResponseFormatJsonObject]);

export declare namespace CompletionCreateParamsStreamingResponseFormat {
    export type Raw = ResponseFormatText.Raw | ResponseFormatJsonSchema.Raw | ResponseFormatJsonObject.Raw;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { JsonObjectResponseFormat } from "./JsonObjectResponseFormat";
import { JsonSchemaResponseFormat } from "./JsonSchemaResponseFormat";
import { TextResponseFormat } from "./TextResponseFormat";

export const AgentStateResponseFormat: core.serialization.Schema<
    serializers.AgentStateResponseFormat.Raw,
    Letta.AgentStateResponseFormat
> = core.serialization.undiscriminatedUnion([JsonObjectResponseFormat, JsonSchemaResponseFormat, TextResponseFormat]);

export declare namespace AgentStateResponseFormat {
    export type Raw = JsonObjectResponseFormat.Raw | JsonSchemaResponseFormat.Raw | TextResponseFormat.Raw;
}

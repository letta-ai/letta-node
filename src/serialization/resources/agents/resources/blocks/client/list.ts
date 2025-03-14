/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Letta from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Block } from "../../../../../types/Block";

export const Response: core.serialization.Schema<serializers.agents.blocks.list.Response.Raw, Letta.Block[]> =
    core.serialization.list(Block);

export declare namespace Response {
    export type Raw = Block.Raw[];
}

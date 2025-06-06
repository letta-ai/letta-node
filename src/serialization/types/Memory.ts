/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { Block } from "./Block";

export const Memory: core.serialization.ObjectSchema<serializers.Memory.Raw, Letta.Memory> = core.serialization.object({
    blocks: core.serialization.list(Block),
    fileBlocks: core.serialization.property("file_blocks", core.serialization.list(Block).optional()),
    promptTemplate: core.serialization.property("prompt_template", core.serialization.string().optional()),
});

export declare namespace Memory {
    export interface Raw {
        blocks: Block.Raw[];
        file_blocks?: Block.Raw[] | null;
        prompt_template?: string | null;
    }
}

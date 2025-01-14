/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { LettaSchemasToolTool } from "../../../types/LettaSchemasToolTool";

export const Response: core.serialization.Schema<
    serializers.tools.addBaseTool.Response.Raw,
    Letta.LettaSchemasToolTool[]
> = core.serialization.list(LettaSchemasToolTool);

export declare namespace Response {
    export type Raw = LettaSchemasToolTool.Raw[];
}

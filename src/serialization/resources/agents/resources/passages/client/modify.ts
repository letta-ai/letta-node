/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Letta from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Passage } from "../../../../../types/Passage";

export const Response: core.serialization.Schema<serializers.agents.passages.modify.Response.Raw, Letta.Passage[]> =
    core.serialization.list(Passage);

export declare namespace Response {
    export type Raw = Passage.Raw[];
}

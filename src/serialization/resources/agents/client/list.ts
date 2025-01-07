/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AgentState } from "../../../types/AgentState";

export const Response: core.serialization.Schema<serializers.agents.list.Response.Raw, Letta.AgentState[]> =
    core.serialization.list(AgentState);

export declare namespace Response {
    type Raw = AgentState.Raw[];
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Letta from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Group } from "../../../../../types/Group";

export const Response: core.serialization.Schema<serializers.agents.groups.list.Response.Raw, Letta.Group[]> =
    core.serialization.list(Group);

export declare namespace Response {
    export type Raw = Group.Raw[];
}

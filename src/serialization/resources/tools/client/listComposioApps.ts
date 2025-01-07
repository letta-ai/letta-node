/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { AppModel } from "../../../types/AppModel";

export const Response: core.serialization.Schema<serializers.tools.listComposioApps.Response.Raw, Letta.AppModel[]> =
    core.serialization.list(AppModel);

export declare namespace Response {
    type Raw = AppModel.Raw[];
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { ActionParametersModel } from "./ActionParametersModel";
import { ActionResponseModel } from "./ActionResponseModel";

export const ActionModel: core.serialization.ObjectSchema<serializers.ActionModel.Raw, Letta.ActionModel> =
    core.serialization.object({
        name: core.serialization.string(),
        description: core.serialization.string(),
        parameters: ActionParametersModel,
        response: ActionResponseModel,
        appName: core.serialization.string(),
        appId: core.serialization.string(),
        version: core.serialization.string(),
        availableVersions: core.serialization.property(
            "available_versions",
            core.serialization.list(core.serialization.string()),
        ),
        tags: core.serialization.list(core.serialization.string()),
        logo: core.serialization.string().optional(),
        displayName: core.serialization.property("display_name", core.serialization.string().optional()),
        enabled: core.serialization.boolean().optional(),
    });

export declare namespace ActionModel {
    export interface Raw {
        name: string;
        description: string;
        parameters: ActionParametersModel.Raw;
        response: ActionResponseModel.Raw;
        appName: string;
        appId: string;
        version: string;
        available_versions: string[];
        tags: string[];
        logo?: string | null;
        display_name?: string | null;
        enabled?: boolean | null;
    }
}

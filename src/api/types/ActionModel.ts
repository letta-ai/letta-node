/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Action data model.
 */
export interface ActionModel {
    name: string;
    display_name?: string;
    parameters: Letta.ActionParametersModel;
    response: Letta.ActionResponseModel;
    appName: string;
    appId: string;
    tags: string[];
    enabled?: boolean;
    logo?: string;
    description?: string;
}
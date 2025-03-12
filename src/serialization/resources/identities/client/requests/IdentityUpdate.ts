/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Letta from "../../../../../api/index";
import * as core from "../../../../../core";
import { IdentityType } from "../../../../types/IdentityType";
import { IdentityProperty } from "../../../../types/IdentityProperty";

export const IdentityUpdate: core.serialization.Schema<serializers.IdentityUpdate.Raw, Letta.IdentityUpdate> =
    core.serialization.object({
        identifierKey: core.serialization.property("identifier_key", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        identityType: core.serialization.property("identity_type", IdentityType.optional()),
        agentIds: core.serialization.property(
            "agent_ids",
            core.serialization.list(core.serialization.string()).optional(),
        ),
        blockIds: core.serialization.property(
            "block_ids",
            core.serialization.list(core.serialization.string()).optional(),
        ),
        properties: core.serialization.list(IdentityProperty).optional(),
    });

export declare namespace IdentityUpdate {
    export interface Raw {
        identifier_key?: string | null;
        name?: string | null;
        identity_type?: IdentityType.Raw | null;
        agent_ids?: string[] | null;
        block_ids?: string[] | null;
        properties?: IdentityProperty.Raw[] | null;
    }
}

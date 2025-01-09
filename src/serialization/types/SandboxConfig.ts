/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";
import { SandboxType } from "./SandboxType";

export const SandboxConfig: core.serialization.ObjectSchema<serializers.SandboxConfig.Raw, Letta.SandboxConfig> =
    core.serialization.object({
        createdById: core.serialization.property("created_by_id", core.serialization.string().optional()),
        lastUpdatedById: core.serialization.property("last_updated_by_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
        id: core.serialization.string().optional(),
        type: SandboxType.optional(),
        config: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace SandboxConfig {
    interface Raw {
        created_by_id?: string | null;
        last_updated_by_id?: string | null;
        created_at?: string | null;
        updated_at?: string | null;
        id?: string | null;
        type?: SandboxType.Raw | null;
        config?: Record<string, unknown> | null;
    }
}

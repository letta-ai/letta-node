/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const LocalSandboxConfig: core.serialization.ObjectSchema<
    serializers.LocalSandboxConfig.Raw,
    Letta.LocalSandboxConfig
> = core.serialization.object({
    sandboxDir: core.serialization.property("sandbox_dir", core.serialization.string()),
    useVenv: core.serialization.property("use_venv", core.serialization.boolean().optional()),
    venvName: core.serialization.property("venv_name", core.serialization.string().optional()),
});

export declare namespace LocalSandboxConfig {
    interface Raw {
        sandbox_dir: string;
        use_venv?: boolean | null;
        venv_name?: string | null;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Letta from "../../api/index";
import * as core from "../../core";

export const JobStatus: core.serialization.Schema<serializers.JobStatus.Raw, Letta.JobStatus> =
    core.serialization.enum_(["not_started", "created", "running", "completed", "failed", "pending", "cancelled"]);

export declare namespace JobStatus {
    export type Raw = "not_started" | "created" | "running" | "completed" | "failed" | "pending" | "cancelled";
}

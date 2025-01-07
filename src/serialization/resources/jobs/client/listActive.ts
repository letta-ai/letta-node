/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Letta from "../../../../api/index";
import * as core from "../../../../core";
import { Job } from "../../../types/Job";

export const Response: core.serialization.Schema<serializers.jobs.listActive.Response.Raw, Letta.Job[]> =
    core.serialization.list(Job);

export declare namespace Response {
    type Raw = Job.Raw[];
}

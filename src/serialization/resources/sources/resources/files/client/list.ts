/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Letta from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { FileMetadata } from "../../../../../types/FileMetadata";

export const Response: core.serialization.Schema<serializers.sources.files.list.Response.Raw, Letta.FileMetadata[]> =
    core.serialization.list(FileMetadata);

export declare namespace Response {
    export type Raw = FileMetadata.Raw[];
}

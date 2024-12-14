/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Representation of a single FileMetadata
 */
export interface FileMetadata {
    /** The human-friendly ID of the File */
    id?: string;
    /** The unique identifier of the organization associated with the document. */
    organization_id?: string;
    /** The unique identifier of the source associated with the document. */
    source_id: string;
    /** The name of the file. */
    file_name?: string;
    /** The path to the file. */
    file_path?: string;
    /** The type of the file (MIME type). */
    file_type?: string;
    /** The size of the file in bytes. */
    file_size?: number;
    /** The creation date of the file. */
    file_creation_date?: string;
    /** The last modified date of the file. */
    file_last_modified_date?: string;
    /** The creation date of the file. */
    created_at?: string;
    /** The update date of the file. */
    updated_at?: string;
    /** Whether this file is deleted or not. */
    is_deleted?: boolean;
}

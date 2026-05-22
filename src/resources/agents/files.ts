// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { NextFilesPage, type NextFilesPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Files extends APIResource {
  /**
   * Get the files attached to an agent with their open/closed status.
   */
  list(
    agentID: string,
    query: FileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FileListResponsesNextFilesPage, FileListResponse> {
    return this._client.getAPIList(path`/v1/agents/${agentID}/files`, NextFilesPage<FileListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Closes a specific file for a given agent.
   *
   * This endpoint marks a specific file as closed in the agent's file state. The
   * file will be removed from the agent's working memory view.
   */
  close(fileID: string, params: FileCloseParams, options?: RequestOptions): APIPromise<unknown> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/files/${fileID}/close`, options);
  }

  /**
   * Closes all currently open files for a given agent.
   *
   * This endpoint updates the file state for the agent so that no files are marked
   * as open. Typically used to reset the working memory view for the agent.
   */
  closeAll(agentID: string, options?: RequestOptions): APIPromise<FileCloseAllResponse> {
    return this._client.patch(path`/v1/agents/${agentID}/files/close-all`, options);
  }

  /**
   * Opens a specific file for a given agent.
   *
   * This endpoint marks a specific file as open in the agent's file state. The file
   * will be included in the agent's working memory view. Returns a list of file
   * names that were closed due to LRU eviction.
   */
  open(fileID: string, params: FileOpenParams, options?: RequestOptions): APIPromise<FileOpenResponse> {
    const { agent_id } = params;
    return this._client.patch(path`/v1/agents/${agent_id}/files/${fileID}/open`, options);
  }
}

export type FileListResponsesNextFilesPage = NextFilesPage<FileListResponse>;

/**
 * Response model for agent file attachments showing file status in agent context
 */
export interface FileListResponse {
  /**
   * Unique identifier of the file-agent relationship
   */
  id: string;

  /**
   * Unique identifier of the file
   */
  file_id: string;

  /**
   * Name of the file
   */
  file_name: string;

  /**
   * Unique identifier of the folder/source
   */
  folder_id: string;

  /**
   * Name of the folder/source
   */
  folder_name: string;

  /**
   * Whether the file is currently open in the agent's context
   */
  is_open: boolean;

  /**
   * Ending line number if file was opened with line range
   */
  end_line?: number | null;

  /**
   * Timestamp of last access by the agent
   */
  last_accessed_at?: string | null;

  /**
   * Starting line number if file was opened with line range
   */
  start_line?: number | null;

  /**
   * Portion of the file visible to the agent if open
   */
  visible_content?: string | null;
}

export type FileCloseResponse = unknown;

export type FileCloseAllResponse = Array<string>;

export type FileOpenResponse = Array<string>;

export interface FileListParams extends NextFilesPageParams {
  /**
   * @deprecated Pagination cursor from previous response (deprecated, use
   * before/after)
   */
  cursor?: string | null;

  /**
   * Filter by open status (true for open files, false for closed files)
   */
  is_open?: boolean | null;
}

export interface FileCloseParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export interface FileOpenParams {
  /**
   * The ID of the agent in the format 'agent-<uuid4>'
   */
  agent_id: string;
}

export declare namespace Files {
  export {
    type FileListResponse as FileListResponse,
    type FileCloseResponse as FileCloseResponse,
    type FileCloseAllResponse as FileCloseAllResponse,
    type FileOpenResponse as FileOpenResponse,
    type FileListResponsesNextFilesPage as FileListResponsesNextFilesPage,
    type FileListParams as FileListParams,
    type FileCloseParams as FileCloseParams,
    type FileOpenParams as FileOpenParams,
  };
}

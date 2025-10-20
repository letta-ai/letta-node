// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ToolsAPI from '../tools';
import * as AppsAPI from './apps';
import { AppListActionsResponse, AppListResponse, Apps } from './apps';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Composio extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);

  /**
   * Add a new Composio tool by action name (Composio refers to each tool as an
   * `Action`)
   */
  add(composioActionName: string, options?: RequestOptions): APIPromise<ToolsAPI.Tool> {
    return this._client.post(path`/v1/tools/composio/${composioActionName}`, options);
  }
}

Composio.Apps = Apps;

export declare namespace Composio {
  export {
    Apps as Apps,
    type AppListResponse as AppListResponse,
    type AppListActionsResponse as AppListActionsResponse,
  };
}

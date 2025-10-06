// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OAuthAPI from './oauth';
import { OAuth, OAuthCallbackParams, OAuthCallbackResponse } from './oauth';
import * as ServersAPI from './servers/servers';
import {
  McpServerType,
  ServerAddParams,
  ServerAddResponse,
  ServerConnectParams,
  ServerConnectResponse,
  ServerDeleteResponse,
  ServerListResponse,
  ServerRegisterToolParams,
  ServerResyncParams,
  ServerResyncResponse,
  ServerTestParams,
  ServerTestResponse,
  ServerUpdateParams,
  ServerUpdateResponse,
  Servers,
  SseServerConfig,
  StdioServerConfig,
  StreamableHTTPServerConfig,
} from './servers/servers';

export class Mcp extends APIResource {
  servers: ServersAPI.Servers = new ServersAPI.Servers(this._client);
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
}

Mcp.Servers = Servers;
Mcp.OAuth = OAuth;

export declare namespace Mcp {
  export {
    Servers as Servers,
    type McpServerType as McpServerType,
    type SseServerConfig as SseServerConfig,
    type StdioServerConfig as StdioServerConfig,
    type StreamableHTTPServerConfig as StreamableHTTPServerConfig,
    type ServerUpdateResponse as ServerUpdateResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerAddResponse as ServerAddResponse,
    type ServerConnectResponse as ServerConnectResponse,
    type ServerResyncResponse as ServerResyncResponse,
    type ServerTestResponse as ServerTestResponse,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerAddParams as ServerAddParams,
    type ServerConnectParams as ServerConnectParams,
    type ServerRegisterToolParams as ServerRegisterToolParams,
    type ServerResyncParams as ServerResyncParams,
    type ServerTestParams as ServerTestParams,
  };

  export {
    OAuth as OAuth,
    type OAuthCallbackResponse as OAuthCallbackResponse,
    type OAuthCallbackParams as OAuthCallbackParams,
  };
}

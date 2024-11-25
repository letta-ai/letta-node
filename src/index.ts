// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  BlockCreateParams,
  BlockListParams,
  BlockListResponse,
  BlockUpdateParams,
  Blocks,
} from './resources/blocks';
import { Health } from './resources/health';
import {
  Tool,
  ToolAddBaseToolsResponse,
  ToolCreateParams,
  ToolDeleteResponse,
  ToolListParams,
  ToolListResponse,
  ToolUpdateParams,
  Tools,
} from './resources/tools';
import { ToolsName, ToolsNameRetrieveResponse } from './resources/tools-name';
import {
  AgentCreateParams,
  AgentDeleteResponse,
  AgentListParams,
  AgentListResponse,
  AgentMigrateParams,
  AgentMigrateResponse,
  AgentState,
  AgentUpdateParams,
  AgentVersionTemplateParams,
  AgentVersionTemplateResponse,
  Agents,
  Agentstate,
  Archivalmemorysummary,
  Contextwindowoverview,
  Memory,
  Recallmemorysummary,
} from './resources/agents/agents';
import { JobListParams, JobListResponse, Jobs } from './resources/jobs/jobs';
import { Embeddingconfig, Llmconfig, ModelListResponse, Models } from './resources/models/models';
import {
  Source,
  SourceAttachParams,
  SourceCreateParams,
  SourceDeleteResponse,
  SourceDetachParams,
  SourceListResponse,
  SourceUpdateParams,
  SourceUploadParams,
  Sources,
} from './resources/sources/sources';

const environments = {
  production: 'https://app.letta.com',
  environment_1: 'http://localhost:8283',
};
type Environment = keyof typeof environments;
export interface ClientOptions {
  /**
   * Bearer token required for authentication
   */
  bearerToken?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://app.letta.com`
   * - `environment_1` corresponds to `http://localhost:8283`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['LETTA_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Letta API.
 */
export class Letta extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Letta API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['BEARER_TOKEN'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['LETTA_BASE_URL'] ?? https://app.letta.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('LETTA_BASE_URL'),
    bearerToken = Core.readEnv('BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.LettaError(
        "The BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Letta client with an bearerToken option, like new Letta({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.LettaError(
        'Ambiguous URL; The `baseURL` option (or LETTA_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  agents: API.Agents = new API.Agents(this);
  tools: API.Tools = new API.Tools(this);
  toolsName: API.ToolsName = new API.ToolsName(this);
  sources: API.Sources = new API.Sources(this);
  models: API.Models = new API.Models(this);
  blocks: API.Blocks = new API.Blocks(this);
  jobs: API.Jobs = new API.Jobs(this);
  health: API.Health = new API.Health(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Letta = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static LettaError = Errors.LettaError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Letta.Agents = Agents;
Letta.Tools = Tools;
Letta.ToolsName = ToolsName;
Letta.Sources = Sources;
Letta.Models = Models;
Letta.Blocks = Blocks;
Letta.Jobs = Jobs;
export declare namespace Letta {
  export type RequestOptions = Core.RequestOptions;

  export {
    Agents as Agents,
    type Agentstate as Agentstate,
    type AgentState as AgentState,
    type Archivalmemorysummary as Archivalmemorysummary,
    type Contextwindowoverview as Contextwindowoverview,
    type Memory as Memory,
    type Recallmemorysummary as Recallmemorysummary,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentMigrateResponse as AgentMigrateResponse,
    type AgentVersionTemplateResponse as AgentVersionTemplateResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentMigrateParams as AgentMigrateParams,
    type AgentVersionTemplateParams as AgentVersionTemplateParams,
  };

  export {
    Tools as Tools,
    type Tool as Tool,
    type ToolListResponse as ToolListResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolAddBaseToolsResponse as ToolAddBaseToolsResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
  };

  export { ToolsName as ToolsName, type ToolsNameRetrieveResponse as ToolsNameRetrieveResponse };

  export {
    Sources as Sources,
    type Source as Source,
    type SourceListResponse as SourceListResponse,
    type SourceDeleteResponse as SourceDeleteResponse,
    type SourceCreateParams as SourceCreateParams,
    type SourceUpdateParams as SourceUpdateParams,
    type SourceAttachParams as SourceAttachParams,
    type SourceDetachParams as SourceDetachParams,
    type SourceUploadParams as SourceUploadParams,
  };

  export {
    Models as Models,
    type Embeddingconfig as Embeddingconfig,
    type Llmconfig as Llmconfig,
    type ModelListResponse as ModelListResponse,
  };

  export {
    Blocks as Blocks,
    type Block as Block,
    type BlockListResponse as BlockListResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockListParams as BlockListParams,
  };

  export { Jobs as Jobs, type JobListResponse as JobListResponse, type JobListParams as JobListParams };

  export { type Health as Health };

  export type Block = API.Block;
  export type Job = API.Job;
}

export { toFile, fileFromPath } from './uploads';
export {
  LettaError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Letta;

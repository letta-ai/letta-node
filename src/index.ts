// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Block,
  BlockCreateParams,
  BlockDeleteParams,
  BlockListParams,
  BlockListResponse,
  BlockRetrieveParams,
  BlockUpdateParams,
  Blocks,
} from './resources/blocks';
import { Health } from './resources/health';
import { JobActiveParams, JobActiveResponse, JobListParams, JobListResponse, Jobs } from './resources/jobs';
import {
  EmbeddingConfig,
  LlmConfig,
  ModelEmbeddingResponse,
  ModelListResponse,
  Models,
} from './resources/models';
import {
  Tool,
  ToolAddBaseToolsParams,
  ToolAddBaseToolsResponse,
  ToolCreateParams,
  ToolDeleteResponse,
  ToolListParams,
  ToolListResponse,
  ToolRetrieveByNameParams,
  ToolRetrieveByNameResponse,
  ToolRetrieveParams,
  ToolUpdateParams,
  Tools,
} from './resources/tools';
import {
  AgentCreateParams,
  AgentDeleteParams,
  AgentDeleteResponse,
  AgentListParams,
  AgentListResponse,
  AgentMigrateParams,
  AgentMigrateResponse,
  AgentRetrieveParams,
  AgentState,
  AgentUpdateParams,
  Agents,
  Memory,
} from './resources/agents/agents';
import {
  Source,
  SourceAttachParams,
  SourceCreateParams,
  SourceDeleteParams,
  SourceDeleteResponse,
  SourceDetachParams,
  SourceListParams,
  SourceListResponse,
  SourceRetrieveParams,
  SourceRetrieveResponse,
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
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Letta API.
   *
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['LETTA_BASE_URL'] ?? https://app.letta.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('LETTA_BASE_URL'), ...opts }: ClientOptions = {}) {
    const options: ClientOptions = {
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
  }

  tools: API.Tools = new API.Tools(this);
  sources: API.Sources = new API.Sources(this);
  agents: API.Agents = new API.Agents(this);
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

Letta.Tools = Tools;
Letta.Sources = Sources;
Letta.Agents = Agents;
Letta.Models = Models;
Letta.Blocks = Blocks;
Letta.Jobs = Jobs;
export declare namespace Letta {
  export type RequestOptions = Core.RequestOptions;

  export {
    Tools as Tools,
    type Tool as Tool,
    type ToolListResponse as ToolListResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolAddBaseToolsResponse as ToolAddBaseToolsResponse,
    type ToolRetrieveByNameResponse as ToolRetrieveByNameResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolRetrieveParams as ToolRetrieveParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolAddBaseToolsParams as ToolAddBaseToolsParams,
    type ToolRetrieveByNameParams as ToolRetrieveByNameParams,
  };

  export {
    Sources as Sources,
    type Source as Source,
    type SourceRetrieveResponse as SourceRetrieveResponse,
    type SourceListResponse as SourceListResponse,
    type SourceDeleteResponse as SourceDeleteResponse,
    type SourceCreateParams as SourceCreateParams,
    type SourceRetrieveParams as SourceRetrieveParams,
    type SourceUpdateParams as SourceUpdateParams,
    type SourceListParams as SourceListParams,
    type SourceDeleteParams as SourceDeleteParams,
    type SourceAttachParams as SourceAttachParams,
    type SourceDetachParams as SourceDetachParams,
    type SourceUploadParams as SourceUploadParams,
  };

  export {
    Agents as Agents,
    type AgentState as AgentState,
    type Memory as Memory,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentMigrateResponse as AgentMigrateResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentDeleteParams as AgentDeleteParams,
    type AgentMigrateParams as AgentMigrateParams,
  };

  export {
    Models as Models,
    type EmbeddingConfig as EmbeddingConfig,
    type LlmConfig as LlmConfig,
    type ModelListResponse as ModelListResponse,
    type ModelEmbeddingResponse as ModelEmbeddingResponse,
  };

  export {
    Blocks as Blocks,
    type Block as Block,
    type BlockListResponse as BlockListResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockRetrieveParams as BlockRetrieveParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockListParams as BlockListParams,
    type BlockDeleteParams as BlockDeleteParams,
  };

  export {
    Jobs as Jobs,
    type JobListResponse as JobListResponse,
    type JobActiveResponse as JobActiveResponse,
    type JobListParams as JobListParams,
    type JobActiveParams as JobActiveParams,
  };

  export { type Health as Health };

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

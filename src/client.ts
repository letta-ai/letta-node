// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  Archive,
  ArchiveRetrieveParams,
  ArchiveRetrieveResponse,
  ArchiveUpdateParams,
  Archives,
  VectorDBProvider,
} from './resources/archives';
import {
  BlockCountResponse,
  BlockCreateParams,
  BlockDeleteResponse,
  BlockListAgentsParams,
  BlockListAgentsResponse,
  BlockListParams,
  BlockListResponse,
  BlockUpdateParams,
  Blocks,
  CreateBlock,
} from './resources/blocks';
import {
  ClientSideAccessTokenCreateParams,
  ClientSideAccessTokenCreateResponse,
  ClientSideAccessTokenDeleteParams,
  ClientSideAccessTokenDeleteResponse,
  ClientSideAccessTokenListParams,
  ClientSideAccessTokenListResponse,
  ClientSideAccessTokens,
} from './resources/client-side-access-tokens';
import {
  EmbeddingGetTotalStorageSizeParams,
  EmbeddingGetTotalStorageSizeResponse,
  Embeddings,
} from './resources/embeddings';
import {
  Folder,
  FolderCountResponse,
  FolderCreateParams,
  FolderDeleteFileParams,
  FolderDeleteResponse,
  FolderGetByNameResponse,
  FolderListAgentsParams,
  FolderListAgentsResponse,
  FolderListFilesParams,
  FolderListFilesResponse,
  FolderListParams,
  FolderListPassagesParams,
  FolderListPassagesResponse,
  FolderListResponse,
  FolderRetrieveMetadataParams,
  FolderUpdateParams,
  FolderUploadFileParams,
  Folders,
} from './resources/folders';
import { Health, HealthCheckResponse } from './resources/health';
import {
  Identities,
  Identity,
  IdentityCountResponse,
  IdentityCreateParams,
  IdentityDeleteResponse,
  IdentityListAgentsParams,
  IdentityListAgentsResponse,
  IdentityListBlocksParams,
  IdentityListBlocksResponse,
  IdentityListParams,
  IdentityListResponse,
  IdentityModifyParams,
  IdentityProperty,
  IdentityType,
  IdentityUpsertParams,
  IdentityUpsertPropertiesParams,
  IdentityUpsertPropertiesResponse,
} from './resources/identities';
import {
  Job,
  JobListActiveParams,
  JobListActiveResponse,
  JobListParams,
  JobListResponse,
  Jobs,
} from './resources/jobs';
import {
  EmbeddingConfig,
  LlmConfig,
  ModelListEmbeddingResponse,
  ModelListParams,
  ModelListResponse,
  Models,
  ProviderCategory,
  ProviderType,
} from './resources/models';
import { ProjectListParams, ProjectListResponse, Projects } from './resources/projects';
import {
  Provider,
  ProviderCheckParams,
  ProviderCheckResponse,
  ProviderCreateParams,
  ProviderDeleteResponse,
  ProviderListParams,
  ProviderListResponse,
  ProviderUpdateParams,
  Providers,
} from './resources/providers';
import {
  RunListActiveParams,
  RunListActiveResponse,
  RunListMessagesParams,
  RunListMessagesResponse,
  RunListParams,
  RunListResponse,
  RunListStepsParams,
  RunListStepsResponse,
  RunRetrieveStreamParams,
  RunRetrieveStreamResponse,
  RunRetrieveUsageResponse,
  Runs,
  StopReasonType,
} from './resources/runs';
import {
  ProviderTrace,
  Step,
  StepListMessagesParams,
  StepListMessagesResponse,
  StepListParams,
  StepListResponse,
  StepRetrieveMetricsResponse,
  StepUpdateFeedbackParams,
  Steps,
} from './resources/steps';
import { TagListParams, TagListResponse, Tags } from './resources/tags';
import { Telemetry } from './resources/telemetry';
import {
  TemplateCreateAgentsParams,
  TemplateCreateAgentsResponse,
  TemplateCreateParams,
  TemplateCreateResponse,
  TemplateDeleteParams,
  TemplateDeleteResponse,
  TemplateForkParams,
  TemplateForkResponse,
  TemplateGetSnapshotParams,
  TemplateGetSnapshotResponse,
  TemplateListParams,
  TemplateListResponse,
  TemplateListVersionsParams,
  TemplateListVersionsResponse,
  TemplateRenameParams,
  TemplateRenameResponse,
  TemplateSaveVersionParams,
  TemplateSaveVersionResponse,
  TemplateUpdateDescriptionParams,
  TemplateUpdateDescriptionResponse,
  Templates,
} from './resources/templates';
import {
  InternalTemplateCreateAgentParams,
  InternalTemplateCreateBlockParams,
  InternalTemplateCreateGroupParams,
  _InternalTemplates,
} from './resources/-internal-templates/-internal-templates';
import {
  AgentCountResponse,
  AgentCreateParams,
  AgentDeleteResponse,
  AgentEnvironmentVariable,
  AgentExportParams,
  AgentExportResponse,
  AgentImportParams,
  AgentImportResponse,
  AgentListGroupsParams,
  AgentListGroupsResponse,
  AgentListParams,
  AgentListResponse,
  AgentMigrateParams,
  AgentMigrateResponse,
  AgentResetMessagesParams,
  AgentRetrieveContextResponse,
  AgentRetrieveParams,
  AgentSearchParams,
  AgentSearchResponse,
  AgentState,
  AgentSummarizeParams,
  AgentType,
  AgentUpdateParams,
  Agents,
  ChildToolRule,
  ConditionalToolRule,
  ContinueToolRule,
  InitToolRule,
  JsonObjectResponseFormat,
  JsonSchemaResponseFormat,
  LettaMessageContentUnion,
  MaxCountPerStepToolRule,
  MessageCreate,
  ParentToolRule,
  RequiredBeforeExitToolRule,
  RequiresApprovalToolRule,
  TerminalToolRule,
  TextResponseFormat,
} from './resources/agents/agents';
import {
  DynamicManager,
  Group,
  GroupCountResponse,
  GroupCreateParams,
  GroupDeleteResponse,
  GroupListParams,
  GroupListResponse,
  GroupResetMessagesResponse,
  GroupUpdateParams,
  Groups,
  ManagerType,
  RoundRobinManager,
  SleeptimeManager,
  SupervisorManager,
  VoiceSleeptimeManager,
} from './resources/groups/groups';
import { Messages } from './resources/messages/messages';
import {
  DuplicateFileHandling,
  FileMetadata,
  FileProcessingStatus,
  OrganizationSourcesStats,
  Passage,
  Source,
  SourceCountResponse,
  SourceCreate,
  SourceCreateParams,
  SourceDeleteFileParams,
  SourceDeleteResponse,
  SourceGetAgentsResponse,
  SourceGetByNameResponse,
  SourceGetMetadataParams,
  SourceListPassagesParams,
  SourceListPassagesResponse,
  SourceListResponse,
  SourceUpdate,
  SourceUpdateParams,
  SourceUploadFileParams,
  Sources,
} from './resources/sources/sources';
import {
  NpmRequirement,
  PipRequirement,
  Tool,
  ToolCountParams,
  ToolCountResponse,
  ToolCreate,
  ToolCreateParams,
  ToolDeleteResponse,
  ToolListParams,
  ToolListResponse,
  ToolModifyParams,
  ToolReturnMessage,
  ToolRunParams,
  ToolType,
  ToolUpsertBaseResponse,
  ToolUpsertParams,
  Tools,
} from './resources/tools/tools';
import { VoiceBeta } from './resources/voice-beta/voice-beta';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

const environments = {
  production: 'https://app.letta.com',
  environment_1: 'http://localhost:8283',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['LETTA_SDK_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://app.letta.com`
   * - `environment_1` corresponds to `http://localhost:8283`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['LETTA_SDK_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['LETTA_SDK_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Letta SDK API.
 */
export class LettaSDK {
  apiKey: string;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Letta SDK API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['LETTA_SDK_API_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['LETTA_SDK_BASE_URL'] ?? https://app.letta.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('LETTA_SDK_BASE_URL'),
    apiKey = readEnv('LETTA_SDK_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.LettaSDKError(
        "The LETTA_SDK_API_KEY environment variable is missing or empty; either provide it, or instantiate the LettaSDK client with an apiKey option, like new LettaSDK({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.LettaSDKError(
        'Ambiguous URL; The `baseURL` option (or LETTA_SDK_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    this.baseURL = options.baseURL || environments[options.environment || 'production'];
    this.timeout = options.timeout ?? LettaSDK.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('LETTA_SDK_LOG'), "process.env['LETTA_SDK_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.apiKey = apiKey;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      environment: options.environment ? options.environment : undefined,
      baseURL: options.environment ? undefined : this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      apiKey: this.apiKey,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([{ Authorization: `Bearer ${this.apiKey}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static LettaSDK = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static LettaSDKError = Errors.LettaSDKError;
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

  archives: API.Archives = new API.Archives(this);
  tools: API.Tools = new API.Tools(this);
  sources: API.Sources = new API.Sources(this);
  folders: API.Folders = new API.Folders(this);
  agents: API.Agents = new API.Agents(this);
  groups: API.Groups = new API.Groups(this);
  identities: API.Identities = new API.Identities(this);
  _internalTemplates: API._InternalTemplates = new API._InternalTemplates(this);
  models: API.Models = new API.Models(this);
  blocks: API.Blocks = new API.Blocks(this);
  jobs: API.Jobs = new API.Jobs(this);
  health: API.Health = new API.Health(this);
  providers: API.Providers = new API.Providers(this);
  runs: API.Runs = new API.Runs(this);
  steps: API.Steps = new API.Steps(this);
  tags: API.Tags = new API.Tags(this);
  telemetry: API.Telemetry = new API.Telemetry(this);
  messages: API.Messages = new API.Messages(this);
  voiceBeta: API.VoiceBeta = new API.VoiceBeta(this);
  embeddings: API.Embeddings = new API.Embeddings(this);
  templates: API.Templates = new API.Templates(this);
  clientSideAccessTokens: API.ClientSideAccessTokens = new API.ClientSideAccessTokens(this);
  projects: API.Projects = new API.Projects(this);
}

LettaSDK.Archives = Archives;
LettaSDK.Tools = Tools;
LettaSDK.Sources = Sources;
LettaSDK.Folders = Folders;
LettaSDK.Agents = Agents;
LettaSDK.Groups = Groups;
LettaSDK.Identities = Identities;
LettaSDK._InternalTemplates = _InternalTemplates;
LettaSDK.Models = Models;
LettaSDK.Blocks = Blocks;
LettaSDK.Jobs = Jobs;
LettaSDK.Health = Health;
LettaSDK.Providers = Providers;
LettaSDK.Runs = Runs;
LettaSDK.Steps = Steps;
LettaSDK.Tags = Tags;
LettaSDK.Telemetry = Telemetry;
LettaSDK.Messages = Messages;
LettaSDK.VoiceBeta = VoiceBeta;
LettaSDK.Embeddings = Embeddings;
LettaSDK.Templates = Templates;
LettaSDK.ClientSideAccessTokens = ClientSideAccessTokens;
LettaSDK.Projects = Projects;

export declare namespace LettaSDK {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Archives as Archives,
    type Archive as Archive,
    type VectorDBProvider as VectorDBProvider,
    type ArchiveRetrieveResponse as ArchiveRetrieveResponse,
    type ArchiveUpdateParams as ArchiveUpdateParams,
    type ArchiveRetrieveParams as ArchiveRetrieveParams,
  };

  export {
    Tools as Tools,
    type NpmRequirement as NpmRequirement,
    type PipRequirement as PipRequirement,
    type Tool as Tool,
    type ToolCreate as ToolCreate,
    type ToolReturnMessage as ToolReturnMessage,
    type ToolType as ToolType,
    type ToolListResponse as ToolListResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolCountResponse as ToolCountResponse,
    type ToolUpsertBaseResponse as ToolUpsertBaseResponse,
    type ToolCreateParams as ToolCreateParams,
    type ToolListParams as ToolListParams,
    type ToolCountParams as ToolCountParams,
    type ToolModifyParams as ToolModifyParams,
    type ToolRunParams as ToolRunParams,
    type ToolUpsertParams as ToolUpsertParams,
  };

  export {
    Sources as Sources,
    type DuplicateFileHandling as DuplicateFileHandling,
    type FileMetadata as FileMetadata,
    type FileProcessingStatus as FileProcessingStatus,
    type OrganizationSourcesStats as OrganizationSourcesStats,
    type Passage as Passage,
    type Source as Source,
    type SourceCreate as SourceCreate,
    type SourceUpdate as SourceUpdate,
    type SourceListResponse as SourceListResponse,
    type SourceDeleteResponse as SourceDeleteResponse,
    type SourceCountResponse as SourceCountResponse,
    type SourceGetAgentsResponse as SourceGetAgentsResponse,
    type SourceGetByNameResponse as SourceGetByNameResponse,
    type SourceListPassagesResponse as SourceListPassagesResponse,
    type SourceCreateParams as SourceCreateParams,
    type SourceUpdateParams as SourceUpdateParams,
    type SourceDeleteFileParams as SourceDeleteFileParams,
    type SourceGetMetadataParams as SourceGetMetadataParams,
    type SourceListPassagesParams as SourceListPassagesParams,
    type SourceUploadFileParams as SourceUploadFileParams,
  };

  export {
    Folders as Folders,
    type Folder as Folder,
    type FolderListResponse as FolderListResponse,
    type FolderDeleteResponse as FolderDeleteResponse,
    type FolderCountResponse as FolderCountResponse,
    type FolderGetByNameResponse as FolderGetByNameResponse,
    type FolderListAgentsResponse as FolderListAgentsResponse,
    type FolderListFilesResponse as FolderListFilesResponse,
    type FolderListPassagesResponse as FolderListPassagesResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderUpdateParams as FolderUpdateParams,
    type FolderListParams as FolderListParams,
    type FolderDeleteFileParams as FolderDeleteFileParams,
    type FolderListAgentsParams as FolderListAgentsParams,
    type FolderListFilesParams as FolderListFilesParams,
    type FolderListPassagesParams as FolderListPassagesParams,
    type FolderRetrieveMetadataParams as FolderRetrieveMetadataParams,
    type FolderUploadFileParams as FolderUploadFileParams,
  };

  export {
    Agents as Agents,
    type AgentEnvironmentVariable as AgentEnvironmentVariable,
    type AgentState as AgentState,
    type AgentType as AgentType,
    type ChildToolRule as ChildToolRule,
    type ConditionalToolRule as ConditionalToolRule,
    type ContinueToolRule as ContinueToolRule,
    type InitToolRule as InitToolRule,
    type JsonObjectResponseFormat as JsonObjectResponseFormat,
    type JsonSchemaResponseFormat as JsonSchemaResponseFormat,
    type LettaMessageContentUnion as LettaMessageContentUnion,
    type MaxCountPerStepToolRule as MaxCountPerStepToolRule,
    type MessageCreate as MessageCreate,
    type ParentToolRule as ParentToolRule,
    type RequiredBeforeExitToolRule as RequiredBeforeExitToolRule,
    type RequiresApprovalToolRule as RequiresApprovalToolRule,
    type TerminalToolRule as TerminalToolRule,
    type TextResponseFormat as TextResponseFormat,
    type AgentListResponse as AgentListResponse,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentCountResponse as AgentCountResponse,
    type AgentExportResponse as AgentExportResponse,
    type AgentImportResponse as AgentImportResponse,
    type AgentListGroupsResponse as AgentListGroupsResponse,
    type AgentMigrateResponse as AgentMigrateResponse,
    type AgentRetrieveContextResponse as AgentRetrieveContextResponse,
    type AgentSearchResponse as AgentSearchResponse,
    type AgentCreateParams as AgentCreateParams,
    type AgentRetrieveParams as AgentRetrieveParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentExportParams as AgentExportParams,
    type AgentImportParams as AgentImportParams,
    type AgentListGroupsParams as AgentListGroupsParams,
    type AgentMigrateParams as AgentMigrateParams,
    type AgentResetMessagesParams as AgentResetMessagesParams,
    type AgentSearchParams as AgentSearchParams,
    type AgentSummarizeParams as AgentSummarizeParams,
  };

  export {
    Groups as Groups,
    type DynamicManager as DynamicManager,
    type Group as Group,
    type ManagerType as ManagerType,
    type RoundRobinManager as RoundRobinManager,
    type SleeptimeManager as SleeptimeManager,
    type SupervisorManager as SupervisorManager,
    type VoiceSleeptimeManager as VoiceSleeptimeManager,
    type GroupListResponse as GroupListResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupCountResponse as GroupCountResponse,
    type GroupResetMessagesResponse as GroupResetMessagesResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };

  export {
    Identities as Identities,
    type Identity as Identity,
    type IdentityProperty as IdentityProperty,
    type IdentityType as IdentityType,
    type IdentityListResponse as IdentityListResponse,
    type IdentityDeleteResponse as IdentityDeleteResponse,
    type IdentityCountResponse as IdentityCountResponse,
    type IdentityListAgentsResponse as IdentityListAgentsResponse,
    type IdentityListBlocksResponse as IdentityListBlocksResponse,
    type IdentityUpsertPropertiesResponse as IdentityUpsertPropertiesResponse,
    type IdentityCreateParams as IdentityCreateParams,
    type IdentityListParams as IdentityListParams,
    type IdentityListAgentsParams as IdentityListAgentsParams,
    type IdentityListBlocksParams as IdentityListBlocksParams,
    type IdentityModifyParams as IdentityModifyParams,
    type IdentityUpsertParams as IdentityUpsertParams,
    type IdentityUpsertPropertiesParams as IdentityUpsertPropertiesParams,
  };

  export {
    _InternalTemplates as _InternalTemplates,
    type InternalTemplateCreateAgentParams as InternalTemplateCreateAgentParams,
    type InternalTemplateCreateBlockParams as InternalTemplateCreateBlockParams,
    type InternalTemplateCreateGroupParams as InternalTemplateCreateGroupParams,
  };

  export {
    Models as Models,
    type EmbeddingConfig as EmbeddingConfig,
    type LlmConfig as LlmConfig,
    type ProviderCategory as ProviderCategory,
    type ProviderType as ProviderType,
    type ModelListResponse as ModelListResponse,
    type ModelListEmbeddingResponse as ModelListEmbeddingResponse,
    type ModelListParams as ModelListParams,
  };

  export {
    Blocks as Blocks,
    type CreateBlock as CreateBlock,
    type BlockListResponse as BlockListResponse,
    type BlockDeleteResponse as BlockDeleteResponse,
    type BlockCountResponse as BlockCountResponse,
    type BlockListAgentsResponse as BlockListAgentsResponse,
    type BlockCreateParams as BlockCreateParams,
    type BlockUpdateParams as BlockUpdateParams,
    type BlockListParams as BlockListParams,
    type BlockListAgentsParams as BlockListAgentsParams,
  };

  export {
    Jobs as Jobs,
    type Job as Job,
    type JobListResponse as JobListResponse,
    type JobListActiveResponse as JobListActiveResponse,
    type JobListParams as JobListParams,
    type JobListActiveParams as JobListActiveParams,
  };

  export { Health as Health, type HealthCheckResponse as HealthCheckResponse };

  export {
    Providers as Providers,
    type Provider as Provider,
    type ProviderListResponse as ProviderListResponse,
    type ProviderDeleteResponse as ProviderDeleteResponse,
    type ProviderCheckResponse as ProviderCheckResponse,
    type ProviderCreateParams as ProviderCreateParams,
    type ProviderUpdateParams as ProviderUpdateParams,
    type ProviderListParams as ProviderListParams,
    type ProviderCheckParams as ProviderCheckParams,
  };

  export {
    Runs as Runs,
    type StopReasonType as StopReasonType,
    type RunListResponse as RunListResponse,
    type RunListActiveResponse as RunListActiveResponse,
    type RunListMessagesResponse as RunListMessagesResponse,
    type RunListStepsResponse as RunListStepsResponse,
    type RunRetrieveStreamResponse as RunRetrieveStreamResponse,
    type RunRetrieveUsageResponse as RunRetrieveUsageResponse,
    type RunListParams as RunListParams,
    type RunListActiveParams as RunListActiveParams,
    type RunListMessagesParams as RunListMessagesParams,
    type RunListStepsParams as RunListStepsParams,
    type RunRetrieveStreamParams as RunRetrieveStreamParams,
  };

  export {
    Steps as Steps,
    type ProviderTrace as ProviderTrace,
    type Step as Step,
    type StepListResponse as StepListResponse,
    type StepListMessagesResponse as StepListMessagesResponse,
    type StepRetrieveMetricsResponse as StepRetrieveMetricsResponse,
    type StepListParams as StepListParams,
    type StepListMessagesParams as StepListMessagesParams,
    type StepUpdateFeedbackParams as StepUpdateFeedbackParams,
  };

  export { Tags as Tags, type TagListResponse as TagListResponse, type TagListParams as TagListParams };

  export { Telemetry as Telemetry };

  export { Messages as Messages };

  export { VoiceBeta as VoiceBeta };

  export {
    Embeddings as Embeddings,
    type EmbeddingGetTotalStorageSizeResponse as EmbeddingGetTotalStorageSizeResponse,
    type EmbeddingGetTotalStorageSizeParams as EmbeddingGetTotalStorageSizeParams,
  };

  export {
    Templates as Templates,
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateListResponse as TemplateListResponse,
    type TemplateDeleteResponse as TemplateDeleteResponse,
    type TemplateCreateAgentsResponse as TemplateCreateAgentsResponse,
    type TemplateForkResponse as TemplateForkResponse,
    type TemplateGetSnapshotResponse as TemplateGetSnapshotResponse,
    type TemplateListVersionsResponse as TemplateListVersionsResponse,
    type TemplateRenameResponse as TemplateRenameResponse,
    type TemplateSaveVersionResponse as TemplateSaveVersionResponse,
    type TemplateUpdateDescriptionResponse as TemplateUpdateDescriptionResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateListParams as TemplateListParams,
    type TemplateDeleteParams as TemplateDeleteParams,
    type TemplateCreateAgentsParams as TemplateCreateAgentsParams,
    type TemplateForkParams as TemplateForkParams,
    type TemplateGetSnapshotParams as TemplateGetSnapshotParams,
    type TemplateListVersionsParams as TemplateListVersionsParams,
    type TemplateRenameParams as TemplateRenameParams,
    type TemplateSaveVersionParams as TemplateSaveVersionParams,
    type TemplateUpdateDescriptionParams as TemplateUpdateDescriptionParams,
  };

  export {
    ClientSideAccessTokens as ClientSideAccessTokens,
    type ClientSideAccessTokenCreateResponse as ClientSideAccessTokenCreateResponse,
    type ClientSideAccessTokenListResponse as ClientSideAccessTokenListResponse,
    type ClientSideAccessTokenDeleteResponse as ClientSideAccessTokenDeleteResponse,
    type ClientSideAccessTokenCreateParams as ClientSideAccessTokenCreateParams,
    type ClientSideAccessTokenListParams as ClientSideAccessTokenListParams,
    type ClientSideAccessTokenDeleteParams as ClientSideAccessTokenDeleteParams,
  };

  export {
    Projects as Projects,
    type ProjectListResponse as ProjectListResponse,
    type ProjectListParams as ProjectListParams,
  };
}

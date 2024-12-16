/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Letta from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Tools {
    interface Options {
        environment?: core.Supplier<environments.LettaEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Tools {
    constructor(protected readonly _options: Tools.Options) {}

    /**
     * Get a tool by ID
     *
     * @param {string} toolId
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.get("tool_id")
     */
    public async get(toolId: string, requestOptions?: Tools.RequestOptions): Promise<Letta.LettaSchemasToolTool> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                `v1/tools/${encodeURIComponent(toolId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "letta",
                "X-Fern-SDK-Version": "0.6.0-beta2",
                "User-Agent": "letta/0.6.0-beta2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Letta.LettaSchemasToolTool;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(_response.error.body as Letta.HttpValidationError);
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/tools/{tool_id}.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a tool by name
     *
     * @param {string} toolId
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.delete("tool_id")
     */
    public async delete(toolId: string, requestOptions?: Tools.RequestOptions): Promise<unknown> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                `v1/tools/${encodeURIComponent(toolId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "letta",
                "X-Fern-SDK-Version": "0.6.0-beta2",
                "User-Agent": "letta/0.6.0-beta2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(_response.error.body as Letta.HttpValidationError);
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling DELETE /v1/tools/{tool_id}.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update an existing tool
     *
     * @param {string} toolId
     * @param {Letta.ToolUpdate} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.update("tool_id")
     */
    public async update(
        toolId: string,
        request: Letta.ToolUpdate = {},
        requestOptions?: Tools.RequestOptions
    ): Promise<Letta.LettaSchemasToolTool> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                `v1/tools/${encodeURIComponent(toolId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "letta",
                "X-Fern-SDK-Version": "0.6.0-beta2",
                "User-Agent": "letta/0.6.0-beta2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Letta.LettaSchemasToolTool;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(_response.error.body as Letta.HttpValidationError);
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling PATCH /v1/tools/{tool_id}.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a tool ID by name
     *
     * @param {string} toolName
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.getIdByName("tool_name")
     */
    public async getIdByName(toolName: string, requestOptions?: Tools.RequestOptions): Promise<string> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                `v1/tools/name/${encodeURIComponent(toolName)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "letta",
                "X-Fern-SDK-Version": "0.6.0-beta2",
                "User-Agent": "letta/0.6.0-beta2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as string;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(_response.error.body as Letta.HttpValidationError);
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/tools/name/{tool_name}.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get a list of all tools available to agents belonging to the org of the user
     *
     * @param {Letta.ToolsListRequest} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.list()
     */
    public async list(
        request: Letta.ToolsListRequest = {},
        requestOptions?: Tools.RequestOptions
    ): Promise<Letta.LettaSchemasToolTool[]> {
        const { cursor, limit } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (cursor != null) {
            _queryParams["cursor"] = cursor;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                "v1/tools/"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "letta",
                "X-Fern-SDK-Version": "0.6.0-beta2",
                "User-Agent": "letta/0.6.0-beta2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Letta.LettaSchemasToolTool[];
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(_response.error.body as Letta.HttpValidationError);
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/tools/.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new tool
     *
     * @param {Letta.ToolCreate} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.create({
     *         source_code: "source_code"
     *     })
     */
    public async create(
        request: Letta.ToolCreate,
        requestOptions?: Tools.RequestOptions
    ): Promise<Letta.LettaSchemasToolTool> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                "v1/tools/"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "letta",
                "X-Fern-SDK-Version": "0.6.0-beta2",
                "User-Agent": "letta/0.6.0-beta2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Letta.LettaSchemasToolTool;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(_response.error.body as Letta.HttpValidationError);
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling POST /v1/tools/.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create or update a tool
     *
     * @param {Letta.ToolCreate} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.upsert({
     *         source_code: "source_code"
     *     })
     */
    public async upsert(
        request: Letta.ToolCreate,
        requestOptions?: Tools.RequestOptions
    ): Promise<Letta.LettaSchemasToolTool> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                "v1/tools/"
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "letta",
                "X-Fern-SDK-Version": "0.6.0-beta2",
                "User-Agent": "letta/0.6.0-beta2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Letta.LettaSchemasToolTool;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(_response.error.body as Letta.HttpValidationError);
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling PUT /v1/tools/.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Add base tools
     *
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.addBases()
     */
    public async addBases(requestOptions?: Tools.RequestOptions): Promise<Letta.LettaSchemasToolTool[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                "v1/tools/add-base-tools"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "letta",
                "X-Fern-SDK-Version": "0.6.0-beta2",
                "User-Agent": "letta/0.6.0-beta2",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Letta.LettaSchemasToolTool[];
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(_response.error.body as Letta.HttpValidationError);
                default:
                    throw new errors.LettaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError("Timeout exceeded when calling POST /v1/tools/add-base-tools.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Letta from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Blocks {
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

export class Blocks {
    constructor(protected readonly _options: Blocks.Options) {}

    /**
     * @param {Letta.BlocksListRequest} request
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.blocks.list()
     */
    public async list(
        request: Letta.BlocksListRequest = {},
        requestOptions?: Blocks.RequestOptions
    ): Promise<Letta.Block[]> {
        const { label, templates_only: templatesOnly, name } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (label != null) {
            _queryParams["label"] = label;
        }

        if (templatesOnly != null) {
            _queryParams["templates_only"] = templatesOnly.toString();
        }

        if (name != null) {
            _queryParams["name"] = name;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaCloud,
                "v1/blocks/"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "@letta-ai/letta-client/0.1.2",
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
            return _response.body as Letta.Block[];
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/blocks/.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Letta.CreateBlock} request
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.blocks.create({
     *         value: "value",
     *         label: "label"
     *     })
     */
    public async create(request: Letta.CreateBlock, requestOptions?: Blocks.RequestOptions): Promise<Letta.Block> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaCloud,
                "v1/blocks/"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "@letta-ai/letta-client/0.1.2",
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
            return _response.body as Letta.Block;
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling POST /v1/blocks/.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} blockId
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.blocks.get("block_id")
     */
    public async get(blockId: string, requestOptions?: Blocks.RequestOptions): Promise<Letta.Block> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaCloud,
                `v1/blocks/${encodeURIComponent(blockId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "@letta-ai/letta-client/0.1.2",
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
            return _response.body as Letta.Block;
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/blocks/{block_id}.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} blockId
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.blocks.delete("block_id")
     */
    public async delete(blockId: string, requestOptions?: Blocks.RequestOptions): Promise<Letta.Block> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaCloud,
                `v1/blocks/${encodeURIComponent(blockId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "@letta-ai/letta-client/0.1.2",
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
            return _response.body as Letta.Block;
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling DELETE /v1/blocks/{block_id}.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} blockId
     * @param {Letta.BlockUpdate} request
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.blocks.update("block_id", {})
     */
    public async update(
        blockId: string,
        request: Letta.BlockUpdate,
        requestOptions?: Blocks.RequestOptions
    ): Promise<Letta.Block> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaCloud,
                `v1/blocks/${encodeURIComponent(blockId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "@letta-ai/letta-client/0.1.2",
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
            return _response.body as Letta.Block;
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling PATCH /v1/blocks/{block_id}.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Link a memory block to an agent.
     *
     * @param {string} blockId
     * @param {Letta.LinkAgentMemoryBlockRequest} request
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.blocks.linkAgentMemoryBlock("block_id", {
     *         agent_id: "agent_id"
     *     })
     */
    public async linkAgentMemoryBlock(
        blockId: string,
        request: Letta.LinkAgentMemoryBlockRequest,
        requestOptions?: Blocks.RequestOptions
    ): Promise<void> {
        const { agent_id: agentId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["agent_id"] = agentId;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaCloud,
                `v1/blocks/${encodeURIComponent(blockId)}/attach`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "@letta-ai/letta-client/0.1.2",
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
            return;
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling PATCH /v1/blocks/{block_id}/attach.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Unlink a memory block from an agent
     *
     * @param {string} blockId
     * @param {Letta.UnlinkAgentMemoryBlockRequest} request
     * @param {Blocks.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.blocks.unlinkAgentMemoryBlock("block_id", {
     *         agent_id: "agent_id"
     *     })
     */
    public async unlinkAgentMemoryBlock(
        blockId: string,
        request: Letta.UnlinkAgentMemoryBlockRequest,
        requestOptions?: Blocks.RequestOptions
    ): Promise<void> {
        const { agent_id: agentId } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        _queryParams["agent_id"] = agentId;
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaCloud,
                `v1/blocks/${encodeURIComponent(blockId)}/detach`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.2",
                "User-Agent": "@letta-ai/letta-client/0.1.2",
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
            return;
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling PATCH /v1/blocks/{block_id}/detach.");
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

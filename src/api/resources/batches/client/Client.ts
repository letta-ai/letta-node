/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Letta from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Batches {
    export interface Options {
        environment?: core.Supplier<environments.LettaEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
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

export class Batches {
    constructor(protected readonly _options: Batches.Options = {}) {}

    /**
     * List all batch runs.
     *
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.batches.list()
     */
    public async list(requestOptions?: Batches.RequestOptions): Promise<Letta.BatchJob[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                "v1/messages/batches",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.100",
                "User-Agent": "@letta-ai/letta-client/0.1.100",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.batches.list.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/messages/batches.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Submit a batch of agent messages for asynchronous processing.
     * Creates a job that will fan out messages to all listed agents and process them in parallel.
     *
     * @param {Letta.CreateBatch} request
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.batches.create({
     *         requests: [{
     *                 messages: [{
     *                         role: "user",
     *                         content: [{
     *                                 type: "text",
     *                                 text: "text"
     *                             }]
     *                     }],
     *                 agentId: "agent_id"
     *             }]
     *     })
     */
    public async create(request: Letta.CreateBatch, requestOptions?: Batches.RequestOptions): Promise<Letta.BatchJob> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                "v1/messages/batches",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.100",
                "User-Agent": "@letta-ai/letta-client/0.1.100",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateBatch.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BatchJob.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling POST /v1/messages/batches.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the status of a batch run.
     *
     * @param {string} batchId
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.batches.retrieve("batch_id")
     */
    public async retrieve(batchId: string, requestOptions?: Batches.RequestOptions): Promise<Letta.BatchJob> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                `v1/messages/batches/${encodeURIComponent(batchId)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.100",
                "User-Agent": "@letta-ai/letta-client/0.1.100",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BatchJob.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Letta.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
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
                throw new errors.LettaTimeoutError(
                    "Timeout exceeded when calling GET /v1/messages/batches/{batch_id}.",
                );
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} batchId
     * @param {Batches.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.batches.cancel("batch_id")
     */
    public async cancel(batchId: string, requestOptions?: Batches.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                `v1/messages/batches/${encodeURIComponent(batchId)}`,
            ),
            method: "PATCH",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.100",
                "User-Agent": "@letta-ai/letta-client/0.1.100",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.LettaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.LettaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.LettaTimeoutError(
                    "Timeout exceeded when calling PATCH /v1/messages/batches/{batch_id}.",
                );
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const tokenValue = await core.Supplier.get(this._options.token);
        return { Authorization: `Bearer ${tokenValue}` };
    }
}

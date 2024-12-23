/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Letta from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";
import * as stream from "stream";

export declare namespace Messages {
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

export class Messages {
    constructor(protected readonly _options: Messages.Options) {}

    /**
     * Retrieve message history for an agent.
     *
     * @param {string} agentId
     * @param {Letta.agents.MessagesListRequest} request
     * @param {Messages.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.agents.messages.list("agent_id")
     */
    public async list(
        agentId: string,
        request: Letta.agents.MessagesListRequest = {},
        requestOptions?: Messages.RequestOptions
    ): Promise<Letta.agents.MessagesListResponse> {
        const {
            before,
            limit,
            msg_object: msgObject,
            assistant_message_tool_name: assistantMessageToolName,
            assistant_message_tool_kwarg: assistantMessageToolKwarg,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (before != null) {
            _queryParams["before"] = before;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (msgObject != null) {
            _queryParams["msg_object"] = msgObject.toString();
        }

        if (assistantMessageToolName != null) {
            _queryParams["assistant_message_tool_name"] = assistantMessageToolName;
        }

        if (assistantMessageToolKwarg != null) {
            _queryParams["assistant_message_tool_kwarg"] = assistantMessageToolKwarg;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                `v1/agents/${encodeURIComponent(agentId)}/messages`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.1",
                "User-Agent": "@letta-ai/letta-client/0.1.1",
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
            return _response.body as Letta.agents.MessagesListResponse;
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/agents/{agent_id}/messages.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Process a user message and return the agent's response.
     * This endpoint accepts a message from a user and processes it through the agent.
     *
     * @param {string} agentId
     * @param {Letta.LettaRequest} request
     * @param {Messages.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.agents.messages.create("agent_id", {
     *         messages: [{
     *                 role: "user",
     *                 text: "text"
     *             }]
     *     })
     */
    public async create(
        agentId: string,
        request: Letta.LettaRequest,
        requestOptions?: Messages.RequestOptions
    ): Promise<Letta.LettaResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                `v1/agents/${encodeURIComponent(agentId)}/messages`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.1",
                "User-Agent": "@letta-ai/letta-client/0.1.1",
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
            return _response.body as Letta.LettaResponse;
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
                throw new errors.LettaTimeoutError(
                    "Timeout exceeded when calling POST /v1/agents/{agent_id}/messages."
                );
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update the details of a message associated with an agent.
     *
     * @param {string} agentId
     * @param {string} messageId
     * @param {Letta.agents.MessageUpdate} request
     * @param {Messages.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.agents.messages.update("agent_id", "message_id")
     */
    public async update(
        agentId: string,
        messageId: string,
        request: Letta.agents.MessageUpdate = {},
        requestOptions?: Messages.RequestOptions
    ): Promise<Letta.LettaSchemasMessageMessage> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                `v1/agents/${encodeURIComponent(agentId)}/messages/${encodeURIComponent(messageId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.1",
                "User-Agent": "@letta-ai/letta-client/0.1.1",
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
            return _response.body as Letta.LettaSchemasMessageMessage;
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
                throw new errors.LettaTimeoutError(
                    "Timeout exceeded when calling PATCH /v1/agents/{agent_id}/messages/{message_id}."
                );
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Process a user message and return the agent's response.
     * This endpoint accepts a message from a user and processes it through the agent.
     * It will stream the steps of the response always, and stream the tokens if 'stream_tokens' is set to True.
     */
    public async stream(
        agentId: string,
        request: Letta.agents.LettaStreamingRequest,
        requestOptions?: Messages.RequestOptions
    ): Promise<core.Stream<Letta.agents.LettaStreamingResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.LettaEnvironment.LettaHosted,
                `v1/agents/${encodeURIComponent(agentId)}/messages/stream`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.1",
                "User-Agent": "@letta-ai/letta-client/0.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            responseType: "sse",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return new core.Stream({
                stream: _response.body,
                parse: (data) => data as any,
                signal: requestOptions?.abortSignal,
                eventShape: {
                    type: "sse",
                    streamTerminator: "[DONE]",
                },
            });
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
                throw new errors.LettaTimeoutError(
                    "Timeout exceeded when calling POST /v1/agents/{agent_id}/messages/stream."
                );
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

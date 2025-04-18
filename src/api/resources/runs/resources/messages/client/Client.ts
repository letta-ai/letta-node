/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Letta from "../../../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization/index";
import * as errors from "../../../../../../errors/index";

export declare namespace Messages {
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

export class Messages {
    constructor(protected readonly _options: Messages.Options = {}) {}

    /**
     * Get messages associated with a run with filtering options.
     *
     * Args:
     *     run_id: ID of the run
     *     before: A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
     *     after: A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
     *     limit: Maximum number of messages to return
     *     order: Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
     *     role: Filter by role (user/assistant/system/tool)
     *     return_message_object: Whether to return Message objects or LettaMessage objects
     *     user_id: ID of the user making the request
     *
     * Returns:
     *     A list of messages associated with the run. Default is List[LettaMessage].
     *
     * @param {string} runId
     * @param {Letta.runs.MessagesListRequest} request
     * @param {Messages.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.runs.messages.list("run_id")
     */
    public async list(
        runId: string,
        request: Letta.runs.MessagesListRequest = {},
        requestOptions?: Messages.RequestOptions,
    ): Promise<Letta.LettaMessageUnion[]> {
        const { before, after, limit, order, role } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (before != null) {
            _queryParams["before"] = before;
        }

        if (after != null) {
            _queryParams["after"] = after;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (order != null) {
            _queryParams["order"] = order;
        }

        if (role != null) {
            _queryParams["role"] = role;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                `v1/runs/${encodeURIComponent(runId)}/messages`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.99",
                "User-Agent": "@letta-ai/letta-client/0.1.99",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
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
            return serializers.runs.messages.list.Response.parseOrThrow(_response.body, {
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/runs/{run_id}/messages.");
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

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Letta from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Templates {
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

export class Templates {
    constructor(protected readonly _options: Templates.Options = {}) {}

    /**
     * <Note>This endpoint is only available on Letta Cloud.</Note>
     *
     * Creates a new version of the template version of the agent.
     *
     * @param {string} agentId - The agent ID of the agent to migrate, if this agent is not a template, it will create a agent template from the agent provided as well
     * @param {Letta.agents.TemplatesCreateVersionRequest} request
     * @param {Templates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.NotFoundError}
     * @throws {@link Letta.InternalServerError}
     *
     * @example
     *     await client.agents.templates.createVersion("agent_id")
     */
    public async createVersion(
        agentId: string,
        request: Letta.agents.TemplatesCreateVersionRequest = {},
        requestOptions?: Templates.RequestOptions,
    ): Promise<void> {
        const { returnAgentState, ..._body } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (returnAgentState != null) {
            _queryParams["returnAgentState"] = returnAgentState.toString();
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                `v1/agents/${encodeURIComponent(agentId)}/version-template`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.31",
                "User-Agent": "@letta-ai/letta-client/0.1.31",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            body: serializers.agents.TemplatesCreateVersionRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Letta.NotFoundError(_response.error.body);
                case 500:
                    throw new Letta.InternalServerError(_response.error.body);
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
                    "Timeout exceeded when calling POST /v1/agents/{agent_id}/version-template.",
                );
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <Note>This endpoint is only available on Letta Cloud.</Note>
     *
     * Migrate an agent to a new versioned agent template.
     *
     * @param {string} agentId
     * @param {Letta.agents.TemplatesMigrateRequest} request
     * @param {Templates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.NotFoundError}
     * @throws {@link Letta.ConflictError}
     * @throws {@link Letta.InternalServerError}
     *
     * @example
     *     await client.agents.templates.migrate("agent_id", {
     *         toTemplate: "to_template",
     *         preserveCoreMemories: true
     *     })
     */
    public async migrate(
        agentId: string,
        request: Letta.agents.TemplatesMigrateRequest,
        requestOptions?: Templates.RequestOptions,
    ): Promise<Letta.agents.TemplatesMigrateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                `v1/agents/${encodeURIComponent(agentId)}/migrate`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.31",
                "User-Agent": "@letta-ai/letta-client/0.1.31",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.agents.TemplatesMigrateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.agents.TemplatesMigrateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Letta.NotFoundError(_response.error.body);
                case 409:
                    throw new Letta.ConflictError(
                        serializers.ConflictErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case 500:
                    throw new Letta.InternalServerError(_response.error.body);
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
                throw new errors.LettaTimeoutError("Timeout exceeded when calling POST /v1/agents/{agent_id}/migrate.");
            case "unknown":
                throw new errors.LettaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * <Note>This endpoint is only available on Letta Cloud.</Note>
     *
     * Creates a template from an agent.
     *
     * @param {string} agentId
     * @param {Letta.agents.TemplatesCreateRequest} request
     * @param {Templates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.InternalServerError}
     *
     * @example
     *     await client.agents.templates.create("agent_id")
     */
    public async create(
        agentId: string,
        request: Letta.agents.TemplatesCreateRequest = {},
        requestOptions?: Templates.RequestOptions,
    ): Promise<Letta.agents.TemplatesCreateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                `v1/agents/${encodeURIComponent(agentId)}/template`,
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@letta-ai/letta-client",
                "X-Fern-SDK-Version": "0.1.31",
                "User-Agent": "@letta-ai/letta-client/0.1.31",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.agents.TemplatesCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.agents.TemplatesCreateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 500:
                    throw new Letta.InternalServerError(_response.error.body);
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
                    "Timeout exceeded when calling POST /v1/agents/{agent_id}/template.",
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

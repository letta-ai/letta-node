/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Letta from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Agents {
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

export class Agents {
    constructor(protected readonly _options: Agents.Options = {}) {}

    /**
     * Creates an Agent or multiple Agents from a template
     *
     * @param {string} project - The project slug
     * @param {string} templateVersion - The template version, formatted as {template-name}:{version-number} or {template-name}:latest
     * @param {Letta.templates.AgentsCreateRequest} request
     * @param {Agents.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.templates.agents.create("project", "template_version")
     */
    public async create(
        project: string,
        templateVersion: string,
        request: Letta.templates.AgentsCreateRequest = {},
        requestOptions?: Agents.RequestOptions,
    ): Promise<Letta.templates.AgentsCreateResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.LettaEnvironment.LettaCloud,
                `v1/templates/${encodeURIComponent(project)}/${encodeURIComponent(templateVersion)}/agents`,
            ),
            method: "POST",
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
            requestType: "json",
            body: serializers.templates.AgentsCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.templates.AgentsCreateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
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
                    "Timeout exceeded when calling POST /v1/templates/{project}/{template_version}/agents.",
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

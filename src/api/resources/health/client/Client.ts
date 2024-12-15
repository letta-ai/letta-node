/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Letta from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Health {
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

export class Health {
    constructor(protected readonly _options: Health.Options) {}

    /**
     * @param {Health.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.health.check()
     */
    public check(requestOptions?: Health.RequestOptions): core.APIPromise<Letta.Health> {
        return core.APIPromise.from(
            (async () => {
                const _response = await (this._options.fetcher ?? core.fetcher)({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ??
                            environments.LettaEnvironment.LettaHosted,
                        "v1/health/"
                    ),
                    method: "GET",
                    headers: {
                        Authorization: await this._getAuthorizationHeader(),
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-SDK-Name": "letta",
                        "X-Fern-SDK-Version": "0.6.0-beta0",
                        "User-Agent": "letta/0.6.0-beta0",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: _response.body as Letta.Health,
                        headers: _response.headers,
                    };
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
                        throw new errors.LettaTimeoutError("Timeout exceeded when calling GET /v1/health/.");
                    case "unknown":
                        throw new errors.LettaError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Tools } from "./api/resources/tools/client/Client";
import { Sources } from "./api/resources/sources/client/Client";
import { Agents } from "./api/resources/agents/client/Client";
import { Models } from "./api/resources/models/client/Client";
import { Blocks } from "./api/resources/blocks/client/Client";
import { Jobs } from "./api/resources/jobs/client/Client";
import { Health } from "./api/resources/health/client/Client";

export declare namespace LettaClient {
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

export class LettaClient {
    protected _tools: Tools | undefined;
    protected _sources: Sources | undefined;
    protected _agents: Agents | undefined;
    protected _models: Models | undefined;
    protected _blocks: Blocks | undefined;
    protected _jobs: Jobs | undefined;
    protected _health: Health | undefined;

    constructor(protected readonly _options: LettaClient.Options) {}

    public get tools(): Tools {
        return (this._tools ??= new Tools(this._options));
    }

    public get sources(): Sources {
        return (this._sources ??= new Sources(this._options));
    }

    public get agents(): Agents {
        return (this._agents ??= new Agents(this._options));
    }

    public get models(): Models {
        return (this._models ??= new Models(this._options));
    }

    public get blocks(): Blocks {
        return (this._blocks ??= new Blocks(this._options));
    }

    public get jobs(): Jobs {
        return (this._jobs ??= new Jobs(this._options));
    }

    public get health(): Health {
        return (this._health ??= new Health(this._options));
    }
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Tools } from "./api/resources/tools/client/Client";
import { Sources } from "./api/resources/sources/client/Client";
import { Agents } from "./api/resources/agents/client/Client";
import { Groups } from "./api/resources/groups/client/Client";
import { Identities } from "./api/resources/identities/client/Client";
import { Models } from "./api/resources/models/client/Client";
import { Blocks } from "./api/resources/blocks/client/Client";
import { Jobs } from "./api/resources/jobs/client/Client";
import { Health } from "./api/resources/health/client/Client";
import { Providers } from "./api/resources/providers/client/Client";
import { Runs } from "./api/resources/runs/client/Client";
import { Steps } from "./api/resources/steps/client/Client";
import { Tag } from "./api/resources/tag/client/Client";
import { Messages } from "./api/resources/messages/client/Client";
import { Voice } from "./api/resources/voice/client/Client";
import { Templates } from "./api/resources/templates/client/Client";
import { ClientSideAccessTokens } from "./api/resources/clientSideAccessTokens/client/Client";
import { Projects } from "./api/resources/projects/client/Client";

export declare namespace LettaClient {
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

export class LettaClient {
    protected _tools: Tools | undefined;
    protected _sources: Sources | undefined;
    protected _agents: Agents | undefined;
    protected _groups: Groups | undefined;
    protected _identities: Identities | undefined;
    protected _models: Models | undefined;
    protected _blocks: Blocks | undefined;
    protected _jobs: Jobs | undefined;
    protected _health: Health | undefined;
    protected _providers: Providers | undefined;
    protected _runs: Runs | undefined;
    protected _steps: Steps | undefined;
    protected _tag: Tag | undefined;
    protected _messages: Messages | undefined;
    protected _voice: Voice | undefined;
    protected _templates: Templates | undefined;
    protected _clientSideAccessTokens: ClientSideAccessTokens | undefined;
    protected _projects: Projects | undefined;

    constructor(protected readonly _options: LettaClient.Options = {}) {}

    public get tools(): Tools {
        return (this._tools ??= new Tools(this._options));
    }

    public get sources(): Sources {
        return (this._sources ??= new Sources(this._options));
    }

    public get agents(): Agents {
        return (this._agents ??= new Agents(this._options));
    }

    public get groups(): Groups {
        return (this._groups ??= new Groups(this._options));
    }

    public get identities(): Identities {
        return (this._identities ??= new Identities(this._options));
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

    public get providers(): Providers {
        return (this._providers ??= new Providers(this._options));
    }

    public get runs(): Runs {
        return (this._runs ??= new Runs(this._options));
    }

    public get steps(): Steps {
        return (this._steps ??= new Steps(this._options));
    }

    public get tag(): Tag {
        return (this._tag ??= new Tag(this._options));
    }

    public get messages(): Messages {
        return (this._messages ??= new Messages(this._options));
    }

    public get voice(): Voice {
        return (this._voice ??= new Voice(this._options));
    }

    public get templates(): Templates {
        return (this._templates ??= new Templates(this._options));
    }

    public get clientSideAccessTokens(): ClientSideAccessTokens {
        return (this._clientSideAccessTokens ??= new ClientSideAccessTokens(this._options));
    }

    public get projects(): Projects {
        return (this._projects ??= new Projects(this._options));
    }
}

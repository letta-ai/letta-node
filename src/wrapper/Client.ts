import { LettaClient as FernClient } from "../Client";
import { Tools } from "./ToolsClient";

export class LettaClient extends FernClient {

    protected _tools: Tools | undefined;

    public get tools(): Tools {
        return (this._tools ??= new Tools(this._options));
    }
}

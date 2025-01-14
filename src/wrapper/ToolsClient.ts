import dedent from 'dedent';

import { Letta } from "..";
import { Tools as FernTools } from "../api/resources/tools/client/Client";

export class Tools extends FernTools {
    /**
     * Create a new tool from a function
     *
     * @param {ToolCreateFromFunction} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.create({
     *         func: tool_implementation
     *     })
     */
    public async createFromFunction(
        request: ToolCreateFromFunction,
        requestOptions?: FernTools.RequestOptions
    ): Promise<Letta.LettaSchemasToolTool> {
        const toolCreateRequest: Letta.ToolCreate = {
            ...request,
            sourceCode: dedent(request.func.toString()),
        };
        return this.create(toolCreateRequest, requestOptions);
    }
}

export interface ToolCreateFromFunction extends Omit<Letta.ToolCreate, "sourceCode"> {
    func: Function;
}
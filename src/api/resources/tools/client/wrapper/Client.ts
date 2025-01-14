import prettier from "prettier";

import { Tools as ToolsBase } from "../Client";
import { ToolCreate, LettaSchemasToolTool } from "../../../../types";

export class ToolsExtended extends ToolsBase {
    /**
     * Create a new tool
     *
     * @param {ToolCreateFromFunc} request
     * @param {Tools.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Letta.UnprocessableEntityError}
     *
     * @example
     *     await client.tools.create({
     *         sourceCode: "source_code"
     *     })
     */
    public async createFromFunc(
        request: ToolCreateFromFunc,
        requestOptions?: ToolsBase.RequestOptions
    ): Promise<LettaSchemasToolTool> {
        const toolCreateRequest: ToolCreate = {
            ...request,
            sourceCode: prettier.format(request.func.toString(), {
                parser: "typescript",
                tabWidth: 4,
            }),
        };
        return this.create(toolCreateRequest, requestOptions);
    }
}

export interface ToolCreateFromFunc extends Omit<ToolCreate, "sourceCode"> {
    func: (...args: any[]) => any;
}

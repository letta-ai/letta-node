# Reference

## Tools

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">retrieve</a>(toolId) -> Letta.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a tool by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.retrieve("tool_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**toolId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">delete</a>(toolId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a tool by name

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.delete("tool_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**toolId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">modify</a>(toolId, { ...params }) -> Letta.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing tool

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.modify("tool_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**toolId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.ToolUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">count</a>({ ...params }) -> number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a count of all tools available to agents belonging to the org of the user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.count();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ToolsCountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">list</a>({ ...params }) -> Letta.Tool[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all tools available to agents belonging to the org of the user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ToolsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">create</a>({ ...params }) -> Letta.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new tool

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.create({
    sourceCode: "source_code",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ToolCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">upsert</a>({ ...params }) -> Letta.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update a tool

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.upsert({
    sourceCode: "source_code",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ToolCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">upsertBaseTools</a>() -> Letta.Tool[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upsert base tools

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.upsertBaseTools();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">runToolFromSource</a>({ ...params }) -> Letta.ToolReturnMessage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attempt to build a tool from source, then run it on the provided arguments

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.runToolFromSource({
    sourceCode: "source_code",
    args: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ToolRunFromSource`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">listComposioApps</a>({ ...params }) -> Letta.AppModel[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all Composio apps

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.listComposioApps();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ListComposioAppsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">listComposioActionsByApp</a>(composioAppName) -> Letta.ActionModel[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all Composio actions for a specific app

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.listComposioActionsByApp("composio_app_name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**composioAppName:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">addComposioTool</a>(composioActionName) -> Letta.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new Composio tool by action name (Composio refers to each tool as an `Action`)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.addComposioTool("composio_action_name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**composioActionName:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">listMcpServers</a>({ ...params }) -> Record<string, Letta.ListMcpServersResponseValue></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all configured MCP servers

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.listMcpServers();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ListMcpServersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">addMcpServer</a>({ ...params }) -> Letta.AddMcpServerResponseItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new MCP server to the Letta MCP server config

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.addMcpServer({
    serverName: "server_name",
    command: "command",
    args: ["args"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.AddMcpServerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">listMcpToolsByServer</a>(mcpServerName) -> Letta.McpTool[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all tools for a specific MCP server

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.listMcpToolsByServer("mcp_server_name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerName:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">addMcpTool</a>(mcpServerName, mcpToolName) -> Letta.Tool</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register a new MCP tool as a Letta server by MCP server + tool name

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.addMcpTool("mcp_server_name", "mcp_tool_name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerName:** `string`

</dd>
</dl>

<dl>
<dd>

**mcpToolName:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">deleteMcpServer</a>(mcpServerName) -> Letta.DeleteMcpServerResponseItem[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a new MCP server to the Letta MCP server config

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.deleteMcpServer("mcp_server_name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerName:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">updateMcpServer</a>(mcpServerName, { ...params }) -> Letta.UpdateMcpServerResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing MCP server configuration

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.updateMcpServer("mcp_server_name", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**mcpServerName:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.UpdateMcpServerRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sources

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">count</a>() -> number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Count all data sources created by a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.count();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">retrieve</a>(sourceId) -> Letta.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all sources

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.retrieve("source_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">delete</a>(sourceId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a data source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.delete("source_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">modify</a>(sourceId, { ...params }) -> Letta.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the name or documentation of an existing data source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.modify("source_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.SourceUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">retrieveByName</a>(sourceName) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a source by name

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.retrieveByName("source_name");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceName:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">list</a>() -> Letta.Source[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all data sources created by a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">create</a>({ ...params }) -> Letta.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new data source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.create({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.SourceCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">list</a>({ ...params }) -> Letta.AgentState[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all agents associated with a given user.

This endpoint retrieves a list of all agents and their configurations
associated with the specified user ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.AgentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">create</a>({ ...params }) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new agent with the specified configuration.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.CreateAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">count</a>() -> number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the count of all agents associated with a given user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.count();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">exportFile</a>(agentId) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export the serialized JSON representation of an agent, formatted with indentation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.exportFile("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">importFile</a>(file, { ...params }) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Import a serialized agent file and recreate the agent in the system.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.importFile(fs.createReadStream("/path/to/your/file"), {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**file:** `File | fs.ReadStream | Blob`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.BodyImportAgentSerialized`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">retrieve</a>(agentId, { ...params }) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the state of the agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.retrieve("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.AgentsRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">delete</a>(agentId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.delete("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">modify</a>(agentId, { ...params }) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing agent

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.modify("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.UpdateAgent`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">summarizeAgentConversation</a>(agentId, { ...params }) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Summarize an agent's conversation history to a target message length.

This endpoint summarizes the current message history for a given agent,
truncating and compressing it down to the specified `max_message_length`.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.summarizeAgentConversation("agent_id", {
    maxMessageLength: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.SummarizeAgentConversationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">search</a>({ ...params }) -> Letta.AgentsSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Note>This endpoint is only available on Letta Cloud.</Note>

Search deployed agents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.search();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.AgentsSearchRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Groups

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">list</a>({ ...params }) -> Letta.Group[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch all multi-agent groups matching query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.GroupsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">create</a>({ ...params }) -> Letta.Group</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new multi-agent group with the specified configuration.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.create({
    agentIds: ["agent_ids"],
    description: "description",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.GroupCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">count</a>() -> number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the count of all groups associated with a given user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.count();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">retrieve</a>(groupId) -> Letta.Group</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the group by id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.retrieve("group_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">delete</a>(groupId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a multi-agent group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.delete("group_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">modify</a>(groupId, { ...params }) -> Letta.Group</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new multi-agent group with the specified configuration.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.modify("group_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.GroupUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Identities

<details><summary><code>client.identities.<a href="/src/api/resources/identities/client/Client.ts">list</a>({ ...params }) -> Letta.Identity[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all identities in the database

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identities.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.IdentitiesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Identities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identities.<a href="/src/api/resources/identities/client/Client.ts">create</a>({ ...params }) -> Letta.Identity</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identities.create({
    identifierKey: "identifier_key",
    name: "name",
    identityType: "org",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.IdentityCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Identities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identities.<a href="/src/api/resources/identities/client/Client.ts">upsert</a>({ ...params }) -> Letta.Identity</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identities.upsert({
    identifierKey: "identifier_key",
    name: "name",
    identityType: "org",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.IdentityUpsert`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Identities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identities.<a href="/src/api/resources/identities/client/Client.ts">count</a>() -> number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get count of all identities for a user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identities.count();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Identities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identities.<a href="/src/api/resources/identities/client/Client.ts">retrieve</a>(identityId) -> Letta.Identity</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identities.retrieve("identity_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**identityId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Identities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identities.<a href="/src/api/resources/identities/client/Client.ts">delete</a>(identityId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an identity by its identifier key

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identities.delete("identity_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**identityId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Identities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.identities.<a href="/src/api/resources/identities/client/Client.ts">modify</a>(identityId, { ...params }) -> Letta.Identity</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identities.modify("identity_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**identityId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.IdentityUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Identities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Models

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">list</a>({ ...params }) -> Letta.LlmConfig[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List available LLM models using the asynchronous implementation for improved performance

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ModelsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EmbeddingModels

<details><summary><code>client.embeddingModels.<a href="/src/api/resources/embeddingModels/client/Client.ts">list</a>() -> Letta.EmbeddingConfig[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List available embedding models using the asynchronous implementation for improved performance

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.embeddingModels.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EmbeddingModels.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Blocks

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">list</a>({ ...params }) -> Letta.Block[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blocks.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.BlocksListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">create</a>({ ...params }) -> Letta.Block</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blocks.create({
    value: "value",
    label: "label",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.CreateBlock`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">count</a>() -> number</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Count all blocks created by a user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blocks.count();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">retrieve</a>(blockId) -> Letta.Block</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blocks.retrieve("block_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**blockId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">delete</a>(blockId) -> Letta.Block</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blocks.delete("block_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**blockId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">modify</a>(blockId, { ...params }) -> Letta.Block</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blocks.modify("block_id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**blockId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.BlockUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Jobs

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">list</a>({ ...params }) -> Letta.Job[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all jobs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.JobsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">listActive</a>({ ...params }) -> Letta.Job[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all active jobs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.listActive();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.JobsListActiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">retrieve</a>(jobId) -> Letta.Job</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the status of a job.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.retrieve("job_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">delete</a>(jobId) -> Letta.Job</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a job by its job_id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.delete("job_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Health

<details><summary><code>client.health.<a href="/src/api/resources/health/client/Client.ts">check</a>() -> Letta.Health</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.health.check();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Health.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Providers

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">list</a>({ ...params }) -> Letta.Provider[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all custom providers in the database

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ProvidersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">create</a>({ ...params }) -> Letta.Provider</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new custom provider

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.create({
    name: "name",
    providerType: "anthropic",
    apiKey: "api_key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ProviderCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">delete</a>(providerId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an existing custom provider

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.delete("provider_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**providerId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">modify</a>(providerId, { ...params }) -> Letta.Provider</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing custom provider

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.modify("provider_id", {
    apiKey: "api_key",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**providerId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.ProviderUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">check</a>() -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.check();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Runs

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">list</a>({ ...params }) -> Letta.Run[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all runs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.RunsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Runs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">listActive</a>({ ...params }) -> Letta.Run[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all active runs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.listActive();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.RunsListActiveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Runs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">retrieve</a>(runId) -> Letta.Run</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the status of a run.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.retrieve("run_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**runId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Runs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">delete</a>(runId) -> Letta.Run</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a run by its run_id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.delete("run_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**runId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Runs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Steps

<details><summary><code>client.steps.<a href="/src/api/resources/steps/client/Client.ts">list</a>({ ...params }) -> Letta.Step[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List steps with optional pagination and date filters.
Dates should be provided in ISO 8601 format (e.g. 2025-01-29T15:01:19-08:00)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.steps.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.StepsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Steps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.steps.<a href="/src/api/resources/steps/client/Client.ts">retrieve</a>(stepId) -> Letta.Step</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a step by ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.steps.retrieve("step_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**stepId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Steps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tags

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">list</a>({ ...params }) -> string[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a list of all tags in the database

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.TagsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Telemetry

<details><summary><code>client.telemetry.<a href="/src/api/resources/telemetry/client/Client.ts">retrieveProviderTrace</a>(stepId) -> Letta.ProviderTrace</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.telemetry.retrieveProviderTrace("step_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**stepId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Telemetry.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Batches

<details><summary><code>client.batches.<a href="/src/api/resources/batches/client/Client.ts">list</a>() -> Letta.BatchJob[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all batch runs.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batches.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Batches.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batches.<a href="/src/api/resources/batches/client/Client.ts">create</a>({ ...params }) -> Letta.BatchJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit a batch of agent messages for asynchronous processing.
Creates a job that will fan out messages to all listed agents and process them in parallel.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batches.create({
    requests: [
        {
            messages: [
                {
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: "text",
                        },
                    ],
                },
            ],
            agentId: "agent_id",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.CreateBatch`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batches.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batches.<a href="/src/api/resources/batches/client/Client.ts">retrieve</a>(batchId) -> Letta.BatchJob</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the status of a batch run.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batches.retrieve("batch_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batchId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batches.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.batches.<a href="/src/api/resources/batches/client/Client.ts">cancel</a>(batchId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a batch run.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.batches.cancel("batch_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batchId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Batches.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Messages

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">listBatchMessages</a>(batchId, { ...params }) -> Letta.LettaBatchMessages</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get messages for a specific batch job.

Returns messages associated with the batch in chronological order.

Pagination:

- For the first page, omit the cursor parameter
- For subsequent pages, use the ID of the last message from the previous response as the cursor
- Results will include messages before/after the cursor based on sort_descending
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.listBatchMessages("batch_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batchId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.ListBatchMessagesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Voice

<details><summary><code>client.voice.<a href="/src/api/resources/voice/client/Client.ts">createVoiceChatCompletions</a>(agentId, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.voice.createVoiceChatCompletions("agent_id", {
    body: {
        key: "value",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.CreateVoiceChatCompletionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Voice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Templates

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">list</a>({ ...params }) -> Letta.TemplatesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all templates

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.TemplatesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Templates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ClientSideAccessTokens

<details><summary><code>client.clientSideAccessTokens.<a href="/src/api/resources/clientSideAccessTokens/client/Client.ts">create</a>({ ...params }) -> Letta.ClientSideAccessTokensCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new client side access token with the specified configuration.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clientSideAccessTokens.create({
    policy: [
        {
            type: "agent",
            id: "id",
            access: ["read_messages"],
        },
    ],
    hostname: "hostname",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ClientSideAccessTokensCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClientSideAccessTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.clientSideAccessTokens.<a href="/src/api/resources/clientSideAccessTokens/client/Client.ts">delete</a>(token, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a client side access token.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.clientSideAccessTokens.delete("token", {
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**token:** `string` — The access token to delete

</dd>
</dl>

<dl>
<dd>

**request:** `unknown`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ClientSideAccessTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Projects

<details><summary><code>client.projects.<a href="/src/api/resources/projects/client/Client.ts">list</a>({ ...params }) -> Letta.ProjectsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all projects

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.projects.list();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Letta.ProjectsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents Context

<details><summary><code>client.agents.context.<a href="/src/api/resources/agents/resources/context/client/Client.ts">retrieve</a>(agentId) -> Letta.ContextWindowOverview</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the context window of a specific agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.context.retrieve("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Context.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents Tools

<details><summary><code>client.agents.tools.<a href="/src/api/resources/agents/resources/tools/client/Client.ts">list</a>(agentId) -> Letta.Tool[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get tools from an existing agent

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.tools.list("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.tools.<a href="/src/api/resources/agents/resources/tools/client/Client.ts">attach</a>(agentId, toolId) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attach a tool to an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.tools.attach("agent_id", "tool_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**toolId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.tools.<a href="/src/api/resources/agents/resources/tools/client/Client.ts">detach</a>(agentId, toolId) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Detach a tool from an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.tools.detach("agent_id", "tool_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**toolId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents Sources

<details><summary><code>client.agents.sources.<a href="/src/api/resources/agents/resources/sources/client/Client.ts">attach</a>(agentId, sourceId) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attach a source to an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.sources.attach("agent_id", "source_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.sources.<a href="/src/api/resources/agents/resources/sources/client/Client.ts">detach</a>(agentId, sourceId) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Detach a source from an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.sources.detach("agent_id", "source_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.sources.<a href="/src/api/resources/agents/resources/sources/client/Client.ts">list</a>(agentId) -> Letta.Source[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the sources associated with an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.sources.list("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sources.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents CoreMemory

<details><summary><code>client.agents.coreMemory.<a href="/src/api/resources/agents/resources/coreMemory/client/Client.ts">retrieve</a>(agentId) -> Letta.Memory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the memory state of a specific agent.
This endpoint fetches the current memory state of the agent identified by the user ID and agent ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.coreMemory.retrieve("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CoreMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents Blocks

<details><summary><code>client.agents.blocks.<a href="/src/api/resources/agents/resources/blocks/client/Client.ts">retrieve</a>(agentId, blockLabel) -> Letta.Block</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a core memory block from an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.blocks.retrieve("agent_id", "block_label");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**blockLabel:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.blocks.<a href="/src/api/resources/agents/resources/blocks/client/Client.ts">modify</a>(agentId, blockLabel, { ...params }) -> Letta.Block</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a core memory block of an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.blocks.modify("agent_id", "block_label", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**blockLabel:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.BlockUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.blocks.<a href="/src/api/resources/agents/resources/blocks/client/Client.ts">list</a>(agentId) -> Letta.Block[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the core memory blocks of a specific agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.blocks.list("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.blocks.<a href="/src/api/resources/agents/resources/blocks/client/Client.ts">attach</a>(agentId, blockId) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attach a core memoryblock to an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.blocks.attach("agent_id", "block_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**blockId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.blocks.<a href="/src/api/resources/agents/resources/blocks/client/Client.ts">detach</a>(agentId, blockId) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Detach a core memory block from an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.blocks.detach("agent_id", "block_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**blockId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents Passages

<details><summary><code>client.agents.passages.<a href="/src/api/resources/agents/resources/passages/client/Client.ts">list</a>(agentId, { ...params }) -> Letta.Passage[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the memories in an agent's archival memory store (paginated query).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.passages.list("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.PassagesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Passages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.passages.<a href="/src/api/resources/agents/resources/passages/client/Client.ts">create</a>(agentId, { ...params }) -> Letta.Passage[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Insert a memory into an agent's archival memory store.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.passages.create("agent_id", {
    text: "text",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.CreateArchivalMemory`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Passages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.passages.<a href="/src/api/resources/agents/resources/passages/client/Client.ts">delete</a>(agentId, memoryId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a memory from an agent's archival memory store.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.passages.delete("agent_id", "memory_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**memoryId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Passages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.passages.<a href="/src/api/resources/agents/resources/passages/client/Client.ts">modify</a>(agentId, memoryId, { ...params }) -> Letta.Passage[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Modify a memory in the agent's archival memory store.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.passages.modify("agent_id", "memory_id", {
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**memoryId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.PassageUpdate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Passages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents Messages

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">list</a>(agentId, { ...params }) -> Letta.LettaMessageUnion[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve message history for an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.messages.list("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.MessagesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">create</a>(agentId, { ...params }) -> Letta.LettaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Process a user message and return the agent's response.
This endpoint accepts a message from a user and processes it through the agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.messages.create("agent_id", {
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: "text",
                },
            ],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.LettaRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">modify</a>(agentId, messageId, { ...params }) -> Letta.MessagesModifyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the details of a message associated with an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.messages.modify("agent_id", "message_id", {
    content: "content",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**messageId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.MessagesModifyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">createStream</a>(agentId, { ...params }) -> core.Stream<Letta.LettaStreamingResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Process a user message and return the agent's response.
This endpoint accepts a message from a user and processes it through the agent.
It will stream the steps of the response always, and stream the tokens if 'stream_tokens' is set to True.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.agents.messages.createStream("agent_id", {
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: "text",
                },
            ],
        },
    ],
});
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.LettaStreamingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">createAsync</a>(agentId, { ...params }) -> Letta.Run</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asynchronously process a user message and return a run object.
The actual processing happens in the background, and the status can be checked using the run ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.messages.createAsync("agent_id", {
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: "text",
                },
            ],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.LettaAsyncRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">reset</a>(agentId, { ...params }) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resets the messages for an agent

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.messages.reset("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.MessagesResetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents Groups

<details><summary><code>client.agents.groups.<a href="/src/api/resources/agents/resources/groups/client/Client.ts">list</a>(agentId, { ...params }) -> Letta.Group[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the groups for an agent

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.groups.list("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.GroupsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents Templates

<details><summary><code>client.agents.templates.<a href="/src/api/resources/agents/resources/templates/client/Client.ts">createVersion</a>(agentId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Note>This endpoint is only available on Letta Cloud.</Note>

Creates a new version of the template version of the agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.templates.createVersion("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string` — The agent ID of the agent to migrate, if this agent is not a template, it will create a agent template from the agent provided as well

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.TemplatesCreateVersionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Templates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.templates.<a href="/src/api/resources/agents/resources/templates/client/Client.ts">migrate</a>(agentId, { ...params }) -> Letta.TemplatesMigrateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Note>This endpoint is only available on Letta Cloud.</Note>

Migrate an agent to a new versioned agent template.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.templates.migrate("agent_id", {
    toTemplate: "to_template",
    preserveCoreMemories: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.TemplatesMigrateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Templates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.templates.<a href="/src/api/resources/agents/resources/templates/client/Client.ts">create</a>(agentId, { ...params }) -> Letta.TemplatesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Note>This endpoint is only available on Letta Cloud.</Note>

Creates a template from an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.templates.create("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.agents.TemplatesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Templates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents MemoryVariables

<details><summary><code>client.agents.memoryVariables.<a href="/src/api/resources/agents/resources/memoryVariables/client/Client.ts">list</a>(agentId) -> Letta.MemoryVariablesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

<Note>This endpoint is only available on Letta Cloud.</Note>

Returns the memory variables associated with an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.memoryVariables.list("agent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MemoryVariables.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Blocks Agents

<details><summary><code>client.blocks.agents.<a href="/src/api/resources/blocks/resources/agents/client/Client.ts">list</a>(blockId) -> Letta.AgentState[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all agents associated with the specified block.
Raises a 404 if the block does not exist.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blocks.agents.list("block_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**blockId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Groups Messages

<details><summary><code>client.groups.messages.<a href="/src/api/resources/groups/resources/messages/client/Client.ts">list</a>(groupId, { ...params }) -> Letta.LettaMessageUnion[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve message history for an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.messages.list("group_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.groups.MessagesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.messages.<a href="/src/api/resources/groups/resources/messages/client/Client.ts">create</a>(groupId, { ...params }) -> Letta.LettaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Process a user message and return the group's response.
This endpoint accepts a message from a user and processes it through through agents in the group based on the specified pattern

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.messages.create("group_id", {
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: "text",
                },
            ],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.LettaRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.messages.<a href="/src/api/resources/groups/resources/messages/client/Client.ts">createStream</a>(groupId, { ...params }) -> core.Stream<Letta.LettaStreamingResponse></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Process a user message and return the group's responses.
This endpoint accepts a message from a user and processes it through agents in the group based on the specified pattern.
It will stream the steps of the response always, and stream the tokens if 'stream_tokens' is set to True.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.groups.messages.createStream("group_id", {
    messages: [
        {
            role: "user",
            content: [
                {
                    type: "text",
                    text: "text",
                },
            ],
        },
    ],
});
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.LettaStreamingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.messages.<a href="/src/api/resources/groups/resources/messages/client/Client.ts">modify</a>(groupId, messageId, { ...params }) -> Letta.MessagesModifyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the details of a message associated with an agent.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.messages.modify("group_id", "message_id", {
    content: "content",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**messageId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.MessagesModifyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.messages.<a href="/src/api/resources/groups/resources/messages/client/Client.ts">reset</a>(groupId) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete the group messages for all agents that are part of the multi-agent group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.messages.reset("group_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**groupId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Identities Properties

<details><summary><code>client.identities.properties.<a href="/src/api/resources/identities/resources/properties/client/Client.ts">upsert</a>(identityId, { ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.identities.properties.upsert("identity_id", [
    {
        key: "key",
        value: "value",
        type: "string",
    },
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**identityId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.IdentityProperty[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Properties.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Runs Messages

<details><summary><code>client.runs.messages.<a href="/src/api/resources/runs/resources/messages/client/Client.ts">list</a>(runId, { ...params }) -> Letta.LettaMessageUnion[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get messages associated with a run with filtering options.

Args:
run_id: ID of the run
before: A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
after: A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
limit: Maximum number of messages to return
order: Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
role: Filter by role (user/assistant/system/tool)
return_message_object: Whether to return Message objects or LettaMessage objects
user_id: ID of the user making the request

Returns:
A list of messages associated with the run. Default is List[LettaMessage].

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.messages.list("run_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**runId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.runs.MessagesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Runs Usage

<details><summary><code>client.runs.usage.<a href="/src/api/resources/runs/resources/usage/client/Client.ts">retrieve</a>(runId) -> Letta.UsageStatistics</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get usage statistics for a run.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.usage.retrieve("run_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**runId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Usage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Runs Steps

<details><summary><code>client.runs.steps.<a href="/src/api/resources/runs/resources/steps/client/Client.ts">list</a>(runId, { ...params }) -> Letta.Step[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get messages associated with a run with filtering options.

Args:
run_id: ID of the run
before: A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
after: A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
limit: Maximum number of steps to return
order: Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.

Returns:
A list of steps associated with the run.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.runs.steps.list("run_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**runId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.runs.StepsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Steps.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sources Files

<details><summary><code>client.sources.files.<a href="/src/api/resources/sources/resources/files/client/Client.ts">upload</a>(file, sourceId) -> Letta.Job</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload a file to a data source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.files.upload(fs.createReadStream("/path/to/your/file"), "source_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**file:** `File | fs.ReadStream | Blob`

</dd>
</dl>

<dl>
<dd>

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.files.<a href="/src/api/resources/sources/resources/files/client/Client.ts">list</a>(sourceId, { ...params }) -> Letta.FileMetadata[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List paginated files associated with a data source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.files.list("source_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.sources.FilesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sources.files.<a href="/src/api/resources/sources/resources/files/client/Client.ts">delete</a>(sourceId, fileId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a data source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.files.delete("source_id", "file_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**fileId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Sources Passages

<details><summary><code>client.sources.passages.<a href="/src/api/resources/sources/resources/passages/client/Client.ts">list</a>(sourceId, { ...params }) -> Letta.Passage[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List all passages associated with a data source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sources.passages.list("source_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.sources.PassagesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Passages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Templates Agents

<details><summary><code>client.templates.agents.<a href="/src/api/resources/templates/resources/agents/client/Client.ts">create</a>(project, templateVersion, { ...params }) -> Letta.AgentsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an Agent or multiple Agents from a template

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.templates.agents.create("project", "template_version");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**project:** `string` — The project slug

</dd>
</dl>

<dl>
<dd>

**templateVersion:** `string` — The template version, formatted as {template-name}:{version-number} or {template-name}:latest

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.templates.AgentsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

# Reference

## Tools

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">get</a>(toolId) -> Letta.LettaSchemasToolTool</code></summary>
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
await client.tools.get("tool_id");
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

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">update</a>(toolId, { ...params }) -> Letta.LettaSchemasToolTool</code></summary>
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
await client.tools.update("tool_id");
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

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">getByName</a>(toolName) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a tool ID by name

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
await client.tools.getByName("tool_name");
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

**toolName:** `string`

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

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">list</a>({ ...params }) -> Letta.LettaSchemasToolTool[]</code></summary>
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

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">create</a>({ ...params }) -> Letta.LettaSchemasToolTool</code></summary>
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

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">upsert</a>({ ...params }) -> Letta.LettaSchemasToolTool</code></summary>
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

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">addBaseTool</a>() -> Letta.LettaSchemasToolTool[]</code></summary>
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
await client.tools.addBaseTool();
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
    args: "args",
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

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">listComposioApps</a>() -> Letta.AppModel[]</code></summary>
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

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">addComposioTool</a>(composioActionName) -> Letta.LettaSchemasToolTool</code></summary>
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

## Sources

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">get</a>(sourceId) -> Letta.Source</code></summary>
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
await client.sources.get("source_id");
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

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">update</a>(sourceId, { ...params }) -> Letta.Source</code></summary>
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
await client.sources.update("source_id");
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

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">getByName</a>(sourceName) -> string</code></summary>
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
await client.sources.getByName("source_name");
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

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">attach</a>(sourceId, { ...params }) -> Letta.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Attach a data source to an existing agent.

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
await client.sources.attach("source_id", {
    agentId: "agent_id",
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

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.SourcesAttachRequest`

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

<details><summary><code>client.sources.<a href="/src/api/resources/sources/client/Client.ts">detach</a>(sourceId, { ...params }) -> Letta.Source</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Detach a data source from an existing agent.

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
await client.sources.detach("source_id", {
    agentId: "agent_id",
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

**sourceId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.SourcesDetachRequest`

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
This endpoint retrieves a list of all agents and their configurations associated with the specified user ID.

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
await client.agents.create({
    memoryBlocks: [
        {
            value: "value",
            label: "label",
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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">get</a>(agentId) -> Letta.AgentState</code></summary>
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
await client.agents.get("agent_id");
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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">update</a>(agentId, { ...params }) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an exsiting agent

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
await client.agents.update("agent_id");
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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">getAgentMemoryBlock</a>(agentId, blockLabel) -> Letta.Block</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a memory block from an agent.

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
await client.agents.getAgentMemoryBlock("agent_id", "block_label");
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

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">updateAgentMemoryBlockByLabel</a>(agentId, blockLabel, { ...params }) -> Letta.Block</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a memory block from an agent by unlnking it. If the block is not linked to any other agent, it is deleted.

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
await client.agents.updateAgentMemoryBlockByLabel("agent_id", "block_label", {});
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

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">getAgentMemoryBlocks</a>(agentId) -> Letta.Block[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the memory blocks of a specific agent.

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
await client.agents.getAgentMemoryBlocks("agent_id");
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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">searchdeployedagents</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search deployed agents

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
await client.agents.searchdeployedagents();
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

**request:** `Letta.AgentsSearchDeployedAgentsRequest`

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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">createVersion</a>(agentId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a versioned version of an agent

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
await client.agents.createVersion("agent_id");
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

**request:** `Letta.AgentsCreateVersionRequest`

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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">migrate</a>(agentId, { ...params }) -> Letta.AgentsMigrateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Migrate an agent to a new versioned agent template

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
await client.agents.migrate("agent_id", {
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

**request:** `Letta.AgentsMigrateRequest`

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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">createtemplatefromagent</a>(agentId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a template from an agent

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
await client.agents.createtemplatefromagent("agent_id");
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

**request:** `Letta.AgentsCreateTemplateFromAgentRequest`

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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">getagentvariables</a>(agentId) -> Letta.AgentsGetAgentVariablesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the variables associated with an agent

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
await client.agents.getagentvariables("agent_id");
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

## Models

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">listLlms</a>() -> Letta.LlmConfig[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.listLlms();
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

**requestOptions:** `Models.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.models.<a href="/src/api/resources/models/client/Client.ts">listEmbeddingModels</a>() -> Letta.EmbeddingConfig[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.models.listEmbeddingModels();
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

**requestOptions:** `Models.RequestOptions`

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

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">get</a>(blockId) -> Letta.Block</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blocks.get("block_id");
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

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">update</a>(blockId, { ...params }) -> Letta.Block</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blocks.update("block_id", {});
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

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">linkAgentMemoryBlock</a>(blockId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Link a memory block to an agent.

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
await client.blocks.linkAgentMemoryBlock("block_id", {
    agentId: "agent_id",
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

**blockId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.LinkAgentMemoryBlockRequest`

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

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">unlinkAgentMemoryBlock</a>(blockId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlink a memory block from an agent

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
await client.blocks.unlinkAgentMemoryBlock("block_id", {
    agentId: "agent_id",
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

**blockId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.UnlinkAgentMemoryBlockRequest`

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

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">listActive</a>() -> Letta.Job[]</code></summary>
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

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">get</a>(jobId) -> Letta.Job</code></summary>
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
await client.jobs.get("job_id");
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

## Agents Context

<details><summary><code>client.agents.context.<a href="/src/api/resources/agents/resources/context/client/Client.ts">get</a>(agentId) -> Letta.ContextWindowOverview</code></summary>
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
await client.agents.context.get("agent_id");
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

<details><summary><code>client.agents.tools.<a href="/src/api/resources/agents/resources/tools/client/Client.ts">list</a>(agentId) -> Letta.LettaSchemasToolTool[]</code></summary>
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

<details><summary><code>client.agents.tools.<a href="/src/api/resources/agents/resources/tools/client/Client.ts">add</a>(agentId, toolId) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add tools to an existing agent

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
await client.agents.tools.add("agent_id", "tool_id");
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

<details><summary><code>client.agents.tools.<a href="/src/api/resources/agents/resources/tools/client/Client.ts">remove</a>(agentId, toolId) -> Letta.AgentState</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add tools to an existing agent

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
await client.agents.tools.remove("agent_id", "tool_id");
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

<details><summary><code>client.agents.sources.<a href="/src/api/resources/agents/resources/sources/client/Client.ts">get</a>(agentId) -> Letta.Source[]</code></summary>
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
await client.agents.sources.get("agent_id");
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

## Agents Memory

<details><summary><code>client.agents.memory.<a href="/src/api/resources/agents/resources/memory/client/Client.ts">get</a>(agentId) -> Letta.Memory</code></summary>
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
await client.agents.memory.get("agent_id");
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

**requestOptions:** `Memory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents MemoryBlocks

<details><summary><code>client.agents.memoryBlocks.<a href="/src/api/resources/agents/resources/memoryBlocks/client/Client.ts">remove</a>(agentId, blockLabel) -> Letta.Memory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a memory block from an agent by unlnking it. If the block is not linked to any other agent, it is deleted.

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
await client.agents.memoryBlocks.remove("agent_id", "block_label");
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

**requestOptions:** `MemoryBlocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.memoryBlocks.<a href="/src/api/resources/agents/resources/memoryBlocks/client/Client.ts">add</a>(agentId, { ...params }) -> Letta.Memory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a memory block and links it to the agent.

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
await client.agents.memoryBlocks.add("agent_id", {
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

**agentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Letta.CreateBlock`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MemoryBlocks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents RecallMemory

<details><summary><code>client.agents.recallMemory.<a href="/src/api/resources/agents/resources/recallMemory/client/Client.ts">getSummary</a>(agentId) -> Letta.RecallMemorySummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the summary of the recall memory of a specific agent.

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
await client.agents.recallMemory.getSummary("agent_id");
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

**requestOptions:** `RecallMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents ArchivalMemory

<details><summary><code>client.agents.archivalMemory.<a href="/src/api/resources/agents/resources/archivalMemory/client/Client.ts">getSummary</a>(agentId) -> Letta.ArchivalMemorySummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the summary of the archival memory of a specific agent.

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
await client.agents.archivalMemory.getSummary("agent_id");
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

**requestOptions:** `ArchivalMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.archivalMemory.<a href="/src/api/resources/agents/resources/archivalMemory/client/Client.ts">list</a>(agentId, { ...params }) -> Letta.Passage[]</code></summary>
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
await client.agents.archivalMemory.list("agent_id");
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

**request:** `Letta.agents.ArchivalMemoryListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArchivalMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.archivalMemory.<a href="/src/api/resources/agents/resources/archivalMemory/client/Client.ts">create</a>(agentId, { ...params }) -> Letta.Passage[]</code></summary>
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
await client.agents.archivalMemory.create("agent_id", {
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

**requestOptions:** `ArchivalMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.archivalMemory.<a href="/src/api/resources/agents/resources/archivalMemory/client/Client.ts">delete</a>(agentId, memoryId) -> unknown</code></summary>
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
await client.agents.archivalMemory.delete("agent_id", "memory_id");
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

**requestOptions:** `ArchivalMemory.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents Messages

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">list</a>(agentId, { ...params }) -> Letta.MessagesListResponse</code></summary>
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
            text: "text",
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

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">update</a>(agentId, messageId, { ...params }) -> Letta.LettaSchemasMessageMessage</code></summary>
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
await client.agents.messages.update("agent_id", "message_id");
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

**request:** `Letta.agents.MessageUpdate`

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

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">stream</a>(agentId, { ...params }) -> core.Stream<Letta.LettaStreamingResponse></code></summary>
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
const response = await client.agents.messages.stream("agent_id", {
    messages: [
        {
            role: "user",
            text: "text",
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

**request:** `Letta.agents.LettaStreamingRequest`

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

<details><summary><code>client.agents.messages.<a href="/src/api/resources/agents/resources/messages/client/Client.ts">createAsync</a>(agentId, { ...params }) -> Letta.Job</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asynchronously process a user message and return a job ID.
The actual processing happens in the background, and the status can be checked using the job ID.

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
            text: "text",
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

## Agents Memory Messages

<details><summary><code>client.agents.memory.messages.<a href="/src/api/resources/agents/resources/memory/resources/messages/client/Client.ts">listInContext</a>(agentId) -> Letta.LettaSchemasMessageMessage[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the messages in the context of a specific agent.

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
await client.agents.memory.messages.listInContext("agent_id");
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

**requestOptions:** `Messages.RequestOptions`

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

<details><summary><code>client.sources.passages.<a href="/src/api/resources/sources/resources/passages/client/Client.ts">list</a>(sourceId) -> Letta.Passage[]</code></summary>
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

**requestOptions:** `Passages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

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

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">addBaseTool</a>() -> Letta.Tool[]</code></summary>
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

## Sources

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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">retrieve</a>(agentId) -> Letta.AgentState</code></summary>
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

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">resetMessages</a>(agentId, { ...params }) -> Letta.AgentState</code></summary>
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
await client.agents.resetMessages("agent_id");
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

**request:** `Letta.ResetMessagesRequest`

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
    body: {
        identifierKey: "identifier_key",
        name: "name",
        identityType: "org",
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

**request:** `Letta.IdentitiesCreateRequest`

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
    body: {
        identifierKey: "identifier_key",
        name: "name",
        identityType: "org",
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

**request:** `Letta.IdentitiesUpsertRequest`

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

<details><summary><code>client.blocks.<a href="/src/api/resources/blocks/client/Client.ts">listAgentsForBlock</a>(blockId) -> Letta.AgentState[]</code></summary>
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
await client.blocks.listAgentsForBlock("block_id");
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

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">listProviders</a>({ ...params }) -> Letta.Provider[]</code></summary>
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
await client.providers.listProviders();
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

**request:** `Letta.ListProvidersRequest`

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

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">createProvider</a>({ ...params }) -> Letta.Provider</code></summary>
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
await client.providers.createProvider({
    name: "name",
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

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">deleteProvider</a>({ ...params }) -> unknown</code></summary>
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
await client.providers.deleteProvider({
    providerId: "provider_id",
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

**request:** `Letta.DeleteProviderRequest`

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

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">modifyProvider</a>({ ...params }) -> Letta.Provider</code></summary>
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
await client.providers.modifyProvider({
    id: "id",
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

## Runs

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">listRuns</a>() -> Letta.Run[]</code></summary>
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
await client.runs.listRuns();
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

**requestOptions:** `Runs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">listActiveRuns</a>() -> Letta.Run[]</code></summary>
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
await client.runs.listActiveRuns();
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

**requestOptions:** `Runs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">retrieveRun</a>(runId) -> Letta.Run</code></summary>
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
await client.runs.retrieveRun("run_id");
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

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">deleteRun</a>(runId) -> Letta.Run</code></summary>
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
await client.runs.deleteRun("run_id");
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

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">listRunMessages</a>(runId, { ...params }) -> Letta.LettaMessageUnion[]</code></summary>
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
await client.runs.listRunMessages("run_id");
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

**request:** `Letta.ListRunMessagesRequest`

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

<details><summary><code>client.runs.<a href="/src/api/resources/runs/client/Client.ts">retrieveRunUsage</a>(runId) -> Letta.UsageStatistics</code></summary>
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
await client.runs.retrieveRunUsage("run_id");
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

<details><summary><code>client.steps.<a href="/src/api/resources/steps/client/Client.ts">listSteps</a>({ ...params }) -> Letta.Step[]</code></summary>
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
await client.steps.listSteps();
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

**request:** `Letta.ListStepsRequest`

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

<details><summary><code>client.steps.<a href="/src/api/resources/steps/client/Client.ts">retrieveStep</a>(stepId) -> Letta.Step</code></summary>
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
await client.steps.retrieveStep("step_id");
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

## Tag

<details><summary><code>client.tag.<a href="/src/api/resources/tag/client/Client.ts">listTags</a>({ ...params }) -> string[]</code></summary>
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
await client.tag.listTags();
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

**request:** `Letta.ListTagsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tag.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Templates

<details><summary><code>client.templates.<a href="/src/api/resources/templates/client/Client.ts">createAgents</a>(project, templateVersion, { ...params }) -> Letta.TemplatesCreateAgentsResponse</code></summary>
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
await client.templates.createAgents("project", "template_version");
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

**request:** `Letta.TemplatesCreateAgentsRequest`

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

Updates a memory block of an agent.

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

Attach a block to an agent.

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

Detach a block from an agent.

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

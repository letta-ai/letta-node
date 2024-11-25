# Shared

Types:

- <code><a href="./src/resources/shared.ts">Block</a></code>
- <code><a href="./src/resources/shared.ts">Job</a></code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">Tool</a></code>
- <code><a href="./src/resources/tools.ts">ToolListResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolDeleteResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolAddBaseToolsResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolRetrieveByNameResponse</a></code>

Methods:

- <code title="post /v1/tools/">client.tools.<a href="./src/resources/tools.ts">create</a>({ ...params }) -> Tool</code>
- <code title="get /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">retrieve</a>(toolId, { ...params }) -> Tool</code>
- <code title="patch /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">update</a>(toolId, { ...params }) -> Tool</code>
- <code title="get /v1/tools/">client.tools.<a href="./src/resources/tools.ts">list</a>({ ...params }) -> ToolListResponse</code>
- <code title="delete /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">delete</a>(toolId) -> unknown</code>
- <code title="post /v1/tools/add-base-tools">client.tools.<a href="./src/resources/tools.ts">addBaseTools</a>({ ...params }) -> ToolAddBaseToolsResponse</code>
- <code title="get /v1/tools/name/{tool_name}">client.tools.<a href="./src/resources/tools.ts">retrieveByName</a>(toolName, { ...params }) -> string</code>

# Sources

Types:

- <code><a href="./src/resources/sources/sources.ts">FileMetadata</a></code>
- <code><a href="./src/resources/sources/sources.ts">Passage</a></code>
- <code><a href="./src/resources/sources/sources.ts">Source</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceRetrieveResponse</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceListResponse</a></code>

Methods:

- <code title="post /v1/sources/">client.sources.<a href="./src/resources/sources/sources.ts">create</a>({ ...params }) -> Source</code>
- <code title="get /v1/sources/name/{source_name}">client.sources.<a href="./src/resources/sources/sources.ts">retrieve</a>(sourceName, { ...params }) -> string</code>
- <code title="patch /v1/sources/{source_id}">client.sources.<a href="./src/resources/sources/sources.ts">update</a>(sourceId, { ...params }) -> Source</code>
- <code title="get /v1/sources/">client.sources.<a href="./src/resources/sources/sources.ts">list</a>({ ...params }) -> SourceListResponse</code>
- <code title="delete /v1/sources/{source_id}/{file_id}">client.sources.<a href="./src/resources/sources/sources.ts">delete</a>(sourceId, fileId, { ...params }) -> void</code>
- <code title="post /v1/sources/{source_id}/attach">client.sources.<a href="./src/resources/sources/sources.ts">attach</a>(sourceId, { ...params }) -> Source</code>
- <code title="post /v1/sources/{source_id}/detach">client.sources.<a href="./src/resources/sources/sources.ts">detach</a>(sourceId, { ...params }) -> Source</code>
- <code title="post /v1/sources/{source_id}/upload">client.sources.<a href="./src/resources/sources/sources.ts">upload</a>(sourceId, { ...params }) -> Job</code>

## Passages

Types:

- <code><a href="./src/resources/sources/passages.ts">PassageListResponse</a></code>

Methods:

- <code title="get /v1/sources/{source_id}/passages">client.sources.passages.<a href="./src/resources/sources/passages.ts">list</a>(sourceId, { ...params }) -> PassageListResponse</code>

## Files

Types:

- <code><a href="./src/resources/sources/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/sources/{source_id}/files">client.sources.files.<a href="./src/resources/sources/files.ts">list</a>(sourceId, { ...params }) -> FileListResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">AgentState</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentMigrateResponse</a></code>

Methods:

- <code title="post /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentState</code>
- <code title="get /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentId, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> AgentState</code>
- <code title="get /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId, { ...params }) -> unknown</code>
- <code title="post /v1/agents/{agent_id}/migrate">client.agents.<a href="./src/resources/agents/agents.ts">migrate</a>(agentId, { ...params }) -> AgentMigrateResponse</code>

## Messages

Types:

- <code><a href="./src/resources/agents/messages.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageUpdateResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">create</a>(agentId, { ...params }) -> MessageCreateResponse</code>
- <code title="patch /v1/agents/{agent_id}/messages/{message_id}">client.agents.messages.<a href="./src/resources/agents/messages.ts">update</a>(agentId, messageId, { ...params }) -> MessageUpdateResponse</code>
- <code title="get /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">list</a>(agentId, { ...params }) -> MessageListResponse</code>

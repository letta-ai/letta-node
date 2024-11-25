# Shared

Types:

- <code><a href="./src/resources/shared.ts">Job</a></code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">ToolCreateResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolRetrieveResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolUpdateResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolListResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolDeleteResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolRetrieveByNameResponse</a></code>

Methods:

- <code title="post /v1/tools/">client.tools.<a href="./src/resources/tools.ts">create</a>({ ...params }) -> ToolCreateResponse</code>
- <code title="get /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">retrieve</a>(toolId) -> ToolRetrieveResponse</code>
- <code title="patch /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">update</a>(toolId, { ...params }) -> ToolUpdateResponse</code>
- <code title="get /v1/tools/">client.tools.<a href="./src/resources/tools.ts">list</a>({ ...params }) -> ToolListResponse</code>
- <code title="delete /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">delete</a>(toolId, { ...params }) -> unknown</code>
- <code title="get /v1/tools/name/{tool_name}">client.tools.<a href="./src/resources/tools.ts">retrieveByName</a>(toolName, { ...params }) -> string</code>

# Sources

Types:

- <code><a href="./src/resources/sources/sources.ts">Source</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceRetrieveResponse</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceListResponse</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceDeleteResponse</a></code>

Methods:

- <code title="post /v1/sources/">client.sources.<a href="./src/resources/sources/sources.ts">create</a>({ ...params }) -> Source</code>
- <code title="get /v1/sources/name/{source_name}">client.sources.<a href="./src/resources/sources/sources.ts">retrieve</a>(sourceName, { ...params }) -> string</code>
- <code title="patch /v1/sources/{source_id}">client.sources.<a href="./src/resources/sources/sources.ts">update</a>(sourceId, { ...params }) -> Source</code>
- <code title="get /v1/sources/">client.sources.<a href="./src/resources/sources/sources.ts">list</a>({ ...params }) -> SourceListResponse</code>
- <code title="delete /v1/sources/{source_id}">client.sources.<a href="./src/resources/sources/sources.ts">delete</a>(sourceId, { ...params }) -> unknown</code>
- <code title="post /v1/sources/{source_id}/attach">client.sources.<a href="./src/resources/sources/sources.ts">attach</a>(sourceId, { ...params }) -> Source</code>
- <code title="post /v1/sources/{source_id}/detach">client.sources.<a href="./src/resources/sources/sources.ts">detach</a>(sourceId, { ...params }) -> Source</code>
- <code title="post /v1/sources/{source_id}/upload">client.sources.<a href="./src/resources/sources/sources.ts">upload</a>(sourceId, { ...params }) -> Job</code>

## Passages

Types:

- <code><a href="./src/resources/sources/passages.ts">Passage</a></code>
- <code><a href="./src/resources/sources/passages.ts">PassageListResponse</a></code>

Methods:

- <code title="get /v1/sources/{source_id}/passages">client.sources.passages.<a href="./src/resources/sources/passages.ts">list</a>(sourceId, { ...params }) -> PassageListResponse</code>

## Files

Types:

- <code><a href="./src/resources/sources/files.ts">FileMetadata</a></code>
- <code><a href="./src/resources/sources/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/sources/{source_id}/files">client.sources.files.<a href="./src/resources/sources/files.ts">list</a>(sourceId, { ...params }) -> FileListResponse</code>
- <code title="delete /v1/sources/{source_id}/{file_id}">client.sources.files.<a href="./src/resources/sources/files.ts">delete</a>(sourceId, fileId, { ...params }) -> void</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">AgentState</a></code>
- <code><a href="./src/resources/agents/agents.ts">Memory</a></code>
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

## Context

Types:

- <code><a href="./src/resources/agents/context.ts">ContextWindowOverview</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/context">client.agents.context.<a href="./src/resources/agents/context.ts">retrieve</a>(agentId, { ...params }) -> ContextWindowOverview</code>

## Tools

Methods:

- <code title="patch /v1/agents/{agent_id}/add-tool/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">add</a>(agentId, toolId, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/remove-tool/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">remove</a>(agentId, toolId, { ...params }) -> AgentState</code>

## Sources

Types:

- <code><a href="./src/resources/agents/sources.ts">SourceListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/sources">client.agents.sources.<a href="./src/resources/agents/sources.ts">list</a>(agentId) -> SourceListResponse</code>

## Memory

Types:

- <code><a href="./src/resources/agents/memory/memory.ts">ArchivalMemorySummary</a></code>
- <code><a href="./src/resources/agents/memory/memory.ts">RecallMemorySummary</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/memory">client.agents.memory.<a href="./src/resources/agents/memory/memory.ts">retrieve</a>(agentId) -> Memory</code>
- <code title="patch /v1/agents/{agent_id}/memory">client.agents.memory.<a href="./src/resources/agents/memory/memory.ts">update</a>(agentId, { ...params }) -> Memory</code>

### Messages

Types:

- <code><a href="./src/resources/agents/memory/messages.ts">MessageRetrieveResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/memory/messages">client.agents.memory.messages.<a href="./src/resources/agents/memory/messages.ts">retrieve</a>(agentId) -> MessageRetrieveResponse</code>

### Recall

Methods:

- <code title="get /v1/agents/{agent_id}/memory/recall">client.agents.memory.recall.<a href="./src/resources/agents/memory/recall.ts">retrieve</a>(agentId) -> RecallMemorySummary</code>

### Archival

Methods:

- <code title="get /v1/agents/{agent_id}/memory/archival">client.agents.memory.archival.<a href="./src/resources/agents/memory/archival.ts">retrieve</a>(agentId) -> ArchivalMemorySummary</code>

## Archival

Types:

- <code><a href="./src/resources/agents/archival.ts">ArchivalCreateResponse</a></code>
- <code><a href="./src/resources/agents/archival.ts">ArchivalListResponse</a></code>
- <code><a href="./src/resources/agents/archival.ts">ArchivalDeleteResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/archival">client.agents.archival.<a href="./src/resources/agents/archival.ts">create</a>(agentId, { ...params }) -> ArchivalCreateResponse</code>
- <code title="get /v1/agents/{agent_id}/archival">client.agents.archival.<a href="./src/resources/agents/archival.ts">list</a>(agentId, { ...params }) -> ArchivalListResponse</code>
- <code title="delete /v1/agents/{agent_id}/archival/{memory_id}">client.agents.archival.<a href="./src/resources/agents/archival.ts">delete</a>(agentId, memoryId, { ...params }) -> unknown</code>

## Messages

Types:

- <code><a href="./src/resources/agents/messages.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageUpdateResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">create</a>(agentId, { ...params }) -> MessageCreateResponse</code>
- <code title="get /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">retrieve</a>(agentId, { ...params }) -> MessageRetrieveResponse</code>
- <code title="patch /v1/agents/{agent_id}/messages/{message_id}">client.agents.messages.<a href="./src/resources/agents/messages.ts">update</a>(agentId, messageId, { ...params }) -> MessageUpdateResponse</code>

## VersionTemplate

Types:

- <code><a href="./src/resources/agents/version-template.ts">VersionTemplateCreateResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/version-template">client.agents.versionTemplate.<a href="./src/resources/agents/version-template.ts">create</a>(agentId, { ...params }) -> VersionTemplateCreateResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">EmbeddingConfig</a></code>
- <code><a href="./src/resources/models.ts">LlmConfig</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelEmbeddingResponse</a></code>

Methods:

- <code title="get /v1/models/">client.models.<a href="./src/resources/models.ts">list</a>() -> ModelListResponse</code>
- <code title="get /v1/models/embedding">client.models.<a href="./src/resources/models.ts">embedding</a>() -> ModelEmbeddingResponse</code>

# Blocks

Types:

- <code><a href="./src/resources/blocks.ts">Block</a></code>
- <code><a href="./src/resources/blocks.ts">BlockListResponse</a></code>

Methods:

- <code title="post /v1/blocks/">client.blocks.<a href="./src/resources/blocks.ts">create</a>({ ...params }) -> Block</code>
- <code title="get /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks.ts">retrieve</a>(blockId) -> Block</code>
- <code title="patch /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks.ts">update</a>(blockId, { ...params }) -> Block</code>
- <code title="get /v1/blocks/">client.blocks.<a href="./src/resources/blocks.ts">list</a>({ ...params }) -> BlockListResponse</code>
- <code title="delete /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks.ts">delete</a>(blockId) -> Block</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobActiveResponse</a></code>

Methods:

- <code title="get /v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">retrieve</a>(jobId) -> Job</code>
- <code title="get /v1/jobs/">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="delete /v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">delete</a>(jobId) -> Job</code>
- <code title="get /v1/jobs/active">client.jobs.<a href="./src/resources/jobs.ts">active</a>({ ...params }) -> JobActiveResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">Health</a></code>

Methods:

- <code title="get /v1/health/">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> Health</code>

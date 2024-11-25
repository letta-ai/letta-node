# Shared

Types:

- <code><a href="./src/resources/shared.ts">Block</a></code>
- <code><a href="./src/resources/shared.ts">Job</a></code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">Agentstate</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentState</a></code>
- <code><a href="./src/resources/agents/agents.ts">Archivalmemorysummary</a></code>
- <code><a href="./src/resources/agents/agents.ts">Contextwindowoverview</a></code>
- <code><a href="./src/resources/agents/agents.ts">Memory</a></code>
- <code><a href="./src/resources/agents/agents.ts">Recallmemorysummary</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentMigrateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentVersionTemplateResponse</a></code>

Methods:

- <code title="post /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentState</code>
- <code title="get /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentId, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> AgentState</code>
- <code title="get /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId, { ...params }) -> unknown</code>
- <code title="patch /v1/agents/{agent_id}/add-tool/{tool_id}">client.agents.<a href="./src/resources/agents/agents.ts">addTool</a>(agentId, toolId, { ...params }) -> AgentState</code>
- <code title="get /v1/agents/{agent_id}/context">client.agents.<a href="./src/resources/agents/agents.ts">context</a>(agentId, { ...params }) -> Contextwindowoverview</code>
- <code title="post /v1/agents/{agent_id}/migrate">client.agents.<a href="./src/resources/agents/agents.ts">migrate</a>(agentId, { ...params }) -> AgentMigrateResponse</code>
- <code title="patch /v1/agents/{agent_id}/remove-tool/{tool_id}">client.agents.<a href="./src/resources/agents/agents.ts">removeTool</a>(agentId, toolId, { ...params }) -> AgentState</code>
- <code title="post /v1/agents/{agent_id}/version-template">client.agents.<a href="./src/resources/agents/agents.ts">versionTemplate</a>(agentId, { ...params }) -> AgentVersionTemplateResponse</code>

## Messages

Types:

- <code><a href="./src/resources/agents/messages.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">create</a>(agentId, { ...params }) -> MessageCreateResponse</code>
- <code title="patch /v1/agents/{agent_id}/messages/{message_id}">client.agents.messages.<a href="./src/resources/agents/messages.ts">update</a>(agentId, messageId, { ...params }) -> Messageoutput</code>
- <code title="get /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">list</a>(agentId, { ...params }) -> MessageListResponse</code>

## Tools

Types:

- <code><a href="./src/resources/agents/tools.ts">ToolRetrieveResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/tools">client.agents.tools.<a href="./src/resources/agents/tools.ts">retrieve</a>(agentId, { ...params }) -> ToolRetrieveResponse</code>

## Sources

Types:

- <code><a href="./src/resources/agents/sources.ts">SourceRetrieveResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/sources">client.agents.sources.<a href="./src/resources/agents/sources.ts">retrieve</a>(agentId) -> SourceRetrieveResponse</code>

## Memory

Methods:

- <code title="get /v1/agents/{agent_id}/memory">client.agents.memory.<a href="./src/resources/agents/memory/memory.ts">retrieve</a>(agentId) -> Memory</code>
- <code title="patch /v1/agents/{agent_id}/memory">client.agents.memory.<a href="./src/resources/agents/memory/memory.ts">update</a>(agentId, { ...params }) -> Memory</code>

### Messages

Types:

- <code><a href="./src/resources/agents/memory/messages.ts">Messageoutput</a></code>
- <code><a href="./src/resources/agents/memory/messages.ts">MessageRetrieveResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/memory/messages">client.agents.memory.messages.<a href="./src/resources/agents/memory/messages.ts">retrieve</a>(agentId) -> MessageRetrieveResponse</code>

### Label

Methods:

- <code title="patch /v1/agents/{agent_id}/memory/label">client.agents.memory.label.<a href="./src/resources/agents/memory/label.ts">update</a>(agentId, { ...params }) -> Memory</code>

### Block

Methods:

- <code title="post /v1/agents/{agent_id}/memory/block">client.agents.memory.block.<a href="./src/resources/agents/memory/block.ts">create</a>(agentId, { ...params }) -> Memory</code>
- <code title="delete /v1/agents/{agent_id}/memory/block/{block_label}">client.agents.memory.block.<a href="./src/resources/agents/memory/block.ts">delete</a>(agentId, blockLabel, { ...params }) -> Memory</code>

### Limit

Methods:

- <code title="patch /v1/agents/{agent_id}/memory/limit">client.agents.memory.limit.<a href="./src/resources/agents/memory/limit.ts">update</a>(agentId, { ...params }) -> Memory</code>

### Recall

Methods:

- <code title="get /v1/agents/{agent_id}/memory/recall">client.agents.memory.recall.<a href="./src/resources/agents/memory/recall.ts">retrieve</a>(agentId) -> Recallmemorysummary</code>

### Archival

Methods:

- <code title="get /v1/agents/{agent_id}/memory/archival">client.agents.memory.archival.<a href="./src/resources/agents/memory/archival.ts">retrieve</a>(agentId) -> Archivalmemorysummary</code>

## Archival

Types:

- <code><a href="./src/resources/agents/archival.ts">ArchivalCreateResponse</a></code>
- <code><a href="./src/resources/agents/archival.ts">ArchivalRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/archival.ts">ArchivalDeleteResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/archival">client.agents.archival.<a href="./src/resources/agents/archival.ts">create</a>(agentId, { ...params }) -> ArchivalCreateResponse</code>
- <code title="get /v1/agents/{agent_id}/archival">client.agents.archival.<a href="./src/resources/agents/archival.ts">retrieve</a>(agentId, { ...params }) -> ArchivalRetrieveResponse</code>
- <code title="delete /v1/agents/{agent_id}/archival/{memory_id}">client.agents.archival.<a href="./src/resources/agents/archival.ts">delete</a>(agentId, memoryId, { ...params }) -> unknown</code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">Tool</a></code>
- <code><a href="./src/resources/tools.ts">ToolListResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolDeleteResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolAddBaseToolsResponse</a></code>

Methods:

- <code title="post /v1/tools/">client.tools.<a href="./src/resources/tools.ts">create</a>({ ...params }) -> Tool</code>
- <code title="get /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">retrieve</a>(toolId, { ...params }) -> Tool</code>
- <code title="patch /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">update</a>(toolId, { ...params }) -> Tool</code>
- <code title="get /v1/tools/">client.tools.<a href="./src/resources/tools.ts">list</a>({ ...params }) -> ToolListResponse</code>
- <code title="delete /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">delete</a>(toolId) -> unknown</code>
- <code title="post /v1/tools/add-base-tools">client.tools.<a href="./src/resources/tools.ts">addBaseTools</a>({ ...params }) -> ToolAddBaseToolsResponse</code>

# ToolsName

Types:

- <code><a href="./src/resources/tools-name.ts">ToolsNameRetrieveResponse</a></code>

Methods:

- <code title="get /v1/tools/name/{tool_name}">client.toolsName.<a href="./src/resources/tools-name.ts">retrieve</a>(toolName, { ...params }) -> string</code>

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

- <code><a href="./src/resources/sources/files.ts">Filemetadata</a></code>
- <code><a href="./src/resources/sources/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/sources/{source_id}/files">client.sources.files.<a href="./src/resources/sources/files.ts">list</a>(sourceId, { ...params }) -> FileListResponse</code>
- <code title="delete /v1/sources/{source_id}/{file_id}">client.sources.files.<a href="./src/resources/sources/files.ts">delete</a>(sourceId, fileId, { ...params }) -> void</code>

# Models

Types:

- <code><a href="./src/resources/models/models.ts">Embeddingconfig</a></code>
- <code><a href="./src/resources/models/models.ts">Llmconfig</a></code>
- <code><a href="./src/resources/models/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v1/models/">client.models.<a href="./src/resources/models/models.ts">list</a>() -> ModelListResponse</code>

## Embedding

Types:

- <code><a href="./src/resources/models/embedding.ts">EmbeddingRetrieveResponse</a></code>

Methods:

- <code title="get /v1/models/embedding">client.models.embedding.<a href="./src/resources/models/embedding.ts">retrieve</a>() -> EmbeddingRetrieveResponse</code>

# Blocks

Types:

- <code><a href="./src/resources/blocks.ts">Block</a></code>
- <code><a href="./src/resources/blocks.ts">BlockListResponse</a></code>

Methods:

- <code title="post /v1/blocks/">client.blocks.<a href="./src/resources/blocks.ts">create</a>({ ...params }) -> Block</code>
- <code title="get /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks.ts">retrieve</a>(blockId, { ...params }) -> Block</code>
- <code title="patch /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks.ts">update</a>(blockId, { ...params }) -> Block</code>
- <code title="get /v1/blocks/">client.blocks.<a href="./src/resources/blocks.ts">list</a>({ ...params }) -> BlockListResponse</code>
- <code title="delete /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks.ts">delete</a>(blockId, { ...params }) -> Block</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs/jobs.ts">JobListResponse</a></code>

Methods:

- <code title="get /v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs/jobs.ts">retrieve</a>(jobId) -> Job</code>
- <code title="get /v1/jobs/">client.jobs.<a href="./src/resources/jobs/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="delete /v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs/jobs.ts">delete</a>(jobId) -> Job</code>

## Active

Types:

- <code><a href="./src/resources/jobs/active.ts">ActiveListResponse</a></code>

Methods:

- <code title="get /v1/jobs/active">client.jobs.active.<a href="./src/resources/jobs/active.ts">list</a>({ ...params }) -> ActiveListResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">Health</a></code>

Methods:

- <code title="get /v1/health/">client.health.<a href="./src/resources/health.ts">retrieve</a>() -> Health</code>

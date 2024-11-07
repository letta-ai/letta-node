# Shared

Types:

- <code><a href="./src/resources/shared.ts">Job</a></code>
- <code><a href="./src/resources/shared.ts">Memory</a></code>
- <code><a href="./src/resources/shared.ts">Passage</a></code>
- <code><a href="./src/resources/shared.ts">Source</a></code>
- <code><a href="./src/resources/shared.ts">Tool</a></code>

# Tools

Types:

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

- <code><a href="./src/resources/sources/sources.ts">SourceListResponse</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceRetrieveByNameResponse</a></code>

Methods:

- <code title="post /v1/sources/">client.sources.<a href="./src/resources/sources/sources.ts">create</a>({ ...params }) -> Source</code>
- <code title="get /v1/sources/{source_id}">client.sources.<a href="./src/resources/sources/sources.ts">retrieve</a>(sourceId, { ...params }) -> Source</code>
- <code title="patch /v1/sources/{source_id}">client.sources.<a href="./src/resources/sources/sources.ts">update</a>(sourceId, { ...params }) -> Source</code>
- <code title="get /v1/sources/">client.sources.<a href="./src/resources/sources/sources.ts">list</a>({ ...params }) -> SourceListResponse</code>
- <code title="delete /v1/sources/{source_id}/{file_id}">client.sources.<a href="./src/resources/sources/sources.ts">delete</a>(sourceId, fileId, { ...params }) -> void</code>
- <code title="post /v1/sources/{source_id}/attach">client.sources.<a href="./src/resources/sources/sources.ts">attach</a>(sourceId, { ...params }) -> Source</code>
- <code title="post /v1/sources/{source_id}/detach">client.sources.<a href="./src/resources/sources/sources.ts">detach</a>(sourceId, { ...params }) -> Source</code>
- <code title="get /v1/sources/name/{source_name}">client.sources.<a href="./src/resources/sources/sources.ts">retrieveByName</a>(sourceName, { ...params }) -> string</code>
- <code title="post /v1/sources/{source_id}/upload">client.sources.<a href="./src/resources/sources/sources.ts">upload</a>(sourceId, { ...params }) -> Job</code>

## Passages

Types:

- <code><a href="./src/resources/sources/passages.ts">PassageListResponse</a></code>

Methods:

- <code title="get /v1/sources/{source_id}/passages">client.sources.passages.<a href="./src/resources/sources/passages.ts">list</a>(sourceId, { ...params }) -> PassageListResponse</code>

## Files

Types:

- <code><a href="./src/resources/sources/files.ts">Filemetadata</a></code>
- <code><a href="./src/resources/sources/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/sources/{source_id}/files">client.sources.files.<a href="./src/resources/sources/files.ts">list</a>(sourceId, { ...params }) -> FileListResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">Agentstate</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>

Methods:

- <code title="post /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> Agentstate</code>
- <code title="get /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentId, { ...params }) -> Agentstate</code>
- <code title="patch /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> Agentstate</code>
- <code title="get /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId, { ...params }) -> unknown</code>

## Context

Types:

- <code><a href="./src/resources/agents/context.ts">Contextwindowoverview</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/context">client.agents.context.<a href="./src/resources/agents/context.ts">retrieve</a>(agentId, { ...params }) -> Contextwindowoverview</code>

## Tools

Types:

- <code><a href="./src/resources/agents/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/tools">client.agents.tools.<a href="./src/resources/agents/tools.ts">list</a>(agentId, { ...params }) -> ToolListResponse</code>
- <code title="patch /v1/agents/{agent_id}/add-tool/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">add</a>(agentId, toolId, { ...params }) -> Agentstate</code>
- <code title="patch /v1/agents/{agent_id}/remove-tool/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">remove</a>(agentId, toolId, { ...params }) -> Agentstate</code>

## Sources

Types:

- <code><a href="./src/resources/agents/sources.ts">SourceListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/sources">client.agents.sources.<a href="./src/resources/agents/sources.ts">list</a>(agentId) -> SourceListResponse</code>

## Memory

Types:

- <code><a href="./src/resources/agents/memory/memory.ts">Archivalmemorysummary</a></code>
- <code><a href="./src/resources/agents/memory/memory.ts">Recallmemorysummary</a></code>

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

- <code title="get /v1/agents/{agent_id}/memory/recall">client.agents.memory.recall.<a href="./src/resources/agents/memory/recall.ts">retrieve</a>(agentId) -> Recallmemorysummary</code>

### Archival

Methods:

- <code title="get /v1/agents/{agent_id}/memory/archival">client.agents.memory.archival.<a href="./src/resources/agents/memory/archival.ts">retrieve</a>(agentId) -> Archivalmemorysummary</code>

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

- <code><a href="./src/resources/agents/messages.ts">Messageoutput</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageProcessResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">retrieve</a>(agentId, { ...params }) -> MessageRetrieveResponse</code>
- <code title="patch /v1/agents/{agent_id}/messages/{message_id}">client.agents.messages.<a href="./src/resources/agents/messages.ts">update</a>(agentId, messageId, { ...params }) -> Messageoutput</code>
- <code title="post /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">process</a>(agentId, { ...params }) -> unknown</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">Embeddingconfig</a></code>
- <code><a href="./src/resources/models.ts">Llmconfig</a></code>
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

# AdminUsers

Types:

- <code><a href="./src/resources/admin-users/admin-users.ts">User</a></code>
- <code><a href="./src/resources/admin-users/admin-users.ts">AdminUserListResponse</a></code>

Methods:

- <code title="post /v1/admin/users/">client.adminUsers.<a href="./src/resources/admin-users/admin-users.ts">create</a>({ ...params }) -> User</code>
- <code title="put /v1/admin/users/">client.adminUsers.<a href="./src/resources/admin-users/admin-users.ts">update</a>({ ...params }) -> User</code>
- <code title="get /v1/admin/users/">client.adminUsers.<a href="./src/resources/admin-users/admin-users.ts">list</a>({ ...params }) -> AdminUserListResponse</code>
- <code title="delete /v1/admin/users/">client.adminUsers.<a href="./src/resources/admin-users/admin-users.ts">delete</a>({ ...params }) -> User</code>

## Keys

Types:

- <code><a href="./src/resources/admin-users/keys.ts">APIKey</a></code>
- <code><a href="./src/resources/admin-users/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="post /v1/admin/users/keys">client.adminUsers.keys.<a href="./src/resources/admin-users/keys.ts">create</a>({ ...params }) -> APIKey</code>
- <code title="get /v1/admin/users/keys">client.adminUsers.keys.<a href="./src/resources/admin-users/keys.ts">list</a>({ ...params }) -> KeyListResponse</code>
- <code title="delete /v1/admin/users/keys">client.adminUsers.keys.<a href="./src/resources/admin-users/keys.ts">delete</a>({ ...params }) -> APIKey</code>

# AdminOrgs

Types:

- <code><a href="./src/resources/admin-orgs.ts">AdminOrgListResponse</a></code>

Methods:

- <code title="get /v1/admin/orgs/">client.adminOrgs.<a href="./src/resources/admin-orgs.ts">list</a>({ ...params }) -> AdminOrgListResponse</code>

# AdminOrganizations

Types:

- <code><a href="./src/resources/admin-organizations.ts">Organization</a></code>

Methods:

- <code title="post /v1/admin/orgs/">client.adminOrganizations.<a href="./src/resources/admin-organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="delete /v1/admin/orgs/">client.adminOrganizations.<a href="./src/resources/admin-organizations.ts">delete</a>({ ...params }) -> Organization</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthResponse</a></code>

Methods:

- <code title="post /v1/auth">client.auth.<a href="./src/resources/auth.ts">authenticate</a>({ ...params }) -> AuthResponse</code>

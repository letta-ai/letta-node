# Archives

Types:

- <code><a href="./src/resources/archives.ts">Archive</a></code>
- <code><a href="./src/resources/archives.ts">VectorDBProvider</a></code>
- <code><a href="./src/resources/archives.ts">ArchiveRetrieveResponse</a></code>

Methods:

- <code title="post /v1/archives/">client.archives.<a href="./src/resources/archives.ts">update</a>({ ...params }) -> Archive</code>
- <code title="get /v1/archives/">client.archives.<a href="./src/resources/archives.ts">retrieve</a>({ ...params }) -> ArchiveRetrieveResponse</code>

# Tools

Types:

- <code><a href="./src/resources/tools/tools.ts">NpmRequirement</a></code>
- <code><a href="./src/resources/tools/tools.ts">PipRequirement</a></code>
- <code><a href="./src/resources/tools/tools.ts">Tool</a></code>
- <code><a href="./src/resources/tools/tools.ts">ToolCreate</a></code>
- <code><a href="./src/resources/tools/tools.ts">ToolReturnMessage</a></code>
- <code><a href="./src/resources/tools/tools.ts">ToolType</a></code>
- <code><a href="./src/resources/tools/tools.ts">ToolListResponse</a></code>
- <code><a href="./src/resources/tools/tools.ts">ToolDeleteResponse</a></code>
- <code><a href="./src/resources/tools/tools.ts">ToolCountResponse</a></code>
- <code><a href="./src/resources/tools/tools.ts">ToolUpsertBaseResponse</a></code>

Methods:

- <code title="post /v1/tools/">client.tools.<a href="./src/resources/tools/tools.ts">create</a>({ ...params }) -> Tool</code>
- <code title="get /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools/tools.ts">retrieve</a>(toolID) -> Tool</code>
- <code title="get /v1/tools/">client.tools.<a href="./src/resources/tools/tools.ts">list</a>({ ...params }) -> ToolListResponse</code>
- <code title="delete /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools/tools.ts">delete</a>(toolID) -> unknown</code>
- <code title="get /v1/tools/count">client.tools.<a href="./src/resources/tools/tools.ts">count</a>({ ...params }) -> ToolCountResponse</code>
- <code title="patch /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools/tools.ts">modify</a>(toolID, { ...params }) -> Tool</code>
- <code title="post /v1/tools/run">client.tools.<a href="./src/resources/tools/tools.ts">run</a>({ ...params }) -> ToolReturnMessage</code>
- <code title="put /v1/tools/">client.tools.<a href="./src/resources/tools/tools.ts">upsert</a>({ ...params }) -> Tool</code>
- <code title="post /v1/tools/add-base-tools">client.tools.<a href="./src/resources/tools/tools.ts">upsertBase</a>() -> ToolUpsertBaseResponse</code>

## Composio

Methods:

- <code title="post /v1/tools/composio/{composio_action_name}">client.tools.composio.<a href="./src/resources/tools/composio/composio.ts">add</a>(composioActionName) -> Tool</code>

### Apps

Types:

- <code><a href="./src/resources/tools/composio/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/tools/composio/apps.ts">AppListActionsResponse</a></code>

Methods:

- <code title="get /v1/tools/composio/apps">client.tools.composio.apps.<a href="./src/resources/tools/composio/apps.ts">list</a>() -> AppListResponse</code>
- <code title="get /v1/tools/composio/apps/{composio_app_name}/actions">client.tools.composio.apps.<a href="./src/resources/tools/composio/apps.ts">listActions</a>(composioAppName) -> AppListActionsResponse</code>

## Mcp

### Servers

Types:

- <code><a href="./src/resources/tools/mcp/servers/servers.ts">McpServerType</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">SseServerConfig</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">StdioServerConfig</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">StreamableHTTPServerConfig</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">ServerUpdateResponse</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">ServerListResponse</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">ServerDeleteResponse</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">ServerAddResponse</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">ServerConnectResponse</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">ServerResyncResponse</a></code>
- <code><a href="./src/resources/tools/mcp/servers/servers.ts">ServerTestResponse</a></code>

Methods:

- <code title="patch /v1/tools/mcp/servers/{mcp_server_name}">client.tools.mcp.servers.<a href="./src/resources/tools/mcp/servers/servers.ts">update</a>(mcpServerName, { ...params }) -> ServerUpdateResponse</code>
- <code title="get /v1/tools/mcp/servers">client.tools.mcp.servers.<a href="./src/resources/tools/mcp/servers/servers.ts">list</a>() -> ServerListResponse</code>
- <code title="delete /v1/tools/mcp/servers/{mcp_server_name}">client.tools.mcp.servers.<a href="./src/resources/tools/mcp/servers/servers.ts">delete</a>(mcpServerName) -> ServerDeleteResponse</code>
- <code title="put /v1/tools/mcp/servers">client.tools.mcp.servers.<a href="./src/resources/tools/mcp/servers/servers.ts">add</a>({ ...params }) -> ServerAddResponse</code>
- <code title="post /v1/tools/mcp/servers/connect">client.tools.mcp.servers.<a href="./src/resources/tools/mcp/servers/servers.ts">connect</a>({ ...params }) -> unknown</code>
- <code title="post /v1/tools/mcp/servers/{mcp_server_name}/{mcp_tool_name}">client.tools.mcp.servers.<a href="./src/resources/tools/mcp/servers/servers.ts">registerTool</a>(mcpToolName, { ...params }) -> Tool</code>
- <code title="post /v1/tools/mcp/servers/{mcp_server_name}/resync">client.tools.mcp.servers.<a href="./src/resources/tools/mcp/servers/servers.ts">resync</a>(mcpServerName, { ...params }) -> unknown</code>
- <code title="post /v1/tools/mcp/servers/test">client.tools.mcp.servers.<a href="./src/resources/tools/mcp/servers/servers.ts">test</a>({ ...params }) -> unknown</code>

#### Tools

Types:

- <code><a href="./src/resources/tools/mcp/servers/tools.ts">ToolListResponse</a></code>
- <code><a href="./src/resources/tools/mcp/servers/tools.ts">ToolExecuteResponse</a></code>

Methods:

- <code title="get /v1/tools/mcp/servers/{mcp_server_name}/tools">client.tools.mcp.servers.tools.<a href="./src/resources/tools/mcp/servers/tools.ts">list</a>(mcpServerName) -> ToolListResponse</code>
- <code title="post /v1/tools/mcp/servers/{mcp_server_name}/tools/{tool_name}/execute">client.tools.mcp.servers.tools.<a href="./src/resources/tools/mcp/servers/tools.ts">execute</a>(toolName, { ...params }) -> unknown</code>

### OAuth

Types:

- <code><a href="./src/resources/tools/mcp/oauth.ts">OAuthCallbackResponse</a></code>

Methods:

- <code title="get /v1/tools/mcp/oauth/callback/{session_id}">client.tools.mcp.oauth.<a href="./src/resources/tools/mcp/oauth.ts">callback</a>(sessionID, { ...params }) -> unknown</code>

# Sources

Types:

- <code><a href="./src/resources/sources/sources.ts">DuplicateFileHandling</a></code>
- <code><a href="./src/resources/sources/sources.ts">FileMetadata</a></code>
- <code><a href="./src/resources/sources/sources.ts">FileProcessingStatus</a></code>
- <code><a href="./src/resources/sources/sources.ts">OrganizationSourcesStats</a></code>
- <code><a href="./src/resources/sources/sources.ts">Passage</a></code>
- <code><a href="./src/resources/sources/sources.ts">Source</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceCreate</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceUpdate</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceListResponse</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceDeleteResponse</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceCountResponse</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceGetAgentsResponse</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceGetByNameResponse</a></code>
- <code><a href="./src/resources/sources/sources.ts">SourceListPassagesResponse</a></code>

Methods:

- <code title="post /v1/sources/">client.sources.<a href="./src/resources/sources/sources.ts">create</a>({ ...params }) -> Source</code>
- <code title="get /v1/sources/{source_id}">client.sources.<a href="./src/resources/sources/sources.ts">retrieve</a>(sourceID) -> Source</code>
- <code title="patch /v1/sources/{source_id}">client.sources.<a href="./src/resources/sources/sources.ts">update</a>(sourceID, { ...params }) -> Source</code>
- <code title="get /v1/sources/">client.sources.<a href="./src/resources/sources/sources.ts">list</a>() -> SourceListResponse</code>
- <code title="delete /v1/sources/{source_id}">client.sources.<a href="./src/resources/sources/sources.ts">delete</a>(sourceID) -> unknown</code>
- <code title="get /v1/sources/count">client.sources.<a href="./src/resources/sources/sources.ts">count</a>() -> SourceCountResponse</code>
- <code title="delete /v1/sources/{source_id}/{file_id}">client.sources.<a href="./src/resources/sources/sources.ts">deleteFile</a>(fileID, { ...params }) -> void</code>
- <code title="get /v1/sources/{source_id}/agents">client.sources.<a href="./src/resources/sources/sources.ts">getAgents</a>(sourceID) -> SourceGetAgentsResponse</code>
- <code title="get /v1/sources/name/{source_name}">client.sources.<a href="./src/resources/sources/sources.ts">getByName</a>(sourceName) -> string</code>
- <code title="get /v1/sources/metadata">client.sources.<a href="./src/resources/sources/sources.ts">getMetadata</a>({ ...params }) -> OrganizationSourcesStats</code>
- <code title="get /v1/sources/{source_id}/passages">client.sources.<a href="./src/resources/sources/sources.ts">listPassages</a>(sourceID, { ...params }) -> SourceListPassagesResponse</code>
- <code title="post /v1/sources/{source_id}/upload">client.sources.<a href="./src/resources/sources/sources.ts">uploadFile</a>(sourceID, { ...params }) -> FileMetadata</code>

## Files

Types:

- <code><a href="./src/resources/sources/files.ts">FileListResponse</a></code>

Methods:

- <code title="get /v1/sources/{source_id}/files/{file_id}">client.sources.files.<a href="./src/resources/sources/files.ts">retrieve</a>(fileID, { ...params }) -> FileMetadata</code>
- <code title="get /v1/sources/{source_id}/files">client.sources.files.<a href="./src/resources/sources/files.ts">list</a>(sourceID, { ...params }) -> FileListResponse</code>

# Folders

Types:

- <code><a href="./src/resources/folders.ts">Folder</a></code>
- <code><a href="./src/resources/folders.ts">FolderListResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderDeleteResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderCountResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderGetByNameResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderListAgentsResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderListFilesResponse</a></code>
- <code><a href="./src/resources/folders.ts">FolderListPassagesResponse</a></code>

Methods:

- <code title="post /v1/folders/">client.folders.<a href="./src/resources/folders.ts">create</a>({ ...params }) -> Folder</code>
- <code title="get /v1/folders/{folder_id}">client.folders.<a href="./src/resources/folders.ts">retrieve</a>(folderID) -> Folder</code>
- <code title="patch /v1/folders/{folder_id}">client.folders.<a href="./src/resources/folders.ts">update</a>(folderID, { ...params }) -> Folder</code>
- <code title="get /v1/folders/">client.folders.<a href="./src/resources/folders.ts">list</a>({ ...params }) -> FolderListResponse</code>
- <code title="delete /v1/folders/{folder_id}">client.folders.<a href="./src/resources/folders.ts">delete</a>(folderID) -> unknown</code>
- <code title="get /v1/folders/count">client.folders.<a href="./src/resources/folders.ts">count</a>() -> FolderCountResponse</code>
- <code title="delete /v1/folders/{folder_id}/{file_id}">client.folders.<a href="./src/resources/folders.ts">deleteFile</a>(fileID, { ...params }) -> void</code>
- <code title="get /v1/folders/name/{folder_name}">client.folders.<a href="./src/resources/folders.ts">getByName</a>(folderName) -> string</code>
- <code title="get /v1/folders/{folder_id}/agents">client.folders.<a href="./src/resources/folders.ts">listAgents</a>(folderID, { ...params }) -> FolderListAgentsResponse</code>
- <code title="get /v1/folders/{folder_id}/files">client.folders.<a href="./src/resources/folders.ts">listFiles</a>(folderID, { ...params }) -> FolderListFilesResponse</code>
- <code title="get /v1/folders/{folder_id}/passages">client.folders.<a href="./src/resources/folders.ts">listPassages</a>(folderID, { ...params }) -> FolderListPassagesResponse</code>
- <code title="get /v1/folders/metadata">client.folders.<a href="./src/resources/folders.ts">retrieveMetadata</a>({ ...params }) -> OrganizationSourcesStats</code>
- <code title="post /v1/folders/{folder_id}/upload">client.folders.<a href="./src/resources/folders.ts">uploadFile</a>(folderID, { ...params }) -> FileMetadata</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">AgentEnvironmentVariable</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentState</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentType</a></code>
- <code><a href="./src/resources/agents/agents.ts">ChildToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">ConditionalToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">ContinueToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">InitToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">JsonObjectResponseFormat</a></code>
- <code><a href="./src/resources/agents/agents.ts">JsonSchemaResponseFormat</a></code>
- <code><a href="./src/resources/agents/agents.ts">LettaMessageContentUnion</a></code>
- <code><a href="./src/resources/agents/agents.ts">MaxCountPerStepToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">MessageCreate</a></code>
- <code><a href="./src/resources/agents/agents.ts">ParentToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">RequiredBeforeExitToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">RequiresApprovalToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">TerminalToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">TextResponseFormat</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentCountResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentExportResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentImportResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListGroupsResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentMigrateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentRetrieveContextResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentSearchResponse</a></code>

Methods:

- <code title="post /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentState</code>
- <code title="get /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentID, { ...params }) -> AgentState</code>
- <code title="get /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentID) -> unknown</code>
- <code title="get /v1/agents/count">client.agents.<a href="./src/resources/agents/agents.ts">count</a>() -> AgentCountResponse</code>
- <code title="get /v1/agents/{agent_id}/export">client.agents.<a href="./src/resources/agents/agents.ts">export</a>(agentID, { ...params }) -> string</code>
- <code title="post /v1/agents/import">client.agents.<a href="./src/resources/agents/agents.ts">import</a>({ ...params }) -> AgentImportResponse</code>
- <code title="get /v1/agents/{agent_id}/groups">client.agents.<a href="./src/resources/agents/agents.ts">listGroups</a>(agentID, { ...params }) -> AgentListGroupsResponse</code>
- <code title="post /v1/agents/{agent_id}/migrate">client.agents.<a href="./src/resources/agents/agents.ts">migrate</a>(agentID, { ...params }) -> AgentMigrateResponse</code>
- <code title="patch /v1/agents/{agent_id}/reset-messages">client.agents.<a href="./src/resources/agents/agents.ts">resetMessages</a>(agentID, { ...params }) -> AgentState</code>
- <code title="get /v1/agents/{agent_id}/context">client.agents.<a href="./src/resources/agents/agents.ts">retrieveContext</a>(agentID) -> AgentRetrieveContextResponse</code>
- <code title="post /v1/agents/search">client.agents.<a href="./src/resources/agents/agents.ts">search</a>({ ...params }) -> AgentSearchResponse</code>
- <code title="post /v1/agents/{agent_id}/summarize">client.agents.<a href="./src/resources/agents/agents.ts">summarize</a>(agentID, { ...params }) -> void</code>

## Tools

Types:

- <code><a href="./src/resources/agents/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/tools">client.agents.tools.<a href="./src/resources/agents/tools.ts">list</a>(agentID) -> ToolListResponse</code>
- <code title="patch /v1/agents/{agent_id}/tools/attach/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">attach</a>(toolID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/tools/detach/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">detach</a>(toolID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/tools/approval/{tool_name}">client.agents.tools.<a href="./src/resources/agents/tools.ts">modifyApproval</a>(toolName, { ...params }) -> AgentState</code>

## Sources

Types:

- <code><a href="./src/resources/agents/sources.ts">SourceListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/sources">client.agents.sources.<a href="./src/resources/agents/sources.ts">list</a>(agentID) -> SourceListResponse</code>
- <code title="patch /v1/agents/{agent_id}/sources/attach/{source_id}">client.agents.sources.<a href="./src/resources/agents/sources.ts">attach</a>(sourceID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/sources/detach/{source_id}">client.agents.sources.<a href="./src/resources/agents/sources.ts">detach</a>(sourceID, { ...params }) -> AgentState</code>

## Folders

Types:

- <code><a href="./src/resources/agents/folders.ts">FolderListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/folders">client.agents.folders.<a href="./src/resources/agents/folders.ts">list</a>(agentID) -> FolderListResponse</code>
- <code title="patch /v1/agents/{agent_id}/folders/attach/{folder_id}">client.agents.folders.<a href="./src/resources/agents/folders.ts">attach</a>(folderID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/folders/detach/{folder_id}">client.agents.folders.<a href="./src/resources/agents/folders.ts">detach</a>(folderID, { ...params }) -> AgentState</code>

## Files

Types:

- <code><a href="./src/resources/agents/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/agents/files.ts">FileCloseResponse</a></code>
- <code><a href="./src/resources/agents/files.ts">FileCloseAllResponse</a></code>
- <code><a href="./src/resources/agents/files.ts">FileOpenResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/files">client.agents.files.<a href="./src/resources/agents/files.ts">list</a>(agentID, { ...params }) -> FileListResponse</code>
- <code title="patch /v1/agents/{agent_id}/files/{file_id}/close">client.agents.files.<a href="./src/resources/agents/files.ts">close</a>(fileID, { ...params }) -> unknown</code>
- <code title="patch /v1/agents/{agent_id}/files/close-all">client.agents.files.<a href="./src/resources/agents/files.ts">closeAll</a>(agentID) -> FileCloseAllResponse</code>
- <code title="patch /v1/agents/{agent_id}/files/{file_id}/open">client.agents.files.<a href="./src/resources/agents/files.ts">open</a>(fileID, { ...params }) -> FileOpenResponse</code>

## CoreMemory

Types:

- <code><a href="./src/resources/agents/core-memory/core-memory.ts">Memory</a></code>
- <code><a href="./src/resources/agents/core-memory/core-memory.ts">CoreMemoryRetrieveVariablesResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/core-memory">client.agents.coreMemory.<a href="./src/resources/agents/core-memory/core-memory.ts">retrieve</a>(agentID) -> Memory</code>
- <code title="get /v1/agents/{agent_id}/core-memory/variables">client.agents.coreMemory.<a href="./src/resources/agents/core-memory/core-memory.ts">retrieveVariables</a>(agentID) -> CoreMemoryRetrieveVariablesResponse</code>

### Blocks

Types:

- <code><a href="./src/resources/agents/core-memory/blocks.ts">Block</a></code>
- <code><a href="./src/resources/agents/core-memory/blocks.ts">BlockUpdate</a></code>
- <code><a href="./src/resources/agents/core-memory/blocks.ts">BlockListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/core-memory/blocks/{block_label}">client.agents.coreMemory.blocks.<a href="./src/resources/agents/core-memory/blocks.ts">retrieve</a>(blockLabel, { ...params }) -> Block</code>
- <code title="patch /v1/agents/{agent_id}/core-memory/blocks/{block_label}">client.agents.coreMemory.blocks.<a href="./src/resources/agents/core-memory/blocks.ts">update</a>(blockLabel, { ...params }) -> Block</code>
- <code title="get /v1/agents/{agent_id}/core-memory/blocks">client.agents.coreMemory.blocks.<a href="./src/resources/agents/core-memory/blocks.ts">list</a>(agentID) -> BlockListResponse</code>
- <code title="patch /v1/agents/{agent_id}/core-memory/blocks/attach/{block_id}">client.agents.coreMemory.blocks.<a href="./src/resources/agents/core-memory/blocks.ts">attach</a>(blockID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/core-memory/blocks/detach/{block_id}">client.agents.coreMemory.blocks.<a href="./src/resources/agents/core-memory/blocks.ts">detach</a>(blockID, { ...params }) -> AgentState</code>

## ArchivalMemory

Types:

- <code><a href="./src/resources/agents/archival-memory.ts">ArchivalMemoryCreateResponse</a></code>
- <code><a href="./src/resources/agents/archival-memory.ts">ArchivalMemoryListResponse</a></code>
- <code><a href="./src/resources/agents/archival-memory.ts">ArchivalMemoryDeleteResponse</a></code>
- <code><a href="./src/resources/agents/archival-memory.ts">ArchivalMemorySearchResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/archival-memory">client.agents.archivalMemory.<a href="./src/resources/agents/archival-memory.ts">create</a>(agentID, { ...params }) -> ArchivalMemoryCreateResponse</code>
- <code title="get /v1/agents/{agent_id}/archival-memory">client.agents.archivalMemory.<a href="./src/resources/agents/archival-memory.ts">list</a>(agentID, { ...params }) -> ArchivalMemoryListResponse</code>
- <code title="delete /v1/agents/{agent_id}/archival-memory/{memory_id}">client.agents.archivalMemory.<a href="./src/resources/agents/archival-memory.ts">delete</a>(memoryID, { ...params }) -> unknown</code>
- <code title="get /v1/agents/{agent_id}/archival-memory/search">client.agents.archivalMemory.<a href="./src/resources/agents/archival-memory.ts">search</a>(agentID, { ...params }) -> ArchivalMemorySearchResponse</code>

## Messages

Types:

- <code><a href="./src/resources/agents/messages.ts">ApprovalCreate</a></code>
- <code><a href="./src/resources/agents/messages.ts">ApprovalRequestMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">ApprovalResponseMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">AssistantMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">HiddenReasoningMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">ImageContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">JobStatus</a></code>
- <code><a href="./src/resources/agents/messages.ts">JobType</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaAssistantMessageContentUnion</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaMessageUnion</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaRequest</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaStreamingRequest</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaUserMessageContentUnion</a></code>
- <code><a href="./src/resources/agents/messages.ts">Message</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageRole</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageType</a></code>
- <code><a href="./src/resources/agents/messages.ts">OmittedReasoningContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">ReasoningContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">ReasoningMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">RedactedReasoningContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">Run</a></code>
- <code><a href="./src/resources/agents/messages.ts">SystemMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">TextContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">ToolCall</a></code>
- <code><a href="./src/resources/agents/messages.ts">ToolCallContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">ToolCallDelta</a></code>
- <code><a href="./src/resources/agents/messages.ts">ToolCallMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">ToolReturn</a></code>
- <code><a href="./src/resources/agents/messages.ts">ToolReturnContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">UpdateAssistantMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">UpdateReasoningMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">UpdateSystemMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">UpdateUserMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">UserMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageUpdateResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageCancelResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessagePreviewRawPayloadResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageSearchResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageSendStreamResponse</a></code>

Methods:

- <code title="patch /v1/agents/{agent_id}/messages/{message_id}">client.agents.messages.<a href="./src/resources/agents/messages.ts">update</a>(messageID, { ...params }) -> MessageUpdateResponse</code>
- <code title="get /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">list</a>(agentID, { ...params }) -> MessageListResponse</code>
- <code title="post /v1/agents/{agent_id}/messages/cancel">client.agents.messages.<a href="./src/resources/agents/messages.ts">cancel</a>(agentID, { ...params }) -> MessageCancelResponse</code>
- <code title="post /v1/agents/{agent_id}/messages/preview-raw-payload">client.agents.messages.<a href="./src/resources/agents/messages.ts">previewRawPayload</a>(agentID, { ...params }) -> MessagePreviewRawPayloadResponse</code>
- <code title="post /v1/agents/messages/search">client.agents.messages.<a href="./src/resources/agents/messages.ts">search</a>({ ...params }) -> MessageSearchResponse</code>
- <code title="post /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">send</a>(agentID, { ...params }) -> LettaResponse</code>
- <code title="post /v1/agents/{agent_id}/messages/async">client.agents.messages.<a href="./src/resources/agents/messages.ts">sendAsync</a>(agentID, { ...params }) -> Run</code>
- <code title="post /v1/agents/{agent_id}/messages/stream">client.agents.messages.<a href="./src/resources/agents/messages.ts">sendStream</a>(agentID, { ...params }) -> unknown</code>

# Groups

Types:

- <code><a href="./src/resources/groups/groups.ts">DynamicManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">Group</a></code>
- <code><a href="./src/resources/groups/groups.ts">ManagerType</a></code>
- <code><a href="./src/resources/groups/groups.ts">RoundRobinManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">SleeptimeManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">SupervisorManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">VoiceSleeptimeManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupDeleteResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupCountResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupResetMessagesResponse</a></code>

Methods:

- <code title="post /v1/groups/">client.groups.<a href="./src/resources/groups/groups.ts">create</a>({ ...params }) -> Group</code>
- <code title="get /v1/groups/{group_id}">client.groups.<a href="./src/resources/groups/groups.ts">retrieve</a>(groupID) -> Group</code>
- <code title="patch /v1/groups/{group_id}">client.groups.<a href="./src/resources/groups/groups.ts">update</a>(groupID, { ...params }) -> Group</code>
- <code title="get /v1/groups/">client.groups.<a href="./src/resources/groups/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>
- <code title="delete /v1/groups/{group_id}">client.groups.<a href="./src/resources/groups/groups.ts">delete</a>(groupID) -> unknown</code>
- <code title="get /v1/groups/count">client.groups.<a href="./src/resources/groups/groups.ts">count</a>() -> GroupCountResponse</code>
- <code title="patch /v1/groups/{group_id}/reset-messages">client.groups.<a href="./src/resources/groups/groups.ts">resetMessages</a>(groupID) -> unknown</code>

## Messages

Types:

- <code><a href="./src/resources/groups/messages.ts">MessageUpdateResponse</a></code>
- <code><a href="./src/resources/groups/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/groups/messages.ts">MessageSendStreamResponse</a></code>

Methods:

- <code title="patch /v1/groups/{group_id}/messages/{message_id}">client.groups.messages.<a href="./src/resources/groups/messages.ts">update</a>(messageID, { ...params }) -> MessageUpdateResponse</code>
- <code title="get /v1/groups/{group_id}/messages">client.groups.messages.<a href="./src/resources/groups/messages.ts">list</a>(groupID, { ...params }) -> MessageListResponse</code>
- <code title="post /v1/groups/{group_id}/messages">client.groups.messages.<a href="./src/resources/groups/messages.ts">send</a>(groupID, { ...params }) -> LettaResponse</code>
- <code title="post /v1/groups/{group_id}/messages/stream">client.groups.messages.<a href="./src/resources/groups/messages.ts">sendStream</a>(groupID, { ...params }) -> unknown</code>

# Identities

Types:

- <code><a href="./src/resources/identities.ts">Identity</a></code>
- <code><a href="./src/resources/identities.ts">IdentityProperty</a></code>
- <code><a href="./src/resources/identities.ts">IdentityType</a></code>
- <code><a href="./src/resources/identities.ts">IdentityListResponse</a></code>
- <code><a href="./src/resources/identities.ts">IdentityDeleteResponse</a></code>
- <code><a href="./src/resources/identities.ts">IdentityCountResponse</a></code>
- <code><a href="./src/resources/identities.ts">IdentityListAgentsResponse</a></code>
- <code><a href="./src/resources/identities.ts">IdentityListBlocksResponse</a></code>
- <code><a href="./src/resources/identities.ts">IdentityUpsertPropertiesResponse</a></code>

Methods:

- <code title="post /v1/identities/">client.identities.<a href="./src/resources/identities.ts">create</a>({ ...params }) -> Identity</code>
- <code title="get /v1/identities/{identity_id}">client.identities.<a href="./src/resources/identities.ts">retrieve</a>(identityID) -> Identity</code>
- <code title="get /v1/identities/">client.identities.<a href="./src/resources/identities.ts">list</a>({ ...params }) -> IdentityListResponse</code>
- <code title="delete /v1/identities/{identity_id}">client.identities.<a href="./src/resources/identities.ts">delete</a>(identityID) -> unknown</code>
- <code title="get /v1/identities/count">client.identities.<a href="./src/resources/identities.ts">count</a>() -> IdentityCountResponse</code>
- <code title="get /v1/identities/{identity_id}/agents">client.identities.<a href="./src/resources/identities.ts">listAgents</a>(identityID, { ...params }) -> IdentityListAgentsResponse</code>
- <code title="get /v1/identities/{identity_id}/blocks">client.identities.<a href="./src/resources/identities.ts">listBlocks</a>(identityID, { ...params }) -> IdentityListBlocksResponse</code>
- <code title="patch /v1/identities/{identity_id}">client.identities.<a href="./src/resources/identities.ts">modify</a>(identityID, { ...params }) -> Identity</code>
- <code title="put /v1/identities/">client.identities.<a href="./src/resources/identities.ts">upsert</a>({ ...params }) -> Identity</code>
- <code title="put /v1/identities/{identity_id}/properties">client.identities.<a href="./src/resources/identities.ts">upsertProperties</a>(identityID, [ ...body ]) -> unknown</code>

# \_InternalTemplates

Methods:

- <code title="post /v1/_internal_templates/agents">client.\_internalTemplates.<a href="./src/resources/-internal-templates/-internal-templates.ts">createAgent</a>({ ...params }) -> AgentState</code>
- <code title="post /v1/_internal_templates/blocks">client.\_internalTemplates.<a href="./src/resources/-internal-templates/-internal-templates.ts">createBlock</a>({ ...params }) -> Block</code>
- <code title="post /v1/_internal_templates/groups">client.\_internalTemplates.<a href="./src/resources/-internal-templates/-internal-templates.ts">createGroup</a>({ ...params }) -> Group</code>

## Deployment

Types:

- <code><a href="./src/resources/-internal-templates/deployment.ts">DeploymentDeleteResponse</a></code>
- <code><a href="./src/resources/-internal-templates/deployment.ts">DeploymentListEntitiesResponse</a></code>

Methods:

- <code title="delete /v1/_internal_templates/deployment/{deployment_id}">client.\_internalTemplates.deployment.<a href="./src/resources/-internal-templates/deployment.ts">delete</a>(deploymentID) -> DeploymentDeleteResponse</code>
- <code title="get /v1/_internal_templates/deployment/{deployment_id}">client.\_internalTemplates.deployment.<a href="./src/resources/-internal-templates/deployment.ts">listEntities</a>(deploymentID, { ...params }) -> DeploymentListEntitiesResponse</code>

# Models

Types:

- <code><a href="./src/resources/models.ts">EmbeddingConfig</a></code>
- <code><a href="./src/resources/models.ts">LlmConfig</a></code>
- <code><a href="./src/resources/models.ts">ProviderCategory</a></code>
- <code><a href="./src/resources/models.ts">ProviderType</a></code>
- <code><a href="./src/resources/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/models.ts">ModelListEmbeddingResponse</a></code>

Methods:

- <code title="get /v1/models/">client.models.<a href="./src/resources/models.ts">list</a>({ ...params }) -> ModelListResponse</code>
- <code title="get /v1/models/embedding">client.models.<a href="./src/resources/models.ts">listEmbedding</a>() -> ModelListEmbeddingResponse</code>
- <code title="get /v1/models/embeddings">client.models.<a href="./src/resources/models.ts">listEmbeddings</a>() -> void</code>

# Blocks

Types:

- <code><a href="./src/resources/blocks.ts">CreateBlock</a></code>
- <code><a href="./src/resources/blocks.ts">BlockListResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockDeleteResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockCountResponse</a></code>
- <code><a href="./src/resources/blocks.ts">BlockListAgentsResponse</a></code>

Methods:

- <code title="post /v1/blocks/">client.blocks.<a href="./src/resources/blocks.ts">create</a>({ ...params }) -> Block</code>
- <code title="get /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks.ts">retrieve</a>(blockID) -> Block</code>
- <code title="patch /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks.ts">update</a>(blockID, { ...params }) -> Block</code>
- <code title="get /v1/blocks/">client.blocks.<a href="./src/resources/blocks.ts">list</a>({ ...params }) -> BlockListResponse</code>
- <code title="delete /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks.ts">delete</a>(blockID) -> unknown</code>
- <code title="get /v1/blocks/count">client.blocks.<a href="./src/resources/blocks.ts">count</a>() -> BlockCountResponse</code>
- <code title="get /v1/blocks/{block_id}/agents">client.blocks.<a href="./src/resources/blocks.ts">listAgents</a>(blockID, { ...params }) -> BlockListAgentsResponse</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">Job</a></code>
- <code><a href="./src/resources/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobListActiveResponse</a></code>

Methods:

- <code title="get /v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">retrieve</a>(jobID) -> Job</code>
- <code title="get /v1/jobs/">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="delete /v1/jobs/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">delete</a>(jobID) -> Job</code>
- <code title="patch /v1/jobs/{job_id}/cancel">client.jobs.<a href="./src/resources/jobs.ts">cancel</a>(jobID) -> Job</code>
- <code title="get /v1/jobs/active">client.jobs.<a href="./src/resources/jobs.ts">listActive</a>({ ...params }) -> JobListActiveResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /v1/health/">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Providers

Types:

- <code><a href="./src/resources/providers.ts">Provider</a></code>
- <code><a href="./src/resources/providers.ts">ProviderListResponse</a></code>
- <code><a href="./src/resources/providers.ts">ProviderDeleteResponse</a></code>
- <code><a href="./src/resources/providers.ts">ProviderCheckResponse</a></code>

Methods:

- <code title="post /v1/providers/">client.providers.<a href="./src/resources/providers.ts">create</a>({ ...params }) -> Provider</code>
- <code title="get /v1/providers/{provider_id}">client.providers.<a href="./src/resources/providers.ts">retrieve</a>(providerID) -> Provider</code>
- <code title="patch /v1/providers/{provider_id}">client.providers.<a href="./src/resources/providers.ts">update</a>(providerID, { ...params }) -> Provider</code>
- <code title="get /v1/providers/">client.providers.<a href="./src/resources/providers.ts">list</a>({ ...params }) -> ProviderListResponse</code>
- <code title="delete /v1/providers/{provider_id}">client.providers.<a href="./src/resources/providers.ts">delete</a>(providerID) -> unknown</code>
- <code title="post /v1/providers/check">client.providers.<a href="./src/resources/providers.ts">check</a>({ ...params }) -> unknown</code>

# Runs

Types:

- <code><a href="./src/resources/runs.ts">StopReasonType</a></code>
- <code><a href="./src/resources/runs.ts">RunListResponse</a></code>
- <code><a href="./src/resources/runs.ts">RunListActiveResponse</a></code>
- <code><a href="./src/resources/runs.ts">RunListMessagesResponse</a></code>
- <code><a href="./src/resources/runs.ts">RunListStepsResponse</a></code>
- <code><a href="./src/resources/runs.ts">RunRetrieveStreamResponse</a></code>
- <code><a href="./src/resources/runs.ts">RunRetrieveUsageResponse</a></code>

Methods:

- <code title="get /v1/runs/{run_id}">client.runs.<a href="./src/resources/runs.ts">retrieve</a>(runID) -> Run</code>
- <code title="get /v1/runs/">client.runs.<a href="./src/resources/runs.ts">list</a>({ ...params }) -> RunListResponse</code>
- <code title="delete /v1/runs/{run_id}">client.runs.<a href="./src/resources/runs.ts">delete</a>(runID) -> Run</code>
- <code title="get /v1/runs/active">client.runs.<a href="./src/resources/runs.ts">listActive</a>({ ...params }) -> RunListActiveResponse</code>
- <code title="get /v1/runs/{run_id}/messages">client.runs.<a href="./src/resources/runs.ts">listMessages</a>(runID, { ...params }) -> RunListMessagesResponse</code>
- <code title="get /v1/runs/{run_id}/steps">client.runs.<a href="./src/resources/runs.ts">listSteps</a>(runID, { ...params }) -> RunListStepsResponse</code>
- <code title="post /v1/runs/{run_id}/stream">client.runs.<a href="./src/resources/runs.ts">retrieveStream</a>(runID, { ...params }) -> unknown</code>
- <code title="get /v1/runs/{run_id}/usage">client.runs.<a href="./src/resources/runs.ts">retrieveUsage</a>(runID) -> RunRetrieveUsageResponse</code>

# Steps

Types:

- <code><a href="./src/resources/steps.ts">ProviderTrace</a></code>
- <code><a href="./src/resources/steps.ts">Step</a></code>
- <code><a href="./src/resources/steps.ts">StepListResponse</a></code>
- <code><a href="./src/resources/steps.ts">StepListMessagesResponse</a></code>
- <code><a href="./src/resources/steps.ts">StepRetrieveMetricsResponse</a></code>

Methods:

- <code title="get /v1/steps/{step_id}">client.steps.<a href="./src/resources/steps.ts">retrieve</a>(stepID) -> Step</code>
- <code title="get /v1/steps/">client.steps.<a href="./src/resources/steps.ts">list</a>({ ...params }) -> StepListResponse</code>
- <code title="get /v1/steps/{step_id}/messages">client.steps.<a href="./src/resources/steps.ts">listMessages</a>(stepID, { ...params }) -> StepListMessagesResponse</code>
- <code title="get /v1/steps/{step_id}/metrics">client.steps.<a href="./src/resources/steps.ts">retrieveMetrics</a>(stepID) -> StepRetrieveMetricsResponse</code>
- <code title="get /v1/steps/{step_id}/trace">client.steps.<a href="./src/resources/steps.ts">retrieveTrace</a>(stepID) -> ProviderTrace | null</code>
- <code title="patch /v1/steps/{step_id}/feedback">client.steps.<a href="./src/resources/steps.ts">updateFeedback</a>(stepID, { ...params }) -> Step</code>

# Tags

Types:

- <code><a href="./src/resources/tags.ts">TagListResponse</a></code>

Methods:

- <code title="get /v1/tags/">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagListResponse</code>

# Telemetry

Methods:

- <code title="get /v1/telemetry/{step_id}">client.telemetry.<a href="./src/resources/telemetry.ts">retrieve</a>(stepID) -> ProviderTrace | null</code>

# Messages

## Batches

Types:

- <code><a href="./src/resources/messages/batches.ts">BatchJob</a></code>
- <code><a href="./src/resources/messages/batches.ts">BatchListResponse</a></code>
- <code><a href="./src/resources/messages/batches.ts">BatchCancelResponse</a></code>
- <code><a href="./src/resources/messages/batches.ts">BatchListMessagesResponse</a></code>

Methods:

- <code title="post /v1/messages/batches">client.messages.batches.<a href="./src/resources/messages/batches.ts">create</a>({ ...params }) -> BatchJob</code>
- <code title="get /v1/messages/batches/{batch_id}">client.messages.batches.<a href="./src/resources/messages/batches.ts">retrieve</a>(batchID) -> BatchJob</code>
- <code title="get /v1/messages/batches">client.messages.batches.<a href="./src/resources/messages/batches.ts">list</a>({ ...params }) -> BatchListResponse</code>
- <code title="patch /v1/messages/batches/{batch_id}/cancel">client.messages.batches.<a href="./src/resources/messages/batches.ts">cancel</a>(batchID) -> unknown</code>
- <code title="get /v1/messages/batches/{batch_id}/messages">client.messages.batches.<a href="./src/resources/messages/batches.ts">listMessages</a>(batchID, { ...params }) -> BatchListMessagesResponse</code>

# VoiceBeta

## Chat

Types:

- <code><a href="./src/resources/voice-beta/chat.ts">ChatCreateCompletionResponse</a></code>

Methods:

- <code title="post /v1/voice-beta/{agent_id}/chat/completions">client.voiceBeta.chat.<a href="./src/resources/voice-beta/chat.ts">createCompletion</a>(agentID, { ...params }) -> unknown</code>

# Embeddings

Types:

- <code><a href="./src/resources/embeddings.ts">EmbeddingGetTotalStorageSizeResponse</a></code>

Methods:

- <code title="get /v1/embeddings/total_storage_size">client.embeddings.<a href="./src/resources/embeddings.ts">getTotalStorageSize</a>({ ...params }) -> EmbeddingGetTotalStorageSizeResponse</code>

# Templates

Types:

- <code><a href="./src/resources/templates.ts">TemplateCreateResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateListResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateDeleteResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateCreateAgentsResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateForkResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateGetSnapshotResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateListVersionsResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateRenameResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateSaveVersionResponse</a></code>
- <code><a href="./src/resources/templates.ts">TemplateUpdateDescriptionResponse</a></code>

Methods:

- <code title="post /v1/templates/{project}">client.templates.<a href="./src/resources/templates.ts">create</a>(project, { ...params }) -> TemplateCreateResponse</code>
- <code title="get /v1/templates">client.templates.<a href="./src/resources/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>
- <code title="delete /v1/templates/{project}/{template_name}">client.templates.<a href="./src/resources/templates.ts">delete</a>(templateName, { ...params }) -> TemplateDeleteResponse</code>
- <code title="post /v1/templates/{project}/{template_version}/agents">client.templates.<a href="./src/resources/templates.ts">createAgents</a>(templateVersion, { ...params }) -> TemplateCreateAgentsResponse</code>
- <code title="post /v1/templates/{project}/{template_version}/fork">client.templates.<a href="./src/resources/templates.ts">fork</a>(templateVersion, { ...params }) -> TemplateForkResponse</code>
- <code title="get /v1/templates/{project}/{template_version}/snapshot">client.templates.<a href="./src/resources/templates.ts">getSnapshot</a>(templateVersion, { ...params }) -> TemplateGetSnapshotResponse</code>
- <code title="get /v1/templates/{project_slug}/{name}/versions">client.templates.<a href="./src/resources/templates.ts">listVersions</a>(name, { ...params }) -> TemplateListVersionsResponse</code>
- <code title="patch /v1/templates/{project}/{template_name}/name">client.templates.<a href="./src/resources/templates.ts">rename</a>(templateName, { ...params }) -> TemplateRenameResponse</code>
- <code title="post /v1/templates/{project}/{template_name}">client.templates.<a href="./src/resources/templates.ts">saveVersion</a>(templateName, { ...params }) -> TemplateSaveVersionResponse</code>
- <code title="patch /v1/templates/{project}/{template_name}/description">client.templates.<a href="./src/resources/templates.ts">updateDescription</a>(templateName, { ...params }) -> TemplateUpdateDescriptionResponse</code>

# ClientSideAccessTokens

Types:

- <code><a href="./src/resources/client-side-access-tokens.ts">ClientSideAccessTokenCreateResponse</a></code>
- <code><a href="./src/resources/client-side-access-tokens.ts">ClientSideAccessTokenListResponse</a></code>
- <code><a href="./src/resources/client-side-access-tokens.ts">ClientSideAccessTokenDeleteResponse</a></code>

Methods:

- <code title="post /v1/client-side-access-tokens">client.clientSideAccessTokens.<a href="./src/resources/client-side-access-tokens.ts">create</a>({ ...params }) -> ClientSideAccessTokenCreateResponse</code>
- <code title="get /v1/client-side-access-tokens">client.clientSideAccessTokens.<a href="./src/resources/client-side-access-tokens.ts">list</a>({ ...params }) -> ClientSideAccessTokenListResponse</code>
- <code title="delete /v1/client-side-access-tokens/{token}">client.clientSideAccessTokens.<a href="./src/resources/client-side-access-tokens.ts">delete</a>(token, { ...params }) -> unknown</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>

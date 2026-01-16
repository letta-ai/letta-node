# Letta

Types:

- <code><a href="./src/resources/top-level.ts">HealthResponse</a></code>

Methods:

- <code title="get /v1/health/">client.<a href="./src/index.ts">health</a>() -> HealthResponse</code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">AgentEnvironmentVariable</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentState</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentType</a></code>
- <code><a href="./src/resources/agents/agents.ts">AnthropicModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">AzureModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">BedrockModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">ChildToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">ConditionalToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">ContinueToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">DeepseekModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">GoogleAIModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">GoogleVertexModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">GroqModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">InitToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">JsonObjectResponseFormat</a></code>
- <code><a href="./src/resources/agents/agents.ts">JsonSchemaResponseFormat</a></code>
- <code><a href="./src/resources/agents/agents.ts">LettaMessageContentUnion</a></code>
- <code><a href="./src/resources/agents/agents.ts">MaxCountPerStepToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">MessageCreate</a></code>
- <code><a href="./src/resources/agents/agents.ts">OpenAIModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">ParentToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">RequiredBeforeExitToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">RequiresApprovalToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">TerminalToolRule</a></code>
- <code><a href="./src/resources/agents/agents.ts">TextResponseFormat</a></code>
- <code><a href="./src/resources/agents/agents.ts">TogetherModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">XaiModelSettings</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentExportFileResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentImportFileResponse</a></code>

Methods:

- <code title="post /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentState</code>
- <code title="get /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentID, { ...params }) -> AgentState</code>
- <code title="get /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentStatesArrayPage</code>
- <code title="delete /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentID) -> unknown</code>
- <code title="get /v1/agents/{agent_id}/export">client.agents.<a href="./src/resources/agents/agents.ts">exportFile</a>(agentID, { ...params }) -> string</code>
- <code title="post /v1/agents/import">client.agents.<a href="./src/resources/agents/agents.ts">importFile</a>({ ...params }) -> AgentImportFileResponse</code>

## Messages

Types:

- <code><a href="./src/resources/agents/messages.ts">ApprovalCreate</a></code>
- <code><a href="./src/resources/agents/messages.ts">ApprovalRequestMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">ApprovalResponseMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">ApprovalReturn</a></code>
- <code><a href="./src/resources/agents/messages.ts">AssistantMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">EventMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">HiddenReasoningMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">ImageContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">InternalMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">JobStatus</a></code>
- <code><a href="./src/resources/agents/messages.ts">JobType</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaAssistantMessageContentUnion</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaRequest</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaStreamingRequest</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaStreamingResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">LettaUserMessageContentUnion</a></code>
- <code><a href="./src/resources/agents/messages.ts">Message</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageRole</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageType</a></code>
- <code><a href="./src/resources/agents/messages.ts">OmittedReasoningContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">ReasoningContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">ReasoningMessage</a></code>
- <code><a href="./src/resources/agents/messages.ts">RedactedReasoningContent</a></code>
- <code><a href="./src/resources/agents/messages.ts">Run</a></code>
- <code><a href="./src/resources/agents/messages.ts">SummaryMessage</a></code>
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
- <code><a href="./src/resources/agents/messages.ts">MessageCancelResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageCompactResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">create</a>(agentID, { ...params }) -> LettaResponse</code>
- <code title="get /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">list</a>(agentID, { ...params }) -> MessagesArrayPage</code>
- <code title="post /v1/agents/{agent_id}/messages/cancel">client.agents.messages.<a href="./src/resources/agents/messages.ts">cancel</a>(agentID, { ...params }) -> MessageCancelResponse</code>
- <code title="post /v1/agents/{agent_id}/summarize">client.agents.messages.<a href="./src/resources/agents/messages.ts">compact</a>(agentID, { ...params }) -> MessageCompactResponse</code>
- <code title="post /v1/agents/{agent_id}/messages/async">client.agents.messages.<a href="./src/resources/agents/messages.ts">createAsync</a>(agentID, { ...params }) -> Run</code>
- <code title="patch /v1/agents/{agent_id}/reset-messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">reset</a>(agentID, { ...params }) -> AgentState | null</code>
- <code title="post /v1/agents/{agent_id}/messages/stream">client.agents.messages.<a href="./src/resources/agents/messages.ts">stream</a>(agentID, { ...params }) -> LettaStreamingResponse</code>

## Blocks

Types:

- <code><a href="./src/resources/agents/blocks.ts">Block</a></code>
- <code><a href="./src/resources/agents/blocks.ts">BlockUpdate</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/core-memory/blocks/{block_label}">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">retrieve</a>(blockLabel, { ...params }) -> BlockResponse</code>
- <code title="patch /v1/agents/{agent_id}/core-memory/blocks/{block_label}">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">update</a>(blockLabel, { ...params }) -> BlockResponse</code>
- <code title="get /v1/agents/{agent_id}/core-memory/blocks">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">list</a>(agentID, { ...params }) -> BlockResponsesArrayPage</code>
- <code title="patch /v1/agents/{agent_id}/core-memory/blocks/attach/{block_id}">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">attach</a>(blockID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/core-memory/blocks/detach/{block_id}">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">detach</a>(blockID, { ...params }) -> AgentState</code>

## Tools

Types:

- <code><a href="./src/resources/agents/tools.ts">ToolExecuteRequest</a></code>
- <code><a href="./src/resources/agents/tools.ts">ToolExecutionResult</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/tools">client.agents.tools.<a href="./src/resources/agents/tools.ts">list</a>(agentID, { ...params }) -> ToolsArrayPage</code>
- <code title="patch /v1/agents/{agent_id}/tools/attach/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">attach</a>(toolID, { ...params }) -> AgentState | null</code>
- <code title="patch /v1/agents/{agent_id}/tools/detach/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">detach</a>(toolID, { ...params }) -> AgentState | null</code>
- <code title="post /v1/agents/{agent_id}/tools/{tool_name}/run">client.agents.tools.<a href="./src/resources/agents/tools.ts">run</a>(toolName, { ...params }) -> ToolExecutionResult</code>
- <code title="patch /v1/agents/{agent_id}/tools/approval/{tool_name}">client.agents.tools.<a href="./src/resources/agents/tools.ts">updateApproval</a>(toolName, { ...params }) -> AgentState | null</code>

## Folders

Types:

- <code><a href="./src/resources/agents/folders.ts">FolderListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/folders">client.agents.folders.<a href="./src/resources/agents/folders.ts">list</a>(agentID, { ...params }) -> FolderListResponsesArrayPage</code>
- <code title="patch /v1/agents/{agent_id}/folders/attach/{folder_id}">client.agents.folders.<a href="./src/resources/agents/folders.ts">attach</a>(folderID, { ...params }) -> AgentState | null</code>
- <code title="patch /v1/agents/{agent_id}/folders/detach/{folder_id}">client.agents.folders.<a href="./src/resources/agents/folders.ts">detach</a>(folderID, { ...params }) -> AgentState | null</code>

## Files

Types:

- <code><a href="./src/resources/agents/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/agents/files.ts">FileCloseResponse</a></code>
- <code><a href="./src/resources/agents/files.ts">FileCloseAllResponse</a></code>
- <code><a href="./src/resources/agents/files.ts">FileOpenResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/files">client.agents.files.<a href="./src/resources/agents/files.ts">list</a>(agentID, { ...params }) -> FileListResponsesNextFilesPage</code>
- <code title="patch /v1/agents/{agent_id}/files/{file_id}/close">client.agents.files.<a href="./src/resources/agents/files.ts">close</a>(fileID, { ...params }) -> unknown</code>
- <code title="patch /v1/agents/{agent_id}/files/close-all">client.agents.files.<a href="./src/resources/agents/files.ts">closeAll</a>(agentID) -> FileCloseAllResponse</code>
- <code title="patch /v1/agents/{agent_id}/files/{file_id}/open">client.agents.files.<a href="./src/resources/agents/files.ts">open</a>(fileID, { ...params }) -> FileOpenResponse</code>

## Archives

Types:

- <code><a href="./src/resources/agents/archives.ts">ArchiveAttachResponse</a></code>
- <code><a href="./src/resources/agents/archives.ts">ArchiveDetachResponse</a></code>

Methods:

- <code title="patch /v1/agents/{agent_id}/archives/attach/{archive_id}">client.agents.archives.<a href="./src/resources/agents/archives.ts">attach</a>(archiveID, { ...params }) -> unknown</code>
- <code title="patch /v1/agents/{agent_id}/archives/detach/{archive_id}">client.agents.archives.<a href="./src/resources/agents/archives.ts">detach</a>(archiveID, { ...params }) -> unknown</code>

## Passages

Types:

- <code><a href="./src/resources/agents/passages.ts">PassageCreateResponse</a></code>
- <code><a href="./src/resources/agents/passages.ts">PassageListResponse</a></code>
- <code><a href="./src/resources/agents/passages.ts">PassageDeleteResponse</a></code>
- <code><a href="./src/resources/agents/passages.ts">PassageSearchResponse</a></code>

Methods:

- <code title="post /v1/agents/{agent_id}/archival-memory">client.agents.passages.<a href="./src/resources/agents/passages.ts">create</a>(agentID, { ...params }) -> PassageCreateResponse</code>
- <code title="get /v1/agents/{agent_id}/archival-memory">client.agents.passages.<a href="./src/resources/agents/passages.ts">list</a>(agentID, { ...params }) -> PassageListResponse</code>
- <code title="delete /v1/agents/{agent_id}/archival-memory/{memory_id}">client.agents.passages.<a href="./src/resources/agents/passages.ts">delete</a>(memoryID, { ...params }) -> unknown</code>
- <code title="get /v1/agents/{agent_id}/archival-memory/search">client.agents.passages.<a href="./src/resources/agents/passages.ts">search</a>(agentID, { ...params }) -> PassageSearchResponse</code>

## Identities

Types:

- <code><a href="./src/resources/agents/identities.ts">IdentityAttachResponse</a></code>
- <code><a href="./src/resources/agents/identities.ts">IdentityDetachResponse</a></code>

Methods:

- <code title="patch /v1/agents/{agent_id}/identities/attach/{identity_id}">client.agents.identities.<a href="./src/resources/agents/identities.ts">attach</a>(identityID, { ...params }) -> unknown</code>
- <code title="patch /v1/agents/{agent_id}/identities/detach/{identity_id}">client.agents.identities.<a href="./src/resources/agents/identities.ts">detach</a>(identityID, { ...params }) -> unknown</code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">NpmRequirement</a></code>
- <code><a href="./src/resources/tools.ts">PipRequirement</a></code>
- <code><a href="./src/resources/tools.ts">Tool</a></code>
- <code><a href="./src/resources/tools.ts">ToolCreate</a></code>
- <code><a href="./src/resources/tools.ts">ToolReturnMessage</a></code>
- <code><a href="./src/resources/tools.ts">ToolSearchRequest</a></code>
- <code><a href="./src/resources/tools.ts">ToolSearchResult</a></code>
- <code><a href="./src/resources/tools.ts">ToolType</a></code>
- <code><a href="./src/resources/tools.ts">ToolDeleteResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolSearchResponse</a></code>

Methods:

- <code title="post /v1/tools/">client.tools.<a href="./src/resources/tools.ts">create</a>({ ...params }) -> Tool</code>
- <code title="get /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">retrieve</a>(toolID) -> Tool</code>
- <code title="patch /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">update</a>(toolID, { ...params }) -> Tool</code>
- <code title="get /v1/tools/">client.tools.<a href="./src/resources/tools.ts">list</a>({ ...params }) -> ToolsArrayPage</code>
- <code title="delete /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">delete</a>(toolID) -> unknown</code>
- <code title="post /v1/tools/search">client.tools.<a href="./src/resources/tools.ts">search</a>({ ...params }) -> ToolSearchResponse</code>
- <code title="put /v1/tools/">client.tools.<a href="./src/resources/tools.ts">upsert</a>({ ...params }) -> Tool</code>

# Blocks

Types:

- <code><a href="./src/resources/blocks/blocks.ts">BlockResponse</a></code>
- <code><a href="./src/resources/blocks/blocks.ts">CreateBlock</a></code>
- <code><a href="./src/resources/blocks/blocks.ts">BlockDeleteResponse</a></code>

Methods:

- <code title="post /v1/blocks/">client.blocks.<a href="./src/resources/blocks/blocks.ts">create</a>({ ...params }) -> BlockResponse</code>
- <code title="get /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks/blocks.ts">retrieve</a>(blockID) -> BlockResponse</code>
- <code title="patch /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks/blocks.ts">update</a>(blockID, { ...params }) -> BlockResponse</code>
- <code title="get /v1/blocks/">client.blocks.<a href="./src/resources/blocks/blocks.ts">list</a>({ ...params }) -> BlockResponsesArrayPage</code>
- <code title="delete /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks/blocks.ts">delete</a>(blockID) -> unknown</code>

## Agents

Methods:

- <code title="get /v1/blocks/{block_id}/agents">client.blocks.agents.<a href="./src/resources/blocks/agents.ts">list</a>(blockID, { ...params }) -> AgentStatesArrayPage</code>

# Archives

Types:

- <code><a href="./src/resources/archives/archives.ts">Archive</a></code>
- <code><a href="./src/resources/archives/archives.ts">VectorDBProvider</a></code>

Methods:

- <code title="post /v1/archives/">client.archives.<a href="./src/resources/archives/archives.ts">create</a>({ ...params }) -> Archive</code>
- <code title="get /v1/archives/{archive_id}">client.archives.<a href="./src/resources/archives/archives.ts">retrieve</a>(archiveID) -> Archive</code>
- <code title="patch /v1/archives/{archive_id}">client.archives.<a href="./src/resources/archives/archives.ts">update</a>(archiveID, { ...params }) -> Archive</code>
- <code title="get /v1/archives/">client.archives.<a href="./src/resources/archives/archives.ts">list</a>({ ...params }) -> ArchivesArrayPage</code>
- <code title="delete /v1/archives/{archive_id}">client.archives.<a href="./src/resources/archives/archives.ts">delete</a>(archiveID) -> void</code>

## Passages

Methods:

- <code title="post /v1/archives/{archive_id}/passages">client.archives.passages.<a href="./src/resources/archives/passages.ts">create</a>(archiveID, { ...params }) -> Passage</code>
- <code title="delete /v1/archives/{archive_id}/passages/{passage_id}">client.archives.passages.<a href="./src/resources/archives/passages.ts">delete</a>(passageID, { ...params }) -> void</code>

# Folders

Types:

- <code><a href="./src/resources/folders/folders.ts">Folder</a></code>
- <code><a href="./src/resources/folders/folders.ts">FolderDeleteResponse</a></code>

Methods:

- <code title="post /v1/folders/">client.folders.<a href="./src/resources/folders/folders.ts">create</a>({ ...params }) -> Folder</code>
- <code title="get /v1/folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">retrieve</a>(folderID) -> Folder</code>
- <code title="patch /v1/folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">update</a>(folderID, { ...params }) -> Folder</code>
- <code title="get /v1/folders/">client.folders.<a href="./src/resources/folders/folders.ts">list</a>({ ...params }) -> FoldersArrayPage</code>
- <code title="delete /v1/folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">delete</a>(folderID) -> unknown</code>

## Files

Types:

- <code><a href="./src/resources/folders/files.ts">FileRetrieveResponse</a></code>
- <code><a href="./src/resources/folders/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/folders/files.ts">FileUploadResponse</a></code>

Methods:

- <code title="get /v1/folders/{folder_id}/files/{file_id}">client.folders.files.<a href="./src/resources/folders/files.ts">retrieve</a>(fileID, { ...params }) -> FileRetrieveResponse</code>
- <code title="get /v1/folders/{folder_id}/files">client.folders.files.<a href="./src/resources/folders/files.ts">list</a>(folderID, { ...params }) -> FileListResponsesArrayPage</code>
- <code title="delete /v1/folders/{folder_id}/{file_id}">client.folders.files.<a href="./src/resources/folders/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="post /v1/folders/{folder_id}/upload">client.folders.files.<a href="./src/resources/folders/files.ts">upload</a>(folderID, { ...params }) -> FileUploadResponse</code>

## Agents

Types:

- <code><a href="./src/resources/folders/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="get /v1/folders/{folder_id}/agents">client.folders.agents.<a href="./src/resources/folders/agents.ts">list</a>(folderID, { ...params }) -> AgentListResponse</code>

# Models

Types:

- <code><a href="./src/resources/models/models.ts">EmbeddingConfig</a></code>
- <code><a href="./src/resources/models/models.ts">EmbeddingModel</a></code>
- <code><a href="./src/resources/models/models.ts">LlmConfig</a></code>
- <code><a href="./src/resources/models/models.ts">Model</a></code>
- <code><a href="./src/resources/models/models.ts">ProviderCategory</a></code>
- <code><a href="./src/resources/models/models.ts">ProviderType</a></code>
- <code><a href="./src/resources/models/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /v1/models/">client.models.<a href="./src/resources/models/models.ts">list</a>({ ...params }) -> ModelListResponse</code>

## Embeddings

Types:

- <code><a href="./src/resources/models/embeddings.ts">EmbeddingListResponse</a></code>

Methods:

- <code title="get /v1/models/embedding">client.models.embeddings.<a href="./src/resources/models/embeddings.ts">list</a>() -> EmbeddingListResponse</code>

# McpServers

Types:

- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">CreateSseMcpServer</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">CreateStdioMcpServer</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">CreateStreamableHTTPMcpServer</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">SseMcpServer</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">StdioMcpServer</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">StreamableHTTPMcpServer</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">UpdateSseMcpServer</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">UpdateStdioMcpServer</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">UpdateStreamableHTTPMcpServer</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">McpServerCreateResponse</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">McpServerRetrieveResponse</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">McpServerUpdateResponse</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">McpServerListResponse</a></code>
- <code><a href="./src/resources/mcp-servers/mcp-servers.ts">McpServerRefreshResponse</a></code>

Methods:

- <code title="post /v1/mcp-servers/">client.mcpServers.<a href="./src/resources/mcp-servers/mcp-servers.ts">create</a>({ ...params }) -> McpServerCreateResponse</code>
- <code title="get /v1/mcp-servers/{mcp_server_id}">client.mcpServers.<a href="./src/resources/mcp-servers/mcp-servers.ts">retrieve</a>(mcpServerID) -> McpServerRetrieveResponse</code>
- <code title="patch /v1/mcp-servers/{mcp_server_id}">client.mcpServers.<a href="./src/resources/mcp-servers/mcp-servers.ts">update</a>(mcpServerID, { ...params }) -> McpServerUpdateResponse</code>
- <code title="get /v1/mcp-servers/">client.mcpServers.<a href="./src/resources/mcp-servers/mcp-servers.ts">list</a>() -> McpServerListResponse</code>
- <code title="delete /v1/mcp-servers/{mcp_server_id}">client.mcpServers.<a href="./src/resources/mcp-servers/mcp-servers.ts">delete</a>(mcpServerID) -> void</code>
- <code title="patch /v1/mcp-servers/{mcp_server_id}/refresh">client.mcpServers.<a href="./src/resources/mcp-servers/mcp-servers.ts">refresh</a>(mcpServerID, { ...params }) -> unknown</code>

## Tools

Types:

- <code><a href="./src/resources/mcp-servers/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="get /v1/mcp-servers/{mcp_server_id}/tools/{tool_id}">client.mcpServers.tools.<a href="./src/resources/mcp-servers/tools.ts">retrieve</a>(toolID, { ...params }) -> Tool</code>
- <code title="get /v1/mcp-servers/{mcp_server_id}/tools">client.mcpServers.tools.<a href="./src/resources/mcp-servers/tools.ts">list</a>(mcpServerID) -> ToolListResponse</code>
- <code title="post /v1/mcp-servers/{mcp_server_id}/tools/{tool_id}/run">client.mcpServers.tools.<a href="./src/resources/mcp-servers/tools.ts">run</a>(toolID, { ...params }) -> ToolExecutionResult</code>

# Runs

Types:

- <code><a href="./src/resources/runs/runs.ts">Job</a></code>
- <code><a href="./src/resources/runs/runs.ts">StopReasonType</a></code>

Methods:

- <code title="get /v1/runs/{run_id}">client.runs.<a href="./src/resources/runs/runs.ts">retrieve</a>(runID) -> Run</code>
- <code title="get /v1/runs/">client.runs.<a href="./src/resources/runs/runs.ts">list</a>({ ...params }) -> RunsArrayPage</code>

## Messages

Types:

- <code><a href="./src/resources/runs/messages.ts">MessageStreamResponse</a></code>

Methods:

- <code title="get /v1/runs/{run_id}/messages">client.runs.messages.<a href="./src/resources/runs/messages.ts">list</a>(runID, { ...params }) -> MessagesArrayPage</code>
- <code title="post /v1/runs/{run_id}/stream">client.runs.messages.<a href="./src/resources/runs/messages.ts">stream</a>(runID, { ...params }) -> unknown</code>

## Usage

Types:

- <code><a href="./src/resources/runs/usage.ts">UsageRetrieveResponse</a></code>

Methods:

- <code title="get /v1/runs/{run_id}/usage">client.runs.usage.<a href="./src/resources/runs/usage.ts">retrieve</a>(runID) -> UsageRetrieveResponse</code>

## Steps

Methods:

- <code title="get /v1/runs/{run_id}/steps">client.runs.steps.<a href="./src/resources/runs/steps.ts">list</a>(runID, { ...params }) -> StepsArrayPage</code>

## Trace

Types:

- <code><a href="./src/resources/runs/trace.ts">TraceRetrieveResponse</a></code>

Methods:

- <code title="get /v1/runs/{run_id}/trace">client.runs.trace.<a href="./src/resources/runs/trace.ts">retrieve</a>(runID, { ...params }) -> TraceRetrieveResponse</code>

# Steps

Types:

- <code><a href="./src/resources/steps/steps.ts">ProviderTrace</a></code>
- <code><a href="./src/resources/steps/steps.ts">Step</a></code>

Methods:

- <code title="get /v1/steps/{step_id}">client.steps.<a href="./src/resources/steps/steps.ts">retrieve</a>(stepID) -> Step</code>
- <code title="get /v1/steps/">client.steps.<a href="./src/resources/steps/steps.ts">list</a>({ ...params }) -> StepsArrayPage</code>

## Metrics

Types:

- <code><a href="./src/resources/steps/metrics.ts">MetricRetrieveResponse</a></code>

Methods:

- <code title="get /v1/steps/{step_id}/metrics">client.steps.metrics.<a href="./src/resources/steps/metrics.ts">retrieve</a>(stepID) -> MetricRetrieveResponse</code>

## Trace

Methods:

- <code title="get /v1/steps/{step_id}/trace">client.steps.trace.<a href="./src/resources/steps/trace.ts">retrieve</a>(stepID) -> ProviderTrace | null</code>

## Feedback

Methods:

- <code title="patch /v1/steps/{step_id}/feedback">client.steps.feedback.<a href="./src/resources/steps/feedback.ts">create</a>(stepID, { ...params }) -> Step</code>

## Messages

Types:

- <code><a href="./src/resources/steps/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="get /v1/steps/{step_id}/messages">client.steps.messages.<a href="./src/resources/steps/messages.ts">list</a>(stepID, { ...params }) -> MessageListResponsesArrayPage</code>

# Templates

Types:

- <code><a href="./src/resources/templates/templates.ts">TemplateCreateResponse</a></code>
- <code><a href="./src/resources/templates/templates.ts">TemplateUpdateResponse</a></code>
- <code><a href="./src/resources/templates/templates.ts">TemplateDeleteResponse</a></code>

Methods:

- <code title="post /v1/templates">client.templates.<a href="./src/resources/templates/templates.ts">create</a>({ ...params }) -> TemplateCreateResponse</code>
- <code title="patch /v1/templates/{template_name}">client.templates.<a href="./src/resources/templates/templates.ts">update</a>(templateName, { ...params }) -> TemplateUpdateResponse</code>
- <code title="delete /v1/templates/{template_name}">client.templates.<a href="./src/resources/templates/templates.ts">delete</a>(templateName) -> TemplateDeleteResponse</code>

## Agents

Types:

- <code><a href="./src/resources/templates/agents.ts">AgentCreateResponse</a></code>

Methods:

- <code title="post /v1/templates/{template_version}/agents">client.templates.agents.<a href="./src/resources/templates/agents.ts">create</a>(templateVersion, { ...params }) -> AgentCreateResponse</code>

# Tags

Types:

- <code><a href="./src/resources/tags.ts">TagListResponse</a></code>

Methods:

- <code title="get /v1/tags/">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagListResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageSearchRequest</a></code>
- <code><a href="./src/resources/messages.ts">MessageSearchResult</a></code>
- <code><a href="./src/resources/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/messages.ts">MessageSearchResponse</a></code>

Methods:

- <code title="get /v1/messages/{message_id}">client.messages.<a href="./src/resources/messages.ts">retrieve</a>(messageID) -> MessageRetrieveResponse</code>
- <code title="get /v1/messages/">client.messages.<a href="./src/resources/messages.ts">list</a>({ ...params }) -> MessageListResponse</code>
- <code title="post /v1/messages/search">client.messages.<a href="./src/resources/messages.ts">search</a>({ ...params }) -> MessageSearchResponse</code>

# Passages

Types:

- <code><a href="./src/resources/passages.ts">Passage</a></code>
- <code><a href="./src/resources/passages.ts">PassageSearchResponse</a></code>

Methods:

- <code title="post /v1/passages/search">client.passages.<a href="./src/resources/passages.ts">search</a>({ ...params }) -> PassageSearchResponse</code>

# Conversations

Types:

- <code><a href="./src/resources/conversations/conversations.ts">Conversation</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">CreateConversation</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">UpdateConversation</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationListResponse</a></code>
- <code><a href="./src/resources/conversations/conversations.ts">ConversationCancelResponse</a></code>

Methods:

- <code title="post /v1/conversations/">client.conversations.<a href="./src/resources/conversations/conversations.ts">create</a>({ ...params }) -> Conversation</code>
- <code title="get /v1/conversations/{conversation_id}">client.conversations.<a href="./src/resources/conversations/conversations.ts">retrieve</a>(conversationID) -> Conversation</code>
- <code title="patch /v1/conversations/{conversation_id}">client.conversations.<a href="./src/resources/conversations/conversations.ts">update</a>(conversationID, { ...params }) -> Conversation</code>
- <code title="get /v1/conversations/">client.conversations.<a href="./src/resources/conversations/conversations.ts">list</a>({ ...params }) -> ConversationListResponse</code>
- <code title="post /v1/conversations/{conversation_id}/cancel">client.conversations.<a href="./src/resources/conversations/conversations.ts">cancel</a>(conversationID) -> ConversationCancelResponse</code>

## Messages

Types:

- <code><a href="./src/resources/conversations/messages.ts">MessageStreamResponse</a></code>

Methods:

- <code title="post /v1/conversations/{conversation_id}/messages">client.conversations.messages.<a href="./src/resources/conversations/messages.ts">create</a>(conversationID, { ...params }) -> LettaStreamingResponse</code>
- <code title="get /v1/conversations/{conversation_id}/messages">client.conversations.messages.<a href="./src/resources/conversations/messages.ts">list</a>(conversationID, { ...params }) -> MessagesArrayPage</code>
- <code title="post /v1/conversations/{conversation_id}/stream">client.conversations.messages.<a href="./src/resources/conversations/messages.ts">stream</a>(conversationID, { ...params }) -> unknown</code>

# AccessTokens

Types:

- <code><a href="./src/resources/access-tokens.ts">AccessTokenCreateResponse</a></code>
- <code><a href="./src/resources/access-tokens.ts">AccessTokenListResponse</a></code>
- <code><a href="./src/resources/access-tokens.ts">AccessTokenDeleteResponse</a></code>

Methods:

- <code title="post /v1/client-side-access-tokens">client.accessTokens.<a href="./src/resources/access-tokens.ts">create</a>({ ...params }) -> AccessTokenCreateResponse</code>
- <code title="get /v1/client-side-access-tokens">client.accessTokens.<a href="./src/resources/access-tokens.ts">list</a>({ ...params }) -> AccessTokenListResponse</code>
- <code title="delete /v1/client-side-access-tokens/{token}">client.accessTokens.<a href="./src/resources/access-tokens.ts">delete</a>(token, { ...params }) -> unknown</code>

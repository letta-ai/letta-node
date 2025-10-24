# Letta

Types:

- <code><a href="./src/resources/top-level.ts">HealthResponse</a></code>

Methods:

- <code title="get /v1/health/">client.<a href="./src/index.ts">health</a>() -> HealthResponse</code>

# Archives

Types:

- <code><a href="./src/resources/archives.ts">Archive</a></code>
- <code><a href="./src/resources/archives.ts">VectorDBProvider</a></code>

Methods:

- <code title="post /v1/archives/">client.archives.<a href="./src/resources/archives.ts">create</a>({ ...params }) -> Archive</code>
- <code title="get /v1/archives/{archive_id}">client.archives.<a href="./src/resources/archives.ts">retrieve</a>(archiveID) -> Archive</code>
- <code title="get /v1/archives/">client.archives.<a href="./src/resources/archives.ts">list</a>({ ...params }) -> ArchivesArrayPage</code>
- <code title="delete /v1/archives/{archive_id}">client.archives.<a href="./src/resources/archives.ts">delete</a>(archiveID) -> Archive</code>
- <code title="patch /v1/archives/{archive_id}">client.archives.<a href="./src/resources/archives.ts">modify</a>(archiveID, { ...params }) -> Archive</code>

# Tools

Types:

- <code><a href="./src/resources/tools.ts">NpmRequirement</a></code>
- <code><a href="./src/resources/tools.ts">PipRequirement</a></code>
- <code><a href="./src/resources/tools.ts">Tool</a></code>
- <code><a href="./src/resources/tools.ts">ToolCreate</a></code>
- <code><a href="./src/resources/tools.ts">ToolReturnMessage</a></code>
- <code><a href="./src/resources/tools.ts">ToolType</a></code>
- <code><a href="./src/resources/tools.ts">ToolDeleteResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolCountResponse</a></code>
- <code><a href="./src/resources/tools.ts">ToolUpsertBaseToolsResponse</a></code>

Methods:

- <code title="post /v1/tools/">client.tools.<a href="./src/resources/tools.ts">create</a>({ ...params }) -> Tool</code>
- <code title="get /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">retrieve</a>(toolID) -> Tool</code>
- <code title="get /v1/tools/">client.tools.<a href="./src/resources/tools.ts">list</a>({ ...params }) -> ToolsArrayPage</code>
- <code title="delete /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">delete</a>(toolID) -> unknown</code>
- <code title="get /v1/tools/count">client.tools.<a href="./src/resources/tools.ts">count</a>({ ...params }) -> ToolCountResponse</code>
- <code title="patch /v1/tools/{tool_id}">client.tools.<a href="./src/resources/tools.ts">modify</a>(toolID, { ...params }) -> Tool</code>
- <code title="put /v1/tools/">client.tools.<a href="./src/resources/tools.ts">upsert</a>({ ...params }) -> Tool</code>
- <code title="post /v1/tools/add-base-tools">client.tools.<a href="./src/resources/tools.ts">upsertBaseTools</a>() -> ToolUpsertBaseToolsResponse</code>

# Folders

Types:

- <code><a href="./src/resources/folders/folders.ts">Folder</a></code>
- <code><a href="./src/resources/folders/folders.ts">FolderDeleteResponse</a></code>
- <code><a href="./src/resources/folders/folders.ts">FolderCountResponse</a></code>

Methods:

- <code title="post /v1/folders/">client.folders.<a href="./src/resources/folders/folders.ts">create</a>({ ...params }) -> Folder</code>
- <code title="get /v1/folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">retrieve</a>(folderID) -> Folder</code>
- <code title="get /v1/folders/">client.folders.<a href="./src/resources/folders/folders.ts">list</a>({ ...params }) -> FoldersArrayPage</code>
- <code title="delete /v1/folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">delete</a>(folderID) -> unknown</code>
- <code title="get /v1/folders/count">client.folders.<a href="./src/resources/folders/folders.ts">count</a>() -> FolderCountResponse</code>
- <code title="patch /v1/folders/{folder_id}">client.folders.<a href="./src/resources/folders/folders.ts">modify</a>(folderID, { ...params }) -> Folder</code>

## Files

Types:

- <code><a href="./src/resources/folders/files.ts">FileListResponse</a></code>
- <code><a href="./src/resources/folders/files.ts">FileUploadResponse</a></code>

Methods:

- <code title="get /v1/folders/{folder_id}/files">client.folders.files.<a href="./src/resources/folders/files.ts">list</a>(folderID, { ...params }) -> FileListResponsesArrayPage</code>
- <code title="delete /v1/folders/{folder_id}/{file_id}">client.folders.files.<a href="./src/resources/folders/files.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="post /v1/folders/{folder_id}/upload">client.folders.files.<a href="./src/resources/folders/files.ts">upload</a>(folderID, { ...params }) -> FileUploadResponse</code>

## Agents

Types:

- <code><a href="./src/resources/folders/agents.ts">AgentListResponse</a></code>

Methods:

- <code title="get /v1/folders/{folder_id}/agents">client.folders.agents.<a href="./src/resources/folders/agents.ts">list</a>(folderID, { ...params }) -> AgentListResponsesArrayPage</code>

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
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentCountResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentExportFileResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentImportFileResponse</a></code>

Methods:

- <code title="post /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentState</code>
- <code title="get /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentID, { ...params }) -> AgentState</code>
- <code title="get /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentStatesArrayPage</code>
- <code title="delete /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentID) -> unknown</code>
- <code title="get /v1/agents/count">client.agents.<a href="./src/resources/agents/agents.ts">count</a>() -> AgentCountResponse</code>
- <code title="get /v1/agents/{agent_id}/export">client.agents.<a href="./src/resources/agents/agents.ts">exportFile</a>(agentID, { ...params }) -> string</code>
- <code title="post /v1/agents/import">client.agents.<a href="./src/resources/agents/agents.ts">importFile</a>({ ...params }) -> AgentImportFileResponse</code>
- <code title="patch /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">modify</a>(agentID, { ...params }) -> AgentState</code>

## Tools

Methods:

- <code title="get /v1/agents/{agent_id}/tools">client.agents.tools.<a href="./src/resources/agents/tools.ts">list</a>(agentID, { ...params }) -> ToolsArrayPage</code>
- <code title="patch /v1/agents/{agent_id}/tools/attach/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">attach</a>(toolID, { ...params }) -> AgentState | null</code>
- <code title="patch /v1/agents/{agent_id}/tools/detach/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">detach</a>(toolID, { ...params }) -> AgentState | null</code>
- <code title="patch /v1/agents/{agent_id}/tools/approval/{tool_name}">client.agents.tools.<a href="./src/resources/agents/tools.ts">updateApproval</a>(toolName, { ...params }) -> AgentState | null</code>

## Folders

Types:

- <code><a href="./src/resources/agents/folders.ts">FolderListResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/folders">client.agents.folders.<a href="./src/resources/agents/folders.ts">list</a>(agentID, { ...params }) -> FolderListResponsesArrayPage</code>
- <code title="patch /v1/agents/{agent_id}/folders/attach/{folder_id}">client.agents.folders.<a href="./src/resources/agents/folders.ts">attach</a>(folderID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/folders/detach/{folder_id}">client.agents.folders.<a href="./src/resources/agents/folders.ts">detach</a>(folderID, { ...params }) -> AgentState</code>

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

## Blocks

Types:

- <code><a href="./src/resources/agents/blocks.ts">Block</a></code>
- <code><a href="./src/resources/agents/blocks.ts">BlockModify</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/core-memory/blocks/{block_label}">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">retrieve</a>(blockLabel, { ...params }) -> Block</code>
- <code title="get /v1/agents/{agent_id}/core-memory/blocks">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">list</a>(agentID, { ...params }) -> BlocksArrayPage</code>
- <code title="patch /v1/agents/{agent_id}/core-memory/blocks/attach/{block_id}">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">attach</a>(blockID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/core-memory/blocks/detach/{block_id}">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">detach</a>(blockID, { ...params }) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}/core-memory/blocks/{block_label}">client.agents.blocks.<a href="./src/resources/agents/blocks.ts">modify</a>(blockLabel, { ...params }) -> Block</code>

## Groups

Methods:

- <code title="get /v1/agents/{agent_id}/groups">client.agents.groups.<a href="./src/resources/agents/groups.ts">list</a>(agentID, { ...params }) -> GroupsArrayPage</code>

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
- <code><a href="./src/resources/agents/messages.ts">MessageCancelResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageModifyResponse</a></code>
- <code><a href="./src/resources/agents/messages.ts">MessageStreamResponse</a></code>

Methods:

- <code title="get /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">list</a>(agentID, { ...params }) -> LettaMessageUnionsArrayPage</code>
- <code title="post /v1/agents/{agent_id}/messages/cancel">client.agents.messages.<a href="./src/resources/agents/messages.ts">cancel</a>(agentID, { ...params }) -> MessageCancelResponse</code>
- <code title="patch /v1/agents/{agent_id}/messages/{message_id}">client.agents.messages.<a href="./src/resources/agents/messages.ts">modify</a>(messageID, { ...params }) -> MessageModifyResponse</code>
- <code title="patch /v1/agents/{agent_id}/reset-messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">reset</a>(agentID, { ...params }) -> AgentState</code>
- <code title="post /v1/agents/{agent_id}/messages">client.agents.messages.<a href="./src/resources/agents/messages.ts">send</a>(agentID, { ...params }) -> LettaResponse</code>
- <code title="post /v1/agents/{agent_id}/messages/async">client.agents.messages.<a href="./src/resources/agents/messages.ts">sendAsync</a>(agentID, { ...params }) -> Run</code>
- <code title="post /v1/agents/{agent_id}/messages/stream">client.agents.messages.<a href="./src/resources/agents/messages.ts">stream</a>(agentID, { ...params }) -> unknown</code>
- <code title="post /v1/agents/{agent_id}/summarize">client.agents.messages.<a href="./src/resources/agents/messages.ts">summarize</a>(agentID) -> void</code>

# Groups

Types:

- <code><a href="./src/resources/groups/groups.ts">DynamicManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">Group</a></code>
- <code><a href="./src/resources/groups/groups.ts">ManagerType</a></code>
- <code><a href="./src/resources/groups/groups.ts">RoundRobinManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">SleeptimeManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">SupervisorManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">VoiceSleeptimeManager</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupDeleteResponse</a></code>
- <code><a href="./src/resources/groups/groups.ts">GroupCountResponse</a></code>

Methods:

- <code title="post /v1/groups/">client.groups.<a href="./src/resources/groups/groups.ts">create</a>({ ...params }) -> Group</code>
- <code title="get /v1/groups/{group_id}">client.groups.<a href="./src/resources/groups/groups.ts">retrieve</a>(groupID) -> Group</code>
- <code title="get /v1/groups/">client.groups.<a href="./src/resources/groups/groups.ts">list</a>({ ...params }) -> GroupsArrayPage</code>
- <code title="delete /v1/groups/{group_id}">client.groups.<a href="./src/resources/groups/groups.ts">delete</a>(groupID) -> unknown</code>
- <code title="get /v1/groups/count">client.groups.<a href="./src/resources/groups/groups.ts">count</a>() -> GroupCountResponse</code>
- <code title="patch /v1/groups/{group_id}">client.groups.<a href="./src/resources/groups/groups.ts">modify</a>(groupID, { ...params }) -> Group</code>

## Messages

Types:

- <code><a href="./src/resources/groups/messages.ts">MessageModifyResponse</a></code>
- <code><a href="./src/resources/groups/messages.ts">MessageResetResponse</a></code>
- <code><a href="./src/resources/groups/messages.ts">MessageStreamResponse</a></code>

Methods:

- <code title="get /v1/groups/{group_id}/messages">client.groups.messages.<a href="./src/resources/groups/messages.ts">list</a>(groupID, { ...params }) -> LettaMessageUnionsArrayPage</code>
- <code title="patch /v1/groups/{group_id}/messages/{message_id}">client.groups.messages.<a href="./src/resources/groups/messages.ts">modify</a>(messageID, { ...params }) -> MessageModifyResponse</code>
- <code title="patch /v1/groups/{group_id}/reset-messages">client.groups.messages.<a href="./src/resources/groups/messages.ts">reset</a>(groupID) -> unknown</code>
- <code title="post /v1/groups/{group_id}/messages">client.groups.messages.<a href="./src/resources/groups/messages.ts">send</a>(groupID, { ...params }) -> LettaResponse</code>
- <code title="post /v1/groups/{group_id}/messages/stream">client.groups.messages.<a href="./src/resources/groups/messages.ts">stream</a>(groupID, { ...params }) -> unknown</code>

# Identities

Types:

- <code><a href="./src/resources/identities/identities.ts">Identity</a></code>
- <code><a href="./src/resources/identities/identities.ts">IdentityProperty</a></code>
- <code><a href="./src/resources/identities/identities.ts">IdentityType</a></code>
- <code><a href="./src/resources/identities/identities.ts">IdentityDeleteResponse</a></code>
- <code><a href="./src/resources/identities/identities.ts">IdentityCountResponse</a></code>

Methods:

- <code title="post /v1/identities/">client.identities.<a href="./src/resources/identities/identities.ts">create</a>({ ...params }) -> Identity</code>
- <code title="get /v1/identities/{identity_id}">client.identities.<a href="./src/resources/identities/identities.ts">retrieve</a>(identityID) -> Identity</code>
- <code title="get /v1/identities/">client.identities.<a href="./src/resources/identities/identities.ts">list</a>({ ...params }) -> IdentitiesArrayPage</code>
- <code title="delete /v1/identities/{identity_id}">client.identities.<a href="./src/resources/identities/identities.ts">delete</a>(identityID) -> unknown</code>
- <code title="get /v1/identities/count">client.identities.<a href="./src/resources/identities/identities.ts">count</a>() -> IdentityCountResponse</code>
- <code title="patch /v1/identities/{identity_id}">client.identities.<a href="./src/resources/identities/identities.ts">modify</a>(identityID, { ...params }) -> Identity</code>
- <code title="put /v1/identities/">client.identities.<a href="./src/resources/identities/identities.ts">upsert</a>({ ...params }) -> Identity</code>

## Properties

Types:

- <code><a href="./src/resources/identities/properties.ts">PropertyUpsertResponse</a></code>

Methods:

- <code title="put /v1/identities/{identity_id}/properties">client.identities.properties.<a href="./src/resources/identities/properties.ts">upsert</a>(identityID, [ ...body ]) -> unknown</code>

## Agents

Methods:

- <code title="get /v1/identities/{identity_id}/agents">client.identities.agents.<a href="./src/resources/identities/agents.ts">list</a>(identityID, { ...params }) -> AgentStatesArrayPage</code>

## Blocks

Methods:

- <code title="get /v1/identities/{identity_id}/blocks">client.identities.blocks.<a href="./src/resources/identities/blocks.ts">list</a>(identityID, { ...params }) -> BlocksArrayPage</code>

# Models

Types:

- <code><a href="./src/resources/models/models.ts">EmbeddingConfig</a></code>
- <code><a href="./src/resources/models/models.ts">LlmConfig</a></code>
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

# Blocks

Types:

- <code><a href="./src/resources/blocks/blocks.ts">CreateBlock</a></code>
- <code><a href="./src/resources/blocks/blocks.ts">BlockDeleteResponse</a></code>
- <code><a href="./src/resources/blocks/blocks.ts">BlockCountResponse</a></code>

Methods:

- <code title="post /v1/blocks/">client.blocks.<a href="./src/resources/blocks/blocks.ts">create</a>({ ...params }) -> Block</code>
- <code title="get /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks/blocks.ts">retrieve</a>(blockID) -> Block</code>
- <code title="get /v1/blocks/">client.blocks.<a href="./src/resources/blocks/blocks.ts">list</a>({ ...params }) -> BlocksArrayPage</code>
- <code title="delete /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks/blocks.ts">delete</a>(blockID) -> unknown</code>
- <code title="get /v1/blocks/count">client.blocks.<a href="./src/resources/blocks/blocks.ts">count</a>() -> BlockCountResponse</code>
- <code title="patch /v1/blocks/{block_id}">client.blocks.<a href="./src/resources/blocks/blocks.ts">modify</a>(blockID, { ...params }) -> Block</code>

## Agents

Methods:

- <code title="get /v1/blocks/{block_id}/agents">client.blocks.agents.<a href="./src/resources/blocks/agents.ts">list</a>(blockID, { ...params }) -> AgentStatesArrayPage</code>

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

- <code title="get /v1/runs/{run_id}/messages">client.runs.messages.<a href="./src/resources/runs/messages.ts">list</a>(runID, { ...params }) -> LettaMessageUnionsArrayPage</code>
- <code title="post /v1/runs/{run_id}/stream">client.runs.messages.<a href="./src/resources/runs/messages.ts">stream</a>(runID, { ...params }) -> unknown</code>

## Usage

Types:

- <code><a href="./src/resources/runs/usage.ts">UsageRetrieveResponse</a></code>

Methods:

- <code title="get /v1/runs/{run_id}/usage">client.runs.usage.<a href="./src/resources/runs/usage.ts">retrieve</a>(runID) -> UsageRetrieveResponse</code>

## Steps

Methods:

- <code title="get /v1/runs/{run_id}/steps">client.runs.steps.<a href="./src/resources/runs/steps.ts">list</a>(runID, { ...params }) -> StepsArrayPage</code>

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

# Tags

Types:

- <code><a href="./src/resources/tags.ts">TagListResponse</a></code>

Methods:

- <code title="get /v1/tags/">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagListResponsesArrayPage</code>

# Batches

Types:

- <code><a href="./src/resources/batches/batches.ts">BatchJob</a></code>
- <code><a href="./src/resources/batches/batches.ts">BatchCancelResponse</a></code>

Methods:

- <code title="post /v1/messages/batches">client.batches.<a href="./src/resources/batches/batches.ts">create</a>({ ...params }) -> BatchJob</code>
- <code title="get /v1/messages/batches/{batch_id}">client.batches.<a href="./src/resources/batches/batches.ts">retrieve</a>(batchID) -> BatchJob</code>
- <code title="get /v1/messages/batches">client.batches.<a href="./src/resources/batches/batches.ts">list</a>({ ...params }) -> BatchJobsArrayPage</code>
- <code title="patch /v1/messages/batches/{batch_id}/cancel">client.batches.<a href="./src/resources/batches/batches.ts">cancel</a>(batchID) -> unknown</code>

## Messages

Methods:

- <code title="get /v1/messages/batches/{batch_id}/messages">client.batches.messages.<a href="./src/resources/batches/messages.ts">list</a>(batchID, { ...params }) -> MessagesObjectPage</code>

# Templates

## Agents

Methods:

- <code title="post /v1/templates/{project_id}/{template_version}/agents">client.templates.agents.<a href="./src/resources/templates/agents.ts">create</a>(templateVersion, { ...params }) -> void</code>

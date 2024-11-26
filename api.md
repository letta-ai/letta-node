# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">AgentState</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentMigrateResponse</a></code>

Methods:

- <code title="post /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> AgentState</code>
- <code title="get /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentId) -> AgentState</code>
- <code title="patch /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> AgentState</code>
- <code title="get /v1/agents/">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /v1/agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId) -> unknown</code>
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

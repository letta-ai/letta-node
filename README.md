# Letta TypeScript SDK

[![npm shield](https://img.shields.io/npm/v/@letta-ai/letta-client)](https://www.npmjs.com/package/@letta-ai/letta-client)

Letta is the platform for building stateful agents: open AI with advanced memory that can learn and self-improve over time.

### Quicklinks:
* [**Developer Documentation**](https://docs.letta.com): Learn how to create agents using Python or TypeScript
* [**TypeScript API Reference**](./reference.md): Complete TypeScript SDK documentation
* [**Agent Development Environment (ADE)**](https://docs.letta.com/guides/ade/overview): A no-code UI for building stateful agents
* [**Letta Cloud**](https://app.letta.com/): The fastest way to try Letta

## Get started

Install the Letta TypeScript SDK:

```bash
npm install @letta-ai/letta-client
```

## Simple Hello World example

In the example below, we'll create a stateful agent with two memory blocks. We'll initialize the `human` memory block with incorrect information, and correct the agent in our first message - which will trigger the agent to update its own memory with a tool call.

*To run the examples, you'll need to get a `LETTA_API_KEY` from [Letta Cloud](https://app.letta.com/api-keys), or run your own self-hosted server (see [our guide](https://docs.letta.com/guides/selfhosting))*

```typescript
import { LettaClient } from '@letta-ai/letta-client';

const client = new LettaClient({ token: "LETTA_API_KEY" });
// const client = new LettaClient({ baseUrl: "http://localhost:8283" });  // if self-hosting

const agentState = await client.agents.create({
    model: "openai/gpt-4o-mini",
    embedding: "openai/text-embedding-3-small",
    memoryBlocks: [
        {
          label: "human",
          value: "The human's name is Chad. They like vibe coding."
        },
        {
          label: "persona",
          value: "My name is Sam, a helpful assistant."
        }
    ],
    tools: ["web_search", "run_code"]
});

console.log(agentState.id);
// agent-d9be...0846

const response = await client.agents.messages.create(agentState.id, {
    messages: [
        {
            role: "user",
            content: "Hey, nice to meet you, my name is Brad."
        }
    ]
});

// the agent will think, then edit its memory using a tool
for (const message of response.messages) {
    console.log(message);
}

// The content of this memory block will be something like
// "The human's name is Brad. They like vibe coding."
// Fetch this block's content with:
const human_block = await client.agents.blocks.retrieve(agentState.id, "human");
console.log(human_block.value);
```

## Core concepts in Letta:

Letta is built on the [MemGPT](https://arxiv.org/abs/2310.08560) research paper, which introduced the concept of the "LLM Operating System" for memory management:

1. [**Memory Hierarchy**](https://docs.letta.com/guides/agents/memory): Agents have self-editing memory split between in-context and out-of-context memory
2. [**Memory Blocks**](https://docs.letta.com/guides/agents/memory-blocks): In-context memory is composed of persistent editable blocks
3. [**Agentic Context Engineering**](https://docs.letta.com/guides/agents/context-engineering): Agents control their context window using tools to edit, delete, or search memory
4. [**Perpetual Self-Improving Agents**](https://docs.letta.com/guides/agents/overview): Every agent has a perpetual (infinite) message history

## Local Development

Connect to a local Letta server instead of the cloud:

```typescript
const client = new LettaClient({
  baseUrl: "http://localhost:8283"
});
```

Run Letta locally with Docker:

```bash
docker run \
  -v ~/.letta/.persist/pgdata:/var/lib/postgresql/data \
  -p 8283:8283 \
  -e OPENAI_API_KEY="your_key" \
  letta/letta:latest
```

See the [self-hosting guide](https://docs.letta.com/guides/selfhosting) for more options.

## Key Features

### Memory Management ([full guide](https://docs.letta.com/guides/agents/memory-blocks))

Memory blocks are persistent, editable sections of an agent's context window:

```typescript
// Create agent with memory blocks
const agent = await client.agents.create({
  memoryBlocks: [
    { label: "persona", value: "I'm a helpful assistant." },
    { label: "human", value: "User preferences and info." }
  ]
});

// Modify blocks manually
await client.agents.blocks.modify(agent.id, "human", {
  value: "Updated user information"
});

// Retrieve a block
const block = await client.agents.blocks.retrieve(agent.id, "human");
```

### Multi-agent Shared Memory ([full guide](https://docs.letta.com/guides/agents/multi-agent-shared-memory))

Memory blocks can be attached to multiple agents. All agents will have an up-to-date view on the contents of the memory block -- if one agent modifies it, the other will see it immediately.

Here is how to attach a single memory block to multiple agents:

```typescript
// Create shared block
const sharedBlock = await client.blocks.create({
  label: "organization",
  value: "Shared team context"
});

// Attach to multiple agents
const agent1 = await client.agents.create({
  memoryBlocks: [{ label: "persona", value: "I am a supervisor" }],
  blockIds: [sharedBlock.id]
});

const agent2 = await client.agents.create({
  memoryBlocks: [{ label: "persona", value: "I am a worker" }],
  blockIds: [sharedBlock.id]
});
```

### Sleep-time Agents ([full guide](https://docs.letta.com/guides/agents/architectures/sleeptime))

Background agents that share memory with your primary agent:

```typescript
const agent = await client.agents.create({
  model: "openai/gpt-4o-mini",
  enableSleeptime: true  // creates a sleep-time agent
});
```

### Agent File Import/Export ([full guide](https://docs.letta.com/guides/agents/agent-file))

Save and share agents with the `.af` file format:

```typescript
import { readFileSync } from 'fs';

// Import agent
const file = new Blob([readFileSync('/path/to/agent.af')]);
const agent = await client.agents.importAgentSerialized(file);

// Export agent
const schema = await client.agents.exportAgentSerialized(agent.id);
```

### MCP Tools ([full guide](https://docs.letta.com/guides/mcp/overview))

Connect to Model Context Protocol servers:

```typescript
// Add tool from MCP server
const tool = await client.tools.addMcpTool("weather-server", "get_weather");

// Create agent with MCP tool
const agent = await client.agents.create({
  model: "openai/gpt-4o-mini",
  toolIds: [tool.id]
});
```

### Filesystem ([full guide](https://docs.letta.com/guides/agents/filesystem))

Give agents access to files:

```typescript
import { createReadStream } from 'fs';

// Get an available embedding config
const embeddingConfigs = await client.embeddingModels.list();

// Create folder and upload file
const folder = await client.folders.create({
  name: "my_folder",
  embeddingConfig: embeddingConfigs[0]
});
await client.folders.files.upload(createReadStream("file.txt"), folder.id);

// Attach to agent
await client.agents.folders.attach(agent.id, folder.id);
```

### Long-running Agents ([full guide](https://docs.letta.com/guides/agents/long-running))

Background execution with resumable streaming:

```typescript
const stream = await client.agents.messages.createStream(agent.id, {
  messages: [{ role: "user", content: "Analyze this dataset" }],
  background: true
});

let runId, lastSeqId;
for await (const chunk of stream) {
  runId = chunk.runId;
  lastSeqId = chunk.seqId;
}

// Resume if disconnected
for await (const chunk of client.runs.stream(runId, { startingAfter: lastSeqId })) {
  console.log(chunk);
}
```

### Streaming ([full guide](https://docs.letta.com/guides/agents/streaming))

Stream responses in real-time:

```typescript
const stream = await client.agents.messages.createStream(agent.id, {
  messages: [{ role: "user", content: "Hello!" }]
});

for await (const chunk of stream) {
  console.log(chunk);
}
```

### Message Types ([full guide](https://docs.letta.com/guides/agents/message-types))

Agent responses contain different message types. Handle them with the `messageType` discriminator:

```typescript
const messages = await client.agents.messages.list(agent.id);

for (const message of messages) {
  switch (message.messageType) {
    case "user_message":
      console.log("User:", message.content);
      break;
    case "assistant_message":
      console.log("Agent:", message.content);
      break;
    case "reasoning_message":
      console.log("Reasoning:", message.reasoning);
      break;
    case "tool_call_message":
      console.log("Tool:", message.toolCall.name);
      break;
    case "tool_return_message":
      console.log("Result:", message.toolReturn);
      break;
  }
}
```

## TypeScript Support

Full TypeScript support with exported types:

```typescript
import { Letta } from "@letta-ai/letta-client";

const request: Letta.CreateAgentRequest = {
  model: "openai/gpt-4o-mini",
  memoryBlocks: [...]
};
```

## Error Handling

```typescript
import { LettaError } from "@letta-ai/letta-client";

try {
  await client.agents.messages.create(agentId, {...});
} catch (err) {
  if (err instanceof LettaError) {
    console.log(err.statusCode);
    console.log(err.message);
    console.log(err.body);
  }
}
```

## Advanced Configuration

### Retries

```typescript
const response = await client.agents.create({...}, {
  maxRetries: 3 // Default: 2
});
```

### Timeouts

```typescript
const response = await client.agents.create({...}, {
  timeoutInSeconds: 30 // Default: 60
});
```

### Custom Headers

```typescript
const response = await client.agents.create({...}, {
  headers: {
    'X-Custom-Header': 'value'
  }
});
```

### Abort Requests

```typescript
const controller = new AbortController();
const response = await client.agents.create({...}, {
  abortSignal: controller.signal
});
controller.abort();
```

### Raw Response Access

```typescript
const { data, rawResponse } = await client.agents
  .create({...})
  .withRawResponse();

console.log(rawResponse.headers['X-My-Header']);
```

### Custom Fetch Client

```typescript
const client = new LettaClient({
  fetcher: yourCustomFetchImplementation
});
```

## Runtime Compatibility

Works in:
- Node.js 18+
- Vercel
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+
- React Native

## Contributing

Letta is an open source project built by over a hundred contributors. There are many ways to get involved in the Letta OSS project!

* [**Join the Discord**](https://discord.gg/letta): Chat with the Letta devs and other AI developers.
* [**Chat on our forum**](https://forum.letta.com/): If you're not into Discord, check out our developer forum.
* **Follow our socials**: [Twitter/X](https://twitter.com/Letta_AI), [LinkedIn](https://www.linkedin.com/company/letta-ai/), [YouTube](https://www.youtube.com/@letta-ai)

This SDK is generated programmatically. For SDK changes, please [open an issue](https://github.com/letta-ai/letta-node/issues).

README contributions are always welcome!

## Resources

- [Documentation](https://docs.letta.com)
- [TypeScript API Reference](./reference.md)
- [Example Applications](https://github.com/letta-ai/letta-chatbot-example)

## License

MIT

---

***Legal notices**: By using Letta and related Letta services (such as the Letta endpoint or hosted service), you are agreeing to our [privacy policy](https://www.letta.com/privacy-policy) and [terms of service](https://www.letta.com/terms-of-service).*

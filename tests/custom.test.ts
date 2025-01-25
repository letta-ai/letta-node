import { LettaEnvironment } from "../src/environments";
import { LettaClient } from "../src/Client";
import {
    AgentState,
    SystemMessage,
    UserMessage,
    ToolCallMessage,
    ToolReturnMessage,
    AssistantMessage,
} from "../src/api";

describe("Letta Client", () => {
    it("should create multiple agent with shared memory", async () => {
        // Initialize client (to run locally, override using LettaEnvironment.SelfHosted)
        const client = new LettaClient({
            environment: LettaEnvironment.SelfHosted,
            token: process.env.LETTA_API_KEY ?? "",
        });

        // Create shared memory block
        let block = await client.blocks.create({
            value: "name: caren",
            label: "human",
        });

        // Create agents and attach block
        const agent1 = await client.agents.create({
            model: "openai/gpt-4",
            embedding: "openai/text-embedding-ada-002",
        });
        client.agents.coreMemory.attachBlock(agent1.id, block.id!);

        const agent2 = await client.agents.create({
            model: "openai/gpt-4",
            embedding: "openai/text-embedding-ada-002",
        });
        client.agents.coreMemory.attachBlock(agent2.id, block.id!);

        await client.agents.messages.create(agent1.id, {
            messages: [
                {
                    role: "user",
                    content: "My name isn't Caren, it's Sarah. Please update your core memory with core_memory_replace",
                },
            ],
        });

        // Validate memory has been updated for agent2
        block = await client.blocks.retrieve(block.id!);
        expect(block.value.toLowerCase()).toContain("sarah");

        block = await client.agents.coreMemory.retrieveBlock(agent2.id, "human");
        expect(block.value.toLowerCase()).toContain("sarah");

        // Ask agent to confirm memory update
        const response = await client.agents.messages.create(agent2.id, {
            messages: [
                {
                    role: "user",
                    content: "What's my name?",
                },
            ],
        });

        // Validate send message response contains new name
        expect(((response.messages[0] as AssistantMessage).content as string).toLowerCase()).toContain("sarah");

        // Delete agents
        await client.agents.delete(agent1.id);
        await client.agents.delete(agent2.id);
    }, 100000);

    it("create agent with custom tool", async () => {
        // Initialize client (to run locally, override using LettaEnvironment.SelfHosted)
        const client = new LettaClient({
            environment: LettaEnvironment.SelfHosted,
            token: process.env.LETTA_API_KEY ?? "",
        });

        // Create agent
        const agent = await client.agents.create({
            model: "openai/gpt-4",
            embedding: "openai/text-embedding-ada-002",
        });

        // Create custom tool with python source code
        const custom_tool_source_code = `
def secret_message():
    """Return a secret message."""
    return "Hello world!"
        `.trim();

        const tool = await client.tools.create({
            sourceCode: custom_tool_source_code,
        });

        // Attach custom tool to agent and invoke
        await client.agents.tools.attach(agent.id, tool.id!);

        const response = await client.agents.messages.create(agent.id, {
            messages: [
                {
                    role: "user",
                    content: "Run secret message tool and tell me what it returns",
                },
            ],
        });

        // Validate send message response contains expected return value
        expect(response.usage.stepCount).toEqual(2);
        expect(response.messages).toHaveLength(3);
        for (const message of response.messages) {
            switch (message.messageType) {
                case "tool_call_message":
                    expect((message as ToolCallMessage).toolCall.name).toEqual("secret_message");
                    break;
                case "tool_return_message":
                    expect((message as ToolReturnMessage).status).toEqual("success");
                    break;
                case "assistant_message":
                    expect(((message as AssistantMessage).content as string).toLowerCase()).toContain("hello world");
                    break;
                default:
                    fail(`Unexpected message type: ${(message as any).messageType}`);
            }
        }

        // Delete
        await client.agents.delete(agent.id);
        await client.tools.delete(tool.id!);
    }, 100000);

    it("should create single agent and send messages", async () => {
        // Initialize client (to run locally, override using LettaEnvironment.SelfHosted)
        const client = new LettaClient({
            environment: LettaEnvironment.SelfHosted,
            token: process.env.LETTA_API_KEY ?? "",
        });

        // Create agent with basic memory block
        const agent = await client.agents.create({
            memoryBlocks: [
                {
                    value: "name: caren",
                    label: "human",
                },
            ],
            model: "openai/gpt-4",
            embedding: "openai/text-embedding-ada-002",
        });

        // Validate agent persistence
        let agents = await client.agents.list();
        expect(agents.some((a: AgentState) => a.id === agent.id)).toBe(true);
        let messages = await client.agents.messages.list(agent.id);
        expect(messages.length).toBeGreaterThan(0);

        // Send greeting message
        let messageText = "Hello, how are you today?";
        const response = await client.agents.messages.create(agent.id, {
            messages: [
                {
                    role: "user",
                    content: messageText,
                },
            ],
        });

        // Validate send message response contains single assistant message
        expect(response.usage.stepCount).toEqual(1);
        expect(response.messages).toHaveLength(1);
        expect(response.messages[0]).toHaveProperty("messageType", "assistant_message");

        // Validate message history
        let cursor = messages[messages.length - 1].id;
        messages = await client.agents.messages.list(agent.id, { after: cursor });
        expect(messages).toHaveLength(3);

        // 1. User message that was just sent
        expect(messages[0]).toHaveProperty("messageType", "user_message");
        expect((messages[0] as UserMessage).content).toContain(messageText);

        // 2. Tool call for sending the assistant message back
        expect(messages[1]).toHaveProperty("messageType", "tool_call_message");
        expect((messages[1] as ToolCallMessage).toolCall.name).toEqual("send_message");

        // 3. Tool return message that contains success/failure of tool call
        expect(messages[2]).toHaveProperty("messageType", "tool_return_message");
        expect((messages[2] as ToolReturnMessage).status).toEqual("success");

        // Send message with streaming
        messageText = "My name isn't Caren, it's Sarah. Please update your core memory with core_memory_replace";
        const streamResponse = await client.agents.messages.createStream(agent.id, {
            messages: [
                {
                    role: "user",
                    content: messageText,
                },
            ],
        });

        // Validate streaming response
        for await (const chunk of streamResponse) {
            switch (chunk.messageType) {
                // 1. Reasoning message with the agent's internal monologue
                case "reasoning_message":
                    expect(chunk.reasoning.toLowerCase()).toContain("sarah");
                    break;

                // 2. Tool call to update core memory content
                case "tool_call_message":
                    expect(chunk.toolCall.name).toEqual("core_memory_replace");
                    break;

                // 3. Tool return message that contains success/failure of tool call
                case "tool_return_message":
                    expect(chunk.status).toEqual("success");
                    break;

                // 4. Assistant message that gets sent back as a reply to the original user message
                case "assistant_message":
                    expect((chunk.content as string).toLowerCase()).toContain("sarah");
                    break;

                // 5. Usage statistics message for the interaction capturing token and step count
                case "usage_statistics":
                    expect(chunk.stepCount).toEqual(2);
                    break;

                default:
                    throw new Error(`Unexpected message type: ${chunk.messageType}`);
            }
        }

        // Validate message history
        cursor = messages[messages.length - 1].id;
        messages = await client.agents.messages.list(agent.id, { after: cursor });
        expect(messages).toHaveLength(7);

        // 1. User message that was just sent
        expect(messages[0]).toHaveProperty("messageType", "user_message");
        expect((messages[0] as UserMessage).content).toContain(messageText);

        // 2. Tool call to update core memory content and send system message with update
        expect(messages[1]).toHaveProperty("messageType", "tool_call_message");
        expect((messages[1] as ToolCallMessage).toolCall.name).toEqual("core_memory_replace");

        // 3. System message with core memory update
        expect(messages[2]).toHaveProperty("messageType", "system_message");
        expect(((messages[2] as SystemMessage).content as string).toLowerCase()).toContain("name: sarah");

        // 4. Tool return message that contains success/failure of tool call
        expect(messages[3]).toHaveProperty("messageType", "tool_return_message");
        expect((messages[3] as ToolReturnMessage).status).toEqual("success");

        // 5. Tool call for sending the assistant message back
        expect(messages[4]).toHaveProperty("messageType", "user_message");
        expect((messages[4] as UserMessage).content).toContain("heartbeat");

        // 6. Tool return message that contains success/failure of tool call
        expect(messages[5]).toHaveProperty("messageType", "tool_call_message");
        expect((messages[5] as ToolCallMessage).toolCall.name).toEqual("send_message");

        // 7. Tool return message that contains success/failure of tool call
        expect(messages[6]).toHaveProperty("messageType", "tool_return_message");
        expect((messages[6] as ToolReturnMessage).status).toEqual("success");

        // Send async message
        messageText = "What's my name?";
        let run = await client.agents.messages.createAsync(agent.id, {
            messages: [
                {
                    role: "user",
                    content: messageText,
                },
            ],
        });
        expect(run.status).toEqual("created");
        await new Promise(resolve => setTimeout(resolve, 10000)); // Sleep for 1000 ms

        run = await client.runs.retrieveRun(run.id!);

        

        // Validate send message response contains single assistant message
        expect(run.status).toEqual("completed");
        const run_messages = await client.runs.listRunMessages(run.id!);
        expect(run_messages).toHaveLength(3);
        for (const message of run_messages) {
            switch (message.messageType) {
                case "user_message":
                    expect((message as UserMessage).content).toContain(messageText);
                    break;
                case "assistant_message":
                    expect(((message as AssistantMessage).content as string).toLowerCase()).toContain("sarah");
                    break;
                case "tool_return_message":
                    expect((message as ToolReturnMessage).status).toEqual("success");
                    break;
                default:
                    fail(`Unexpected message type: ${(message as any).messageType}`);
            }
        }

        // Delete agent
        await client.agents.delete(agent.id);
    }, 100000);
});

import { LettaEnvironment } from "environments";
import { LettaClient } from "../src/Client";
import { AgentState, LettaUsageStatistics, UserMessageOutput } from "api";
import { LettaStreamingResponse, MessagesListResponseItem } from "api/resources/agents";

const client = new LettaClient({
    environment: LettaEnvironment.LettaCloud,
    token: process.env.LETTA_API_KEY ?? "",
});

const globalAgentTracker = {
    ids: new Set<string>(),
};

async function createAndVerifyAgent(createOptions: Parameters<typeof client.agents.create>[0]): Promise<AgentState> {
    const agent = await client.agents.create(createOptions);

    expect(agent).toBeDefined();
    globalAgentTracker.ids.add(agent.id);

    const agents = await client.agents.list();
    expect(agents.some((a: AgentState) => a.id === agent.id)).toBe(true);

    return agent;
}

async function cleanupAllAgents() {
    for (const agentId of globalAgentTracker.ids) {
        try {
            await client.agents.delete(agentId);
        } catch (error) {
            console.error(`Failed to delete agent ${agentId}:`, error);
        }
    }

    globalAgentTracker.ids.clear();
}

afterAll(async () => {
    await cleanupAllAgents();
});

describe("Create agent", () => {
    it("should create an agent from default parameters", async () => {
        const agent = await createAndVerifyAgent({
            memory_blocks: [
                {
                    value: "username: caren",
                    label: "human",
                },
            ],
            llm_config: {
                model: "gpt-4",
                model_endpoint_type: "openai",
                model_endpoint: "https://api.openai.com/v1",
                context_window: 8192,
            },
            embedding_config: {
                embedding_model: "text-embedding-ada-002",
                embedding_endpoint_type: "openai",
                embedding_endpoint: "https://api.openai.com/v1",
                embedding_dim: 1536,
                embedding_chunk_size: 300,
            },
        });
    });

    it("should create an agent with handle", async () => {
        const agent = await createAndVerifyAgent({
            memory_blocks: [
                {
                    value: "username: caren",
                    label: "human",
                },
            ],
            llm: "openai/gpt-4",
            embedding: "openai/text-embedding-ada-002",
        });
    });

    it("should create an agent from template", async () => {
        const agent = await createAndVerifyAgent({
            memory_blocks: [
                {
                    value: "username: caren",
                    label: "human",
                },
            ],
            from_template: "fern-testing:latest",
        });
    });
});

describe("Delete agent", () => {
    it("should delete an agent successfully", async () => {
        const agent = await createAndVerifyAgent({
            memory_blocks: [
                {
                    value: "username: caren",
                    label: "human",
                },
            ],
            llm: "openai/gpt-4",
            embedding: "openai/text-embedding-ada-002",
        });

        await client.agents.delete(agent.id);
        globalAgentTracker.ids.delete(agent.id);

        const agents = await client.agents.list();
        expect(agents.some((a: AgentState) => a.id === agent.id)).toBe(false);
    });
});

describe("Send message", () => {
    it("Should send a message", async () => {
        const agent = await createAndVerifyAgent({
            memory_blocks: [
                {
                    value: "username: caren",
                    label: "human",
                },
            ],
            llm: "openai/gpt-4",
            embedding: "openai/text-embedding-ada-002",
        });
        const messageText = "Hello, how are you today?";
        const response = await client.agents.messages.create(agent.id, {
            messages: [
                {
                    role: "user",
                    text: messageText,
                },
            ],
        });

        expect(response.messages).toHaveLength(3);
        expect(response.usage.step_count).toEqual(1);
        expect(response.messages.map((message) => (message as { message_type?: string }).message_type)).toEqual([
            "reasoning_message",
            "tool_call_message",
            "tool_return_message",
        ]);

        const messages = await client.agents.messages.list(agent.id);
        expect(messages.length).toBeGreaterThan(0);
        const lastUserMessage = [...messages]
            .reverse()
            .find(
                (message) => (message as MessagesListResponseItem).message_type === "user_message"
            ) as UserMessageOutput;
        expect(lastUserMessage).toBeDefined();
        expect(lastUserMessage?.message).toContain(messageText);
    }, 10000);

    it("Should send a streaming message", async () => {
        const agent = await createAndVerifyAgent({
            memory_blocks: [
                {
                    value: "username: caren",
                    label: "human",
                },
            ],
            llm: "openai/gpt-4",
            embedding: "openai/text-embedding-ada-002",
        });
        const messageText = "Hello, how are you today?";
        const response = await client.agents.messages.stream(agent.id, {
            messages: [
                {
                    role: "user",
                    text: messageText,
                },
            ],
        });

        const responses: LettaStreamingResponse[] = [];
        for await (const chunk of response) {
            responses.push(chunk);
        }

        expect(responses).toHaveLength(4);
        expect((responses.pop() as LettaUsageStatistics).step_count).toEqual(1);
        expect(responses.map((message) => message.message_type)).toEqual([
            "reasoning_message",
            "tool_call_message",
            "tool_return_message",
        ]);

        const messages = await client.agents.messages.list(agent.id);
        expect(messages.length).toBeGreaterThan(0);
        const lastUserMessage = [...messages]
            .reverse()
            .find(
                (message) => (message as MessagesListResponseItem).message_type === "user_message"
            ) as UserMessageOutput;
        expect(lastUserMessage).toBeDefined();
        expect(lastUserMessage?.message).toContain(messageText);
    }, 10000);
});

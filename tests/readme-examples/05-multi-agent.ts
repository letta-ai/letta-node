import { LettaClient } from "../../src/Client";

async function testMultiAgent() {
    console.log("Testing Multi-Agent Communication example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    // Agents can message each other
    const agent1 = await client.agents.create({
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
        tools: ["send_message_to_agent_async"]
    });

    const agent2 = await client.agents.create({
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
        tools: ["send_message_to_agent_async"]
    });

    console.log(`Created agent 1: ${agent1.id}`);
    console.log(`Created agent 2: ${agent2.id}`);
    console.log("Agent 1 can now send messages to Agent 2");

    // Cleanup
    await client.agents.delete(agent1.id);
    await client.agents.delete(agent2.id);
    console.log("Multi-Agent Communication test passed!");
}

testMultiAgent().catch(err => {
    console.error("Multi-Agent Communication test failed:", err);
    process.exit(1);
});

import { LettaClient } from "../../src/Client";

async function testQuickStart() {
    console.log("Testing Quick Start example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    // Create an agent with memory
    const agent = await client.agents.create({
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
        memoryBlocks: [
            {
                label: "persona",
                value: "I'm a helpful AI assistant that remembers our conversations."
            },
            {
                label: "human",
                value: "The user's name is Alice. She likes TypeScript."
            }
        ],
        tools: ["web_search"]
    });

    console.log(`Created agent: ${agent.id}`);

    // Send a message
    const response = await client.agents.messages.create(agent.id, {
        messages: [{
            role: "user",
            content: "What's my name?"
        }]
    });

    // Agent remembers: "Your name is Alice!"
    console.log("Response messages:", JSON.stringify(response.messages, null, 2));

    // Cleanup
    await client.agents.delete(agent.id);
    console.log("Quick Start test passed!");
}

testQuickStart().catch(err => {
    console.error("Quick Start test failed:", err);
    process.exit(1);
});

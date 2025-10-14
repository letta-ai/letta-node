import { LettaClient } from "../../src/Client";

async function testStreaming() {
    console.log("Testing Streaming example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    // Create agent
    const agent = await client.agents.create({
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
    });

    console.log(`Created agent: ${agent.id}`);

    // Stream agent responses in real-time
    const stream = await client.agents.messages.createStream(agent.id, {
        messages: [{ role: "user", content: "Hello!" }]
    });

    let chunkCount = 0;
    for await (const chunk of stream) {
        console.log(`Chunk ${++chunkCount}:`, chunk);
    }

    console.log(`Received ${chunkCount} chunks`);

    // Cleanup
    await client.agents.delete(agent.id);
    console.log("Streaming test passed!");
}

testStreaming().catch(err => {
    console.error("Streaming test failed:", err);
    process.exit(1);
});

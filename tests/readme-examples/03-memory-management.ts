import { LettaClient } from "../../src/Client";

async function testMemoryManagement() {
    console.log("Testing Memory Management example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    // Agents have self-editing memory blocks
    const agent = await client.agents.create({
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
        memoryBlocks: [
            { label: "persona", value: "I am a helpful assistant." },
            { label: "human", value: "The user is learning TypeScript." },
            { label: "custom", value: "Custom memory block for additional context." }
        ]
    });

    console.log(`Created agent with memory blocks: ${agent.id}`);
    console.log(`Memory blocks:`, agent.memory.blocks.map(b => ({ label: b.label, value: b.value })));

    // Agents automatically manage their memory as they learn

    // Cleanup
    await client.agents.delete(agent.id);
    console.log("Memory Management test passed!");
}

testMemoryManagement().catch(err => {
    console.error("Memory Management test failed:", err);
    process.exit(1);
});

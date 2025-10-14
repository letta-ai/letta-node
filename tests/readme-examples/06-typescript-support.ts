import { LettaClient, Letta } from "../../src";

async function testTypeScriptSupport() {
    console.log("Testing TypeScript Support example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    // Full TypeScript support with exported types
    const request: Letta.CreateAgentRequest = {
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
        memoryBlocks: [
            { label: "persona", value: "I am a helpful assistant." }
        ]
    };

    const agent = await client.agents.create(request);
    console.log(`Created agent with typed request: ${agent.id}`);

    // Cleanup
    await client.agents.delete(agent.id);
    console.log("TypeScript Support test passed!");
}

testTypeScriptSupport().catch(err => {
    console.error("TypeScript Support test failed:", err);
    process.exit(1);
});

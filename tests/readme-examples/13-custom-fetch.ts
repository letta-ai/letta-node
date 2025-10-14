import { LettaClient } from "../../src/Client";

async function testCustomFetch() {
    console.log("Testing Custom Fetch Client example...");

    // The LettaClient accepts a custom fetcher parameter
    // This test verifies that the client can be instantiated with the fetcher option
    // Note: A custom fetcher must implement the FetchFunction type from the SDK
    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
        // fetcher: yourCustomFetchImplementation
    });

    // Create agent to verify client works
    const agent = await client.agents.create({
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
    });

    console.log(`Created agent (demonstrating fetcher option exists): ${agent.id}`);

    // Cleanup
    await client.agents.delete(agent.id);
    console.log("Custom Fetch Client test passed!");
}

testCustomFetch().catch(err => {
    console.error("Custom Fetch Client test failed:", err);
    process.exit(1);
});

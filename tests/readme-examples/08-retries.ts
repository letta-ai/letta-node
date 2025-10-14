import { LettaClient } from "../../src/Client";

async function testRetries() {
    console.log("Testing Retries example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    // Create agent with custom retry configuration
    const agent = await client.agents.create({
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
    }, {
        maxRetries: 3 // Default: 2
    });

    console.log(`Created agent with maxRetries=3: ${agent.id}`);

    // Cleanup
    await client.agents.delete(agent.id);
    console.log("Retries test passed!");
}

testRetries().catch(err => {
    console.error("Retries test failed:", err);
    process.exit(1);
});

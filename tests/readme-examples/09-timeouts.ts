import { LettaClient } from "../../src/Client";

async function testTimeouts() {
    console.log("Testing Timeouts example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    // Create agent with custom timeout
    const agent = await client.agents.create({
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
    }, {
        timeoutInSeconds: 30 // Default: 60
    });

    console.log(`Created agent with timeoutInSeconds=30: ${agent.id}`);

    // Cleanup
    await client.agents.delete(agent.id);
    console.log("Timeouts test passed!");
}

testTimeouts().catch(err => {
    console.error("Timeouts test failed:", err);
    process.exit(1);
});

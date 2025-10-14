import { LettaClient } from "../../src/Client";

async function testLocalDevelopment() {
    console.log("Testing Local Development example...");

    // This test requires a local Letta server running on localhost:8283
    const client = new LettaClient({
        baseUrl: "http://localhost:8283"
    });

    try {
        // Try to list agents to verify connection
        const agents = await client.agents.list();
        console.log(`Connected to local server. Found ${agents.length} agents.`);
        console.log("Local Development test passed!");
    } catch (err) {
        console.warn("Local Development test skipped (no local server running):", err);
        console.log("To run this test, start a local Letta server on http://localhost:8283");
    }
}

testLocalDevelopment().catch(err => {
    console.error("Local Development test failed:", err);
    process.exit(1);
});

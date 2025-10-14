import { LettaClient } from "../../src/Client";

async function testCustomHeaders() {
    console.log("Testing Custom Headers example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    // Create agent with custom headers
    const agent = await client.agents.create({
        model: "openai/gpt-4o-mini",
        embedding: "openai/text-embedding-3-small",
    }, {
        headers: {
            'X-Custom-Header': 'value'
        }
    });

    console.log(`Created agent with custom headers: ${agent.id}`);

    // Cleanup
    await client.agents.delete(agent.id);
    console.log("Custom Headers test passed!");
}

testCustomHeaders().catch(err => {
    console.error("Custom Headers test failed:", err);
    process.exit(1);
});

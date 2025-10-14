import { LettaClient } from "../../src/Client";

async function testRawResponse() {
    console.log("Testing Raw Response Access example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    // Access raw response with withRawResponse
    const { data, rawResponse } = await client.agents
        .create({
            model: "openai/gpt-4o-mini",
            embedding: "openai/text-embedding-3-small",
        })
        .withRawResponse();

    console.log(`Created agent: ${data.id}`);
    console.log(`Response status: ${rawResponse.status}`);
    console.log(`Response headers:`, Object.fromEntries(rawResponse.headers.entries()));

    // Cleanup
    await client.agents.delete(data.id);
    console.log("Raw Response Access test passed!");
}

testRawResponse().catch(err => {
    console.error("Raw Response Access test failed:", err);
    process.exit(1);
});

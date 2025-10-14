import { LettaClient, LettaError } from "../../src";

async function testErrorHandling() {
    console.log("Testing Error Handling example...");

    const client = new LettaClient({
        token: "INVALID_TOKEN",
    });

    try {
        // This should fail with an authentication error
        await client.agents.create({
            model: "openai/gpt-4o-mini",
            embedding: "openai/text-embedding-3-small",
        });
        console.error("Expected an error but got none!");
        process.exit(1);
    } catch (err) {
        if (err instanceof LettaError) {
            console.log("Caught LettaError:");
            console.log(`  Status Code: ${err.statusCode}`);
            console.log(`  Message: ${err.message}`);
            console.log(`  Body: ${JSON.stringify(err.body)}`);
            console.log("Error Handling test passed!");
        } else {
            throw err;
        }
    }
}

testErrorHandling().catch(err => {
    console.error("Error Handling test failed:", err);
    process.exit(1);
});

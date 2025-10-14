import { LettaClient } from "../../src/Client";

async function testAbortRequests() {
    console.log("Testing Abort Requests example...");

    const client = new LettaClient({
        token: process.env.LETTA_API_KEY || "YOUR_API_KEY",
    });

    const controller = new AbortController();

    // Set a timeout to abort the request after 100ms
    setTimeout(() => {
        console.log("Aborting request...");
        controller.abort();
    }, 100);

    try {
        await client.agents.create({
            model: "openai/gpt-4o-mini",
            embedding: "openai/text-embedding-3-small",
        }, {
            abortSignal: controller.signal
        });

        // If we get here, the request completed before being aborted
        console.log("Request completed before abort");
        console.log("Abort Requests test passed (request completed)!");
    } catch (err: any) {
        if (err.name === 'AbortError' || err.message?.includes('abort')) {
            console.log("Request was successfully aborted");
            console.log("Abort Requests test passed!");
        } else {
            throw err;
        }
    }
}

testAbortRequests().catch(err => {
    console.error("Abort Requests test failed:", err);
    process.exit(1);
});

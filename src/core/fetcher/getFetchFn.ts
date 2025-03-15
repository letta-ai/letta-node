import { RUNTIME } from "../runtime";

/**
 * Returns a fetch function based on the runtime
 */
export async function getFetchFn(): Promise<any> {
    // In React Native environments, use Expo's >=52 fetch for sse/streaming (WinterCG-compliant Fetch API) | https://expo.dev/changelog/2024-11-12-sdk-52 
    if (RUNTIME.type === "react-native") {
        return (await import('expo/fetch')).fetch;
    }
    // In Node.js 18+ environments, use native fetch
    if (RUNTIME.type === "node" && RUNTIME.parsedVersion != null && RUNTIME.parsedVersion >= 18) {
        return fetch;
    }

    // In Node.js 18 or lower environments, the SDK always uses`node-fetch`.
    if (RUNTIME.type === "node") {
        return (await import("node-fetch")).default as any;
    }

    // Otherwise the SDK uses global fetch if available,
    // and falls back to node-fetch.
    if (typeof fetch == "function") {
        return fetch;
    }

    // Defaults to node `node-fetch` if global fetch isn't available
    return (await import("node-fetch")).default as any;
}

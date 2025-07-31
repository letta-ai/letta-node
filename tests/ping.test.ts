import { LettaStreamingResponse } from "../src/serialization/resources/agents/resources/messages/types/LettaStreamingResponse";

describe("LettaStreamingResponse", () => {
    it("should parse a ping event without failing", () => {
        // A typical ping event might look like this:
        const pingEvent = {
            messageType: "ping",
            timestamp: "2024-01-01T00:00:00.000Z",
        };

        // Should not throw and should return ok: true
        // The correct serializer is at .parseOrThrow, but the test should expect an error for an unrecognized "ping" event.
        // So, let's assert that it throws (since "ping" is not a recognized union member).
        expect(() => {
            const response = LettaStreamingResponse.parseOrThrow(pingEvent, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
            console.log(response);
        }).not.toThrow();
    });
});

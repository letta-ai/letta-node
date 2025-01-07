/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Auth scheme field.
 */
export interface AuthSchemeField {
    name: string;
    displayName?: string;
    description: string;
    type: string;
    default?: string;
    required?: boolean;
    expectedFromCustomer?: boolean;
    getCurrentUserEndpoint?: string;
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Letta from "../index";

/**
 * Configuration for a Language Model (LLM) model. This object specifies all the information necessary to access an LLM model to usage with Letta, except for secret keys.
 *
 * Attributes:
 *     model (str): The name of the LLM model.
 *     model_endpoint_type (str): The endpoint type for the model.
 *     model_endpoint (str): The endpoint for the model.
 *     model_wrapper (str): The wrapper for the model. This is used to wrap additional text around the input/output of the model. This is useful for text-to-text completions, such as the Completions API in OpenAI.
 *     context_window (int): The context window size for the model.
 *     put_inner_thoughts_in_kwargs (bool): Puts `inner_thoughts` as a kwarg in the function call if this is set to True. This helps with function calling performance and also the generation of inner thoughts.
 */
export interface LlmConfig {
    /** LLM model name. */
    model: string;
    /** The endpoint type for the model. */
    model_endpoint_type: Letta.LlmConfigModelEndpointType;
    /** The endpoint for the model. */
    model_endpoint?: string;
    /** The wrapper for the model. */
    model_wrapper?: string;
    /** The context window size for the model. */
    context_window: number;
    /** Puts 'inner_thoughts' as a kwarg in the function call if this is set to True. This helps with function calling performance and also the generation of inner thoughts. */
    put_inner_thoughts_in_kwargs?: boolean;
}

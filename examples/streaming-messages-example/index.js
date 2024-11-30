/*
 * Streaming messages example
 *
 * This example demonstrates how to stream messages from an agent
 */
const { Letta } = require('@letta-ai/letta');

function askQuestion(question) {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(question, (answer) => {
      resolve(answer);
      readline.close();
    });
  });
}

async function main() {
  let baseURL = process.env['LETTA_API_URL'];

  if (!baseURL) {
    baseURL = await askQuestion('[Optional] Enter your Letta API URL: [defaults to: http://api.letta.com]: ');

    if (!baseURL) {
      baseURL = 'http://api.letta.com';
    }
  }

  let apiKey = process.env['API_KEY'];

  if (!apiKey) {
    apiKey = await askQuestion(
      '[Optional] Enter your Letta API Key, you can find it here [https://app.letta.com/api-keys]: ',
    );
  }

  // ask for the agent id
  let agentId = process.env['AGENT_ID'];

  if (!agentId) {
    agentId = await askQuestion('[Required] Enter the agent id: ');

    if (!agentId) {
      console.log(
        'AGENT_ID is required, you can set it by running `export AGENT_ID=your-agent-id` in your terminal.\n\nYou can find your agent id in a projects in the agents tab in the Letta dashboard (https://app.letta.com).',
      );
      process.exit(1);
    }
  }

  const message = await askQuestion('[Required] Enter the message to send: ');

  const client = new Letta({
    bearerToken: process.env['ACCESS_TOKEN'] || '',
    baseURL,
  });

  const response = client.agents.messages.stream(agentId, {
    messages: [
      {
        text: message,
        role: 'user',
      },
    ],
  });

  response.onMessage((message) => {
    if (message.message_type === 'internal_monologue') {
      console.log(`[internal_monologue] ${message.internal_monologue}`);
    }

    if (message.message_type === 'function_call') {
      console.log(`[function_call/${message.function_call.name}] ${message.function_call.arguments}`);
    }

    if (message.message_type === 'function_return') {
      console.log(`[function_return] ${message.function_return}`);
    }

    if (Object.prototype.hasOwnProperty.call(message, 'usage')) {
      console.log(`[usage] ${JSON.stringify(message.usage)}`);
    }
  });
}

main();

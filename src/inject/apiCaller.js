async function callAPI() {
  // Set up API endpoint and authentication
  const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
  const API_KEY = process.env.API_KEY;

  // Set up headers and data for the request
  const headers = {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  };

  const data = {
    'model': 'gpt-3.5-turbo',
    'messages': [
      // {'role': 'system', 'content': 'You are a helpful assistant.'},
      {'role': 'user', 'content': 'What is the meaning of life?'}
    ],
    'max_tokens': 50
  };

  try {
    // Send the request to the API
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    // Get the response from the API
    const result = await response.json();

    // Extract the generated message from the result
    const messageContent = result.choices[0].message.content;

    // Return the generated message
    return messageContent;
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
    throw error;
  }
}

module.exports = callAPI;

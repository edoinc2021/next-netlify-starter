from flask import Flask, request
import openai

app = Flask(__name__)

# Configure OpenAI API credentials
openai.api_key = 'YOUR_API_KEY'

# Define a route to handle user requests
@app.route('/chat', methods=['POST'])
def chat():
    # Retrieve user input
    user_input = request.json['message']

    # Call the AI language model API to generate a response
    response = openai.Completion.create(
        engine='text-davinci-003',
        prompt=user_input,
        max_tokens=50  # Set the appropriate response length
    )

    # Extract the generated response from the API response
    bot_response = response.choices[0].text.strip()

    # Return the bot's response to the user
    return {'response': bot_response}

if __name__ == '__main__':
    app.run()

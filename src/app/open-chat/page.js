import axios from 'axios';

export default async function handler(req, res) {
    const { text } = req.body;

    try {
        // Make a request to the OpenAI API to generate a response
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-002', // You can change the model based on your preference
                prompt: text,
                max_tokens: 50 // You can adjust this based on how long you want the response to be
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `sk-proj-duGwAi62bz18JsBRIrUXT3BlbkFJUDU9l6TpnpIceF5eUWu9`
                }
            }
        );

        // Return the AI's response
        res.status(200).json(response.data.choices[0].text.trim());
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}
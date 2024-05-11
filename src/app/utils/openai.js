import axios from 'axios';

export async function askOpenAI(question) {
    const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: question,
        max_tokens: 50,
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
    });
    return response.data.choices[0].text.trim();
}

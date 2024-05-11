import React, { useState } from 'react';
import { OpenAI } from 'openai';

const openai = new OpenAI('YOUR_OPENAI_API_KEY');

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleMessageSubmit = async () => {
        if (!input.trim()) return;

        setMessages([...messages, { text: input, user: 'You' }]);
        setInput('');

        try {
            const response = await openai.complete({
                engine: 'davinci-codex',
                prompt: input,
                maxTokens: 150,
                temperature: 0.7,
                topP: 1.0,
                frequencyPenalty: 0.0,
                presencePenalty: 0.0,
                stop: ['\n']
            });

            const botResponse = response.data.choices[0].text.trim();
            setMessages([...messages, { text: botResponse, user: 'Bot' }]);
        } catch (error) {
            console.error('Error generating response from OpenAI:', error);
        }
    };

    return (
        <div>
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.user}`}>
                        <span className="user">{message.user}: </span>
                        <span className="text">{message.text}</span>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleMessageSubmit}>Send</button>
        </div>
    );
};

export default Chat;

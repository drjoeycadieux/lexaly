import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    const sendMessage = async () => {
        // Send the user's message to the OpenAI API
        const response = await axios.post('/api/chat', { text: inputText });

        // Add the user's message and the AI's response to the messages array
        setMessages(prevMessages => [
            ...prevMessages,
            { sender: 'user', text: inputText },
            { sender: 'bot', text: response.data },
        ]);

        // Clear the input field
        setInputText('');
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                        {message.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

import { useState } from 'react';
import { askOpenAI } from '../utils/openai';

function Chat() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleAsk = async () => {
        const response = await askOpenAI(question);
        setAnswer(response);
    };

    return (
        <div>
            <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask me anything..."
            />
            <button onClick={handleAsk}>Ask</button>
            {answer && <p>{answer}</p>}
        </div>
    );
}

export default Chat;

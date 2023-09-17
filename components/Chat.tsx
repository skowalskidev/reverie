'use client';

import { useChat } from 'ai/react';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    });

    return (
        <div>
            <ul>
                {messages.map((m, index) => (
                    <li key={index}>
                        {m.role === 'user' ? 'User: ' : 'AI: '}
                        {m.content}
                    </li>
                ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input value={input} placeholder='Say something...' onChange={handleInputChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
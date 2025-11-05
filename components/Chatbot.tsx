import React, { useState, useRef, useEffect } from 'react';
import { BotIcon, XIcon, SendIcon } from './icons';
import { generateResponse } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage = { sender: 'user' as const, text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponse = await generateResponse(input);
      setMessages((prev) => [...prev, { sender: 'bot' as const, text: botResponse }]);
    } catch (error) {
      console.error('Gemini API error:', error);
      setMessages((prev) => [...prev, { sender: 'bot' as const, text: 'Sorry, I am having trouble connecting. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          aria-label="Open chatbot"
        >
          <BotIcon className="w-8 h-8" />
        </button>
      </div>

      <div className={`fixed bottom-5 right-5 z-50 w-full max-w-sm h-[70vh] flex flex-col bg-gray-800 rounded-lg shadow-2xl transition-all duration-300 origin-bottom-right border border-gray-700 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
        <header className="flex items-center justify-between p-4 bg-primary-600 text-white rounded-t-lg">
          <h3 className="text-lg font-semibold">Farming Assistant</h3>
          <button onClick={() => setIsOpen(false)} className="hover:bg-primary-700 rounded-full p-1">
            <XIcon className="w-6 h-6" />
          </button>
        </header>
        <div ref={chatboxRef} className="flex-1 p-4 overflow-y-auto space-y-4">
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-200 p-3 rounded-lg max-w-xs">
              <p>Hello! How can I help you today with farming, schemes, or modern techniques?</p>
            </div>
          </div>
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`${msg.sender === 'user' ? 'bg-primary-600 text-white' : 'bg-gray-700 text-gray-200'} p-3 rounded-lg max-w-xs whitespace-pre-wrap`}>
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-gray-200 p-3 rounded-lg max-w-xs">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 border border-gray-600 bg-gray-700 text-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="bg-primary-600 text-white rounded-full p-3 hover:bg-primary-700 disabled:bg-primary-300"
              disabled={isLoading || input.trim() === ''}
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
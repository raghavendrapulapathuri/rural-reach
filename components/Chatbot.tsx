import React, { useState, useRef, useEffect } from 'react';
import { BotIcon, XIcon } from './icons';
import { CHATBOT_QA } from '../constants';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [availableQuestions, setAvailableQuestions] = useState(CHATBOT_QA);
  const [isLoading, setIsLoading] = useState(false);
  const chatboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat is first opened
      setMessages([{ 
        sender: 'bot', 
        text: 'Hello! Please select a question from below that you\'d like to know more about.' 
      }]);
    }
  }, [isOpen]);

  const handleQuestionClick = (question: string, answer: string) => {
    if (isLoading) return;

    setMessages(prev => [...prev, { sender: 'user', text: question }]);
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: answer }]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      <div className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 text-white rounded-full p-4 shadow-xl hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transform hover:scale-110 transition-all"
          aria-label="Open chatbot"
        >
          <div className="relative">
            <BotIcon className="w-8 h-8" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
          </div>
        </button>
      </div>

      <div className={`fixed bottom-5 right-5 z-50 w-full max-w-2xl h-[85vh] flex flex-col bg-white rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right border border-gray-200 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
        <header className="flex items-center justify-between px-6 py-4 bg-primary-600 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <BotIcon className="w-8 h-8" />
            <h3 className="text-xl font-bold">Rural Reach Assistant</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="hover:bg-primary-700/50 rounded-full p-2 transition-colors"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </header>
        <div ref={chatboxRef} className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-end space-x-2`}>
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                  <BotIcon className="w-5 h-5 text-white" />
                </div>
              )}
              <div className={`
                ${msg.sender === 'user' 
                  ? 'bg-primary-600 text-white ml-12' 
                  : 'bg-white text-gray-800 shadow-md mr-12'
                } 
                p-4 rounded-2xl whitespace-pre-wrap max-w-[80%]
              `}>
                <p className="text-base">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start items-end space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                <BotIcon className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white shadow-md p-4 rounded-2xl">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
          <h4 className="text-sm font-semibold text-gray-600 mb-3 px-2">Frequently Asked Questions:</h4>
          <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
            {availableQuestions.map((qa, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(qa.question, qa.answer)}
                className="text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                <p className="line-clamp-2">{qa.question}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
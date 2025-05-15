import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Send, ArrowLeft, MoreVertical, Star, Download, 
  RefreshCw, Copy, MessageSquare, Sparkles, Image, Paperclip, 
  Mic, Info, X
} from 'lucide-react';
import ChatBubble from '../components/ui/ChatBubble';
import Button from '../components/ui/Button';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: string;
}

const ChatPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Chat - NexusAI';
  }, []);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm NexusAI. How can I help you today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I understand what you're asking. Based on the latest data, the answer to your question involves several factors...",
        "That's an interesting question! Here's what I can tell you based on my knowledge...",
        "I've analyzed your request, and here's what I found. There are multiple perspectives to consider...",
        "Great question! From my analysis, I can provide the following insights on this topic...",
        "I've processed your query, and I can share some valuable information about this subject...",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, aiMessage]);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16 flex flex-col">
      {/* Chat Header */}
      <header className="bg-white border-b border-neutral-200 shadow-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/dashboard" className="mr-4 text-neutral-600 hover:text-neutral-900">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-lg font-medium">New Conversation</h1>
              <p className="text-xs text-neutral-500">Started just now</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full text-neutral-600 hover:bg-neutral-100" aria-label="Star conversation">
              <Star size={18} />
            </button>
            <button className="p-2 rounded-full text-neutral-600 hover:bg-neutral-100" aria-label="Export conversation">
              <Download size={18} />
            </button>
            <button className="p-2 rounded-full text-neutral-600 hover:bg-neutral-100" aria-label="More options">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <main className="flex-1 bg-neutral-50 overflow-y-auto">
        <div className="max-w-3xl mx-auto py-6 px-4">
          <div className="space-y-6">
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                message={message.content}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))}
            
            {isTyping && (
              <ChatBubble
                message=""
                isTyping={true}
              />
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
      </main>

      {/* Chat Input */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white border-t border-neutral-200 py-4 px-4 sm:px-6"
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-end rounded-xl border border-neutral-300 bg-white focus-within:border-primary-300 focus-within:ring-2 focus-within:ring-primary-300">
            <div className="flex-1 min-w-0 p-2">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Message NexusAI..."
                rows={1}
                className="block w-full resize-none border-0 bg-transparent p-2 text-neutral-900 placeholder:text-neutral-400 focus:ring-0 sm:text-sm"
                style={{ maxHeight: '200px' }}
              />
              
              <div className="flex items-center pt-2 border-t border-neutral-200 mt-2">
                <div className="flex space-x-1">
                  <button className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100" aria-label="Attach image">
                    <Image size={16} />
                  </button>
                  <button className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100" aria-label="Attach file">
                    <Paperclip size={16} />
                  </button>
                  <button className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100" aria-label="Voice input">
                    <Mic size={16} />
                  </button>
                </div>
                
                <div className="flex-grow"></div>
                
                <div className="text-xs text-neutral-500 hidden sm:block">
                  <span className="mr-1">Shift + Enter for new line</span>
                  <span className="hidden lg:inline">· Ctrl + / for commands</span>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 pr-2 pb-2">
              <Button
                size="sm"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                rightIcon={<Send size={14} />}
              >
                Send
              </Button>
            </div>
          </div>
          
          <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
            <div className="flex items-center">
              <Sparkles size={14} className="text-primary-500 mr-1" />
              <span>Using NexusAI Pro Model</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center hover:text-neutral-700">
                <RefreshCw size={14} className="mr-1" />
                <span>Regenerate</span>
              </button>
              <button className="flex items-center hover:text-neutral-700">
                <Copy size={14} className="mr-1" />
                <span>Copy last</span>
              </button>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Feature Hints */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-2 flex items-center space-x-4 text-sm"
      >
        <button className="flex items-center text-primary-600 hover:text-primary-700">
          <MessageSquare size={14} className="mr-1" />
          <span>Try: "Explain quantum computing"</span>
        </button>
        <span className="text-neutral-300">|</span>
        <button className="flex items-center text-primary-600 hover:text-primary-700">
          <Info size={14} className="mr-1" />
          <span>Tips</span>
        </button>
        <button className="ml-2 text-neutral-400 hover:text-neutral-600">
          <X size={14} />
        </button>
      </motion.div>
    </div>
  );
};

export default ChatPage;
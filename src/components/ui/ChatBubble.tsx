import React from 'react';
import { motion } from 'framer-motion';

interface ChatBubbleProps {
  message: string;
  isUser?: boolean;
  timestamp?: string;
  isTyping?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  isUser = false,
  timestamp,
  isTyping = false,
}) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[80%] md:max-w-[70%]`}>
        <div className={`rounded-2xl px-4 py-3 ${
          isUser 
            ? 'bg-primary-500 text-white' 
            : 'bg-white border border-neutral-200 text-neutral-800'
        }`}>
          {isTyping ? (
            <div className="flex space-x-2 items-center h-6 px-2">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                className={`w-2 h-2 rounded-full ${isUser ? 'bg-white' : 'bg-primary-500'}`}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                className={`w-2 h-2 rounded-full ${isUser ? 'bg-white' : 'bg-primary-500'}`}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                className={`w-2 h-2 rounded-full ${isUser ? 'bg-white' : 'bg-primary-500'}`}
              />
            </div>
          ) : (
            <p className="text-sm sm:text-base whitespace-pre-wrap">{message}</p>
          )}
        </div>
        
        {timestamp && (
          <p className={`text-xs text-neutral-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
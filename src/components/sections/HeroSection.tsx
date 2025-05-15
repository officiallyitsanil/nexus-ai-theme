import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ChatBubble from '../ui/ChatBubble';

const HeroSection: React.FC = () => {
  const [showTyping, setShowTyping] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const demoMessages = [
    { content: "What technologies will shape AI in 2025?", isUser: true },
    { content: "In 2025, several key technologies are shaping AI:\n\n1. Multimodal Learning - AI systems that seamlessly integrate vision, language, and audio\n\n2. Edge AI - Smart devices with powerful on-device processing\n\n3. AI Agents - Autonomous AI systems that can execute complex tasks\n\n4. Quantum-enhanced ML - Leveraging quantum computing for specific AI workloads\n\nThese advances are making AI more capable, personalized, and embedded in our everyday lives.", isUser: false },
    { content: "Can you generate a visual showing global AI adoption trends?", isUser: true },
    { content: "I've created a visualization of global AI adoption trends across industries. The finance and healthcare sectors are leading with 78% and 71% adoption rates, while manufacturing and retail show the fastest growth at 45% and 39% year-over-year respectively.\n\nEurope and North America remain the top regions for enterprise AI, but Asia is showing the strongest acceleration, particularly in China, Singapore, and South Korea.\n\nWould you like me to analyze any specific industry or region in more detail?", isUser: false }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        const next = (prev + 1) % demoMessages.length;
        if (next % 2 === 0) {
          setShowTyping(true);
        }
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-gradient-radial from-primary-500/20 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 right-0 left-auto top-auto h-[500px] w-[500px] translate-x-[30%] translate-y-[20%] rounded-full bg-gradient-radial from-secondary-500/20 to-transparent blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex items-center space-x-2 mb-6 bg-primary-50 text-primary-600 rounded-full px-4 py-2 w-fit text-sm font-medium">
              <Sparkles size={16} />
              <span>Next-Gen AI Chat Experience</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Experience AI that <span className="gradient-text">understands</span> you better
            </h1>

            <p className="text-lg text-neutral-600 mb-8 max-w-lg">
              NexusAI redefines conversational intelligence with natural, helpful, and accurate responses for work, creativity, and learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/signup" 
                className="btn-primary flex items-center justify-center"
              >
                <span>Try for Free</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link 
                to="/features" 
                className="btn-secondary"
              >
                Explore Features
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-sm text-neutral-500">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center overflow-hidden"
                  >
                    <span className="text-xs font-medium text-neutral-600">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                ))}
              </div>
              <p>Join <span className="font-medium text-primary-500">10,000+</span> users already chatting</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:ml-auto order-first lg:order-last"
          >
            <div className="relative mx-auto max-w-md">
              <div className="glass-effect rounded-2xl overflow-hidden border-2 border-white/30 shadow-xl">
                <div className="bg-neutral-800 px-4 py-3 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-white text-sm font-medium">NexusAI Chat</div>
                </div>
                <div className="bg-neutral-50 p-4 h-[400px] overflow-y-auto flex flex-col">
                  <div className="flex-grow space-y-4">
                    {demoMessages.slice(0, currentMessageIndex + 1).map((msg, idx) => (
                      <ChatBubble
                        key={idx}
                        message={msg.content}
                        isUser={msg.isUser}
                        isTyping={idx === currentMessageIndex && !msg.isUser && showTyping}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-white p-3 border-t border-neutral-200">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Type your message..."
                      className="flex-grow bg-neutral-100 rounded-full py-2 px-4 focus:outline-none text-sm"
                      disabled
                    />
                    <button className="ml-2 p-2 bg-primary-500 text-white rounded-full flex items-center justify-center">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
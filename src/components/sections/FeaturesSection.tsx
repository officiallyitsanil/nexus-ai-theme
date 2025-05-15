import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Lock, Globe, MessageSquare, Cpu, RefreshCw, Share2 } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: 'Advanced AI Understanding',
      description: 'Our AI processes complex language and intent with remarkable accuracy, understanding context, nuance, and topic shifts naturally.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Instant Responses',
      description: 'Get immediate, thoughtful responses to your questions and commands with lightning-fast reaction times.'
    },
    {
      icon: <Lock size={24} />,
      title: 'Privacy Focused',
      description: 'Your conversations remain confidential with end-to-end encryption and optional ephemeral chats.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Multilingual Support',
      description: 'Communicate in over 100 languages with native-quality translations and understanding of cultural context.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Contextual Memory',
      description: 'NexusAI remembers your conversation history and preferences to provide more personalized interactions.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Multimodal Capabilities',
      description: 'Beyond text, NexusAI processes and generates images, audio, and understands document uploads.'
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Continuous Learning',
      description: 'Our models improve with each interaction, adapting to your communication style and preferences.'
    },
    {
      icon: <Share2 size={24} />,
      title: 'Integration Ready',
      description: 'Connect NexusAI to your existing tools with our robust API and pre-built integrations.'
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powerful Features for <span className="gradient-text">Effortless</span> Conversations
          </h2>
          <p className="text-lg text-neutral-600">
            NexusAI combines cutting-edge technology with intuitive design to create a chat experience that feels natural and productive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
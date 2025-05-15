import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Zap, Lock, Globe, MessageSquare, Cpu, RefreshCw, Share2, Sparkles, ArrowRight, Check } from 'lucide-react';
import Button from '../components/ui/Button';

const FeaturesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Features - NexusAI';
  }, []);

  const features = [
    {
      icon: <Brain size={32} />,
      title: 'Advanced AI Understanding',
      description: 'Our AI processes complex language and intent with remarkable accuracy, understanding context, nuance, and topic shifts naturally.',
      details: [
        'Multi-turn context awareness keeps conversations coherent',
        'Sentiment analysis detects emotions and responds appropriately',
        'Handles ambiguous queries with clarification when needed',
        'Understands industry-specific terminology across domains'
      ]
    },
    {
      icon: <Zap size={32} />,
      title: 'Instant Responses',
      description: 'Get immediate, thoughtful responses to your questions and commands with lightning-fast reaction times.',
      details: [
        'Edge-optimized infrastructure reduces latency to milliseconds',
        'Progressive response streaming for immediate feedback',
        'Prioritized handling for time-sensitive queries',
        'Background processing for complex tasks while maintaining conversation'
      ]
    },
    {
      icon: <Lock size={32} />,
      title: 'Privacy Focused',
      description: 'Your conversations remain confidential with end-to-end encryption and optional ephemeral chats.',
      details: [
        'End-to-end encryption for all conversations',
        'Ephemeral chat mode that leaves no conversation history',
        'Fine-grained privacy controls for data retention',
        'Regular third-party security audits'
      ]
    },
    {
      icon: <Globe size={32} />,
      title: 'Multilingual Support',
      description: 'Communicate in over 100 languages with native-quality translations and understanding of cultural context.',
      details: [
        'Native-quality real-time translation for over 100 languages',
        'Cultural context awareness for culturally appropriate responses',
        'Language detection for automatic adaptation',
        'Regional dialect understanding and colloquialism support'
      ]
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Contextual Memory',
      description: 'NexusAI remembers your conversation history and preferences to provide more personalized interactions.',
      details: [
        'Long-term memory of previous interactions and preferences',
        'Smart forgetting of irrelevant information',
        'Personalized recommendations based on past usage patterns',
        'Cross-session context maintenance'
      ]
    },
    {
      icon: <Cpu size={32} />,
      title: 'Multimodal Capabilities',
      description: 'Beyond text, NexusAI processes and generates images, audio, and understands document uploads.',
      details: [
        'Image recognition and generation capabilities',
        'Voice input and natural speech output',
        'Document understanding and analysis',
        'Chart and graph creation from data inputs'
      ]
    },
    {
      icon: <RefreshCw size={32} />,
      title: 'Continuous Learning',
      description: 'Our models improve with each interaction, adapting to your communication style and preferences.',
      details: [
        'Personalized learning from your interaction patterns',
        'Weekly model updates with new capabilities',
        'Feedback-driven improvements',
        'Domain adaptation for specialized knowledge areas'
      ]
    },
    {
      icon: <Share2 size={32} />,
      title: 'Integration Ready',
      description: 'Connect NexusAI to your existing tools with our robust API and pre-built integrations.',
      details: [
        'RESTful API for custom integrations',
        'Pre-built plugins for popular productivity tools',
        'Webhook support for event-driven workflows',
        'Custom data sources for enterprise knowledge bases'
      ]
    },
  ];

  const compareFeatures = [
    { feature: 'Model size', nexusai: '175B+ parameters', others: '7-70B parameters' },
    { feature: 'Response time', nexusai: '<500ms', others: '2-5 seconds' },
    { feature: 'Context window', nexusai: '100,000 tokens', others: '8,000-32,000 tokens' },
    { feature: 'Multimodal support', nexusai: 'Full image, audio, video', others: 'Limited image only' },
    { feature: 'Memory personalization', nexusai: 'Advanced', others: 'Basic' },
    { feature: 'API rate limits', nexusai: '100,000/day', others: '5,000-10,000/day' },
    { feature: 'Cost efficiency', nexusai: 'Up to 80% less per token', others: 'Standard market rates' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Features that Make NexusAI 
              <br />
              <span className="gradient-text">Exceptional</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Discover how NexusAI combines cutting-edge AI technology with thoughtful design to create a chat experience that's truly remarkable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="btn-primary">
                Try For Free
              </Link>
              <a href="#features" className="btn-secondary">
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Features Section */}
      <section id="features" className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles size={20} className="text-primary-500" />
              <span className="text-primary-600 font-medium">Cutting-Edge Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful Features for Modern Conversations
            </h2>
            <p className="text-lg text-neutral-600">
              Every feature is designed to make your AI interactions more natural, productive, and enjoyable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index % 2 * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-neutral-200"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-primary-100 text-primary-500 mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-neutral-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={18} className="text-primary-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-neutral-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="gradient-text">NexusAI</span>?
            </h2>
            <p className="text-lg text-neutral-600">
              See how NexusAI compares to other AI assistants in the market.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="py-4 px-6 text-left rounded-tl-lg">Feature</th>
                  <th className="py-4 px-6 text-left bg-primary-600">NexusAI</th>
                  <th className="py-4 px-6 text-left rounded-tr-lg">Other AI Assistants</th>
                </tr>
              </thead>
              <tbody>
                {compareFeatures.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                    <td className="py-4 px-6 font-medium">{item.feature}</td>
                    <td className="py-4 px-6 bg-primary-50 text-primary-900 font-medium">{item.nexusai}</td>
                    <td className="py-4 px-6 text-neutral-600">{item.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience NexusAI?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of users who are already enjoying smarter, more productive AI conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="bg-white text-primary-600 hover:bg-neutral-100 btn-secondary">
                Get Started Free
              </Link>
              <Link to="/pricing" className="border border-white hover:bg-white/10 text-white rounded-full py-3 px-6 transition-all duration-300">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
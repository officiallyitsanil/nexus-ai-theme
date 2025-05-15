import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check } from 'lucide-react';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'NexusAI - Intelligent Conversation Partner';
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      text: 'NexusAI has transformed my creative process. It helps me brainstorm ideas and refine my writing in ways I never thought possible.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Software Engineer',
      text: 'As a developer, I use NexusAI to explain complex code, debug issues, and even generate boilerplate. It\'s like having a senior engineer by my side 24/7.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Director',
      text: 'The insights NexusAI provides for our marketing campaigns are invaluable. It\'s helped us craft more engaging content and analyze trends more effectively.',
      rating: 4,
    },
  ];

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Loved by <span className="gradient-text">Thousands</span> of Users
            </h2>
            <p className="text-lg text-neutral-300">
              Here's what people are saying about their experience with NexusAI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-800 p-6 rounded-2xl border border-neutral-700"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-neutral-300 mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-neutral-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-10 -z-10"></div>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Experience Smarter Conversations?
                </h2>
                <p className="text-neutral-600 mb-6">
                  Start chatting with NexusAI today and discover why thousands of users trust us for their AI conversation needs.
                </p>
                <div className="space-y-3">
                  {['No credit card required', 'Free tier available', 'Cancel anytime'].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={18} className="text-primary-500 mr-2" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end">
                <a 
                  href="/signup" 
                  className="btn-primary flex items-center whitespace-nowrap"
                >
                  <span>Get Started Free</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PricingSection />
    </>
  );
};

export default HomePage;
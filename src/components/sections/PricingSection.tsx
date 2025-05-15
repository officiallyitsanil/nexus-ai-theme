import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../ui/PricingCard';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Free',
      price: 'Free',
      description: 'Perfect for getting started and casual use',
      features: [
        { text: '100 messages per day', included: true },
        { text: 'Basic response speed', included: true },
        { text: 'Standard AI model', included: true },
        { text: 'Multi-device support', included: true },
        { text: 'Document analysis', included: false },
        { text: 'Priority support', included: false },
        { text: 'Custom integrations', included: false },
        { text: 'Advanced data analysis', included: false },
      ],
      buttonText: 'Get Started',
    },
    {
      title: 'Pro',
      price: '$19',
      description: 'For professionals who need more advanced features',
      features: [
        { text: 'Unlimited messages', included: true },
        { text: 'Fast response speed', included: true },
        { text: 'Advanced AI model', included: true },
        { text: 'Multi-device support', included: true },
        { text: 'Document analysis', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom integrations', included: false },
        { text: 'Advanced data analysis', included: false },
      ],
      buttonText: 'Start Pro Plan',
      popular: true,
    },
    {
      title: 'Business',
      price: '$49',
      description: 'For teams that need premium capabilities',
      features: [
        { text: 'Unlimited messages', included: true },
        { text: 'Ultra-fast response speed', included: true },
        { text: 'Premium AI model', included: true },
        { text: 'Multi-device support', included: true },
        { text: 'Document analysis', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'Advanced data analysis', included: true },
      ],
      buttonText: 'Start Business Plan',
    },
  ];

  return (
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
            Choose the Perfect <span className="gradient-text">Plan</span> for You
          </h2>
          <p className="text-lg text-neutral-600">
            Whether you're a casual user or a business with complex needs, we have a plan that fits your requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              index={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              buttonText={plan.buttonText}
              popular={plan.popular}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-500 mb-2">Need a custom solution for your enterprise?</p>
          <a 
            href="#" 
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            Contact our sales team
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
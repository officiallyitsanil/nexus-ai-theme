import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, HelpCircle } from 'lucide-react';
import PricingCard from '../components/ui/PricingCard';

const PricingPage: React.FC = () => {
  const [annual, setAnnual] = useState(false);
  
  useEffect(() => {
    document.title = 'Pricing - NexusAI';
  }, []);

  const pricingPlans = [
    {
      title: 'Free',
      price: 'Free',
      annualPrice: 'Free',
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
        { text: 'Team collaboration', included: false },
        { text: 'Custom branding', included: false },
      ],
      buttonText: 'Get Started',
    },
    {
      title: 'Pro',
      price: '$19',
      annualPrice: '$15',
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
        { text: 'Team collaboration', included: false },
        { text: 'Custom branding', included: false },
      ],
      buttonText: 'Start Pro Plan',
      popular: true,
    },
    {
      title: 'Business',
      price: '$49',
      annualPrice: '$39',
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
        { text: 'Team collaboration', included: true },
        { text: 'Custom branding', included: true },
      ],
      buttonText: 'Start Business Plan',
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect on your next billing date.'
    },
    {
      question: 'Is there a limit to how many messages I can send?',
      answer: 'The Free plan has a limit of 100 messages per day. Pro and Business plans offer unlimited messaging.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards, including Visa, Mastercard, American Express, and Discover. We also support PayPal and Apple Pay.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: "Yes, you can cancel your subscription at any time. When you cancel, you'll continue to have access to your paid features until the end of your current billing cycle."
    },
    {
      question: 'Do you offer refunds?',
      answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied with our service within the first 14 days, you can request a full refund."
    },
    {
      question: 'Is there a free trial for paid plans?',
      answer: "We don't offer a traditional free trial, but our Free plan lets you experience NexusAI's core features with limited usage. You can upgrade whenever you're ready."
    },
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Choose the plan that fits your needs. All plans include our core features with different usage limits and capabilities.
            </p>
            
            <div className="bg-neutral-100 p-1 rounded-full inline-flex mb-8">
              <button
                onClick={() => setAnnual(false)}
                className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                  !annual 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-neutral-600 hover:text-neutral-800'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                  annual 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-neutral-600 hover:text-neutral-800'
                }`}
              >
                Annual <span className="text-xs text-green-600 font-normal ml-1">Save 20%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 md:py-12 mb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                index={index}
                title={plan.title}
                price={annual ? plan.annualPrice : plan.price}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                popular={plan.popular}
                period={annual ? 'month, billed annually' : 'month'}
              />
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-neutral-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">All Plans Include</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'No credit card required to start',
                'Cancel anytime',
                'Regular feature updates',
                'Mobile & desktop apps',
                'GDPR compliance',
                'SSL encryption',
                'Data export',
                'Email support',
                'Community access'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check size={18} className="text-primary-500 mr-2 flex-shrink-0" />
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">
              Compare Plan Features
            </h2>
            <p className="text-neutral-600">
              A detailed breakdown of what's included in each plan.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-200">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-4 text-center">Free</th>
                  <th className="py-4 px-4 text-center bg-primary-50">Pro</th>
                  <th className="py-4 px-4 text-center">Business</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 px-6 font-medium">Daily message limit</td>
                  <td className="py-4 px-4 text-center">100</td>
                  <td className="py-4 px-4 text-center bg-primary-50">Unlimited</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 px-6 font-medium">AI model version</td>
                  <td className="py-4 px-4 text-center">Standard</td>
                  <td className="py-4 px-4 text-center bg-primary-50">Advanced</td>
                  <td className="py-4 px-4 text-center">Premium</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 px-6 font-medium">Response speed</td>
                  <td className="py-4 px-4 text-center">Standard</td>
                  <td className="py-4 px-4 text-center bg-primary-50">Fast</td>
                  <td className="py-4 px-4 text-center">Ultra-fast</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 px-6 font-medium">Document analysis</td>
                  <td className="py-4 px-4 text-center"><X size={18} className="inline text-neutral-400" /></td>
                  <td className="py-4 px-4 text-center bg-primary-50"><Check size={18} className="inline text-primary-500" /></td>
                  <td className="py-4 px-4 text-center"><Check size={18} className="inline text-primary-500" /></td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 px-6 font-medium">File upload size</td>
                  <td className="py-4 px-4 text-center">5MB</td>
                  <td className="py-4 px-4 text-center bg-primary-50">25MB</td>
                  <td className="py-4 px-4 text-center">100MB</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 px-6 font-medium">Chat history retention</td>
                  <td className="py-4 px-4 text-center">7 days</td>
                  <td className="py-4 px-4 text-center bg-primary-50">6 months</td>
                  <td className="py-4 px-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 px-6 font-medium">Team members</td>
                  <td className="py-4 px-4 text-center">1</td>
                  <td className="py-4 px-4 text-center bg-primary-50">1</td>
                  <td className="py-4 px-4 text-center">Up to 20</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 px-6 font-medium">API access</td>
                  <td className="py-4 px-4 text-center"><X size={18} className="inline text-neutral-400" /></td>
                  <td className="py-4 px-4 text-center bg-primary-50"><Check size={18} className="inline text-primary-500" /></td>
                  <td className="py-4 px-4 text-center"><Check size={18} className="inline text-primary-500" /></td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="py-4 px-6 font-medium">Priority support</td>
                  <td className="py-4 px-4 text-center"><X size={18} className="inline text-neutral-400" /></td>
                  <td className="py-4 px-4 text-center bg-primary-50"><Check size={18} className="inline text-primary-500" /></td>
                  <td className="py-4 px-4 text-center"><Check size={18} className="inline text-primary-500" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Custom branding</td>
                  <td className="py-4 px-4 text-center"><X size={18} className="inline text-neutral-400" /></td>
                  <td className="py-4 px-4 text-center bg-primary-50"><X size={18} className="inline text-neutral-400" /></td>
                  <td className="py-4 px-4 text-center"><Check size={18} className="inline text-primary-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600">
              Here are some common questions about our pricing and plans.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-3 flex items-start">
                  <HelpCircle size={20} className="text-primary-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="/contact" 
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Start Your NexusAI Journey?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of users and experience the future of AI conversation today. Start with our free plan - no credit card required.
              </p>
              <a 
                href="/signup" 
                className="bg-white text-primary-600 hover:bg-neutral-100 rounded-full py-3 px-8 font-medium transition-all inline-block"
              >
                Get Started Free
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
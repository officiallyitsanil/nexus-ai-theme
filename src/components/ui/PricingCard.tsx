import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  period?: string;
  index?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  buttonText = 'Get Started',
  period = 'month',
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`
        relative rounded-2xl overflow-hidden
        ${popular 
          ? 'border-2 border-primary-500 shadow-xl' 
          : 'border border-neutral-200 shadow-md'
        }
      `}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-bl-lg">
          Popular
        </div>
      )}
      
      <div className="p-6 sm:p-8 bg-white">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold text-neutral-900">{price}</span>
          {price !== 'Free' && (
            <span className="ml-1 text-neutral-500">/{period}</span>
          )}
        </div>
        
        <Button 
          variant={popular ? 'primary' : 'outline'} 
          fullWidth
        >
          {buttonText}
        </Button>
        
        <div className="mt-8 space-y-4">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex items-start"
            >
              <div className={`mr-3 rounded-full p-1 ${
                feature.included 
                  ? 'text-success-500 bg-success-50' 
                  : 'text-neutral-300 bg-neutral-50'
              }`}>
                <Check size={16} />
              </div>
              <span className={`text-sm ${
                feature.included ? 'text-neutral-700' : 'text-neutral-400'
              }`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
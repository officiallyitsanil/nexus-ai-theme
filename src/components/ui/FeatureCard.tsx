import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group"
    >
      <div className="p-6 sm:p-8">
        <div className="mb-4 p-3 rounded-full bg-primary-100 w-fit text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-neutral-900 group-hover:text-primary-500 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600">
          {description}
        </p>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-400 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default FeatureCard;
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'outline';
  hover?: boolean;
  padding?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = false,
  padding = true,
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white border border-neutral-200 shadow-sm',
    glass: 'glass-card',
    outline: 'border border-neutral-200 bg-transparent',
  };
  
  const hoverClasses = hover ? 'hover:shadow-md hover:-translate-y-1' : '';
  const paddingClasses = padding ? 'p-6' : '';
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
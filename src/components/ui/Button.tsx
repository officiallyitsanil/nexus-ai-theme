import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-button hover:shadow-button-hover focus:ring-primary-500',
    secondary: 'bg-white hover:bg-neutral-100 text-primary-600 border border-neutral-200 shadow-sm hover:shadow focus:ring-primary-400',
    outline: 'bg-transparent hover:bg-primary-50 text-primary-500 border border-primary-500 focus:ring-primary-400',
    ghost: 'bg-transparent hover:bg-neutral-100 text-neutral-700 hover:text-primary-500 focus:ring-neutral-400',
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-3 py-2',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-base px-6 py-3',
  };
  
  // State classes
  const stateClasses = {
    fullWidth: 'w-full',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'relative !text-transparent transition-none',
  };

  const loadingSpinnerClasses = 'absolute inset-0 flex items-center justify-center';

  const combinedClassName = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? stateClasses.fullWidth : ''}
    ${disabled || isLoading ? stateClasses.disabled : ''}
    ${isLoading ? stateClasses.loading : ''}
    ${className}
  `;

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className={loadingSpinnerClasses}>
          <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}
      
      {leftIcon && <span className={`mr-2 ${isLoading ? 'opacity-0' : ''}`}>{leftIcon}</span>}
      <span className={isLoading ? 'opacity-0' : ''}>{children}</span>
      {rightIcon && <span className={`ml-2 ${isLoading ? 'opacity-0' : ''}`}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
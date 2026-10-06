import React from 'react';

interface NeuralNexusLogoProps {
  variant?: 'full' | 'icon';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function NeuralNexusLogo({
  variant = 'full',
  theme = 'auto',
  className = '',
  size = 'md'
}: NeuralNexusLogoProps) {
  // Size classes for full logo image
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-9 sm:h-10.5',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20'
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14'
  };

  if (variant === 'icon') {
    return (
      <img
        src="/logo-icon.png"
        alt="NeuralNexus Icon"
        className={`${iconSizes[size]} object-contain shrink-0 ${className}`}
        loading="eager"
      />
    );
  }

  // Using the new uploaded logo image
  const logoSrc = '/new-logo.png';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="NeuralNexus SOLUTIONS"
        className={`${heightClasses[size]} w-auto max-w-[220px] sm:max-w-[260px] object-contain transition-all duration-500`}
        loading="eager"
      />
    </div>
  );
}

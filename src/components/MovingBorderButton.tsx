import { ReactNode } from 'react';

interface MovingBorderButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const MovingBorderButton = ({ 
  children, 
  onClick, 
  href, 
  className = '', 
  variant = 'primary' 
}: MovingBorderButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-sm tracking-wider transition-all duration-300 hover-lift group overflow-hidden";
  
  const variantClasses = variant === 'primary' 
    ? "moving-border text-primary-foreground" 
    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground";

  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { onClick })}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      <span className="relative z-10 flex items-center space-x-2">
        {children}
      </span>
      
      {/* Animated gradient background for moving border effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient-move opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Component>
  );
};

export default MovingBorderButton;
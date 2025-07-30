import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface MovingBorderButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "accent";
}

export const MovingBorderButton = ({ 
  children, 
  className, 
  onClick,
  variant = "default" 
}: MovingBorderButtonProps) => {
  const variantClasses = {
    default: " bg-background text-primary hover:text-accent",
    accent: " bg-background hover:bg-teal-800 text-accent hover:text-accent-foreground border-teal-800  "  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative px-10 py-5 text-sm font-medium transition-all duration-300 hover:scale-105",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Button>
  );
};
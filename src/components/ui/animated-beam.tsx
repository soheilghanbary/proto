import { cn } from "@/lib/utils";
import { forwardRef, useRef } from "react";

interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
}

export const AnimatedBeam = forwardRef<SVGSVGElement, AnimatedBeamProps>(
  ({
    className,
    containerRef,
    fromRef,
    toRef,
    curvature = 0,
    reverse = false,
    duration = 5,
    delay = 0,
  }, ref) => {
    const id = useRef(`beam-${Math.random().toString(36).substr(2, 9)}`);

    return (
      <svg
        ref={ref}
        className={cn(
          "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
          className
        )}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={id.current}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        <path
          d="M 20,50 Q 50,20 80,50"
          stroke={`url(#${id.current})`}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
        />
      </svg>
    );
  }
);

AnimatedBeam.displayName = "AnimatedBeam";
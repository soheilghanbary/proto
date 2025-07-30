import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoCarouselProps {
  logos: {
    name: string;
    src: string;
  }[];
  className?: string;
}

export const LogoCarousel = ({ logos, className }: LogoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="flex space-x-12 items-center">
        {/* Double the logos for seamless infinite scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlowingGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
  onImageClick?: () => void;
  itemsPerSlide?: number;
  autoSlide?: boolean;
  slideInterval?: number;
}

export const GlowingGallery = ({ 
  images, 
  onImageClick, 
  itemsPerSlide = 3,
  autoSlide = false,
  slideInterval = 3000
}: GlowingGalleryProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const totalSlides = Math.ceil(images.length / itemsPerSlide);

  useEffect(() => {
    if (!autoSlide || totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, totalSlides, slideInterval]);

  const getCurrentImages = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return images.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <div className="relative">
      <div className={cn(
        "grid gap-8 py-8 transition-all duration-500",
        itemsPerSlide === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"
      )}>
        {getCurrentImages().map((image, index) => {
          const actualIndex = currentSlide * itemsPerSlide + index;
          return (
            <div
              key={actualIndex}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(actualIndex)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={onImageClick}
            >
              <div className="relative overflow-hidden rounded-lg bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-linear-to-t from-background/80 to-transparent transition-opacity duration-300",
                    hoveredIndex === actualIndex ? "opacity-100" : "opacity-0"
                  )}
                />
                <div
                  className={cn(
                    "absolute bottom-4 left-4 right-4 text-primary-foreground transition-all duration-300",
                    hoveredIndex === actualIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                >
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
              <div
                className={cn(
                  "absolute -inset-2 bg-gradient-accent rounded-lg blur-xl transition-opacity duration-300",
                  hoveredIndex === actualIndex ? "opacity-30" : "opacity-0"
                )}
                style={{ zIndex: -1 }}
              />
            </div>
          );
        })}
      </div>
      
      {totalSlides > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                currentSlide === index ? "bg-accent" : "bg-muted-foreground/30"
              )}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
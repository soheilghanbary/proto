import { useState, useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DraggableCardsProps {
  children: ReactNode[];
  className?: string;
}

export const DraggableCards = ({ children, className }: DraggableCardsProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseUpGlobal = () => setIsDragging(false);
    document.addEventListener('mouseup', handleMouseUpGlobal);
    return () => document.removeEventListener('mouseup', handleMouseUpGlobal);
  }, []);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentIndex = 0;

    const scrollInterval = setInterval(() => {
      if (isDragging) return; // 

      const firstCard = container.children[0] as HTMLElement;
      const cardWidth = firstCard?.offsetWidth || 0;
      const gap = 24;

      const scrollAmount = cardWidth + gap;
      const maxScroll = container.scrollWidth - container.clientWidth;

      const nextScrollLeft = currentIndex * scrollAmount;

      container.scrollTo({
        left: nextScrollLeft >= maxScroll ? 0 : nextScrollLeft,
        behavior: "smooth",
      });

      currentIndex = nextScrollLeft >= maxScroll ? 1 : currentIndex + 1;
    }, 2000);

    return () => clearInterval(scrollInterval);
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex gap-6 overflow-x-auto scrollbar-hide cursor-grab select-none",
        isDragging && "cursor-grabbing",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
};
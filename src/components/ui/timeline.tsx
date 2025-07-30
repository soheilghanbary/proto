import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TimelineProps {
  items: {
    title: string;
    date: string;
    description: string;
    content?: ReactNode;
  }[];
  className?: string;
}

export const Timeline = ({ items, className }: TimelineProps) => {
  return (
    <div className={cn("relative", className)}>
      <div className="timeline-line"></div>
      <div className="space-y-8 pl-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative animate-slide-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute -left-12 top-1 h-3 w-3 rounded-full border-2 border-accent bg-background"></div>
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                <span className="text-sm font-medium text-accent px-3 py-1 bg-accent/10 rounded-full">
                  {item.date}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              {item.content && <div className="mt-4">{item.content}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
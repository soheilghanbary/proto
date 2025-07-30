import { ReactNode } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  institution?: string;
  type?: "education" | "experience";
  images?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline = ({ items, className = "" }: TimelineProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-accent to-teal-800 transform md:-translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-[.35rem] md:left-1/2 w-6 h-6 bg-teal-800 rounded-full border-4 border-background shadow-lg transform md:-translate-x-1/2 z-10" />

            {/* Content */}
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0
                  ? "pl-12 md:pl-0 md:pr-12"
                  : "pl-12 md:pl-12 md:pr-0"
              }`}
            >
              <div className="glass rounded-2xl p-6 shadow-portfolio hover-lift group">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    {item.type && (
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                          item.type === "education"
                            ? "bg-accent/10 text-accent"
                            : "bg-teal-100 text-teal-800"
                        }`}
                      >
                        {item.type === "education" ? "Education" : "Experience"}
                      </span>
                    )}
                  </div>

                  <h3 className="heading-large text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {item.institution && (
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.institution}
                    </p>
                  )}

                  <p className="body-small text-muted-foreground">
                    {item.description}
                  </p>
                  {item.images && item.images.length > 0 && (
                    <div className="grid  gap-6 place-items-center  grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] ">
                      {item.images.map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt={`Image ${idx + 1}`}
                          className="w-16"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Spacer for opposite side */}
            <div className="hidden md:block w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;

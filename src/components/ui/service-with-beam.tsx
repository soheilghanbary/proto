import { useRef } from "react";
import { AnimatedBeam } from "./animated-beam";
import saraPortrait from "@/assets/sara-portrait.jpg";

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface ServiceWithBeamProps {
  services: Service[];
}

export const ServiceWithBeam = ({ services }: ServiceWithBeamProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const service1Ref = useRef<HTMLDivElement>(null);
  const service2Ref = useRef<HTMLDivElement>(null);
  const service3Ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto">
      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={profileRef}
        toRef={service1Ref}
        curvature={20}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={profileRef}
        toRef={service2Ref}
        curvature={-20}
        duration={3}
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={profileRef}
        toRef={service3Ref}
        curvature={40}
        duration={3}
        delay={2}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Service Cards */}
        {services.map((service, index) => {
          const refs = [service1Ref, service2Ref, service3Ref];
          const currentRef = refs[index];
          
          return (
            <div 
              key={index} 
              ref={currentRef}
              className="glossy-card text-center p-8 rounded-2xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-5xl mb-6 flex justify-center">
                <span className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          );
        })}

        {/* Center Profile */}
        <div className="lg:order-2 lg:col-start-2 flex justify-center">
          <div 
            ref={profileRef}
            className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl"
          >
            <img 
              src={saraPortrait} 
              alt="Sara Ali Mohammadi" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-accent/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Skills Icons Around Profile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-80 h-80">
            {/* Skills positioned in circle around center */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium">
                PS
              </div>
            </div>
            <div className="absolute top-1/4 right-0 transform translate-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium">
                AI
              </div>
            </div>
            <div className="absolute bottom-1/4 right-0 transform translate-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium">
                AE
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium">
                3D
              </div>
            </div>
            <div className="absolute bottom-1/4 left-0 transform -translate-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium">
                ID
              </div>
            </div>
            <div className="absolute top-1/4 left-0 transform -translate-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-sm font-medium">
                PR
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
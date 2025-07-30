import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TracingBeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const TracingBeamModal = ({ 
  isOpen, 
  onClose, 
  title, 
  subtitle, 
  children 
}: TracingBeamModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-background border border-accent/20">
        <div className="relative h-full max-h-[90vh] flex flex-col">
          {/* Tracing beam effect */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-accent via-accent/50 to-accent opacity-40" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-all duration-200"
          >
            <X className="h-5 w-5 text-primary" />
          </button>

          {/* Content */}
          <div className="overflow-y-auto flex-1">
            <div className="pl-20 pr-8 py-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-primary">{title}</h1>
                  {subtitle && (
                    <p className="text-lg text-muted-foreground">{subtitle}</p>
                  )}
                </div>
                
                <div 
                  ref={contentRef}
                  className="space-y-8 animate-fade-in"
                >
                  {children}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute left-[30px] top-12 h-3 w-3 rounded-full bg-accent" />
          <div className="absolute left-[30px] top-1/2 h-2 w-2 rounded-full bg-golden" />
          <div className="absolute left-[30px] bottom-12 h-3 w-3 rounded-full bg-accent" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
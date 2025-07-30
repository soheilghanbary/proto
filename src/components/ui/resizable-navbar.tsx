import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface ResizableNavbarProps {
  items: NavItem[];
  className?: string;
}

export const ResizableNavbar = ({ items, className }: ResizableNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
          isScrolled 
            ? "bg-white/30 backdrop-blur-md shadow-elegant py-4" 
            : "bg-white/90 backdrop-blur-lg py-6",
          className
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center text-xl text-primary">
            <img src="https://ik.imagekit.io/saraalm/Portfolio/brands/sara-alimohammadi-logo.svg?updatedAt=1753839421717" className="w-6 ml-6" alt="" />
            <span className="pl-1 text-3xl font-black md:font-normal h-10">ara</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-primary"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden ">
          <div className="fixed inset-0 bg-black/50 " onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl ">
            <div className="pt-20 px-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left py-3 text-lg font-medium text-primary hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
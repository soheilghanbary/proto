import { Heart, ArrowUp, Instagram, Linkedin, Send ,Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Works' },
    { id: 'campaigns', label: 'Campaigns' }
  ];

  const services = [
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/sara-alimohammadi', 
      icon: Linkedin,
      color: 'text-sky-600' ,
      gradient: 'from-blue-600 to-blue-400'
    },
    { 
      name: 'WhatsApp', 
      href: 'https://wa.me/+989382780095', 
      icon: Phone,
      color: 'text-emerald-600' ,
      gradient: 'from-green-600 to-emerald-300'
    },
    { 
      name: 'Send ', 
      href: 'https://t.me/sara_alimohammadi', 
      icon: Send ,
      color: 'text-sky-500' ,
      gradient: 'from-sky-600 to-sky-300'
    }
  ];

  return (
    <footer className="bg-linear-to-br from-background via-background to-muted/20 border-t border-border/40">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="pb-2 pt-10 md:pt-20">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display text-center md:text-left text-4xl font-bold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Sara Ali Mohammadi
                  </h3>
                  <p className="text-xl text-primary font-medium text-center md:text-left">Art Director</p>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-md text-center md:text-left">
                  Creating compelling visual narratives through innovative design and artistic direction. 
                  Transforming ideas into powerful visual experiences that connect and inspire.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="space-y-4 grid justify-center items-center md:justify-start mb-12 mt-16 md:mt-0  md:mb-0">
                <h4 className="font-semibold text-center md:text-start text-xl uppercase tracking-wider text-muted-foreground">
                Socials 
                </h4>
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br ${social.gradient} p-0.5 hover:scale-110 hover:shadow-lg transition-all duration-300`}
                        aria-label={social.name}
                      >
                        <div className="flex items-center justify-center w-full h-full bg-background rounded-[10px] group-hover:bg-transparent transition-all duration-300">
                          <Icon size={18} className={` ${social.color} group-hover:text-white transition-colors duration-300`} />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-7 grid-cols-2 grid md:grid-cols-3 gap-8">
              
              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Navigation
                </h4>
                <nav className="space-y-3">
                  {quickLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Services
                </h4>
                <nav className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left group"
                    >
                      <span className="relative">
                        {service.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contact Info */}
              <div className="space-y-6 mt-6 md:mt-0">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+989382780095" className="block mb-4 sm:mb-0 text-sm font-semibold hover:text-primary transition-colors">
                        0938 278 00 95
                      </a>
                      <a href="tel:+971561421752" className="block text-sm font-semibold hover:text-primary transition-colors">
                        0971 561 421 752
                      </a>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <div className="space-y-1">
                      <a href="mailto:saraalimohammadi2017@gmail.com" className="block font-semibold text-sm hover:text-primary transition-colors">
                      saraalimohammadi2017@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
                  <div className='flex justify-end w-full'>
                    <a
                      href="https://ik.imagekit.io/saraalm/Portfolio/resume%20pdf/Sara-Alimohammadi-Art-Director.pdf?updatedAt=1753844749974"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center w-full md:w-40 mt-16 md:mt-0  items-center px-4 py-3 md:py-2  bg-primary/20 text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Download Resume
                    </a>
                  </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/40 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0">
            
          

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-white bg-accent hover:text-primary transition-all duration-300 group hover:bg-white border-2 border-accent rounded-lg"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
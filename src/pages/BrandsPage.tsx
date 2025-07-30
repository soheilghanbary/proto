import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Import brand logos
import techflowLogo from '@/assets/brands/techflow-logo.png';
import creativeStudioLogo from '@/assets/brands/creative-studio-logo.png';
import brandPlusLogo from '@/assets/brands/brand-plus-logo.png';
import digitalLabsLogo from '@/assets/brands/digital-labs-logo.png';
import innovateCoLogo from '@/assets/brands/innovate-co-logo.png';
import designHubLogo from '@/assets/brands/design-hub-logo.png';

const BrandsPage = () => {
  const navigate = useNavigate();

  const allBrands = [
    {
      id: 1,
      name: 'TechFlow',
      industry: 'Technology Solutions',
      logo: techflowLogo,
      description: 'Leading technology solutions provider specializing in enterprise software development and cloud infrastructure.',
      projects: 'Brand Identity, Web Design, Marketing Materials',
      year: '2023'
    },
    {
      id: 2,
      name: 'Creative Studio',
      industry: 'Design Agency',
      logo: creativeStudioLogo,
      description: 'Full-service creative agency focused on brand storytelling and visual communication.',
      projects: 'Logo Design, Brand Guidelines, Portfolio Website',
      year: '2022'
    },
    {
      id: 3,
      name: 'Brand Plus',
      industry: 'Digital Marketing',
      logo: brandPlusLogo,
      description: 'Digital marketing agency helping businesses grow through strategic online presence.',
      projects: 'Campaign Design, Social Media Graphics, Ad Creatives',
      year: '2023'
    },
    {
      id: 4,
      name: 'Digital Labs',
      industry: 'Innovation Hub',
      logo: digitalLabsLogo,
      description: 'Innovation lab fostering digital transformation and emerging technology adoption.',
      projects: 'Corporate Identity, Event Branding, Presentation Design',
      year: '2022'
    },
    {
      id: 5,
      name: 'Innovate Co',
      industry: 'Startup Incubator',
      logo: innovateCoLogo,
      description: 'Startup incubator supporting early-stage companies with mentorship and resources.',
      projects: 'Brand Development, Pitch Deck Design, Marketing Strategy',
      year: '2023'
    },
    {
      id: 6,
      name: 'Design Hub',
      industry: 'Creative Collective',
      logo: designHubLogo,
      description: 'Creative collective bringing together designers, artists, and creative professionals.',
      projects: 'Community Branding, Event Design, Digital Platform',
      year: '2022'
    },
    {
      id: 7,
      name: 'Future Brand',
      industry: 'Consulting',
      logo: techflowLogo, // Placeholder
      description: 'Strategic consulting firm helping businesses adapt to future market trends.',
      projects: 'Corporate Rebranding, Strategy Visualization, Report Design',
      year: '2023'
    },
    {
      id: 8,
      name: 'Creative Force',
      industry: 'Production House',
      logo: creativeStudioLogo, // Placeholder
      description: 'Creative production house specializing in video content and multimedia experiences.',
      projects: 'Motion Graphics, Video Branding, Production Design',
      year: '2022'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
            <h1 className="text-2xl font-playfair font-semibold text-foreground">
              Brand Partners
            </h1>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-background to-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
            Trusted Brand Collaborations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Over the years, I've had the privilege of working with innovative companies across various industries, 
            helping them tell their stories through compelling visual design and strategic brand development.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBrands.map((brand, index) => (
              <div
                key={brand.id}
                className="group bg-card rounded-xl p-8 shadow-xs hover:shadow-lg transition-all duration-500 transform hover:scale-105 border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Logo */}
                <div className="w-24 h-24 mx-auto mb-6 relative overflow-hidden rounded-lg">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Brand Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {brand.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{brand.industry}</p>
                  <span className="text-sm text-muted-foreground">{brand.year}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {brand.description}
                </p>

                {/* Projects */}
                <div className="border-t border-border pt-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Projects Delivered:</h4>
                  <p className="text-sm text-muted-foreground">{brand.projects}</p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-playfair font-semibold text-foreground mb-4">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to create a visual identity that sets your brand apart and drives meaningful results.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => navigate('/#contact')}
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;
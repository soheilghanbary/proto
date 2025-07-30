import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';



const Brands = () => {
  const navigate = useNavigate();
  
  const partners = [
    {
      id: 1,
      name: 'Baby First',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/babyfirst.svg?updatedAt=1753677570294',
    },
    {
      id: 2,
      name: 'SeaGull',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/seagull.svg?updatedAt=1753677570405',
    },
    {
      id: 3,
      name: 'Sumsung',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/samsung.svg?updatedAt=1753677568426',
    },
    {
      id: 4,
      name: 'Sony',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/sony.svg?updatedAt=1753677570263',
    },
    {
      id: 5,
      name: 'SunIch',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/sunich.svg?updatedAt=1753677570287',
    },
    {
      id: 6,
      name: 'Bebejunior',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/bebejunior.svg?updatedAt=1753677571467',
    },
    {
      id: 7,
      name: 'Danone',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/danone1.svg?updatedAt=1753714288637',
    },
    {
      id: 8,
      name: 'khoshgovar',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/khoshgovar.svg?updatedAt=1753714916038',
    },
    {
      id: 9,
      name: 'Prime',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/prime.svg?updatedAt=1753677568370',
    },
    {
      id: 10,
      name: 'Mellat Bank',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/mellat.svg?updatedAt=1753677565913',
    },
    {
      id: 11,
      name: 'Pharmed',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/pharmad.svg?updatedAt=1753677566970',
    },
    {
      id: 12,
      name: 'p&g',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/pg.svg?updatedAt=1753677566517',
    },
    {
      id: 13,
      name: 'Bioderma',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/bioderma.svg?updatedAt=1753677565338',
    },
    {
      id: 14,
      name: 'Bahlsen',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/bahram.svg?updatedAt=1753677571491',
    },

    {
      id: 15,
      name: 'Tabiat',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/miele.svg?updatedAt=1753677566233',
    },
    {
      id: 16,
      name: 'Tabiat',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/jti.svg?updatedAt=1753677566176',
    },
    {
      id: 17,
      name: 'Tabiat',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/deepsense.svg?updatedAt=1753677566193',
    },
    {
      id: 18,
      name: 'Tabiat',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/danone.svg?updatedAt=1753677565463',
    },
    {
      id: 19,
      name: 'Tabiat',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/duracell.svg?updatedAt=1753677565450',
    },
    {
      id: 20,
      name: 'pampers',
      industry: '',
      logo: 'https://ik.imagekit.io/saraalm/Portfolio/brands/pampers.svg?updatedAt=1753677566445',
    }
  ];

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <>
      <style>
        {`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .marquee-content {
            display: flex;
            animation: marquee 15s ease-in infinite normal forwards ;
            width: calc(200% + 2rem);
          }

          .marquee-item {
            margin-right: 1rem;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .marquee-container:hover .marquee-content {
            animation-play-state: paused;
          }

          @media (max-width: 768px) {
            .marquee-content {
              animation-duration: 25s;
            }
          }
        `}
      </style>
      
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-playfair font-semibold text-teal-800 mb-4">
              Trusted by Leading Brands
            </h3>
            <p className="text-foreground max-w-2xl mx-auto">
              Collaborating with forward-thinking companies to create exceptional visual experiences
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative mb-12">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-background to-transparent z-10" />
            
            {/* Scrolling Animation Container */}
            <div className="marquee-container p-4">
              <div className="marquee-content">
                {duplicatedPartners.map((partner, index) => (
                  <div
                    key={`${partner.id}-${index}`}
                    className="marquee-item group"
                  >
                    <div className="bg-card rounded-lg p-4 shadow-xs hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-border w-48 shrink-0">
                      {/* Logo */}
                      <div className="w-20 h-20 mx-auto mb-3 p-2 relative overflow-hidden rounded-md">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        
                        {/* Subtle glow effect on hover */}
                        <div className="absolute  inset-0 bg-linear-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                      </div>

                      {/* Brand Info */}
                      <div className="text-center">
                        <h4 className="text-sm font-semibold text-teal-900 mb-1 group-hover:text-primary transition-colors duration-300 truncate">
                          {partner.name}
                        </h4>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 truncate">
                          {partner.industry}
                        </p>
                      </div>

                      {/* Decorative accent */}
                      <div className="absolute top-2 right-2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* See More Button */}
          <div className="text-center  " style={{ animationDelay: '0.6s' }}>
            <Button 
              variant="outline-primary" 
              size="lg"
              onClick={() => navigate('/BrandsPage')}
              className="border-teal-900 border-2 text-teal-800 font-bold hover:bg-teal-800  hover:text-white group relative overflow-hidden"
            >
              <span className="relative z-10">See All Brand Partners</span>
              <div className="absolute inset-0 bg-gradient-blue-600  group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ResizableNavbar } from "@/components/ui/resizable-navbar";
import { MovingBorderButton } from "@/components/ui/moving-border-button";
import { Timeline } from "@/components/ui/timeline";
import { GlowingGallery } from "@/components/ui/glowing-gallery";
import { TracingBeamModal } from "@/components/ui/tracing-beam-modal";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { DraggableCards } from "@/components/ui/draggable-cards";
import { ServiceWithBeam } from "@/components/ui/service-with-beam";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "../components/Footer";
import Brands from "@/components/brands/Brands";
import Experience from "@/components/Experience";
import {
  Download,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  MapPin,
  Palette,
  Lightbulb,
  PenTool,
  Target,
  ChevronRight
} from "lucide-react";

// Import images
import saraPortrait from "@/assets/sara-portrait.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";
import projectPhotography from "@/assets/project-photography.jpg";
import projectBranding from "@/assets/project-branding.jpg";
import campaignMarketing from "@/assets/campaign-marketing.jpg";
import campaignSocial from "@/assets/campaign-social.jpg";
import brand1 from "@/assets/brand-1.png";
import brand2 from "@/assets/brand-2.png";
import brand3 from "@/assets/brand-3.png";
import brand4 from "@/assets/brand-4.png";

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedCampaign, setSelectedCampaign] = useState<string | null>(null);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "WORKS", href: "#works" },
    { label: "CAMPAIGNS", href: "#campaigns" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" }
  ];

  const educationTimeline = [
    {
      title: "Master of Fine Arts",
      date: "2018-2020",
      description: "Digital Art & Design, University of Tehran. Specialized in contemporary digital media and visual storytelling.",
    },
    {
      title: "Bachelor of Arts",
      date: "2014-2018",
      description: "Graphic Design, Art University. Foundation in traditional and digital design principles.",
    },
    {
      title: "Professional Certification",
      date: "2020",
      description: "Advanced Creative Direction, Adobe Certified Expert in Creative Suite applications.",
    }
  ];

  const experienceTimeline = [
    {
      title: "Social project management of Babyrst & Seagull brands",
      date: "Apr 2022 - Present",
      description: "Project manager & Art Director for social media projects and brand management.",
    },
    {
      title: "Dr Akhavi Laboratory",
      date: "May 2020 - Apr 2022",
      description: "Advertising manager working with various healthcare and laboratory brands.",
    },
    {
      title: "Freelance project",
      date: "2019 - Present",
      description: "Art Director for multiple independent projects and brand consultations.",
    },
    {
      title: "Magnolia Advertising Agency",
      date: "Dec 2018 - Jul 2019",
      description: "Graphic Designer and Illustrator working with international corporations.",
    },
    {
      title: "Domino Dairy and Ice Cream",
      date: "Jan 2018 - May 2020",
      description: "Freelance Graphic Designer and Illustrator for product packaging and marketing.",
    },
    {
      title: "Four Mind Advertising Agency",
      date: "Feb 2017 - Dec 2018",
      description: "Graphic Designer and Illustrator collaborating with international corporations.",
    },
    {
      title: "Stavita Manufacturing Group",
      date: "2013 - 2016",
      description: "Art Director responsible for brand identity and visual communications.",
    },
    {
      title: "Simavid Company",
      date: "2009 - 2010",
      description: "Visual Development and Modeler creating 3D assets and visual content.",
    },
  ];

  const featuredWorks = [
    { src: 'https://ik.imagekit.io/saraalm/Portfolio/brands/sunich.svg?updatedAt=1753677570287', alt: "Web Design Project", title: "Modern E-commerce Platform" },
    { src: projectIllustration, alt: "Illustration Project", title: "Brand Illustration Series" },
    { src: projectPhotography, alt: "Photography Project", title: "Product Photography" },
    { src: projectBranding, alt: "Branding Project", title: "Corporate Identity" },
    { src: campaignMarketing, alt: "Marketing Campaign", title: "Digital Marketing Campaign" },
    { src: campaignSocial, alt: "Social Campaign", title: "Social Media Strategy" }
  ];

  const campaigns = [
    {
      id: "luxury-brand",
      title: "Luxury Brand Campaign",
      image: campaignMarketing,
      subtitle: "Premium fashion brand visual identity and campaign development",
      description: "Developed a comprehensive visual identity system for a luxury fashion brand, including logo design, brand guidelines, packaging design, and a full-scale advertising campaign. The project resulted in a 150% increase in brand recognition and 300% boost in sales during the launch quarter. The campaign was featured in multiple design publications and won the Iranian Design Award 2023.",
      socialDescription: "Extended the campaign across all social media platforms with custom content strategies, resulting in 500K+ engagement and 2M+ reach across platforms."
    },
    {
      id: "tech-startup",
      title: "Tech Startup Branding",
      image: campaignSocial,
      subtitle: "Complete brand identity for innovative fintech startup",
      description: "Created complete brand identity for a revolutionary fintech startup, from conceptual sketches to final brand guidelines. Designed user interface elements, marketing materials, and digital campaign assets. The rebrand helped secure $5M in Series A funding and establish market presence against major competitors. The project showcased innovative use of AI-generated elements combined with traditional design principles.",
      socialDescription: "Social media strategy included LinkedIn thought leadership content, Instagram visual storytelling, and Twitter engagement campaigns that grew follower base by 400% in 6 months."
    }
  ];

  const services = [
    {
      icon: "🎨",
      title: "Art Direction",
      description: "Strategic visual leadership for campaigns, brands, and creative projects with focus on innovative storytelling."
    },
    {
      icon: "💡",
      title: "Visual Concept Development",
      description: "Transform abstract ideas into compelling visual narratives that resonate with target audiences."
    },
    {
      icon: "✏️",
      title: "Illustration",
      description: "Custom illustrations, digital art, and graphic elements that enhance brand identity and messaging."
    }
  ];

  const skills = [
    "Adobe Photoshop", "Adobe Illustrator", "After Effects", "3DS Max",
    "Adobe InDesign", "Figma", "Sketch", "Procreate", "Cinema 4D",
    "Brand Strategy", "Creative Direction", "Team Leadership"
  ];

  const partnerBrands = [
    { name: "TechCorp", src: brand1 },
    { name: "LuxuryFashion", src: brand2 },
    { name: "CreativeStudio", src: brand3 },
    { name: "BusinessSolutions", src: brand4 },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ResizableNavbar items={navItems} />
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center bg-gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 opacity-50"></div>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-slide-in-up">
            <div className="space-y-6">
              <div className="mb-10 mt-20 md:mt-0">
                <h1 className="text-7xl  md:text-9xl font-bold text-primary mb-4">Sara</h1>
                <span className=" text-teal-700 font-bold text-5xl md:text-7xl">Alimohammadi</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground tracking-wider">
                ART DIRECTOR
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Creating compelling visual narratives that bridge creativity and strategy.
              Transforming ideas into impactful designs that resonate with audiences worldwide.
            </p>
            <div className="flex flex-col m-auto w-60 sm:flex-row gap-4">
              <MovingBorderButton variant="accent">
                <Download className="h-4 w-4 mr-2" />
                Download Portfolio
              </MovingBorderButton>
              <MovingBorderButton variant="golden" onClick={scrollToContact}>
                <Mail className="h-4 w-4  mr-2" />
                Contact Me
              </MovingBorderButton>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={saraPortrait}
                alt="Sara Ali Mohammadi - Art Director"
                className="relative z-10 w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>
      <Experience />
      {/* About Me Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">About Me</h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 6 years of experience in visual communication and art direction,
                  I specialize in creating compelling narratives through innovative design solutions.
                  My work spans across digital platforms, traditional media, and brand experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in the power of visual storytelling to connect, inspire, and drive meaningful
                  change. Each project is an opportunity to push creative boundaries while delivering
                  exceptional results for clients and their audiences.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Digital Illustration", "Travel Photography", "Culinary Arts", "NGO Volunteer Work"].map((interest) => (
                      <Badge key={interest} variant="outline" className="text-accent border-accent">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-2xl font-semibold text-center text-primary">Education & Journey</h3>
              <Timeline items={educationTimeline} />
            </div>
          </div>
        </div>
      </section>

      {/* Works Preview Section */}
      <section id="works" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-primary">Featured Works</h2>
            <p className="text-lg text-muted-foreground">
              A showcase of recent projects spanning digital design, illustration, and photography.
            </p>

            <DraggableCards className="pb-8">
              {featuredWorks.map((work, index) => (
                <div
                  key={index}
                  className="min-w-80 glossy-card rounded-xl p-1 cursor-pointer group"
                  onClick={() => navigate("/works")}
                >
                  <div className="bg-background border rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={work.src}
                        alt={work.alt}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-teal-800/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-primary group-hover:text-teal-600 transition-colors">
                        {work.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </DraggableCards>

            <MovingBorderButton
              variant="accent"
              onClick={() => navigate("/works")}
            >
              See More Works
              <ChevronRight className="h-4 w-4 ml-2" />
            </MovingBorderButton>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section id="campaigns" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Campaigns</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campaigns.map((campaign) => (
                <Card
                  key={campaign.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-accent glow-effect"
                  onClick={() => setSelectedCampaign(campaign.id)}
                >
                  <CardContent className="p-0">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                        {campaign.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Brands />
      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Services & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to elevate your brand and connect with your audience.
            </p>
          </div>

          <ServiceWithBeam services={services} />
        </div>
      </section>

      {/* Partner Brands Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold text-primary">Trusted by Leading Brands</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with innovative companies to create impactful visual experiences
              that drive engagement and deliver results.
            </p>
            <div className="py-8">
              <LogoCarousel logos={partnerBrands} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-primary">Experience & Resume</h2>
            <Timeline items={experienceTimeline} />
            <div className="text-center mt-12">
              <MovingBorderButton variant="golden">
                <Download className="h-4 w-4 mr-2" />
                Download Full Resume
              </MovingBorderButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl font-bold text-primary">Let's Create Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-20">
              Whether you're seeking a bold visual concept, a refined brand identity, or a creative mind to elevate your campaign — I’d love to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-16">
              <a href="tel:09362901111">
                <div className="space-y-4">
                  <div className="mx-auto hover:bg-teal-800 hover:text-white w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl mb-4 text-primary">Phone</h3>
                    <p className="text-muted-foreground font-semibold">0971 561 421 752 - 0938 278 00 95</p>
                    <p className="text-muted-foreground font-semibold"></p>
                  </div>
                </div>
              </a>

              <a href="mailto:saraalimohammadi2017@gmail.com" target="_blank">
                <div className="space-y-4">
                  <div className="mx-auto hover:bg-teal-800 hover:text-white w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl mb-4 text-primary">Email</h3>
                    <p className="text-muted-foreground font-semibold">saraalimohammadi2017@gmail.com</p>
                  </div>
                </div>
              </a>

              <a target="_blank" href="https://www.google.com/maps/place/Dubai+-+United+Arab+Emirates/@25.0760224,55.2274879,119362m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3e5f43496ad9c645:0xbde66e5084295162!8m2!3d25.2048493!4d55.2707828!16zL20vMDFmMDhy?hl=en_US&entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D">
                <div className="space-y-4 ">
                  <div className="mx-auto hover:bg-teal-800 hover:text-white w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <MapPin className="h-6 w-6 " />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl mb-4 text-primary">Location</h3>
                    <p className="text-muted-foreground font-semibold">Dubai, Emirates
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-4 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2025 Sara Ali Mohammadi. All rights reserved.
            </div>
            <span className="font-extralight text-white/70  text-[12px]">Developed By <a href="https://github.com/mehran98ha" className="underline">mehran98</a></span>
          </div>
        </div>
      </footer>

      {/* Campaign Modal */}
      <TracingBeamModal
        isOpen={!!selectedCampaign}
        onClose={() => setSelectedCampaign(null)}
        title={campaigns.find(c => c.id === selectedCampaign)?.title || ""}
        subtitle={campaigns.find(c => c.id === selectedCampaign)?.subtitle}
      >
        {selectedCampaign && (
          <div className="space-y-8">
            <img
              src={campaigns.find(c => c.id === selectedCampaign)?.image}
              alt={campaigns.find(c => c.id === selectedCampaign)?.title}
              className="w-full h-64 object-cover rounded-lg"
            />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Project Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {campaigns.find(c => c.id === selectedCampaign)?.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Social Media Extension</h3>
              <p className="text-muted-foreground leading-relaxed">
                {campaigns.find(c => c.id === selectedCampaign)?.socialDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={campaigns.find(c => c.id === selectedCampaign)?.image}
                alt="Campaign detail 1"
                className="w-full h-32 object-cover rounded-lg"
              />
              <img
                src={campaigns.find(c => c.id === selectedCampaign)?.image}
                alt="Campaign detail 2"
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </TracingBeamModal>

    </div>
  );
};

export default Portfolio;

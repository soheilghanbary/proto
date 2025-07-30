import { GlowingGallery } from "@/components/ui/glowing-gallery";
import { ResizableNavbar } from "@/components/ui/resizable-navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TracingBeamModal } from "@/components/ui/tracing-beam-modal";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import images
import projectBranding from "@/assets/project-branding.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";
import projectPhotography from "@/assets/project-photography.jpg";
import projectWebDesign from "@/assets/project-web-design.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const items = [
  {
    id: 1,
    author: 'Sara Ali Mohammadi',
    src: projectBranding,
    title: 'Complete Brand Identity',
    images: [projectBranding, projectIllustration, projectPhotography, projectWebDesign],
  },
  {
    id: 2,
    author: 'Sara Ali Mohammadi',
    src: projectIllustration,
    title: 'Complete Brand Identity',
    images: [projectBranding, projectIllustration, projectPhotography, projectWebDesign],
  },
  {
    id: 3,
    author: 'Sara Ali Mohammadi',
    src: projectPhotography,
    title: 'Complete Brand Identity',
    images: [projectBranding, projectIllustration, projectPhotography, projectWebDesign],
  },
  {
    id: 4,
    author: 'Sara Ali Mohammadi',
    src: projectBranding,
    title: 'Complete Brand Identity',
    images: [projectBranding, projectIllustration, projectPhotography, projectWebDesign],
  },
  {
    id: 5,
    author: 'Sara Ali Mohammadi',
    src: projectWebDesign,
    title: 'Complete Brand Identity',
    images: [projectBranding, projectIllustration, projectPhotography, projectWebDesign],
  }
]


const Works = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "WORKS", href: "/works" },
    { label: "CAMPAIGNS", href: "/#campaigns" },
    { label: "SERVICES", href: "/#services" },
    { label: "ABOUT", href: "/#about" },
    { label: "CONTACT", href: "/#contact" }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ResizableNavbar
        items={navItems.map(item => ({
          ...item,
          href: "#",
          onClick: () => handleNavigation(item.href)
        }))}
      />

      {/* Sticky Back Button */}
      <div className="fixed top-6 left-2 md:left-4 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mt-12 md:mt-0 px-4 py-2 bg-accent/20 text-accent rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-xs border border-accent/20 cursor-pointer"
        >
          <ArrowLeft className="h-6 w-6 md:w-8" />

        </button>
      </div>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-soft">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold text-primary">Complete Works</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore my comprehensive portfolio spanning digital design, illustration,
                photography, and branding projects across various industries and creative disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-screen-lg mx-auto w-full">
        {/* دیتای داخل تب مرتبط  *************************/}
        <Tabs defaultValue="web-design">
          <TabsList className="inline-flex mx-auto justify-center items-center my-4">
            <TabsTrigger value="web-design">Web Design</TabsTrigger>
            <TabsTrigger value="graphic-design">Graphic Design</TabsTrigger>
            <TabsTrigger value="photography">Photography</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="illustration">Illustration</TabsTrigger>
            <TabsTrigger value="a">A</TabsTrigger>
          </TabsList>
          <TabsContent value="web-design">
            <Carousel className="w-full" opts={{ dragFree: true, loop: true }}>
              <CarouselContent className="-ml-1">
                {items.map((item, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="p-1 rounded-md">
                          <img src={item.src} alt="Web Design Project" className="rounded-[inherit]" />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:w-7xl">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                          <DialogDescription>
                            {item.author}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-3 gap-4">
                          {item.images.map(image => (
                            <img src={image} alt="Web Design Project" className="rounded-[inherit]" />
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <CarouselPrevious />
              <CarouselNext /> */}
            </Carousel>
          </TabsContent>
          <TabsContent value="graphic-design">
            inja mohtaveye karo
          </TabsContent>
          <TabsContent value="photography">Photography Content</TabsContent>
          <TabsContent value="branding">Branding Content</TabsContent>
          <TabsContent value="illustration">Illustration Content</TabsContent>
        </Tabs>

      </div>
    </div>
  );
};

export default Works;

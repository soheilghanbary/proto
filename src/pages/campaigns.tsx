import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { DialogHeader } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import projectBranding from "@/assets/project-branding.jpg";
import projectIllustration from "@/assets/project-illustration.jpg";
import projectPhotography from "@/assets/project-photography.jpg";
import projectWebDesign from "@/assets/project-web-design.jpg";

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

export const Campaigns = () => {
  return <div className="max-w-screen-lg mx-auto w-full">
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

  </div>;
};

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { ResizableNavbar } from "./components/ui/resizable-navbar";
import BrandsPage from "./pages/BrandsPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Works from "./pages/Works";
import { Campaigns } from "./pages/campaigns";

const queryClient = new QueryClient();

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "WORKS", href: "#works" },
  { label: "CAMPAIGNS", href: "#campaigns" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" }
];

const AppLayout = ({ children }: PropsWithChildren) => (
  <div>
    <ResizableNavbar items={navItems} />
    <Outlet />
    <Footer />
  </div>
)

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/works" element={<Works />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/BrandsPage" element={<BrandsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

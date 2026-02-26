import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";
import { LenisProvider } from "@/components/LenisProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import MediaDetail from "./pages/MediaDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectGallery from "./pages/ProjectGallery";
import Reviews from "./pages/Reviews";
import SecondaryLanding from "./pages/SecondaryLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CustomCursor />
      <Toaster />
      <Sonner />
      <LenisProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SecondaryLanding />} />
            <Route path="/home" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/:id" element={<MediaDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/project/:id/gallery" element={<ProjectGallery />} />
            <Route path="/reviews" element={<Reviews />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LenisProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
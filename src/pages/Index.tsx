import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import LargeImageSection from "@/components/LargeImageSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroCarousel />
      <LargeImageSection />
      <AboutSection />
      <ProcessSection />
      <ProjectsGrid />
      <ContactSection />
    </div>
  );
};

export default Index;

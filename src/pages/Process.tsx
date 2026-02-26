import Navigation from "@/components/Navigation";
import imagineImg from "@/assets/process-imagine.jpg";
import inspireImg from "@/assets/process-inspire.jpg";
import innovateImg from "@/assets/process-innovate.jpg";
import implementImg from "@/assets/process-implement.jpg";
import inhabitImg from "@/assets/process-inhabit.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import ProcessSection from "@/components/ProcessSection";
import { useState } from "react";
import ContactSection from "@/components/ContactSection";

const processCards = [
  { title: "IMAGINE", image: imagineImg },
  { title: "INSPIRE", image: inspireImg },
  { title: "INNOVATE", image: innovateImg },
  { title: "IMPLEMENT", image: implementImg },
  { title: "INHABIT", image: inhabitImg },
];

const featuredProjects = [
  { id: 1, image: project1, name: "XYZ Resort", location: "06.061" },
  { id: 2, image: project2, name: "Vazhumon", location: "AV Vacation home" },
  { id: 3, image: project3, name: "Vazhumon", location: "AV Vacation home" },
];

const Process = () => {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Process Cards */}
      <section className="pt-[6rem] pb-8">
        <div className="container mx-auto px-3">
          {/* Process Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-[1.5rem] md:gap-[6.5rem] mb-16 px-5 md:px-0">
            {processCards.map((card, index) => (
              <div
                key={card.title}
                className="relative overflow-hidden aspect-[0.9/2.1] max-w-[200px] mx-auto group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
                <h3
                  className="absolute bottom-4 right-4 text-foreground text-[3rem] font-[500] tracking-wider"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
          {/* Tagline */}
          <div className="text-center mb-8">
            <h2 className="text-foreground text-3xl md:text-4xl font-light mb-2">
              Weaving life among walls and voids
            </h2>
            <p className="text-muted-foreground text-sm">Jibu and Thomas Architects</p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center py-12 px-2">
            <div className="grid grid-cols-39 gap-[2px] md:gap-2 w-full max-w-7xl">
              {Array.from({ length: 117 }).map((_, i) => {
                const row = Math.floor(i / 39);
                const col = i % 39;

                const isActive = row === 1 && col === 19;
                const isHollow =
                  row >= 0 && row <= 2 &&
                  col >= 18 && col <= 20 &&
                  !isActive;

                return (
                  <div
                    key={i}
                    className={`w-full aspect-square rounded-full ${isActive
                      ? "bg-orange-500"
                      : isHollow
                        ? "bg-black border border-gray-500"
                        : "bg-gray-600"
                      }`}
                  />
                );
              })}
            </div>
          </div>
          {/* Featured Projects */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[2.5rem] py-[5rem] mb-[5rem]">
            {featuredProjects.map((project, index) => {
              const isCenter = index === 1;
              const isHovered = hoveredId === project.id;

              return (
                <div
                  key={project.id}
                  className={`relative group cursor-pointer transition-all duration-300 ${isCenter
                    ? 'w-full md:w-[300px] h-[500px] md:h-[580px]'
                    : 'w-full md:w-[250px] h-[450px] md:h-[500px]'
                    }`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <div
                      className={`absolute inset-0 border-4 transition-colors duration-300 z-10 pointer-events-none ${isHovered ? 'border-orange-500' : 'border-transparent'
                        }`}
                    />

                    <div className="relative overflow-hidden w-full h-full">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
                      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    </div>

                    <div
                      className={`absolute bottom-2 left-2 text-white z-20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'
                        }`}
                    >
                      <p className="text-sm tracking-wide mb-1">{project.location}</p>
                      <h3 className="text-xl md:text-2xl font-bold">{project.name}</h3>
                    </div>
                  </div>

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-orange-500 transition-all duration-300 ${isHovered
                      ? 'bottom-[-32px] opacity-100'
                      : 'bottom-[-16px] opacity-0'
                      }`}
                    style={{ zIndex: 30 }}
                  />
                </div>
              );
            })}
          </div>


          {/* Project Detail Section */}
          <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16 mb-32">
            <div className="order-1 w-full md:w-3/12">
              <div className="h-full flex flex-col justify-between relative z-10">
                <h2 className="text-4xl md:text-6xl font-[500] tracking-wider text-foreground md:whitespace-nowrap mt-2 mb-2 md:mb-0">
                  PROJECT TITLE
                </h2>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>

            <div className="order-2 flex-1 w-full relative">
              <div className="relative overflow-visible w-full h-[400px] md:h-[500px]">
                <div className="relative overflow-hidden w-full h-full">
                  <img
                    src={project1}
                    alt="Project detail"
                    className="w-full h-full object-cover grayscale brightness-50 contrast-125 saturate-0"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/40" />

                  <div className="absolute bottom-2 left-3 text-foreground">
                    <p className="text-[2rem] tracking-wide">LOCATION, PLACE</p>
                  </div>
                </div>

                <div className="absolute md:-bottom-6 md:left-[25rem]  md:translate-x-1/2 -bottom-14 text-foreground z-20">
                  <h2 className="text-5xl md:text-7xl font-bold">JT02345</h2>
                </div>
              </div>
            </div>

            <div className="order-3 hidden md:flex flex-col justify-center">
              <div className="w-6 h-6 rounded-full bg-primary" />
            </div>
          </div>



          {/* Process Steps Detail */}
          <ProcessSection startFrom="left" />
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Process;

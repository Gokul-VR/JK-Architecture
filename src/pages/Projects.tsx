import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import HeroCarousel from "@/components/HeroCarousel";

const projectCategories = [
  {
    id: "residential",
    title: "Residential Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 1, image: project1, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 2, image: project2, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 3, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 4, image: project4, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 5, image: project5, name: "Top 3", location: "IIA Kozhikode 2025", colSpan: "md:col-span-2", aspect: "aspect-[3/2]" },
    ],
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 6, image: project6, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[3/2]" },
      { id: 7, image: project1, name: "Top 5", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 8, image: project2, name: "Restaurant", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 9, image: project3, name: "Top 3", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[3/2]" },
    ],
    carouselImages: [project1, project2, project3, project4, project5, project6],
  },
  {
    id: "apartment",
    title: "Apartment Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 10, image: project4, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 11, image: project5, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 12, image: project6, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 13, image: project1, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 14, image: project2, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 15, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
    ],
  },
  {
    id: "interior",
    title: "Interior Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 130, image: project1, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[3/2]" },
      { id: 140, image: project2, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 150, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 160, image: project4, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[3/2]" },
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 16, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 17, image: project4, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[3/2]" },
      { id: 18, image: project5, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[3/2]" },
      { id: 19, image: project6, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
    ],
  },
  {
    id: "public",
    title: "Public Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 20, image: project5, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[3/2]" },
      { id: 21, image: project6, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 22, image: project1, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 23, image: project2, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
      { id: 24, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[6/8.25]" },
    ],
  },
];

const DotPattern = () => (
  <div className="flex flex-wrap gap-1 opacity-20">
    {Array.from({ length: 200 }).map((_, i) => (
      <div key={i} className="w-1 h-1 bg-muted-foreground rounded-full" />
    ))}
  </div>
);

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <HeroCarousel />
      {/* Project Categories */}
      <div className="">
        {projectCategories.map((category, index) => (
          <>
            {category?.carouselImages?.length > 0 && <HeroCarousel carouselImages={category.carouselImages} />}
            <div key={category.id} className="mb-24 container mx-auto">
              {/* Header Section */}
              <div className="mb-12 flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{category.title}</h2>
                <p className="text-gray-400 text-sm md:text-base max-w-4xl leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Grid Section */}
              <div className={`grid grid-cols-1 ${category.gridConfig || 'md:grid-cols-3'} gap-6  px-0.5 md:px-[6rem]`}>
                {category.projects.map((project, index) => {
                  return (
                    <div key={project.id} className={`group relative overflow-hidden cursor-pointer animate-fade-in mx-auto mt-[1rem] w-full ${project.colSpan || ''}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      <div className={`${project.aspect || 'aspect-[6/8]'} overflow-hidden transition-all duration-300`}>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-1 mt-4">{project.name}</h3>
                      <p className="text-gray-400 text-sm">{project.location}</p>
                    </div>
                  );
                })}
              </div>

              {/* See All Link */}
              <div className="flex items-center justify-end mt-8 gap-4 ">
                <div className="flex-grow h-[1px] bg-white "></div>
                <button className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
                  <span className="text-[1.2rem]">See all {category.title}</span>
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center" />
                </button>
              </div>
            </div>
            {index < projectCategories.length - 1 &&
              <div className="flex justify-center mb-20">
                <div className="grid grid-cols-39 gap-[2px] md:gap-2 w-full max-w-[83.5rem]">
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
            }
          </>

        ))}
      </div>

      <ContactSection />
    </div>
  );
};

export default Projects;

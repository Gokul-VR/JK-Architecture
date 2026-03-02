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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 1, image: project1, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 2, image: project2, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 3, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 4, image: project4, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 5, image: project5, name: "Top 3", location: "IIA Kozhikode 2025", colSpan: "md:col-span-2", aspect: "aspect-[4/3]" },
    ],
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 6, image: project6, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[4/3]" },
      { id: 7, image: project1, name: "Top 5", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 8, image: project2, name: "Restaurant", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 9, image: project3, name: "Top 3", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[4/3]" },
    ],
    carouselImages: [project1, project2, project3, project4, project5, project6],
  },
  {
    id: "apartment",
    title: "Apartment Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 10, image: project4, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 11, image: project5, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 12, image: project6, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 13, image: project1, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 14, image: project2, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 15, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
    ],
  },
  {
    id: "interior",
    title: "Interior Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 130, image: project1, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[4/3]" },
      { id: 140, image: project2, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 150, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 160, image: project4, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[4/3]" },
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 16, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 17, image: project4, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[4/3]" },
      { id: 18, image: project5, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[4/3]" },
      { id: 19, image: project6, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
    ],
  },
  {
    id: "public",
    title: "Public Projects",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gridConfig: "md:grid-cols-3",
    projects: [
      { id: 20, image: project5, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-2", aspect: "aspect-[4/3]" },
      { id: 21, image: project6, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 22, image: project1, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 23, image: project2, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
      { id: 24, image: project3, name: "Project Name", location: "Location, Year", colSpan: "md:col-span-1", aspect: "aspect-[1/1.5]" },
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
                <h2 className="text-3xl md:text-InterHeader font-[700] mb-6">{category.title}</h2>
                <p className="text-[#FFFFFF] font-poppins font-[300] text-sm md:text-PoppinsDescription max-w-4xl leading-[110%] text-justify">
                  {category.description}
                </p>
              </div>

              {/* Grid Section */}
              <div className={`grid grid-cols-1 ${category.gridConfig || 'md:grid-cols-3'} gap-6 md:gap-10  px-0.5 md:px-[6rem]`}>
                {category.projects.map((project, index) => {
                  return (
                    <div key={project.id} className={`group relative overflow-hidden cursor-pointer animate-fade-in mx-auto mt-[1rem] w-full flex flex-col h-full ${project.colSpan || ''}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      <div className={`${project.aspect || 'aspect-[6/8]'} max-h-[500px] overflow-hidden transition-all duration-300 flex-1`}>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-[1.75rem] font-[500]">{project.name}</h3>
                        <p className="text-[1.2rem] font-poppins font-[300]">{project.location}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* See All Link */}
              <div className="flex items-center justify-end mt-8 gap-4 ">
                <div className="flex-grow h-[1px] bg-white "></div>
                <button className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors">
                  <span className="text-[1.2rem]">See all {category.title}</span>
                  <div className="w-8 h-8 rounded-full bg-orange-primary flex items-center justify-center" />
                </button>
              </div>
            </div>
            {index < projectCategories.length - 1 &&
              <div className="flex justify-center mb-20">
                <div className="grid grid-cols-39 gap-[2px] md:gap-2 w-full max-w-[90.5rem]">
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
                          ? "bg-orange-primary"
                          : isHollow
                            ? "bg-black border border-gray-primary"
                            : "bg-gray-primary"
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

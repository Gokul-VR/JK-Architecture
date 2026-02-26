import project1 from "@/assets/project-1.jpg"
import project2 from "@/assets/project-2.jpg"
import project3 from "@/assets/project-3.jpg"
import project4 from "@/assets/project-4.jpg"
import project5 from "@/assets/project-5.jpg"
import project6 from "@/assets/project-6.jpg"

const projects = [
  { id: 1, image: project1, name: "Project Name", location: "Location 01, Kerala" },
  { id: 2, image: project2, name: "Project Name", location: "Location 01, Kerala" },
  { id: 3, image: project3, name: "Project Name", location: "Location 01, Kerala" },
  { id: 4, image: project4, name: "Project Name", location: "Location 01, Kerala" },
  { id: 5, image: project5, name: "Project Name", location: "Location 01, Kerala" },
  { id: 6, image: project6, name: "Project Name", location: "Location 01, Kerala" },
]

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer animate-fade-in max-w-sm mx-auto mt-[3rem]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Smaller Images - Fixed Aspect */}
              <div className="aspect-[4/5] overflow-hidden  transition-all duration-300">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-3 text-left">
                <h3 className="text-foreground text-base lg:text-[1.35rem] font-medium leading-tight">{project.name}</h3>
                <p className="text-muted-foreground text-xs lg:text-sm mt-1">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid

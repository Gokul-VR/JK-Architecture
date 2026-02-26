import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import Media1 from "@/assets/media-1.png";
import Marquee from "@/components/Marquee";

const publications = [
  { id: 1, image: Media1, name: "Publication Name", year: "YEAR" },
  { id: 2, image: Media1, name: "Publication Name", year: "YEAR" },
  { id: 3, image: Media1, name: "Publication Name", year: "YEAR" },
  { id: 4, image: Media1, name: "Publication Name", year: "YEAR" },
  { id: 5, image: Media1, name: "Publication Name", year: "YEAR" },
  { id: 6, image: Media1, name: "Publication Name", year: "YEAR" },
];

const carouselPublications = [
  { id: 1, image: project1, title: "Publication Name", label: "JT TITLE + ARCHITECTS" },
  { id: 2, image: project2, title: "Publication Name", label: "JT TITLE + ARCHITECTS" },
  { id: 3, image: project3, title: "Publication Name", label: "JT TITLE + ARCHITECTS" },
  { id: 4, image: project1, title: "Publication Name", label: "JT TITLE + ARCHITECTS" },
  { id: 5, image: project2, title: "Publication Name", label: "JT TITLE + ARCHITECTS" },
];

const DotPattern = () => (
  <div className="flex flex-wrap gap-1 max-w-full overflow-hidden">
    {Array.from({ length: 300 }).map((_, i) => (
      <div key={i} className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full" />
    ))}
  </div>
);

const Media = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Publications Grid */}
      <section className="pt-24 pb-10 ">
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-[3rem] mb-16 animate-fade-in px-[1.75rem] md:px-[8.5rem]">
            {publications.map((pub, index) => (
              <Link
                key={pub.id}
                to={`/media/${pub.id}`}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden mb-3 aspect-[2.9/3.9] bg-card ">
                  <img
                    src={pub.image}
                    alt={pub.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-foreground text-[1rem] md:text-[1.65rem] font-medium -mb-1.5">{pub.name}</h3>
                <p className="text-muted-foreground text-[.875rem] md:text-[1.25rem]">{pub.year}</p>
              </Link>
            ))}
          </div>
          {/* Publications Carousel */}

          <div className="w-full -mx-[calc((100vw-100%)/2)] mb-14 mt-10">
            <Marquee items={carouselPublications} />
          </div>

          {/* Empty space for minimal design */}

        </div>
        <div className="flex justify-center mb-4 md:py-21">
          <div className="grid grid-cols-39 gap-[2px] md:gap-2 w-full max-w-[88.5rem]">
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
      </section>

      <ContactSection />
    </div>
  );
};

export default Media;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const statements = [
  { id: 1, text: "PROCESS", path: "/process" },
  { id: 2, text: "DESIGN SPACES", path: "/projects" },
  { id: 3, text: "FULFILL DREAMS", path: "/about" },
  {
    id: 4,
    text: "ARE JIBU AND THOMAS",
    path: "/about",
    isHighlight: true,
  },
  { id: 5, text: "EVENTS", path: "/events" },
  { id: 6, text: "MEDIA", path: "/media" },
  { id: 7, text: "CONTACT US", path: "/contact" },
];

const SecondaryLanding = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;
      isScrolling = true;

      setTimeout(() => {
        isScrolling = false;
      }, 400);

      if (e.deltaY > 0 && activeIndex < statements.length - 1) {
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeIndex]);

  const handleClick = (path: string) => {
    navigate(path);
  };

  const activeStatement = statements[activeIndex];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Scrolling Statements Container */}
        <div className="relative flex flex-col items-center h-full w-full justify-center">
          {statements.map((statement, index) => {
            const distance = Math.abs(index - activeIndex);
            const opacity =
              distance === 0
                ? 0
                : distance === 1
                  ? 0.5
                  : distance === 2
                    ? 0.25
                    : 0.1;
            const scale = distance === 0 ? 1 : distance === 1 ? 0.85 : 0.7;

            // Calculate vertical offset from active position
            const offset = (index - activeIndex) * 70;

            return (
              <div
                key={statement.id}
                onClick={() => {
                  if (distance !== 0) {
                    handleClick(statement.path);
                  } else {
                    handleClick(activeStatement.path);
                  }
                }}
                className="cursor-none transition-all duration-500 ease-out absolute flex items-center justify-center"
                style={{
                  opacity,
                  transform: `translateY(${offset}px) scale(${scale})`,
                }}
              >
                <p
                  className={`text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider transition-colors duration-300 hover:text-primary whitespace-nowrap ${
                    distance === 0
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {statement.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fixed "WE" and Pill Container */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex items-center gap-6 pointer-events-auto">
            <span className="text-foreground text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider flex-shrink-0">
              WE
            </span>
            <button
              onClick={() => handleClick(activeStatement.path)}
              className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-full whitespace-nowrap transition-all duration-500 hover:scale-105 active:scale-95"
              style={{
                fontSize: window.innerWidth < 768 ? "1.5rem" : window.innerWidth < 1024 ? "2.25rem" : "3rem",
              }}
            >
              {activeStatement.text}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondaryLanding;

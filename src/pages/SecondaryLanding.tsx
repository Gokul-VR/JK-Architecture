import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const statements = [
  { id: 1, text: "PROCESS", path: "/process" },
  { id: 2, text: "DESIGN SPACES", path: "/projects" },
  { id: 3, text: "FULLFILL DREAMS", path: "/about" },
  { id: 4, text: "ARE JIBU AND THOMAS", path: "/about" },
  { id: 5, text: "EVENTS", path: "/events" },
  { id: 6, text: "MEDIA", path: "/media" },
  { id: 7, text: "CONTACT", path: "/contact" },
];

const SecondaryLanding = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const [pillWidth, setPillWidth] = useState(0);
  const activeRef = useRef<HTMLSpanElement>(null);
  const touchStart = useRef<number | null>(null);
  const navigate = useNavigate();

  // Update pill width based on active text width
  useEffect(() => {
    if (activeRef.current) {
      // Responsive padding: smaller on mobile (40px) vs desktop (80px)
      const padding = window.innerWidth < 768 ? 40 : 80;
      setPillWidth(activeRef.current.offsetWidth + padding);
    }
  }, [activeIndex]);

  // Shared scroll/swipe handler
  const handleDirectionalChange = (direction: "up" | "down") => {
    if (direction === "down" && activeIndex < statements.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (direction === "up" && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    let isThrottled = false;

    const onWheel = (e: WheelEvent) => {
      if (isThrottled || Math.abs(e.deltaY) < 10) return;
      isThrottled = true;
      handleDirectionalChange(e.deltaY > 0 ? "down" : "up");
      setTimeout(() => (isThrottled = false), 400);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (touchStart.current === null) return;
      const touchEnd = e.changedTouches[0].clientY;
      const deltaY = touchStart.current - touchEnd;

      // Threshold of 50px to trigger a swipe
      if (Math.abs(deltaY) > 50) {
        handleDirectionalChange(deltaY > 0 ? "down" : "up");
      }
      touchStart.current = null;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeIndex]);

  return (
    <div className="min-h-[90vh] md:min-h-screen max-h-[90vh] md:max-h-full bg-black text-white overflow-hidden font-sans flex flex-col">
      <Navigation />

      <section className="flex-grow flex items-center justify-center relative w-full px-4">
        {/* Container for WE + Statements */}
        <div className="flex items-center gap-4 md:gap-16 relative">

          {/* Static "WE" - Scaled for mobile */}
          <span className="text-2xl sm:text-4xl md:text-6xl font-medium tracking-tight z-20 shrink-0">
            WE
          </span>

          {/* Statement Area */}
          <div className="relative h-[80px] md:h-[120px] flex items-center min-w-[200px] md:min-w-[400px]">

            {/* THE FIXED ORANGE PILL 
                Left offset is dynamic to keep text centered inside it */}
            <div
              className="absolute left-[-10px] md:left-[-40px] top-1/2 -translate-y-1/2 h-[55px] md:h-[80px] bg-[#E86731] rounded-full transition-all duration-500 ease-out z-0"
              style={{ width: `${pillWidth}px` }}
            />

            {/* Scrolling List Container */}
            <div className="relative w-full h-full">
              {statements.map((statement, index) => {
                const distance = index - activeIndex;
                const isActive = distance === 0;

                // Responsive vertical gap: 60px mobile, 90px desktop
                const verticalGap = window.innerWidth < 768 ? 60 : 90;
                const offset = distance * verticalGap;
                const opacity = Math.max(0.1, 1 - Math.abs(distance) * 0.4);

                return (
                  <div
                    key={statement.id}
                    onClick={() => {
                      if (isActive) navigate(statement.path);
                      else setActiveIndex(index);
                    }}
                    className="absolute left-[.7rem] md:left-0 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out cursor-pointer whitespace-nowrap"
                    style={{
                      transform: `translateY(calc(-50% + ${offset}px))`,
                      opacity: opacity,
                    }}
                  >
                    <span
                      ref={isActive ? activeRef : null}
                      className={`text-xl sm:text-3xl md:text-5xl font-medium tracking-wide block transition-colors duration-300 ${isActive ? "text-white" : "text-[#444444]"
                        }`}
                    >
                      {statement.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Text - Responsive sizing */}
        <div className="absolute bottom-6 md:bottom-10 left-0 right-0 text-center px-4">
          <p className="text-[14px] sm:text-[24px] md:text-[36px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white opacity-90 leading-tight">
            Jibu and Thomas Architects
          </p>
        </div>
      </section>
    </div>
  );
};

export default SecondaryLanding;
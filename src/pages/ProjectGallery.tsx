import { useState, useRef, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import projectDetail from "@/assets/project-detail-1.jpg";
import interior1 from "@/assets/interior-1.jpg";
import Navigation from "@/components/Navigation";

// Duplicate images to simulate a larger gallery as per user's recurring list
const originalImages = [
  projectDetail,
  project1,
  project2,
  project3,
  interior1,
];
const galleryImages = Array(7).fill(originalImages).flat();

const ProjectGallery = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(4);
  const [isAnimating, setIsAnimating] = useState(false);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  imagesRef.current = [];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  // Helper to get wrapped index
  const getWrappedIndex = (index: number) => {
    return (index + galleryImages.length) % galleryImages.length;
  };

  // Define positions
  const getPosition = (index: number, current: number) => {
    const diff = (index - current + galleryImages.length) % galleryImages.length;

    // Center
    if (diff === 0) return "center";
    // immediate right
    if (diff === 1) return "right";
    // immediate left
    if (diff === galleryImages.length - 1) return "left";

    // Check for wrapping transition cases (scrolling right)
    if (diff === 2) return "nextRight";
    // Check for wrapping transition cases (scrolling left)
    if (diff === galleryImages.length - 2) return "prevLeft"; // Corrected logic for far left

    return "hidden";
  };

  // Set initial styles without animation
  const setInitialStyles = useCallback(() => {
    imagesRef.current.forEach((el, index) => {
      if (!el) return;
      const pos = getPosition(index, currentIndex);

      // GSAP set for immediate positioning
      let config = {};

      if (pos === "center") {
        config = { xPercent: -50, left: "50%", scale: 1, zIndex: 30, opacity: 1, visibility: "visible" };
      } else if (pos === "left") {
        config = { xPercent: -50, left: "35%", scale: 0.8, zIndex: 20, opacity: 0.4, visibility: "visible" };
      } else if (pos === "right") {
        config = { xPercent: -50, left: "65%", scale: 0.8, zIndex: 20, opacity: 0.4, visibility: "visible" };
      } else if (pos === "nextRight") {
        config = { xPercent: -50, left: "100%", scale: 0.8, zIndex: 10, opacity: 0, visibility: "visible" };
      } else if (pos === "prevLeft") {
        config = { xPercent: -50, left: "0%", scale: 0.8, zIndex: 10, opacity: 0, visibility: "visible" };
      } else {
        config = { xPercent: -50, left: "50%", scale: 0, zIndex: 0, opacity: 0, visibility: "hidden" };
      }

      gsap.set(el, config);
    });
  }, [currentIndex]);

  useEffect(() => {
    setInitialStyles();
  }, [setInitialStyles]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const nextIndex = getWrappedIndex(currentIndex + 1);

    // Timeline for synchronization
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(nextIndex);
        setIsAnimating(false);
        // The state update will trigger setInitialStyles aka "snap" to logical position,
        // which should match the end of this animation.
      }
    });

    const duration = 0.6;
    const ease = "power2.inOut";

    imagesRef.current.forEach((el, index) => {
      if (!el) return;
      const pos = getPosition(index, currentIndex);

      // Logic: Animate ELEMENTS based on where they ARE currently to where they SHOULD BE

      // Current Center moves Left
      if (pos === "center") {
        tl.to(el, { left: "35%", scale: 0.8, opacity: 0.4, zIndex: 20, duration, ease }, 0);
      }
      // Current Right moves Center
      else if (pos === "right") {
        tl.to(el, { left: "50%", scale: 1, opacity: 1, zIndex: 30, duration, ease }, 0);
      }
      // Current NextRight (hidden right) moves to Right
      else if (pos === "nextRight") {
        // Ensure it starts from the right side
        gsap.set(el, { left: "110%", opacity: 0, scale: 0.8, zIndex: 10, visibility: "visible" });
        tl.to(el, { left: "65%", opacity: 0.4, duration, ease }, 0);
      }
      // Current Left moves to PrevLeft (offscreen/faded)
      else if (pos === "left") {
        tl.to(el, { left: "-10%", opacity: 0, duration, ease }, 0);
      }
    });
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const prevIndex = getWrappedIndex(currentIndex - 1);

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(prevIndex);
        setIsAnimating(false);
      }
    });

    const duration = 0.6;
    const ease = "power2.inOut";

    imagesRef.current.forEach((el, index) => {
      if (!el) return;
      const pos = getPosition(index, currentIndex);

      // Current Center moves Right
      if (pos === "center") {
        tl.to(el, { left: "65%", scale: 0.8, opacity: 0.4, zIndex: 20, duration, ease }, 0);
      }
      // Current Left moves Center
      else if (pos === "left") {
        tl.to(el, { left: "50%", scale: 1, opacity: 1, zIndex: 30, duration, ease }, 0);
      }
      // Current PrevLeft (hidden left) moves to Left
      else if (pos === "prevLeft") {
        // Ensure starts from left
        gsap.set(el, { left: "-10%", opacity: 0, scale: 0.8, zIndex: 10, visibility: "visible" });
        tl.to(el, { left: "35%", opacity: 0.4, duration, ease }, 0);
      }
      // Current Right moves to NextRight (offscreen)
      else if (pos === "right") {
        tl.to(el, { left: "110%", opacity: 0, duration, ease }, 0);
      }
    });
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Header - Z-index lower relative to carousel */}
      <div className="relative z-10 opacity-50">
        <Navigation />
      </div>


      {/* Gallery Section */}
      <section className="relative flex-1 flex items-center justify-center pt-10 pb-10 perspective-1000 z-20">

        {/* Navigation Buttons - Solid Triangles */}
        <button
          onClick={handlePrev}
          className="absolute left-8 md:left-12 z-50 
                     text-orange-500 hover:text-orange-400 transition-all duration-300 
                     hover:scale-110 focus:outline-none group cursor-pointer"
          aria-label="Previous image"
        >
          <svg
            className="w-12 h-12 md:w-16 md:h-16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16 4l-10 8 10 8V4z" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-8 md:right-12 z-50 
                     text-orange-500 hover:text-orange-400 transition-all duration-300 
                     hover:scale-110 focus:outline-none group cursor-pointer"
          aria-label="Next image"
        >
          <svg
            className="w-12 h-12 md:w-16 md:h-16"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 4l10 8-10 8V4z" />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="absolute top-1/2 -translate-y-1/2 w-[70vw] md:w-[60vw] lg:w-[60vw] aspect-[16/10] bg-gray-900 shadow-2xl origin-center"
              style={{ visibility: 'hidden' }}
            >
              <img
                src={img}
                alt={`Project Image ${index + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay Content - Only visible if it's the current slide (handled by opacity in parent div mostly, but we can animate strictly) */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-300"
                style={{ opacity: index === currentIndex ? 1 : 0 }}
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-white text-2xl md:text-3xl font-light">Project Name</h2>
                    <p className="text-gray-300 text-sm md:text-base">Location, District</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Counter at Bottom Center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xl font-light tracking-widest z-50">
          {String(currentIndex + 1).padStart(2, "0")} / {galleryImages.length}
        </div>

      </section>
    </div>
  );
};

export default ProjectGallery;
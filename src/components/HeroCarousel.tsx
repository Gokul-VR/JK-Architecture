import { useState, useEffect } from "react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";


const HeroCarousel = ({ carouselImages }: { carouselImages?: string[] }) => {
  const images = carouselImages || [hero1, hero2, hero3];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-black py-16 w-full overflow-hidden mt-10">
      <div className="">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-4 basis-[95%] md:pl-8 md:basis-[70%] lg:basis-[63%]">
                <div
                  className={`relative aspect-[16/9] w-full overflow-hidden shadow-2xl transition-all duration-500 ease-in-out ${index === current ? "scale-100" : "scale-90 opacity-40"
                    }`}
                >
                  <img
                    src={image}
                    alt={`Architecture project ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for inactive slides to focus on center */}
                  <div
                    className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${index === current ? "opacity-0" : "opacity-30"
                      }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current
                  ? "bg-[#ff4d00]" // Using the orange color from the design
                  : "bg-white/20 hover:bg-white/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroCarousel;

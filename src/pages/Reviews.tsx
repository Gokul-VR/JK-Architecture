import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import CircleIndicator from "@/components/indicators/circleIndicator";

const clientLogos = Array(14).fill(null);

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat*",
    company: "CEO, Some Brand PVT. LTD",
    name: "Mr. Name Here",
    image: testimonial1,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat*",
    company: "CEO, Some Brand PVT. LTD",
    name: "Mrs. Name Here",
    image: testimonial2,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat*",
    company: "CEO, Some Brand PVT. LTD",
    name: "Mr. Name Here",
    image: testimonial1,
  },
];

const Reviews = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-6">
          {/* Client Portfolio Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-foreground text-3xl md:text-InterHeader font-bold mb-8">
              Client Portfolio
            </h1>
            <p className="text-PoppinsDescription max-w-4xl font-[300] mx-auto text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>

          {/* Client Logos Grid */}
          {(() => {
            const rows = [];
            const maxPerRow = 6;

            for (let i = 0; i < clientLogos.length; i += maxPerRow) {
              rows.push(clientLogos.slice(i, i + maxPerRow));
            }

            return (
              <div
                className="flex flex-col gap-10 mb-8 animate-fade-in items-center"
                style={{ animationDelay: "100ms" }}
              >
                {rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-10">
                    {row.map((_, index) => (
                      <div
                        key={index}
                        className="w-[200px] aspect-[4/4] bg-card border border-border flex items-center justify-center flex-shrink-0"
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
        {/* <div className="flex justify-center my-20">
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
                  className={`w-[30px] h-[30px] aspect-square rounded-full  ${isActive
                    ? "bg-orange-primary"
                    : isHollow
                      ? "bg-transparent border-[2px] border-[#3B5747]"
                      : "bg-gray-primary border-[2px] border-gray-primary"
                    }`}
                />
              );
            })}
          </div>
        </div> */}
        <div className="px-6 md:px-6 py-10 mb-5">
          <CircleIndicator
            filledIndices={[32, 34]}
            circleSize={32}
            gap={8}
            containerClassName="w-full flex justify-center items-center"
          />
        </div>
        {/* Testament of Trust Section */}
        <div
          className="mb-20 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-foreground text-3xl md:text-InterHeader font-bold text-center mb-8">
            Testament of Trust
          </h2>
          <p className="text-PoppinsDescription font-[300] text-justify max-w-4xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>

          {/* Testimonials */}
          <div className="space-y-8 px-[4rem]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative bg-[#222222]  flex items-stretch min-h-[250px] animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Text Content */}
                <div className="flex flex-col pb-6 pl-10 pr-8 pt-6 lg:pb-5 lg:pl-10 lg:pr-14 lg:pt-5 flex-1">
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-PoppinsDescription font-poppins font-[300] leading-relaxed text-justify">
                      “{testimonial.text}”
                    </p>
                  </div>
                  <div className="text-right mt-10">
                    <p className="font-poppins lg:text-[1.6rem] font-[300]">
                      {testimonial.company}
                    </p>
                    <p className="text-white font-poppins font-semibold text-2xl lg:text-PoppinsHeader mt-1">
                      {testimonial.name}
                    </p>
                  </div>
                </div>

                {/* Portrait Image Container */}
                <div className="w-[260px] lg:w-[250px] h-[400px] flex-shrink-0 self-stretch py-6 pr-6 lg:py-5 lg:pr-5 flex flex-col">
                  <div className="w-full flex-1 relative bg-[#222222]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="absolute inset-0 w-full h-full object-cover object-top grayscale"
                    />
                    {/* Bottom gradient fade */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(217, 217, 217, 0) 8.49%, #000000 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-6 mt-10 -mb-[40px]">
          <CircleIndicator
            filledIndices={[32, 34]}
            circleSize={32}
            gap={8}
            containerClassName="w-full flex justify-center items-center"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Reviews;

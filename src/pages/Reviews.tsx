import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const clientLogos = Array(8).fill(null);

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
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Client Portfolio Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-4">
              Client Portfolio
            </h1>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            {clientLogos.map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-card border border-border flex items-center justify-center"
              >
                <div className="w-12 h-12 bg-muted rounded" />
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mb-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === 9 || i === 10 ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Testament of Trust Section */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-foreground text-3xl md:text-4xl font-bold text-center mb-4">
              Testament of Trust
            </h2>
            <p className="text-muted-foreground text-sm text-center max-w-2xl mx-auto mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.
            </p>

            {/* Testimonials */}
            <div className="space-y-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`grid md:grid-cols-2 gap-8 items-center py-8 border-t border-border animate-fade-in ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <p className="text-foreground text-sm leading-relaxed mb-6">
                      "{testimonial.text}"
                    </p>
                    <div className="text-right">
                      <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                      <p className="text-foreground font-medium">{testimonial.name}</p>
                    </div>
                  </div>
                  <div className={`flex ${index % 2 === 1 ? "md:order-1 justify-start" : "justify-end"}`}>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-40 h-40 object-cover grayscale rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Dots Navigation */}
          <div className="flex justify-center gap-2 mb-8">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i >= 17 ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Reviews;
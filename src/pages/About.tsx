import Navigation from "@/components/Navigation";
import teamPhoto from "@/assets/about-1.jpg";
import teamPhoto2 from "@/assets/team.png";
import architect1 from "@/assets/architect-1.jpg";
import architect2 from "@/assets/architect-2.jpg";
import ContactSection from "@/components/ContactSection";

const teamMembers = Array(10).fill({
  name: "Ar. Jibu John",
  position: "Position",
});

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 relative mb-[9rem]">
            {/* Left Side - Text */}
            <div className="text-white md:pr-8 z-10 md:-mt-2.5">
              <p className="text-sm md:text-[1.65rem] font-[300] leading-[1.75] tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[300px] md:h-[520px] z-10">
              <img
                src={teamPhoto}
                alt="Jibu and Thomas"
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Centered Heading - Overlays Both Sections */}
            <div className="absolute top-[25rem] left-0 right-0 bottom-0 flex items-center justify-center z-20 pointer-events-none">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[500] text-center px-6 tracking-wide">
                WE ARE JIBU AND THOMAS
              </h1>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-28 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="text-foreground text-3xl md:text-[3.5rem] font-[500] text-center mb-12">
              Our Team
            </h2>
            <div className="">
              <img
                src={teamPhoto2}
                alt="Our Team"
                className="w-full h-[650px] object-cover"
              />
            </div>
          </div>

          {/* Principal Architects */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4 lg:mb-[4.5rem]">
              <div className="flex flex-col col-span-2 justify-between lg:min-h-[500px]">
                <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-[500] mb-8 lg:mb-0">
                  Principal Architects
                </h2>
                <div className="text-white text-sm lg:text-[1.35rem] font-[300] leading-[2] max-w-[39rem]">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ncididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequa
                  </p>
                </div>
              </div>

              {/* Architect 1 */}
              <div className="relative">
                <img
                  src={architect1}
                  alt="Ar. Jibu John"
                  className="w-full h-[400px] lg:h-[500px] object-cover grayscale"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[120px] lg:h-[150px]"
                  style={{
                    background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #000000 100%)"
                  }}
                />
                <div className="absolute bottom-3 left-3 right-0 text-white">
                  <p className="text-xs md:text-[1.35rem] font-[300] mb-2">Position</p>
                  <p className="text-sm md:text-[1.25rem] font-[400]">Ar. Jibu John</p>
                </div>
              </div>

              {/* Architect 2 */}
              <div className="relative">
                <img
                  src={architect2}
                  alt="Ar. Jibu John"
                  className="w-full h-[400px] lg:h-[500px] object-cover grayscale"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[120px] lg:h-[150px]"
                  style={{
                    background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #000000 100%)"
                  }}
                />
                <div className="absolute bottom-3 left-3 right-0 text-white">
                  <p className="text-xs md:text-[1.35rem] font-[300] mb-2">Position</p>
                  <p className="text-sm md:text-[1.25rem] font-[400]">Ar. Jibu John</p>
                </div>
              </div>
            </div>

            <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {/* Title and Description - Full Width on Small, Half on Medium */}
              <div className="flex flex-col md:col-span-2 lg:col-span-2">
                <h2 className="text-white text-3xl md:text-4xl font-[500] mb-6 md:mb-8">
                  Principal Architects
                </h2>
                <div className="text-white text-sm md:text-base leading-relaxed max-w-2xl">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ncididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequa
                  </p>
                </div>
              </div>

              {/* Architects Side-by-Side on Small Screens */}
              <div className="relative md:col-span-1 mb-2">
                <img
                  src={architect1}
                  alt="Ar. Jibu John"
                  className="w-full h-[400px] object-cover grayscale"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[120px]"
                  style={{
                    background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #000000 100%)"
                  }}
                />
                <div className="absolute bottom-5 left-3 right-0 text-white">
                  <p className="text-[1.35rem] font-[300] mb-.5">Position</p>
                  <p className="text-[1.25rem] font-[400]">Ar. Jibu John</p>
                </div>
              </div>

              <div className="relative md:col-span-1">
                <img
                  src={architect2}
                  alt="Ar. Jibu John"
                  className="w-full h-[400px] object-cover grayscale"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[120px]"
                  style={{
                    background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #000000 100%)"
                  }}
                />
                <div className="absolute bottom-5 left-3 right-0 text-white">
                  <p className="text-[1.35rem] font-[300] mb-.5">Position</p>
                  <p className="text-[1.25rem] font-[400]">Ar. Jibu John</p>
                </div>
              </div>
            </div>

            {/* Team Grid - Unchanged */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-8 mt-5 -mb-16">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img
                    src={index % 2 === 0 ? architect1 : architect2}
                    alt={member.name}
                    className="w-full h-[300px] md:h-[400px] object-cover grayscale"
                  />

                  {/* Gradient Shadow from Bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[120px]"
                    style={{
                      background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgb(0, 0, 0) 100%)"
                    }}
                  />


                  {/* Position and Name Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-[1rem] md:text-[1.35rem] font-[300] md:mb-2">{member.position}</p>
                    <p className="text-[.875rem] font-[400]">{member.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default About;

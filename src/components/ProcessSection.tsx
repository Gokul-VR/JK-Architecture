import imagineImg from "@/assets/process-imagine.jpg";
import inspireImg from "@/assets/process-inspire.jpg";
import innovateImg from "@/assets/process-innovate.jpg";
import implementImg from "@/assets/process-implement.jpg";
import inhabitImg from "@/assets/process-inhabit.jpg";

const processSteps = [
  {
    id: 1,
    title: "IMAGINE",
    image: imagineImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    title: "INSPIRE",
    image: inspireImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "INNOVATE",
    image: innovateImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    title: "IMPLEMENT",
    image: implementImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    title: "INHABIT",
    image: inhabitImg,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
type ProcessSectionProps = {
  startFrom?: "left" | "right";
};

const ProcessSection = ({ startFrom = "right" }: ProcessSectionProps) => {
  const shouldStartFromLeft = startFrom === "left";

  return (
    <section id="process" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {processSteps.map((step, index) => {
            const isEven = shouldStartFromLeft
              ? index % 2 !== 0
              : index % 2 === 0;

            return (
              <div
                key={step.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* DESKTOP LAYOUT */}
                <div className="hidden md:flex md:flex-row items-stretch gap-8 md:gap-16">
                  {/* LEFT COLUMN */}
                  <div
                    className={`order-1 ${isEven ? "w-full md:w-3/12 text-left md:min-h-[500px]" : "w-auto"
                      }`}
                  >
                    {isEven ? (
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                          <div className="inline-block relative md:translate-x-[13rem]">
                            <h2 className="text-5xl md:text-7xl font-[500] tracking-wider text-foreground md:whitespace-nowrap relative pb-2 mt-8">
                              {step.title}
                              <span className="h-1 bg-primary block w-full absolute bottom-0 left-0"></span>
                            </h2>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm md:text-[1.3rem] leading-[1.3] max-w-md mt-6">
                          {step.text}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-5">
                        {processSteps.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-6 h-6 rounded-full ${dotIndex <= index ? "bg-primary" : "bg-muted/30"
                              }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* IMAGE */}
                  <div className="order-2 flex-1 w-full relative z-0">
                    <div className="relative overflow-hidden w-full h-[400px] md:h-[500px]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover grayscale brightness-50 contrast-125"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
                    </div>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div
                    className={`order-3 ${!isEven ? "w-full md:w-3/12 text-left md:min-h-[500px]" : "w-auto"
                      }`}
                  >
                    {!isEven ? (
                      <div className="relative z-10 h-full flex flex-col justify-between items-end">
                        <div>
                          <div className="inline-block relative md:-translate-x-[13rem]">
                            <h2 className="text-5xl md:text-7xl font-[500] tracking-wider text-foreground md:whitespace-nowrap relative pb-2 mt-8">
                              {step.title}
                              <span className="h-1 bg-primary block w-full absolute bottom-0 left-0"></span>
                            </h2>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm md:text-[1.3rem] leading-[1.3] max-w-md text-left mt-6">
                          {step.text}
                        </p>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-5">
                        {processSteps.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-6 h-6 rounded-full ${dotIndex <= index ? "bg-primary" : "bg-muted/30"
                              }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* MOBILE LAYOUT */}
                <div className="flex md:hidden flex-col gap-6">
                  {/* Image */}
                  <div className="relative overflow-hidden w-full h-[300px]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover grayscale brightness-50 contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
                  </div>

                  {/* Title */}
                  <div className="inline-block relative">
                    <h2 className="text-4xl font-[500] tracking-wider text-foreground relative pb-2">
                      {step.title}
                      <span className="h-1 bg-primary block w-full absolute bottom-0 left-0"></span>
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.text}
                  </p>

                  {/* Steps dots */}
                  <div className="flex flex-row gap-3">
                    {processSteps.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className={`w-5 h-5 rounded-full ${dotIndex <= index ? "bg-primary" : "bg-muted/30"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default ProcessSection;

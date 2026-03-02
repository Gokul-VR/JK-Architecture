import { Link, useNavigate, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import projectDetail from "@/assets/project-detail-1.jpg";
import projectSketch from "@/assets/project-sketch.jpg";
import interior1 from "@/assets/interior-1.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import b3_1 from "@/assets/b3-1.png";
import b3_2 from "@/assets/b3-2.png";
import b3_3 from "@/assets/b3-3.png";
import CircleIndicator from "@/components/indicators/circleIndicator";

const galleryImages = [project1, project2, project3, projectDetail, interior1];

const ProjectDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id, "d")
  const projectData = {
    title: "Project Title",
    location: "Place, District",
    client: "Mr Sudheesh",
    totalArea: "3500 Sqft",
    floors: "2",
    additionalInfo: "Something more ?",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ullamco laboris nisi ut aliquip ex guygsiuwgw wdeuighdqioba sdayq ququayb mnduw qjqb ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat`,
  }
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-[4.8rem] md:pt-24 pb-10">
        <div className="max-w-[90rem] mx-auto px-6 md:px-32 md:-mb-[5.8rem]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-1">
            <div className="lg:col-span-8 space-y-4 md:space-y-[2.35rem]">
              {/* First Image */}
              <div className="w-full aspect-[1.5/1] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Modern house exterior with pool"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full aspect-[1.5/1] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Outdoor seating area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-1 relative">
              <div className="absolute inset-y-0 left-1/2 transform -translate-x-[1.2rem] w-px bg-white"></div>
            </div>

            <div className="lg:col-span-3 text-white space-y-6 lg:space-y-8 lg:-ml-10">
              <h1 className="text-3xl md:text-4xl lg:text-[2rem] font-bold">
                Project Title
              </h1>

              <div className="md:space-y-[2rem] space-y-[1.5rem] text-sm md:text-base">
                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.3rem] font-[300]">Location : <span className="text-white">Place, District</span></p>
                </div>

                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.3rem] font-[300]">Client : <span className="text-white">Mr Sudheesh</span></p>
                </div>

                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.3rem] font-[300]">Total Area : <span className="text-white">3500 Sqft</span></p>
                </div>

                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.3rem] font-[300]">Floors : <span className="text-white">2</span></p>
                </div>

                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.3rem] font-[300]">Something more ?</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-[1.15rem] md:text-PoppinsDescription text-white leading-relaxed text-justify font-[300] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ullamco laboris nisi ut aliquip ex guygsiuwgw wdeuighdajobq sdayg quauqvb mnduw qjab ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto aspect-[1.5/1] px-6 md:p-32 my-6 md:-mb-[13.8rem]">
          <img
            src={projectSketch}
            alt="Project Sketch"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[90rem] mx-auto aspect-[1.5/1] px-6 md:p-32 mb-8 md:-mb-[4.8rem]">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Project Sketch"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 md:px-6 -mb-2 md:-my-[4rem] md:-mb-[7rem]">
          <CircleIndicator
            filledIndices={[34]}
            circleSize={32}
            gap={8}
            containerClassName="w-full flex justify-center items-center"
          />
        </div>
        {/** First bento */}
        <div className="max-w-[90rem] mx-auto my-[3rem] px-6 md:p-32 md:-mb-[2.8rem]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
            {/* Left Column - Portrait Image and Text */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Large Portrait Image */}
              <div className="flex-1 overflow-hidden aspect-[1/1.5]">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dining room with wooden ceiling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Block */}
              <div className="">
                <p className="text-[1.15rem] md:text-PoppinsDescription text-white leading-relaxed text-justify font-[300]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                </p>
              </div>
            </div>

            {/* Right Column - Two Landscape Images */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Top Landscape Image */}
              <div className="aspect-[1.5/1] flex-1 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
                  alt="Modern kitchen with wooden cabinets"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Landscape Image */}
              <div className="aspect-[1.5/1] flex-1 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
                  alt="Modern living space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-6 md:-mb-[5.5rem]">
          <CircleIndicator
            filledIndices={[32, 34]}
            circleSize={32}
            gap={8}
            containerClassName="w-full flex justify-center items-center"
          />
        </div>
        {/* Second bento */}
        <div className="max-w-[90rem] mx-auto my-[3rem] px-6 md:p-32 md:-mb-[2.8rem]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
            {/* Left Column - Text and Portrait Image */}
            <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
              {/* Text Block */}
              <div className="">
                <p className="text-[1.15rem] md:text-PoppinsDescription text-white leading-relaxed text-justify font-[300]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in
                </p>
              </div>

              {/* Portrait Image */}
              <div className="flex-1 overflow-hidden aspect-[1/1.5]">
                <img
                  src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&q=80"
                  alt="Dining room with wooden ceiling and pendant lights"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Two Landscape Images */}
            <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
              <div className="aspect-[1.5/1] flex-1 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"
                  alt="Modern living room with wooden ceiling"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[1.5/1] flex-1 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&q=80"
                  alt="Contemporary bar and lounge area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-6 md:-mb-[5.5rem]">
          <CircleIndicator
            filledIndices={[30, 32, 34]}
            circleSize={32}
            gap={8}
            containerClassName="w-full flex justify-center items-center"
          />
        </div>
        {/* Third bento */}
        <div className="max-w-[90rem] mx-auto my-[3rem] px-6 md:p-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
            {/* Left Column - Two Landscape Images */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div className="aspect-[1.5/1] flex-1 overflow-hidden">
                <img
                  src={b3_1}
                  alt="Modern garden entrance with wooden slats"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[1.5/1] flex-1 overflow-hidden">
                <img
                  src={b3_2}
                  alt="Outdoor lounge seating area with tropical plants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text and Portrait Image */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Text Block */}
              <div className="">
                <p className="text-[1.15rem] md:text-PoppinsDescription text-white leading-relaxed text-justify font-[300]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ullamco laboris nisi
                </p>
              </div>

              {/* Portrait Image */}
              <div className="flex-1 overflow-hidden aspect-[1/1.5]">
                <img
                  src={b3_3}
                  alt="Pool deck with lounge chairs and tropical landscaping"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end md:-mt-16 gap-4 max-w-[90rem] mx-auto px-6 md:px-32">
          <div className="flex-grow h-[1px] bg-white mt-1"></div>
          <button className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
            onClick={() => navigate(`/project/${id}/gallery`)}
          >
            <span className="text-[1.2rem]">See Project Gallery</span>
            <div className="w-8 h-8 rounded-full bg-orange-primary flex items-center justify-center" />
          </button>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default ProjectDetail;
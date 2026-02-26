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
        <div className="max-w-[90rem] mx-auto mb-[5rem] px-3 md:px-3">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-1">
            {/* Left Section - Images (5 columns on large screens) */}
            <div className="lg:col-span-8 space-y-4 md:space-y-6">
              {/* First Image */}
              <div className="w-full aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Modern house exterior with pool"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Second Image */}
              <div className="w-full aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Outdoor seating area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden lg:block lg:col-span-1 relative">
              {/* <div className="absolute inset-y-0 left-1/2 transform -translate-x-[2rem] w-px bg-gradient-to-b from-transparent via-amber-600 to-transparent"></div> */}
              <div className="absolute inset-y-0 left-1/2 transform -translate-x-[1.2rem] w-px bg-white"></div>
            </div>

            {/* Right Section - Project Details (3 columns on large screens) */}
            <div className="lg:col-span-3 text-white space-y-6 lg:space-y-8 md:-ml-10">
              <h1 className="text-3xl md:text-4xl lg:text-[2.3rem] font-bold">
                Project Title
              </h1>

              <div className="md:space-y-[2rem] space-y-[1.5rem] text-sm md:text-base">
                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.5rem] font-[300]">Location : <span className="text-white">Place, District</span></p>
                </div>

                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.5rem] font-[300]">Client : <span className="text-white">Mr Sudheesh</span></p>
                </div>

                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.5rem] font-[300]">Total Area : <span className="text-white">3500 Sqft</span></p>
                </div>

                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.5rem] font-[300]">Floors : <span className="text-white">2</span></p>
                </div>

                <div className="">
                  <p className="text-white text-[1.15rem] md:text-[1.5rem] font-[300]">Something more ?</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-[1.15rem] md:text-[1.5rem] text-white leading-relaxed text-justify font-[300] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ullamco laboris nisi ut aliquip ex guygsiuwgw wdeuighdajobq sdayg quauqvb mnduw qjab ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto mb-[2rem] px-3 md:px-3">
          <img
            src={projectSketch}
            alt="Project Sketch"
            className="w-full h-[calc(90vh-3rem)] object-cover"
          />
        </div>
        <div className="max-w-[90rem] mx-auto mb-[2rem] px-3 md:px-3">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Project Sketch"
            className="w-full h-[calc(90vh-3rem)] object-cover"
          />
        </div>
        <div className="md:px-6">
          <CircleIndicator
            filledIndices={[34]}
            circleSize={32}
            gap={8}
            containerClassName="w-full flex justify-center items-center"
          />
        </div>
        <div className="max-w-[90rem] mx-auto my-[3rem] px-3 md:px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Left Column */}
            <div className="space-y-4 md:space-y-6">
              {/* Large Dining Room Image */}
              <div className="aspect-[4/3] ">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dining room with wooden ceiling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Block */}
              <div className="p-1">
                <p className="text-[1.15rem] md:text-[1.65rem] text-white leading-relaxed text-justify font-[300]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4 md:space-y-6">
              {/* Kitchen Image */}
              <div className="aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
                  alt="Modern kitchen with wooden cabinets"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Two Images Side by Side */}
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {/* Wooden Ceiling Detail */}
                <div className="aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
                    alt="Modern kitchen with wooden cabinets"
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="md:px-6">
          <CircleIndicator
            filledIndices={[32, 34]}
            circleSize={32}
            gap={8}
            containerClassName="w-full flex justify-center items-center"
          />
        </div>
        {/* Second bento */}
        <div className="max-w-[90rem] mx-auto my-[3rem] px-3 md:px-3">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

            {/* Left Column - 5 columns */}
            <div className="lg:col-span-4 grid grid-rows-[auto_1fr] gap-4 md:gap-6">
              {/* Text Block */}
              <div>
                <p className="text-[1.15rem] md:text-[1.65rem] text-white leading-relaxed text-justify font-[300]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse Duis aute irure dolor in reprehenderit in
                </p>
              </div>

              {/* Dining Room Image - Takes remaining space */}
              <div className="aspect-square lg:aspect-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&q=80"
                  alt="Dining room with wooden ceiling and pendant lights"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - 7 columns */}
            <div className="lg:col-span-8 grid grid-rows-2 gap-4 md:gap-6">
              {/* Large Living Room Image */}
              <div className="aspect-[16/9] lg:aspect-[3/2] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"
                  alt="Modern living room with wooden ceiling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bar/Lounge Image */}
              <div className="aspect-[16/9] lg:aspect-[3/2] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1200&q=80"
                  alt="Contemporary bar and lounge area"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-6">
          <CircleIndicator
            filledIndices={[30, 32, 34]}
            circleSize={32}
            gap={8}
            containerClassName="w-full flex justify-center items-center"
          />
        </div>
        {/* Third bento */}

        <div className="max-w-[90rem] mx-auto my-[3rem] px-3 md:px-3">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">

            {/* Left Column - 7 columns */}
            <div className="lg:col-span-8 grid grid-rows-2 gap-4 md:gap-6">
              {/* Top Garden/Entrance Image */}
              <div className="aspect-[16/9] lg:aspect-[3/2] overflow-hidden">
                <img
                  src={b3_1}

                  alt="Modern garden entrance with wooden slats"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Outdoor Seating Image */}
              <div className="aspect-[16/9] lg:aspect-[3/2] overflow-hidden">
                <img
                  src={b3_2}

                  alt="Outdoor lounge seating area with tropical plants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - 5 columns */}
            <div className="lg:col-span-4 grid grid-rows-[auto_1fr] gap-4 md:gap-6">
              {/* Text Block */}
              <div>
                <p className="text-[1.15rem] md:text-[1.65rem] text-white leading-relaxed text-justify font-[300]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ullamco laboris nisi
                </p>
              </div>

              {/* Pool/Deck Image - Takes remaining space */}
              <div className="aspect-square lg:aspect-auto overflow-hidden">
                <img
                  src={b3_3}
                  alt="Pool deck with lounge chairs and tropical landscaping"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-end mt-8 gap-4 max-w-[90rem] mx-auto  px-3 md:px-3">
          <div className="flex-grow h-[1px] bg-white mt-1"></div>
          <button className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
            onClick={() => navigate(`/project/${id}/gallery`)}
          >
            <span className="text-[1.2rem]">See Project Gallery</span>
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center" />
          </button>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default ProjectDetail;
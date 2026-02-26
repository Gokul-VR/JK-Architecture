import Navigation from "@/components/Navigation";
import awardTrophy from "@/assets/award-trophy.jpg";

const MediaDetail = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Award Detail Card */}
          <div className="border-2 border-primary p-8 md:p-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Award Image */}
              <div className="relative">
                <div className="border-l-4 border-primary pl-6">
                  <img
                    src={awardTrophy}
                    alt="Award Trophy"
                    className="w-full h-[450px] object-cover"
                  />
                </div>
              </div>

              {/* Award Info */}
              <div className="text-foreground">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Award Name</h1>
                <p className="text-muted-foreground text-lg mb-8">Date : 01.02.25</p>

                <p className="text-foreground leading-relaxed mb-8 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                </p>

                <p className="text-foreground">
                  Read more{" "}
                  <span className="text-primary cursor-pointer hover:underline">HERE</span>
                </p>
              </div>
            </div>
          </div>

          {/* Publications Section */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex gap-8 justify-center">
              <div className="text-center">
                <div className="h-[300px] w-[220px] bg-card border border-border flex items-center justify-center mb-4">
                  <span className="text-foreground text-xl font-bold">ARCHITECTURE+DESIGN</span>
                </div>
              </div>
              <div className="text-center">
                <div className="h-[300px] w-[220px] bg-card border border-border flex items-center justify-center mb-4">
                  <span className="text-foreground text-xl font-bold">ARCHITECTURE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaDetail;
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { ChevronLeft } from "lucide-react";
import awardTrophy from "@/assets/award-trophy.jpg";

const EventDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link to="/events" className="inline-flex items-center text-primary mb-8 hover:opacity-80 transition-opacity">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Events
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video mb-8 overflow-hidden">
              <img
                src={awardTrophy}
                alt="Event"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {id?.includes('forum') ? `Open Forum ${id.replace('forum-', '#')}` : `Award Event ${id}`}
            </h1>
            
            <p className="text-muted-foreground mb-6">
              {id?.includes('forum') ? 'Open Forum Event' : 'Award Ceremony'} | 2025
            </p>

            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square overflow-hidden">
                  <img
                    src={awardTrophy}
                    alt={`Event gallery ${item}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;

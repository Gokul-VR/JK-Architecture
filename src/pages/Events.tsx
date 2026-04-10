import award1 from "@/assets/award-1.png";
import award2 from "@/assets/award-2.png";
import award3 from "@/assets/award-3.png";
import MediaHero from "@/assets/media-hero.png";
import ContactSection from "@/components/ContactSection";
import Marquee from "@/components/Marquee";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { useState } from "react";
import ItemModal, { ItemData } from "@/components/ItemModal";
import CircleIndicator from "@/components/indicators/circleIndicator";

const awards = [
  { id: 1, title: "Gold Medal", event: "Event Name, Location", image: award1 },
  {
    id: 2,
    title: "Top 3",
    event: "IIA Kottayode 2025",
    image: award2,
    badge: "Jama Award List",
  },
  { id: 3, title: "Gold Medal", event: "Event Name, Location", image: award1 },
  { id: 4, title: "Top 3", event: "IIA Thrissur 2025", image: award2 },
  { id: 5, title: "Top 5", event: "IIA Malapuram 2025", image: award1 },
];

const awardsList = [
  {
    id: 1,
    image: award1,
    name: "Gold Medal",
    event: "Event Name, Location",
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 2,
    image: award2,
    name: "Top 3",
    event: "IIA Kottayode 2025",
    colSpan: "md:col-span-2",
    aspect: "aspect-[1.585/1]",
  },
  {
    id: 3,
    image: award1,
    name: "Gold Medal",
    event: "Event Name, Location",
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 4,
    image: award2,
    name: "Top 3",
    event: "IIA Thrissur 2025",
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 5,
    image: award1,
    name: "Top 5",
    event: "IIA Malapuram 2025",
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
];
const awardNames = [
  "Award Name",
  "Award Name",
  "Award Name",
  "Award Name",
  "Award Name",
  "Award Name",
];

const openForumEvents = [
  {
    id: 1,
    date: "Sept '25",
    event: "Open forum: #134",
    image: award3,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 2,
    date: "Aug '25",
    event: "Open forum: #133",
    image: award2,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 3,
    date: "July '25",
    event: "Open forum: #132",
    image: award3,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 4,
    date: "June '25",
    event: "Open forum: #131",
    image: award1,
    badge: "Jama Award List",
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 5,
    date: "May '25",
    event: "Open forum: #130",
    image: award2,
    colSpan: "md:col-span-2",
    aspect: "aspect-[1.585/1]",
  },
  {
    id: 6,
    date: "April '25",
    event: "Open forum: #129",
    image: award2,
    badge: "Jama Award List",
    colSpan: "md:col-span-2",
    aspect: "aspect-[1.585/1]",
  },
  {
    id: 7,
    date: "March '25",
    event: "Open forum: #128",
    image: award1,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 8,
    date: "Feb '25",
    event: "Open forum: #127",
    image: award3,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 9,
    date: "Jan '25",
    event: "Open forum: #126",
    image: award3,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 10,
    date: "Dec '24",
    event: "Open forum: #125",
    image: award3,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 11,
    date: "Nov '24",
    event: "Open forum: #124",
    image: award2,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 12,
    date: "Oct '24",
    event: "Open forum: #123",
    image: award2,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
  {
    id: 13,
    date: "Sept '24",
    event: "Open forum: #122",
    image: award2,
    colSpan: "md:col-span-1",
    aspect: "aspect-[1/1.3]",
  },
];

const DotPattern = () => (
  <div className="flex flex-wrap gap-1 max-w-full overflow-hidden">
    {Array.from({ length: 300 }).map((_, i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 bg-muted-foreground/30 rounded-full"
      />
    ))}
  </div>
);

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<ItemData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (eventData: ItemData) => {
    setSelectedEvent(eventData);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Award Section */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto">
          <div className="relative h-[540px] mb-4 overflow-hidden animate-fade-in md:px-[3rem]">
            <img
              src={MediaHero}
              alt="Jibu and Thomas Architects Award"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          <div className="text-center mb-[3rem]">
            <p className="text-white text-[1.25rem] font-poppins md:text-[1.9rem] font-[300]">
              Jibu and Thomas Architects bags X awards at IIA Abc
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 md:px-[6rem]`}
          >
            {awardsList?.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden cursor-pointer animate-fade-in mx-auto mt-[1rem] w-full ${item.colSpan || ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`${item.aspect || "aspect-[6/8]"} overflow-hidden transition-all duration-300`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-[1.25rem] md:text-[1.875rem] font-semibold mb-1 mt-2">
                  {item.name}
                </h3>
                <p className="text-[1rem] md:text-[1.25rem] font-[300]">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Marquee Full Width */}
        <div className="w-full -mx-[calc((100vw-100%)/2)] mb-14 mt-10">
          <Marquee items={awards} textVariant="left" />
        </div>
        <div className="px-6 md:px-6 mb-20 ">
          <CircleIndicator
            filledIndices={[30, 34]}
            circleSize={32}
            gap={8}
            containerClassName="w-full flex justify-center items-center"
          />
        </div>
        <div className="container mx-auto">
          {/* <div className="flex justify-center mb-20 md:py-10">
            <div className="grid grid-cols-39 gap-[2px] md:gap-2 w-full max-w-[83.5rem]">
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
                    className={`w-full aspect-square rounded-full ${isActive
                      ? "bg-orange-primary"
                      : isHollow
                        ? "bg-black border border-gray-primary"
                        : "bg-gray-primary"
                      }`}
                  />
                );
              })}
            </div>
          </div> */}

          {/* Open Forum Section */}
          <div
            className="mb-2 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <h2 className="text-foreground text-3xl md:text-4xl font-bold text-center mb-12">
              Open Forum
            </h2>

            <div
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:px-[6rem]`}
            >
              {openForumEvents.map((event, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleOpenModal({
                      image: event.image,
                      title: event.event,
                      date: event.date,
                    })
                  }
                  className={`group relative overflow-hidden cursor-pointer animate-fade-in mx-auto mt-[1rem] w-full ${event.colSpan || ""}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative overflow-hidden mb-3">
                    <div
                      className={`${event.aspect || "aspect-[6/8]"} overflow-hidden transition-all duration-300`}
                    >
                      <img
                        src={event.image}
                        alt={event.event}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {event.badge && (
                      <div className="absolute top-2 right-2 text-primary text-xs">
                        {event.badge}
                      </div>
                    )}
                  </div>
                  <h3 className="text-[1.25rem] md:text-[1.875rem] font-[500]">
                    {event.date}
                  </h3>
                  <p className="text-[1rem] md:text-[1.25rem] font-poppins font-[300] mt-[-.2rem]">
                    {event.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <ItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedEvent}
      />
    </div>
  );
};

export default Events;

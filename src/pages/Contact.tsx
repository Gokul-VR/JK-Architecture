import officeBuilding from "@/assets/office-building.jpg";
import Navigation from "@/components/Navigation";
import map from "../assets/map.png";

import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import youtubeIcon from "@/assets/icons/youtube.svg";
import behanceIcon from "@/assets/icons/behance.svg";
import googlePlusIcon from "@/assets/icons/google-plus.svg";

const socialLinks = [
  { icon: facebookIcon, label: "Facebook" },
  { icon: instagramIcon, label: "Instagram" },
  { icon: linkedinIcon, label: "LinkedIn" },
  { icon: youtubeIcon, label: "YouTube" },
  { icon: behanceIcon, label: "Behance" },
  { icon: googlePlusIcon, label: "Google Plus" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Map and Address Section */}
      <section className="pt-20 md:pt-24 pb-6">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            {/* Map */}
            <div className="relative h-[400px] md:h-[500px] bg-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-50"></div>
              {/* Map-like pattern */}
              <img
                src={map}
                alt="Location Map"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Address Info */}
            <div className="relative lg:px-10 flex flex-col md:justify-between min-h-[400px] md:min-h-[500px]">
              {/* Vertical divider - visible only on larger screens */}
              <div className="hidden md:block absolute left-6 top-0 bottom-0 w-[2px] bg-white"></div>

              {/* Top section - Find us here and coordinates */}
              <div className="md:ml-2 mt-3 md:mt-0">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Find us here.
                </h1>
                <p className="text-orange-primary text-xl md:text-2xl font-light">
                  9.9674, 76.2969
                </p>
              </div>

              {/* Bottom section - Address details */}
              <div className="text-gray-400 space-y-2 text-base md:text-lg md:ml-2 mt-5 md:mt-0">
                <p>Address line 01</p>
                <p>Address line 02</p>
                <p>Address line 03</p>
                <p>Ernakulam, Kerala</p>
                <p className="pt-4 text-white font-normal">PINCODE</p>
              </div>
            </div>
          </div>

          {/* Career Section */}
          <div className="md:mt-20 relative overflow-hidden animate-fade-in" style={{ animationDelay: "200ms" }}>
            <img
              src={officeBuilding}
              alt="Office Building"
              className="w-full h-[590px] object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 p-6 md:p-14 flex flex-col justify-between">
              <div>
                <h2 className="text-foreground text-2xl md:text-4xl font-[500] mb-4">
                  Looking to work / intern with us?
                </h2>
                <p className="text mb-4 py-4 text-[1.25rem] md:text-[1.875rem] font-[300]">We are in the search for</p>
                <ul className="text-foreground space-y-2 text-[0.95rem] md:text-[1.25rem] font-[300] px-4">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Project Architect (x YOE)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Site supervisor (n YOE)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-foreground" />
                    Interns x3 (Min. 6 months)
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-foreground text-2xl md:text-4xl font-[500] max-w-3xl">
                  If you believe your expertise aligns with our vision, we invite you to connect with us here.
                </p>
              </div>
            </div>
          </div>


        </div >
        {/* Social Links */}
        <div className="mt-12 md:mt-10 flex flex-wrap justify-center gap-2 lg:gap-[3rem]">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href="#"
              className="w-20 h-20 md:w-28 md:h-28 lg:w-[12rem] lg:h-[12rem] rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform duration-300 flex-shrink-0"
              aria-label={social.label}
            >
              <img
                src={social.icon}
                alt={social.label}
                className="w-10 h-10 md:w-20 md:h-20 lg:w-[7rem] lg:h-[6rem]"
              />
            </a>
          ))}
        </div>
      </section >
    </div >
  );
};

export default Contact;
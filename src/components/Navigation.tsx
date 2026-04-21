import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/nav-logo.svg";
import gsap from "gsap";

interface SubLink {
  name: string;
  id: string;
}

interface NavLink {
  path: string;
  label: string;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { path: "/process", label: "Process" },
  {
    path: "/projects",
    label: "Projects",
    subLinks: [
      { name: "Residential", id: "residential" },
      { name: "Commercial", id: "commercial" },
      { name: "Apartment", id: "apartment" },
      { name: "Interior", id: "interior" },
      { name: "Hospitality", id: "hospitality" },
      { name: "Public", id: "public" },
    ],
  },
  { path: "/about", label: "About us" },
  { path: "/events", label: "Events" },
  { path: "/media", label: "Media" },
  { path: "/reviews", label: "Reviews" },
  { path: "/contact", label: "Contact Us" },
];

const DesktopNavItem = ({ link }: { link: NavLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubLinkClick = (id: string) => {
    if (location.pathname.startsWith("/projects")) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/projects#${id}`);
    }
    setIsHovered(false);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isHovered && dropdownRef.current) {
        gsap.to(dropdownRef.current, {
          opacity: 1,
          y: 0,
          pointerEvents: "auto",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.fromTo(
          ".sublink-item-container",
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.05,
            ease: "out",
          },
        );
      } else if (!isHovered && dropdownRef.current) {
        gsap.to(dropdownRef.current, {
          opacity: 0,
          y: -10,
          pointerEvents: "none",
          duration: 0.2,
          ease: "power2.in",
        });
      }
    }, dropdownRef);

    return () => ctx.revert();
  }, [isHovered]);

  if (link.subLinks) {
    return (
      <div
        className="relative flex items-center h-[30px] group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          to={link.path}
          className={`flex items-center gap-[8px] text-sm font-[400] transition-colors ${
            location.pathname.startsWith(link.path)
              ? "text-primary"
              : "text-foreground hover:text-primary"
          }`}
        >
          {link.label}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all duration-300 text-primary ${
              isHovered ? "rotate-180" : ""
            }`}
          >
            <path d="M6 9L1 4H11L6 9Z" fill="currentColor" />
          </svg>
        </Link>

        <div
          ref={dropdownRef}
          className="absolute top-full left-[-20px] opacity-0 pointer-events-none z-50 min-w-[200px]"
        >
          <div className="bg-black border border-primary flex flex-col">
            {link.subLinks.map((sub: SubLink, idx: number) => (
              <div
                key={sub.id}
                className="overflow-hidden sublink-item-container"
              >
                <button
                  onClick={() => handleSubLinkClick(sub.id)}
                  className={`sublink-item w-full text-left text-white hover:text-primary transition-colors py-[12px] px-5 text-[16px] ${
                    idx !== link.subLinks.length - 1
                      ? "border-b border-primary/50"
                      : ""
                  }`}
                >
                  {sub.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={link.path}
      className={`text-sm font-[400] transition-colors ${
        location.pathname === link.path
          ? "text-primary"
          : "text-foreground hover:text-primary"
      }`}
    >
      {link.label}
    </Link>
  );
};

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);

  useEffect(() => {
    const nav = navRef.current;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const scrollingDown = currentScrollY > lastScrollY.current;
      const scrollThreshold = 100;

      if (
        scrollingDown &&
        currentScrollY > scrollThreshold &&
        !isHidden.current
      ) {
        isHidden.current = true;
        gsap.to(nav, {
          yPercent: -100,
          duration: 0.4,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      } else if (!scrollingDown && isHidden.current) {
        isHidden.current = false;
        gsap.to(nav, {
          yPercent: 0,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm bwill-change-transform"
    >
      <div className="container mx-auto px-2 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-primary text-3xl font-bold italic cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src={Logo} alt="nav-logo" className="w-12 h-12" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <DesktopNavItem key={link.path} link={link} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

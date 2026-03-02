import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/nav-logo.svg";
import gsap from "gsap";

const navLinks = [
  { path: "/process", label: "Process" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About us" },
  { path: "/events", label: "Events" },
  { path: "/media", label: "Media" },
  { path: "/reviews", label: "Reviews" },
  { path: "/contact", label: "Contact Us" },
];

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

      // Determine direction
      const scrollingDown = currentScrollY > lastScrollY.current;
      // Define a small buffer so it doesn't hide immediately at the very top
      const scrollThreshold = 100;

      if (scrollingDown && currentScrollY > scrollThreshold && !isHidden.current) {
        // SCROLL DOWN: Hide
        isHidden.current = true;
        gsap.to(nav, {
          yPercent: -100,
          duration: 0.4,
          ease: "power2.inOut",
          overwrite: "auto"
        });
      } else if (!scrollingDown && isHidden.current) {
        // SCROLL UP: Show
        isHidden.current = false;
        gsap.to(nav, {
          yPercent: 0,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto"
        });
      }

      lastScrollY.current = currentScrollY;
    };

    // 'passive: true' helps browser performance during scroll
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      /* will-change-transform optimizes the GPU for the slide animation */
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm bwill-change-transform"
    >
      <div className="container mx-auto px-2 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-primary text-3xl font-bold italic cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src={Logo} alt="nav-logo" className="w-10 h-10" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-[500] transition-colors ${location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                  className={`text-base font-medium transition-colors ${location.pathname === link.path
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
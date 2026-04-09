import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document
      .getElementById("lead-form")
      ?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Why Choose", href: "#why-choose" },
    { label: "Program Details", href: "#program-details" },
    { label: "Courses", href: "#courses" },
    { label: "University", href: "#university-overview" },
    { label: "Placements", href: "#placements" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Admission", href: "#admission-process" },
    { label: "FAQs", href: "#faqs" },
    { label: "Videos", href: "#videos" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top info bar - desktop only */}
      <div className="hidden lg:block bg-dark text-white text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex gap-6">
            <a
              href="tel:+916387236091"
              className="hover:text-secondary transition-colors"
            >
              📞 +91-6387236091
            </a>
            <a
              href="mailto:enquiry@msds.ac.in"
              className="hover:text-secondary transition-colors"
            >
              📧 enquiry@msds.ac.in
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/majorsdsuniversity"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/msds.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="/">
            <img
              src="/logo.webp"
              alt="MSDS University Logo"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-dark hover:text-primary font-medium text-[13px] xl:text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={scrollToForm}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-opacity-90 transition-all"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-text-dark transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-text-dark transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-text-dark transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-2 text-text-dark font-medium"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={scrollToForm}
                  className="bg-primary text-primary-foreground py-3 rounded-full font-semibold mt-2"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { theme } = useTheme();

  // Consistent link source mapping for desktop and mobile menus
  const navLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  // 1. High Performance Scroll Spy with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Triggers active state when section hits viewport center
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe hero explicitly + all links
    const heroEl = document.getElementById("hero");
    if (heroEl) observer.observe(heroEl);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    // Handle scroll trigger background threshold
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 2. Smooth scrolling handler
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${targetId}`);
    }
  };

  // Theme checking logic matching Tailwind v4 configuration profiles
  const isDark = theme === "dark";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
          scrolled
            ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo links back to Hero */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "hero")}
            className="text-2xl font-display font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            Kroy<span className="text-indigo-600 dark:text-indigo-400">soft</span>
          </a>

          {/* Desktop Menu - Floating Pill Style with Framer Layout Animations */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 p-1.5 rounded-full border border-zinc-200/40 dark:border-zinc-800/40 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-white dark:bg-zinc-800 shadow-sm rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Element - Desktop Only */}
          <div className="hidden md:block">
            <a
              href="#pricing"
              onClick={(e) => handleScrollTo(e, "pricing")}
              className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Rounded Circle Trigger Button on Right */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="md:hidden w-11 h-11 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center text-zinc-800 dark:text-zinc-200 focus:outline-none transition-colors"
          >
            {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white dark:bg-zinc-950 pt-32 px-6 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="flex items-center justify-between py-3 border-b border-zinc-100 dark:border-zinc-900/60 text-2xl font-display font-medium text-zinc-800 dark:text-zinc-200"
                  >
                    <span className={isActive ? "text-indigo-600 dark:text-indigo-400 font-bold" : ""}>
                      {link.name}
                    </span>
                    {isActive ? (
                      <ChevronUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Bottom Form Factor Content for Mobile Menu Frame */}
            <div className="flex flex-col gap-4">
              <a
                href="#pricing"
                onClick={(e) => handleScrollTo(e, "pricing")}
                className="w-full py-4 text-center bg-indigo-600 text-white rounded-xl font-medium text-lg shadow-lg shadow-indigo-600/10"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
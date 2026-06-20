import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Pricing", id: "pricing" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
    { name: "Team", id: "team" },
    { name: "Career", id: "career" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
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

    const heroEl = document.getElementById("hero");
    if (heroEl) observer.observe(heroEl);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${targetId}`);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 dark:bg-[#0b0f19]/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "hero")}
            className="text-2xl font-bold tracking-tight text-[#0f172a] dark:text-white"
          >
            Kroy<span className="text-indigo-600 dark:text-indigo-400">soft</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-white/5 p-1.5 rounded-full border border-slate-200/40 dark:border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-[#0f172a] dark:text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-[#0f172a] dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-white dark:bg-white/10 shadow-sm rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:block">
            <a
              href="#pricing"
              onClick={(e) => handleScrollTo(e, "pricing")}
              className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-[#0f172a] px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle Trigger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="md:hidden w-11 h-11 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0f19] flex items-center justify-center text-[#0f172a] dark:text-white focus:outline-none transition-colors"
          >
            {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0b0f19] pt-32 px-6 pb-12 flex flex-col justify-between md:hidden"
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
                    className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-white/5 text-2xl font-medium text-[#0f172a] dark:text-white"
                  >
                    <span className={isActive ? "text-indigo-600 dark:text-indigo-400 font-bold" : ""}>
                      {link.name}
                    </span>
                    {isActive ? (
                      <ChevronUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </motion.a>
                );
              })}
            </div>

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
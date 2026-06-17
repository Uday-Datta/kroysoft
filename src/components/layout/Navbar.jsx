import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-wide">
          Kroysoft
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <button className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-sm">
          Get Started
        </button>

      </div>
    </header>
  );
}
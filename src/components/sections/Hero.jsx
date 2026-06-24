import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParallaxBackground from "../ui/ParallaxBackground";

export default function Hero() {
  // --- Typing Effect Logic ---
  const phrases = [
    "Powerful Software.",
    "Custom Ecosystems.",
    "Scalable Platforms.",
    "Digital Momentum."
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  // Speed adjustments for typing vs deleting
  const typingSpeed = isDeleting ? 40 : 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentPhrase = phrases[loopNum % phrases.length];

      if (!isDeleting) {
        // Typing forward
        setText(currentPhrase.substring(0, text.length + 1));
        // Pause at the end of the word
        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        setText(currentPhrase.substring(0, text.length - 1));
        // Move to next word when deleted
        if (text === "") {
          setIsDeleting(false);
          setLoopNum((prev) => prev + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      <ParallaxBackground />

      {/* Glow Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-3xl rounded-full" />
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Column: Typography & CTAs */}
        <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-indigo-400 font-medium mb-4 tracking-widest text-sm uppercase"
          >
            Kroysoft Technologies
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight min-h-[140px] md:min-h-[160px] lg:min-h-[180px]"
          >
            Beautiful Websites.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 dark:from-white dark:to-slate-300">
              {text}
            </span>
            {/* Blinking Cursor */}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-[4px] h-[0.9em] bg-indigo-500 ml-2 align-middle translate-y-[-4px]"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-slate-400 max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed"
          >
            We create modern websites, e-commerce solutions and custom
            software that help businesses grow faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 text-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-lg shadow-indigo-500/25"
            >
              Get Started
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 text-center rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-white/5 transition-all text-white"
            >
              View Services
            </a>
          </motion.div>
        </div>

        {/* Right Column: Modern Tech Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 w-full max-w-2xl lg:max-w-none relative"
        >
          {/* Decorative Image Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-indigo-500/20 group">
            {/* Overlay Gradient for readability/styling */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0f19]/80 via-transparent to-transparent z-10 pointer-events-none" />
            
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="Modern Software Engineering"
              className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Floating Glassmorphism Badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl flex items-center gap-4 shadow-xl">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="text-xs text-slate-300 font-mono">System Status</p>
                <p className="text-sm font-semibold text-white">Deploying to Edge</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
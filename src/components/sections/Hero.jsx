import { motion } from "framer-motion";
import ParallaxBackground from "../ui/ParallaxBackground";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

        <ParallaxBackground />
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-indigo-400 font-medium mb-4"
        >
          KROYSOFT TECHNOLOGIES
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Beautiful Websites.
          <br />
          Powerful Software.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-slate-400 max-w-2xl mx-auto text-lg"
        >
          We create modern websites, e-commerce solutions and custom
          software that help businesses grow faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="#pricing"
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
         >
            Get Started
          </a>

          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 transition"
          >
            View Services
          </a>
        </motion.div>

      </div>
    </section>
  );
}
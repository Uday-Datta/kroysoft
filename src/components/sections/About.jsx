import { motion } from "framer-motion";
import { Terminal, Cpu, Globe2, Layers, ArrowUpRight } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <section
      id="about"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      {/* Premium Ambient Background Mesh */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold font-mono tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full border border-indigo-200/30 dark:border-indigo-800/30"
          >
            Our Architecture
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            Engineering digital momentum.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed"
          >
            Kroysoft operates at the convergence of modular software architecture and high-converting visual design, turning foundational ideas into enterprise assets.
          </motion.p>
        </div>

        {/* Asymmetric Bento Grid System */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: Main Proposition (Spans 2 columns on desktop) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group md:col-span-2 relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 p-8 flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
            
            <div>
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm text-indigo-600 dark:text-indigo-400 mb-6">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
                Next-Gen Custom Ecosystems
              </h3>
              <p className="mt-4 text-sm md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans max-w-xl">
                We craft performant custom products, headless e-commerce modules, robust ERP frameworks, and hyper-scalable web architectures tailored strictly to your operational metrics.
              </p>
            </div>

            <div className="mt-8 flex gap-6 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-6">
              <div>
                <span className="block text-xl font-bold font-display text-zinc-900 dark:text-white">Full-Stack</span>
                <span className="text-xs text-zinc-400 font-mono">Modern Frameworks</span>
              </div>
              <div className="border-l border-zinc-200 dark:border-zinc-800 pl-6">
                <span className="block text-xl font-bold font-display text-zinc-900 dark:text-white">Cloud-Native</span>
                <span className="text-xs text-zinc-400 font-mono">Edge-Optimized</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Interactive Terminal Preview */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-950 dark:bg-black border border-zinc-800 p-6 flex flex-col justify-between min-h-[320px]"
          >
            {/* Top Bar Decoration */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-500">bash</span>
            </div>

            {/* Terminal Window Output Code */}
            <div className="flex-grow font-mono text-xs text-zinc-400 space-y-2 mt-2 select-none">
              <p className="text-zinc-600">$ npx create-kroysoft-app</p>
              <p className="text-emerald-400">✓ Compiling deployment packages...</p>
              <p className="text-indigo-400">⚡ Global Edge routing active [100%]</p>
              <p className="text-zinc-500">// Syncing multi-tenant databases</p>
              <p className="text-white">Status: Ready for production</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-display font-semibold text-white tracking-tight">
                Developer-First Focus
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                Optimized execution loops for clean operations.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Modular Stack Infrastructure */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 p-6 flex flex-col justify-between min-h-[280px]"
          >
            <div>
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm text-indigo-600 dark:text-indigo-400 mb-4">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-display font-bold tracking-tight text-zinc-900 dark:text-white">
                Modular Integration
              </h3>
              <p className="mt-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                Say goodbye to monolithic bottlenecks. We deploy decoupled structures that adapt instantly as your transactional traffic expands.
              </p>
            </div>
            
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold group-hover:underline cursor-pointer">
              Explore Core Tech <ArrowUpRight className="w-3 h-3" />
            </span>
          </motion.div>

          {/* Card 4: Global Availability (Spans 2 columns on desktop) */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group md:col-span-2 relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 p-6 flex flex-col justify-between min-h-[280px]"
          >
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-zinc-200/40 dark:bg-zinc-800/40 rounded-full flex items-center justify-center border border-zinc-300/30 dark:border-zinc-700/30 opacity-60 group-hover:scale-105 transition-transform duration-500">
              <Globe2 className="w-24 h-24 text-zinc-300 dark:text-zinc-700" />
            </div>

            <div className="max-w-md">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm text-indigo-600 dark:text-indigo-400 mb-4">
                <Globe2 className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-display font-bold tracking-tight text-zinc-900 dark:text-white">
                Enterprise Execution Without Borders
              </h3>
              <p className="mt-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                Our code deployments target globally distributed servers natively, providing your applications sub-millisecond data execution states anywhere on earth.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-400">
                All edge regions operational
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
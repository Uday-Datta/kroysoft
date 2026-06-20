import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Aura Analytics Engine',
    category: 'Data Infrastructure',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'GraphQL', 'Rust Edge'],
  },
  {
    id: 2,
    title: 'Vesper Financial Node',
    category: 'Decentralized Core',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['Web3', 'Tailwind v4', 'Go Systems'],
  },
  {
    id: 3,
    title: 'Krypton Workspace Suite',
    category: 'Enterprise SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Next.js', 'Framer Motion', 'Redis'],
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-white dark:bg-zinc-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-full">
              Case Studies
            </span>
            <h2 className="mt-4 text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Engineered for Production
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-base text-zinc-500 dark:text-zinc-400 font-sans">
            Explore premium custom microservices, user interfaces, and technical workflows built for industry leading platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Frame */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-start justify-between mt-2">
                    <h3 className="text-xl font-display font-semibold text-zinc-900 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <div className="p-2 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                    </div>
                  </div>
                </div>

                {/* Tags mapping */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
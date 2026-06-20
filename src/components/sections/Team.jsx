import { motion } from "framer-motion";
import { teamMembers } from "../../data/team";

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-24 px-6 bg-[#0b0f19] text-white overflow-hidden border-t border-white/5"
    >
      {/* Background Subtle Blurs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our Team
        </h2>
        <p className="text-slate-400 mt-4">
          The builders, architects, and designers turning complex ideas into high-performance web assets.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Glow Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Team Card */}
            <div className="relative p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-indigo-500/50 transition duration-300 h-full flex flex-col">
              
              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Micro Hover Social Reveal using pure SVGs */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    {/* LinkedIn SVG */}
                    <a href={member.linkedin} className="p-2 bg-white/10 hover:bg-indigo-600 rounded-lg transition-colors flex items-center justify-center" aria-label="LinkedIn">
                      <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    {/* GitHub SVG */}
                    <a href={member.github} className="p-2 bg-white/10 hover:bg-indigo-600 rounded-lg transition-colors flex items-center justify-center" aria-label="GitHub">
                      <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Context */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 uppercase font-semibold tracking-wider mt-1">
                    {member.role}
                  </p>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
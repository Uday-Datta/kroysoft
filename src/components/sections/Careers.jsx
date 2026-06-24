import { motion } from "framer-motion";
import { openPositions } from "../../data/careers";

export default function Careers() {
  return (
    <section
      id="careers"
      className="relative py-24 px-6 bg-[#0b0f19] text-white overflow-hidden border-t border-white/5"
    >
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-bold font-mono tracking-widest text-indigo-400 uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
          We Are Hiring
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Build the future with Kroysoft
        </h2>
        <p className="text-slate-400 mt-4">
          We’re looking for collaborative engineers and adaptive strategists eager to engineer premium digital products.
        </p>
      </div>

      {/* Jobs Listing Stack */}
      <div className="max-w-4xl mx-auto space-y-4">
        {openPositions.length === 0 ? (
          <p className="text-center text-slate-500 text-sm italic py-8">
            No active positions at the moment. Check back soon!
          </p>
        ) : (
          openPositions.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-indigo-500/40 transition duration-300 gap-6"
            >
              {/* Job Metadata Left Block */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono font-medium text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2.5 py-0.5 rounded-md">
                    {job.department}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-md">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.experience}</span>
                </div>
              </div>

              {/* Action Redirect Button */}
              <div className="flex items-center">
                <a
                  href={job.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 bg-white hover:bg-indigo-600 text-[#0f172a] hover:text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm"
                >
                  Apply on LinkedIn
                  <svg 
                    className="w-4 h-4 fill-current" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
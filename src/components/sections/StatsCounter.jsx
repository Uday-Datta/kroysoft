import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

// Sub-component for the counting animation
function Counter({ value, direction = 1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Create a spring animation for the number
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function StatsCounter() {
  const stats = [
    { value: 100, suffix: "+", label: "Projects Completed", desc: "WordPress, Laravel & ERPs", glow: "group-hover:bg-indigo-500/10" },
    { value: 25, suffix: "+", label: "Global Clients", desc: "Small businesses to large networks", glow: "group-hover:bg-purple-500/10" },
    { value: 24, suffix: "/7", label: "Dedicated Support", desc: "Continuous system monitoring", glow: "group-hover:bg-emerald-500/10" },
  ];

  return (
    <section className="relative bg-[#0b0f19] px-6 pb-12 pt-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-md p-6 overflow-hidden transition-all duration-300 hover:border-indigo-500/30"
          >
            <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-transparent blur-2xl transition-all duration-500 ${stat.glow}`} />

            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <h3 className="text-base font-bold text-slate-200 mt-2 tracking-wide group-hover:text-indigo-400 transition-colors">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">{stat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
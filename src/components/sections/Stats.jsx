import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimate, useInView } from 'framer-motion';

const statsData = [
  { id: 1, value: 99, suffix: '%', label: 'System Uptime Ensure' },
  { id: 2, value: 15, suffix: 'M+', label: 'API Requests Handled Daily' },
  { id: 3, value: 250, suffix: 'k', label: 'Active Edge Users' },
  { id: 4, value: 0.12, suffix: 's', label: 'Average Database Latency', decimals: 2 },
];

function Counter({ value, direction = "up", suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => latest.toFixed(decimals));
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motion.animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest + suffix;
      }
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-900/30 border-y border-zinc-200/50 dark:border-zinc-800/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="flex flex-col items-start space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-6"
            >
              <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-zinc-900 dark:text-white">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
              </h3>
              <p className="text-sm md:text-base font-sans text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
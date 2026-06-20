import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Kroysoft
        </motion.h2>

        <p className="mt-8 text-slate-400 text-lg leading-relaxed">
          Kroysoft helps startups and businesses build
          modern websites, e-commerce solutions,
          ERP systems and custom software products.
        </p>

      </div>
    </section>
  );
}
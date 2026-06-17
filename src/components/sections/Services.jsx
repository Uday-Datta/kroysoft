import { motion } from "framer-motion";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-[#0b0f19] text-white"
    >
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our Services
        </h2>
        <p className="text-slate-400 mt-4">
          We build digital solutions that help your business grow faster.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Card */}
            <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-indigo-500/50 transition duration-300 h-full">

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-slate-400 text-sm">
                {service.description}
              </p>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
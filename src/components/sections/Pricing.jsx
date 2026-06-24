import { motion } from "framer-motion";
import { pricingPlans } from "../../data/pricing";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-28 px-6 bg-[#0b0f19] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple Pricing
          </h2>

          <p className="text-slate-400 mt-4">
            Transparent pricing with no hidden costs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className={`relative rounded-3xl p-8 border backdrop-blur-md transition-all duration-300 hover:-translate-y-2
              ${
                plan.popular
                  ? "border-indigo-500 bg-white/10"
                  : "border-white/10 bg-white/5"
              }`}
            >

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="text-slate-400 mt-2 min-h-[48px]">
                {plan.description}
              </p>

              {/* Updated BDT Currency Layout */}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-400">৳</span>
                <div className="text-5xl font-bold">
                  {plan.price}
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-slate-300 flex items-center gap-2"
                  >
                    <span className="text-indigo-400">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 py-3 rounded-xl font-medium transition
                ${
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                Get Started
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
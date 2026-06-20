import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a project take?",
    a: "Usually 1 to 4 weeks depending on complexity.",
  },
  {
    q: "Do you provide support?",
    a: "Yes, support is included in most projects.",
  },
  {
    q: "Can you build custom ERP software?",
    a: "Yes, custom ERP, LMS and web applications are available.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="py-28 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={faq.q}
            className="mb-4 border border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <span>{faq.q}</span>

              <ChevronDown
                className={`transition-transform ${
                  open === index
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {open === index && (
              <div className="px-6 pb-6 text-slate-400">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
import { useRef } from "react";
import { motion } from "framer-motion";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Scrolls exactly one card width + the gap (approx 444px on desktop, 344px on mobile)
      const scrollAmount = window.innerWidth > 768 ? 444 : 344;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0b0f19] text-white overflow-hidden border-t border-white/5 relative">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Area with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Client Success Stories</h2>
            <p className="text-slate-400 mt-4 text-lg">
              Explore the platforms, automated systems, and websites we've engineered for our partners.
            </p>
          </motion.div>

          {/* Custom Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500 text-white transition-all shadow-sm focus:outline-none"
              aria-label="Scroll Left"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500 text-white transition-all shadow-sm focus:outline-none"
              aria-label="Scroll Right"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrolling Carousel Container */}
        {/* [&::-webkit-scrollbar]:hidden safely hides the scrollbar ONLY for this container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 scroll-smooth [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: "none", /* Firefox */
            msOverflowStyle: "none", /* IE and Edge */
          }}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              // Changed from whileInView to animate so cards don't stay invisible when scrolling
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-[320px] md:w-[420px] snap-center shrink-0 flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-indigo-500/30 transition duration-300 group"
            >
              <div>
                {/* Quote Icon */}
                <svg className="w-8 h-8 text-indigo-500/50 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  "{item.content}"
                </p>
              </div>

              {/* Bottom Section: Profile & Link */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-white font-bold">{item.name}</h4>
                    <p className="text-sm text-slate-400">{item.role}, {item.company}</p>
                  </div>
                </div>

                {/* Project Link Button */}
                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors flex-shrink-0"
                  title={`View ${item.projectName}`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"/>
                  </svg>
                </a>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
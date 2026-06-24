import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";

export default function Portfolio() {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="portfolio"
      className="py-24 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              Featured Solutions
            </h2>

            <p className="text-slate-400 mt-2">
              Selected work and digital solutions.
            </p>
          </div>

          <div className="flex gap-3">

            <button
              onClick={scrollLeft}
              className="
                w-12 h-12
                rounded-full
                border
                border-white/10
                hover:border-indigo-500
                transition
              "
            >
              <ArrowLeft className="mx-auto" />
            </button>

            <button
              onClick={scrollRight}
              className="
                w-12 h-12
                rounded-full
                border
                border-white/10
                hover:border-indigo-500
                transition
              "
            >
              <ArrowRight className="mx-auto" />
            </button>

          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            pb-4
            no-scrollbar
          "
        >

          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="
                min-w-[300px]
                md:min-w-[360px]
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                hover:-translate-y-2
                transition
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-52
                  object-cover
                "
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-2">
                  {project.description}
                </p>

                <span className="inline-block mt-4 text-indigo-400">
                  View Project →
                </span>

              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
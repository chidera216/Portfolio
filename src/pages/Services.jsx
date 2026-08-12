import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Building responsive websites and web applications that are fast, reliable, and designed around real user needs.",
    tags: ["Responsive", "Modern", "Scalable"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Creating clean and interactive interfaces with React and JavaScript, with attention to usability, performance, and detail.",
    tags: ["React", "JavaScript", "UI"],
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "Building the server-side logic, APIs, authentication, and data systems that power modern web applications.",
    tags: ["Node.js", "Express", "APIs"],
  },
];

const Services = () => {
  const serviceRefs = useRef([]);
  const [visibleServices, setVisibleServices] = useState([]);

  useEffect(() => {
    const observers = serviceRefs.current.map((service) => {
      if (!service) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const index = Number(service.dataset.index);

            setVisibleServices((prev) => {
              if (prev.includes(index)) {
                return prev;
              }

              return [...prev, index];
            });

            observer.disconnect();
          }
        },
        {
          threshold: 0.2,
        },
      );

      observer.observe(service);

      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        observer?.disconnect();
      });
    };
  }, []);

  return (
    <section
      id="services"
      className="bg-[#f7f7f5] px-6 py-24 text-[#111111] sm:px-10 md:px-16 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 border-b border-black/10 pb-16 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4A00]">
              Services
            </p>

            <h2 className="max-w-3xl text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              WHAT I
              <br />
              <span className="text-black/20">CAN BUILD.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-black/55 md:ml-auto">
            From the interface people see to the systems working behind it, I
            build digital experiences with both design and functionality in
            mind.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16">
          {services.map((service, index) => {
            const isVisible = visibleServices.includes(index);

            return (
              <article
                key={service.number}
                ref={(element) => {
                  serviceRefs.current[index] = element;
                }}
                data-index={index}
                className={`group relative border-t border-black/10 py-10 last:border-b transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                      ? "-translate-x-24 opacity-0"
                      : "translate-x-24 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="grid gap-8 md:grid-cols-[100px_1fr_1fr] md:items-start">
                  {/* Number */}
                  <div className="relative">
                    <span className="text-sm font-bold text-black/25 transition-colors duration-500 group-hover:text-[#FF4A00]">
                      {service.number}
                    </span>

                    <span className="absolute left-0 top-7 h-px w-0 bg-[#FF4A00] transition-all duration-500 group-hover:w-10" />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight transition-all duration-500 group-hover:translate-x-2 sm:text-4xl md:text-5xl">
                      {service.title}
                    </h3>

                    <div className="mt-4 h-px w-0 bg-[#111111] transition-all duration-700 group-hover:w-full" />
                  </div>

                  {/* Description */}
                  <div className="md:pl-8">
                    <p className="max-w-md text-sm leading-relaxed text-black/50 md:text-base">
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 px-4 py-2 text-xs font-medium text-black/50 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#FF4A00]/40 group-hover:text-[#FF4A00]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-0 top-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:border-[#FF4A00] group-hover:bg-[#FF4A00]">
                      <span className="text-xl transition-colors duration-500 group-hover:text-white">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 flex flex-col gap-6 border-t border-black/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">
            Good development isn't just about writing code.
            <span className="text-black/30">
              {" "}
              It's about solving the right problem.
            </span>
          </p>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#111111] text-xl text-white">
            ↗
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

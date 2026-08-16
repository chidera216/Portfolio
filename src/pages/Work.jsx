const projects = [
  {
    number: "01",
    title: "Focusly",
    description:
      "A productivity application designed to help users manage focused work sessions, tasks, breaks, and productivity statistics.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    type: "Under Development",
  },
];

const Works = () => {
  return (
    <section
      id="works"
      className="bg-[#111111] px-6 py-24 text-white sm:px-10 md:px-16 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-8 border-b border-white/10 pb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4A00]">
              Selected Works
            </p>

            <h2 className="max-w-4xl text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              THINGS
              <br />
              <span className="text-white/20">I'VE BUILT.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-white/50 md:text-right">
            A collection of projects built to solve problems, explore ideas, and
            turn concepts into working digital products.
          </p>
        </div>

        {/* Projects */}
        <div>
          {projects.map((project) => (
            <article
              key={project.number}
              className="group border-t border-white/10 py-12 transition-colors duration-500 last:border-b hover:border-[#FF4A00]/50 md:py-16"
            >
              <div className="grid gap-10 md:grid-cols-[80px_1fr_1fr] md:items-start lg:gap-16">
                {/* Number */}
                <div>
                  <span className="text-sm font-bold text-white/25">
                    {project.number}
                  </span>
                </div>

                {/* Project Info */}
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF4A00]">
                    {project.type}
                  </p>

                  <h3 className="text-4xl font-extrabold tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl md:text-6xl">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <p className="max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/60 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* View Project */}
                  <button className="mt-8 inline-flex items-center gap-3 text-sm font-semibold transition-all duration-300 hover:gap-5 hover:text-[#FF4A00]">
                    <a href="https://focusly-rho-livid.vercel.app/">
                      View Project
                    </a>
                    <span className="text-lg">↗</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
              More coming
            </p>

            <p className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              I&apos;m always building, experimenting and improving.
            </p>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FF4A00] text-xl text-white transition-transform duration-500 hover:rotate-45">
            ↗
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

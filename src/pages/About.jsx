import { useEffect, useRef, useState } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white px-6 py-24 text-[#111111] sm:px-10 md:px-16 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {/* Left Header */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-24 opacity-0"
            }`}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4A00]">
              About Me
            </p>

            <h2 className="max-w-3xl text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              I BUILD WITH
              <br />
              <span className="text-gray-300">PURPOSE.</span>
            </h2>
          </div>

          {/* Right Description */}
          <p
            className={`max-w-sm text-sm leading-relaxed text-gray-500 transition-all delay-200 duration-1000 ease-out md:text-base ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-24 opacity-0"
            }`}
          >
            I'm a web developer focused on creating modern, responsive and
            purposeful digital experiences.
          </p>
        </div>

        {/* About Content */}
        <div className="grid gap-12 border-t border-gray-200 pt-12 md:grid-cols-3">
          {/* Main Text */}
          <div
            className={`md:col-span-2 transition-all delay-300 duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <p className="max-w-3xl text-2xl font-medium leading-relaxed sm:text-3xl md:text-4xl">
              I enjoy turning ideas into functional digital products that are
              simple to use, visually strong and built to solve real problems.
            </p>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div
              className={`transition-all delay-500 duration-700 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0"
              }`}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Focus
              </p>

              <p className="text-lg font-semibold">Web Development</p>
            </div>

            <div
              className={`transition-all delay-700 duration-700 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0"
              }`}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Stack
              </p>

              <p className="text-lg font-semibold">
                React · JavaScript · Node.js
              </p>
            </div>

            <div
              className={`transition-all delay-[900ms] duration-700 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0"
              }`}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Approach
              </p>

              <p className="text-lg font-semibold">Learn · Build · Improve</p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}
        <div
          className={`mt-20 border-t border-gray-200 pt-10 transition-all delay-[1100ms] duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
            Currently building
          </p>

          <p className="mt-3 text-2xl font-bold sm:text-3xl">
            Digital experiences that make ideas real.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

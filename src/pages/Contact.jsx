const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#f7f7f5] px-6 py-24 text-[#111111] sm:px-10 md:px-16 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="border-b border-black/10 pb-16">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#FF4A00]">
            Contact
          </p>

          <h2 className="max-w-5xl text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl md:text-7xl lg:text-9xl">
            LET&apos;S
            <br />
            <span className="text-black/20">WORK TOGETHER.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 pt-12 md:grid-cols-2 md:items-end">
          {/* Text */}
          <div>
            <p className="max-w-xl text-xl font-medium leading-relaxed sm:text-2xl md:text-3xl">
              Have an idea, project, or opportunity?
              <span className="text-black/30">
                {" "}
                Let&apos;s turn it into something meaningful.
              </span>
            </p>
          </div>

          {/* Contact Links */}
          <div className="md:ml-auto md:w-full md:max-w-md">
            <div className="border-t border-black/10">
              <a
                href="mailto:ch1h23.y9@gmail.com"
                className="group flex items-center justify-between border-b border-black/10 py-6 transition-colors duration-300 hover:text-[#FF4A00]"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
                    Email
                  </p>

                  <p className="text-lg font-semibold sm:text-xl">
                    ch1h23.y9@gmail.com
                  </p>
                </div>

                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="#"
                className="group flex items-center justify-between border-b border-black/10 py-6 transition-colors duration-300 hover:text-[#FF4A00]"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
                    GitHub
                  </p>

                  <p className="text-lg font-semibold sm:text-xl">
                    View my GitHub
                  </p>
                </div>

                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="#"
                className="group flex items-center justify-between border-b border-black/10 py-6 transition-colors duration-300 hover:text-[#FF4A00]"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
                    LinkedIn
                  </p>

                  <p className="text-lg font-semibold sm:text-xl">
                    Connect with me
                  </p>
                </div>

                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-20 border-t border-black/10 pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/30">
            Open to opportunities
          </p>

          <p className="mt-3 text-2xl font-bold sm:text-3xl">
            Let&apos;s build something great.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

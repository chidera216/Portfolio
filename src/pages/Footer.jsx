import { ArrowUpRight, ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] px-6 py-14 text-white sm:px-10 md:px-16 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-16 border-b border-white/10 pb-14 md:grid-cols-2">
          {/* Brand */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF4A00]">
              Web Developer
            </p>

            <h2 className="text-5xl font-black leading-none tracking-[-0.05em] sm:text-6xl md:text-7xl">
              CHI<span className="text-[#FF4A00]">DEX</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/40">
              Building modern digital experiences that turn ideas into
              meaningful products.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Navigation */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                Navigate
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="#about"
                  className="group flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  About
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>

                <a
                  href="#services"
                  className="group flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Services
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>

                <a
                  href="#works"
                  className="group flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Works
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>

                <a
                  href="#contact"
                  className="group flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Contact
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                Connect
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://github.com/chidera216"
                  className="group flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <FaGithub
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/chideraemmanuel/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BbAkU5hoURcCCm%2FLqgFNxXA%3D%3D"
                  className="group flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <FaLinkedin
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  LinkedIn
                </a>

                <a
                  href="mailto:ch1h23.y9@gmail.com"
                  className="group flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                >
                  <Mail
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  Email
                </a>
              </div>
            </div>

            {/* Back to top */}
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                Explore
              </p>

              <a
                href="#home"
                className="group inline-flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-[#FF4A00]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#FF4A00] group-hover:-translate-y-1">
                  <ArrowUp size={15} />
                </span>
                Back to top
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 pt-8 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Chidex. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Designed & built with
            <span className="text-[#FF4A00]">React</span>&
            <span className="text-[#FF4A00]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

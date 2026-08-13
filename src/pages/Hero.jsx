import Navbar from "../components/Navbar";
import HeroImage from "../assets/hero.png";
import Button from "../components/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
// import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#FF4A00_0%,#C82A00_100%)]"
    >
      <Navbar />

      <div className="relative mx-auto min-h-[calc(100vh-80px)] max-w-7xl px-6 mt-10 sm:px-10 md:px-10 lg:px-10">
        {/* Left Content */}
        <div className="relative z-10 pt-12 text-center md:absolute md:left-16 md:top-1/2 md:w-[30%] md:-translate-y-1/2 md:pt-0 md:text-left lg:left-20">
          <p className="mb-4 text-sm font-medium text-white/80 md:text-base">
            Web Developer
          </p>

          <h1 className="text-7xl font-extrabold leading-[0.85] tracking-tight text-white sm:text-8xl md:text-6xl lg:text-8xl xl:text-9xl">
            CHI<span className="text-black">DEX</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-white/80 md:mx-0 md:text-base">
            I build modern digital experiences that turn ideas into real
            products.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button
              text="Explore My Work"
              onClick={() => {
                document.getElementById("works")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="rounded-full bg-[#111111] text-sm font-semibold tracking-wide text-white shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition duration-300 hover:bg-white hover:text-[#111111]"
            />

            <Button
              text="Let's Connect"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="rounded-full bg-white text-sm font-semibold tracking-wide text-[#111111] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] transition duration-300 hover:bg-[#111111] hover:text-white"
            />
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 md:justify-start">
            <a
              href="https://github.com/chidera216"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#111111]"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/chideraemmanuel/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BbAkU5hoURcCCm%2FLqgFNxXA%3D%3D"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#111111]"
            >
              <FaLinkedin size={19} />
            </a>

            <a
              href="mailto:ch1h23.y9@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#111111]"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative mx-auto mt-12 w-[65%] sm:w-[55%] md:absolute md:left-1/2 md:top-8 md:z-20 md:mt-0 md:w-[40%] md:-translate-x-1/2 lg:top-6 lg:w-[36%] xl:w-[34%]">
          <img
            src={HeroImage}
            alt="Chidex"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="relative hidden md:absolute md:right-16 md:top-1/2 md:z-10 md:block md:w-[27%] md:-translate-y-1/2 md:text-right lg:right-20">
          <p className="text-sm leading-relaxed text-white/80 md:text-base">
            I create clean, responsive and purposeful web experiences for people
            and businesses.
          </p>

          <h2 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            BUILD.
            <br />
            CREATE.
            <br />
            SHIP.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

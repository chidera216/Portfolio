import Navbar from "../components/Navbar";
import HeroImage from "../assets/hero.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="relative min-h-screen md:min-h-[540px] lg:min-h-screen overflow-hidden md:overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#FF4A00_0%,#C82A00_100%)]">
      <Navbar />

      {/* Left Content */}
      <div className="relative mx-6 mt-10 w-auto text-center sm:mx-10 md:absolute md:left-6 md:top-1/2 md:mx-0 md:mt-0 md:-translate-y-1/2 md:text-left md:z-10 md:w-[28%] lg:left-12 lg:w-[30%]">
        <p className="mb-4 text-sm font-medium text-white/80 md:text-base">
          Web Developer
        </p>

        <h1 className="text-8xl sm:text-7xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.85] tracking-tight text-white">
          CHI<span className="text-black">DEX</span>
        </h1>

        <p className="mt-5 mx-auto max-w-xs text-sm leading-relaxed text-white/80 md:mx-0 md:text-base">
          I build modern digital experiences that turn ideas into real products.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
          <Button
            text="Explore My Work"
            className="bg-[#111111] text-white rounded-full text-sm font-semibold tracking-wide shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] hover:bg-white hover:text-[#111111] transition duration-300"
          />

          <Button
            text="Let's Connect"
            className="bg-white text-[#111111] rounded-full text-sm font-semibold tracking-wide shadow-[0_15px_30px_-5px_rgba(0,0,0,0.3)] hover:bg-[#111111] hover:text-white transition duration-300"
          />
        </div>
      </div>

      {/* Center Image */}
      <div className="relative mx-auto mt-15 w-[65%] sm:w-[55%] md:absolute md:left-1/2 md:top-8 md:mx-0 md:mt-0 md:-translate-x-1/2 md:z-20 md:w-[40%] lg:top-6 lg:w-[36%] xl:w-[34%]">
        <img
          src={HeroImage}
          alt="Chidex"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="relative hidden md:block mx-6 mt-10 mb-10 w-auto text-center sm:mx-10 md:absolute md:right-6 md:top-1/2 md:mx-0 md:mt-0 md:mb-0 md:-translate-y-1/2 md:z-10 md:w-[25%] md:max-w-sm md:text-right lg:right-12 lg:w-[28%]">
        <p className="text-sm leading-relaxed text-white/80 md:text-base">
          I create clean, responsive and purposeful web experiences for people
          and businesses.
        </p>

        <h2 className="mt-6 text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[0.95] tracking-tight text-white">
          BUILD.
          <br />
          CREATE.
          <br />
          SHIP.
        </h2>
      </div>
    </div>
  );
};

export default Hero;

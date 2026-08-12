import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 flex justify-center w-full px-4">
      <nav className=" bg-white/90 backdrop-blur-md border border-white/90 rounded-2xl px-5 py-2 font-medium shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]">
        {/* Top Navbar */}
        <div className="flex items-center">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              About
            </a>

            <a
              href="#services"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Services
            </a>

            <a
              href="#works"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Works
            </a>

            <a
              href="#pricing"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Pricing
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block ml-3.5">
            <Button
              text="Download Resume"
              className="bg-[#111111] text-white rounded-full text-sm font-semibold tracking-wide shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)] hover:bg-[#FF4A00] transition duration-300 active:scale-95"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-[#111111] text-white hover:bg-[#FF4A00] transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 translate-y-0 pt-5 pb-4"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="flex flex-col items-center gap-5">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Services
            </a>

            <a
              href="#works"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Works
            </a>

            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Pricing
            </a>

            <Button
              text="Download Resume"
              className="bg-[#111111] text-white rounded-full text-sm font-semibold px-5 py-2 hover:bg-[#FF4A00] transition"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import Button from "@components/Button";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-0">
      <div className="flex justify-between items-center px-4 sm:px-[20px] py-3 bg-white rounded-full border border-gray-200 shadow-sm max-w-[1200px] mx-auto h-[60px] sm:h-[70px]">
        {/* Logo */}
        <button
          className="lg:hidden flex items-center justify-center ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Icon
            icon={isMenuOpen ? "ph:x" : "ph:list"}
            className="text-xl text-black"
          />
        </button>
        <div className="flex items-center flex-shrink-0">
          <img
            src="/img/couplogo.png"
            alt="logo"
            className="h-5 sm:h-6 w-auto"
          />
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 flex-1 justify-center items-center px-4 xl:px-8">
          <a
            href="#features"
            className="text-xs sm:text-sm text-[#8C97A8] font-medium hover:text-black transition-colors"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-xs sm:text-sm text-[#8C97A8] font-medium hover:text-black transition-colors"
          >
            Pricing
          </a>
          <a
            href="#usecases"
            className="text-xs sm:text-sm text-[#8C97A8] font-medium hover:text-black transition-colors"
          >
            Use Cases
          </a>
          <a
            href="#faq"
            className="text-xs sm:text-sm text-[#8C97A8] font-medium hover:text-black transition-colors"
          >
            FAQ
          </a>
        </nav>

        {/* Mobile Menu Button */}

        {/* CTA Button - Desktop */}
        <div className="hidden sm:block flex-shrink-0">
          <Button
            buttonColor="bg-blue-start"
            textColor="text-white"
            withBorder={false}
            isCircular
            width="auto"
            height="h-[40px]"
          >
            Contact Sales
          </Button>
        </div>

        {/* CTA Button - Mobile */}
        <div className="sm:hidden flex-shrink-0">
          <Button
            buttonColor="bg-blue-start"
            textColor="text-white"
            withBorder={false}
            isCircular
            width="auto"
            height="h-[32px]"
          >
            Sales
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full mt-2 left-4 right-4 bg-white rounded-lg border border-gray-200 shadow-lg lg:hidden">
          <nav className="flex flex-col p-4 gap-3">
            <a
              href="#features"
              className="text-sm text-[#8C97A8] font-medium hover:text-black transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-sm text-[#8C97A8] font-medium hover:text-black transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#usecases"
              className="text-sm text-[#8C97A8] font-medium hover:text-black transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </a>
            <a
              href="#faq"
              className="text-sm text-[#8C97A8] font-medium hover:text-black transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

import Button from "@components/Button";
import { Icon } from "@iconify/react";

const HeroTextContent = () => {
  return (
    <div className="relative z-10 text-center max-w-2xl mx-auto px-4 sm:px-5 -mt-20 sm:-mt-40 w-full">
      {/* Bird 1 - Left side, above text */}
      <div className="absolute pointer-events-none -left-16 sm:-left-52 top-2 sm:top-12 -rotate-180  animate-slideUpFromViewportBottom">
        <img
          src="/img/normal-bird.png"
          alt="bird-decoration-1"
          className="h-6 w-8 sm:h-3.5 sm:w-12 object-contain"
        />
      </div>

      {/* Bird 2 - Left side, mid text */}
      <div className="absolute pointer-events-none -left-20 sm:-left-8 top-20 sm:top-32">
        <img
          src="/img/normal-bird.png"
          alt="bird-decoration-2"
          className="h-5 w-8 sm:h-3.5 sm:w-10 object-contain"
        />
      </div>

      {/* Bird 3 - Right side, above text */}
      <div className="absolute pointer-events-none -right-16 sm:-right-32 top-4 sm:top-8 animate-slideUpFromViewportBottom">
        <img
          src="/img/normal-bird.png"
          alt="bird-decoration-3"
          className="h-6 w-8 sm:h-3.5 sm:w-11 object-contain"
        />
      </div>

      {/* Bird 4 - Right side, mid text */}
      <div className="absolute pointer-events-none -right-20 sm:-right-44 top-24 sm:top-40">
        <img
          src="/img/normal-bird.png"
          alt="bird-decoration-4"
          className="h-5 w-8 sm:h-3.5 sm:w-10 object-contain"
        />
      </div>

      {/* AI Message Label */}
      <div className="inline-flex items-center gap-2 bg-white rounded-full pt-[4px] pb-[4px] px-[8px] mb-8">
        <img src="/img/dot-oval.png" className="h-[17px] w-[32px]" />
        <span className="text-xs font-semibold text-blue-start">
          #1 iMessage Automation Tool
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight tracking-tight">
        <span className="text-blue-start">iMessage</span>
        <span> Automation</span>
        <br />
        <span>for Teams and AI</span>
        <br />
        <span>Workflows.</span>
      </h1>

      {/* Description */}
      <p className="text-base md:text-md text-black mb-8 leading-relaxed max-w-xl mx-auto">
        Coup lets you, your team, or AI workflows send iMessages directly from
        your phone number, running securely on your Mac or Mac Minis.
      </p>

      {/* Button Group */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          buttonColor="bg-blue-start"
          textColor="text-white"
          withBorder={false}
          isCircular
          width="auto"
          height="h-10"
        >
          Get Started
        </Button>
        <button
          className="flex items-center gap-3 h-10
                 px-6 py-3 bg-blue-50 text-black rounded-full font-semibold text-base hover:bg-blue-100 transition-colors"
        >
          <Icon icon="mdi:apple" className="text-xl" />
          <div className="w-px h-5 bg-gray-300"></div>
          Download the Mac app
        </button>
      </div>
    </div>
  );
};

export default HeroTextContent;

import Button from "@components/Button";
import { Icon } from "@iconify/react";

const HeroTextContent = () => {
  return (
    <div className="relative z-10 text-center max-w-2xl mx-auto px-5 -mt-40 w-full">
      {/* Bird 1 - Far right, above text */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-210px",
          top: "60px",
          transform: "rotate(-180deg)",
        }}
      >
        <img
          src="/img/normal-bird.png"
          alt="bird-decoration-1"
          className="h-[13.96px] w-12 object-contain"
        />
      </div>

      {/* Bird 2 - Left side, above text */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "-30px",
          top: "120px",
        }}
      >
        <img
          src="/img/normal-bird.png"
          alt="bird-decoration-2"
          className="h-[13.96px] w-10 object-contain"
        />
      </div>

      {/* Bird 3 - Center-left, near center */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-120px",
          top: "80px",
          transform: "translateY(-50%)",
        }}
      >
        <img
          src="/img/normal-bird.png"
          alt="bird-decoration-3"
          className="h-[13.96px] w-11 object-contain"
        />
      </div>

      {/* Bird 4 - Far left, below text */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-180px",
          top: "200px",
        }}
      >
        <img
          src="/img/normal-bird.png"
          alt="bird-decoration-4"
          className="h-[13.96px] w-10 object-contain"
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

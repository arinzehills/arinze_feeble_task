import { useState, useEffect } from "react";
import HeroTextContent from "./HeroTextContent";
import CrossingBirds from "./CrossingBirds";
import AnimatedBirds from "./AnimatedBirds";

const HeroSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 800);

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Main Hero Content */}
      <HeroTextContent />

      {/* Crossing Birds Animation */}
      <CrossingBirds />

      {/* Animated Birds/Planes */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <AnimatedBirds isAnimating={isAnimating} />

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-[35%] sm:right-[45%]   text-sm font-semibold   animate-bounce z-20 flex items-center flex-col">
          <p>Scroll to learn more</p>
          <img src="/icons/arrow-down-04.png" className="h-[32px] w-[32px]" />
        </div>

        {/* Cloud SVG */}
        <img
          src="/svg/cloud.svg"
          alt="clouds"
          className="absolute bottom-0 left-0 w-full h-auto z-30 animate-cloudSlideIn"
        />
      </div>
    </section>
  );
};

export default HeroSection;

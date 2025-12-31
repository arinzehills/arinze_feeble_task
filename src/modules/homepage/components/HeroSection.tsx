import { useState, useEffect } from "react";
import HeroTextContent from "./HeroTextContent";

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

      {/* Animated Birds/Planes */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Bird 1 */}
        <div
          className={`absolute opacity-70 transition-all duration-[3500ms] ${
            isAnimating ? "animate-bird-fly-1" : ""
          }`}
          style={{
            left: "10%",
            bottom: "6%",
          }}
        >
          <img
            src="/img/bird1.png"
            alt="bird1"
            className="h-16 w-16 object-contain"
          />
        </div>

        {/* Bird 2 */}
        <div
          className={`absolute opacity-70 transition-all duration-[3500ms] ${
            isAnimating ? "animate-bird-fly-2" : ""
          }`}
          style={{
            left: "30%",
            top: "82%",
          }}
        >
          <img
            src="/img/bird2.png"
            alt="bird2"
            className="h-14 w-14 object-contain"
          />
        </div>

        {/* Bird 3 */}
        <div
          className={`absolute opacity-70 transition-all duration-[3500ms] ${
            isAnimating ? "animate-bird-fly-3" : ""
          }`}
          style={{
            right: "28%",
            bottom: "5%",
          }}
        >
          <img
            src="/img/bird3.png"
            alt="bird3"
            className="h-16 w-16 object-contain"
          />
        </div>

        {/* Bird 4 */}
        <div
          className={`absolute opacity-70 transition-all duration-[3500ms] ${
            isAnimating ? "animate-bird-fly-4" : ""
          }`}
          style={{
            right: "10%",
            bottom: "18%",
          }}
        >
          <img
            src="/img/bird4.png"
            alt="bird4"
            className="h-[101px] w-28 object-contain"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 right-[45%]   text-sm font-semibold   animate-bounce z-20 flex items-center flex-col">
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

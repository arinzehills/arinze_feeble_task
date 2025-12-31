import { useState, useEffect } from "react";

const AnimatedBirds = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 800);

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Animated Birds/Planes */}
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
            className="h-[61px] w-[103px] object-contain"
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
            className=" w-[59px] w-[87px] object-contain"
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
            className="h-[81px] w-[113px] object-contain"
          />
        </div>

        {/* Bird 4 */}
        <div
          className={`absolute opacity-70 transition-all duration-[3500ms] ${
            isAnimating ? "animate-bird-fly-4" : ""
          }`}
          style={{
            right: "10%",
            bottom: "8%",
          }}
        >
          <img
            src="/img/bird4.png"
            alt="bird4"
            className="h-[101px]  w-[113px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default AnimatedBirds;

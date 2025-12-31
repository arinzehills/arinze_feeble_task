interface AnimatedBirdsProps {
  isAnimating: boolean;
}

const AnimatedBirds = ({ isAnimating }: AnimatedBirdsProps) => {
  return (
    <>
      {/* Bird 1 - Bottom Left */}
      <div
        className={`absolute opacity-70 transition-all duration-[3500ms] left-2 sm:left-[10%] bottom-32 sm:bottom-[6%] ${
          isAnimating ? "animate-bird-fly-1" : ""
        }`}
      >
        <img
          src="/img/bird1.png"
          alt="bird1"
          className="h-10 sm:h-[61px] w-16 sm:w-[103px] object-contain"
        />
      </div>

      {/* Bird 2 - Middle Left */}
      <div
        className={`absolute opacity-70 transition-all duration-[3500ms] left-6 sm:left-[30%] top-48 sm:top-[82%] ${
          isAnimating ? "animate-bird-fly-2" : ""
        }`}
      >
        <img
          src="/img/bird2.png"
          alt="bird2"
          className="h-8 sm:h-[59px] w-14 sm:w-[87px] object-contain"
        />
      </div>

      {/* Bird 3 - Bottom Right */}
      <div
        className={`absolute opacity-70 transition-all duration-[3500ms] right-2 sm:right-[28%] bottom-24 sm:bottom-[5%] ${
          isAnimating ? "animate-bird-fly-3" : ""
        }`}
      >
        <img
          src="/img/bird3.png"
          alt="bird3"
          className="h-12 sm:h-[81px] w-16 sm:w-[113px] object-contain"
        />
      </div>

      {/* Bird 4 - Right Side */}
      <div
        className={`absolute opacity-70 transition-all duration-[3500ms] right-0 sm:right-[10%] bottom-16 sm:bottom-[8%] ${
          isAnimating ? "animate-bird-fly-4" : ""
        }`}
      >
        <img
          src="/img/bird4.png"
          alt="bird4"
          className="h-12 sm:h-[101px] w-16 sm:w-[113px] object-contain"
        />
      </div>
    </>
  );
};

export default AnimatedBirds;

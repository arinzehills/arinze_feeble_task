import { motion } from "framer-motion";

const CrossingBirds = () => {
  // Bird A: Left to Right animation (exits right side of screen)
  const birdAVariants = {
    animate: {
      x: [
        -1000, // Start far left (off-screen)
        0, // Move through center
        1200, // End far right (off-screen)
      ],
      y: [
        50, // Start lower
        -80, // Move up diagonally
        -120, // End higher
      ],
      opacity: [0, 1, 1, 0], // Fade in, stay visible, fade out
      rotate: [0, -10, -20], // Slight rotation for natural motion
    },
    transition: {
      duration: 180,
      repeat: Infinity,
      repeatDelay: 12,
      ease: "linear", // Constant speed start to end
    },
  };

  // Bird B: Right to Left animation (exits left side of screen)
  const birdBVariants = {
    animate: {
      x: [
        1000, // Start far right (off-screen)
        0, // Move through center
        -1200, // End far left (off-screen)
      ],
      y: [
        50, // Start lower
        -80, // Move up diagonally
        -110, // End higher
      ],
      opacity: [0, 1, 1, 0], // Fade in, stay visible, fade out
      rotate: [0, 10, 20], // Slight rotation for natural motion (opposite direction)
    },
    transition: {
      duration: 180,
      repeat: Infinity,
      repeatDelay: 12,
      ease: "linear", // Constant speed start to end
    },
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* Bird A - Left to Right Crossing */}
      <motion.div
        className="absolute"
        style={{
          left: "20%",
          top: "50%",
        }}
        variants={birdAVariants}
        animate="animate"
      >
        <img
          src="/img/normal-bird.png"
          alt="crossing-bird-left-right"
          className="h-20 w-20 object-contain"
        />
      </motion.div>

      {/* Bird B - Right to Left Crossing */}
      <motion.div
        className="absolute"
        style={{
          right: "20%",
          top: "50%",
        }}
        variants={birdBVariants}
        animate="animate"
      >
        <img
          src="/img/normal-bird.png"
          alt="crossing-bird-right-left"
          className="h-20 w-20 object-contain"
        />
      </motion.div>
    </div>
  );
};

export default CrossingBirds;

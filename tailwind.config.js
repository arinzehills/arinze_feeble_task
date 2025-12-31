/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-start": "#007AFF",
        "blue-end": "#1477ff",
        "lighter-blue": "var(--lighter-blue)",
        "lighter-deeper-blue": "var(--lighter-deeper-blue)",
        "accent-color": "var(--accent-color)",
        interactive: "var(--interactive-color)",
      },
      backgroundImage: {
        "tab-radial": "radial-gradient(circle at center, #2255ff, #1477ff)",
        "tab-gradient": "linear-gradient(to bottom, #2255ff, #1477ff)",
      },
      blur: {
        xl: "100px",
        "2xl": "150px",
        "3xl": "200px",
      },
      backdropBlur: {
        "4xl": "72px",
      },
      animation: {
        up: "moveUp 3s ease-in-out infinite alternate",
        down: "moveDown 3s ease-in-out infinite alternate",
        slideInRight: "slideInRight 0.5s forwards",
        slideOutLeft: "slideOutLeft 0.5s forwards",
        fadeIn: "fadeIn 0.5s forwards",
        fadeOut: "fadeOut 0.5s forwards",
        borderGlow: "borderGlow 2s ease-in-out infinite alternate",
        borderSpin: "borderSpin 3s linear infinite",
        borderPulse: "borderPulse 2s ease-in-out infinite",
        glassShimmer: "glassShimmer 3s ease-in-out infinite",
        float1: "float1 6s ease-in-out infinite",
        float2: "float2 7s ease-in-out infinite",
        float3: "float3 8s ease-in-out infinite",
        "bird-fly-1":
          "birdSlideIn1 0.8s ease-out forwards, birdFly1 3.5s cubic-bezier(0.71, 0.04, 0.83, 0.67) infinite 0.8s",
        "bird-fly-2":
          "birdSlideIn2 0.9s ease-out forwards, birdFly2 3.5s cubic-bezier(0.71, 0.04, 0.83, 0.67) infinite 0.9s",
        "bird-fly-3":
          "birdSlideIn3 0.85s ease-out forwards, birdFly3 3.5s cubic-bezier(0.71, 0.04, 0.83, 0.67) infinite 0.85s",
        "bird-fly-4":
          "birdSlideIn4 0.95s ease-out forwards, birdFly4 3.5s cubic-bezier(0.71, 0.04, 0.83, 0.67) infinite 0.95s",
        cloudSlideIn: "cloudSlideIn 1s ease-out forwards",
      },
      keyframes: {
        moveUp: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-40px)" },
        },
        moveDown: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(40px)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        borderPulse: {
          "0%, 100%": {
            borderColor: "#2255ff",
            boxShadow: "0 0 0 0 rgba(34, 85, 255, 0.4)",
          },
          "50%": {
            borderColor: "#1477ff",
            boxShadow: "0 0 0 8px rgba(20, 119, 255, 0)",
          },
        },
        borderGlow: {
          "0%": {
            borderColor: "#2255ff",
            boxShadow: "0 0 5px rgba(34, 85, 255, 0.3)",
          },
          "100%": {
            borderColor: "#1477ff",
            boxShadow:
              "0 0 10px rgba(20, 119, 255, 0.6), 0 0 20px rgba(20, 119, 255, 0.4)",
          },
        },
        borderSpin: {
          "0%": {
            background: "conic-gradient(from 0deg, #2255ff, #1477ff, #2255ff)",
          },
          "100%": {
            background:
              "conic-gradient(from 360deg, #2255ff, #1477ff, #2255ff)",
          },
        },
        glassShimmer: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
        float1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -20px)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-15px, 20px)" },
        },
        float3: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(15px, -15px)" },
        },
        birdFly1: {
          "0%": { transform: "translateX(0) translateY(0) rotateZ(0deg)" },
          "50%": {
            transform: "translateX(30px) translateY(-20px) rotateZ(-5deg)",
          },
          "100%": { transform: "translateX(0) translateY(0) rotateZ(0deg)" },
        },
        birdFly2: {
          "0%": { transform: "translateX(0) translateY(0) rotateZ(0deg)" },
          "50%": {
            transform: "translateX(25px) translateY(-25px) rotateZ(-5deg)",
          },
          "100%": { transform: "translateX(0) translateY(0) rotateZ(0deg)" },
        },
        birdFly3: {
          "0%": { transform: "translateX(0) translateY(0) rotateZ(0deg)" },
          "50%": {
            transform: "translateX(-30px) translateY(-20px) rotateZ(5deg)",
          },
          "100%": { transform: "translateX(0) translateY(0) rotateZ(0deg)" },
        },
        birdFly4: {
          "0%": { transform: "translateX(0) translateY(0) rotateZ(0deg)" },
          "50%": {
            transform: "translateX(-25px) translateY(-25px) rotateZ(5deg)",
          },
          "100%": { transform: "translateX(0) translateY(0) rotateZ(0deg)" },
        },
        birdSlideIn1: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        birdSlideIn2: {
          "0%": { transform: "translateY(120px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        birdSlideIn3: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        birdSlideIn4: {
          "0%": { transform: "translateY(120px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        cloudSlideIn: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

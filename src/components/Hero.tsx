"use client";

import { useCallback } from "react";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";

export default function Hero() {
  // Initialize tsParticles engine
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 overflow-hidden"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 50, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1, outModes: "bounce" },
            links: { enable: true, distance: 120, color: "#ffffff", opacity: 0.3, width: 1 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Logo + Heading */}
      <motion.div
        className="flex flex-col items-center gap-4 z-10 text-center px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/logo.png"
          alt="HackFest Logo"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          HackFest 2025
        </h1>
        <p className="text-lg md:text-2xl text-white/90">
          Innovate. Build. Win.
        </p>
        <a
          href="https://tally.so/r/3NGzAO"
          target="_blank"
          className="mt-6 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
        >
          Register Now
        </a>
      </motion.div>

      {/* Optional Scroll Down Icon */}
      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          className="w-6 h-6 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}

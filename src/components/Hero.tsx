"use client";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine"; // <-- correct type
import Particles from "react-tsparticles";

export default function Hero() {
  // Initialize particles engine
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#ffffff" },
          },
        }}
      />

      <div className="text-center z-10 text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to HackFest 2025</h1>
        <p className="text-lg md:text-2xl mb-6">Innovate. Build. Win.</p>
        <a
          href="https://tally.so/r/3NGzAO"
          target="_blank"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Register Now
        </a>
      </div>
    </section>
  );
}

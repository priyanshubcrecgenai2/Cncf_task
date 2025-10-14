"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt";

export default function Hero() {
  // Initialize particles engine
  const particlesInit = async (engine: any) => {
    await loadFull(engine);
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center py-32 px-4 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
            color: { value: ["#a78bfa", "#f472b6", "#3b82f6"] },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: { min: 2, max: 5 } },
            move: { enable: true, speed: 0.8, direction: "none", outMode: "bounce" },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Hero Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent mb-4"
      >
        HackFest 2025
      </motion.h1>

      {/* Hero Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-gray-300 max-w-2xl mb-8 text-lg md:text-xl"
      >
        Unleash your creativity. Collaborate with innovators and build solutions
        that can change the world in just 48 hours!
      </motion.p>

      {/* Register Button */}
      <motion.a
        href="https://tally.so/r/3NGzAO"
        target="_blank"
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition mb-12"
      >
        Register Now
      </motion.a>

      {/* Hero Image with Parallax Tilt */}
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#ffffff"
        glarePosition="all"
        scale={1.05}
        className="w-full max-w-2xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            src="/hero-image.png"
            alt="Hackathon Illustration"
            width={700}
            height={400}
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </Tilt>
    </section>
  );
}

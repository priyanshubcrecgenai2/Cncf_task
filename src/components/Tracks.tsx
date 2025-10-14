"use client";
import { motion } from "framer-motion";

export default function Tracks() {
  const tracks = ["AI/ML", "Web3", "Sustainability", "Education", "HealthTech"];

  return (
    <section id="tracks" className="py-20 bg-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-purple-400 mb-8"
      >
        Hackathon Tracks
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-6">
        {tracks.map((track, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 text-white px-8 py-6 rounded-2xl shadow-md hover:bg-purple-600 transition"
          >
            {track}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-purple-400 mb-6"
      >
        About the Hackathon
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 max-w-3xl mx-auto"
      >
        HackFest 2025 is a 48-hour innovation challenge bringing together developers, designers, and
        problem-solvers to create impactful solutions.
      </motion.p>
    </section>
  );
}

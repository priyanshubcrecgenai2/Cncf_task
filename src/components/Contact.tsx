"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-purple-400 mb-6"
      >
        Contact Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 mb-6"
      >
        Have questions? Reach out to us at{" "}
        <a href="mailto:hackfest2025@gmail.com" className="text-purple-400 underline">
          hackfest2025@gmail.com
        </a>
      </motion.p>
    </section>
  );
}

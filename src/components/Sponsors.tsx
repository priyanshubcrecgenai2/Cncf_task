"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Sponsors() {
  const sponsors = [
    "/sponsor1.png",
    "/sponsor2.png",
    "/sponsor3.png",
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-purple-400 mb-8"
      >
        Our Sponsors
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="p-4 bg-gray-800 rounded-xl"
          >
            <Image src={src} alt={`Sponsor ${i + 1}`} width={120} height={60} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

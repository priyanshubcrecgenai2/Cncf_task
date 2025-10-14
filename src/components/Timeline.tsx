"use client";
import { motion } from "framer-motion";

export default function Timeline() {
  const steps = [
    { title: "Registration", date: "Oct 12–14" },
    { title: "Hackathon Begins", date: "Oct 15" },
    { title: "Submission", date: "Oct 16" },
    { title: "Results & Awards", date: "Oct 17" },
  ];

  return (
    <section id="timeline" className="py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-purple-400 mb-8"
      >
        Timeline
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800 px-6 py-4 rounded-xl text-white shadow-md w-60"
          >
            <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
            <p className="text-gray-400">{s.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

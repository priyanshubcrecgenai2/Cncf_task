"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const socials = [
    { icon: <Github size={20} />, href: "https://github.com/CNCF", name: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/cncf-durgapur/?originalSubdomain=in", name: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://x.com/CloudNativeFdn?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", name: "Twitter" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/cndurgapur/", name: "Instagram" },
  ];

  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black py-10 border-t border-purple-800/50 mt-20 overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative container mx-auto text-center text-gray-300">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold mb-6 text-purple-400"
        >
          Let’s Connect & Build the Future 🚀
        </motion.h2>

        <motion.div
          className="flex justify-center gap-8 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-3 rounded-full bg-gray-800/70 border border-gray-700 hover:border-purple-500 transition"
            >
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-purple-400 transition">
                {s.name}
              </span>
              <div className="text-gray-300 group-hover:text-purple-400 transition">{s.icon}</div>
            </motion.a>
          ))}
        </motion.div>

        {year && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-400"
          >
            © {year} HackFest 2025 — Crafted with 💜 by the Dev Team.
          </motion.p>
        )}
      </div>
    </footer>
  );
}

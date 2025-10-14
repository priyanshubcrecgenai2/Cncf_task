"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Sun, Moon, Rocket } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-black/70 dark:bg-gray-900/80 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <Rocket size={24} className="text-purple-400" />
          <h1 className="text-2xl font-bold text-purple-400">HackFest 2025</h1>
        </div>

        <ul className="hidden md:flex gap-8">
          {["hero", "about", "tracks", "timeline", "sponsors", "contact"].map((item) => (
            <li key={item}>
              <ScrollLink
                to={item}
                smooth={true}
                duration={700}
                offset={-70}
                className="cursor-pointer hover:text-purple-400 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <a
            href="https://tally.so/r/3NGzAO"
            target="_blank"
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
          >
            Register
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

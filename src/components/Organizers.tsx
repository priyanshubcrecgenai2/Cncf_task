"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

type Organizer = {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
};

export default function Organizers() {
  const organizers: Organizer[] = [
    {
      name: "Mowazzem Uddin Ahmed",
      role: "Lead Organizer",
      image: "/organizers/priyanshu.jpeg",
      github: "https://github.com/priyanshu596",
      linkedin: "https://linkedin.com/in/priyanshu596",
    },
    {
      name: "Soumaditya pal",
      role: "Co-Organizer",
      image: "/organizers/alicejohnson.png",
      github: "https://github.com/alicejohnson.png",
      linkedin: "https://linkedin.com/in/alicejohnson",
      twitter: "https://twitter.com/alicejohnson",
    },
    {
      name: "Abhishek Mukheerjee",
      role: "Event Manager",
      image: "/organizers/bobsmith.jpeg",
      github: "https://github.com/bobsmith",
      linkedin: "https://linkedin.com/in/bobsmith",
    },
  ];

  return (
    <section id="organizers" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Organizers
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizers.map((org, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={org.image}
                alt={org.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{org.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{org.role}</p>
              <div className="flex gap-4 mt-2">
                {org.github && (
                  <a href={org.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition">
                    <Github size={20} />
                  </a>
                )}
                {org.linkedin && (
                  <a href={org.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
                    <Linkedin size={20} />
                  </a>
                )}
                {org.twitter && (
                  <a href={org.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

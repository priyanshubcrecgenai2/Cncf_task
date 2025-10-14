"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is HackFest 2025?",
    answer: "HackFest 2025 is a 48-hour hackathon where innovators come together to build solutions that can impact the world."
  },
  {
    question: "Who can participate?",
    answer: "Students, developers, designers, and anyone passionate about technology and innovation can participate."
  },
  {
    question: "Do I need a team?",
    answer: "You can participate individually or in a team of up to 4 members."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, HackFest 2025 is completely free to participate."
  },
  {
    question: "Where can I find resources?",
    answer: "After registration, participants will get access to online resources, mentors, and a Slack channel for collaboration."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-900 dark:text-gray-100 focus:outline-none"
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 text-gray-700 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

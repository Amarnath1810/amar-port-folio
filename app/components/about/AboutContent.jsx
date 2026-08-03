"use client";
import { motion } from "framer-motion";
import { FaRocket, FaCode } from "react-icons/fa";
import { aboutData } from "./aboutData";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="p-10 lg:p-12">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
          {aboutData.greeting}
        </h3>
        <h2
          className="
            mt-3
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            break-words
            max-w-full
            bg-gradient-to-r
            from-[var(--primary)]
            to-sky-400
            bg-clip-text
            text-transparent
            "
        >
          {aboutData.name}
        </h2>
        <div className="mt-8 space-y-7">
          {aboutData.description.map((item, index) => (
            <p
              key={index}
              className="text-base md:text-lg leading-8 text-[var(--text-secondary)]"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

function SectionTitle({ badge, title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--primary)] backdrop-blur-xl">
        <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
        {badge}
        <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
      </span>

      <h2 className="mt-6 text-5xl font-black text-[var(--text-primary)]">
        {title}
      </h2>
      <div className="mt-4 mb-8 flex justify-start md:justify-center">
        <svg
          width="420"
          height="20"
          viewBox="0 0 220 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fadeLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="10%" stopColor="var(--primary)" stopOpacity="1" />
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M5 11 C55 15 165 15 215 11"
            stroke="url(#fadeLine)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionTitle;

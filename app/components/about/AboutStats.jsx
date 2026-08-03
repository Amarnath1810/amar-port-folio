"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  FaCodeBranch,
  FaProjectDiagram,
  FaSmile,
  FaAward,
} from "react-icons/fa";

// Component for the animated count-up numbers
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const statsData = [
  {
    id: 1,
    value: "3+",
    label: "Years Experience",
    icon: FaAward,
  },
  {
    id: 2,
    value: "20+",
    label: "Completed Projects",
    icon: FaProjectDiagram,
  },
  {
    id: 3,
    value: "100%",
    label: "Client Satisfaction",
    icon: FaSmile,
  },
  {
    id: 4,
    value: "50k+",
    label: "Lines of Code",
    icon: FaCodeBranch,
  },
];

export default function AboutStats() {
  return (
    /* Force exactly 2 cards per row across all screens */
    <div className="mt-12 grid grid-cols-2 gap-4 lg:gap-6">
      {statsData.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="
              group
              relative
              flex
              flex-col
              items-center
              justify-center
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--card-bg)]
              p-6
              sm:p-8
              text-center
              shadow-md
              transition-all
              duration-300
              hover:border-[var(--primary)]/40
              hover:shadow-xl
            "
          >
            {/* Stat Icon */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110">
              <Icon className="text-2xl" />
            </div>

            {/* Stat Value with Running Counter */}
            <span className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              <AnimatedCounter value={stat.value} />
            </span>

            {/* Stat Label */}
            <span className="mt-2 text-xs font-medium text-[var(--text-secondary)] sm:text-sm">
              {stat.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { orbitIcons } from "./heroData";
import styles from "./Hero.module.scss";

export default function TechOrbit() {
  const [mounted, setMounted] = useState(false);
  const [radius, setRadius] = useState(260);
  const [iconSize, setIconSize] = useState(50);

  useEffect(() => {
    setMounted(true);

    const updateOrbit = () => {
      if (window.innerWidth <= 480) {
        setRadius(150);
        setIconSize(34);
      } else if (window.innerWidth <= 768) {
        setRadius(210);
        setIconSize(42);
      } else if (window.innerWidth <= 1024) {
        setRadius(280);
        setIconSize(50);
      } else {
        setRadius(260);
        setIconSize(50);
      }
    };

    updateOrbit();

    window.addEventListener("resize", updateOrbit);

    return () => window.removeEventListener("resize", updateOrbit);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.orbitWrapper}>
      {/* Profile Image */}
      <motion.div
        className={styles.profile}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/images/profile.jpeg"
          alt="Profile"
          width={500}
          height={500}
          priority
        />
      </motion.div>

      {/* Orbit */}
      <motion.div
        className={styles.orbit}
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          className={styles.orbitSvg}
          viewBox={`0 0 ${radius * 2 + 120} ${radius * 2 + 120}`}
        >
          <defs>
            <linearGradient
              id="orbitGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--secondary)" />
            </linearGradient>
          </defs>

          {orbitIcons.map((_, index) => {
            const next = (index + 1) % orbitIcons.length;

            const start = (2 * Math.PI * index) / orbitIcons.length;
            const end = (2 * Math.PI * next) / orbitIcons.length;

            const gap = 0.18;

            const newStart = start + gap;
            const newEnd = end - gap;

            const cx = radius + 60;
            const cy = radius + 60;

            const x1 = cx + Math.cos(newStart) * radius;
            const y1 = cy + Math.sin(newStart) * radius;

            const x2 = cx + Math.cos(newEnd) * radius;
            const y2 = cy + Math.sin(newEnd) * radius;

            const largeArc = newEnd - newStart > Math.PI ? 1 : 0;

            return (
              <path
                key={index}
                d={`M ${x1} ${y1}
              A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`}
                fill="none"
                stroke="url(#orbitGradient)"
                strokeWidth="2.5"
                strokeDasharray="10 8"
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {/* Render icons here */}
        {orbitIcons.map((icon, index) => {
          const angle = (2 * Math.PI * index) / orbitIcons.length;

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={icon.name}
              className={styles.orbitItem}
              style={{
                left: "50%",
                top: "50%",
                x,
                y,
              }}
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={icon.icon}
                alt={icon.name}
                width={iconSize}
                height={iconSize}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { heroData, skills } from "./heroData";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";

import styles from "./Hero.module.scss";

export default function HeroContent() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % heroData.designation.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.content}>
      {/* Greeting */}
      <motion.div
        className={styles.greeting}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {heroData.greeting}
      </motion.div>

      {/* Name */}
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span>{heroData.firstName}</span>
        <span className={styles.gradient}>{heroData.lastName}</span>
      </motion.h1>

      {/* Role */}
      <motion.div
        className={styles.designation}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {heroData.designation[currentRole]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Description */}
      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {heroData.description}
      </motion.p>

      {/* Skills */}
      <motion.div
        className={styles.skills}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {skills.map((skill) => (
          <span key={skill} className={styles.skill}>
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Buttons */}
      <HeroButtons />

      {/* Social Icons */}
      <HeroSocial />
    </div>
  );
}

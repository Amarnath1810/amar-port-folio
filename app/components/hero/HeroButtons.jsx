"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import { heroData } from "./heroData.jsx";

function HeroButtons() {
  return (
    <div className={styles.buttonGroup}>
      <motion.a
        href={heroData.resume}
        download
        className={styles.primaryButton}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        {heroData.buttons.resume}
      </motion.a>

      <motion.a
        href="#projects"
        className={styles.secondaryButton}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        {heroData.buttons.project}
      </motion.a>
    </div>
  );
}

export default HeroButtons;

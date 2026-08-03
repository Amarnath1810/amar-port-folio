"use client";

import { motion } from "framer-motion";
import { socialLinks } from "./heroData.jsx";
import styles from "./Hero.module.scss";

function HeroSocial() {
  return (
    <motion.div
      className={styles.socials}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1,
        duration: 0.6,
      }}
    >
      {socialLinks.map(({ id, icon: Icon, url }) => (
        <motion.a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          whileHover={{
            y: -6,
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <Icon />
        </motion.a>
      ))}
    </motion.div>
  );
}

export default HeroSocial;

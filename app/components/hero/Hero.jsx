"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { heroData, skills } from "./heroData";
import HeroButtons from "./HeroButtons";
import HeroSocial from "./HeroSocial";
import TechOrbit from "./TechOrbit";

import styles from "./Hero.module.scss";

function HeroContent() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let current = "";
    let index = 0;

    setDisplayedText("");

    const typing = setInterval(() => {
      const role = heroData.designation[currentRole];

      if (index < role.length) {
        current += role[index];

        setDisplayedText(current);

        index++;
      } else {
        clearInterval(typing);

        setTimeout(() => {
          setCurrentRole(
            (prev) => (prev + 1) % heroData.designation.length
          );
        }, 1800);
      }
    }, 80);

    return () => {
      clearInterval(typing);
    };
  }, [currentRole]);

  return (
    <section
      id="home"
      className={styles.heroLayout}
    >
      {/* Background */}
      <div
        className={styles.gridBackground}
        aria-hidden="true"
      />

      {/* =====================================================
          LEFT SIDE
      ===================================================== */}

      <div className={styles.leftSide}>
        <div className={styles.content}>

          {/* Greeting */}
          <div className={styles.greetingRow}>
            <motion.div
              className={styles.greeting}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              {heroData.greeting}
            </motion.div>
          </div>

          {/* =================================================
              NAME
          ================================================= */}

          <motion.h1
            className={styles.title}
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className={styles.firstName}>
              {heroData.firstName}
            </span>

            <span className={styles.gradient}>
              {heroData.lastName}
            </span>
          </motion.h1>

          {/* =================================================
              DESIGNATION
          ================================================= */}

          <motion.div
            className={styles.designation}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                {displayedText}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            className={styles.description}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
            }}
          >
            {heroData.description}
          </motion.p>

          {/* =================================================
              SKILLS
          ================================================= */}

          <motion.div
            className={styles.skills}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
            }}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className={styles.skill}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <span
                  className={styles.dot}
                  aria-hidden="true"
                />

                <span className={styles.skillText}>
                  {skill}
                </span>
              </motion.span>
            ))}
          </motion.div>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            className={styles.buttons}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.5,
            }}
          >
            <HeroButtons />
          </motion.div>

          {/* =================================================
              SOCIAL
          ================================================= */}

          <motion.div
            className={styles.socials}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
              duration: 0.5,
            }}
          >
            <HeroSocial />
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          RIGHT SIDE
      ===================================================== */}

      <div className={styles.rightSide}>
        <TechOrbit />
      </div>
    </section>
  );
}

export default HeroContent;

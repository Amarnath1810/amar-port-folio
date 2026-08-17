"use client";

import { motion } from "framer-motion";
import { skillsData } from "./mySkillData";

const isDarkColor = (color) => {
  if (!color) return true;

  const hex = color.replace("#", "").toLowerCase();

  return (
    hex === "000000" ||
    hex === "181717" ||
    hex === "000" ||
    hex === "111111"
  );
};

export default function MySkills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--background)] py-32"
    >
      {/* =========================================
          BACKGROUND AMBIENT GLOW
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            -left-32
            top-1/4
            h-[600px]
            w-[600px]
            rounded-full
            bg-[radial-gradient(circle,var(--primary)/0.15_0%,transparent_70%)]
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-1/4
            h-[600px]
            w-[600px]
            rounded-full
            bg-[radial-gradient(circle,var(--secondary)/0.15_0%,transparent_70%)]
            blur-[120px]
          "
        />
      </div>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[var(--primary)]/30
              bg-[var(--primary)]/10
              px-4
              py-1.5
              text-xs
              font-semibold
              uppercase
              tracking-widest
              text-[var(--primary)]
              backdrop-blur-xl
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-[var(--primary)]
              "
            />

            Capabilities

            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-[var(--primary)]
              "
            />
          </span>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-[var(--text-primary)]
              md:text-6xl
            "
          >
            Tech Stack & Expertise
          </h2>

          {/* Decorative Line */}

          <div className="mt-4 mb-8 flex justify-center">
            <svg
              width="420"
              height="20"
              viewBox="0 0 220 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="fadeLine"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="var(--primary)"
                    stopOpacity="0"
                  />

                  <stop
                    offset="15%"
                    stopColor="var(--primary)"
                    stopOpacity="1"
                  />

                  <stop
                    offset="85%"
                    stopColor="var(--primary)"
                    stopOpacity="1"
                  />

                  <stop
                    offset="100%"
                    stopColor="var(--primary)"
                    stopOpacity="0"
                  />
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

          {/* Description */}

          <p
            className="
              mt-4
              text-base
              leading-relaxed
              text-[var(--text-secondary)]
              md:text-lg
            "
          >
            Building premium, scalable web & mobile applications powered by
            battle-tested tech stacks and pixel-perfect UI.
          </p>
        </motion.div>

        {/* =========================================
            SKILLS GRID
        ========================================= */}

        <div className="skillsGrid">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;

            const isBlackBrand = isDarkColor(skill.color);

            const brandColor = isBlackBrand
              ? "var(--text-primary)"
              : skill.color;

            const glowColor = isBlackBrand
              ? "var(--primary)"
              : skill.color;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                }}
                className="skillCardWrapper"
              >
                {/* =========================================
                    OUTER GLOW
                ========================================= */}

                <div
                  className="skillOuterGlow"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${glowColor},
                      transparent
                    )`,
                  }}
                />

                {/* =========================================
                    MAIN CARD
                ========================================= */}

                <div className="skillCard">
                  {/* =========================================
                      CORNER GLOW
                  ========================================= */}

                  <div
                    className="skillCornerGlow"
                    style={{
                      backgroundColor: glowColor,
                    }}
                  />

                  {/* =========================================
                      TOP CONTENT
                  ========================================= */}

                  <div className="skillCardTop">
                    {/* Icon */}

                    <div
                      className="skillIcon"
                      style={{
                        boxShadow: `0 8px 20px -6px ${
                          isBlackBrand
                            ? "rgba(0,0,0,0.15)"
                            : `${brandColor}40`
                        }`,
                      }}
                    >
                      <Icon
                        className="skillIconSvg"
                        style={{
                          color: brandColor,
                        }}
                      />
                    </div>

                    {/* Skill information */}

                    <div className="skillInfo">
                      <h3 className="skillName">
                        {skill.name}
                      </h3>

                      {/* Tags */}

                      {skill.tags && skill.tags.length > 0 && (
                        <div className="skillTags">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="skillTag"
                              style={{
                                backgroundColor: isBlackBrand
                                  ? "var(--surface)"
                                  : `${brandColor}18`,

                                color: isBlackBrand
                                  ? "var(--text-primary)"
                                  : brandColor,

                                borderColor: isBlackBrand
                                  ? "var(--border)"
                                  : `${brandColor}30`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* =========================================
                      PROFICIENCY
                  ========================================= */}

                  <div className="skillProgress">
                    {/* Header */}

                    <div className="skillProgressHeader">
                      <span className="skillProgressLabel">
                        Proficiency
                      </span>

                      <span
                        className="skillPercentage"
                        style={{
                          color: brandColor,
                        }}
                      >
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Track */}

                    <div className="skillProgressTrack">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${skill.percentage}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                        className="skillProgressBar"
                        style={{
                          backgroundColor: brandColor,

                          boxShadow: `0 0 10px ${
                            isBlackBrand
                              ? "var(--primary)"
                              : brandColor
                          }`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

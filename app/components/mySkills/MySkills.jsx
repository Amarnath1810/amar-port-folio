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
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-24
        md:py-32
      "
    >
      {/* =====================================================
          BACKGROUND AMBIENT GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left glow */}
        <div
          className="
            absolute
            -left-40
            top-1/4
            h-[500px]
            w-[500px]
            rounded-full
            blur-[120px]
            opacity-70
          "
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--primary) 15%, transparent) 0%, transparent 70%)",
          }}
        />

        {/* Right glow */}
        <div
          className="
            absolute
            -right-40
            bottom-1/4
            h-[500px]
            w-[500px]
            rounded-full
            blur-[120px]
            opacity-70
          "
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--secondary) 15%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

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
              tracking-[0.2em]
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
              sm:text-5xl
              md:text-6xl
            "
          >
            Tech Stack & Expertise
          </h2>

          {/* Decorative line */}

          <div className="my-6 flex justify-center">
            <svg
              width="420"
              height="20"
              viewBox="0 0 220 20"
              xmlns="http://www.w3.org/2000/svg"
              className="max-w-full"
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
              mx-auto
              max-w-2xl
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

        {/* =====================================================
            SKILLS GRID
        ====================================================== */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >
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
                  amount: 0.1,
                }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative h-full"
              >
                {/* =================================================
                    OUTER GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-[1px]
                    rounded-3xl
                    opacity-0
                    blur-xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-30
                  "
                  style={{
                    background: `linear-gradient(
                      135deg,
                      ${glowColor},
                      transparent
                    )`,
                  }}
                />

                {/* =================================================
                    MAIN CARD
                ================================================== */}

                <div
                  className="
                    relative
                    flex
                    h-full
                    min-h-[230px]
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    p-5
                    shadow-lg
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    group-hover:border-[var(--primary)]/30
                    group-hover:shadow-2xl
                  "
                >
                  {/* Corner glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      opacity-10
                      blur-3xl
                      transition-all
                      duration-500
                      group-hover:opacity-30
                      group-hover:scale-150
                    "
                    style={{
                      backgroundColor: glowColor,
                    }}
                  />

                  {/* =================================================
                      TOP CONTENT
                  ================================================== */}

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[var(--border)]
                        bg-[var(--background)]
                        transition-all
                        duration-300
                        group-hover:scale-110
                      "
                      style={{
                        boxShadow: `0 8px 20px -6px ${
                          isBlackBrand
                            ? "rgba(0,0,0,0.15)"
                            : `${brandColor}40`
                        }`,
                      }}
                    >
                      <Icon
                        className="h-7 w-7"
                        style={{
                          color: brandColor,
                        }}
                      />
                    </div>

                    {/* Skill information */}

                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          text-lg
                          font-bold
                          leading-tight
                          text-[var(--text-primary)]
                        "
                      >
                        {skill.name}
                      </h3>

                      {/* Tags */}

                      {skill.tags && skill.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                                rounded-md
                                border
                                px-2
                                py-1
                                text-[10px]
                                font-medium
                                leading-none
                              "
                              style={{
                                backgroundColor: isBlackBrand
                                  ? "var(--background)"
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

                  {/* =================================================
                      SPACER
                  ================================================== */}

                  <div className="flex-1" />

                  {/* =================================================
                      PROFICIENCY
                  ================================================== */}

                  <div className="relative z-10 mt-6">
                    {/* Header */}

                    <div className="mb-2 flex items-center justify-between">
                      <span
                        className="
                          text-sm
                          font-medium
                          text-[var(--text-secondary)]
                        "
                      >
                        Proficiency
                      </span>

                      <span
                        className="text-sm font-bold"
                        style={{
                          color: brandColor,
                        }}
                      >
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Track */}

                    <div
                      className="
                        h-2
                        w-full
                        overflow-hidden
                        rounded-full
                        bg-[var(--background)]
                      "
                    >
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
                        className="h-full rounded-full"
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

                  {/* Bottom accent */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                    style={{
                      backgroundColor: brandColor,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

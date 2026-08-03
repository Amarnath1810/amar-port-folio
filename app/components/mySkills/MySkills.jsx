"use client";

import { motion } from "framer-motion";
import { skillsData } from "./mySkillData";

// Checks if a color is black/near-black
const isDarkColor = (color) => {
  if (!color) return true;
  const hex = color.replace("#", "").toLowerCase();
  return (
    hex === "000000" || hex === "181717" || hex === "000" || hex === "111111"
  );
};

export default function MySkills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[var(--background)] py-32"
    >
      {/* Background Ambient Mesh Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,var(--primary)/0.15_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,var(--secondary)/0.15_0%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--primary)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
            Capabilities
            <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-[var(--text-primary)] md:text-6xl">
            Tech Stack & Expertise
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
                  <stop
                    offset="0%"
                    stopColor="var(--primary)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="10%"
                    stopColor="var(--primary)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="0%"
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

          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            Building premium, scalable web & mobile applications powered by
            battle-tested tech stacks and pixel-perfect UI.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-stretch">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            const isBlackBrand = isDarkColor(skill.color);

            // Dynamic styles: use CSS variable `--text-primary` for black icons so they adapt dynamically to both themes!
            const brandColor = isBlackBrand
              ? "var(--text-primary)"
              : skill.color;

            const glowColor = isBlackBrand ? "var(--primary)" : skill.color;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col h-full rounded-3xl"
              >
                {/* Ambient Outer Glow on Hover */}
                <div
                  className="absolute -inset-0.5 rounded-3xl opacity-0 blur-lg transition-all duration-500 group-hover:opacity-40"
                  style={{
                    background: `linear-gradient(135deg, ${glowColor}, transparent)`,
                  }}
                />

                {/* Main Glass Card Shell */}
                <div className="relative flex flex-col justify-between flex-1 h-full overflow-hidden rounded-3xl border border-[var(--border)]/60 bg-[var(--card-bg)]/80 p-6 backdrop-blur-2xl transition-all duration-500 group-hover:border-[var(--border)]">
                  {/* Radial Brand Glow (Corner Accent) */}
                  <div
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{ backgroundColor: glowColor }}
                  />

                  <div>
                    {/* Top Row: Icon Badge & Index */}
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface)] border border-[var(--border)]/80 shadow-inner transition-transform duration-500 group-hover:scale-110"
                        style={{
                          boxShadow: `0 8px 20px -6px ${
                            isBlackBrand
                              ? "rgba(0,0,0,0.15)"
                              : `${brandColor}40`
                          }`,
                        }}
                      >
                        <Icon
                          className="text-2xl transition-transform duration-300 group-hover:rotate-6"
                          style={{ color: brandColor }}
                        />
                      </div>
                    </div>

                    {/* Skill Info */}
                    <div className="mt-6">
                      <h3 className="text-lg font-bold tracking-tight text-[var(--text-primary)] transition-colors">
                        {skill.name}
                      </h3>

                      {skill.tags && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-lg px-2.5 py-1 text-[11px] font-medium border transition-colors"
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

                  {/* Bottom Bar Progress Meter */}
                  <div className="mt-6 pt-4 border-t border-[var(--border)]/40">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-medium text-[var(--text-secondary)]">
                        Proficiency
                      </span>
                      <span
                        className="font-bold font-mono"
                        style={{ color: brandColor }}
                      >
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[var(--border)]/60">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.05,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: brandColor,
                          boxShadow: `0 0 10px ${
                            isBlackBrand ? "var(--primary)" : brandColor
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

"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionTitle from "../sectionTitle/SectionTitle";

const careerData = [
  {
    id: 1,
    company: "Craftnotion",
    period: "2022 - 2024",
    role: "React Native Developer",
    color: "#6C63FF",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    ),
    projects: [
      "Project Pal App",
      "Engine Shark App",
      "Engine Shark Website",
      "Toolque",
      "Art Gharana",
    ],
    tech: ["React Native", "React.js", "Next.js", "Watermelon DB"],
  },
  {
    id: 2,
    company: "Stacksmith",
    period: "2024 - 2026",
    role: "React Native Developer",
    color: "#00C2A8",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    ),
    projects: ["Yumon", "Liquid Therapy", "MO Club", "Postmetrics"],
    tech: ["React Native", "Next.js", "Node.js", "Redux Toolkit", "Firebase"],
  },
  {
    id: 3,
    company: "HRGF / NESMA",
    period: "2026 - Present",
    role: "Senior Frontend Developer",
    color: "#F59E0B",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
      </svg>
    ),
    projects: [
      "Attendance",
      "Payroll",
      "Assets",
      "Leave",
      "Travel",
      "Projects",
      "Team GAA",
      "MO Club",
    ],
    tech: [
      "React Native",
      "Redux",
      "Firebase",
      "REST APIs",
      "Push Notifications",
    ],
  },
];

function CareerJourney() {
  const containerRef = useRef(null);

  // Scroll progress logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="projects"
      className="relative bg-[var(--background)] pt-10 pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[var(--background)] to-[var(--background)]"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_800px_at_50%_50%,rgba(59,130,246,0.12),transparent_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[var(--primary)]/20 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-10 -z-10 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-[var(--primary)]/15 to-transparent blur-[100px]" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          badge="Career Journey"
          title="Companies & Projects"
          subtitle="My professional roadmap from 2022 to Present."
        />

        <div ref={containerRef} className="relative mt-20">
          {/* Base Inactive Straight Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-[var(--border)]/30" />

          {/* Animated Active Glowing Line Passing Through */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 lg:left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-[var(--primary)] via-blue-400 to-amber-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
          />

          <div className="space-y-16 lg:space-y-20">
            {careerData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex items-center pl-14 lg:pl-0 ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Timeline Icon Node Centered Directly On The Line */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute left-6 lg:left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--border)] bg-[var(--background)] text-white shadow-2xl"
                    style={{
                      borderColor: item.color,
                      boxShadow: `0 0 20px ${item.color}60`,
                    }}
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group relative w-full lg:w-[45%] xl:w-[47%]"
                  >
                    {/* Backlight Glow */}
                    <div
                      className="absolute -inset-1 rounded-[2.5rem] opacity-30 blur-xl transition-all duration-500 group-hover:opacity-80 group-hover:blur-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}60 0%, var(--primary)/30 50%, transparent 100%)`,
                      }}
                    />

                    {/* Linear Gradient Border Frame */}
                    <div
                      className="relative rounded-3xl p-[1.5px] transition-all duration-500 shadow-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}80, var(--border) 50%, var(--primary)/20)`,
                      }}
                    >
                      {/* Inner Card Content */}
                      <div
                        className="rounded-[22px] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1"
                        style={{
                          background: `
                          linear-gradient(
                          180deg,
                          rgba(37,99,235,.04) 0%,
                          var(--card-bg) 18%,
                          var(--card-bg) 100%
                          )
                          `,
                        }}
                      >
                        {/* Period Badge - Solid Color */}
                        <span
                          className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.period}
                        </span>

                        {/* Company */}
                        <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                          {item.company}
                        </h3>

                        {/* Role */}
                        <p
                          className="mt-2 text-base sm:text-lg font-semibold"
                          style={{ color: item.color }}
                        >
                          {item.role}
                        </p>

                        {/* Projects */}
                        <div className="mt-8">
                          <h4 className="mb-4 text-base sm:text-lg font-bold text-[var(--text-primary)]">
                            Projects
                          </h4>

                          <div className="flex flex-wrap gap-2.5 sm:gap-3">
                            {item.projects.map((project) => (
                              <span
                                key={project}
                                className="rounded-full border border-[var(--primary)]/20 bg-gradient-to-r from-[var(--primary)]/15 to-transparent px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--primary)] hover:from-[var(--primary)] hover:to-[var(--primary)] hover:text-white shadow-sm"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mt-8">
                          <h4 className="mb-4 text-base sm:text-lg font-bold text-[var(--text-primary)]">
                            Technologies
                          </h4>

                          <div className="flex flex-wrap gap-2.5 sm:gap-3">
                            {item.tech.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerJourney;

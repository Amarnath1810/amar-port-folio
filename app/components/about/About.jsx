"use client";

import { motion } from "framer-motion";
import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";
import { FaRocket, FaCode } from "react-icons/fa";
import { aboutData } from "./aboutData";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--background)] py-12 lg:py-16 transition-all duration-300"
    >
      <div className="container mx-auto max-w-[1220px] px-5 md:px-8 lg:px-0">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <AboutHeader />
        </motion.div>

        {/* Main Section Grid */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Left Column - Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div
              className="
                h-full
                rounded-3xl
                border
                border-[var(--border)]
                bg-[var(--card-bg)]
                p-8
                shadow-lg
                transition-all
                duration-300
                hover:border-[var(--primary)]/30
                hover:shadow-xl
                lg:p-10
              "
            >
              <AboutContent />
            </div>
          </motion.div>

          {/* Right Column - What I Do & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* ================= What I Do ================= */}
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <FaRocket className="text-xl" />
                  </div>

                  <h4 className="text-2xl font-bold text-[var(--text-primary)]">
                    What I Do
                  </h4>
                </div>

                <div className="space-y-6">
                  {aboutData.specializations.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={index}
                        whileHover={{ x: 6 }}
                        transition={{ duration: 0.25 }}
                        className="flex items-start gap-4"
                      >
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                          <Icon className="text-base" />
                        </div>

                        <div>
                          <h5 className="text-base font-semibold text-[var(--text-primary)]">
                            {item.title}
                          </h5>

                          <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* ================= Technologies ================= */}
              <div className="border-l border-[var(--border)] pl-8 lg:pl-10">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <FaCode className="text-xl" />
                  </div>

                  <h4 className="text-2xl font-bold text-[var(--text-primary)]">
                    Technologies
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {aboutData.technologies.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -4,
                          scale: 1.04,
                        }}
                        transition={{ duration: 0.25 }}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-[var(--border)]
                          bg-[var(--surface)]
                          px-4
                          py-2
                          shadow-sm
                          transition-all
                          duration-300
                          hover:border-[var(--primary)]
                          hover:shadow-md
                        "
                      >
                        <Icon className="text-lg text-[var(--primary)]" />

                        <span className="whitespace-nowrap text-sm font-medium text-[var(--text-primary)]">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            <AboutStats />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

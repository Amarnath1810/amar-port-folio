"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    name: "ToolQue",
    image: "/images/toolque.png",
    link: "https://apps.apple.com/us/app/toolque/id6480101842",
  },
  {
    name: "Pets Spa",
    image: "/images/petsSpa.png",
    link: "https://juliepetsspa.com/", // replace with live URL if available
  },
  {
    name: "Art Gharana",
    image: "/images/artGharana.png",
    link: "https://www.artgharana.com/",
  },
  {
    name: "Engine Shark",
    image: "/images/engineshark.png",
    link: "https://www.engineshark.com/",
  },
  {
    name: "Liquid Therapy",
    image: "/images/liquid Therapy.png",
    link: "https://play.google.com/store/apps/details?id=com.liquidtherapy.liquidandroid&hl=en_IN",
  },
  {
    name: "Mo Club",
    image: "/images/moClub.png",
    link: "https://www.moclub.ie/",
  },
];
const SLOT_WIDTH = 360;
const SLOT_HEIGHT = 340;

const positions = [
  { x: 0, y: 0 },
  { x: SLOT_WIDTH, y: 0 },
  { x: SLOT_WIDTH * 2, y: 0 },

  { x: 0, y: SLOT_HEIGHT },
  { x: SLOT_WIDTH, y: SLOT_HEIGHT },
  { x: SLOT_WIDTH * 2, y: SLOT_HEIGHT },
];

export default function MyProjects() {
  const [slots, setSlots] = useState([0, 1, 2, 3, 4, 5]);
  const [hovered, setHovered] = useState(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const isMobile = !isDesktop;

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);
  useEffect(() => {
    if (!isDesktop || hovered !== null) return;

    const timer = setInterval(() => {
      setSlots((prev) => {
        const next = [...prev];

        const last = next[5];

        next[5] = next[4];
        next[4] = next[3];
        next[3] = next[0];
        next[0] = next[1];
        next[1] = next[2];
        next[2] = last;

        return next;
      });
    }, 900);

    return () => clearInterval(timer);
  }, [hovered, isDesktop]);
  return (
    <section className="py-24" id="projects">
      <h2 className="mb-0 text-center text-5xl font-bold">Featured Projects</h2>
      <div className="mt-4 mb-16 flex justify-start md:justify-center">
        <svg
          width="720"
          height="20"
          viewBox="0 0 220 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="fadeLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="10%" stopColor="var(--primary)" stopOpacity="1" />
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
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

      <div
        className={
          isDesktop
            ? "relative mx-auto h-[650px] w-[1100px]"
            : "grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 max-w-6xl mx-auto"
        }
      >
        {slots.map((imgIndex, slotIndex) => (
          <motion.div
            key={imgIndex}
            onHoverStart={() => setHovered(imgIndex)}
            onHoverEnd={() => setHovered(null)}
            animate={
              isDesktop
                ? {
                    x: positions[slotIndex].x,
                    y: positions[slotIndex].y,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.04,
            }}
            style={{
              zIndex: hovered === imgIndex ? 10 : 1,
            }}
            className={`group overflow-hidden rounded-[28px] shadow-2xl cursor-pointer
    ${
      isDesktop
        ? "absolute h-[300px] w-[330px]"
        : "relative h-[240px] sm:h-[260px] w-full"
    }`}
          >
            {/* Image */}
            <Image
              src={projects[imgIndex].image}
              alt={projects[imgIndex].name}
              fill
              className="object-cover duration-700 group-hover:scale-110"
            />

            {/* Dark Overlay */}
            {/* Dark Overlay */}
            <div
              className={`absolute inset-0 transition-all duration-500 ${
                isDesktop ? "bg-black/0 group-hover:bg-black/55" : "bg-black/50"
              }`}
            />

            {/* Glow */}
            <div
              className={`absolute -inset-1 rounded-[28px] transition duration-500 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl ${
                isDesktop ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            />
            {/* Project Name */}
            <motion.a
              href={projects[imgIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              //   initial={{
              //     y: isMobile ? 0 : 30,
              //     opacity: isMobile ? 1 : 0,
              //   }}
              animate={{
                y: isMobile || hovered === imgIndex ? 0 : 30,
                opacity: isMobile || hovered === imgIndex ? 1 : 0,
              }}
              transition={{ duration: 0.35 }}
              className="absolute bottom-8 left-8 z-20"
            >
              <h3 className="text-3xl font-bold text-white">
                {projects[imgIndex].name}
              </h3>

              <p className="mt-2 text-white/80">View Project →</p>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

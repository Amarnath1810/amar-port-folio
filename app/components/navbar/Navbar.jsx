"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import ThemeSwitcher from "../togglerSwitch/ThemeSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[95%] -translate-x-1/2 sm:w-[92%] md:w-[88%] lg:w-[72%] xl:w-[65%]">
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="
          relative
          flex
          h-[72px]
          items-center
          justify-between
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--card-bg)]/70
          px-6
          backdrop-blur-xl
          shadow-2xl
        "
      >
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.04 }}
          className="group flex items-center gap-2.5 select-none"
        >
          {/* Monogram Box */}
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] font-mono text-lg font-black text-white shadow-lg shadow-[var(--primary)]/20 transition-transform duration-300 group-hover:rotate-6">
            A
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          {/* Full Name */}
          <span className="text-2xl font-black tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--primary)]">
            Amar
          </span>
        </motion.a>
        {/* Desktop Menu */}
        <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-12">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  text-[15px]
                  font-medium
                  text-[var(--text-secondary)]
                  transition-all
                  duration-300
                  hover:text-[var(--primary)]
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-[var(--primary)]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="
              rounded-full
              p-2
              text-[var(--text-primary)]
              transition
              hover:bg-[var(--primary)]/10
              lg:hidden
            "
          >
            {open ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -25,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              mt-4
              overflow-hidden
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--card-bg)]/90
              backdrop-blur-xl
              shadow-2xl
              lg:hidden
            "
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="
                  block
                  border-b
                  border-[var(--border)]
                  px-6
                  py-5
                  text-center
                  text-lg
                  font-medium
                  text-[var(--text-primary)]
                  transition-all
                  duration-300
                  hover:bg-[var(--primary)]/10
                  hover:text-[var(--primary)]
                  last:border-none
                "
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

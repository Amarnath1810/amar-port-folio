"use client";

import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaUsers,
  FaAward,
  FaServer,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaLongArrowAltRight,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaAward />,
    value: "3.5+",
    title: "Years Experience",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaRocket />,
    value: "25+",
    title: "Projects Delivered",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaCode />,
    value: "12+",
    title: "Technologies",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaUsers />,
    value: "100K+",
    title: "Users Served",
    color: "from-orange-500 to-yellow-500",
  },
];

const expertise = [
  "React Native Development",
  "React.js & Next.js",
  "REST API Integration",
  "Redux Toolkit",
  "Firebase Services",
  "Node.js & Express.js",
  "Authentication & Security",
  "Performance Optimization",
];

const achievements = [
  "Built enterprise HRMS applications",
  "Delivered 25+ production features",
  "Published Android & iOS applications",
  "Integrated REST APIs & Firebase",
  "Optimized application performance",
  "Reusable component architecture",
];

const process = [
  {
    icon: <FaLaptopCode />,
    title: "Requirement",
  },
  {
    icon: <FaMobileAlt />,
    title: "UI Design",
  },
  {
    icon: <FaCode />,
    title: "Development",
  },
  {
    icon: <FaServer />,
    title: "API Integration",
  },
  {
    icon: <FaShieldAlt />,
    title: "Testing",
  },
  {
    icon: <FaRocket />,
    title: "Deployment",
  },
];

function MyExperience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[var(--background)] py-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,.12),transparent_70%)]" />

      <div className="container mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[var(--primary)]">
            Experience
          </span>

          <h2 className="mt-6 text-5xl font-black text-[var(--text-primary)]">
            My{" "}
            <span className="text-[var(--primary)]">Experience & Impact</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            Passionate about building scalable web & mobile applications with
            clean architecture, modern technologies and exceptional user
            experiences.
          </p>
        </div>
        {/* Stats */}
        {/* <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-[var(--primary)]"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-3xl text-white`}
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-5xl font-black text-[var(--text-primary)]">
                {item.value}
              </h3>

              <p className="mt-2 text-[var(--text-secondary)]">{item.title}</p>
            </div>
          ))}
        </div> */}
        {/* Two Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Expertise */}

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-8">
            <h3 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[var(--text-primary)]">
              <FaLaptopCode className="text-[var(--primary)]" />
              Core Expertise
            </h3>

            <div className="grid gap-4">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-4 transition hover:border-[var(--primary)] hover:bg-[var(--primary)]/10"
                >
                  <FaCheckCircle className="text-[var(--primary)]" />

                  <span className="text-[var(--text-primary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-8">
            <h3 className="mb-8 flex items-center gap-3 text-3xl font-bold text-[var(--text-primary)]">
              <FaAward className="text-yellow-400" />
              Key Achievements
            </h3>

            <div className="grid gap-4">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/40 p-4 transition hover:border-[var(--primary)] hover:bg-[var(--primary)]/10"
                >
                  <FaArrowRight className="text-[var(--primary)]" />

                  <span className="text-[var(--text-primary)]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Development Process */}

        <div className="mt-20 rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-10">
          <h3 className="mb-14 text-center text-3xl font-bold text-[var(--text-primary)]">
            Development Process
          </h3>

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {process.map((item, index) => (
              <div key={item.title} className="relative text-center">
                {/* Dotted Line + Chevron Arrowhead ('>') */}
                {index < process.length - 1 && (
                  <div className="hidden lg:flex absolute left-[55%] top-10 w-[90%] items-center -z-0 pointer-events-none">
                    {/* Dotted / Dashed Line */}
                    <div className="flex-1 border-t-2 border-dashed border-[var(--primary)]/40" />

                    {/* '>' Chevron Arrowhead */}
                    <svg
                      className="-ml-1.5 h-3.5 w-3.5 text-[var(--primary)]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}

                {/* Step Icon */}
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-blue-500 text-3xl text-white shadow-lg">
                  {item.icon}
                </div>

                {/* Step Title */}
                <h4 className="mt-5 font-bold text-[var(--text-primary)]">
                  {item.title}
                </h4>

                {/* Step Number */}
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Step {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default MyExperience;

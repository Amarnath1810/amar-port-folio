import { FaReact, FaNodeJs, FaMobileAlt, FaCode } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

export const aboutData = {
  badge: "ABOUT ME",

  heading: {
    first: "Who I Am &",
    highlight: "What I Do",
  },

  subtitle: "Passionate about building exceptional digital experiences.",

  greeting: "Hello! I'm",

  name: "Veeramreddy Amarnath Reddy",

  description: [
    "I'm a passionate Full Stack Developer with 3.5+ years of experience building scalable, high-performance web and mobile applications.",

    "I specialize in React Native, React.js, Next.js, Node.js, Express.js and MongoDB. I enjoy transforming complex business requirements into clean, responsive and intuitive user experiences.",

    "I love writing clean, reusable code, learning modern technologies and building products that make a real impact.",
  ],

  specializations: [
    {
      icon: FaMobileAlt,
      title: "Mobile Development",
      description: "React Native (Android & iOS)",
    },
    {
      icon: FaReact,
      title: "Frontend Development",
      description: "React.js & Next.js",
    },
    {
      icon: FaNodeJs,
      title: "Backend Development",
      description: "Node.js & Express.js",
    },
  ],

  technologies: [
    {
      name: "React Native",
      icon: FaReact,
    },
    {
      name: "React.js",
      icon: FaReact,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
    },
    {
      name: "Express.js",
      icon: SiExpress,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
    },
  ],

  stats: [
    {
      number: "3.5+",
      title: "Years Experience",
      description: "Building scalable applications",
    },
    {
      number: "30+",
      title: "Projects Completed",
      description: "Enterprise & client projects",
    },
    {
      number: "10+",
      title: "Technologies",
      description: "Frontend, Backend & Mobile",
    },
    {
      number: "Full Stack",
      title: "Developer",
      description: "End-to-end application development",
    },
  ],
};

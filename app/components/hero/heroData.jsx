import { FaGithub, FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export const heroData = {
  greeting: "👋 Hello, I'm",

  firstName: "VEERAMREDDY",

  lastName: "AMARNATH REDDY",

  designation: [
    "Full Stack Developer",
    "React Native Developer",
    "Frontend Developer",
    "Backend Developer",
  ],

  description:
    "Building scalable Web & Mobile Applications using React Native, React.js, Next.js, Node.js, Express.js and MongoDB. Passionate about creating clean, responsive and high-performance applications.",

  resume: "/resume/Amarnath-Resume.pdf",

  buttons: {
    resume: "Download Resume",
    project: "View Projects",
  },
};

export const skills = [
  "React Native",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
];

export const orbitIcons = [
  { name: "React", icon: "/images/React-icon.svg" },
  { name: "Next.js", icon: "/images/nextdotjs.svg" },
  { name: "Node.js", icon: "/images/nodedotjs.svg" },
  { name: "MongoDB", icon: "/images/mongodb.svg" },
  { name: "Firebase", icon: "/images/firebase.svg" },
];
export const socialLinks = [
  {
    id: 1,
    icon: FaGithub,
    url: "https://github.com/your-github",
  },
  {
    id: 2,
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/veeramreddy-amarnathreddy-84662022a/",
  },
  {
    id: 3,
    icon: MdEmail,
    url: "mailto:yourmail@gmail.com",
  },
];
export const backgroundBlobs = [
  {
    id: 1,
    top: "10%",
    left: "-5%",
    size: 300,
  },
  {
    id: 2,
    bottom: "5%",
    right: "-5%",
    size: 350,
  },
  {
    id: 3,
    bottom: "10%",
    left: "25%",
    size: 180,
  },
];

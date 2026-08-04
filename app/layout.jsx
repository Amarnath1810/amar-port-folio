import "./globals.scss";
import { ThemeProvider } from "./utils/context/ThemeContext";
import Navbar from "./components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://amar-port-folio.vercel.app"),
title: {
    default:
      "Veeramreddy Amarnath Reddy | Amar | Full Stack Developer | React Native | Next.js Developer",
    template: "%s | Veeramreddy Amarnath Reddy | Amaranth reddy v",
  },
description:
    "Veeramreddy Amarnath Reddy (Amar) is a Full Stack Developer with 3.5+ years of experience in React Native, React.js, Next.js, Node.js, MongoDB, JavaScript, TypeScript, Android and iOS app development. Explore portfolio, projects, GitHub and professional experience.",

  

  applicationName: "Amar Portfolio",

keywords: [
    "Veeramreddy Amarnath Reddy",
    "Amarnath Reddy",
    "Amar Reddy",
    "Amar",
    "Amarnath",
    "Veeramreddy",
    "Full Stack Developer",
    "React Native Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Android Developer",
    "iOS Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "HRGF Developer",
    "NESMA Developer",
    "Portfolio",
  ],

  authors: [
    {
      name: "Veeramreddy Amarnath Reddy",
      url: "https://github.com/Amarnath1810",
    },
  ],

  creator: "Veeramreddy Amarnath Reddy",
  email:"veeramreddyamar36@gmail.com",
  publisher: "Veeramreddy Amarnath Reddy",

  category: "technology",

  alternates: {
    canonical: "https://amar-port-folio.vercel.app",
  },

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
verification: {
  google: "OFZM907cxLUnbSIzOK0N5Trpu9EtmfD9Zm0oy6wcxoA",
},

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amar-port-folio.vercel.app",
    siteName: "Amar Portfolio",

    title: "Amar | Full Stack Developer",

    description:
      "Full Stack Developer specializing in React Native, React.js, Next.js, Node.js, Express.js and MongoDB.",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Amar | Full Stack Developer",

    description:
      "Full Stack Developer specializing in React Native, React.js, Next.js, Node.js and MongoDB.",

    images: ["/images/og-image.png"],
  },

  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
      },
      {
        url: "/images/favicon-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
    ],

    shortcut: "/images/favicon.ico",

    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  themeColor: "#2563eb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Script
  id="person-jsonld"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",

      "@id": "https://amarnathreddy.vercel.app/#person",

      name: "Veeramreddy Amarnath Reddy",

      givenName: "Amarnath",

      familyName: "Veeramreddy",

      additionalName: "Amar",

      alternateName: [
        "Amarnath Reddy",
        "Amar Reddy",
        "Amar",
        "Amarnath",
        "Veeramreddy Amar",
        "Veeramreddy Amarnath",
        "Amar Nath Reddy",
        "Veeramreddy Amarnath Reddy",
        "Amar Full Stack Developer",
        "Amarnath Full Stack Developer",
        "React Native Developer Amar",
        "React Native Developer Amarnath",
        "React Developer Amar",
        "React.js Developer Amar",
        "Next.js Developer Amar",
        "Node.js Developer Amar",
        "JavaScript Developer Amar",
        "TypeScript Developer Amar",
        "MongoDB Developer Amar",
        "Frontend Developer Amar",
        "Backend Developer Amar",
        "Software Engineer Amar",
        "Full Stack Developer Amar",
        "HRGF Amar",
        "HRGF Amarnath",
        "NESMA Developer",
      ],

      gender: "Male",

      nationality: "Indian",

      jobTitle: "Full Stack Developer",

      description:
        "Veeramreddy Amarnath Reddy is a Full Stack Developer with 3.5+ years of experience specializing in React Native, React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript and TypeScript. Passionate about building high-performance web and mobile applications.",

      url: "https://amarnathreddy.vercel.app",

      image:
        "https://amarnathreddy.vercel.app/images/profile.png",

      email: "mailto:veeramreddyamar36@gmail.com",

      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
      },

      worksFor: {
        "@type": "Organization",
        name: "HRGF",
      },

      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "NBKR Institute of Science and Technology",
      },

      knowsLanguage: [
        "English",
        "Telugu",
      ],

      knowsAbout: [
        "React",
        "React.js",
        "React Native",
        "Next.js",
        "Node.js",
        "Express.js",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "Redux",
        "REST API",
        "Firebase",
        "GraphQL",
        "HTML5",
        "CSS3",
        "SCSS",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "Responsive Web Design",
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "Mobile Application Development",
        "Android Development",
        "iOS Development",
      ],

      sameAs: [
        "https://github.com/Amarnath1810",
        "https://www.linkedin.com/in/veeramreddy-amarnathreddy-84662022a/",
        "https://amarnathreddy.vercel.app",
      ],
    }),
  }}
/>
        <ThemeProvider>
          <Navbar />

          {children}

          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

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
    default: "Amar | Full Stack Developer",
    template: "%s | Amar",
  },

  description:
    "Full Stack Developer with 3.5+ years of experience building scalable Web & Mobile Applications using React Native, React.js, Next.js, Node.js, Express.js and MongoDB.",

  applicationName: "Amar Portfolio",

  keywords: [
    "Amar",
    "Veeramreddy Amarnath Reddy",
    "Amarnath Reddy",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Native Developer",
    "React Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Mobile App Developer",
    "India",
  ],

  authors: [
    {
      name: "Veeramreddy Amarnath Reddy",
      url: "https://github.com/Amarnath1810",
    },
  ],

  creator: "Veeramreddy Amarnath Reddy",

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

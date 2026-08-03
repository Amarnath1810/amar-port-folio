"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaUser,
  FaTag,
  FaPen,
  FaBriefcase,
  FaDownload,
  FaExternalLinkAlt,
  FaBolt,
  FaLock,
  FaSmile,
} from "react-icons/fa";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const maxLength = 500;
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
  console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
  console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
  const validate = () => {
    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    if (!form.subject.trim()) {
      toast.error("Please enter subject");
      return false;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }

    if (form.message.length < 15) {
      toast.error("Message should be at least 15 characters");
      return false;
    }

    return true;
  };
  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setLoading(false);
      } else {
        toast.error("Failed to send message. Please try again.");
      }

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--background)] py-28 text-[var(--text-primary)] transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-100px] top-1/4 h-[500px] w-[500px] rounded-full bg-[var(--primary)]/10 blur-[150px]" />
        <div className="absolute right-[-100px] bottom-1/4 h-[500px] w-[500px] rounded-full bg-[var(--secondary)]/10 blur-[150px]" />
        <div className="absolute left-1/3 top-10 h-[300px] w-[300px] rounded-full bg-[var(--primary)]/5 blur-[120px]" />
      </div>
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[var(--primary)] backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <FaPaperPlane className="text-xs" /> GET IN TOUCH
            <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl text-[var(--text-primary)]"
          >
            Let's Build Something <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient)" }}
            >
              Amazing
            </span>{" "}
            Together
          </motion.h2>
          <div className="mt-4 mb-8 flex justify-start md:justify-center">
            <svg
              width="720"
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

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
            Have a project in mind or want to collaborate? <br />
            I'd love to hear from you!
          </p>
        </div>

        {/* Main Grid Section */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[380px_1fr] items-start">
          {/* Left Connect Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[var(--border)] bg-[var(--card-bg)]/80 p-8 shadow-2xl backdrop-blur-2xl transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                <FaUser className="text-sm" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                Let's Connect
              </h3>
            </div>

            <div className="mt-8 space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Email</p>
                  <a
                    href="mailto:veeramreddyamar36@gmail.com"
                    className="text-sm font-medium text-[var(--text-primary)] transition hover:text-[var(--primary)]"
                  >
                    veeramreddyamar36@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 text-[var(--secondary)]">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-sm font-medium text-[var(--text-primary)] transition hover:text-[var(--secondary)]"
                  >
                    +91 6302158281
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Location
                  </p>
                  <h4 className="text-sm font-medium text-[var(--text-primary)]">
                    Hyderabad, India
                  </h4>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--secondary)]/20 bg-[var(--secondary)]/10 text-[var(--secondary)]">
                  <FaBriefcase />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-secondary)]">Status</p>
                  <h4 className="text-sm font-medium text-[var(--text-primary)]">
                    Available for Freelance
                  </h4>
                </div>
              </div>
            </div>

            <hr className="my-8 border-[var(--border)]" />

            {/* Social Media Links */}
            <div>
              <p className="text-xs font-semibold text-[var(--text-secondary)]">
                Find me on
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                >
                  <FaGithub className="text-lg" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                >
                  <FaLinkedin className="text-lg" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition hover:border-[var(--primary)]/50 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                >
                  <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--primary)]/30 bg-[var(--primary)]/10 py-3.5 text-xs font-semibold text-[var(--primary)] backdrop-blur-xl transition hover:border-[var(--primary)] hover:bg-[var(--primary)]/20"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          {/* Right Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-3xl border border-[var(--border)] bg-[var(--card-bg)]/80 p-8 shadow-2xl backdrop-blur-2xl transition-colors duration-300"
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <FaEnvelope className="text-sm" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Send Me a Message
                </h3>
              </div>

              <form className="mt-8 space-y-6" onSubmit={sendEmail}>
                {/* Row 1: Name & Email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2">
                      Your Name
                    </label>
                    <div className="relative flex items-center">
                      <FaUser className="absolute left-4 text-xs text-[var(--text-secondary)]" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 outline-none transition focus:border-[var(--primary)] focus:bg-[var(--card-bg)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2">
                      Email Address
                    </label>
                    <div className="relative flex items-center">
                      <FaEnvelope className="absolute left-4 text-xs text-[var(--text-secondary)]" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 outline-none transition focus:border-[var(--primary)] focus:bg-[var(--card-bg)]"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2">
                    Subject
                  </label>
                  <div className="relative flex items-center">
                    <FaTag className="absolute left-4 text-xs text-[var(--text-secondary)]" />
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 outline-none transition focus:border-[var(--primary)] focus:bg-[var(--card-bg)]"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <FaPen className="absolute left-4 top-4 text-xs text-[var(--text-secondary)]" />
                    <textarea
                      rows={5}
                      maxLength={maxLength}
                      value={form.message}
                      onChange={handleChange}
                      name="message"
                      placeholder="Write your message here..."
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] py-3.5 pl-11 pr-4 text-xs text-[var(--text-primary)] placeholder-[var(--text-secondary)]/60 outline-none transition focus:border-[var(--primary)] focus:bg-[var(--card-bg)] resize-none"
                    />
                    <div className="absolute bottom-3 right-4 text-[10px] text-[var(--text-secondary)] font-mono">
                      {message.length} / {maxLength}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl py-4 font-bold text-white transition disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ background: "var(--gradient)" }}
                >
                  {loading && (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  )}

                  <span>{loading ? "Sending..." : "Send Message"}</span>

                  {!loading && (
                    <FaPaperPlane className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </button>
              </form>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-around gap-4 border-t border-[var(--border)] pt-6 text-[11px] font-medium text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <FaBolt className="text-[var(--primary)]" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLock className="text-[var(--primary)]" />
                <span>Your information is secure</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSmile className="text-[var(--primary)]" />
                <span>Friendly Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

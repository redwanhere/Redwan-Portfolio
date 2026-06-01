"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Star } from "lucide-react";

function XIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}
function FacebookIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function InstagramIcon({ size = 20, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: XIcon, href: "https://x.com/theredwan", label: "X" },
  { icon: FacebookIcon, href: "https://facebook.com/theredwan", label: "Facebook" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/theredwan", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://instagram.com/theredwan", label: "Instagram" },
];

const WORDS = ["Media Buyer", "Analytics Expert", "Growth Hacker", "DTC Specialist"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 60]);
  const fadeOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  // Single-line typing animation
  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let timeout;
    if (!isDeleting && charIndex <= currentWord.length) {
      setDisplayed(currentWord.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 100);
    } else if (!isDeleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      setDisplayed(currentWord.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 55);
    } else {
      setIsDeleting(false);
      setWordIndex((w) => (w + 1) % WORDS.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden dot-grid"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ───── LEFT COLUMN: Text Content ───── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:pr-8"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="inline-flex w-fit">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface/70 border border-border/80 backdrop-blur-sm">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inset-0 rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span className="text-xs font-dmSans font-semibold text-text-muted uppercase tracking-wider whitespace-nowrap">
                  Available for new projects
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-syne font-extrabold text-white tracking-tight leading-[1.05]">
                Hi, I&apos;m{" "}
                <span className="text-gradient-primary">Redwanul</span>
              </h1>
              {/* Fixed-height typing line — stays on exactly 1 line */}
              <div className="h-10 sm:h-12 lg:h-14 flex items-center">
                <p className="text-xl sm:text-2xl lg:text-3xl font-syne font-bold text-white/75 whitespace-nowrap overflow-hidden">
                  <span className="text-accent">{displayed}</span>
                  <span className="inline-block w-[2px] h-[0.9em] bg-primary ml-0.5 align-middle animate-pulse" />
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-dmSans text-text-muted max-w-xl leading-relaxed"
            >
              Managing <span className="text-white font-semibold">$8M+</span> in ad spend across Meta, Google & TikTok. I engineer server-side tracking, optimize checkout funnels, and turn budgets into{" "}
              <span className="text-white font-semibold">predictable revenue</span>.
            </motion.p>

            {/* CTA buttons — always 1 row on sm+ */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <motion.a
                href="https://calendly.com/theredwan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(99,102,241,0.45)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl bg-primary hover:bg-indigo-500 text-white font-dmSans font-bold text-base flex items-center justify-center gap-2.5 transition-colors relative overflow-hidden shimmer group"
              >
                <span>Free Consultation</span>
                <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
              </motion.a>

              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.04, borderColor: "#6366F1" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl border border-border/80 bg-surface/40 hover:bg-surface/70 text-text-muted hover:text-white font-dmSans font-semibold text-base flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
              >
                <span>View My Work</span>
                <ArrowUpRight size={17} />
              </motion.a>
            </motion.div>

            {/* Social row */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="text-[11px] font-dmSans text-text-muted/50 uppercase tracking-widest">Follow</span>
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl border border-border/60 bg-surface/40 text-text-muted hover:text-primary hover:border-primary/40 transition-all duration-200 backdrop-blur-sm"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Mini stats bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40"
            >
              {[
                { val: "$8M+", label: "Ad Spend" },
                { val: "4.2x", label: "Avg. ROAS" },
                { val: "98%", label: "Attribution" },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface/50 backdrop-blur-sm px-4 py-4 flex flex-col items-center gap-1">
                  <span className="text-lg sm:text-xl font-syne font-extrabold text-white">{stat.val}</span>
                  <span className="text-[10px] font-dmSans text-text-muted uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ───── RIGHT COLUMN: Profile Image ───── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: parallaxY }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full bg-primary/10 blur-[60px]" />
            </div>

            {/* Profile frame container */}
            <div className="relative w-[300px] h-[370px] sm:w-[360px] sm:h-[440px] lg:w-[400px] lg:h-[490px]">

              {/* Decorative rotating border ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] border border-primary/20 rotate-3" />
              <div className="absolute -inset-5 rounded-[3rem] border border-accent/10 -rotate-2" />

              {/* Main image frame */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-border/60 bg-surface shadow-2xl group">
                {/* Gradient overlay on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/60 via-transparent to-transparent z-10 pointer-events-none" />

                <Image
                  src="/redwan-profile.png"
                  alt="Redwanul Haque — Media Buyer & Analytics Expert"
                  fill
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 400px"
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Name tag overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 z-20 px-5 pb-5 pt-12 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-syne font-extrabold text-white text-lg leading-tight">Redwanul Haque</p>
                  <p className="font-dmSans text-xs text-text-muted mt-0.5">Media Buyer & Analytics Expert</p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-6 z-30 bg-surface/90 backdrop-blur-md border border-border/80 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl"
              >
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inset-0 rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                </span>
                <div>
                  <p className="text-[10px] font-dmSans text-text-muted uppercase tracking-wider">Status</p>
                  <p className="text-xs font-syne font-bold text-white whitespace-nowrap">$8M+ Managed</p>
                </div>
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-4 sm:-left-8 z-30 bg-surface/90 backdrop-blur-md border border-border/80 p-3.5 rounded-2xl flex items-center gap-3 shadow-xl"
              >
                <div className="flex -space-x-1.5">
                  {["A", "B", "C"].map((l) => (
                    <div key={l} className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-surface flex items-center justify-center text-[9px] font-bold text-white">
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={9} fill="#F59E0B" className="text-amber-500" />
                    ))}
                  </div>
                  <p className="text-[10px] font-dmSans text-text-muted mt-0.5 whitespace-nowrap">50+ happy clients</p>
                </div>
              </motion.div>

              {/* Corner accent dots */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-primary/60" />
              <div className="absolute top-4 left-8 w-1 h-1 rounded-full bg-accent/40" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity: fadeOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted/40 pointer-events-none"
      >
        <span className="text-[10px] font-dmSans uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

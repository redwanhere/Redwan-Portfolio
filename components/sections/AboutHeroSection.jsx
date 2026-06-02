"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Calendar, ArrowRight } from "lucide-react";
import aboutData from "../../data/about.json";
import SectionLabel from "../ui/SectionLabel";

export default function AboutHeroSection() {
  const { hero } = aboutData;

  return (
    <section className="relative w-full pt-32 pb-16 overflow-hidden bg-[#0A0D14]">
      
      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait image with 4:5 aspect ratio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1 lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-72 sm:w-[350px] aspect-[4/5] rounded-[32px] p-1.5 bg-gradient-to-tr from-primary to-accent shadow-glow-indigo/20">
              <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-surface border-4 border-surface">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&fit=crop"
                  alt="Redwanul Haque"
                  fill
                  sizes="(max-width: 768px) 280px, 350px"
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating experience badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-surface/95 backdrop-blur-md border border-border p-4 rounded-2xl flex items-center gap-3.5 shadow-2xl hover:border-primary/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Calendar size={18} />
                </div>
                <div>
                  <span className="text-xs text-text-muted leading-none block">Status</span>
                  <span className="text-sm font-syne font-extrabold text-white mt-0.5 block">Active Expert</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="col-span-1 lg:col-span-7 flex flex-col gap-6 text-left"
          >
            <div>
              <SectionLabel text="Who I Am" />
              <h1 className="text-4xl sm:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight select-none">
                My Name is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-success italic font-normal tracking-wide">
                  {hero.title}
                </span>
              </h1>
            </div>

            <p className="text-lg font-dmSans text-white font-semibold leading-relaxed border-l-2 border-accent pl-4">
              {hero.tagline}
            </p>

            <p className="text-text-muted font-dmSans text-base md:text-lg leading-relaxed">
              I am a performance-driven Media Buyer and Web Analytics Specialist based in Chattogram, Bangladesh. Over the last 2+ years, I have helped DTC and high-growth retail brands optimize their funnel, capture missing attribution data, and scale their marketing budgets with high precision. My approach is purely mathematical: eliminate guessing, isolate creative variables, configure solid server-side tracking loops, and let hard metrics direct the scaling path.
            </p>

            {/* 2x2 Info Grid */}
            <div className="grid grid-cols-2 gap-6 p-6 rounded-2xl bg-surface border border-border/80 mt-2">
              {hero.infoGrid.map((info) => (
                <div key={info.label} className="flex flex-col gap-1">
                  <span className="text-xs font-syne font-bold uppercase tracking-wider text-text-muted">
                    {info.label}
                  </span>
                  <span className="text-sm sm:text-base font-dmSans font-medium text-white truncate">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                href="mailto:theredwan.me@gmail.com?subject=Inquiry%20from%20About%20Page"
                className="px-6 py-3.5 rounded-xl bg-primary hover:bg-indigo-500 text-white font-dmSans font-bold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Mail size={16} />
                <span>Email Me</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, borderColor: "#6366F1", color: "#F9FAFB" }}
                whileTap={{ scale: 0.97 }}
                href="https://calendly.com/redwan4digital/free-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl border border-border bg-surface/30 hover:bg-surface/60 text-text-muted font-dmSans font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Free Strategy Call</span>
                <ArrowRight size={16} />
              </motion.a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import servicesPageData from "../../data/services-page.json";
import SectionLabel from "../ui/SectionLabel";

export default function ServicesHeroSection() {
  const { hero } = servicesPageData;

  return (
    <section className="relative w-full pt-36 pb-12 overflow-hidden bg-[#0A0D14] text-center">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-4">
        
        {/* Section Label Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel text="My Capabilities" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white tracking-tight leading-tight"
        >
          {hero.title}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl font-dmSans text-text-muted max-w-2xl leading-relaxed mt-2"
        >
          {hero.subtext}
        </motion.p>

      </div>
    </section>
  );
}

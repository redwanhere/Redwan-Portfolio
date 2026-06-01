"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactHeroSection() {
  return (
    <section className="relative w-full pt-36 pb-8 bg-[#0A0D14] overflow-hidden text-center">
      
      {/* Background glow decorator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-3">
        
        {/* Breadcrumb row */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-dmSans font-medium text-text-muted/70 tracking-wide uppercase flex items-center gap-2 mb-2"
        >
          <span>My Blog</span>
          <span className="text-primary font-bold">›</span>
          <span className="text-white">Contact</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white tracking-tight leading-tight"
        >
          Get In Touch
        </motion.h1>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg font-dmSans text-text-muted max-w-xl leading-relaxed mt-2"
        >
          Have media buying objectives or web analytics blockages? Drop a message to secure predictable growth.
        </motion.p>

      </div>
    </section>
  );
}

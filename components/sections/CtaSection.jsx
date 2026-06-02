"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, Zap } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

export default function CtaSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden border-t border-border/40">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
            <Zap size={28} className="text-primary" />
          </div>

          <div className="flex flex-col gap-4">
            <SectionLabel text="Ready to Scale?" className="justify-center" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s grow your brand{" "}
              <span className="text-gradient-primary">together</span>
            </h2>
            <p className="text-text-muted font-dmSans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you need to scale ad spend, audit tracking setups, or build full-funnel marketing systems — I&apos;m here to help you achieve predictable, data-backed growth.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <motion.a
              href="https://calendly.com/redwan4digital/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(99, 102, 241, 0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-indigo-500 text-white font-dmSans font-bold text-base flex items-center justify-center gap-2.5 transition-colors relative overflow-hidden shimmer group"
            >
              <Calendar size={18} />
              <span>Book a Free Strategy Call</span>
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="mailto:theredwan.me@gmail.com?subject=Project%20Inquiry&body=Hi%20Redwan,"
              whileHover={{ scale: 1.04, borderColor: "#6366F1" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-border/80 bg-surface/40 hover:bg-surface/70 text-text-muted hover:text-white font-dmSans font-semibold text-base flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
            >
              <Mail size={18} />
              <span>Send an Email</span>
            </motion.a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-2">
            {[
              "No commitment required",
              "Response within 24h",
              "Worldwide clients",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-xs font-dmSans text-text-muted/70">
                <span className="w-1.5 h-1.5 rounded-full bg-success" />
                {item}
              </span>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

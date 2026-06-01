"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "../ui/SectionLabel";
import { CheckCircle2 } from "lucide-react";

const SOFT_SKILLS = [
  { name: "Problem-Solving", percentage: 98 },
  { name: "Analytical Thinking", percentage: 95 },
  { name: "Communication", percentage: 100 },
  { name: "AI & Automation Literacy", percentage: 95 },
];

const TECH_STACK = [
  "Meta Ads", "Google Ads", "TikTok Ads", "GA4", "GTM",
  "sGTM", "Looker Studio", "Hotjar", "Klaviyo", "Shopify",
];

const HIGHLIGHTS = [
  "Server-side tracking & Conversions API",
  "Multi-channel attribution modeling",
  "DTC brand scaling & funnel optimization",
  "Creative testing frameworks",
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 relative border-t border-border/40 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <SectionLabel text="About Me" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight mt-3">
            The Strategy Behind <span className="text-gradient-primary">the Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Bio + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 lg:col-span-7 flex flex-col gap-8"
          >
            {/* Bio card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface/60 border border-border/80 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-4 font-dmSans text-text-muted text-base leading-relaxed">
                <p>
                  I&apos;m <strong className="text-white font-semibold">Redwanul Haque</strong>, a Media Buyer & Web Analytics Expert specialized in engineering high-growth funnels for Direct-to-Consumer (DTC) brands. My work resolves entirely around metrics, structured testing, and rock-solid technical foundations.
                </p>
                <p>
                  Instead of assumptions or guesswork, I audit attribution structures surgically — using server-side tracking matrices, Google Tag Manager node loops, and Conversions APIs to track <strong className="text-white font-semibold">98% of customer conversion cycles</strong> accurately.
                </p>
                <p>
                  With solid data in place, I allocate ad budgets across Meta, Google, and TikTok to yield reliable, predictable revenue expansion month after month.
                </p>
              </div>
            </div>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface/40 border border-border/60 hover:border-primary/30 transition-colors group"
                >
                  <CheckCircle2 size={16} className="text-success mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-dmSans text-text-muted group-hover:text-text-main transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-xs font-syne font-bold uppercase tracking-widest text-text-muted/60 mb-3">Tech & Platforms</p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="px-3 py-1.5 rounded-lg bg-surface/60 border border-border/70 text-xs font-dmSans font-medium text-text-muted hover:text-primary hover:border-primary/40 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <SectionLabel text="Core Competencies" />
              <h3 className="text-2xl sm:text-3xl font-syne font-extrabold text-white tracking-tight mt-3 leading-tight">
                Skill Matrix
              </h3>
              <p className="text-text-muted text-sm font-dmSans mt-2 leading-relaxed">
                Scaling ad budgets requires more than toggling channels — it takes systematic problem resolution, cross-team transparency, and AI integration.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-2">
              {SOFT_SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-syne font-bold text-text-main">{skill.name}</span>
                    <span className="text-sm font-syne font-extrabold text-accent">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface border border-border/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.3, delay: i * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Years badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-surface/60 to-accent/5 border border-primary/20 flex items-center gap-5"
            >
              <div className="flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 border border-primary/30 flex-shrink-0">
                <span className="text-2xl font-syne font-extrabold text-primary leading-none">2+</span>
                <span className="text-[9px] font-dmSans text-text-muted uppercase tracking-wider">Years</span>
              </div>
              <div>
                <p className="text-sm font-syne font-bold text-white">Active Professional Experience</p>
                <p className="text-xs font-dmSans text-text-muted mt-1">Across DTC, e-commerce, and lead-gen verticals worldwide.</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

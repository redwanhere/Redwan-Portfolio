"use client";
import React from "react";
import { motion } from "framer-motion";
import aboutData from "../../data/about.json";
import SectionLabel from "../ui/SectionLabel";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceTimeline() {
  const { timeline } = aboutData;

  return (
    <section className="w-full py-24 bg-[#0A0D14] relative border-t border-border/40 overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <SectionLabel text="Milestones" />
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight">
            Professional Timeline
          </h2>
          <p className="text-text-muted font-dmSans text-base md:text-lg mt-3 max-w-2xl leading-relaxed">
            A chronological breakdown of my agencies and freelance consultation milestones, configured in a strict dual-column matrix.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative mt-12 flex flex-col gap-16 lg:gap-12">
          
          {/* Vertical central path (Desktop only) */}
          <div className="absolute left-[34px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2 hidden lg:block border-l border-dashed border-primary/25" />
          
          {/* Mobile/Tablet left dashed line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent lg:hidden border-l border-dashed border-primary/25" />

          {timeline.map((item, idx) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative pl-12 lg:pl-0"
            >
              
              {/* Left Column (col-span-5): Title + Dates */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="col-span-1 lg:col-span-5 text-left lg:text-right flex flex-col lg:items-end gap-2"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs text-text-muted font-medium font-dmSans">
                  <Calendar size={12} className="text-primary" />
                  <span>{item.duration}</span>
                </div>
                <h3 className="text-lg md:text-xl font-syne font-extrabold text-white">
                  {item.role}
                </h3>
              </motion.div>

              {/* Center Column (col-span-2): Dot Beacon Indicator */}
              <div className="absolute left-6 lg:relative lg:left-0 col-span-1 lg:col-span-2 flex items-center justify-center pointer-events-none -translate-x-1/2 lg:translate-x-0">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: idx * 0.08 }}
                  className={`w-9 h-9 rounded-full bg-surface border-2 flex items-center justify-center relative z-20 shadow-md ${
                    item.current
                      ? "border-primary text-primary shadow-glow-indigo/30"
                      : "border-border text-text-muted"
                  }`}
                >
                  <Briefcase size={13} />
                  {item.current && (
                    <span className="absolute inset-0 rounded-full border border-primary animate-ping" />
                  )}
                </motion.div>
              </div>

              {/* Right Column (col-span-5): Company + Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="col-span-1 lg:col-span-5 text-left flex flex-col gap-2 p-6 rounded-2xl bg-surface border border-border/80 hover:border-accent/40 transition-colors shadow-lg group relative"
              >
                {/* Visual glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  {item.company}
                </span>
                
                <p className="text-text-muted font-dmSans text-sm leading-relaxed">
                  {item.description}
                </p>

                {item.current && (
                  <div className="absolute top-3 right-3 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                  </div>
                )}
              </motion.div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

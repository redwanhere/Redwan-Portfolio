"use client";
import React from "react";
import { motion } from "framer-motion";
import { Megaphone, BarChart2, Target, TrendingUp, ArrowRight } from "lucide-react";
import servicesData from "../../data/services.json";
import SectionLabel from "../ui/SectionLabel";

const ICON_MAP = {
  Megaphone,
  BarChart2,
  Target,
  TrendingUp,
};

const ACCENT_COLORS = [
  { bg: "from-primary/10 to-primary/5", border: "hover:border-primary/50", icon: "group-hover:text-primary group-hover:bg-primary/10", glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]" },
  { bg: "from-accent/10 to-accent/5", border: "hover:border-accent/50", icon: "group-hover:text-accent group-hover:bg-accent/10", glow: "group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]" },
  { bg: "from-success/10 to-success/5", border: "hover:border-success/50", icon: "group-hover:text-success group-hover:bg-success/10", glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]" },
  { bg: "from-primary/10 to-accent/5", border: "hover:border-primary/50", icon: "group-hover:text-primary group-hover:bg-primary/10", glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 relative border-t border-border/40 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[130px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <SectionLabel text="What I Deliver" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight mt-3">
              Core Growth <span className="text-gradient-primary">Channels</span>
            </h2>
            <p className="text-text-muted font-dmSans text-base mt-4 max-w-xl leading-relaxed">
              From architecting creative assets to integrating pixels and designing checkout upsells — comprehensive growth solutions.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/80 bg-surface/50 hover:border-primary/50 text-text-muted hover:text-white text-sm font-semibold font-dmSans transition-all whitespace-nowrap backdrop-blur-sm"
          >
            <span>Discuss a Project</span>
            <ArrowRight size={15} />
          </motion.a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Target;
            const colors = ACCENT_COLORS[index % ACCENT_COLORS.length];
            const paddedIndex = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className={`relative p-6 rounded-2xl bg-surface/60 border border-border/70 transition-all duration-300 group overflow-hidden flex flex-col gap-5 backdrop-blur-sm ${colors.border} ${colors.glow}`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl pointer-events-none`} />

                {/* Big index number watermark */}
                <div className="absolute top-4 right-5 font-syne font-extrabold text-7xl text-white/[0.03] select-none pointer-events-none transition-all duration-300 group-hover:text-white/[0.05]">
                  {paddedIndex}
                </div>

                {/* Icon */}
                <div className={`relative z-10 w-12 h-12 rounded-xl bg-surface border border-border/70 flex items-center justify-center text-text-muted transition-all duration-300 ${colors.icon} group-hover:border-transparent`}>
                  <IconComponent size={21} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-syne font-bold text-white group-hover:text-text-main transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-muted font-dmSans text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>

                {/* Learn more link */}
                <div className="relative z-10 pt-3 border-t border-border/40">
                  <a href="#contact" className="inline-flex items-center gap-1.5 text-xs font-bold font-syne text-text-muted group-hover:text-primary transition-colors">
                    <span>Get Started</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                {/* Bottom border line animation */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

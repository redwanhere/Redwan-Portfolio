"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  Server,
  BarChart2,
  Cpu,
  TrendingUp,
  Target,
  PieChart,
  Activity,
  Mail,
} from "lucide-react";
import servicesPageData from "../../data/services-page.json";

// Predefined icon map resolving JSON names to Lucide elements
const ICON_MAP = {
  Megaphone,
  Search,
  Server,
  BarChart2,
  Cpu,
  TrendingUp,
  Target,
  PieChart,
  Activity,
  Mail,
};

export default function ServicesGridSection() {
  const { services } = servicesPageData;

  return (
    <section className="w-full py-16 bg-[#0A0D14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Target;
            const paddedNumber = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="relative p-6 rounded-2xl bg-surface border border-border/80 hover:border-primary/50 transition-all duration-300 group flex flex-col justify-between min-h-[260px] overflow-hidden shadow-lg hover:shadow-glow-indigo/5"
              >
                {/* Background lighting flare */}
                <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-accent/5 blur-xl group-hover:bg-accent/10 transition-colors pointer-events-none" />

                {/* Faint Background index number */}
                <div className="absolute top-2 right-4 font-syne font-extrabold text-5xl text-border/20 group-hover:text-primary/10 select-none pointer-events-none transition-colors duration-300">
                  {paddedNumber}
                </div>

                {/* Dynamic Icon */}
                <div className="w-10 h-10 rounded-lg bg-surface border border-border group-hover:border-primary/40 group-hover:bg-primary/10 text-text-muted group-hover:text-primary flex items-center justify-center transition-all duration-300 shadow-sm relative z-10">
                  <IconComponent size={18} />
                </div>

                {/* Copy */}
                <div className="mt-8 flex flex-col gap-2 relative z-10">
                  <h3 className="text-base sm:text-lg font-syne font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-muted font-dmSans text-xs sm:text-sm leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Lower border indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

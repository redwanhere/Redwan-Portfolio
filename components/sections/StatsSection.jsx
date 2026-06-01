"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import statsData from "../../data/stats.json";
import SectionLabel from "../ui/SectionLabel";
import { TrendingUp } from "lucide-react";

function AnimatedNumber({ value, prefix = "", suffix = "", inView }) {
  const [count, setCount] = useState(0);
  const numericValue = parseFloat(value);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const steps = 60;
    const increment = numericValue / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, numericValue]);

  const display = Number.isInteger(numericValue) ? Math.round(count) : count.toFixed(1);

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="stats" className="w-full py-20 relative border-t border-border/40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D14] via-surface/20 to-[#0A0D14] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <div>
            <SectionLabel text="By The Numbers" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight mt-3">
              Results That <span className="text-gradient-primary">Speak</span>
            </h2>
          </div>
          <p className="text-text-muted font-dmSans text-base max-w-md leading-relaxed">
            Every figure here is audited, tracked, and attributed with server-side precision — no vanity metrics, only real outcomes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="relative p-6 rounded-2xl bg-surface/60 border border-border/80 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm overflow-hidden"
            >
              {/* Hover glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

              {/* Icon indicator */}
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <TrendingUp size={16} className="text-primary" />
              </div>

              {/* Number */}
              <div className="text-3xl sm:text-4xl font-syne font-extrabold text-white leading-none mb-2 group-hover:text-accent transition-colors duration-300">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </div>

              {/* Label */}
              <p className="text-sm font-syne font-bold text-text-muted/80 uppercase tracking-wider mb-2">
                {stat.label}
              </p>

              {/* Description */}
              <p className="text-xs font-dmSans text-text-muted/60 leading-relaxed line-clamp-2">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function StatCard({ value, label, description }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 transition-colors duration-300 overflow-hidden group flex flex-col justify-between h-full"
    >
      {/* Hover glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div>
        <div className="text-4xl md:text-5xl font-syne font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2 tracking-tight">
          <AnimatedCounter target={value} />
        </div>
        <h4 className="text-text-main font-bold font-syne text-base md:text-lg mb-2 tracking-wide group-hover:text-accent transition-colors duration-300">
          {label}
        </h4>
      </div>
      
      <p className="text-text-muted text-sm leading-relaxed font-dmSans mt-2">
        {description}
      </p>
      
      {/* Bottom glowing line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

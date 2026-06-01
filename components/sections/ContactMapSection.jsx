"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactMapSection() {
  return (
    <section className="w-full relative overflow-hidden bg-[#0A0D14] border-t border-border/40 leading-none">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full relative z-10"
      >
        <iframe
          src="https://maps.google.com/maps?q=Chattogram,%20Bangladesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          title="Chattogram Location Map"
          loading="lazy"
          allowFullScreen
          className="w-full h-[300px] md:h-[450px] border-0 transition-opacity"
          style={{
            filter: "grayscale(85%) contrast(1.15) invert(90%) hue-rotate(180deg)",
            opacity: 0.75,
          }}
        />
        
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-[#0A0D14] pointer-events-none" />
      </motion.div>
    </section>
  );
}

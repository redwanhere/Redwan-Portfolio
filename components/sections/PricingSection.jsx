"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import servicesPageData from "../../data/services-page.json";
import SectionLabel from "../ui/SectionLabel";

export default function PricingSection() {
  const { pricing } = servicesPageData;

  return (
    <section className="w-full py-24 bg-[#0A0D14] relative border-t border-border/40 overflow-hidden">
      
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <SectionLabel text="Pricing Options" />
          <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight mt-1">
            Predictable Pricing Packages
          </h2>
          <p className="text-text-muted font-dmSans text-base md:text-lg mt-3 max-w-xl mx-auto leading-relaxed">
            No percentages of ad spend. Flat rates align incentives directly toward scaling your net profit.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pricing.map((tier, index) => {
            const isPopular = tier.popular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
                className={`relative p-6 rounded-2xl bg-surface border flex flex-col justify-between h-full transition-all duration-300 group ${
                  isPopular
                    ? "border-primary shadow-glow-indigo/25 scale-[1.03] lg:scale-[1.05] z-10"
                    : "border-border hover:border-accent/40"
                }`}
              >
                {/* Popular Pill Tag */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[10px] font-syne font-bold uppercase tracking-wider shadow-md">
                    Most Popular
                  </div>
                )}

                {/* Tier details */}
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block mb-1">
                      {tier.name}
                    </span>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-4xl font-syne font-extrabold text-white tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-xs font-dmSans text-text-muted">
                        {tier.period}
                      </span>
                    </div>
                    <p className="text-xs font-dmSans text-text-muted/80 leading-relaxed mt-3">
                      {tier.description}
                    </p>
                  </div>

                  {/* Feature lists */}
                  <ul className="flex flex-col gap-3.5 mb-8 border-t border-border/40 pt-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-text-main font-dmSans leading-relaxed">
                        <Check size={14} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Action */}
                <div className="pt-2">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/thank-you"
                      className={`w-full text-center py-3 px-4 rounded-xl font-syne font-bold text-xs uppercase tracking-wider block transition-colors ${
                        isPopular
                          ? "bg-primary hover:bg-indigo-500 text-white shadow-glow-indigo/20"
                          : "bg-surface border border-border hover:border-accent/40 text-text-muted hover:text-white"
                      }`}
                    >
                      {tier.buttonText}
                    </Link>
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

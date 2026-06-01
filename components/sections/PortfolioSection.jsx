"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, BarChart2, TrendingUp, Filter } from "lucide-react";
import portfolioData from "../../data/portfolio.json";
import SectionLabel from "../ui/SectionLabel";

const ALL_CATEGORIES = ["All", ...Array.from(new Set(portfolioData.map((p) => p.category)))];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = portfolioData.filter((project) =>
    activeFilter === "All" ? project.featuredOnHome !== false : project.category === activeFilter
  ).slice(0, 4);

  return (
    <section id="portfolio" className="w-full py-24 relative border-t border-border/40 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div>
            <SectionLabel text="Featured Case Studies" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight mt-3">
              Scaling <span className="text-gradient-primary">E-Commerce</span> Brands
            </h2>
            <p className="text-text-muted font-dmSans text-base mt-3 max-w-xl leading-relaxed">
              Real spend, audited returns, and actual conversion spikes from high-performing scaling operations.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/portfolios"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-surface/50 hover:border-primary/50 text-text-muted hover:text-white text-sm font-semibold font-dmSans transition-all whitespace-nowrap backdrop-blur-sm"
            >
              <span>All Case Studies</span>
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <Filter size={14} className="text-text-muted/50 mr-1" />
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-syne font-bold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-primary text-white border border-primary"
                  : "bg-surface/50 border border-border/70 text-text-muted hover:border-primary/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-border/70 hover:border-primary/40 bg-surface shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 brightness-[0.65] group-hover:brightness-[0.45] group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 z-10" />

                {/* Top: Category & Spend badge */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
                  <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-accent font-syne uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/20 border border-success/40 text-xs font-bold text-success font-syne">
                    <BarChart2 size={11} />
                    {project.adSpend}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 z-20 flex flex-col gap-3">
                  {/* Tags row */}
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-primary/20 border border-primary/30 text-[10px] font-syne font-bold text-primary uppercase tracking-wider">
                      {project.results}
                    </span>
                    <span className="px-2 py-1 rounded bg-accent/15 border border-accent/30 text-[10px] font-syne font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp size={9} />
                      {project.roas} ROAS
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-syne font-extrabold text-white leading-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description — revealed on hover */}
                  <p className="text-text-muted font-dmSans text-xs sm:text-sm leading-relaxed line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags?.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] font-dmSans text-white/50 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 font-syne group-hover:text-primary transition-colors">
                      View Case Study
                      <ExternalLink size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

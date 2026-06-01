"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart2, ExternalLink, Inbox, FolderOpen } from "lucide-react";
import portfolioData from "../../data/portfolio.json";

const CATEGORIES = ["All", "Paid Ads", "Web Analytics", "Marketing Strategy"];

export default function PortfolioGridSection() {
  const [activeTab, setActiveTab] = useState("All");

  // Client-side filtering logic
  const filteredProjects = activeTab === "All"
    ? portfolioData
    : portfolioData.filter((project) => project.category === activeTab);

  return (
    <section className="w-full py-12 pb-24 bg-[#0A0D14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top: Filter Tabs Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-border/40 pb-6 mb-8">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2.5 rounded-xl font-syne font-bold text-xs uppercase tracking-wider border transition-all ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-glow-indigo/15"
                      : "bg-surface border-border text-text-muted hover:text-white hover:border-accent/40"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Project count indicator */}
          <span className="text-xs font-dmSans text-text-muted flex items-center gap-1.5 bg-surface border border-border px-3 py-1.5 rounded-lg select-none">
            <FolderOpen size={13} className="text-accent" />
            <span>Showing {filteredProjects.length} projects</span>
          </span>

        </div>

        {/* AnimatePresence for Filtering */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  key={project.id}
                  className="group relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-border/80 hover:border-primary/50 bg-surface shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  
                  {/* Case Study Image Backdrop */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.5]"
                  />

                  {/* Top Row: Category & Spend */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
                    <span className="px-3.5 py-1.5 rounded-lg bg-[#0A0D14]/80 backdrop-blur-md border border-border text-xs font-semibold text-accent font-dmSans uppercase tracking-wider">
                      {project.category}
                    </span>

                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-success/15 border border-success/35 text-xs font-bold text-success font-syne shadow-lg shadow-black/30">
                      <BarChart2 size={12} />
                      <span>Spend: {project.adSpend}</span>
                    </span>
                  </div>

                  {/* Bottom details */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black via-black/85 to-transparent flex flex-col justify-end gap-4 min-h-[220px] z-20">
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold font-syne text-success tracking-wide px-2 py-0.5 rounded bg-success/10 border border-success/20 uppercase">
                          {project.results}
                        </span>
                        <span className="text-xs font-bold font-syne text-primary tracking-wide px-2 py-0.5 rounded bg-primary/10 border border-primary/20 uppercase">
                          {project.roas} ROAS
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-syne font-extrabold text-white leading-tight group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-text-muted font-dmSans text-xs sm:text-sm leading-relaxed max-w-md line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-350 transform translate-y-2 group-hover:translate-y-0">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-1 border-t border-border/40 pt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-dmSans font-medium text-text-muted/80 bg-surface/50 border border-border px-2.5 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white font-syne group-hover:text-primary transition-colors group-hover:underline underline-offset-4">
                        <span>Case Study</span>
                        <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>

                  </div>

                </motion.div>
              ))
            ) : (
              /* Empty State if 0 items matched */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-2 flex flex-col items-center justify-center p-20 rounded-3xl bg-surface border border-border text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted">
                  <Inbox size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-syne font-bold text-white">No Case Studies Found</h3>
                  <p className="text-sm font-dmSans text-text-muted mt-1.5 max-w-sm">
                    There are currently no featured records under the category &quot;{activeTab}&quot;. Try choosing another tab.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import experienceData from "../../data/experience.json";
import SectionLabel from "../ui/SectionLabel";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 relative border-t border-border/40 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <SectionLabel text="Career History" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight mt-3">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-text-muted font-dmSans text-base mt-4 max-w-2xl leading-relaxed">
            I partner with agencies and brands worldwide to implement tracking, audit marketing pathways, and allocate scaling budgets.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent/60 to-transparent lg:hidden" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent/60 to-transparent -translate-x-1/2 hidden lg:block" />

          <div className="flex flex-col gap-10 lg:gap-0 relative z-10">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-0 ${isEven ? "lg:flex-row-reverse" : ""} lg:mb-16`}
                >
                  {/* Card */}
                  <div className="w-full lg:w-[45%] pl-14 sm:pl-16 lg:pl-0 lg:pr-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className={`p-5 sm:p-6 rounded-2xl bg-surface/60 border border-border/80 hover:border-primary/40 transition-all duration-300 group relative shadow-xl backdrop-blur-sm ${isEven ? "lg:mr-10" : "lg:ml-10"}`}
                    >
                      {/* Hover spotlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                      {/* Current indicator */}
                      {exp.current && (
                        <div className="absolute top-4 right-4 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                        </div>
                      )}

                      {/* Header */}
                      <div className="mb-4">
                        <span className="text-xs font-bold text-accent uppercase tracking-wider font-dmSans">{exp.company}</span>
                        <h3 className="text-base sm:text-lg font-syne font-bold text-white mt-1 group-hover:text-primary transition-colors duration-300 pr-6">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <div className="inline-flex items-center gap-1.5 text-xs text-text-muted font-dmSans">
                            <Calendar size={11} className="text-primary" />
                            <span>{exp.duration}</span>
                          </div>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full bg-success/10 border border-success/20 text-[10px] font-syne font-bold text-success uppercase tracking-wider">
                              Current Role
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-muted font-dmSans text-sm leading-relaxed relative z-10">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className={`absolute left-6 sm:left-8 top-5 -translate-x-1/2 flex items-center justify-center lg:static lg:translate-x-0 lg:w-[10%] lg:flex lg:justify-center lg:z-10`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 400, delay: index * 0.1 }}
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface border-2 flex items-center justify-center relative z-20 ${
                        exp.current
                          ? "border-primary text-primary"
                          : "border-border text-text-muted"
                      }`}
                    >
                      <Briefcase size={13} />
                      {exp.current && (
                        <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-20" />
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

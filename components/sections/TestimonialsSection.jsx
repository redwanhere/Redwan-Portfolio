"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonialsData from "../../data/testimonials.json";
import SectionLabel from "../ui/SectionLabel";

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const progress = scrollLeft / maxScroll;
    const idx = Math.round(progress * (testimonialsData.length - 1));
    setActiveIndex(idx);
  };

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: dir === "left" ? scrollLeft - clientWidth * 0.75 : scrollLeft + clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  const jumpToSlide = (idx) => {
    if (!scrollRef.current) return;
    const { scrollWidth, clientWidth } = scrollRef.current;
    const max = scrollWidth - clientWidth;
    scrollRef.current.scrollTo({ left: (idx / (testimonialsData.length - 1)) * max, behavior: "smooth" });
    setActiveIndex(idx);
  };

  return (
    <section id="testimonials" className="w-full py-24 relative border-t border-border/40 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <SectionLabel text="Client Feedback" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight mt-3">
              Words from <span className="text-gradient-primary">the Field</span>
            </h2>
            <p className="text-text-muted font-dmSans text-base mt-3 max-w-xl leading-relaxed">
              How DTC brand founders and growth directors describe our structured media buying and analytics services.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="p-3 rounded-full bg-surface/60 border border-border/80 text-text-muted hover:text-white hover:border-primary/50 transition-all backdrop-blur-sm focus:outline-none"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="p-3 rounded-full bg-surface/60 border border-border/80 text-text-muted hover:text-white hover:border-primary/50 transition-all backdrop-blur-sm focus:outline-none"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
        >
          {testimonialsData.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="min-w-full sm:min-w-[calc(50%-10px)] lg:min-w-[calc(33.333%-14px)] snap-start p-6 sm:p-8 rounded-2xl bg-surface/60 border border-border/80 hover:border-primary/40 transition-all duration-300 relative group flex flex-col justify-between backdrop-blur-sm"
            >
              {/* Quote decoration */}
              <div className="absolute top-5 right-6 text-primary/10 group-hover:text-primary/15 transition-colors">
                <Quote size={48} strokeWidth={1} />
              </div>

              <div className="flex flex-col gap-4 relative z-10">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="#F59E0B" className="text-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-muted font-dmSans text-sm sm:text-base leading-relaxed italic">
                  &quot;{t.feedback}&quot;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3.5 mt-8 pt-5 border-t border-border/40 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center text-primary font-syne font-bold text-base flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-syne font-bold text-white group-hover:text-accent transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs font-dmSans text-text-muted mt-0.5">
                    {t.role}, <span className="text-text-muted/70">{t.company}</span>
                  </p>
                </div>
              </div>

              {/* Bottom line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => jumpToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-8 bg-primary" : "w-2 bg-border hover:bg-text-muted"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

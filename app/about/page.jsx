"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import AboutHeroSection from "../../components/sections/AboutHeroSection";
import ExperienceTimeline from "../../components/sections/ExperienceTimeline";
import AboutSection from "../../components/sections/AboutSection";
import TestimonialsSection from "../../components/sections/TestimonialsSection";
import CtaSection from "../../components/sections/CtaSection";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#F9FAFB] relative overflow-hidden">
      
      {/* Navigation */}
      <Navbar />

      {/* About Main Hero */}
      <AboutHeroSection />

      {/* Strict Alternating Career Milestones */}
      <ExperienceTimeline />

      {/* Soft Skills Skill bars (Reused AboutSection) */}
      <AboutSection />

      {/* Draggable client reviews */}
      <TestimonialsSection />

      {/* Hiring Email Trigger Banner */}
      <CtaSection />

      {/* Bottom Footer */}
      <Footer />

    </main>
  );
}

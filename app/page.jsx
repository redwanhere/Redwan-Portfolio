"use client";
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import BlogSection from "../components/sections/BlogSection";
import ContactSection from "../components/sections/ContactSection";
import CtaSection from "../components/sections/CtaSection";
import MapSection from "../components/sections/MapSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#F9FAFB] relative overflow-hidden">
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <HeroSection />

      {/* Stats Matrix */}
      <StatsSection />

      {/* Biography & Skills */}
      <AboutSection />

      {/* Services Grid */}
      <ServicesSection />

      {/* Experience History */}
      <ExperienceSection />

      {/* Portfolios Showcases */}
      <PortfolioSection />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Insights Updates */}
      <BlogSection />

      {/* Dynamic intake inquiry Form */}
      <ContactSection />

      {/* Location Map */}
      <MapSection />

      {/* Action Footer Call-to-action */}
      <CtaSection />

      {/* Foot Footer info */}
      <Footer />

    </main>
  );
}

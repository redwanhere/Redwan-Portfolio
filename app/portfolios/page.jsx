"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import PortfolioHeroSection from "../../components/sections/PortfolioHeroSection";
import PortfolioGridSection from "../../components/sections/PortfolioGridSection";
import CtaSection from "../../components/sections/CtaSection";
import Footer from "../../components/Footer";

export default function PortfoliosPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#F9FAFB] relative overflow-hidden">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Hero caption details */}
      <PortfolioHeroSection />

      {/* Core filterable layout */}
      <PortfolioGridSection />

      {/* Bottom call-to-action banner */}
      <CtaSection />

      {/* Footer copyright and links */}
      <Footer />

    </main>
  );
}

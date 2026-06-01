"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import ServicesHeroSection from "../../components/sections/ServicesHeroSection";
import ServicesGridSection from "../../components/sections/ServicesGridSection";
import PricingSection from "../../components/sections/PricingSection";
import FaqSection from "../../components/sections/FaqSection";
import CtaSection from "../../components/sections/CtaSection";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#F9FAFB] relative overflow-hidden">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Services Core Hero */}
      <ServicesHeroSection />

      {/* 10 Services Grid list */}
      <ServicesGridSection />

      {/* Pricing packages matrix */}
      <PricingSection />

      {/* FAQ accordions beside secondary intake Form */}
      <FaqSection />

      {/* Footer CTA trigger */}
      <CtaSection />

      {/* Footer standard details */}
      <Footer />

    </main>
  );
}

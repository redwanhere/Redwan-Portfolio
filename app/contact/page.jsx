"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import ContactHeroSection from "../../components/sections/ContactHeroSection";
import ContactFormSection from "../../components/sections/ContactFormSection";
import ContactMapSection from "../../components/sections/ContactMapSection";
import CtaSection from "../../components/sections/CtaSection";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#F9FAFB] relative overflow-hidden">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Breadcrumb title */}
      <ContactHeroSection />

      {/* Main intake cards and form */}
      <ContactFormSection />

      {/* Grayscale styled map iframe */}
      <ContactMapSection />

      {/* Bottom scale call-to-action */}
      <CtaSection />

      {/* Footer social nodes */}
      <Footer />

    </main>
  );
}

"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import BlogHeroSection from "../../components/sections/BlogHeroSection";
import BlogListSection from "../../components/sections/BlogListSection";
import CtaSection from "../../components/sections/CtaSection";
import Footer from "../../components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#F9FAFB] relative overflow-hidden">
      
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Breadcrumb cap */}
      <BlogHeroSection />

      {/* Two Column Layout list & sidebar widgets */}
      <BlogListSection />

      {/* Footer Call-to-action */}
      <CtaSection />

      {/* Footer credits and social hubs */}
      <Footer />

    </main>
  );
}

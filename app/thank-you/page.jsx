"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Home, Mail, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#F9FAFB] relative overflow-hidden flex flex-col justify-between">
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-32 pb-20 relative z-10">
        
        {/* Background glow highlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-20 h-20 rounded-full bg-success/15 border border-success/35 text-success flex items-center justify-center shadow-lg shadow-success/10"
          >
            <CheckCircle size={40} className="animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight"
          >
            Request Received!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted font-dmSans text-base leading-relaxed"
          >
            Thank you for selecting a growth package. I am already preparing your accounts diagnostics brief. Let&apos;s align details to start scaling.
          </motion.p>

          {/* Guidelines box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full p-5 rounded-2xl bg-surface border border-border/80 text-left flex flex-col gap-3"
          >
            <h3 className="text-sm font-syne font-bold text-white uppercase tracking-wider">
              Next Steps:
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs font-dmSans text-text-muted">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <span>We will reach out to schedule a Discovery Call on WhatsApp or Slack.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <span>We will request access to your GA4, GTM, and Facebook Business Manager.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <span>We compile an initial performance audit blueprint in 48 hours.</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-2"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/"
                className="px-6 py-3 rounded-xl bg-primary hover:bg-indigo-500 text-white font-dmSans font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-glow-indigo/20"
              >
                <Home size={14} />
                <span>Return Home</span>
              </Link>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:theredwan.me@gmail.com?subject=Package%20Confirmation%20Followup"
              className="px-6 py-3 rounded-xl border border-border hover:border-accent/40 bg-surface text-text-muted hover:text-white font-dmSans font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <Mail size={14} />
              <span>Reach Out Direct</span>
              <ArrowRight size={14} />
            </motion.a>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

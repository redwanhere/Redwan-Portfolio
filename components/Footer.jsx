"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

function XIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}
function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { icon: XIcon, href: "https://x.com/theredwan", label: "X" },
  { icon: FacebookIcon, href: "https://facebook.com/theredwan", label: "Facebook" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/theredwan", label: "LinkedIn" },
  { icon: InstagramIcon, href: "https://instagram.com/theredwan", label: "Instagram" },
];

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolios" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#070A0F] border-t border-border/40 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="font-syne font-extrabold text-lg tracking-tight text-white group flex gap-1.5 flex-shrink-0">
              <img
                src="/logo.png"
                alt="Redwanul logo"
                className="w-50 h-20 rounded-lg object-contain group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-text-muted font-dmSans text-sm leading-relaxed max-w-xs">
              Media Buyer & Web Analytics Expert helping DTC brands scale with data-driven paid media strategies.
            </p>
            <a
              href="mailto:theredwan.me@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-dmSans text-text-muted hover:text-primary transition-colors"
            >
              <Mail size={15} className="text-primary" />
              theredwan.me@gmail.com
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-1">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="p-2.5 rounded-xl border border-border/60 bg-surface/30 text-text-muted hover:text-primary hover:border-primary/40 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h3 className="text-xs font-syne font-bold uppercase tracking-widest text-text-muted/60">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-dmSans text-text-muted hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-border group-hover:bg-primary transition-colors flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <h3 className="text-xs font-syne font-bold uppercase tracking-widest text-text-muted/60">Services</h3>
            <ul className="flex flex-col gap-3">
              {["Paid Social Advertising", "Google Ads Management", "Web Analytics & GA4", "Conversion Optimization", "Full Funnel Strategy"].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="text-sm font-dmSans text-text-muted hover:text-white inline-flex items-center gap-1.5 transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-border group-hover:bg-accent transition-colors flex-shrink-0" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-dmSans text-text-muted/50 text-center sm:text-left">
            © {new Date().getFullYear()} Redwanul Haque. All rights reserved.
          </p>
          <a
            href="https://calendly.com/theredwan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-dmSans text-text-muted/50 hover:text-primary transition-colors"
          >
            Book a free call
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}

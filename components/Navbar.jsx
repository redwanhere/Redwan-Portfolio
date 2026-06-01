"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/", id: "hero" },
  { label: "About", href: "/about", id: "about" },
  { label: "Services", href: "/services", id: "services" },
  { label: "Portfolio", href: "/portfolios", id: "portfolio" },
  { label: "Blog", href: "/blog", id: "blog" },
  { label: "Contact", href: "/contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (e, item) => {
    if (pathname === "/" && item.id) {
      const el = document.getElementById(item.id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
      }
    }
  };

  const isActive = (item) => {
    if (item.href === "/") return pathname === "/";
    return pathname.startsWith(item.href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "py-3 bg-[#0A0D14]/85 backdrop-blur-xl border-b border-border/50 shadow-[0_1px_20px_rgba(0,0,0,0.4)]"
            : "py-5 bg-transparent border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-syne font-extrabold text-lg tracking-tight text-white group flex items-center gap-1.5 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Redwanul logo"
              className="w-50 h-10 rounded-lg object-contain group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-dmSans font-medium tracking-wide transition-all duration-200 ${active
                      ? "text-white bg-surface/60 border border-border/60"
                      : "text-text-muted hover:text-white hover:bg-surface/40"
                    }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <motion.a
              href="https://calendly.com/theredwan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(99,102,241,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-xl bg-primary hover:bg-indigo-500 text-white font-dmSans text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <span>Free Consultation</span>
              <ArrowRight size={15} />
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-text-muted hover:text-white hover:bg-surface/50 transition-all focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#0D1117] border-l border-border/60 flex flex-col shadow-2xl md:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border/40">
                <Link href="/" onClick={() => setMobileOpen(false)} className="font-syne font-extrabold text-white text-base">
                  Redwanul Haque
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-text-muted hover:text-white hover:bg-surface/50 transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
                {NAV_ITEMS.map((item, idx) => {
                  const active = isActive(item);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-syne font-semibold transition-all ${active
                            ? "text-primary bg-primary/10 border border-primary/20"
                            : "text-text-muted hover:text-white hover:bg-surface/50"
                          }`}
                      >
                        {item.label}
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer CTA */}
              <div className="px-4 py-6 border-t border-border/40">
                <a
                  href="https://calendly.com/theredwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-indigo-500 text-white font-dmSans font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

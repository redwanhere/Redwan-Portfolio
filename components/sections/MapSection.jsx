"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Globe, Navigation } from "lucide-react";

const INFO_ITEMS = [
  {
    icon: MapPin,
    label: "Location",
    value: "Chattogram, Bangladesh",
    sub: "Serviceable worldwide",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
  },
  {
    icon: Globe,
    label: "Time Zone",
    value: "GMT +6 (BST)",
    sub: "Available 9AM – 9PM",
    color: "text-accent",
    bg: "bg-accent/10 border-accent/20",
  },
  {
    icon: Navigation,
    label: "Remote Work",
    value: "100% Remote",
    sub: "Clients across 12+ countries",
    color: "text-success",
    bg: "bg-success/10 border-success/20",
  },
];

export default function MapSection() {
  return (
    <section className="w-full relative border-t border-border/40 overflow-hidden">
      {/* Subtle top separator glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-4 h-[2px] bg-accent rounded-full" />
              <span className="text-xs font-syne font-bold uppercase tracking-[0.15em] text-accent">Location</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-syne font-extrabold text-white tracking-tight leading-tight">
              Based in{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Chattogram</span>
              , Serving Globally
            </h2>
            <p className="text-text-muted font-dmSans text-base mt-3 max-w-lg leading-relaxed">
              While headquartered in Bangladesh, I work remotely with DTC brands and agencies across North America, Europe, and Southeast Asia.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/UFaMaSL1cTqiJmFj6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-surface/50 hover:border-accent/50 text-text-muted hover:text-white text-sm font-semibold font-dmSans transition-all whitespace-nowrap backdrop-blur-sm flex-shrink-0"
          >
            <MapPin size={14} className="text-accent" />
            <span>Open in Google Maps</span>
            <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Main grid: Map + Info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 lg:col-span-8 relative rounded-2xl overflow-hidden border border-border/70 shadow-2xl"
            style={{ height: "420px" }}
          >
            {/* Dark overlay tint on top of the iframe for branding */}
            <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl ring-1 ring-inset ring-white/5" />

            {/* Google Maps embed — dark-filtered */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d775.1283814534405!2d91.846433!3d22.3494324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s0x30ad27003c98bac9%3A0xd79e8c4aa2da938b!5e0!3m2!1sen!2sbd!4v1717180000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(92%) hue-rotate(200deg) saturate(0.85) brightness(0.85) contrast(0.9)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Redwanul Haque Location - Chattogram, Bangladesh"
            />

            {/* Center Pulsing Location Pin on the Map */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center">
              <div className="relative flex items-center justify-center">
                {/* Glowing Outer Rings */}
                <span className="absolute animate-ping inline-flex h-12 w-12 rounded-full bg-accent/40 opacity-75" />
                <span className="absolute animate-ping inline-flex h-24 w-24 rounded-full bg-primary/20 opacity-45 delay-300" />
                
                {/* Modern Location Pin Shield */}
                <div className="relative w-12 h-12 rounded-full bg-[#0A0D14]/90 backdrop-blur-md border-2 border-accent flex items-center justify-center shadow-2xl shadow-black/80 transition-transform duration-300">
                  <MapPin size={20} className="text-accent fill-accent/15" />
                </div>
              </div>
            </div>

            {/* Custom map pin overlay */}
            <div className="absolute bottom-4 left-4 z-20 bg-[#0A0D14]/90 backdrop-blur-md border border-border/70 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl pointer-events-none">
              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-syne font-bold text-white">Redwanul Haque</p>
                <p className="text-[10px] font-dmSans text-text-muted">Banker&apos;s Park, Chattogram</p>
              </div>
            </div>
          </motion.div>

          {/* Info cards */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
            {INFO_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-5 rounded-2xl bg-surface/60 border border-border/70 hover:border-border transition-all duration-300 group backdrop-blur-sm flex items-center gap-4"
                >
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color} transition-all`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-dmSans text-text-muted uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-syne font-bold text-white mt-0.5">{item.value}</p>
                    <p className="text-xs font-dmSans text-text-muted/60 mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA card */}
            <motion.a
              href="https://calendly.com/redwan4digital/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(99,102,241,0.2)" }}
              className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 via-surface/60 to-accent/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <p className="text-sm font-syne font-bold text-white">Ready to work together?</p>
              <p className="text-xs font-dmSans text-text-muted mt-1 mb-3">Book a free 30-minute strategy call — no commitment required.</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold font-syne text-primary group-hover:text-accent transition-colors">
                Schedule a Call
                <Navigation size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}

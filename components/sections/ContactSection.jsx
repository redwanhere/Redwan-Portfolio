"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    value: "+8801752094790",
    href: "tel:+8801752094790",
    label: "Available 9AM – 9PM (GMT+6)",
    color: "text-success group-hover:text-success",
    bg: "group-hover:bg-success/10 group-hover:border-success/40",
  },
  {
    icon: Mail,
    title: "Email",
    value: "theredwan.me@gmail.com",
    href: "mailto:theredwan.me@gmail.com",
    label: "Replies within 24 hours",
    color: "text-primary group-hover:text-primary",
    bg: "group-hover:bg-primary/10 group-hover:border-primary/40",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Chattogram, Bangladesh",
    href: "#",
    label: "Serving clients worldwide",
    color: "text-accent group-hover:text-accent",
    bg: "group-hover:bg-accent/10 group-hover:border-accent/40",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Paid Advertising",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry — ${formData.service}`);
    const body = encodeURIComponent(
      `Hi Redwan,\n\nMy name is ${formData.name}.\n\nContact:\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n\nService: ${formData.service}\n\nMessage:\n${formData.message}\n\nRegards,\n${formData.name}`
    );
    window.location.href = `mailto:theredwan.me@gmail.com?subject=${subject}&body=${body}`;
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 6000);
    setFormData({ name: "", email: "", phone: "", service: "Paid Advertising", message: "" });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-[#0A0D14]/80 border text-white font-dmSans text-sm focus:outline-none transition-all duration-200 placeholder:text-text-muted/40 ${
      focused === field
        ? "border-primary/60 shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
        : "border-border/70 hover:border-border"
    }`;

  return (
    <section id="contact" className="w-full py-24 relative border-t border-border/40 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="mb-14">
          <SectionLabel text="Get In Touch" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight mt-3">
            Let&apos;s Start a <span className="text-gradient-primary">Conversation</span>
          </h2>
          <p className="text-text-muted font-dmSans text-base mt-4 max-w-2xl leading-relaxed">
            Scaling DTC channels or auditing server pixels? Fill the form below and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Contact info */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
            {CONTACT_INFO.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                  className={`p-5 rounded-2xl bg-surface/60 border border-border/70 transition-all duration-300 flex items-center gap-4 group backdrop-blur-sm ${info.bg}`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-surface border border-border/60 flex items-center justify-center transition-all duration-300 ${info.color} flex-shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-dmSans text-text-muted uppercase tracking-wider">{info.title}</p>
                    <p className="text-sm sm:text-base font-syne font-bold text-white mt-0.5 truncate">{info.value}</p>
                    <p className="text-xs font-dmSans text-text-muted/60 mt-0.5">{info.label}</p>
                  </div>
                  <ArrowRight size={14} className="text-text-muted/40 group-hover:text-text-muted ml-auto flex-shrink-0 transition-colors" />
                </motion.a>
              );
            })}

            {/* Availability notice */}
            <div className="p-5 rounded-2xl bg-success/5 border border-success/15 flex items-start gap-3 mt-2">
              <div className="relative flex h-3 w-3 flex-shrink-0 mt-1">
                <span className="animate-ping absolute inset-0 rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
              </div>
              <div>
                <p className="text-sm font-syne font-bold text-success">Currently Available</p>
                <p className="text-xs font-dmSans text-text-muted mt-1">Taking on select new clients. Spot availability is limited.</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-1 lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-surface/60 border border-border/80 shadow-2xl relative backdrop-blur-sm"
          >
            {/* Success message */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  className="mb-6 p-4 rounded-xl bg-success/10 border border-success/25 text-success text-sm flex items-start gap-3"
                >
                  <CheckCircle size={17} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-syne font-bold block">Message Sent!</strong>
                    <span className="font-dmSans text-xs mt-0.5 block text-text-muted">Opening your mail client. You can also reach me at theredwan.me@gmail.com.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-syne font-bold uppercase tracking-wider text-text-muted">Full Name</label>
                  <input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                    placeholder="John Doe"
                    className={inputClass("name")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-syne font-bold uppercase tracking-wider text-text-muted">Email Address</label>
                  <input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                    placeholder="john@company.com"
                    className={inputClass("email")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-syne font-bold uppercase tracking-wider text-text-muted">Phone Number</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    value={formData.phone} onChange={handleChange}
                    onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                    placeholder="+1 (555) 000-0000"
                    className={inputClass("phone")}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-syne font-bold uppercase tracking-wider text-text-muted">Service Needed</label>
                  <select
                    id="service" name="service"
                    value={formData.service} onChange={handleChange}
                    onFocus={() => setFocused("service")} onBlur={() => setFocused(null)}
                    className={`${inputClass("service")} cursor-pointer`}
                  >
                    <option value="Paid Advertising">Paid Social (Meta & TikTok)</option>
                    <option value="Web Analytics">Web Analytics & GA4 Attribution</option>
                    <option value="Marketing Strategy">Full Funnel Growth Strategy</option>
                    <option value="Conversion Optimization">Landing Page CRO</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-syne font-bold uppercase tracking-wider text-text-muted">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                  placeholder="Tell me about your brand, current ad spend, and goals..."
                  className={`${inputClass("message")} resize-none`}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary hover:bg-indigo-500 text-white font-syne font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all mt-1 relative overflow-hidden shimmer"
              >
                <span>Send Message</span>
                <Send size={15} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

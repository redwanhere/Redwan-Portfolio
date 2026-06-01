"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "+8801752094790",
    href: "tel:+8801752094790",
    label: "Available on Call & WhatsApp",
  },
  {
    icon: Mail,
    title: "Direct Email",
    value: "theredwan.me@gmail.com",
    href: "mailto:theredwan.me@gmail.com",
    label: "Typically replies under 12 hours",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "Chattogram, Bangladesh",
    href: "#",
    label: "Consulting globally",
  },
];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Paid Advertising",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Growth Inquiry — ${formData.service}`);
    const body = encodeURIComponent(
      `Hello Redwan,\n\nI am contacting you from your Standalone Contact Form.\n\n` +
      `Contact details:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n\n` +
      `Request channel:\n- ${formData.service}\n\n` +
      `Project Info:\n${formData.message}\n\n` +
      `Regards,\n${formData.name}`
    );

    const mailtoUrl = `mailto:theredwan.me@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "Paid Advertising",
      message: "",
    });
  };

  return (
    <section className="w-full py-20 bg-[#0A0D14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
            <div>
              <SectionLabel text="Reach Out" />
              <h2 className="text-3xl font-syne font-extrabold text-white tracking-tight">
                Contact Specifications
              </h2>
              <p className="text-text-muted font-dmSans text-sm mt-2">
                Use the cards below to contact me directly or write a project brief in the intake form.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              {CONTACT_INFO.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    whileHover={{ x: 6, borderColor: "#6366F1" }}
                    className="p-5 rounded-2xl bg-surface border border-border/85 hover:border-primary/50 transition-colors flex items-center gap-5 group shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-surface border border-border group-hover:border-primary/40 group-hover:bg-primary/10 text-text-muted group-hover:text-primary flex items-center justify-center transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-dmSans text-text-muted uppercase tracking-wider">
                        {info.title}
                      </h3>
                      <p className="text-base sm:text-lg font-syne font-bold text-white group-hover:text-accent transition-colors mt-0.5">
                        {info.value}
                      </p>
                      <span className="text-xs font-dmSans text-text-muted/60 mt-1 block">
                        {info.label}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Intake Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1 lg:col-span-7 p-8 rounded-3xl bg-surface border border-border/80 shadow-2xl relative"
          >
            {/* Success Prompt */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 rounded-xl bg-success/15 border border-success/35 text-success text-xs flex items-center gap-3.5"
                >
                  <CheckCircle size={18} className="flex-shrink-0 animate-bounce" />
                  <div>
                    <strong className="font-syne font-bold uppercase tracking-wider block">
                      Redirecting Now
                    </strong>
                    <span className="font-dmSans mt-0.5 block">
                      Creating mailto package draft. Contact: theredwan.me@gmail.com.
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="c-name" className="text-xs font-syne font-bold uppercase tracking-wide text-text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="c-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="px-4 py-3 rounded-xl bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="c-email" className="text-xs font-syne font-bold uppercase tracking-wide text-text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="c-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="px-4 py-3 rounded-xl bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="c-phone" className="text-xs font-syne font-bold uppercase tracking-wide text-text-muted">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="c-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="px-4 py-3 rounded-xl bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="c-service" className="text-xs font-syne font-bold uppercase tracking-wide text-text-muted">
                    Desired Channel
                  </label>
                  <select
                    id="c-service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="px-4 py-3 rounded-xl bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-sm focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Paid Advertising">Paid Social Scale (Meta & TikTok)</option>
                    <option value="Web Analytics">Web Analytics & Attribution (sGTM/GA4)</option>
                    <option value="Marketing Strategy">Full Funnel Growth Strategy</option>
                    <option value="Conversion Optimization">Landing Page CRO & Checkouts</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="c-message" className="text-xs font-syne font-bold uppercase tracking-wide text-text-muted">
                  Message Details
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Provide brief outline of your client economic caps, monthly budgets, and tracking hurdles..."
                  className="px-4 py-3 rounded-xl bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 rounded-xl bg-primary hover:bg-indigo-500 text-white font-syne font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all mt-2"
              >
                <span>Submit Details</span>
                <Send size={15} />
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

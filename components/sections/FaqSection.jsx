"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Send, CheckCircle, HelpCircle } from "lucide-react";
import servicesPageData from "../../data/services-page.json";
import SectionLabel from "../ui/SectionLabel";

export default function FaqSection() {
  const { faq } = servicesPageData;
  const [openIndex, setOpenIndex] = useState(0);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Paid Advertising",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Project Brief — ${formData.service}`);
    const body = encodeURIComponent(
      `Hello Redwan,\n\nI am contacting you from your FAQ intake system.\n\n` +
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
    <section className="w-full py-24 bg-[#0A0D14] relative border-t border-border/40 overflow-hidden">
      
      {/* Background radial spotlight decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column (45%): Custom FAQ Accordion */}
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
            <div>
              <SectionLabel text="Faqs" />
              <h2 className="text-3xl md:text-4xl font-syne font-extrabold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-text-muted font-dmSans text-sm mt-3">
                Have details you need clarified? Here is a breakdown of our operating standards and metrics integration scopes.
              </p>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col gap-3 mt-4">
              {faq.map((item, idx) => {
                const isOpen = openIndex === idx;
                
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-surface border border-border/80 hover:border-primary/30 transition-colors overflow-hidden"
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-syne font-bold text-white pr-4">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="text-text-muted hover:text-white"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>

                    {/* Collapsible Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden bg-[#0F1622]/40 border-t border-border/40"
                        >
                          <p className="p-5 text-xs sm:text-sm font-dmSans text-text-muted leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (55%): Dedicated intake Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-1 lg:col-span-7 p-8 rounded-3xl bg-surface border border-border/80 shadow-2xl relative"
          >
            <div className="mb-6">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider block">Intake Brief</span>
              <h3 className="text-2xl font-syne font-extrabold text-white mt-1">Get Started Today</h3>
            </div>

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

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="faq-name" className="text-[10px] font-syne font-bold uppercase tracking-wider text-text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="faq-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Smith"
                    className="px-4 py-2.5 rounded-lg bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-xs sm:text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="faq-email" className="text-[10px] font-syne font-bold uppercase tracking-wider text-text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="faq-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com"
                    className="px-4 py-2.5 rounded-lg bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-xs sm:text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="faq-phone" className="text-[10px] font-syne font-bold uppercase tracking-wider text-text-muted">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="faq-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="px-4 py-2.5 rounded-lg bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-xs sm:text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="faq-service" className="text-[10px] font-syne font-bold uppercase tracking-wider text-text-muted">
                    Scale Target
                  </label>
                  <select
                    id="faq-service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 rounded-lg bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-xs sm:text-sm focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Paid Advertising">Paid Social Scale (Meta & TikTok)</option>
                    <option value="Web Analytics">Web Analytics & Attribution (sGTM/GA4)</option>
                    <option value="Marketing Strategy">Full Funnel Growth Strategy</option>
                    <option value="Conversion Optimization">Landing Page CRO & Checkouts</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="faq-message" className="text-[10px] font-syne font-bold uppercase tracking-wider text-text-muted">
                  Message Details
                </label>
                <textarea
                  id="faq-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Provide details about your current ad accounts, ad spend budgets, or pixel blockages..."
                  className="px-4 py-2.5 rounded-lg bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-xs sm:text-sm focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary hover:bg-indigo-500 text-white font-syne font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all mt-1"
              >
                <span>Submit Details</span>
                <Send size={13} />
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

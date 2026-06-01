"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  ArrowRight,
  Calendar,
  Inbox,
  Bookmark,
} from "lucide-react";
import blogPostsData from "../../data/blogPosts.json";

// Custom premium SVG for X
function XIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

// Custom premium SVG for Facebook
function FacebookIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// Custom premium SVG for LinkedIn
function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Custom premium SVG for Instagram
function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const CATEGORIES = ["All", "Paid Ads", "Web Analytics"];

const ARTICLE_IMAGES = {
  "unlocking-attribution-accuracy-ios14": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&fit=crop",
  "scientific-ad-creative-testing-system": "https://images.unsplash.com/photo-1542744173-8e0853c0374a?q=80&w=400&fit=crop",
  "demystifying-ga4-attribution-models": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&fit=crop",
};

export default function BlogListSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter blog posts by category and search query
  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSocialIcon = (url) => {
    if (url.includes("x.com") || url.includes("twitter.com")) return <XIcon size={16} />;
    if (url.includes("linkedin.com")) return <LinkedinIcon size={16} />;
    if (url.includes("facebook.com")) return <FacebookIcon size={16} />;
    if (url.includes("instagram.com")) return <InstagramIcon size={16} />;
    return <ArrowRight size={16} />;
  };

  const getSocialPlatformName = (url) => {
    if (url.includes("x.com") || url.includes("twitter.com")) return "X (Twitter)";
    if (url.includes("linkedin.com")) return "LinkedIn";
    if (url.includes("facebook.com")) return "Facebook";
    if (url.includes("instagram.com")) return "Instagram";
    return "Social Update";
  };

  const getCategoryCount = (cat) => {
    if (cat === "All") return blogPostsData.length;
    return blogPostsData.filter((p) => p.category === cat).length;
  };

  return (
    <section className="w-full py-12 pb-24 bg-[#0A0D14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN (65%): Blog List & Filters */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-8">
            
            {/* Category selection pills & Count indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/40 pb-5">
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-xl font-syne font-bold text-xs uppercase tracking-wider border transition-all ${
                        isActive
                          ? "bg-primary border-primary text-white"
                          : "bg-surface border-border text-text-muted hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              <span className="text-xs font-dmSans text-text-muted select-none">
                Showing {filteredPosts.length} posts
              </span>
            </div>

            {/* Posts mapping inside AnimatePresence */}
            <motion.div layout className="flex flex-col gap-6 min-h-[300px]">
              <AnimatePresence mode="popLayout">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => {
                    const isArticle = post.type === "article";
                    const blogImageUrl = ARTICLE_IMAGES[post.slug] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&fit=crop";

                    if (isArticle) {
                      {/* TYPE 1: ARTICLE */}
                      return (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.4 }}
                          key={post.id}
                          className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-surface border border-border/80 hover:border-primary/50 transition-all duration-300 group shadow-lg"
                        >
                          {/* Left: Article Image */}
                          <div className="relative w-full sm:w-48 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0 bg-surface border border-border">
                            <Image
                              src={blogImageUrl}
                              alt={post.title}
                              fill
                              sizes="192px"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          {/* Right: Article Details */}
                          <div className="flex-grow flex flex-col justify-between py-1 gap-4">
                            <div>
                              <div className="flex items-center gap-4 text-xs font-dmSans text-text-muted mb-2">
                                <span className="text-accent font-semibold uppercase tracking-wider">
                                  {post.category}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar size={12} />
                                  <span>{post.date}</span>
                                </span>
                                <span className="text-primary font-bold">{post.readTime}</span>
                              </div>

                              <Link
                                href={`/blog/${post.slug}`}
                                className="block font-syne font-bold text-lg md:text-xl text-white group-hover:text-primary transition-colors leading-snug mb-2 pr-4"
                              >
                                {post.title}
                              </Link>

                              <p className="text-text-muted font-dmSans text-xs sm:text-sm leading-relaxed line-clamp-2">
                                {post.excerpt}
                              </p>
                            </div>

                            <div>
                              <Link
                                href={`/blog/${post.slug}`}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-white font-syne group-hover:text-accent group-hover:underline underline-offset-4"
                              >
                                <span>Continue Reading</span>
                                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      );
                    } else {
                      {/* TYPE 2: SOCIAL POST */}
                      return (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.4 }}
                          key={post.id}
                          className="p-6 rounded-2xl bg-surface border border-border/80 hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between min-h-[190px] shadow-lg relative overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-accent/5 blur-2xl group-hover:bg-accent/10 transition-colors pointer-events-none" />

                          <div>
                            <div className="flex items-center justify-between gap-4 text-xs font-dmSans text-text-muted mb-3.5 border-b border-border/40 pb-3">
                              <div className="flex items-center gap-2">
                                <div className="text-accent">
                                  {getSocialIcon(post.socialEmbedUrl)}
                                </div>
                                <span className="font-semibold uppercase tracking-wider text-accent">
                                  {getSocialPlatformName(post.socialEmbedUrl)}
                                </span>
                              </div>
                              <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                <span>{post.date}</span>
                              </span>
                            </div>

                            <a
                              href={post.socialEmbedUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block font-syne font-bold text-base sm:text-lg text-white group-hover:text-accent transition-colors leading-snug mb-2 pr-4"
                            >
                              {post.title}
                            </a>

                            <p className="text-text-muted font-dmSans text-xs sm:text-sm leading-relaxed line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>

                          <div className="pt-4">
                            <a
                              href={post.socialEmbedUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-white font-syne group-hover:text-accent group-hover:underline underline-offset-4"
                            >
                              <span>View Post</span>
                              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                            </a>
                          </div>
                        </motion.div>
                      );
                    }
                  })
                ) : (
                  /* Empty state */
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center p-16 rounded-2xl bg-surface border border-border text-center gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted">
                      <Inbox size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-syne font-bold text-white">No Posts Found</h3>
                      <p className="text-xs font-dmSans text-text-muted mt-1 max-w-xs mx-auto">
                        No articles matched the filter queries. Adjust filters to search again.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>

          {/* RIGHT COLUMN (35%): Sticky Sidebar Widgets */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-6 sticky top-28">
            
            {/* Widget 1: Search Box */}
            <div className="p-6 rounded-2xl bg-surface border border-border/80 flex flex-col gap-3 shadow-md">
              <h3 className="text-sm font-syne font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Search size={14} className="text-primary" />
                <span>Search Articles</span>
              </h3>
              <div className="relative mt-1">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type parameters..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0A0D14] border border-border focus:border-primary/50 text-white font-dmSans text-sm focus:outline-none transition-colors"
                />
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/60" />
              </div>
            </div>

            {/* Widget 2: Recent Posts (Top 5) */}
            <div className="p-6 rounded-2xl bg-surface border border-border/80 flex flex-col gap-4 shadow-md">
              <h3 className="text-sm font-syne font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-border/40 pb-3">
                <Bookmark size={14} className="text-accent" />
                <span>Recent Decks</span>
              </h3>
              <div className="flex flex-col gap-3.5">
                {blogPostsData.slice(0, 5).map((post) => {
                  const isArt = post.type === "article";
                  const pathUrl = isArt ? `/blog/${post.slug}` : post.socialEmbedUrl;
                  const propAttr = isArt ? {} : { target: "_blank", rel: "noopener noreferrer" };
                  
                  return (
                    <a
                      key={post.id}
                      href={pathUrl}
                      {...propAttr}
                      className="group flex gap-3.5 items-center justify-between"
                    >
                      <div className="flex flex-col gap-1 min-w-0 flex-grow">
                        <span className="text-[10px] font-dmSans font-medium text-accent uppercase tracking-wide">
                          {post.category}
                        </span>
                        <h4 className="text-xs font-syne font-bold text-white group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h4>
                      </div>
                      <ArrowRight size={13} className="text-text-muted/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Widget 3: Categories list with counts */}
            <div className="p-6 rounded-2xl bg-surface border border-border/80 flex flex-col gap-3 shadow-md">
              <h3 className="text-sm font-syne font-bold text-white uppercase tracking-wider border-b border-border/40 pb-3">
                Categories Breakdown
              </h3>
              <div className="flex flex-col gap-1 mt-1">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full flex items-center justify-between py-2 text-xs font-dmSans font-medium border-b border-border/20 last:border-b-0 text-left transition-colors ${
                        isActive ? "text-primary font-semibold pl-2" : "text-text-muted hover:text-white"
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] ${
                        isActive ? "bg-primary/10 text-primary border border-primary/20" : "bg-[#0A0D14] border border-border/60 text-text-muted/80"
                      }`}>
                        {getCategoryCount(cat)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import blogPostsData from "../../data/blogPosts.json";
import SectionLabel from "../ui/SectionLabel";

function XIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}
function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function BlogSection() {
  const featuredPosts = blogPostsData.filter((post) => post.featuredOnHome === true).slice(0, 3);

  const getSocialIcon = (url) => {
    if (url?.includes("x.com") || url?.includes("twitter.com")) return <XIcon size={13} />;
    if (url?.includes("linkedin.com")) return <LinkedinIcon size={13} />;
    return <ArrowRight size={13} />;
  };

  return (
    <section id="blog" className="w-full py-24 relative border-t border-border/40 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <SectionLabel text="Growth Resources" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight mt-3">
              Insights & <span className="text-gradient-primary">Intelligence</span>
            </h2>
            <p className="text-text-muted font-dmSans text-base mt-3 max-w-xl leading-relaxed">
              Paid media setups, pixel tracking structures, and conversion hacks from real campaigns.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/80 bg-surface/50 hover:border-primary/50 text-text-muted hover:text-white text-sm font-semibold font-dmSans transition-all whitespace-nowrap backdrop-blur-sm"
            >
              <span>All Posts</span>
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredPosts.map((post, index) => {
            const isArticle = post.type === "article";
            const targetUrl = isArticle ? `/blog/${post.slug}` : post.socialEmbedUrl;
            const targetProps = isArticle ? {} : { target: "_blank", rel: "noopener noreferrer" };

            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="relative flex flex-col rounded-2xl bg-surface/60 border border-border/80 hover:border-primary/40 transition-all duration-300 group overflow-hidden backdrop-blur-sm"
              >
                {/* Top accent */}
                <div className="h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Meta */}
                  <div className="flex items-center justify-between gap-3 text-xs font-dmSans text-text-muted">
                    <span className="px-2.5 py-1 rounded-lg bg-[#0A0D14]/80 border border-border/70 text-accent font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {isArticle && (
                        <span className="flex items-center gap-1 text-primary">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {post.date}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <a
                    href={targetUrl}
                    {...targetProps}
                    className="font-syne font-bold text-lg text-white group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-3 block"
                  >
                    {post.title}
                  </a>

                  {/* Excerpt */}
                  <p className="text-text-muted font-dmSans text-sm leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border/40 mt-auto">
                    <a
                      href={targetUrl}
                      {...targetProps}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-syne text-text-muted group-hover:text-accent transition-colors"
                    >
                      {isArticle ? (
                        <>
                          <BookOpen size={12} className="text-primary" />
                          <span>Read Article</span>
                        </>
                      ) : (
                        <>
                          {getSocialIcon(post.socialEmbedUrl)}
                          <span>View Post</span>
                        </>
                      )}
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

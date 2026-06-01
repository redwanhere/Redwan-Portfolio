"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, BookOpen, ChevronRight, Inbox, Home } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import blogPostsData from "../../../data/blogPosts.json";

const ARTICLE_IMAGES = {
  "unlocking-attribution-accuracy-ios14": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&fit=crop",
  "scientific-ad-creative-testing-system": "https://images.unsplash.com/photo-1542744173-8e0853c0374a?q=80&w=800&fit=crop",
  "demystifying-ga4-attribution-models": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&fit=crop",
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  // Monitor scroll for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(progress);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch the matching post details client side
  useEffect(() => {
    if (slug) {
      const match = blogPostsData.find((p) => p.slug === slug && p.type === "article");
      setPost(match || null);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#0A0D14] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-border border-t-primary animate-spin" />
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0A0D14] text-[#F9FAFB] flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow flex items-center justify-center py-32 px-6">
          <div className="max-w-md text-center flex flex-col items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center text-text-muted">
              <Inbox size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-syne font-bold text-white">Article Not Found</h1>
              <p className="text-sm font-dmSans text-text-muted mt-2 leading-relaxed">
                The article you are searching for does not exist or has been relocated to another address.
              </p>
            </div>
            <Link
              href="/blog"
              className="px-6 py-2.5 rounded-xl bg-primary hover:bg-indigo-500 text-white font-dmSans font-bold text-xs uppercase tracking-wider flex items-center gap-2 mt-2 transition-colors shadow-glow-indigo/15"
            >
              <ArrowLeft size={14} />
              <span>Back To Blog</span>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const blogImageUrl = ARTICLE_IMAGES[post.slug] || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&fit=crop";

  return (
    <main className="min-h-screen bg-[#0A0D14] text-[#F9FAFB] relative overflow-hidden flex flex-col justify-between">
      
      {/* Scroll indicator reading bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary to-accent z-50 transition-all duration-75"
        style={{ width: `${readingProgress}%` }}
      />

      <Navbar />

      {/* Main Container */}
      <div className="flex-grow pt-32 pb-24 relative z-10">
        
        {/* Background glow flares */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6">
          
          {/* Header Action / Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-dmSans font-medium text-text-muted/70 tracking-wide uppercase mb-6 select-none">
            <Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-1.5">
              <ArrowLeft size={13} />
              <span>Blog Directory</span>
            </Link>
            <ChevronRight size={12} className="text-primary" />
            <span className="text-white truncate">{post.title}</span>
          </div>

          {/* Article Header block */}
          <div className="flex flex-col gap-4 mb-8">
            <span className="px-3 py-1 rounded-lg bg-surface border border-border text-xs font-semibold text-accent font-dmSans uppercase tracking-wider self-start select-none">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-xs font-dmSans text-text-muted mt-2 border-t border-b border-border/40 py-3.5">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-accent" />
                <span>{post.date}</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-border" />
              <div className="flex items-center gap-1.5">
                <BookOpen size={14} className="text-primary" />
                <span className="text-white font-medium">{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Featured Header Image */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-surface border border-border mb-10 shadow-2xl">
            <Image
              src={blogImageUrl}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
            />
          </div>

          {/* Rich Content Render (Article body) */}
          <div className="prose prose-invert max-w-none font-dmSans text-sm sm:text-base text-text-muted leading-relaxed flex flex-col gap-6">
            
            {/* Custom parse simple content */}
            {post.content ? (
              post.content.split("\n\n").map((para, pIdx) => {
                if (para.startsWith("### ")) {
                  return (
                    <h3 key={pIdx} className="text-xl sm:text-2xl font-syne font-bold text-white mt-6 mb-2 tracking-wide select-none">
                      {para.replace("### ", "")}
                    </h3>
                  );
                }
                if (para.startsWith("#### ")) {
                  return (
                    <h4 key={pIdx} className="text-lg font-syne font-bold text-accent mt-4 mb-1">
                      {para.replace("#### ", "")}
                    </h4>
                  );
                }
                if (para.startsWith("* ")) {
                  return (
                    <ul key={pIdx} className="list-disc pl-5 flex flex-col gap-2.5">
                      {para.split("\n").map((li, lIdx) => (
                        <li key={lIdx} className="text-text-muted">
                          {li.replace("* ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={pIdx} className="whitespace-pre-line">
                    {para}
                  </p>
                );
              })
            ) : (
              <p>No content available.</p>
            )}

          </div>

          {/* Footer Navigation Back Button */}
          <div className="mt-12 pt-8 border-t border-border/40 flex items-center justify-between gap-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-white font-syne hover:text-primary transition-colors hover:underline underline-offset-4"
            >
              <ArrowLeft size={16} />
              <span>Return To Blog List</span>
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

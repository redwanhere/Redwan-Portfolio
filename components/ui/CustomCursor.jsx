"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("default"); // default, hover, text, click
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [clicks, setClicks] = useState([]); // Store active ripples

  // Mouse absolute positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer bracket spring - buttery smooth lag
  const outerSpringConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const outerX = useSpring(mouseX, outerSpringConfig);
  const outerY = useSpring(mouseY, outerSpringConfig);

  // Center precision core spring - ultra stiff/fast for zero-latency feel
  const coreSpringConfig = { damping: 40, stiffness: 850, mass: 0.15 };
  const coreX = useSpring(mouseX, coreSpringConfig);
  const coreY = useSpring(mouseY, coreSpringConfig);

  useEffect(() => {
    setIsMounted(true);

    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsMobile(!mediaQuery.matches);

    const handleDeviceChange = (e) => {
      setIsMobile(!e.matches);
    };
    mediaQuery.addEventListener("change", handleDeviceChange);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener("change", handleDeviceChange);
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = (e) => {
      setCursorType("click");
      // Add a ripple effect at the click coordinates
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setClicks((prev) => [...prev, newRipple]);
    };

    const handleMouseUp = (e) => {
      const target = e.target;
      if (!target) return;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer") ||
        target.closest("[onclick]")
      ) {
        setCursorType("hover");
      } else if (
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest('[contenteditable="true"]')
      ) {
        setCursorType("text");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer") ||
        target.closest("[onclick]")
      ) {
        setCursorType("hover");
      } else if (
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest('[contenteditable="true"]')
      ) {
        setCursorType("text");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      mediaQuery.removeEventListener("change", handleDeviceChange);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  // Clean up old click ripples
  useEffect(() => {
    if (clicks.length > 0) {
      const timer = setTimeout(() => {
        setClicks((prev) => prev.slice(1));
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [clicks]);

  if (!isMounted || isMobile) return null;

  // Outer bracket styles based on cursor state
  const getBracketVariants = () => {
    switch (cursorType) {
      case "hover":
        return {
          width: 44,
          height: 44,
          rotate: 45,
          color: "#38BDF8", // Cyan-400
          borderColor: "rgba(56, 189, 248, 0.4)",
          opacity: 1,
        };
      case "text":
        return {
          width: 14,
          height: 28,
          rotate: 0,
          color: "rgba(249, 250, 251, 0.4)", // White muted
          borderColor: "rgba(249, 250, 251, 0.1)",
          opacity: 0.5,
        };
      case "click":
        return {
          width: 22,
          height: 22,
          rotate: 90,
          color: "#6366F1", // Indigo-500
          borderColor: "rgba(99, 102, 241, 0.6)",
          opacity: 1,
        };
      case "default":
      default:
        return {
          width: 32,
          height: 32,
          rotate: 0,
          color: "rgba(249, 250, 251, 0.7)", // White
          borderColor: "rgba(249, 250, 251, 0.2)",
          opacity: 0.75,
        };
    }
  };

  // Center core styling
  const getCoreVariants = () => {
    switch (cursorType) {
      case "hover":
        return {
          scale: 1.4,
          backgroundColor: "#38BDF8", // Cyan
          rotate: 135,
          borderRadius: "50%",
          boxShadow: "0 0 12px rgba(56, 189, 248, 0.8)",
        };
      case "text":
        return {
          scale: 0.8,
          backgroundColor: "#F9FAFB",
          rotate: 0,
          borderRadius: "0px",
          height: "16px",
          width: "1.5px",
        };
      case "click":
        return {
          scale: 0.6,
          backgroundColor: "#6366F1", // Indigo
          rotate: 45,
          borderRadius: "20%",
        };
      case "default":
      default:
        return {
          scale: 1,
          backgroundColor: "#6366F1", // Indigo
          rotate: 45,
          borderRadius: "25%", // Makes it a cool rounded diamond
          boxShadow: "0 0 6px rgba(99, 102, 241, 0.4)",
        };
    }
  };

  const currentBrackets = getBracketVariants();
  const currentCore = getCoreVariants();

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Click ripples */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ position: "fixed", left: click.x, top: click.y, x: "-50%", y: "-50%", scale: 0.1, opacity: 0.8 }}
            animate={{ scale: 1.6, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-14 h-14 rounded-full border border-cyan-400/40 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 10px rgba(56, 189, 248, 0.2), 0 0 15px rgba(56, 189, 248, 0.1)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main Custom Cursor Wrapper */}
      <motion.div
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full"
      >
        {/* Dynamic Outer Focus Brackets */}
        <motion.div
          style={{
            x: outerX,
            y: outerY,
            translateX: "-50%",
            translateY: "-50%",
            position: "fixed",
          }}
          animate={currentBrackets}
          transition={{
            type: "spring",
            damping: 24,
            stiffness: 180,
            mass: 0.4,
          }}
          className="flex items-center justify-center pointer-events-none"
        >
          {cursorType === "text" ? (
            // Text selection mode displays simplified enclosing vertical guides
            <div className="flex justify-between w-full h-full px-1">
              <span className="w-[1.5px] h-full bg-white/40 rounded-full" />
              <span className="w-[1.5px] h-full bg-white/40 rounded-full" />
            </div>
          ) : (
            // Modern geometric camera-focus corner brackets
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: currentBrackets.color }}
              className="transition-colors duration-200"
            >
              {/* Top-Left Bracket */}
              <path
                d="M 3 9 V 3 H 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Top-Right Bracket */}
              <path
                d="M 37 9 V 3 H 31"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Bottom-Left Bracket */}
              <path
                d="M 3 31 V 37 H 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Bottom-Right Bracket */}
              <path
                d="M 37 31 V 37 H 31"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.div>

        {/* Dynamic Center Precision Core */}
        <motion.div
          style={{
            x: coreX,
            y: coreY,
            translateX: "-50%",
            translateY: "-50%",
            position: "fixed",
            width: cursorType === "text" ? "1.5px" : "6px",
            height: cursorType === "text" ? "16px" : "6px",
          }}
          animate={currentCore}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 400,
            mass: 0.1,
          }}
          className="pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

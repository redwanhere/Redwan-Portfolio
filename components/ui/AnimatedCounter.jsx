"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ target, duration = 1.5 }) {
  const [count, setCount] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Parse target e.g. "$8M+" or "40%+" or "12"
    // Separate prefix (non-digits at start), number (digits/decimal), and suffix (non-digits at end)
    const match = String(target).match(/^([^\d]*)([\d.,]+)([^\d]*)$/);
    if (!match) {
      setCount(target);
      return;
    }

    const prefix = match[1];
    const rawNumber = parseFloat(match[2].replace(/,/g, ""));
    const suffix = match[3];

    if (isNaN(rawNumber)) {
      setCount(target);
      return;
    }

    const end = rawNumber;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;
      
      // Easing: cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeProgress * end);

      if (currentStep >= totalSteps) {
        setCount(target);
        clearInterval(timer);
      } else {
        const formattedVal = currentVal.toLocaleString();
        setCount(`${prefix}${formattedVal}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-syne font-bold select-none">
      {count || target}
    </span>
  );
}

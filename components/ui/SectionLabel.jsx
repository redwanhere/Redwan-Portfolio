import React from "react";

export default function SectionLabel({ text, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 mb-2 ${className}`}>
      <span className="w-4 h-[2px] bg-primary rounded-full" />
      <span className="text-xs font-syne font-bold uppercase tracking-[0.15em] text-primary">{text}</span>
    </div>
  );
}

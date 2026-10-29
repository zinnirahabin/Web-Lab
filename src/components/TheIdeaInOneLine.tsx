import React from "react";
import { siteContent } from "@/data/content";

export default function TheIdeaInOneLine() {
  return (
    <section id="the-idea" className="py-16 lg:py-24 bg-surface-muted border-b border-outline">
      <div className="max-w-shell-narrow mx-auto px-5 sm:px-8">
        {/* Section Header Stack */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>{siteContent.theIdeaInOneLine.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-secondary tracking-[-0.035em] leading-[1.06]">
            {siteContent.theIdeaInOneLine.title}
          </h2>
        </div>

        {/* Emerald Editorial "Headline Card": Dark Ink Panel with Scanline Texture */}
        <div className="relative bg-secondary text-primary-bright rounded-[26px] p-8 sm:p-12 lg:p-14 shadow-float border border-outline-strong/20 overflow-hidden">
          {/* Scanline pattern overlay */}
          <div className="absolute inset-0 scanline-pattern pointer-events-none opacity-40"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Monospace header tag */}
            <span className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-primary-bright/70 mb-4">
              CRITICAL PRINCIPLE
            </span>

            {/* Core statement */}
            <p className="font-mono text-xl sm:text-2xl lg:text-[28px] font-medium leading-[1.4] text-white max-w-[48ch]">
              &ldquo;{siteContent.theIdeaInOneLine.idea}&rdquo;
            </p>

            {/* Verification badge */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-between text-xs font-mono text-white/60">
              <span>RECORD-BASED RESOLUTION</span>
              <span className="text-primary-bright">100% IN WRITING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

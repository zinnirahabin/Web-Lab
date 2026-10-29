import React from "react";
import { siteContent } from "@/data/content";

export default function KeyNumbers() {
  return (
    <section id="key-numbers" className="py-20 lg:py-28 bg-surface border-b border-outline">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header Stack */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>{siteContent.keyNumbers.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-secondary tracking-[-0.035em] leading-[1.06] mb-4">
            {siteContent.keyNumbers.title}
          </h2>
          <p className="text-lg sm:text-[20px] leading-[1.72] text-on-surface-variant max-w-[62ch]">
            {siteContent.keyNumbers.lead}
          </p>
        </div>

        {/* Emerald Editorial Stat Grid */}
        {/* Grid sitting on an outline background with a 1px gap inside one rounded card */}
        <div className="rounded-md border border-outline-strong overflow-hidden bg-outline-strong shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {siteContent.keyNumbers.items.map((stat, idx) => (
              <div
                key={idx}
                className="bg-surface p-7 sm:p-9 flex flex-col justify-between hover:bg-surface-2 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-on-surface-muted font-medium">
                      METRIC 0{idx + 1}
                    </span>
                    {stat.isHot && (
                      <span className="text-[10px] font-mono uppercase bg-primary-soft text-primary font-bold px-2 py-0.5 rounded-full border border-primary-border">
                        GOLDEN RULE
                      </span>
                    )}
                  </div>

                  {/* Stat Number */}
                  <div
                    className={`font-tnum text-5xl sm:text-6xl lg:text-[68px] font-extrabold tracking-[-0.035em] leading-none mb-4 ${
                      stat.isHot ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {stat.value}
                  </div>
                </div>

                {/* Caption */}
                <p className="text-[15px] sm:text-[16px] font-medium leading-[1.5] text-on-surface">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

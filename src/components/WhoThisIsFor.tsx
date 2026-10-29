import React from "react";
import { siteContent } from "@/data/content";

export default function WhoThisIsFor() {
  const devices = [
    { name: "Smartphones & Tablets", icon: "📱", desc: "Screen, battery, motherboard & hardware defects under warranty" },
    { name: "Television & Audio", icon: "📺", desc: "Display panels, backlights, power supply & sound issues" },
    { name: "Laptops & Computers", icon: "💻", desc: "Keyboard, hinge, cooling fans & logic board failures" },
    { name: "Home Appliances", icon: "🧺", desc: "Refrigerators, washing machines, microwaves & AC compressors" },
  ];

  return (
    <section id="who-this-is-for" className="py-20 lg:py-28 bg-surface border-b border-outline">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header Stack */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>{siteContent.whoThisIsFor.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-secondary tracking-[-0.035em] leading-[1.06] mb-5">
            {siteContent.whoThisIsFor.title}
          </h2>
          <p className="text-lg sm:text-[20px] leading-[1.72] text-on-surface-variant max-w-[62ch]">
            {siteContent.whoThisIsFor.text}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {devices.map((device, idx) => (
            <div
              key={idx}
              className="bg-surface rounded-md border border-outline p-6 shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl mb-4 block" role="img" aria-label={device.name}>
                  {device.icon}
                </span>
                <h3 className="text-[17px] font-bold text-secondary mb-2">
                  {device.name}
                </h3>
                <p className="text-[13.5px] leading-[1.5] text-on-surface-variant">
                  {device.desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-outline/60 flex items-center justify-between text-[11px] font-mono text-primary font-medium">
                <span>COVERED</span>
                <span>INSPECTION READY</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Card */}
        <div className="mt-10 bg-primary-soft border border-primary-border rounded-md p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 font-bold">
              ✓
            </div>
            <div>
              <p className="text-sm font-mono uppercase tracking-wider text-primary-ink font-semibold">
                CORE COMMITMENT
              </p>
              <p className="text-[15px] text-on-surface font-medium">
                Decided on facts and written documentation, not verbal brush-offs.
              </p>
            </div>
          </div>
          <a
            href="#checklist"
            className="inline-flex items-center justify-center text-[13.5px] font-semibold text-primary hover:text-primary-strong font-mono uppercase tracking-wider gap-1"
          >
            <span>Go to Steps</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

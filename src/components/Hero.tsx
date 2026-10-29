"use client";

import React from "react";
import { siteContent } from "@/data/content";

export default function Hero() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-28 border-b border-outline">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 55% Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Label (Eyebrow) */}
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span>FREE CONSUMER CHECKLIST</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-secondary tracking-[-0.035em] leading-[1.06] mb-6">
              {siteContent.header.brandName}
            </h1>

            {/* Lead Paragraph */}
            <p className="text-lg sm:text-[20px] leading-[1.72] text-on-surface-variant max-w-[62ch] mb-8">
              {siteContent.header.brandSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#checklist"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-strong text-white font-semibold text-[15px] px-7 py-3.5 rounded-full shadow-raised hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Explore the 15 Steps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 bg-surface hover:bg-surface-muted text-secondary border border-outline font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <svg className="w-4 h-4 text-on-surface-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <span>Print / Save Checklist</span>
              </button>
            </div>

            {/* Micro reassurance tag */}
            <div className="mt-8 flex items-center gap-3 text-xs text-on-surface-muted font-mono uppercase tracking-wider">
              <span className="flex h-2 w-2 relative">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>15 Practical Steps • 4 Chronological Stages • 100% Free</span>
            </div>
          </div>

          {/* Right Column: 45% Visual Editorial Document Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-border to-primary-soft-2 rounded-[28px] blur-sm opacity-60"></div>

              {/* Editorial Document Card */}
              <div className="relative bg-surface rounded-[26px] border border-outline-strong p-6 sm:p-8 shadow-raised">
                {/* Document Top Bar */}
                <div className="flex items-center justify-between border-b border-outline pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-error inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-primary-bright inline-block"></span>
                  </div>
                  <span className="text-[10px] font-mono uppercase text-on-surface-muted tracking-[0.16em]">
                    CASE FILE TEMPLATE
                  </span>
                </div>

                {/* Document Header Quote */}
                <div className="bg-primary-soft border border-primary-border rounded-md p-4 mb-5">
                  <p className="text-xs font-mono uppercase text-primary-ink font-semibold tracking-wider mb-1">
                    PRIMARY RULE OF WARRANTY CLAIMS
                  </p>
                  <p className="text-sm font-semibold text-primary-strong italic">
                    &ldquo;If it is not in writing, it did not happen.&rdquo;
                  </p>
                </div>

                {/* Evidence checklist preview */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-start gap-3 p-3 bg-surface-2 rounded-sm border border-outline">
                    <span className="text-primary font-bold">✓</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center text-on-surface-strong font-semibold">
                        <span>Original Invoice & PDF</span>
                        <span className="text-[10px] text-primary bg-primary-soft px-1.5 py-0.5 rounded">DOCUMENTED</span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-0.5">Warranty starts on invoice date</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-surface-2 rounded-sm border border-outline">
                    <span className="text-primary font-bold">✓</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center text-on-surface-strong font-semibold">
                        <span>Fault Video & Photo Log</span>
                        <span className="text-[10px] text-primary bg-primary-soft px-1.5 py-0.5 rounded">TIMESTAMPTED</span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-0.5">Recorded with date/time visible</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-surface-2 rounded-sm border border-outline">
                    <span className="text-primary font-bold">✓</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center text-on-surface-strong font-semibold">
                        <span>Technician Job Sheet Copy</span>
                        <span className="text-[10px] text-primary bg-primary-soft px-1.5 py-0.5 rounded">REQUESTED</span>
                      </div>
                      <p className="text-[11px] text-on-surface-variant mt-0.5">Inspection report obtained before departure</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Summary */}
                <div className="mt-5 pt-4 border-t border-outline flex items-center justify-between text-[11px] text-on-surface-muted">
                  <span className="font-mono">STATUS: DECIDED ON FACTS</span>
                  <span className="font-mono font-medium text-primary">CLAIM READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

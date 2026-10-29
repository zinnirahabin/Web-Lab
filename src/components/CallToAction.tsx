"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";

export default function CallToAction() {
  const [copied, setCopied] = useState(false);

  const handleDownloadOrPrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareData = {
      title: "CLAIM READY — Warranty Claim Checklist",
      text: "A free checklist for anyone about to file a warranty claim. A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User dismissed share dialog
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        alert("Copy this URL to share: " + window.location.href);
      }
    }
  };

  return (
    <section id="call-to-action" className="py-20 lg:py-28 bg-surface-muted border-b border-outline">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header Stack */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-3.5 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>{siteContent.callToAction.eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[47px] font-extrabold text-secondary tracking-[-0.035em] leading-[1.06] mb-4">
            {siteContent.callToAction.title}
          </h2>
          <p className="text-lg sm:text-[20px] leading-[1.72] text-on-surface-variant max-w-[62ch]">
            {siteContent.callToAction.lead}
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Download */}
          <div className="bg-surface rounded-md border border-outline p-8 sm:p-10 shadow-card flex flex-col justify-between hover:shadow-raised transition-all">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-soft text-primary border border-primary-border flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-on-surface-muted block mb-2">
                ACTION 01
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                {siteContent.callToAction.actions[0].text}
              </h3>

              <p className="text-[15px] leading-[1.65] text-on-surface-variant mb-6">
                Print or export the full 15-step checklist as a clean, standardized PDF record to file right alongside your product receipt and warranty card.
              </p>
            </div>

            <button
              onClick={handleDownloadOrPrint}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-strong text-white font-semibold text-[15px] px-7 py-3.5 rounded-full shadow-raised hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download / Print Checklist</span>
            </button>
          </div>

          {/* Card 2: Share */}
          <div className="bg-surface rounded-md border border-outline p-8 sm:p-10 shadow-card flex flex-col justify-between hover:shadow-raised transition-all">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary-soft text-primary border border-primary-border flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>

              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-on-surface-muted block mb-2">
                ACTION 02
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                {siteContent.callToAction.actions[1].text}
              </h3>

              <p className="text-[15px] leading-[1.65] text-on-surface-variant mb-6">
                Help friends and family safeguard their high-ticket purchases before unexpected faults occur. Sharing takes seconds and could save thousands.
              </p>
            </div>

            <div className="relative">
              <button
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-primary text-white font-semibold text-[15px] px-7 py-3.5 rounded-full shadow-raised hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>Share Guide With a Friend</span>
              </button>

              {copied && (
                <div className="mt-2 text-xs font-mono text-primary font-bold">
                  ✓ Link copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

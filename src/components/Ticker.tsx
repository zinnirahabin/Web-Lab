"use client";

import React from "react";
import { siteContent } from "@/data/content";

export default function Ticker() {
  const tickerItems = [
    "CLAIM READY",
    "A WARRANTY CLAIM IS DECIDED ON RECORDS",
    "KEEP YOURS, AND ASK FOR THEIRS IN WRITING",
    "15 CHECKLIST STEPS",
    "4 RECORDS TO KEEP BEFORE FAULT",
    "RULE 1: IF NOT IN WRITING, IT DID NOT HAPPEN",
    "FREE CONSUMER GUIDE",
  ];

  return (
    <div
      id="ticker"
      className="bg-primary-soft text-primary-ink border-b border-primary-border overflow-hidden py-2 text-[10px] font-mono font-medium tracking-[0.16em] uppercase select-none no-print"
      aria-label="Announcement ticker"
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={index} className="inline-flex items-center mx-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block mr-3"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

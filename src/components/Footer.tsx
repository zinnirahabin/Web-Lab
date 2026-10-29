import React from "react";
import { siteContent } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-surface-muted border-t border-outline py-16 lg:py-20 text-[13.5px] leading-[1.6] text-on-surface-variant no-print">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-outline">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-xs">
                CR
              </div>
              <span className="font-extrabold text-base text-secondary tracking-tight">
                {siteContent.header.brandName}
              </span>
            </div>
            <p className="text-on-surface-variant mb-4">
              {siteContent.header.brandSubtitle}
            </p>
            <p className="font-mono text-xs text-primary font-semibold">
              Calm • Factual • In Writing
            </p>
          </div>

          {/* Column 2: Checklist Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-secondary font-bold mb-4">
              Checklist Stages
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#before-anything-goes-wrong" className="hover:text-primary transition-colors">
                  01. Before Anything Goes Wrong (Steps 1–4)
                </a>
              </li>
              <li>
                <a href="#when-the-fault-appears" className="hover:text-primary transition-colors">
                  02. When the Fault Appears (Steps 5–7)
                </a>
              </li>
              <li>
                <a href="#when-a-technician-visits" className="hover:text-primary transition-colors">
                  03. When a Technician Visits (Steps 8–10)
                </a>
              </li>
              <li>
                <a href="#if-the-claim-is-refused" className="hover:text-primary transition-colors">
                  04. If the Claim is Refused (Steps 11–15)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Principles */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-secondary font-bold mb-4">
              Core Principles
            </h4>
            <p className="mb-3">
              Warranty decisions rely on verifiable records. Keep digital backups of all invoices, communication transcripts, and technical service reports.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-on-surface-muted bg-surface px-3 py-1.5 rounded-full border border-outline">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>15 Practical Steps</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer / Footer Note from content.txt */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-on-surface-muted">
          <div className="max-w-3xl">
            <span className="font-mono uppercase font-bold text-secondary mr-2">
              {siteContent.footerNote.title}:
            </span>
            <span>{siteContent.footerNote.disclaimer}</span>
          </div>

          <div className="font-mono text-[11px] shrink-0 text-on-surface-muted">
            DESIGN: EMERALD EDITORIAL
          </div>
        </div>
      </div>
    </footer>
  );
}

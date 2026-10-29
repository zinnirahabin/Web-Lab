"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/content";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface/92 backdrop-blur-md border-b border-outline h-[72px] transition-all no-print">
      <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10 h-full flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-sm tracking-tight transition-transform group-hover:scale-105">
            CR
          </div>
          <span className="font-extrabold text-lg sm:text-xl text-secondary tracking-[-0.035em]">
            {siteContent.header.brandName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-on-surface-variant">
          <a
            href="#who-this-is-for"
            className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-primary"
          >
            Who This Is For
          </a>
          <a
            href="#the-idea"
            className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-primary"
          >
            The Core Idea
          </a>
          <a
            href="#checklist"
            className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-primary"
          >
            Checklist (15 Steps)
          </a>
          <a
            href="#key-numbers"
            className="hover:text-secondary transition-colors focus:outline-none focus-visible:text-primary"
          >
            Key Numbers
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#checklist"
            className="inline-flex items-center justify-center bg-secondary hover:bg-primary text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Open Checklist
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-on-surface-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline px-6 py-5 shadow-lg space-y-4">
          <a
            href="#who-this-is-for"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[15px] font-medium text-on-surface hover:text-primary"
          >
            Who This Is For
          </a>
          <a
            href="#the-idea"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[15px] font-medium text-on-surface hover:text-primary"
          >
            The Core Idea
          </a>
          <a
            href="#checklist"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[15px] font-medium text-on-surface hover:text-primary"
          >
            Checklist (15 Steps)
          </a>
          <a
            href="#key-numbers"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[15px] font-medium text-on-surface hover:text-primary"
          >
            Key Numbers
          </a>
          <a
            href="#call-to-action"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-secondary hover:bg-primary text-white text-[13.5px] font-medium py-3 rounded-full transition-colors"
          >
            Download / Share
          </a>
        </div>
      )}
    </header>
  );
}

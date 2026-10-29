# Claim Ready

A calm, factual, editorial web application for anyone preparing or disputing a consumer warranty claim. Built with Next.js 14, TypeScript, and Tailwind CSS following the **Sorry Bravia: Emerald Editorial** design system.

---

## Overview

A warranty claim is decided on verifiable records. **Claim Ready** provides a practical 15-step checklist across four critical stages:

1. **Before Anything Goes Wrong** (Steps 01–04) — Invoices, product registration, warranty cards, condition photos.
2. **When the Fault Appears** (Steps 05–07) — Timestamped fault evidence, written notices, reference tracking.
3. **When a Technician Visits** (Steps 08–10) — Job sheets, diagnostic tests, on-site photo records.
4. **If the Claim is Refused** (Steps 11–15) — Written reasons, technical reports, company escalation, consumer helplines.

---

## Tech Stack & Design System

* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS with custom design tokens from `sorry-bravia-emerald-editorial-DESIGN.md`
* **Typography:** Plus Jakarta Sans & JetBrains Mono
* **Aesthetics:** Light theme, Emerald (`#087A58`) accent, Ink (`#0D1117`) text, Mint wash callouts, Dark ink panel for refused claims, and soft elevation shadows.

---

## Getting Started

### Prerequisites

* Node.js v18.17+ or v20+ (tested on Node v24)
* npm, pnpm, or yarn

### Installation

```bash
npm install
```

### Development Server

Run the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

Create an optimized static build and test locally:

```bash
npm run build
npm run start
```

---

## Project Structure

```text
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom styles, animations, print rules
│   │   ├── layout.tsx       # Root layout with Google Fonts & metadata
│   │   └── page.tsx         # Page composition
│   ├── components/
│   │   ├── Header.tsx       # Sticky 72px header with nav & mobile menu
│   │   ├── Ticker.tsx       # Infinite scrolling announcement ticker
│   │   ├── Hero.tsx         # Two-column hero with editorial document card
│   │   ├── TheIdeaInOneLine.tsx # Headline Card with scanline texture
│   │   ├── WhoThisIsFor.tsx # Audience & covered device categories
│   │   ├── ChecklistSection.tsx # 15 interactive steps (Stage 4 in dark ink)
│   │   ├── KeyNumbers.tsx   # Stat grid with tabular figures & hot cell
│   │   ├── CallToAction.tsx # Printable PDF download & Web Share API
│   │   └── Footer.tsx       # 3-column editorial footer & disclaimer
│   └── data/
│       └── content.ts       # Centralized, typed content from content.txt
├── content.txt              # Primary source copy
├── sorry-bravia-emerald-editorial-DESIGN.md # Design system specifications
└── tailwind.config.js       # Emerald Editorial token configuration
```

---

## License & Disclaimer

*Claim Ready is a free, general educational guide and does not constitute formal legal advice. Always review the specific warranty policy of your product manufacturer and applicable local consumer protection laws.*

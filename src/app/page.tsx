import React from "react";
import Ticker from "@/components/Ticker";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TheIdeaInOneLine from "@/components/TheIdeaInOneLine";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ChecklistSection from "@/components/ChecklistSection";
import KeyNumbers from "@/components/KeyNumbers";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* 1. Ticker Strip */}
      <Ticker />

      {/* 2. Sticky Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section (55/45 Copy & Document Card) */}
        <Hero />

        {/* 4. The Idea in One Line (Headline Card with Scanlines) */}
        <TheIdeaInOneLine />

        {/* 5. Who This Is For (Audience & Device Categories) */}
        <WhoThisIsFor />

        {/* 6. The 15-Step Checklist (Stages 01–04, Stage 04 in Dark Ink) */}
        <ChecklistSection />

        {/* 7. Key Numbers (3-Metric Stat Grid with Hot Cell) */}
        <KeyNumbers />

        {/* 8. Call to Action (Download & Share Actions) */}
        <CallToAction />
      </main>

      {/* 9. Footer (Footer Note & Navigation) */}
      <Footer />
    </div>
  );
}

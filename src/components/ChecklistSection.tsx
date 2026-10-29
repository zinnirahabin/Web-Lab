"use client";

import React, { useState } from "react";
import { siteContent, ChecklistStage } from "@/data/content";

export default function ChecklistSection() {
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  const toggleStep = (id: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalCompleted = Object.values(completedSteps).filter(Boolean).length;
  const totalSteps = 15;

  const resetAll = () => {
    setCompletedSteps({});
  };

  return (
    <section id="checklist" className="border-b border-outline">
      {/* Sticky Progress Bar for the Checklist */}
      <div className="sticky top-[72px] z-30 bg-surface/95 backdrop-blur border-b border-outline py-3 shadow-sm no-print">
        <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-wider text-on-surface-variant font-semibold">
              YOUR PROGRESS:
            </span>
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink px-2.5 py-1 rounded-full text-xs font-mono font-bold">
              <span>{totalCompleted} / {totalSteps} COMPLETED</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {totalCompleted > 0 && (
              <button
                onClick={resetAll}
                className="text-xs font-mono uppercase tracking-wider text-on-surface-muted hover:text-error transition-colors"
              >
                Reset Checklist
              </button>
            )}
            <a
              href="#call-to-action"
              className="text-xs font-mono uppercase tracking-wider text-primary hover:text-primary-strong font-semibold hidden sm:inline-block"
            >
              Download PDF →
            </a>
          </div>
        </div>
      </div>

      {/* Render Each Stage */}
      {siteContent.stages.map((stage: ChecklistStage, stageIndex: number) => {
        const isDark = stage.isDark;

        return (
          <div
            key={stage.id}
            id={stage.id}
            className={`py-16 lg:py-24 border-b border-outline transition-colors ${
              isDark
                ? "bg-secondary text-white section-dark"
                : stageIndex % 2 === 0
                ? "bg-surface"
                : "bg-surface-muted"
            }`}
          >
            <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-10">
              {/* Section Header Stack */}
              <div className="max-w-3xl mb-12 lg:mb-16">
                {/* Pill Eyebrow */}
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-medium tracking-[0.16em] uppercase mb-4 ${
                    isDark
                      ? "bg-white/10 text-primary-bright border border-primary-bright/30"
                      : "bg-primary-soft text-primary-ink border border-primary-border"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isDark ? "bg-primary-bright" : "bg-primary"
                    }`}
                  ></span>
                  <span>{stage.stageNumber}</span>
                </div>

                {/* Heavy Headline */}
                <h2
                  className={`text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-[-0.035em] leading-[1.08] mb-4 ${
                    isDark ? "text-white" : "text-secondary"
                  }`}
                >
                  {stage.title}
                </h2>

                {/* Lead Paragraph */}
                <p
                  className={`text-base sm:text-lg leading-[1.7] max-w-[62ch] ${
                    isDark ? "text-white/75" : "text-on-surface-variant"
                  }`}
                >
                  {stage.lead}
                </p>
              </div>

              {/* Cards Grid for the Steps */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 ${
                  stage.steps.length > 2 ? "lg:grid-cols-3" : ""
                } gap-5`}
              >
                {stage.steps.map((step) => {
                  const isChecked = !!completedSteps[step.id];

                  return (
                    <div
                      key={step.id}
                      onClick={() => toggleStep(step.id)}
                      className={`card group cursor-pointer select-none rounded-md transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between border ${
                        isDark
                          ? isChecked
                            ? "bg-white/15 border-primary-bright shadow-raised text-white"
                            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white"
                          : isChecked
                          ? "bg-primary-soft/50 border-primary shadow-raised"
                          : "bg-surface border-outline hover:border-outline-strong hover:shadow-raised hover:-translate-y-0.5"
                      }`}
                    >
                      <div>
                        {/* Top Step Badge & Checkbox */}
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`font-mono text-xs font-semibold tracking-wider ${
                              isDark
                                ? isChecked
                                  ? "text-primary-bright font-bold"
                                  : "text-white/60"
                                : isChecked
                                ? "text-primary font-bold"
                                : "text-on-surface-muted"
                            }`}
                          >
                            STEP {step.id < 10 ? `0${step.id}` : step.id}
                          </span>

                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                              isChecked
                                ? isDark
                                  ? "bg-primary-bright border-primary-bright text-secondary font-extrabold"
                                  : "bg-primary border-primary text-white font-extrabold"
                                : isDark
                                ? "border-white/30 group-hover:border-white/60"
                                : "border-outline-strong group-hover:border-primary"
                            }`}
                          >
                            {isChecked ? (
                              <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : null}
                          </div>
                        </div>

                        {/* Step Title */}
                        <h3
                          className={`text-lg font-bold mb-2 tracking-tight ${
                            isChecked
                              ? isDark
                                ? "text-primary-bright"
                                : "text-primary-ink"
                              : isDark
                              ? "text-white"
                              : "text-secondary"
                          }`}
                        >
                          {step.title}
                        </h3>

                        {/* Step Detail */}
                        <p
                          className={`text-[15px] leading-[1.65] ${
                            isDark ? "text-white/80" : "text-on-surface-variant"
                          }`}
                        >
                          {step.detail}
                        </p>
                      </div>

                      {/* Footer State Indication */}
                      <div
                        className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                          isDark ? "border-white/10" : "border-outline"
                        }`}
                      >
                        <span
                          className={
                            isChecked
                              ? isDark
                                ? "text-primary-bright font-bold"
                                : "text-primary font-bold"
                              : isDark
                              ? "text-white/40"
                              : "text-on-surface-muted"
                          }
                        >
                          {isChecked ? "COMPLETED" : "CLICK TO COMPLETE"}
                        </span>
                        <span
                          className={
                            isDark ? "text-white/30" : "text-on-surface-muted"
                          }
                        >
                          #{step.id}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

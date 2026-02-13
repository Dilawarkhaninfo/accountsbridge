"use client";

import React from "react";
import { cn } from "@/lib/utils";

const comparisonData = [
    {
        feature: "Team Structure",
        tier1: "1 accountant + 1 admin",
        tier2: "25+ team members, 2 partners",
        tier3: "50+ partners, corporate hierarchy",
    },
    {
        feature: "Client Focus",
        tier1: "Individuals & small businesses",
        tier2: "$1M–$5M+ companies",
        tier3: "Billionaires & multinationals",
    },
    {
        feature: "Availability",
        tier1: "Overwhelmed during tax season",
        tier2: "Direct WhatsApp groups, same-day response",
        tier3: "Navigate ticket systems & voicemail",
    },
    {
        feature: "Advisory Depth",
        tier1: "Compliance-only, backward-looking",
        tier2: "Full CFO-level planning & strategy",
        tier3: "Strategic, but $50K+ entry point",
    },
    {
        feature: "Companies Per Manager",
        tier1: "200–500+ (mixed individuals)",
        tier2: "~100 (business-focused)",
        tier3: "Varies, deprioritized unless high-value",
    },
];

export function WhyMidTierMatters() {
    return (
        <section className="bg-primary py-20 lg:py-28 overflow-hidden relative">

            {/* Background Glows — consistent with Hero */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none z-0" />

            <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#F0F4E9] leading-[1.1] tracking-tight">
                        Why Mid-Tier Matters
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 font-medium">
                        Not Small Enough to Be Limited. Not Big Enough to Ignore You.
                    </p>
                </div>

                {/* ── DESKTOP TABLE ── */}
                <div className="hidden lg:grid grid-cols-4 bg-white rounded-[2rem] shadow-2xl relative">

                    {/* ── Header Row ── */}

                    {/* Feature label */}
                    <div className="p-8 flex items-center justify-center border-b border-slate-100 bg-slate-50 rounded-tl-[2rem]">
                        <span className="font-bold text-slate-400 uppercase tracking-widest text-xs">
                            Feature
                        </span>
                    </div>

                    {/* Tier 1 header */}
                    <div className="p-8 text-center border-b border-l border-slate-100 flex items-center justify-center bg-white">
                        <h3 className="font-bold text-slate-500 text-base uppercase tracking-wide">
                            Tier 1: Solo Shops
                        </h3>
                    </div>

                    {/* Tier 2 header — highlighted */}
                    <div className="relative p-8 text-center bg-primary/5 border-b border-x border-primary/10 z-10 flex flex-col items-center justify-center">
                        {/* Top accent bar */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary" />

                        {/* Floating badge */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                            <span className="bg-secondary text-slate-900 text-[11px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg border border-yellow-300 flex items-center gap-1.5">
                                ★ We Are Here
                            </span>
                        </div>

                        <h3 className="font-bold text-primary text-lg mt-2">
                            Tier 2: Accounts Bridge
                        </h3>
                    </div>

                    {/* Tier 3 header */}
                    <div className="p-8 text-center border-b border-l border-slate-100 flex items-center justify-center bg-white rounded-tr-[2rem]">
                        <h3 className="font-bold text-slate-500 text-base uppercase tracking-wide">
                            Tier 3: Big 4 Firms
                        </h3>
                    </div>

                    {/* ── Data Rows ── */}
                    {comparisonData.map((row, index) => {
                        const isLast = index === comparisonData.length - 1;
                        const rowBorder = isLast ? "" : "border-b border-slate-100";

                        return (
                            <React.Fragment key={index}>
                                {/* Feature name */}
                                <div className={cn(
                                    "p-6 md:p-8 flex items-center bg-slate-50 font-bold text-slate-700 text-sm",
                                    isLast && "rounded-bl-[2rem]",
                                    rowBorder
                                )}>
                                    {row.feature}
                                </div>

                                {/* Tier 1 value */}
                                <div className={cn(
                                    "p-6 md:p-8 flex items-center justify-center text-center text-slate-500 font-medium text-sm border-l border-slate-100 bg-white",
                                    rowBorder
                                )}>
                                    {row.tier1}
                                </div>

                                {/* Tier 2 value — highlighted */}
                                <div className={cn(
                                    "p-6 md:p-8 flex items-center justify-center text-center bg-primary/5 font-bold text-slate-900 text-sm border-x border-primary/10 relative z-10",
                                    rowBorder
                                )}>
                                    {row.tier2}
                                </div>

                                {/* Tier 3 value */}
                                <div className={cn(
                                    "p-6 md:p-8 flex items-center justify-center text-center text-slate-500 font-medium text-sm border-l border-slate-100 bg-white",
                                    isLast && "rounded-br-[2rem]",
                                    rowBorder
                                )}>
                                    {row.tier3}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* ── MOBILE CARDS ── */}
                <div className="lg:hidden space-y-5">

                    {/* Card 1 — Tier 1 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <h3 className="text-base font-bold text-white/60 mb-5 text-center pb-4 border-b border-white/10 uppercase tracking-wide">
                            Tier 1: Solo Shops
                        </h3>
                        <div className="space-y-4">
                            {comparisonData.map((row, i) => (
                                <div key={i} className="flex justify-between items-start gap-4">
                                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest min-w-[100px] mt-0.5">
                                        {row.feature}
                                    </span>
                                    <span className="text-white/70 text-right text-sm font-medium">
                                        {row.tier1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2 — Tier 2 (Highlighted) */}
                    <div className="bg-white rounded-2xl p-6 shadow-2xl border-2 border-secondary relative">
                        {/* Top accent */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary" />

                        {/* Floating badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                            <span className="bg-secondary text-slate-900 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg border border-yellow-300">
                                ★ We Are Here
                            </span>
                        </div>

                        <div className="text-center mb-5 pb-4 border-b border-slate-100 pt-4">
                            <h3 className="text-lg font-bold text-primary">
                                Tier 2: Accounts Bridge
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {comparisonData.map((row, i) => (
                                <div key={i} className="flex justify-between items-start gap-4">
                                    <span className="text-xs font-bold text-primary/50 uppercase tracking-widest min-w-[100px] mt-0.5">
                                        {row.feature}
                                    </span>
                                    <span className="text-slate-900 text-right text-sm font-bold">
                                        {row.tier2}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 3 — Tier 3 */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <h3 className="text-base font-bold text-white/60 mb-5 text-center pb-4 border-b border-white/10 uppercase tracking-wide">
                            Tier 3: Big 4 Firms
                        </h3>
                        <div className="space-y-4">
                            {comparisonData.map((row, i) => (
                                <div key={i} className="flex justify-between items-start gap-4">
                                    <span className="text-xs font-bold text-white/40 uppercase tracking-widest min-w-[100px] mt-0.5">
                                        {row.feature}
                                    </span>
                                    <span className="text-white/70 text-right text-sm font-medium">
                                        {row.tier3}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
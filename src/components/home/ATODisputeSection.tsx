"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldAlert, CheckCircle2 } from "lucide-react";

const disputeServices = [
    "Audit Reviews & Investigations",
    "Objections to Notices of Assessment",
    "Director Penalty Notices (DPNs)",
    "Large Tax Debt & Part 7 / Super Audit Objections",
    "Penalty & Interest Remission Applications",
    "JobKeeper & Government Incentive Disputes",
    "Settlement Negotiations",
    "Release of Tax Debt",
    "Hardship Applications",
    "Statutory Demands & Winding-Up Notices",
    "AAT Applications & Reviews"
];

export function ATODisputeSection() {
    return (
        <section className="bg-primary py-20 lg:py-28 overflow-hidden relative">

            {/* Background glows — consistent with WhyMidTier / TechStack */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none z-0" />

            <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* ── LEFT: Content ── */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-8">

                        {/* Label */}
                        <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-[0.25em] uppercase text-xs">
                            <ShieldAlert className="w-4 h-4" />
                            <span>Protection & Resolution</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-[#F0F4E9] leading-[1.1] tracking-tight">
                            ATO & SRO Tax Dispute{" "}
                            <span className="text-secondary">Resolution Services</span>
                        </h2>

                        <div className="space-y-5 text-base text-white/90 font-medium leading-relaxed">
                            <p className="text-white/80">
                                At Accounts Bridge, we support Australian businesses through
                                complex ATO and State Revenue Office (SRO) disputes.
                            </p>
                            <p className="text-white/80">
                                When compliance issues escalate into audits, penalties, or
                                recovery actions, we step in with structured advice, clear
                                communication, and practical resolution strategies.
                            </p>
                        </div>

                        {/* CTA — secondary button, consistent with Hero */}
                        <div className="pt-2">
                            <Button
                                className="h-12 px-8 bg-secondary hover:bg-secondary/90 text-slate-900 rounded-md font-bold text-[15px] shadow-lg transition-all w-full md:w-auto"
                                asChild
                            >
                                <Link href="/contact-us">
                                    Get ATO Dispute Help
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* ── RIGHT: Services Grid ── */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">

                            {/* Subtle grid pattern overlay */}
                            <div
                                className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
                                    backgroundSize: "24px 24px",
                                }}
                            />

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3">
                                {disputeServices.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white/10 hover:bg-white/15 p-5 rounded-xl border border-white/10 hover:border-secondary/40 flex items-start gap-4 transition-all duration-300 hover:-translate-y-0.5"
                                    >
                                        <div className="mt-0.5 flex-shrink-0 text-secondary/50 group-hover:text-secondary transition-colors duration-300">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="text-white/80 group-hover:text-white font-semibold text-[14px] leading-snug transition-colors duration-300">
                                            {item}
                                        </span>
                                    </div>
                                ))}

                                {/* Filler — branded */}
                                <div className="bg-secondary/10 p-5 rounded-xl border border-secondary/20 flex items-center justify-center text-center">
                                    <span className="text-secondary font-bold text-sm">
                                        And more tailored solutions...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
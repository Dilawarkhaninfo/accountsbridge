"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import HeroImage2 from "../../../public/images/hero-image-2.png";

export function IndustryGapSection() {
    return (
        <section className="bg-[#F8F9FA] py-24 lg:py-32 overflow-hidden">
            <div className="max-w-8xl mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24">

                    {/* Left: Premium Image */}
                    <div className="w-full lg:w-5/12 relative order-2 lg:order-1 flex flex-col">
                        <div className="relative h-full min-h-[500px] lg:min-h-0 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
                            <Image
                                src={HeroImage2}
                                alt="Professional Accounting Team Meeting"
                                fill
                                className="object-cover"
                            />
                            {/* Branded Overlay */}
                            <div className="absolute inset-0 bg-primary/10" />
                        </div>

                        {/* Decorative Glow — matches Hero */}
                        <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full blur-[80px]" />
                    </div>

                    {/* Right: Narrative Content */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center space-y-10 order-1 lg:order-2">

                        {/* Header */}
                        <div className="space-y-5">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                                When Your Business Grows,{" "}
                                <br className="hidden lg:block" />
                                <span className="text-primary text-4xl">
                                    Your Accountant Has to Grow Too.
                                </span>
                            </h2>

                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                There are{" "}
                                <span className="text-primary font-bold">16,000</span>{" "}
                                accounting practices in Australia.{" "}
                                <br className="hidden md:block" />
                                <span className="text-primary font-bold">95%</span> can&apos;t
                                scale with you.{" "}
                                <span className="text-primary font-bold">0.25%</span> won&apos;t
                                answer your calls.
                            </p>
                        </div>

                        {/* The Three Segments */}
                        <div className="space-y-0 divide-y divide-slate-100">

                            {/* 95% Segment */}
                            <div className="group py-7 pl-8 border-l-4 border-slate-200 hover:border-slate-300 transition-all duration-300">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                                    95%{" "}
                                    <span className="font-medium text-slate-400 text-lg">
                                        are solo practitioners
                                    </span>
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-[16px]">
                                    One accountant. One admin. Brilliant for startups, but chaos
                                    when you hit{" "}
                                    <span className="font-semibold text-slate-800">$1M</span>. You
                                    need a team, not a one-person show juggling 500 tax returns.
                                </p>
                            </div>

                            {/* 0.25% Segment */}
                            <div className="group py-7 pl-8 border-l-4 border-slate-200 hover:border-slate-300 transition-all duration-300">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                                    0.25%{" "}
                                    <span className="font-medium text-slate-400 text-lg">
                                        are the Big 4
                                    </span>
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-[16px]">
                                    World-class if you&apos;re a billionaire. For everyone else?
                                    Ticket systems, long wait times, and paying premium rates to
                                    subsidize their CBD towers.
                                </p>
                            </div>

                            {/* 4.75% Segment — The Solution (highlighted) */}
                            <div className="py-7 pl-8 border-l-4 border-secondary bg-primary/[0.03] rounded-r-xl transition-all duration-300">
                                <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-3">
                                    4.75%{" "}
                                    <span className="font-medium text-slate-600 text-lg">
                                        are mid-tier firms like us
                                    </span>
                                </h3>
                                <p className="text-slate-700 leading-relaxed font-medium text-[16px]">
                                    Built for the exact revenue bracket you&apos;re in.
                                    Sophisticated enough to provide CFO-level strategy. Small enough
                                    that partners still take your calls.
                                </p>
                            </div>
                        </div>

                        {/* Punchline Badge */}
                        <div>
                            <div className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] duration-300">
                                <Check className="w-5 h-5 text-secondary" />
                                <span className="font-bold tracking-wide text-sm uppercase">
                                    This is the gap Accounts Bridge was built to fill
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
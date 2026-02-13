"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import HeroImage1 from "../../../public/images/hero-image-1.png";

const idealPartnerItems = [
    "You are generating $1M – $5M+ annually.",
    "You operate via Companies, Trusts, or Partnerships.",
    "You view accounting as an investment in growth, not just a compliance cost.",
    "You are ready to scale and need advice on Grants, Valuations, and Cashflow.",
];

export function WhoWeWorkWithSection() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="relative w-full bg-[#F8F9FA] py-20 lg:py-28 overflow-hidden">

            {/* Background glows — consistent with IndustryGap */}
            <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none -mr-40 -mt-20" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -ml-20 -mb-20" />

            {/* Subtle dot grid */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />

            <div
                ref={sectionRef}
                className="max-w-8xl mx-auto px-6 md:px-12 relative z-10"
            >
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">

                    {/* ── LEFT: IMAGE ── */}
                    <div
                        className="w-full lg:w-5/12 relative flex flex-col order-2 lg:order-1 transition-all duration-1000"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateX(0)" : "translateX(-24px)",
                        }}
                    >
                        {/* Image wrapper */}
                        <div className="relative h-full min-h-[420px] lg:min-h-0 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.015]">
                            <Image
                                src={HeroImage1}
                                alt="Accounts Bridge Team at work"
                                fill
                                className="object-cover"
                            />
                            {/* Branded overlay — consistent with IndustryGap */}
                            <div className="absolute inset-0 bg-primary/10" />

                            {/* Bottom fade */}
                            <div
                                className="absolute bottom-0 left-0 w-full h-28 pointer-events-none"
                                style={{
                                    background: "linear-gradient(to top, rgba(11,126,62,0.6), transparent)",
                                }}
                            />
                        </div>

                        {/* Stats pill — dark glass over image */}
                        <div
                            className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 px-5 py-4 rounded-xl z-10"
                            style={{
                                background: "rgba(11,126,62,0.82)",
                                backdropFilter: "blur(16px)",
                                border: "1px solid rgba(255,255,255,0.12)",
                            }}
                        >
                            <div className="text-center">
                                <p className="text-xl font-bold text-secondary leading-none">~100</p>
                                <p className="text-[11px] text-white/60 font-medium mt-1 tracking-wide">Companies / Manager</p>
                            </div>
                            <div className="w-px h-7 bg-white/15" />
                            <div className="text-center">
                                <p className="text-xl font-bold text-secondary leading-none">$1M+</p>
                                <p className="text-[11px] text-white/60 font-medium mt-1 tracking-wide">Revenue Threshold</p>
                            </div>
                            <div className="w-px h-7 bg-white/15" />
                            <div className="text-center">
                                <p className="text-xl font-bold text-secondary leading-none">25+</p>
                                <p className="text-[11px] text-white/60 font-medium mt-1 tracking-wide">Team Members</p>
                            </div>
                        </div>

                        {/* Decorative glow blob */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] pointer-events-none" />
                    </div>

                    {/* ── RIGHT: CONTENT ── */}
                    <div
                        className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2 transition-all duration-1000 delay-150"
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateX(0)" : "translateX(24px)",
                        }}
                    >
                        {/* Header */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-8 h-px bg-primary/30" />
                                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase opacity-70">
                                    Our Ideal Client
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-[50px] font-semibold tracking-tight text-slate-900 leading-[1.1] mb-5">
                                Who We{" "}
                                <span className="text-primary">
                                    Work With
                                </span>
                            </h2>

                            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
                                We&apos;re intentionally selective. While other firms juggle{" "}
                                <span className="text-primary font-semibold">500</span> individual
                                tax returns, each of our account managers works with approximately{" "}
                                <span className="text-primary font-semibold">100</span> companies.
                                That&apos;s not a limitation — it&apos;s how we maintain the depth
                                you need.
                            </p>
                        </div>

                        {/* Ideal Partner Card */}
                        <div className="rounded-2xl p-7 md:p-8 mb-5 bg-white border border-slate-100 shadow-sm">
                            <h3 className="text-xs font-bold tracking-[0.25em] uppercase text-primary/50 flex items-center gap-3 mb-6">
                                <span className="w-6 h-[2px] bg-secondary rounded-full inline-block" />
                                You are our ideal partner if:
                            </h3>

                            <ul className="space-y-4">
                                {idealPartnerItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-4 transition-all duration-500"
                                        style={{
                                            opacity: visible ? 1 : 0,
                                            transform: visible ? "translateX(0)" : "translateX(10px)",
                                            transitionDelay: `${300 + index * 100}ms`,
                                        }}
                                    >
                                        {/* Check icon — secondary bg, primary check */}
                                        <div className="mt-[2px] flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-primary stroke-[3px]" />
                                        </div>
                                        <span className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What We're Not */}
                        <div className="rounded-2xl p-6 mb-8 flex items-start gap-4 bg-red-50 border border-red-100">
                            <div className="mt-[2px] flex-shrink-0 w-7 h-7 rounded-full bg-red-100 border border-red-200 flex items-center justify-center">
                                <X className="w-3.5 h-3.5 text-red-400 stroke-[3px]" />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-red-400 uppercase tracking-[0.25em] mb-2">
                                    What we&apos;re not
                                </h3>
                                <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                                    If you&apos;re looking for the cheapest personal tax return,
                                    we&apos;ll happily recommend someone else. That&apos;s not our
                                    lane — and that focus is exactly why our clients grow faster.
                                </p>
                            </div>
                        </div>

                        {/* CTA — matches Hero button exactly */}
                        <div>
                            <Button
                                className="h-12 px-8 bg-secondary hover:bg-secondary/90 text-slate-900 rounded-md font-bold text-[15px] shadow-lg transition-all w-full md:w-auto"
                                asChild
                            >
                                <Link href="/contact-us">
                                    Book a Consultation
                                </Link>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
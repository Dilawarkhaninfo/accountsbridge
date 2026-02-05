"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Award, TrendingUp, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export function BusinessExpertCTA() {
    return (
        <section className="relative bg-secondary py-8 md:py-10 overflow-hidden border-y border-yellow-500/20">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

            {/* Floating Decorative Icons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Award Icon - Top Left */}
                <div className="absolute top-4 left-[8%] hidden md:block opacity-[0.1]">
                    <Award className="w-14 h-14 text-primary stroke-[1.5]" />
                </div>

                {/* TrendingUp Icon - Top Right */}
                <div className="absolute top-4 right-[8%] hidden md:block opacity-[0.1]">
                    <TrendingUp className="w-14 h-14 text-primary stroke-[1.5]" />
                </div>

                {/* Sparkles Icon - Bottom Left */}
                <div className="absolute bottom-4 left-[15%] hidden lg:block opacity-[0.08]">
                    <Sparkles className="w-10 h-10 text-primary stroke-[1.5]" />
                </div>

                {/* ShieldCheck Icon - Bottom Right */}
                <div className="absolute bottom-4 right-[15%] hidden lg:block opacity-[0.08]">
                    <ShieldCheck className="w-10 h-10 text-primary stroke-[1.5]" />
                </div>

                {/* Small Accent Dots */}
                <div className="absolute top-1/2 left-[5%] w-2.5 h-2.5 bg-primary/20 rounded-full blur-sm hidden md:block" />
                <div className="absolute top-1/3 right-[5%] w-2 h-2 bg-primary/15 rounded-full blur-sm hidden md:block" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 mx-auto">

                    {/* Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                        {/* Badge */}
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 w-fit">
                            <BadgeCheck className="w-4 h-4 text-primary" strokeWidth={2.5} />
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">
                                Verified Experts
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                            Looking for expert business &{" "}
                            <span className="text-primary">accounting support?</span>
                        </h2>

                        {/* Description */}
                        <p className="text-base md:text-lg text-slate-800/90 font-medium max-w-2xl">
                            Let our advisors help you move forward with confidence. Tailored solutions with clear results.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div>
                        <Button
                            asChild
                            className="btn-primary btn-md group"
                        >
                            <Link href="/contact-us" className="flex items-center gap-2">
                                Get a Quote
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
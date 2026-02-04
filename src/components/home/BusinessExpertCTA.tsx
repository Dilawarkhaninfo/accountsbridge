"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

export function BusinessExpertCTA() {
    return (
        <section className="bg-secondary py-4 md:py-4 border-y border-yellow-500/10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 max-w-7xl mx-auto">

                    {/* Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1 md:space-y-0.5">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                                Looking for expert business & accounting support?
                            </h2>
                        </div>
                        <p className="text-slate-800/90 font-medium text-sm md:text-base">
                            Let our advisors help you move forward with confidence.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                        asChild
                        className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-md shadow-sm h-11 px-6 text-base transition-all duration-200 shrink-0 min-w-[160px]"
                    >
                        <Link href="/contact-us" className="flex items-center gap-2">
                            Get a Quote
                            <BadgeCheck className="w-4 h-4 text-white/90" strokeWidth={2.5} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

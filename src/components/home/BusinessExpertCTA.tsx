"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BadgeCheck, ArrowRight } from "lucide-react";

export function BusinessExpertCTA() {
    return (
        <section className="relative bg-[#FAFAFA] py-12 border-y border-slate-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                            <BadgeCheck className="w-4 h-4 text-primary" strokeWidth={2.5} />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                Verified Experts
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                            Looking for expert business & <span className="text-primary">accounting support?</span>
                        </h2>

                        <p className="text-sm md:text-base text-slate-500 max-w-xl">
                            Our strategic advisors are ready to help you navigate your financial journey with clarity and confidence.
                        </p>
                    </div>

                    <Button asChild className="h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all group shrink-0">
                        <Link href="/contact-us" className="flex items-center gap-2">
                            Get a Quote
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
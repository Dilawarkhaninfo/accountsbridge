"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const cards = [
    {
        title: "Why Accounts Bridge?",
        description: "Comprehensive taxation and financial advisory services tailored to help your business reach its full growth potential.",
        link: "/about-us",
    },
    {
        title: "Our Vision",
        description: "To be the most trusted business partner, empowering organizations through professional and industry-leading consultancy.",
        link: "/about-us",
    },
    {
        title: "Our Mission",
        description: "Translating expertise into measurable growth by managing tax liabilities and providing strategic decision support.",
        link: "/about-us",
    },
];

export function VisionMissionSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="max-w-3xl mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                        <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">How We Define Success</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                        Our Core Purpose & <span className="text-primary italic">Strategic Vision</span>.
                    </h2>
                    <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
                        We transform financial complexity into strategic advantage, ensuring your business stays profitable and compliant in an ever-changing landscape.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                {card.description}
                            </p>
                            <Button variant="link" className="p-0 h-auto font-bold text-primary flex items-center gap-2 group/btn" asChild>
                                <Link href={card.link}>
                                    Read More
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

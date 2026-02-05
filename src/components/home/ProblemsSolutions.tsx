"use client";

import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
    {
        category: "Services",
        title: "Business-Focused Expertise",
        description: "Specialized accounting for SMEs with dedicated managers and growth-oriented advisory strategies.",
        image: "/images/card-strategy.png",
        link: "/services/business",
    },
    {
        category: "Compliance",
        title: "Compliance Without Stress",
        description: "Expert handling of ATO disputes, tax planning, and audit support to ensure you stay secure.",
        image: "/images/card-compliance.png",
        link: "/services/tax",
    },
    {
        category: "Growth",
        title: "Clear Growth Path",
        description: "Strategic cash flow forecasting, financial structuring, and business guidance for sustainable expansion.",
        image: "/images/card-growth.png",
        link: "/services/advisory",
    },
    {
        category: "Insights",
        title: "Future-Ready Vision",
        description: "Navigating tomorrow's financial landscape with cutting-edge technology and proactive insights.",
        image: "/images/card-future.png",
        link: "/services/technology",
    },
];

export function ProblemsSolutions() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100">
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Why Modern Businesses Choose Us</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            Solutions for the <span className="text-primary italic">Financial Frontier</span>.
                        </h2>
                        <p className="text-base text-slate-500 max-w-xl">
                            Strategic clarity for every stage of your business journey, from complex tax structures to future-ready growth.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="h-12 border-slate-200 text-slate-600 font-semibold rounded-lg shrink-0">
                        <Link href="/services">
                            View All Solutions
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((item, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-200/50">
                            <div className="relative h-48">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-2.5 py-1 rounded-md bg-white/95 text-[9px] font-black uppercase tracking-widest text-primary shadow-sm border border-slate-100">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 space-y-3">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="pt-4">
                                    <Link href={item.link} className="inline-flex items-center text-xs font-bold text-primary group/link">
                                        Explore
                                        <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

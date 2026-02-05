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
        <section className="py-24 bg-white">
            <div className="max-w-8xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Why Modern Businesses Choose Us</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                            Solutions for the <span className="text-primary">Financial Frontier</span>.
                        </h2>
                        <p className="text-base text-slate-500 max-w-xl">
                            Strategic clarity for every stage of your business journey, from complex tax structures to future-ready growth.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="h-12 border-slate-200 text-slate-600 font-semibold rounded-md shrink-0 hover:border-primary hover:text-primary transition-colors">
                        <Link href="/services">
                            View All Solutions
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((item, idx) => (
                        <div key={idx} className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">

                            {/* Image Section */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />

                                {/* Floating Category Badge (Optional, kept for context) */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-md bg-white/95 text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm backdrop-blur-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col flex-grow bg-primary p-6 lg:p-8 text-white relative">
                                <h3 className="text-lg md:text-xl font-bold mb-4 text-white group-hover:text-secondary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-white/80 leading-relaxed mb-8 line-clamp-4 flex-grow">
                                    {item.description}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-white transition-colors uppercase tracking-wider"
                                    >
                                        READ MORE
                                        <ArrowRight className="w-4 h-4" />
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

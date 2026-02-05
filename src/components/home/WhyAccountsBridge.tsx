"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Target, TrendingUp } from "lucide-react";

const features = [
    {
        title: "Why Accounts Bridge?",
        description: "We provide a complete range of taxation, accounting, bookkeeping, and financial advisory services designed to support businesses at every stage of growth.",
        link: "/company-overview",
        icon: ShieldCheck,
    },
    {
        title: "Our Vision",
        description: "To become trusted long-term business partners, helping organizations unlock their full growth potential through expert financial guidance and strategic insight.",
        link: "/our-approach",
        icon: TrendingUp,
    },
    {
        title: "Our Mission",
        description: "To translate accounting, taxation, and financial expertise into real business growth by managing tax obligations and providing timely, informed decision support.",
        link: "/our-approach",
        icon: Target,
    },
];

export function WhyAccountsBridge() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="container px-4 md:px-8 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group h-full"
                        >
                            <Link href={feature.link} className="block h-full">
                                <div className="h-full bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 relative overflow-hidden">

                                    {/* Top Accent Line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-500" />

                                    {/* Icon Header */}
                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-primary/5 transition-colors duration-300">
                                            <feature.icon className="h-8 w-8 text-primary/80 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                        {feature.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="mt-auto pt-6 border-t border-slate-50">
                                        <span className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary/70 group-hover:text-primary transition-all duration-300">
                                            Read More
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

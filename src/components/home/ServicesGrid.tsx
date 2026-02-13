"use client";

import React from "react";
import {
    Calculator,
    Briefcase,
    BarChart3,
    Receipt,
    FileBarChart2,
    ShieldCheck,
    LucideIcon
} from "lucide-react";

interface ServiceItem {
    icon: LucideIcon;
    title: string;
    tagline: string;
    description: string;
}

const services: ServiceItem[] = [
    {
        icon: Briefcase,
        title: "Business Advice",
        tagline: "Strategic planning for growth and expansion.",
        description: "Strategic business plans, budgeting, cash flow projections, and obtaining local and offshore finance to fuel your next phase of growth."
    },
    {
        icon: BarChart3,
        title: "Financial Structuring",
        tagline: "Smart structures for sustainable returns.",
        description: "Structuring business financials considering risks and potential returns to optimize your financial position and support long-term objectives."
    },
    {
        icon: Calculator,
        title: "Company Shares Valuation",
        tagline: "Accurate valuations for critical decisions.",
        description: "Valuation of company shares for prospectuses, ownership transitions, equity raises, and strategic planning purposes."
    },
    {
        icon: Receipt,
        title: "Accounting Services",
        tagline: "Complete financial management and compliance.",
        description: "Bookkeeping, payroll, internal audit, exploring grants, and cost accounting, everything you need to keep your finances accurate and audit-ready."
    },
    {
        icon: FileBarChart2,
        title: "Taxation Services",
        tagline: "Comprehensive tax planning and compliance.",
        description: "Income tax planning, GST, direct & indirect taxes, international taxes, and charities, covering all aspects of taxation for businesses and individuals."
    },
    {
        icon: ShieldCheck,
        title: "Audits & Settlements",
        tagline: "Expert support through audits and disputes.",
        description: "Audit dispute settlements, ensuring cleared accounts and compliance to avoid restrictions or allegations from tax authorities."
    }
];

export function ServicesGrid() {
    return (
        <section className="bg-[#F8F9FA] py-20 lg:py-28 relative overflow-hidden" id="services">

            {/* Top hairline — consistent separator */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* Background glows — consistent with WhoWeWorkWith */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none -mr-40 -mt-20" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -ml-20 -mb-20" />

            <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary/60 font-bold tracking-[0.25em] uppercase text-xs">
                        Comprehensive Solutions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                        Our Full-Stack{" "}
                        <span className="text-primary">Accounting Services</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        From day-to-day compliance to CFO-level strategy, we provide the
                        complete financial infrastructure growing businesses need.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col items-start h-full"
                        >
                            {/* Hover gradient overlay — primary tint */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-start h-full w-full">

                                {/* Icon — secondary bg default, primary bg on hover */}
                                <div className="w-14 h-14 bg-secondary/15 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                    <service.icon className="w-7 h-7 text-primary group-hover:text-white stroke-[1.5px] transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <div className="space-y-4 grow w-full">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Tagline — secondary left border accent */}
                                    <div className="border-l-4 border-secondary pl-4 py-1.5 bg-secondary/[0.06] rounded-r-lg w-full">
                                        <p className="text-slate-700 font-bold italic text-[14px] leading-snug">
                                            {service.tagline}
                                        </p>
                                    </div>

                                    <p className="text-slate-500 leading-relaxed text-[15px]">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
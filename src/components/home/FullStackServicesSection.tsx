"use client";

import React from "react";
import {
    Calculator,
    Briefcase,
    BarChart3,
    Receipt,
    FileBarChart2,
    ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
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

export function FullStackServicesSection() {
    return (
        <section className="bg-slate-50 py-20 lg:py-28 relative overflow-hidden">
            <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">
                        Comprehensive Solutions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                        Our Full-Stack <span className="text-primary">Accounting Services</span>
                    </h2>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                        From day-to-day compliance to CFO-level strategy, we provide the complete financial infrastructure growing businesses need.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-start h-full">
                                {/* Icon */}
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                                    <service.icon className="w-7 h-7 stroke-[1.5px]" />
                                </div>

                                {/* Content */}
                                <div className="space-y-4 flex-grow">
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-900 font-bold font-medium italic border-l-4 border-secondary pl-4 py-1 bg-slate-50/50 rounded-r-lg text-[15px]">
                                        {service.tagline}
                                    </p>

                                    <p className="text-slate-600 leading-relaxed text-[15px]">
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

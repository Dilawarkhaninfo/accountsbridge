"use client";

import React from "react";
import { LineChart, Building2, PieChart, Calculator, FileText, ShieldCheck, ArrowRight, Briefcase, Globe2, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Business Advice",
        description: "Strategic business plans, budgeting, cash flow projections, and obtaining finance to fuel your growth.",
        icon: LineChart,
        link: "/services/business",
    },
    {
        title: "Financial Structuring",
        description: "Scale your business with optimized structures that mitigate risks and maximize long-term returns.",
        icon: Building2,
        link: "/services/advisory",
    },
    {
        title: "Company Valuation",
        description: "Expert share valuation and prospectus structuring to provide absolute clarity for stakeholders.",
        icon: PieChart,
        link: "/services/advisory",
    },
    {
        title: "Accounting Services",
        description: "Comprehensive bookkeeping, payroll, and internal audits to keep your operations flawless.",
        icon: Calculator,
        link: "/services/business",
    },
    {
        title: "Taxation Services",
        description: "Proactive income tax planning, GST compliance, and international tax advisory for SMEs.",
        icon: FileText,
        link: "/services/compliance",
    },
    {
        title: "Audits & Settlements",
        description: "Navigating complex ATO audits and dispute settlements with precision and confidence.",
        icon: ShieldCheck,
        link: "/services/compliance",
    },
    {
        title: "Global Consulting",
        description: "Expand boundaries with international strategy and cross-border financial compliance expertise.",
        icon: Globe2,
        link: "/services/advisory",
    },
    {
        title: "Corporate Strategy",
        description: "Future-proof your business with sustainable planning and robust corporate governance.",
        icon: Briefcase,
        link: "/services/advisory",
    },
];

export function ServicesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Expertise That Matters</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                            Services that make the <span className="text-primary">Difference</span>.
                        </h2>
                        <p className="text-base text-slate-500 max-w-xl">
                            Expert-led accounting and advisory services designed to structure your financials and fuel sustainable expansion.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="h-12 border-slate-200 text-slate-600 font-semibold rounded-md shrink-0">
                        <Link href="/services">
                            View All Services
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 rounded-2xl bg-white border border-slate-100 transition-all hover:bg-slate-50 hover:border-primary/20">
                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link href={service.link} className="inline-flex items-center text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">
                                Learn More
                                <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

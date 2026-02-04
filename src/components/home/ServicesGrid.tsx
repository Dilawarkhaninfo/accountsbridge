"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    LineChart,
    Building2,
    PieChart,
    Calculator,
    FileText,
    ShieldCheck,
    ArrowRight,
    Briefcase,
    Globe2,
    Layers,
    TrendingUp,
    Zap
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Business Advice",
        description: "Strategic business plans, budgeting, cash flow projections, and obtaining finance to fuel your growth.",
        icon: LineChart,
        link: "/services/business",
        accent: "bg-primary/5"
    },
    {
        title: "Financial Structuring",
        description: "Scale your business with optimized structures that mitigate risks and maximize long-term returns.",
        icon: Building2,
        link: "/services/advisory",
        accent: "bg-secondary/10"
    },
    {
        title: "Company Valuation",
        description: "Expert share valuation and prospectus structuring to provide absolute clarity for stakeholders.",
        icon: PieChart,
        link: "/services/advisory",
        accent: "bg-primary/5"
    },
    {
        title: "Accounting Services",
        description: "Comprehensive bookkeeping, payroll, and internal audits to keep your operations flawless.",
        icon: Calculator,
        link: "/services/business",
        accent: "bg-primary/5"
    },
    {
        title: "Taxation Services",
        description: "Proactive income tax planning, GST compliance, and international tax advisory for SMEs.",
        icon: FileText,
        link: "/services/compliance",
        accent: "bg-secondary/10"
    },
    {
        title: "Audits & Settlements",
        description: "Navigating complex ATO audits and dispute settlements with precision and confidence.",
        icon: ShieldCheck,
        link: "/services/compliance",
        accent: "bg-primary/5"
    },
    {
        title: "Global Consulting",
        description: "Expand boundaries with international strategy and cross-border financial compliance expertise.",
        icon: Globe2,
        link: "/services/advisory",
        accent: "bg-primary/5"
    },
    {
        title: "Corporate Strategy",
        description: "Future-proof your business with sustainable planning and robust corporate governance.",
        icon: Briefcase,
        link: "/services/advisory",
        accent: "bg-secondary/10"
    },
];

export function ServicesGrid() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* --- Premium Background Elements --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 max-w-7xl">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                        >
                            <Zap size={14} className="text-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Strategic Solutions</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#1A202C] tracking-tight leading-tight">
                            Services that make <br /> the <span className="text-primary italic">difference.</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            asChild
                            variant="outline"
                            className="group h-14 px-8 rounded-xl border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all shadow-sm"
                        >
                            <Link href="/services">
                                View Methodology <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-white p-8 lg:p-10 flex flex-col h-full transition-all duration-500 hover:bg-slate-50/50"
                        >
                            {/* Hover Overlay Accent */}
                            <div className={cn(
                                "absolute top-0 left-0 w-full h-1 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100",
                                index % 3 === 0 ? "bg-primary" : "bg-secondary"
                            )} />

                            {/* Icon */}
                            <div className="relative mb-8">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10",
                                    service.accent
                                )}>
                                    <service.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-12" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow space-y-4">
                                <h3 className="text-xl font-bold text-[#1A202C] group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>

                            {/* Link */}
                            <div className="mt-10">
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#1A202C] hover:text-primary transition-all group/link"
                                >
                                    Explore Service
                                    <span className="ml-2 w-8 h-px bg-slate-200 group-hover/link:w-12 group-hover/link:bg-primary transition-all" />
                                    <ArrowRight className="ml-2 w-3.5 h-3.5 opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-primary" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Note */}
                <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Trusted by 250+ Melbourne Businesses across all industries
                    </p>
                    <div className="flex gap-8">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Taxation</span>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Advisory</span>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Audit</span>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Growth</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

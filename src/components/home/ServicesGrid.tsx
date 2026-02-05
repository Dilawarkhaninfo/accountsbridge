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
    Zap,
    Star
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
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                {/* Section Header - Unified Style */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
                    <div className="flex flex-col items-start text-left space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/50 shadow-sm mb-2"
                        >
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Expertise That Matters</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[45px] font-bold text-slate-900 tracking-tight leading-[1.05]"
                        >
                            Services that make <br className="hidden md:block" /> the <span className="text-primary italic font-semibold">Difference.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 leading-relaxed"
                        >
                            Expert-led accounting and advisory services designed to structure your financials, optimize cash flow, and fuel sustainable expansion.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="hidden lg:flex"
                    >
                        <Button
                            asChild
                            className="btn-primary btn-sm group"
                        >
                            <Link href="/services" className="flex items-center gap-2">
                                View All Services
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Services Grid - Refined & Compact */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200/60 rounded-[2rem] overflow-hidden bg-white shadow-2xl shadow-slate-200/50">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={cn(
                                "group relative p-8 flex flex-col h-full transition-all duration-500 hover:bg-slate-50",
                                // Adding borders between items
                                index % 4 !== 3 && "lg:border-r border-slate-100",
                                index < 4 && "lg:border-b border-slate-100",
                                (index % 2 === 0) && "md:border-r lg:border-r-0 border-slate-100",
                                index < 6 && "md:border-b border-slate-100"
                            )}
                        >
                            {/* Brand Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            {/* Icon Area */}
                            <div className="mb-6">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                                    service.accent
                                )}>
                                    <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-[14px] text-slate-500 leading-relaxed opacity-90">
                                    {service.description}
                                </p>
                            </div>

                            {/* Minimal Link */}
                            <div className="mt-8 pt-4 border-t border-slate-100/50">
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-all group/link"
                                >
                                    Details
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Simplified Bottom Note */}
                <div className="mt-12 text-center opacity-50">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                        Comprehensive Support for Melbourne SMEs
                    </p>
                </div>
            </div>
        </section>
    );
}

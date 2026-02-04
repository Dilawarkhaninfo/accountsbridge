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
            {/* --- Premium Background Elements (Harmonized with Hero) --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 40, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[100px]"
                />
            </div>

            {/* Subtle Noise Texture (Matching Hero) */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 pb-10 border-b border-slate-100/80">
                    <div className="max-w-2xl space-y-6">
                        {/* Tagline Badge (Matching Hero Style) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/50"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                Strategic Solutions
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-slate-900 tracking-tight leading-[1.05]">
                            Services that make <br /> the <span className="text-primary italic font-semibold">difference.</span>
                        </h2>

                        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl">
                            Expert-led accounting and advisory services designed to structure your financials, optimize cash flow, and fuel sustainable expansion.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="shrink-0"
                    >
                        <Button
                            asChild
                            variant="outline"
                            className="btn-lg btn-outline"
                        >
                            <Link href="/services">
                                Our Methodology <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>

                {/* Services Grid (Premium Refined Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200/60 border border-slate-200/60 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/40">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-white p-10 lg:p-14 flex flex-col h-full transition-all duration-500 hover:bg-slate-50/80"
                        >
                            {/* Hover Overlay Accent (Matching Hero) */}
                            <div className={cn(
                                "absolute top-0 left-0 w-full h-1.5 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100",
                                index % 2 === 0 ? "bg-primary" : "bg-primary/80"
                            )} />

                            {/* Icon (Expert Styled) */}
                            <div className="relative mb-12">
                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/10",
                                    service.accent
                                )}>
                                    <service.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:rotate-[15deg]" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow space-y-5">
                                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-[17px] text-slate-500 leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>

                            {/* Link (Premium Minimalist) */}
                            <div className="mt-14 pt-8 border-t border-slate-50">
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-sm font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-primary transition-all group/link"
                                >
                                    Explore Service
                                    <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover/link:translate-x-2 text-primary" strokeWidth={2.5} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Trust Note */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
                        Trusted by 250+ Melbourne Businesses across all industries
                    </p>
                    <div className="hidden md:flex gap-8">
                        {["Taxation", "Advisory", "Audit", "Growth"].map((tag) => (
                            <span key={tag} className="text-xs font-bold text-slate-400 uppercase tracking-widest">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

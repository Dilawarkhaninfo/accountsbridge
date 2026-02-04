"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Briefcase,
    TrendingUp,
    Building2,
    Calculator,
    Receipt,
    ClipboardCheck,
    ArrowRight,
    CheckCircle2,
    PieChart,
    Coins,
    FileText,
    Globe,
    Laptop,
    Sparkles,
    Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    link: string;
    features: string[];
}

const services: Service[] = [
    {
        id: 1,
        title: "Business Advice",
        description: "Strategic planning and budgeting to drive sustainable business growth and secure local financing.",
        icon: Briefcase,
        link: "/services/business-advice",
        features: ["Strategic Planning", "Cash Flow", "Budgeting"]
    },
    {
        id: 2,
        title: "Financial Structuring",
        description: "Optimizing your financial foundation to mitigate risks and maximize long-term investment returns.",
        icon: TrendingUp,
        link: "/services/financial-structuring",
        features: ["Risk Analysis", "ROI Forecasting", "Asset Protection"]
    },
    {
        id: 3,
        title: "Company Shares Valuation",
        description: "Precise and defensible valuation services to support fundraising, exits, and corporate restructuring.",
        icon: Building2,
        link: "/services/company-shares-valuation",
        features: ["Fundraising", "Exits", "Restructuring"]
    },
    {
        id: 4,
        title: "Accounting Services",
        description: "Comprehensive bookkeeping, payroll, and internal audits to keep your clear, compliant, and optimized.",
        icon: Calculator,
        link: "/services/accounting-services",
        features: ["Bookkeeping", "Payroll", "Audits"]
    },
    {
        id: 5,
        title: "Taxation Services",
        description: "Proactive tax planning and compliance for income tax, GST, and international tax obligations.",
        icon: Receipt,
        link: "/services/taxation-services",
        features: ["Income Tax", "GST", "International"]
    },
    {
        id: 6,
        title: "Audits & Settlements",
        description: "Expert audit support and dispute settlement to ensure your business remains penalty-free.",
        icon: ClipboardCheck,
        link: "/services/audits-settlements",
        features: ["Compliance", "Dispute Resolution", "Clearance"]
    }
];

// Floating decorative icons configuration
const floatingIcons = [
    { Icon: PieChart, position: "top-[10%] left-[5%]", delay: 0, size: "w-16 h-16" },
    { Icon: Coins, position: "top-[25%] right-[8%]", delay: 0.2, size: "w-14 h-14" },
    { Icon: FileText, position: "bottom-[15%] left-[8%]", delay: 0.4, size: "w-12 h-12" },
    { Icon: Globe, position: "top-[50%] left-[3%]", delay: 0.3, size: "w-10 h-10" },
    { Icon: Laptop, position: "bottom-[25%] right-[10%]", delay: 0.5, size: "w-14 h-14" },
    { Icon: Target, position: "top-[40%] right-[5%]", delay: 0.6, size: "w-12 h-12" },
    { Icon: Sparkles, position: "bottom-[40%] left-[12%]", delay: 0.7, size: "w-10 h-10" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export function ServicesSection() {
    return (
        <section className="relative bg-white py-24 lg:py-32 overflow-hidden">

            {/* --- Premium Background Elements (Matching Hero) --- */}

            {/* Diffused Mesh Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[0%] left-[0%] w-[70%] h-[70%] bg-slate-50/80 rounded-full blur-[100px]" />
                <div className="absolute bottom-[0%] right-[0%] w-[60%] h-[60%] bg-slate-50/80 rounded-full blur-[100px]" />

                {/* Accent Blobs */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"
                />
            </div>

            {/* Floating Decorative Icons */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
                {floatingIcons.map(({ Icon, position, delay, size }, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                        whileInView={{ opacity: 0.05, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay, ease: "easeOut" }}
                        className={cn("absolute", position)}
                    >
                        <Icon className={cn(size, "text-primary stroke-[1.5]")} />
                    </motion.div>
                ))}
            </div>

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none z-[1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 md:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 mb-6">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                            Our Expertise
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                        Comprehensive <span className="text-primary italic">Financial Solutions</span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        We don't just crunch numbers. We provide the strategic financial architecture your business needs to scale securely and efficiently.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            className="group"
                        >
                            <Link href={service.link} className="block h-full">
                                <div className="relative h-full bg-white rounded-2xl p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 group-hover:border-primary/20 overflow-hidden flex flex-col">

                                    {/* Icon Container */}
                                    <div className="relative mb-8 w-fit">
                                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                                        <div className="relative w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                                            <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-4">
                                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors duration-200">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-500 leading-relaxed text-base">
                                            {service.description}
                                        </p>

                                        {/* Mini Features List */}
                                        <ul className="pt-4 space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500/50 group-hover:text-green-500" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Action Row */}
                                    <div className="pt-8 mt-4 flex items-center justify-between border-t border-slate-50 group-hover:border-slate-100 transition-colors">
                                        <span className="text-sm font-bold text-slate-400 group-hover:text-primary transition-colors uppercase tracking-wider">
                                            Explore
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-slate-900 transition-all duration-300 transform group-hover:translate-x-1">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Decoration Line */}
                                    <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA - Matching Hero Button Styles */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center justify-center mt-20 text-center space-y-8"
                >
                    <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-slate-900">
                            Not sure which service fits your needs?
                        </h3>
                        <Button
                            asChild
                            size="lg"
                            className="h-16 px-10 text-lg font-bold rounded-xl bg-primary hover:bg-[#075A2C] text-white shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] group"
                        >
                            <Link href="/contact-us">
                                <span className="flex items-center gap-3">
                                    Book a Free Discovery Call
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
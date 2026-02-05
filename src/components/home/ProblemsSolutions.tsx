"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calculator, BarChart3, PieChart, FileText, Coins, TrendingUp, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            {/* --- Decorative Elements --- */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
                    <div className="flex flex-col items-start text-left space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/50 shadow-sm mb-2"
                        >
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Why Modern Businesses Choose Us</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[45px] font-bold text-slate-900 tracking-tight leading-[1.05]"
                        >
                            Solutions for the <br className="hidden md:block" />
                            <span className="text-primary italic font-semibold">Financial Frontier.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 leading-relaxed"
                        >
                            From complex tax structures to strategic growth advisory, we provide the clarity and confidence your business deserves.
                        </motion.p>
                    </div>

                    {/* CTA Area on the Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="hidden lg:flex flex-col items-end justify-end pb-4"
                    >
                        <Button
                            asChild
                            className="btn-primary btn-sm group"
                        >
                            <Link href="/services" className="flex items-center gap-2">
                                View All Solutions
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        {/* Minimalistic background decoration for CTA */}
                        <div className="relative mt-3 mr-3 opacity-20 pointer-events-none">
                            <TrendingUp size={32} className="text-primary animate-pulse" />
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200/60 rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200/50">
                    {solutions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={cn(
                                "group relative flex flex-col h-full bg-white transition-all duration-500",
                                idx !== solutions.length - 1 ? "border-b md:border-b-0 md:border-r border-slate-100" : ""
                            )}
                        >
                            {/* Image Container with Hover Effect */}
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Sophisticated Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Category Badge Overlay */}
                                <div className="absolute top-5 left-5">
                                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-primary shadow-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="flex flex-col flex-grow p-6 relative group-hover:bg-slate-50 transition-colors duration-500">
                                {/* Brand Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                                    {item.title}
                                </h3>

                                <p className="text-[14px] text-slate-500 leading-relaxed mb-4 flex-grow opacity-90">
                                    {item.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-slate-100/50 flex items-center justify-between">
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-slate-400 group-hover:text-primary transition-all group/link"
                                    >
                                        Explore Solution
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                    </Link>

                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:rotate-45">
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

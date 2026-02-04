"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            {/* --- Decorative Elements --- */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Why Modern Businesses Choose Us</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight"
                    >
                        Solutions for the <span className="text-primary italic">Financial Frontier.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 max-w-2xl mx-auto"
                    >
                        From complex tax structures to strategic growth advisory, we provide the clarity and confidence your business deserves.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {solutions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                        >
                            {/* Image Container with Hover Effect */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />

                                {/* Category Badge Overlay */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-tighter text-primary shadow-sm">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="flex flex-col flex-grow p-8 relative">
                                {/* Brand Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-[15px] text-slate-500 leading-relaxed mb-8 flex-grow">
                                    {item.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <Link
                                        href={item.link}
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-primary transition-all group/link"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                    </Link>

                                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA for Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Button variant="link" className="text-slate-400 font-bold uppercase tracking-widest hover:text-primary" asChild>
                        <Link href="/services">View All Solutions <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const cards = [
    {
        title: "Why Accounts Bridge?",
        description: "We offer a wide range of services revolving around taxation, management accounting, bookkeeping, and financial advisory — helping your business grow better.",
        link: "/about-us",
        image: "/images/home/why_accounts_bg.png"
    },
    {
        title: "Our Vision",
        description: "To be trusted business partners of businesses and help them reach their full potential of growth by engaging professional and industry-leading consultants.",
        link: "/about-us",
        image: "/images/home/vision_bg.png"
    },
    {
        title: "Our Mission",
        description: "Translating our knowledge and expertise into growth and profitability by managing tax liabilities and providing timely decision support.",
        link: "/about-us",
        image: "/images/home/mission_bg.png"
    },
];

export function VisionMissionSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container relative z-10 mx-auto px-6 md:px-12">

                {/* Section Header - Unified Style */}
                <div className="flex flex-col items-start text-left mb-16 space-y-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/50 shadow-sm mb-2"
                    >
                        <Star className="w-3.5 h-3.5 text-secondary fill-secondary animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">How We Define Success</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-[45px] font-bold text-slate-900 tracking-tight leading-[1.05]"
                    >
                        Our Core Purpose & <br className="hidden md:block" />
                        <span className="text-primary italic font-semibold">Strategic Vision.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 leading-relaxed"
                    >
                        We translate our knowledge and expertise into measurable growth and profitability by managing complex tax structures and providing timely decision support.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative h-[450px] w-full overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                        >
                            {/* Background Image */}
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={idx === 0}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/70 transition-colors duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white/95 transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-slate-200 mb-6 leading-relaxed text-sm md:text-base font-medium opacity-90">
                                    {card.description}
                                </p>
                                <Button
                                    variant="link"
                                    className="w-fit p-0 h-auto font-bold text-white hover:text-secondary hover:no-underline transition-all group/btn"
                                    asChild
                                >
                                    <Link href={card.link} className="flex items-center gap-2">
                                        Read More
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function FollowUpSection() {
    return (
        <section className="py-20 bg-slate-50 border-t border-b border-slate-100/50">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-3xl font-bold text-slate-800 mb-6">
                        Expertise That Drives Real Growth
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        We don't just balance the books; we provide the strategic insights you need to make confident decisions.
                        From comprehensive tax planning to long-term business advisory, we are here to support your journey.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

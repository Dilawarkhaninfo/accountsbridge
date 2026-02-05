"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Adam Seyfried",
        role: "Sales & Marketing",
        company: "Alien Ltd.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&h=400&auto=format&fit=crop",
        content: "Accounts Bridge is undoubtedly a one stop solution for all the taxation needs for our company. Working with professionals have been a pleasant experience for us."
    },
    {
        id: 2,
        name: "Debbie Kübel-Sorger",
        role: "Chairman",
        company: "Kreutz Airlines",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop",
        content: "The demands for financial institutions have changed a bit. Obfuscation is no longer accepted, which is why this professional accounting service is so perfect."
    },
    {
        id: 3,
        name: "Marcus Thorne",
        role: "Managing Director",
        company: "Nexus Solutions",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&auto=format&fit=crop",
        content: "Their attention to detail and proactive approach to tax planning has saved our firm significant overhead. A truly professional team."
    },
    {
        id: 4,
        name: "Sarah Jenkins",
        role: "CFO",
        company: "Starlight Media",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&auto=format&fit=crop",
        content: "Navigating the complexities of international tax was daunting until we found Accounts Bridge. They simplified everything for us."
    }
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Determine which testimonials to show based on screen size
    const itemsToShow = isMobile ? 1 : 2;
    const visibleTestimonials = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
    }

    return (
        <section className="relative py-28 bg-[#fafafa] overflow-hidden">
            {/* --- Premium Background Elements --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 18, repeat: Infinity }}
                    className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                {/* Section Header - Unified Left-Aligned Style */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 px-4 md:px-0">
                    <div className="flex flex-col items-start text-left space-y-6 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/50 shadow-sm mb-2"
                        >
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Trust Indicators</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[45px] font-bold text-slate-900 tracking-tight leading-[1.05]"
                        >
                            What <br className="hidden md:block" />
                            <span className="text-primary italic font-semibold">Industry Leaders</span> Say.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 leading-relaxed"
                        >
                            We measure our success by the growth and confidence of the businesses we serve across the globe.
                        </motion.p>
                    </div>

                    <div className="flex gap-4 mb-4 lg:mb-2">
                        <button
                            onClick={prev}
                            className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm group"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                        </button>
                        <button
                            onClick={next}
                            className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm group"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </div>

                {/* Testimonials Slider */}
                <div className="relative max-w-7xl mx-auto min-h-[480px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        >
                            {visibleTestimonials.map((testimonial) => (
                                <motion.div
                                    key={testimonial.id}
                                    className="group relative flex flex-col bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_15px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                                >
                                    {/* Quote Icon Accent */}
                                    <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Quote size={60} className="text-primary fill-current" />
                                    </div>

                                    {/* Author Info - Top Header Style */}
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-50 shadow-sm">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <h3 className="text-[17px] font-black text-slate-900 leading-none tracking-tight">
                                                    {testimonial.name}
                                                </h3>
                                                <div className="w-3.5 h-3.5 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <CheckCircle2 size={10} className="text-primary" />
                                                </div>
                                            </div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1.5">
                                                {testimonial.role} <span className="mx-1.5 text-slate-200">/</span> {testimonial.company}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Testimonial Content */}
                                    <div className="flex-1">
                                        <p className="text-[18px] md:text-xl text-slate-700 leading-relaxed font-medium italic">
                                            "{testimonial.content}"
                                        </p>
                                    </div>

                                    {/* Ratings & Service Date Footer */}
                                    <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className="text-secondary fill-secondary" />
                                            ))}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">
                                            Verified Client
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* International Trust Footer - Simplified & Elegant */}
                <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-between items-center gap-8 opacity-40">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                        Global Finance Network • Certified Partners • Melbourne SME Alliance
                    </p>
                    <div className="flex gap-8">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}

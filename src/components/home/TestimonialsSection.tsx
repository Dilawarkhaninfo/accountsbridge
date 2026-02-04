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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"
                />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                            <Star size={14} className="text-secondary fill-secondary" />
                            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-500">Global Trust Indicators</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                            What <span className="text-primary italic">Industry Leaders</span> Say.
                        </h2>

                        <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                            We measure our success by the growth and confidence of the businesses we serve across the globe.
                        </p>
                    </motion.div>
                </div>

                {/* Testimonials Slider */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Navigation Buttons - More Premium Styling */}
                    <div className="absolute -top-12 right-4 flex gap-3 z-20">
                        <button
                            onClick={prev}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                        </button>
                        <button
                            onClick={next}
                            className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm group"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </div>

                    <div className="overflow-visible min-h-[400px] pt-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
                            >
                                {visibleTestimonials.map((testimonial) => (
                                    <motion.div
                                        key={testimonial.id}
                                        whileHover={{ y: -5 }}
                                        className="group relative flex flex-col bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 transition-all duration-500"
                                    >
                                        {/* Quote Icon Background */}
                                        <div className="absolute top-8 right-10 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                                            <Quote size={80} className="text-primary fill-current" />
                                        </div>

                                        {/* Trust Stars */}
                                        <div className="flex gap-1 mb-8">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} className="text-secondary fill-secondary" />
                                            ))}
                                        </div>

                                        {/* Testimonial Content */}
                                        <div className="flex-1">
                                            <p className="text-xl md:text-[22px] text-slate-800 leading-[1.6] font-medium italic mb-10">
                                                "{testimonial.content}"
                                            </p>
                                        </div>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-5 pt-8 border-t border-slate-50">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 shadow-md">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-lg font-bold text-slate-900 leading-none">
                                                        {testimonial.name}
                                                    </h3>
                                                    <CheckCircle2 size={14} className="text-primary" />
                                                </div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1.5">
                                                    {testimonial.role} <span className="mx-2 text-slate-200">|</span> {testimonial.company}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* International Trust Footer */}
                    <div className="mt-20 flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-black tracking-tighter uppercase italic text-slate-900">Global Finance Network</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-black tracking-tighter uppercase italic text-slate-900">Certified Partners</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-black tracking-tighter uppercase italic text-slate-900">Melbourne SME Alliance</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

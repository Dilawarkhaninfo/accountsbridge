"use client";

import React, { useState, useEffect } from "react";
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
    const itemsToShow = isMobile ? 1 : 3;
    const visibleTestimonials = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
    }

    return (
        <section className="relative pt-24 pb-12 bg-[#fafafa] overflow-hidden">
            {/* --- Premium Background Elements --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-20" />
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                {/* Section Header - Unified Left-Aligned Style */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                    <div className="flex flex-col items-start text-left space-y-5 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/50 shadow-sm">
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Trust Indicators</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-tight">
                            What <span className="text-primary font-semibold">Industry Leaders</span> Say.
                        </h2>

                        <p className="text-lg text-slate-500 leading-relaxed md:max-w-xl">
                            We measure our success by the growth and confidence of the businesses we serve across the globe.
                        </p>
                    </div>

                    <div className="flex gap-2.5 mb-2">
                        <button
                            onClick={prev}
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm group"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
                        </button>
                        <button
                            onClick={next}
                            className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm group"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </div>

                {/* Testimonials Slider */}
                <div className="relative max-w-full mx-auto min-h-[420px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleTestimonials.map((testimonial) => (
                            <div
                                key={`${currentIndex}-${testimonial.id}`}
                                className="group relative flex flex-col bg-white p-7 md:p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] border border-slate-100/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                            >
                                {/* Quote Icon Accent */}
                                <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Quote size={40} className="text-primary fill-current" />
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-slate-50 shadow-sm">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <h3 className="text-[15px] font-black text-slate-900 leading-none tracking-tight">
                                                {testimonial.name}
                                            </h3>
                                            <CheckCircle2 size={10} className="text-primary" />
                                        </div>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1.5">
                                            {testimonial.role} <span className="mx-1 text-slate-200">/</span> {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                {/* Testimonial Content */}
                                <div className="flex-1">
                                    <p className="text-[16px] text-slate-700 leading-relaxed font-medium">
                                        "{testimonial.content}"
                                    </p>
                                </div>

                                {/* Ratings Footer */}
                                <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={12} className="text-secondary fill-secondary" />
                                        ))}
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">
                                        Verified Client
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* International Trust Footer */}
                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap justify-between items-center gap-6 opacity-40">
                    <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400">
                        Global Finance Network • Certified Partners • Melbourne SME Alliance
                    </p>
                    <div className="flex gap-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                </div>
            </div>
        </section>
    );
}

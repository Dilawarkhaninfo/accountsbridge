"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
        <section className="relative py-24 bg-white overflow-hidden">
            {/* --- Premium Background Elements --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, -20, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[80px]"
                />
            </div>

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none z-[1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container relative z-10 mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                            testimonials
                        </h2>
                        <div className="h-1.5 w-12 bg-secondary mx-auto mt-3 rounded-full" />
                    </motion.div>
                </div>

                {/* Testimonials Slider */}
                <div className="relative max-w-7xl mx-auto px-4 md:px-16">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-sm border border-slate-100 bg-white text-slate-300 hover:text-primary hover:border-primary/30 transition-all shadow-sm group"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-sm border border-slate-100 bg-white text-slate-300 hover:text-primary hover:border-primary/30 transition-all shadow-sm group"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
                    </button>

                    {/* Testimonial Cards Container */}
                    <div className="overflow-visible min-h-[350px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
                            >
                                {visibleTestimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="flex flex-col md:flex-row items-center md:items-start gap-8 group">
                                        {/* Image wrapper */}
                                        <div className="relative w-full aspect-square max-w-[240px] md:w-[220px] md:h-[220px] shrink-0 rounded-sm overflow-hidden shadow-xl border-4 border-white">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Content wrapper */}
                                        <div className="flex-1 flex flex-col justify-start py-2">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-bold text-primary leading-tight">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                                                    {testimonial.role}
                                                </p>
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                                                    {testimonial.company}
                                                </p>
                                            </div>

                                            <div className="relative">
                                                <p className="text-[15px] text-slate-500 leading-relaxed font-medium">
                                                    {testimonial.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-12">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={cn(
                                    "h-1.5 transition-all duration-300 rounded-full",
                                    currentIndex === i ? "w-8 bg-primary" : "w-1.5 bg-slate-200"
                                )}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

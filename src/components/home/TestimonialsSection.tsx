"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
    },
    {
        id: 5,
        name: "Michael Chen",
        role: "Operations Director",
        company: "Vanguard Logistics",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop",
        content: "The scalability advice we received from Accounts Bridge was pivotal in our recent expansion. Their strategic insight is unmatched."
    },
    {
        id: 6,
        name: "Elena Rodriguez",
        role: "Founder",
        company: "EcoSphere Tech",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop",
        content: "As a startup founder, I needed more than just an accountant; I needed a partner. They helped us navigate our first audit with absolute ease."
    }
];

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const itemsToShow = isMobile ? 1 : 3;
    const visibleTestimonials = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
    }

    return (
        <section className="py-20 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200">
                            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Global Trust</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            What <span className="text-primary italic">Industry Leaders</span> Say.
                        </h2>
                    </div>

                    <div className="flex gap-2">
                        <button onClick={prev} className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-primary hover:border-primary transition-all">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={next} className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-primary hover:border-primary transition-all">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[300px]">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            initial={{ opacity: 0, x: direction * 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -direction * 50 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {visibleTestimonials.map((testimonial) => (
                                <div key={testimonial.id} className="p-8 bg-white rounded-2xl border border-slate-100 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden grayscale opacity-70">
                                            <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <h4 className="text-sm font-bold text-slate-900">{testimonial.name}</h4>
                                                <CheckCircle2 size={10} className="text-primary" />
                                            </div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                {testimonial.role} <span className="mx-1 text-slate-200">/</span> {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed italic">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="flex gap-1 pt-2 border-t border-slate-50">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={10} className="text-secondary fill-secondary" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={cn(
                                "h-1.5 rounded-full transition-all duration-300",
                                i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-slate-200"
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

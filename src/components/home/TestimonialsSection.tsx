"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";

import ChristianImage from "../../../public/Christian.jpg";
import CintiaImage from "../../../public/Cintia.jpg";
import DebbieImage from "../../../public/Debbie.jpg";
import DonaldImage from "../../../public/Donald.jpg";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: StaticImageData;
    content: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Christian Marcil",
        role: "Director",
        company: "Harmony Corporation",
        image: ChristianImage,
        content: "Accounts Bridge transformed our financial operations. Their strategic insights and seamless management of our tax obligations have allowed us to focus entirely on growth."
    },
    {
        id: 2,
        name: "Cintia Le Corre",
        role: "Partner & Managing Director",
        company: "Grandier Co.",
        image: CintiaImage,
        content: "Navigating complex compliance issues was a nightmare until we partnered with Accounts Bridge. Their expertise in regulatory frameworks is unmatched and gives us total peace of mind."
    },
    {
        id: 3,
        name: "Debbie Kübel-Sorger",
        role: "CEO",
        company: "Kreutz Logistics",
        image: DebbieImage,
        content: "The advisory team at Accounts Bridge goes beyond just numbers. They provided a clear roadmap for our financial restructuring that significantly improved our cash flow within months."
    },
    {
        id: 4,
        name: "Donald Simpson",
        role: "Chief Financial Officer",
        company: "Jamaica International",
        image: DonaldImage,
        content: "Accounts Bridge is undoubtedly a one-stop solution for all our taxation and bookkeeping needs. Their professionalism and use of modern tools like Xero make everything efficient."
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

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const itemsToShow = isMobile ? 1 : 2;
    const visibleTestimonials = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
    }

    return (
        <section className="bg-[#F8F9FA] py-20 lg:py-28 relative overflow-hidden">

            {/* Background glows — consistent with WhoWeWorkWith / ServicesGrid */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] -ml-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[80px] -mr-20 -mb-20 pointer-events-none" />

            <div className="max-w-8xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-primary/60 font-bold tracking-[0.25em] uppercase text-xs">
                        Client Stories
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                        What Clients Say About{" "}
                        <span className="text-primary">Making the Switch</span>
                    </h2>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">
                        Real stories from business leaders who moved to Accounts Bridge and never looked back.
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {visibleTestimonials.map((testimonial, idx) => (
                            <div
                                key={`${testimonial.id}-${idx}`}
                                className="group bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/10 relative overflow-hidden flex flex-col h-full transition-all duration-300"
                            >
                                {/* Quote icon — secondary color, subtle */}
                                <div className="absolute top-8 right-8 text-secondary/20 group-hover:text-secondary/30 transition-colors duration-300">
                                    <Quote className="w-16 h-16 fill-current" />
                                </div>

                                {/* Top accent bar on hover */}
                                <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1 bg-secondary rounded-t-[2.5rem] transition-all duration-500" />

                                <div className="relative z-10 flex flex-col h-full">

                                    {/* Quote text */}
                                    <div className="grow mb-8">
                                        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed italic">
                                            &ldquo;{testimonial.content}&rdquo;
                                        </p>
                                    </div>

                                    {/* Author */}
                                    <div className="flex items-center gap-5 pt-6 border-t border-slate-100">
                                        {/* Avatar with secondary ring */}
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-secondary/40 ring-offset-2">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-slate-900">
                                                {testimonial.name}
                                            </h4>
                                            <div className="text-sm font-semibold text-primary">
                                                {testimonial.role},{" "}
                                                <span className="text-slate-400 font-medium">
                                                    {testimonial.company}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-12">
                        <Button
                            onClick={prev}
                            variant="outline"
                            size="icon"
                            className="w-12 h-12 rounded-full border-slate-200 hover:border-primary/30 hover:text-primary hover:bg-primary/5 bg-white transition-all shadow-sm"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        {/* Dot indicators */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`rounded-full transition-all duration-300 ${i === currentIndex
                                            ? "w-6 h-2.5 bg-primary"
                                            : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <Button
                            onClick={next}
                            variant="default"
                            size="icon"
                            className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-white transition-all shadow-md"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
}
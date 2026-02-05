"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
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
        role: "Chairman",
        company: "Harmony Corporation",
        image: ChristianImage,
        content: "We thought a lot before choosing the Financial WordPress Theme because we wanted to sure our investment would yield results. This was clearly the best choice, it combines a fantastic design with great UI."
    },
    {
        id: 2,
        name: "Cintia Le Corre",
        role: "Partner & Managing Director",
        company: "Grandier Co.",
        image: CintiaImage,
        content: "When you are in the financial industry you know the image you have to project to people. You have to be agile and authoritative; Consulting WP lets us show clients that we are slick yet also have substance."
    },
    {
        id: 3,
        name: "Debbie Kübel-Sorger",
        role: "Chairman",
        company: "Kreutz Airlines",
        image: DebbieImage,
        content: "The demands for financial institutions have changed a bit. Obfuscation is no longer accepted, which is why this Business WordPress Theme is so perfect."
    },
    {
        id: 4,
        name: "Donald Simpson",
        role: "Chief Financial Officer",
        company: "Jamaica International",
        image: DonaldImage,
        content: "Consulting WordPress Theme is the way to go for financial institutions. We take pride in being a transparent and perfection oriented organization, and Consulting WP perfectly represents us."
    }
];

const tools = [
    "QuickBooks",
    "Xero",
    "Sage",
    "Zoho Books",
    "FreshBooks",
    "Wave",
    "Excel",
    "MYOB",
    "NetSuite",
    "Slack",
    "Microsoft Teams"
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

    const itemsToShow = isMobile ? 1 : 2;
    const visibleTestimonials = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
    }

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-8xl mx-auto px-6 md:px-12">

                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        testimonials
                    </h2>
                    {/* Yellow Underline Accent */}
                    <div className="w-16 h-1.5 bg-secondary rounded-full" />
                </div>

                {/* Slider Container */}
                <div className="flex items-center justify-between gap-4 md:gap-8">

                    {/* Prev Arrow */}
                    <button
                        onClick={prev}
                        className="w-12 h-12 flex items-center justify-center border border-slate-200 bg-white text-slate-400 hover:text-primary hover:border-primary transition-all shrink-0"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full overflow-hidden">
                        {visibleTestimonials.map((testimonial, idx) => (
                            <div key={`${testimonial.id}-${idx}`} className="flex flex-col md:flex-row bg-white h-auto md:h-[280px]"> {/* Fixed height for alignment */}

                                {/* Image Container (Left) */}
                                <div className="md:w-[220px] w-full shrink-0 relative h-[250px] md:h-full">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content Container (Right) */}
                                <div className="flex-1 p-8 flex flex-col justify-center bg-white">
                                    <div className="mb-4">
                                        <h4 className="text-xl font-bold text-primary">
                                            {testimonial.name}
                                        </h4>
                                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">
                                            {testimonial.role} <br className="hidden md:block" /> {testimonial.company}
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed italic">
                                        "{testimonial.content}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Next Arrow */}
                    <button
                        onClick={next}
                        className="w-12 h-12 flex items-center justify-center bg-primary text-white hover:bg-primary/90 transition-all shrink-0 shadow-lg"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Tools & Technologies Slider */}
                <div className="mt-20 pt-10 border-t border-slate-100">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-primary">
                            Tools & Technologies
                        </h3>
                        <p className="text-slate-500 mt-2">
                            We work with the tools you already use
                        </p>
                    </div>

                    <div className="relative w-full overflow-hidden bg-white/50 rounded-xl p-6">
                        <div className="flex w-max animate-marquee gap-16 items-center">
                            {/* Quadrupled list for seamless loop with 50% scroll keyframe */}
                            {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
                                <div key={i} className="text-2xl md:text-3xl font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap hover:text-primary transition-colors cursor-default select-none">
                                    {tool}
                                </div>
                            ))}
                        </div>
                        {/* Gradients for fade effect */}
                        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}

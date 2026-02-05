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
            </div>
        </section>
    );
}

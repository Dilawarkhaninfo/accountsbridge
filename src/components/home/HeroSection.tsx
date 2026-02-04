"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

// Specified Image Imports
import HeroImage1 from "../../../public/images/hero-image-4.png";
import HeroImage2 from "../../../public/images/hero-image-5.png";
import HeroImage3 from "../../../public/images/hero-image-3.png";

// --- Hero Content Data Types ---
interface SlideData {
    id: number;
    headline: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    image: StaticImageData;
    accentColor: string;
}

// --- Hero Content Data ---
const slides: SlideData[] = [
    {
        id: 1,
        headline: "Strategic Financial Advice for Growing Businesses",
        description: "Your partner in accounting, tax compliance, and long-term business growth. We help you navigate complexity with confidence.",
        ctaText: "Book Consultation",
        ctaLink: "/contact-us",
        image: HeroImage1,
        accentColor: "bg-primary", // Green
    },
    {
        id: 2,
        headline: "Scale Your Business from $1M to $5M+",
        description: "Expert advisory services designed to structure your financials, optimize cash flow, and fuel sustainable expansion.",
        ctaText: "Explore Services",
        ctaLink: "/services",
        image: HeroImage2,
        accentColor: "bg-secondary", // Yellow
    },
    {
        id: 3,
        headline: "Precision, Compliance & Peace of Mind",
        description: "Stay ahead of regulations with our proactive tax planning and audit support solutions. Zero stress, maximum clarity.",
        ctaText: "Get Started",
        ctaLink: "/contact-us",
        image: HeroImage3,
        accentColor: "bg-primary",
    },
];

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    // Animation Variants
    const slideVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.6, ease: "easeInOut" } },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    };

    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-slate-50 flex items-center">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0 pointer-events-none" />

            <div className="container relative z-10 h-full flex items-center px-4 md:px-10">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full gap-12 lg:gap-0">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center h-full order-2 lg:order-1 py-12 lg:py-0 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="space-y-8 max-w-2xl relative z-10"
                            >
                                {/* Animated Accent Line */}
                                <motion.div
                                    className={cn("h-1.5 w-24 rounded-full mb-6", slides[currentSlide].accentColor)}
                                    initial={{ width: 0 }}
                                    animate={{ width: 96 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />

                                <motion.h1
                                    variants={textVariants}
                                    className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-slate-900 tracking-tight"
                                >
                                    {slides[currentSlide].headline}
                                </motion.h1>

                                <motion.p
                                    variants={textVariants}
                                    className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg"
                                >
                                    {slides[currentSlide].description}
                                </motion.p>

                                <motion.div variants={textVariants} className="flex flex-wrap gap-4 pt-4">
                                    <Button
                                        size="lg"
                                        className="h-14 px-8 text-lg font-semibold rounded-md bg-primary hover:bg-[#096A35] text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
                                        asChild
                                    >
                                        <Link href={slides[currentSlide].ctaLink}>
                                            {slides[currentSlide].ctaText}
                                            {/* No arrow icon to match generic corporate style if desired, or keep it. User said 'jesy button navbar main hy' which is simple text usually. But navbar has 'Book Consultation'. Let's keep strict style. */}
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-14 px-8 text-lg font-semibold rounded-md border-2 border-slate-200 text-slate-700 hover:border-primary hover:text-primary bg-transparent transition-all"
                                        asChild
                                    >
                                        <Link href="/services">
                                            Our Services
                                        </Link>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Vertical Pagination Dots - Absolute Left Positioned */}
                        <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 hidden lg:flex">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={cn(
                                        "w-1.5 rounded-full transition-all duration-500 ease-in-out",
                                        currentSlide === index ? "h-12 " + slides[index].accentColor : "h-2 bg-slate-300 hover:bg-slate-400"
                                    )}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image Slide */}
                    <div className="w-full lg:w-1/2 h-full relative order-1 lg:order-2 flex items-center justify-center lg:justify-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 1.05, x: -50 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative w-full max-w-[500px] lg:max-w-[650px] aspect-[4/3] lg:aspect-auto lg:h-[80%] rounded-[2rem] overflow-hidden shadow-2xl lg:translate-x-12"
                            >
                                <Image
                                    src={slides[currentSlide].image}
                                    alt={slides[currentSlide].headline}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </motion.div>
                        </AnimatePresence>

                        {/* Decorative Circle */}
                        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-[-1]" />
                        <div className="absolute right-40 top-20 w-32 h-32 bg-secondary/10 rounded-full blur-2xl z-[-1]" />
                    </div>
                </div>
            </div>
        </section>
    );
}

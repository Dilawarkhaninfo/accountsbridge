"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, BarChart3, Users, Globe, Award, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

// Specified Image Imports
import HeroImage1 from "../../../public/images/hero-image-4.png";
import HeroImage2 from "../../../public/images/hero-image-5.png";
import HeroImage3 from "../../../public/images/hero-image-3.png";

// --- Hero Content Data Types ---
interface SlideData {
    id: number;
    tagline: string;
    headline: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    image: StaticImageData;
    accentColor: string;
    stats: { label: string; value: string; icon: React.ElementType }[];
}

// --- Hero Content Data ---
const slides: SlideData[] = [
    {
        id: 1,
        tagline: "Strategic Advisory & Accounting",
        headline: "Strategic Financial Advice for Growing Businesses",
        description: "Your partner in accounting, tax compliance, and long-term business growth. We help you navigate complexity with confidence.",
        ctaText: "Book Consultation",
        ctaLink: "/contact-us",
        image: HeroImage1,
        accentColor: "#0B7E3E",
        stats: [
            { label: "Client Satisfaction", value: "98%", icon: Users },
            { label: "Expert Advisors", value: "15+", icon: Award }
        ]
    },
    {
        id: 2,
        tagline: "Business Expansion Experts",
        headline: "Scale Your Business from $1M to $10M+",
        description: "Expert advisory services designed to structure your financials, optimize cash flow, and fuel sustainable expansion.",
        ctaText: "Explore Services",
        ctaLink: "/services",
        image: HeroImage2,
        accentColor: "#0B7E3E",
        stats: [
            { label: "Avg. Growth", value: "40%", icon: TrendingUp },
            { label: "Revenue Optimized", value: "$50M+", icon: BarChart3 }
        ]
    },
    {
        id: 3,
        tagline: "Compliance Excellence",
        headline: "Precision, Compliance & Absolute Peace of Mind",
        description: "Stay ahead of regulations with our proactive tax planning and audit support solutions. Zero stress, maximum clarity.",
        ctaText: "Get Started",
        ctaLink: "/contact-us",
        image: HeroImage3,
        accentColor: "#0B7E3E",
        stats: [
            { label: "Audit Pass Rate", value: "100%", icon: ShieldCheck },
            { label: "Global Reach", value: "24/7", icon: Globe }
        ]
    },
];

export function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slideData = slides[currentSlide];

    return (
        <section
            ref={containerRef}
            className="relative h-auto min-h-[650px] w-full overflow-hidden bg-white flex items-center pt-8 pb-8" // Increased min-height significantly
        >
            {/* --- Premium Background Elements --- */}

            {/* Soft mesh gradient blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[100px]"
                />
            </div>

            {/* Subtle Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"> {/* Increased gap */}

                    {/* Left: Content Wrapper */}
                    <div className="w-full lg:w-[45%] flex flex-col items-start text-left">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, transition: { duration: 0 } }} // Instant exit to avoid white flash
                                transition={{ duration: 0.3, ease: "easeOut" }} // Fast entry
                                className="space-y-6" // Increased spacing between elements
                            >
                                {/* Tagline */}
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/50">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500"> {/* +35% size: text-xs */}
                                        {slideData.tagline}
                                    </span>
                                </div>

                                {/* Headline */}
                                <h1 className="text-4xl md:text-5xl lg:text-[45px] font-bold tracking-tight text-slate-900 leading-[1.05]"> {/* +35% size: text-5xl -> 6xl/68px */}
                                    {slideData.headline.split(" ").map((word, i) => (
                                        <span
                                            key={i}
                                            className="inline-block mr-[0.2em]"
                                        >
                                            {word === "Strategic" || word === "Scale" || word === "Precision" ? (
                                                <span className="text-primary italic font-semibold">{word}</span>
                                            ) : word}
                                        </span>
                                    ))}
                                </h1>

                                {/* Description */}
                                <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl"> {/* +35% size: text-base -> text-xl */}
                                    {slideData.description}
                                </p>

                                {/* Buttons Container */}
                                <div className="flex flex-col sm:flex-row gap-5 pt-3">
                                    <Button
                                        size="lg"
                                        className="btn-lg btn-primary"
                                        asChild
                                    >
                                        <Link href={slideData.ctaLink}>
                                            <span className="relative z-10 flex items-center gap-3">
                                                {slideData.ctaText}
                                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </Link>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="btn-lg btn-outline"
                                        asChild
                                    >
                                        <Link href="/services">
                                            Our Methodology
                                        </Link>
                                    </Button>
                                </div>

                                {/* Trust Indicators - Compact */}
                                <div className="flex items-center gap-5 pt-6 border-t border-slate-100 w-full">
                                    <div className="relative group">
                                        {/* Splash effect behind avatars */}
                                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative flex -space-x-4">
                                            {[
                                                "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&h=100&auto=format&fit=crop",
                                                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&h=100&auto=format&fit=crop",
                                                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
                                                "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop"
                                            ].map((src, i) => (
                                                <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white bg-slate-100 overflow-hidden relative"> {/* Larger avatars */}
                                                    <Image
                                                        src={src}
                                                        alt="Expert Advisor"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            {[1, 2, 3, 4, 5].map((s) => <CheckCircle2 key={s} className="w-5 h-5 fill-current" />)} {/* Larger stars */}
                                        </div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">
                                            Trusted by 250+ Melbourne Businesses
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Visionary Visuals */}
                    <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0 } }} // Instant exit
                                transition={{ duration: 0.3, ease: "easeOut" }} // Fast entry
                                className="relative z-10 w-full max-w-[780px]" // Maximized width even more
                            >
                                {/* Main Image Container - Increased Height */}
                                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white"> {/* Taller aspect ratio 16/10 */}
                                    <Image
                                        src={slideData.image}
                                        alt={slideData.headline}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                                </div>

                                {/* Floating Stat Cards - Larger */}
                                <div
                                    className="absolute -right-6 top-[10%] z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-50 flex items-center gap-4 animate-in fade-in slide-in-from-right-4 duration-500"
                                >
                                    {/* Splash effect */}
                                    <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full -z-10" />

                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                        {React.createElement(slideData.stats[0].icon, { size: 24 })}
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-slate-900 leading-none">{slideData.stats[0].value}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{slideData.stats[0].label}</p>
                                    </div>
                                </div>

                                <div
                                    className="absolute -left-4 bottom-[15%] z-20 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-50 flex items-center gap-4 animate-in fade-in slide-in-from-left-4 duration-500"
                                >
                                    {/* Splash effect */}
                                    <div className="absolute -inset-4 bg-secondary/20 blur-2xl rounded-full -z-10" />

                                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary-foreground">
                                        {React.createElement(slideData.stats[1].icon, { size: 24 })}
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold text-slate-900 leading-none">{slideData.stats[1].value}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{slideData.stats[1].label}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* --- Slider Controls --- */}
                <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100/50">
                    <div className="flex gap-3">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={cn(
                                    "h-2 transition-all duration-300 rounded-full",
                                    currentSlide === i ? "w-10 bg-primary" : "w-2.5 bg-slate-200"
                                )}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-5">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Up Next</span>
                            <span className="text-xs font-bold text-slate-500 truncate max-w-[200px]">
                                {slides[(currentSlide + 1) % slides.length].tagline}
                            </span>
                        </div>
                        <button
                            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all group"
                        >
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
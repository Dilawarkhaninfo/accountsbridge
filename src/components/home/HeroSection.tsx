"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, BarChart3, Users, Globe, Award, Star, Zap, Layers, BookOpen, FileText, RefreshCw, Leaf, Receipt } from "lucide-react";
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
            className="relative h-auto min-h-[650px] w-full overflow-hidden bg-white flex items-center pt-8 pb-4"
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
                                    <Star className="w-3.5 h-3.5 text-secondary fill-secondary animate-pulse" />
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
                                                <span className="text-primary font-semibold">{word}</span>
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
                                        className="btn-primary btn-md"
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
                                        className="btn-outline btn-md"
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
                                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)} {/* Larger stars */}
                                        </div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">
                                            Trusted by 250+ Melbourne Businesses
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right: Visionary Visuals with 3D Depth */}
                    <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end perspective-[1500px]">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                className="relative z-10 w-full max-w-[780px] preserve-3d"
                            >
                                {/* Main Image Container - 3D Set */}
                                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] group border-4 border-white transform-gpu transition-all duration-700 hover:shadow-[0_70px_120px_-20px_rgba(0,0,0,0.3)]">
                                    <Image
                                        src={slideData.image}
                                        alt={slideData.headline}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Floating Stat Cards - 3D Projections */}

                                {/* Top Right Card - Popping Out */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20, z: -50, rotateY: 20 }}
                                    animate={{ opacity: 1, x: 0, z: 80, rotateY: -10 }}
                                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                                    className="absolute -right-8 top-[15%] z-30 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50 flex items-center gap-5 translate-z-[100px]"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                                        {React.createElement(slideData.stats[0].icon, { size: 28, strokeWidth: 2.5 })}
                                    </div>
                                    <div>
                                        <div className="flex items-baseline gap-1">
                                            <p className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                                                {slideData.stats[0].value}
                                            </p>
                                        </div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1.5 opacity-80">
                                            {slideData.stats[0].label}
                                        </p>
                                    </div>
                                    {/* 3D Depth Shine */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                                </motion.div>

                                {/* Bottom Left Card - Projecting Forward */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20, z: -50, rotateY: -20 }}
                                    animate={{ opacity: 1, x: 0, z: 100, rotateY: 12 }}
                                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                                    className="absolute -left-6 bottom-[20%] z-30 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-[-20px_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white/50 flex items-center gap-5 translate-z-[120px]"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-foreground shadow-inner">
                                        {React.createElement(slideData.stats[1].icon, { size: 28, strokeWidth: 2.5 })}
                                    </div>
                                    <div>
                                        <p className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                                            {slideData.stats[1].value}
                                        </p>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1.5 opacity-80">
                                            {slideData.stats[1].label}
                                        </p>
                                    </div>
                                    {/* 3D Depth Shine */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                                </motion.div>

                                {/* Subtle background glow for 3D depth */}
                                <div className="absolute -inset-10 bg-primary/5 blur-[120px] -z-10 rounded-full" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* --- Trusted Partners Carousel --- */}
                <div className="mt-8 pt-6 border-t border-slate-100/60 overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap shrink-0">
                            Our Technology Stack
                        </span>

                        <div className="flex-1 overflow-hidden">
                            <motion.div
                                className="flex items-center gap-16 md:gap-24"
                                animate={{ x: [0, -1035] }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                {/* Duplicated Logo Set for Seamless Loop */}
                                {[
                                    { name: "Xero", icon: <Zap size={18} className="fill-current" /> },
                                    { name: "MYOB", icon: <Layers size={18} /> },
                                    { name: "QuickBooks", icon: <BookOpen size={18} /> },
                                    { name: "HubDoc", icon: <FileText size={18} /> },
                                    { name: "Dext", icon: <RefreshCw size={18} /> },
                                    { name: "Sage", icon: <Leaf size={18} /> },
                                    { name: "Xero", icon: <Zap size={18} className="fill-current" /> },
                                    { name: "MYOB", icon: <Layers size={18} /> },
                                    { name: "QuickBooks", icon: <BookOpen size={18} /> },
                                    { name: "HubDoc", icon: <FileText size={18} /> },
                                    { name: "Dext", icon: <RefreshCw size={18} /> },
                                    { name: "Sage", icon: <Leaf size={18} /> },
                                ].map((partner, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group"
                                    >
                                        <div className="text-primary/60 group-hover:text-primary transition-colors">
                                            {partner.icon}
                                        </div>
                                        <span className="text-lg md:text-xl font-black tracking-tighter text-slate-900">
                                            {partner.name}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}